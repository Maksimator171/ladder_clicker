// --- ИГРОВЫЕ СОСТОЯНИЯ И ПЕРЕМЕННЫЕ ---

let displayedHeight = 0;
let lastRenderedHeight = -1;
let counterScale = 1.0;
let dangerFlash = 0.0;

let maxAltitudeReached = 0;
let unlockedTrackerCheckpoints = [0];
let markerBounce = 1.0;

let settingsState = {
    musicVol: 0.3,
    tapVol: 0.8,
    speakerVol: 0.8, // громкость колонки
    newtonVol: 0.8,  // громкость шаров
    sfxVol: 0.9,
    vibrate: true
};

let starfieldBackCanvas = null;
let starfieldFrontCanvas = null;
let lastPlaneSoundTime = 0; // Таймер кулдауна звука самолёта
let ufoGlowCanvas = null; // Кэш световой маски НЛО
let lastThunderTime = 0; // Кулдаун грома для грозового фронта

let bananaTapCounter = 0;

let cyberExtraAccessory = { type: null, id: null }; // 1 выбранный аксессуар для Киберпанка

let mimicSlots = ['wood', 'banana']; // 2 выбранные способности для Мимика

let quantumGlitch = 0; // Таймер квантового глитча (в кадрах)

let isVip = false;             // VIP-статус покупателя 👑
let hasAdFree = false;         // Отключение межстраничной рекламы
let starterPack = {
    unlocked: false,           // Открылся ли оффер на 500 м
    startTime: 0,              // Время старта таймера на 48 часов
    purchased: false           // Куплен ли набор
};

let radarState = {
    prompted: false, // Был ли уже показ окна
    enabled: false   // Согласился ли игрок
};

// Функция вызова окна благодарности
function showThankYouModal(title, desc) {
    const modal = document.getElementById('thank-you-modal');
    const titleEl = document.getElementById('thank-title');
    const descEl = document.getElementById('thank-desc');
    const closeBtn = document.getElementById('btn-close-thank');

    if (!modal) return;

    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerHTML = desc; // <-- СТРОГО innerHTML

    modal.classList.remove('hidden');
    AudioEngine.play('donate_sound', 1.0);

    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
}

// Универсальное окно подтверждения покупки за золото
let pendingConfirmAction = null;

function showConfirmPurchase(title, desc, cost, onConfirm) {
    const modal = document.getElementById('confirm-purchase-modal');
    if (!modal) return;
    document.getElementById('confirm-title').innerText = title;
    document.getElementById('confirm-desc').innerHTML = desc; // <-- СТРОГО innerHTML
    document.getElementById('confirm-cost').innerHTML = `${cost} <img src="assets/golden_nut.webp" class="ui-ico">`;
    pendingConfirmAction = onConfirm;
    modal.classList.remove('hidden');
    if (typeof AudioEngine !== 'undefined') AudioEngine.play('click', 0.5);
}

// Привязка кнопок окна подтверждения
const btnConfirmYes = document.getElementById('btn-confirm-yes');
const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
if (btnConfirmYes) {
    btnConfirmYes.onclick = () => {
        const modal = document.getElementById('confirm-purchase-modal');
        if (modal) modal.classList.add('hidden');
        if (typeof pendingConfirmAction === 'function') {
            pendingConfirmAction();
            pendingConfirmAction = null;
        }
    };
}
if (btnConfirmCancel) {
    btnConfirmCancel.onclick = () => {
        const modal = document.getElementById('confirm-purchase-modal');
        if (modal) modal.classList.add('hidden');
        pendingConfirmAction = null;
    };
}

// === МОНЕТИЗАЦИЯ И ДОНАТ ===
const donateModal = document.getElementById('donate-modal');
const btnOpenDonate = document.getElementById('btn-open-donate');
const btnCloseDonate = document.getElementById('btn-close-donate');

if (btnOpenDonate && donateModal) {
    btnOpenDonate.onclick = () => donateModal.classList.remove('hidden');
}
if (btnCloseDonate && donateModal) {
    btnCloseDonate.onclick = () => donateModal.classList.add('hidden');
}

const starterModal = document.getElementById('starter-modal');
const btnOpenStarter = document.getElementById('btn-open-starter');
const btnCloseStarter = document.getElementById('btn-close-starter');

if (btnOpenStarter && starterModal) {
    btnOpenStarter.onclick = () => starterModal.classList.remove('hidden');
}
if (btnCloseStarter && starterModal) {
    btnCloseStarter.onclick = () => starterModal.classList.add('hidden');
}

// Покупка Starter Pack
// Покупка Starter Pack (убираем эмодзи и дублированную строку)
const btnBuyStarter = document.getElementById('btn-buy-starter');
if (btnBuyStarter) {
    btnBuyStarter.onclick = () => {
        starterPack.purchased = true;
        isVip = true;

        goldenNuts += 179;
        nuts += 1799;
        boxesOwned += 10;
        userCases.wooden = boxesOwned;
        userCases.iron = (userCases.iron || 0) + 5;

        if (!ownedSpeakerSkins.includes('cyber')) {
            ownedSpeakerSkins.push('cyber');
        }

        particles.push({ x: canvas.width / 2, y: canvas.height * 0.4, text: 'НАБОР НОВИЧКА ПОЛУЧЕН!', color: '#f1c40f', alpha: 2.5, speed: 2 });

        uiNuts.innerText = `${nuts}`;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        starterModal.classList.add('hidden');
        if (btnOpenStarter) btnOpenStarter.classList.add('hidden');
        showThankYouModal('НАБОР НОВИЧКА!', 'Гора ресурсов и легендарный скин «Кибер» твои! Спасибо за поддержку <img src="assets/crown.webp" class="ui-ico-sm">');
        saveGame();
    };
}

// Покупки золота и AdFree
document.querySelectorAll('.mock-buy-btn').forEach(btn => {
    btn.onclick = () => {
        const type = btn.dataset.type;
        isVip = true;

        if (type === 'adfree') {
            hasAdFree = true;
            btn.innerText = 'Куплено';
            btn.disabled = true;
            btn.style.opacity = '0.5';
            if (donateModal) donateModal.classList.add('hidden');
            showThankYouModal('БЕЗ РЕКЛАМЫ!', 'Баннеры отключены навсегда! Спасибо за вклад в развитие игры ❤️');
        } else if (type === 'gold') {
            const amount = parseInt(btn.dataset.amount, 10);
            goldenNuts += amount;
            if (donateModal) donateModal.classList.add('hidden');
            showThankYouModal('ЗОЛОТО ЗАЧИСЛЕНО!', `+${amount} <img src="assets/golden_nut.webp" class="ui-ico"> уже на балансе. Приятных покупок!`);
        }

        saveGame();
    };
});

// Секундный тикер для таймера Starter Pack (48 часов)
setInterval(() => {
    if (!starterPack.unlocked || starterPack.purchased) {
        if (btnOpenStarter && !btnOpenStarter.classList.contains('hidden')) btnOpenStarter.classList.add('hidden');
        return;
    }

    const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;
    const timeLeft = FORTY_EIGHT_HOURS - (Date.now() - starterPack.startTime);

    if (timeLeft <= 0) {
        // Время истекло — оффер закрывается навсегда
        starterPack.purchased = true;
        if (btnOpenStarter) btnOpenStarter.classList.add('hidden');
        if (starterModal) starterModal.classList.add('hidden');
        saveGame();
        return;
    }

    if (btnOpenStarter) btnOpenStarter.classList.remove('hidden');

    const h = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
    const m = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');

    const modalTimer = document.getElementById('starter-modal-timer');
    if (modalTimer) modalTimer.innerText = `${h}:${m}:${s}`;
}, 1000);

// === СИСТЕМА РЕКЛАМЫ И БАФФОВ ===
let adState = {
    // Временные баффы (остаток времени в миллисекундах)
    turboTimer: 0,      // x3 ко всей высоте
    fortuneTimer: 0,    // +15 к удаче (стек до 30 мин)
    frenzyTimer: 0,     // Гайкопад: 100% 🔩 за тап

    // Кулдауны наград (timestamp следующей доступности)
    freeIronSafeTime: 0, // 10 минут кулдаун
    freeNutsTime: 0,     // 5 минут кулдаун

    // Рекламный стрик (1–10)
    streakCount: 0,          // Прогресс 0..10
    streakLastDay: 0,        // Timestamp для ежедневного сброса в 00:00
    claimedStreakRewards: [] // Забранные награды текущего дня
};

// Единый обработчик просмотра рекламы
function watchRewardedAd(placementName, onSuccess) {
    // ЗАГЛУШКА ДЛЯ ТЕСТОВ (сюда позже подключается SDK Яндекса, VK или TG)
    console.log(`[AdEngine] Запуск Rewarded Video: ${placementName}`);

    // Имитируем успешный просмотр
    const onRewardEarned = () => {
        // 1. Проверяем ежедневный сброс стрика (в 00:00)
        checkAdStreakDailyReset();

        // 2. Засчитываем просмотр в стрик (максимум 10)
        if (adState.streakCount < 10) {
            adState.streakCount++;

            // Звук победы играет для наград, но НЕ при реролле и НЕ при рубеже (у рубежа звучит pickupCoin5)!
            if (placementName !== 'case_reroll' && placementName !== 'milestone_x2') {
                AudioEngine.play('win', 0.7);
            }

            // Обновляем текст кнопки на экране [🎬 3/10]
            const streakBtnText = document.getElementById('ad-streak-btn-text');
            if (streakBtnText) streakBtnText.innerText = `${adState.streakCount}/10`;
        }

        // 3. Пассивка лестницы «Билборд» (Спонсорский контракт)
        if (hasMech('billboard')) {
            const bNuts = addNuts(20);
            const bGold = addGoldenNuts(1);
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.4,
                text: `📺 Спонсорр: +${bNuts} и +${bGold}!`,
                color: '#00d2d3',
                font: 'bold 20px sans-serif',
                alpha: 2.0,
                speed: 1.8
            });
        }

        // 4. Выполняем целевую награду
        if (typeof onSuccess === 'function') onSuccess();

        saveGame();
    };

    onRewardEarned();
}

// Проверка сброса стрика каждые 24 часа (в полночь)
function checkAdStreakDailyReset() {
    const now = new Date();
    const currentDayId = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    if (adState.streakLastDay !== currentDayId) {
        adState.streakCount = 0;
        adState.claimedStreakRewards = [];
        adState.streakLastDay = currentDayId;
    }
}

// Активация Турбо-рывка
function activateTurboBoost(customSeconds = null) {
    watchRewardedAd('turbo_x3', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        const durationMs = (customSeconds ? customSeconds * 1000 : 60000) * mult;
        adState.turboTimer = Math.max(adState.turboTimer, 0) + durationMs;

        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.35,
            img: canvasIcoTurbo,
            imgSize: 32,
            text: `ТУРБО-ДОХОД x3 (${Math.round(durationMs / 1000)}с)!`,
            color: '#e67e22',
            font: 'bold 24px sans-serif',
            alpha: 2.2,
            speed: 1.5
        });
    });
}

// === ПЕРЕМЕННЫЕ ДЛЯ ЭНДГЕЙМ-ЛЕСТНИЦ ===
let cosmicMomentum = 0; // Инерция Млечного Пути (м/с)
let blackHoleBonus = 0.0; // От 0.0 до 10.0 (+1000%)
let wasBlackHole = false; // Флаг для отслеживания снятия Чёрной дыры

function getGlobalMultiplier() {
    // Возвращает множитель. 0% = 1.0, +1000% = 11.0
    return hasMech('endless') ? (1.0 + blackHoleBonus) : 1.0;
}

// База 6 рубежей с иллюстрациями и текстами
const HEIGHT_MILESTONES = [
    {
        height: 250, reward: 5, name: 'Крыши', icon: '🏙️', file: 'assets/roofs_100.webp',
        desc: 'Выше только птицы и цены на аренду. Первая сотня за спиной!'
    },
    {
        height: 1000, reward: 15, name: 'Грозовой фронт', icon: '⚡', file: 'assets/storm_1000.webp',
        desc: 'Держись крепче за мокрые перекладины. Впереди открытый воздух!'
    },
    {
        height: 10000, reward: 35, name: 'Стратосфера', icon: '✈️', file: 'assets/strato10000.webp',
        desc: 'Высота гражданской авиации. Земля уже заметно закругляется.'
    },
    {
        height: 100000, reward: 75, name: 'Космос', icon: '🛰️', file: 'assets/cosmos_100000.webp',
        desc: 'Гравитация сдалась. Ты официально в полной невесомости!'
    },
    {
        height: 1000000, reward: 150, name: 'Млечный Путь', icon: '🌌', file: 'assets/milky_way_1000000.webp',
        desc: 'Один миллион метров. Ты покинул пределы разумного.'
    },
    {
        height: 10000000, reward: 300, name: 'Бескрайний простор', icon: '🐋', file: 'assets/location_10000000.webp',
        desc: 'Конец карты? Нет, только самое начало абсолютной пустоты.'
    }
];

// Активация Удачи
function activateFortuneBoost(customMinutes = null, luckAdd = 15) {
    watchRewardedAd('fortune_luck', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        const durationMs = (customMinutes ? customMinutes * 60000 : 10 * 60000) * mult;
        const maxCapMs = 30 * 60000 * mult;

        adState.fortuneTimer = Math.min(maxCapMs, adState.fortuneTimer + durationMs);

        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.35,
            img: canvasIcoClover,
            imgSize: 32,
            text: `УДАЧА +${luckAdd}!`,
            color: '#2ecc71',
            font: 'bold 24px sans-serif',
            alpha: 2.2,
            speed: 1.5
        });
    });
}

const DUPLICATE_GOLD_REWARDS = {
    common: 5,
    rare: 10,
    epic: 35,
    legendary: 150
};

let dailyDeal = {
    type: null,           // 'skin' | 'talisman'
    id: null,
    basePrice: 0,
    salePrice: 0,
    currentDayId: '',     // Идентификатор дня 'YYYY-M-D' для плановой смены в 00:00
    adRerollsLeft: 5      // 5 попыток реролла в день
};


let claimedMilestones = []; // Сохраненные забранные рубежи

let pendingMilestone = null;

function checkHeightMilestones() {
    for (const m of HEIGHT_MILESTONES) {
        if (currentHeight >= m.height && !claimedMilestones.includes(m.height)) {
            claimedMilestones.push(m.height);
            pendingMilestone = m;

            // Синхронизируем лидерборд
            if (typeof submitScoreToLeaderboard === 'function') submitScoreToLeaderboard(true);
            saveGame();

            // Показываем открытку
            showMilestoneModal(m);
            break;
        }
    }
}

// === КУСОЧНО-ЛИНЕЙНАЯ ЛОГИКА ШКАЛЫ (7 ТОЧЕК, 6 РАВНЫХ СЕГМЕНТОВ) ===
const TRACKER_STAGES = [0, 250, 1000, 10000, 100000, 1000000, 10000000];

// === ЛОР И ДАННЫЕ ЛОКАЦИЙ ДЛЯ КАРТОЧКИ «БОРТОВОЙ ЖУРНАЛ» ===
const STAGES_LORE = [
    {
        id: 0, height: 0, name: 'Хрущевка', image: 'assets/loc_0.webp',
        desc: 'Родной двор. Панельные джунгли и шуршание старых деревянных перекладин. Здесь начинается твой бесконечный путь.'
    },
    {
        id: 1, height: 250, name: 'Крыши', image: 'assets/loc_250.webp',
        desc: 'Выше антенн, голубей и городских пробок. Первая сотня метров за спиной, а воздух вокруг становится свежее.'
    },
    {
        id: 2, height: 1000, name: 'Грозовой Фронт', image: 'assets/loc_1000.webp',
        desc: 'Стены из плотных туч, ослепительные вспышки молний и запах озона. Перекладины мокрые и скользкие, держись крепче!'
    },
    {
        id: 3, height: 10000, name: 'Стратосфера', image: 'assets/loc_10000.webp',
        desc: 'Край атмосферы Земли. Небо темнеет до глубокого ультрамарина, а далеко внизу отчетливо виден синий изгиб планеты.'
    },
    {
        id: 4, height: 100000, name: 'Открытый Космос', image: 'assets/loc_100000.webp',
        desc: 'Орбита редких спутников и вечная молчаливая тишина. Гравитация сдалась — только лестница ведет все выше.'
    },
    {
        id: 5, height: 1000000, name: 'Млечный Путь', image: 'assets/loc_1000000.webp',
        desc: 'Спирали далеких галактик, мерцание туманностей и звездная пыль. Миллион метров над земными проблемами.'
    },
    {
        id: 6, height: 10000000, name: 'Бескрайний простор', image: 'assets/loc_10000000.webp',
        desc: 'Горизонт событий и край ведомой Вселенной. Абсолютная высота, где время сливается с космическим пространством.'
    }
];

let activeLocationStageCard = null;

function showLocationCard(stageIndex, checkpointEl) {
    const card = document.getElementById('location-card');
    if (!card) return;

    if (activeLocationStageCard === stageIndex && !card.classList.contains('hidden')) {
        hideLocationCard();
        return;
    }

    activeLocationStageCard = stageIndex;
    const lore = STAGES_LORE[stageIndex];
    if (!lore) return;

    const isUnlocked = maxAltitudeReached >= lore.height;

    const imgEl = document.getElementById('loc-card-img');
    const badgeEl = document.getElementById('loc-card-badge');
    const titleEl = document.getElementById('loc-card-title');
    const heightEl = document.getElementById('loc-card-height');
    const descEl = document.getElementById('loc-card-desc');

    if (isUnlocked) {
        if (imgEl) {
            imgEl.src = lore.image;
            imgEl.style.filter = 'none';
        }
        if (badgeEl) {
            badgeEl.innerText = 'ИССЛЕДОВАНО';
            badgeEl.style.background = 'rgba(46, 204, 113, 0.85)';
            badgeEl.style.color = '#fff';
            badgeEl.style.border = '1px solid #2ecc71';
        }
        if (titleEl) {
            titleEl.innerText = lore.name;
            titleEl.style.color = '#00d2ff';
        }
        if (heightEl) {
            heightEl.innerText = `Высота: ${lore.height.toLocaleString('ru-RU')} м`;
            heightEl.style.color = '#f1c40f';
        }
        if (descEl) {
            descEl.innerText = lore.desc;
        }
    } else {
        if (imgEl) {
            imgEl.src = lore.image;
            imgEl.style.filter = 'brightness(0.12) grayscale(1) drop-shadow(0 0 5px rgba(231, 76, 60, 0.5))';
        }
        if (badgeEl) {
            badgeEl.innerText = 'СИГНАЛ ПОТЕРЯН';
            badgeEl.style.background = 'rgba(231, 76, 60, 0.85)';
            badgeEl.style.color = '#fff';
            badgeEl.style.border = '1px solid #e74c3c';
        }
        if (titleEl) {
            titleEl.innerText = 'Неизвестный сектор';
            titleEl.style.color = '#e74c3c';
        }
        const needed = Math.max(0, Math.ceil(lore.height - currentHeight));
        if (heightEl) {
            heightEl.innerText = `Цель: ${lore.height.toLocaleString('ru-RU')} м (Осталось: ${needed.toLocaleString('ru-RU')} м)`;
            heightEl.style.color = '#e67e22';
        }
        if (descEl) {
            descEl.innerText = 'Датчики фиксируют аномалии на этой высоте. Продолжайте подъем, чтобы расшифровать данные.';
        }
    }

    if (checkpointEl) {
        const cpRect = checkpointEl.getBoundingClientRect();
        const centerY = cpRect.top + cpRect.height / 2;
        card.style.top = `${centerY}px`;
    }

    card.classList.remove('hidden');
    AudioEngine.play('click', 0.5);
}

function hideLocationCard() {
    const card = document.getElementById('location-card');
    if (card) card.classList.add('hidden');
    activeLocationStageCard = null;
}

function getStageProgress(meters) {
    if (!meters || meters <= 0) return 0;
    const numSegments = TRACKER_STAGES.length - 1; // 6 сегментов
    const segmentWeight = 100 / numSegments;

    for (let i = 0; i < numSegments; i++) {
        const start = TRACKER_STAGES[i];
        const end = TRACKER_STAGES[i + 1];
        if (meters < end) {
            const localProgress = (meters - start) / (end - start);
            return (i * segmentWeight) + (localProgress * segmentWeight);
        }
    }
    return 100;
}

function updateAltitudeTrackerUI() {
    maxAltitudeReached = Math.max(maxAltitudeReached, currentHeight);

    // Заливка и ползунок привязаны к текущей высоте (currentHeight)
    const currentPct = Math.min(100, Math.max(0, getStageProgress(currentHeight)));

    const trackFill = document.getElementById('altitude-track-fill');
    const marker = document.getElementById('altitude-marker');

    if (trackFill) trackFill.style.height = `${currentPct}%`;
    if (marker) {
        marker.style.bottom = `${currentPct}%`;
        if (Math.abs(markerBounce - 1.0) > 0.001) {
            marker.style.transform = `translate(-50%, 50%) scale(${markerBounce.toFixed(3)})`;
        } else {
            marker.style.transform = `translate(-50%, 50%)`;
        }
    }

    // Статус открытых иконок рассчитывается строго от maxAltitudeReached
    let nextTargetStage = -1;
    for (let i = 0; i < TRACKER_STAGES.length; i++) {
        if (maxAltitudeReached < TRACKER_STAGES[i]) {
            nextTargetStage = i;
            break;
        }
    }

    const checkpoints = document.querySelectorAll('.altitude-checkpoint');
    checkpoints.forEach(cp => {
        const stg = parseInt(cp.dataset.stage, 10);
        if (isNaN(stg)) return;

        const thresh = TRACKER_STAGES[stg];
        if (maxAltitudeReached >= thresh) {
            if (!unlockedTrackerCheckpoints.includes(stg)) {
                unlockedTrackerCheckpoints.push(stg);
                cp.classList.add('unlock-burst');
                AudioEngine.play('win', 0.8);
                setTimeout(() => cp.classList.remove('unlock-burst'), 650);
            }
            cp.classList.remove('locked', 'target-pulse');
            cp.classList.add('unlocked');
        } else {
            cp.classList.remove('unlocked', 'unlock-burst');
            cp.classList.add('locked');
            if (stg === nextTargetStage) {
                cp.classList.add('target-pulse');
            } else {
                cp.classList.remove('target-pulse');
            }
        }
    });
}

function showMilestoneModal(m) {
    pendingMilestone = m; // <-- ОБЯЗАТЕЛЬНО: привязываем рубеж к модалке!

    const modal = document.getElementById('milestone-modal');
    const title = document.getElementById('ms-title');
    const desc = document.getElementById('ms-desc');
    const img = document.getElementById('ms-img');
    const icon = document.getElementById('ms-placeholder-icon');
    const btnX2 = document.getElementById('btn-ms-claim-x2');
    const btnNormal = document.getElementById('btn-ms-claim-normal');
    const btnBox = document.getElementById('ms-buttons-box');

    if (!modal) return;

    title.innerText = `${m.height.toLocaleString()} м — ${m.name}`;
    desc.innerText = m.desc;
    icon.innerText = m.icon;

    img.style.display = 'none';
    icon.style.display = 'flex';
    img.src = m.file;
    img.onload = () => {
        img.style.display = 'block';
        icon.style.display = 'none';
    };

    btnX2.innerHTML = `▶ Удвоить за рекламу (+${m.reward * 2} <img src="assets/golden_nut.webp" class="ui-ico-sm">)`;
btnNormal.innerHTML = `Забрать обычную (+${m.reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)`;

    // Блокируем кнопки на 1 секунду от случайных тапов
    if (btnBox) {
        btnBox.style.pointerEvents = 'none';
        btnBox.style.opacity = '0.5';
        setTimeout(() => {
            btnBox.style.pointerEvents = 'auto';
            btnBox.style.opacity = '1';
        }, 1000);
    }

    AudioEngine.play('passage', 1.0);
    modal.classList.remove('hidden');

    btnNormal.onclick = () => claimMilestoneReward(false);
    btnX2.onclick = () => {
        watchRewardedAd('milestone_x2', () => claimMilestoneReward(true));
    };
}

function claimMilestoneReward(isDouble = false) {
    const modal = document.getElementById('milestone-modal');

    // Если рубеж почему-то пуст, просто закрываем окно и не крашимся
    if (!pendingMilestone) {
        if (modal) modal.classList.add('hidden');
        return;
    }

    const mult = isDouble ? 2 : 1;
    const awardedMilestoneGold = addGoldenNuts(pendingMilestone.reward * mult);

    AudioEngine.play('pickupCoin5', 1.0);

    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.4,
        text: `+${awardedMilestoneGold}!`,
        color: '#f1c40f',
        font: 'bold 26px sans-serif',
        alpha: 2.2,
        speed: 2
    });

    const modalGold = document.getElementById('cases-modal-gold');
    if (modalGold) modalGold.innerText = goldenNuts;

    if (modal) modal.classList.add('hidden');

    pendingMilestone = null;
    saveGame();
}

// === 1. КОНФИГУРАЦИЯ ПРОГРЕССИИ И ЦЕН МАГАЗИНА ===
const UPGRADES_CONFIG = {
    click: {
        basePrices: [10, 20, 35, 55, 80, 110, 150, 200, 270, 360, 480, 630, 820, 1050, 1350],
        growthRate: 1.18,
        basePower: 1,
        powerPerLevel: 1
    },
    speaker: {
        basePrices: [50, 120, 290, 430, 620, 880, 1220, 1680, 2300, 3100, 4150, 5500, 7300],
        growthRate: 1.18,
        basePower: 0,
        powerPerLevel: 2
    },
    newton: {
        basePrices: [75, 150, 500, 750, 1200, 1950, 2700, 3700, 5000, 6700],
        growthRate: 1.18,
        basePower: 0,
        powerPerLevel: 5
    }
};

// Функция точного расчёта цены с учётом скидок скинов (Изолента, Готика)
function getUpgradeCost(type, level) {
    const cfg = UPGRADES_CONFIG[type];
    if (!cfg) return 0;

    let price = 0;
    if (level < cfg.basePrices.length) {
        price = cfg.basePrices[level];
    } else {
        const lastBase = cfg.basePrices[cfg.basePrices.length - 1];
        const extraLevels = level - cfg.basePrices.length + 1;
        price = Math.floor(lastBase * Math.pow(cfg.growthRate, extraLevels));
    }

    // ИСПРАВЛЕНО: только одна переменная discount
    const discount = getActiveLadderBuffs().discount || 0;
    return Math.max(1, Math.floor(price * (1 - discount)));
}

//const flameY = xx;

let visualHouseHeight = 0; // Плавная высота камеры для мягкого скролла домов
let currentHeight = 0;
let clickLevel = 0;     // <-- ДОБАВИЛИ ЭТУ СТРОКУ
let clickPower = 1;
let baseClickPower = 1; // Чистый урон без скинов
let upgradeCost = 10;

let nuts = 0;           // Обычные гайки 🔩
let goldenNuts = 0;     // Золотые гайки за повторки 🟡
let boxesOwned = 0;
let clicksForBox = 0;
let pityStage = 0;          // Номер текущего порога гаранта
let clicksNeeded = 40;      // Кейс #0: стартуем ровно с 40 кликов
function getClicksNeeded(stage) {
    const thresholds = [40, 50, 60, 70, 80, 90, 100];
    return stage < thresholds.length ? thresholds[stage] : 100;
}

// Экипированные предметы
let currentSpeakerSkin = 'old';
let currentNewtonSkin = 'steel';
let currentTalisman = null;

// Инвентарь обвесов игрока
let ownedSpeakerSkins = ['old'];
let ownedNewtonSkins = ['steel'];
let ownedTalismans = []; //строка 123

const canvasIcoTv = new Image(); canvasIcoTv.src = 'assets/ico_ad_tv.webp';

const moonImg = new Image();
moonImg.src = 'assets/moon.webp';

const canvasIcoCrown = new Image(); canvasIcoCrown.src = 'assets/crown.webp';

// === КЭШ АССЕТОВ ДЛЯ ПАРТИКЛОВ КАНВАСА ===
const canvasIcoNut = new Image(); canvasIcoNut.src = 'assets/nut.webp';
const canvasIcoGold = new Image(); canvasIcoGold.src = 'assets/golden_nut.webp';
const canvasIcoWoodenBox = new Image(); canvasIcoWoodenBox.src = 'assets/wooden_box.webp';
const canvasIcoIronBox = new Image(); canvasIcoIronBox.src = 'assets/iron_box.webp';
const canvasIcoGoldBox = new Image(); canvasIcoGoldBox.src = 'assets/golden_box.webp';

// Иконки баффов для всплывающих уведомлений:
const canvasIcoClover = new Image(); canvasIcoClover.src = 'assets/clover_lucky.webp';
const canvasIcoTurbo = new Image(); canvasIcoTurbo.src = 'assets/x3_bust.webp';
const canvasIcoNutRain = new Image(); canvasIcoNutRain.src = 'assets/nut_rain.webp';
const canvasIcoRobotHand = new Image(); canvasIcoRobotHand.src = 'assets/robot_hand.webp';
const canvasIcoTimeSkip = new Image(); canvasIcoTimeSkip.src = 'assets/time_skip.webp';

// === АССЕТ МОЛНИИ (ДЛЯ ПЛАЗМЫ И ЭФФЕКТОВ) ===
const lightningImg = new Image();
lightningImg.src = 'assets/lighting.webp';

// === КОСМИЧЕСКИЙ МУСОР ===
const cosmicDebrisImg = new Image();
cosmicDebrisImg.src = 'assets/cosmic_debris.webp'; // Проверь правильность пути и расширения файла

// === АРТ ГОРЫ (300м - 10000м) ===
const mountainImg = new Image();
mountainImg.src = 'assets/mountain.webp';

// === АРТ ЗЕМЛИ (8000м - 150000м) ===
const planetEarthImg = new Image();
planetEarthImg.src = 'assets/planet_earth.webp';

// === АРТЫ ТЕЛЕВЫШКИ (250м - 1000м) ===
const towerBodyImg = new Image();
towerBodyImg.src = 'assets/tower_body.webp';

const towerHeadImg = new Image();
towerHeadImg.src = 'assets/tower_head.webp';

// Спрайты в памяти
const speakerSprite = new Image();

const newtonSprite = new Image();
// Для шариков подгрузится при выборе скина

// === ПЛАЗМЕННЫЕ ШАРЫ И ЗЕМЛЯ: НОВЫЕ СОСТОЯНИЯ ===
let plasmaHeat = 0.0;           // Степень раскала плазмы (от 0.0 до 1.0)
let lastPlayerTapTime = Date.now(); // Время последнего ручного тапа
let plasmaBurstTimer = null;    // Интервал очереди кликов
let plasmaBurstRemaining = 0;   // Счётчик оставшихся кликов в очереди

// Подсчёт количества активных временных баффов для скина «Земля»
function getActiveTemporaryBuffsCount() {
    let count = 0;
    if (typeof adState !== 'undefined') {
        if (adState.turboTimer > 0) count++;
        if (adState.fortuneTimer > 0) count++;
        if (adState.frenzyTimer > 0) count++;
        if (adState.autotapTimer > 0) count++;
    }
    return count;
}

// Множитель +25% за каждый бафф для шаров «Земля»
function getPlanetBuffMultiplier() {
    const isPlanet = currentNewtonSkin === 'planet' || 
        (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'planet');
    if (!isPlanet) return 1.0;
    return 1.0 + (getActiveTemporaryBuffsCount() * 0.25);
}

// --- ТАЙМЕРЫ И ПЕРЕМЕННЫЕ ДЛЯ МЕХАНИК ЛЕСТНИЦ ---
let newtonHitCount = 0;       // Счётчик ударов шаров (для Бильярдного #8)
let speakerPulseCount = 0;    // Счётчик басов (для Абсолютного динамика)
let activePlayBoxTimer = 0;   // Накопленное время (мс)
let isTimedBoxReady = false;  // Флаг: готов ли ящик (кап = 1 шт.)
const btnClaimTimedBox = document.getElementById('btn-claim-timed-box');
const timedBoxText = document.getElementById('timed-box-text');
let totalClicks = 0;
let clickTimestamps = []; // Точный массив временных меток кликов
let newYearCounter = 0;     // Счетчик Новогодней
let newYearTarget = Math.floor(150 + Math.random() * 100);
let ufoBonusTimer = 0;      // Таймер НЛО
let retroCoin = { active: false, x: 0, y: 0, size: 45 }; // Монетка Ретро
let neonRerollUsed = false; // Флаг реролла для Неоновой
let isPointerDown = false;  // Для свайпов Ледяной

// === АССЕТЫ ПОДАРКА НЛО ===
const ufoGiftImg = new Image();
ufoGiftImg.src = 'assets/ufo_gift.webp';

function claimUfoGift(targetX, targetY) {
    if (!ufoGift.active) return;
    ufoGift.active = false;

    let bonusTxt = "";
    let bonusImg = null;

    if (ufoGift.rewardType === 0) {
        const n = addNuts(250);
        bonusTxt = `+${n}`;
        bonusImg = canvasIcoNut;
        AudioEngine.play('gaiki', 0.8);
    } else if (ufoGift.rewardType === 1) {
        userCases.wooden = (userCases.wooden || 0) + 1;
        boxesOwned = userCases.wooden;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        bonusTxt = "+1 КЕЙС!";
        bonusImg = canvasIcoWoodenBox;
        AudioEngine.play('case_drop_by_click', 0.9);
    } else if (ufoGift.rewardType === 2) {
        userCases.iron = (userCases.iron || 0) + 1;
        bonusTxt = "+1 СЕЙФ!";
        bonusImg = canvasIcoIronBox;
        AudioEngine.play('win', 0.85);
    } else {
        const ufoGold = addGoldenNuts(25);
        bonusTxt = `+${ufoGold}`;
        bonusImg = canvasIcoGold;
        AudioEngine.play('pickupCoin5', 1.0);
    }

    particles.push({
        x: targetX,
        y: targetY,
        img: bonusImg,
        imgSize: 28,
        text: bonusTxt,
        color: '#4cd137',
        font: 'bold 28px sans-serif',
        alpha: 2.2,
        speed: 1.8
    });

    shakeTime = Math.max(shakeTime, 8);
    saveGame();
}

let ufoGift = {
    active: false,
    x: 0, y: 0,
    startX: 0, startY: 0,
    targetX: 0, targetY: 0,
    progress: 0,
    rewardType: 0 // 0: гайки, 1: деревянный ящик, 2: железный сейф, 3: золото
};

// Проверка наличия механики у текущей лестницы (включая АБСОЛЮТ)
function hasMech(mech) {
    const effId = currentEffectId || currentSkinId;
    if (effId === 'absolute' && mech !== 'mimic') return true;

    // МИМИК: проверяем наличие механики в обоих слотах
    if (effId === 'mimic') {
        if (mech === 'mimic') return true;
        return mimicSlots.some(slotId => {
            const s = LADDER_SKINS[slotId];
            return s && s.mechanics && s.mechanics.includes(mech);
        });
    }

    const skin = LADDER_SKINS[effId];
    return skin && skin.mechanics && skin.mechanics.includes(mech);
}

// Подсчет всей текущей удачи игрока (Лестница + Талисман)
function getTotalLuck() {
    const ladderBuffs = getActiveLadderBuffs();
    let luck = ladderBuffs.luck || 0;
    if (currentTalisman && TALISMANS[currentTalisman]) {
        luck += TALISMANS[currentTalisman].luck;
    }
    // Бонус удачи от доп. брелока Киберпанка
    if (hasMech('cyber') && cyberExtraAccessory.type === 'talismans' && cyberExtraAccessory.id && TALISMANS[cyberExtraAccessory.id]) {
        luck += TALISMANS[cyberExtraAccessory.id].luck;
    }
    if (adState.fortuneTimer > 0) luck += 15;
    return luck;
}

// Умное начисление гаек (Квантовое расщепление: 20% в золото)
// Подсчет множителя Кибер-колонки (учитывает стаки от слота Киберпанка/Мимика)
function getCyberSpeakerMultiplier() {
    let count = 0;
    // 1. Надет как основной скин колонки
    if (currentSpeakerSkin === 'cyber') count++;
    // 2. Установлен дополнительно в слот Киберпанка
    if (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id === 'cyber') {
        count++;
    }
    if (count === 0) return 1.0;
    return 1.0 + (count * 0.25); // 1 шт = 1.25x (+25%), 2 шт = 1.50x (+50%)
}

// Умное начисление обычных гаек
function addNuts(amount) {
    if (amount <= 0) return 0;

    const mult = getCyberSpeakerMultiplier();
    const finalAmount = mult > 1.0 ? Math.round(amount * mult) : amount;

    if (hasMech('quant')) {
        const goldShare = Math.floor(finalAmount * 0.2);
        const regShare = finalAmount - goldShare;
        nuts += regShare;
        goldenNuts += goldShare;
        if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
    } else {
        nuts += finalAmount;
    }
    uiNuts.innerText = `${nuts}`;

    const topGoldDisplay = document.getElementById('gold-display');
    if (topGoldDisplay) topGoldDisplay.innerText = `${goldenNuts}`;

    return finalAmount;
}

// Умное начисление золотых гаек (учитывает Кибер-колонку на ВСЕ источники)
function addGoldenNuts(amount) {
    if (amount <= 0) return 0;

    const mult = getCyberSpeakerMultiplier();
    const finalAmount = mult > 1.0 ? Math.round(amount * mult) : amount;

    goldenNuts += finalAmount;

    if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
    const topGoldDisplay = document.getElementById('gold-display');
    if (topGoldDisplay) topGoldDisplay.innerText = `${goldenNuts}`;

    return finalAmount;
}   

// Программный генератор идеального хромированного шара Ньютона
function getSteelBallSprite() {
    const c = document.createElement('canvas');
    c.width = 90; c.height = 90;
    const cx = c.getContext('2d');

    // Градиент металлической сферы
    const g = cx.createRadialGradient(32, 28, 5, 45, 45, 42);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.2, '#f1f2f6');
    g.addColorStop(0.5, '#a4b0be');
    g.addColorStop(0.85, '#57606f');
    g.addColorStop(1, '#2f3542');

    cx.fillStyle = g;
    cx.beginPath();
    cx.arc(45, 45, 40, 0, Math.PI * 2);
    cx.fill();

    // Яркий блик
    cx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    cx.beginPath();
    cx.ellipse(32, 26, 12, 7, -Math.PI / 4, 0, Math.PI * 2);
    cx.fill();

    return c.toDataURL();
}

const STEEL_BALL_IMG_URL = getSteelBallSprite();

// === БАЗА СКИНОВ ДЛЯ ШАРИКОВ НЬЮТОНА ===
const NEWTON_SKINS = {
    steel: {
        name: 'Стальные шары',
        file: STEEL_BALL_IMG_URL, // <-- Теперь здесь реальный спрайт шара!
        sound: 'newton_balls_metall',
        rarity: 'common',
        price: 0,
        priceType: 'free',
        buff: { powerMult: 1.0 }
    },
    billiard: {
        name: 'Бильярдный шар 8',
        file: 'assets/billiard_ball.webp',
        sound: 'billiard_newton',
        rarity: 'rare',
        price: 1500,
        priceType: 'nuts',
        buff: { powerMult: 1.25 }
    },
    plasma: {
        name: 'Плазменная сфера',
        file: 'assets/plasma_sphere.webp',
        sound: 'neon_newton',
        rarity: 'epic',
        price: 80,
        priceType: 'goldenNuts',
        buff: { powerMult: 1.5 }
    },
    planet: {
        name: 'Мини-Земля',
        file: 'assets/planet_ball.webp',
        sound: 'planet_newton',
        rarity: 'legendary',
        price: 250,
        priceType: 'goldenNuts',
        buff: { powerMult: 2.0 }
    }
};

// === БАЗА СКИНОВ ДЛЯ КОЛОНКИ ===
const SPEAKER_SKINS = {
    old: {
        name: 'Советский динамик',
        file: 'assets/old_speaker.webp',
        sound: 'sabbuffer',
        rarity: 'common',
        price: 0,
        priceType: 'free',
        buff: { mpsMult: 1.0 }
    },
    monster: {
        name: 'Монстр-стек',
        file: 'assets/monster_speaker.webp',
        sound: 'sabbuffer',
        rarity: 'rare',
        price: 2000,
        priceType: 'nuts',
        buff: { mpsMult: 1.2 }
    },
    cyber: {
        name: 'Кибер-спикер',
        file: 'assets/cyber_speaker.webp',
        sound: 'cyber_sabbuffer',
        rarity: 'epic',
        price: 90,
        priceType: 'goldenNuts',
        buff: { mpsMult: 1.4 }
    },
    cool: {
        name: 'Абсолютный динамик',
        file: 'assets/cool_speaker.webp',
        sound: 'stadium_bass',
        rarity: 'legendary',
        price: 350,
        priceType: 'goldenNuts',
        buff: { mpsMult: 2.0 }
    }
};


// === ЦЕПОЧКА И БАЗА ТАЛИСМАНОВ УДАЧИ ===
const TALISMANS_ORDER = ['clover', 'horseshoe', 'paw', 'coin', 'star', 'key', 'sock'];

const TALISMANS = {
    clover: { name: 'Клевер-четырёхлистник', file: 'assets/lucky_4leaf.webp', rarity: 'rare', luck: 3, price: 15 },
    horseshoe: { name: 'Золотая подкова', file: 'assets/lucky_golden_horseshoe.webp', rarity: 'rare', luck: 5, price: 40 },
    paw: { name: 'Кроличья лапка', file: 'assets/lucky_rabbit_hand.webp', rarity: 'epic', luck: 8, price: 90 },
    coin: { name: 'Древняя монета', file: 'assets/lucky_coin.webp', rarity: 'epic', luck: 12, price: 180 },
    star: { name: 'Звезда удачи', file: 'assets/lucky_star.webp', rarity: 'legendary', luck: 18, price: 350 },
    key: { name: 'Ключ от всех тайн', file: 'assets/lucky_key.webp', rarity: 'legendary', luck: 25, price: 650 },
    sock: { name: 'Счастливый носок', file: 'assets/lucky_sock.webp', rarity: 'special', luck: 50, price: 999 }
};

speakerSprite.src = SPEAKER_SKINS[currentSpeakerSkin].file;

// --- АУДИО-ДВИЖОК ---
const AudioEngine = {
    sounds: {},
    bgm: null,
    currentBgmName: null,

    // Полная база привязок лестниц к звукам
    ladderSounds: {
        // Common
        wood: 'wood_tap_2',
        banana: 'wood_tap_2',
        beer: 'beer_tup',
        fire: 'base_tup',
        fireman: 'metal_tup',
        plastic: 'plastictup',
        rusty: 'rusty_sound',
        tape: 'tape_sound',

        // Rare
        book: 'base_tup',
        cactus: 'base_tup',
        cement: 'base_tup',
        neon: 'neon_tap',
        scratch: 'scratch_tap',
        new_year: 'new_year_tap',

        // Epic
        add_stair: 'add_click',
        bone: 'bone_tap',
        crystal: 'crystal_click',
        cyber: 'cyber_tap',
        golden: 'gold_tap',
        goth: 'garguli_tup',
        ice: 'ice_tap',
        vine: 'vine_tap',
        calendar_stair: 'base_tup',

        // Legendary
        marble: 'marble_tap',
        quant: 'quant_tap',
        ufo: 'ufo_tap',

        // Special
        retro: 'retro_tap',
        cosmo: 'cosmo_tap',
        storm: 'storm_tap',
        strato: 'wind_tap',
        milkyway: 'milky_way_sound',
        endless: 'endless_tap',
        absolute: 'absolut_tap',

        default: 'base_tup'
    },

    activeSounds: [],



    // Добавили флаг isTap (по умолчанию false)
    play: function (soundName, vol = 1.0, channel = 'sfx') {
        try {
            if (this.sounds[soundName]) {
                this.sounds[soundName].pause();
                this.sounds[soundName].currentTime = 0;
            }

            const audio = new Audio(`assets/sounds/${soundName}.ogg`);

            // Выбираем множитель строго под свой звуковой канал
            let multiplier = 1.0;
            if (channel === 'tap') multiplier = settingsState.tapVol !== undefined ? settingsState.tapVol : 1.0;
            else if (channel === 'speaker') multiplier = settingsState.speakerVol !== undefined ? settingsState.speakerVol : 1.0;
            else if (channel === 'newton') multiplier = settingsState.newtonVol !== undefined ? settingsState.newtonVol : 1.0;
            else multiplier = settingsState.sfxVol !== undefined ? settingsState.sfxVol : 1.0; // обычные sfx

            audio.volume = Math.max(0, Math.min(1, vol * multiplier));

            this.sounds[soundName] = audio;
            audio.onended = () => {
                if (this.sounds[soundName] === audio) {
                    delete this.sounds[soundName];
                }
            };

            audio.play().catch(e => console.warn(`[AudioEngine] Ошибка воспроизведения ${soundName}.ogg:`, e));
        } catch (e) {
            console.error(`[AudioEngine] Сбой вызова звука:`, e);
        }
    },

    stop: function (soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].pause();
            this.sounds[soundName].currentTime = 0;
            delete this.sounds[soundName];
        }
    },

    // Воспроизведение звука тапа
    playTap: function (skinId) {
        let soundName = this.ladderSounds.default;
        let vol = 1.0;

        if (skinId === 'mimic') {
            const allSounds = Object.values(this.ladderSounds).filter(s => s !== 'base_tup');
            soundName = allSounds[Math.floor(Math.random() * allSounds.length)];
            vol = 0.85;
        } else {
            soundName = this.ladderSounds[skinId] || this.ladderSounds.default;
        }

        // Передаем канал 'tap'
        this.play(soundName, vol, 'tap');
    },

    // Фоновая музыка и переходы по высотам
    updateAmbient: function (height) {
        let newBgm = null;
        if (height >= 100000) newBgm = 'cosmo_music';
        else if (height >= 10000) newBgm = 'mountain_wind_ambient';
        else if (height >= 1000) newBgm = 'rain_and_storm';
        else newBgm = 'wind_light';

        if (this.currentBgmName !== newBgm) {
            if (this.bgm) {
                this.bgm.pause();
                if (this.currentBgmName) this.play('whoosh_air', 0.6);
            }
            this.currentBgmName = newBgm;
            this.bgm = new Audio(`assets/sounds/${newBgm}.ogg`);
            this.bgm.loop = true;
            this.bgm.volume = settingsState.musicVol;
            this.bgm.play().catch(e => console.log('BGM blocked:', e));
        }
    }
};

// --- ВИДЫ КЕЙСОВ И ТАБЛИЦЫ ДРОПА ---
const CASES_DB = {
    // 1. Обычный дроп во время кликов: гайки + ВСЕ обычные + ВСЕ редкие
    wooden: {
        id: 'wooden',
        name: 'Деревянный ящик',
        color: '#8d6e63',
        priceType: 'free',
        loot: [
            // Гайки (суммарно 70% шанс)
            { type: 'nuts', amount: 50, weight: 40, name: '50 Гаек' },
            { type: 'nuts', amount: 150, weight: 20, name: '150 Гаек' },
            { type: 'nuts', amount: 300, weight: 10, name: '300 Гаек' },

            // Все Обычные лестницы (суммарно 21% шанс)
            { type: 'skin', id: 'banana', weight: 3 },
            { type: 'skin', id: 'beer', weight: 3 },
            { type: 'skin', id: 'fire', weight: 3 },
            { type: 'skin', id: 'fireman', weight: 3 },
            { type: 'skin', id: 'plastic', weight: 3 },
            { type: 'skin', id: 'rusty', weight: 3 },
            { type: 'skin', id: 'tape', weight: 3 },

            // Все Редкие лестницы (суммарно 9% шанс)
            { type: 'skin', id: 'book', weight: 2 },
            { type: 'skin', id: 'cactus', weight: 2 },
            { type: 'skin', id: 'cement', weight: 2 },
            { type: 'skin', id: 'neon', weight: 1 },
            { type: 'skin', id: 'scratch', weight: 1 },
            { type: 'skin', id: 'new_year', weight: 1 }
        ]
    }, //строка 418

    // 2. Железный сейф: Редкие скины + ВСЕ 6 эпиков с общим шансом ровно 2%
    iron: {
        id: 'iron',
        name: 'Железный сейф',
        color: '#7f8c8d',
        price: 799,
        priceType: 'nuts',
        loot: [
            // Common лестницы (суммарно 40% = 400 веса / 7 скинов ≈ по 57)
            { type: 'skin', id: 'banana', weight: 57 },
            { type: 'skin', id: 'beer', weight: 57 },
            { type: 'skin', id: 'fire', weight: 57 },
            { type: 'skin', id: 'fireman', weight: 57 },
            { type: 'skin', id: 'plastic', weight: 57 },
            { type: 'skin', id: 'rusty', weight: 57 },
            { type: 'skin', id: 'tape', weight: 58 },

            // Rare лестницы (суммарно 50% = 500 веса / 6 скинов ≈ по 83)
            { type: 'skin', id: 'book', weight: 83 },
            { type: 'skin', id: 'cactus', weight: 83 },
            { type: 'skin', id: 'cement', weight: 83 },
            { type: 'skin', id: 'neon', weight: 83 },
            { type: 'skin', id: 'scratch', weight: 84 },
            { type: 'skin', id: 'new_year', weight: 84 },

            // Epic лестницы
            { type: 'skin', id: 'bone', weight: 15 },
            { type: 'skin', id: 'crystal', weight: 15 }, // <-- ДОБАВИЛИ
            { type: 'skin', id: 'cyber', weight: 15 },
            { type: 'skin', id: 'golden', weight: 15 },
            { type: 'skin', id: 'goth', weight: 14 },
            { type: 'skin', id: 'ice', weight: 14 },
            { type: 'skin', id: 'vine', weight: 15 }
        ]
    },
    // 5. Покупка за Золотые гайки (высокие шансы на эпик и легендарки)
    gold: {
        id: 'gold',
        name: 'Золотой Контейнер',
        color: '#f1c40f',
        price: 250,
        priceType: 'goldenNuts',
        loot: [
            { type: 'skin', id: 'bone', weight: 18 },
            { type: 'skin', id: 'crystal', weight: 18 }, // <-- ДОБАВИЛИ
            { type: 'skin', id: 'cyber', weight: 18 },
            { type: 'skin', id: 'golden', weight: 16 },
            { type: 'skin', id: 'goth', weight: 14 },
            { type: 'skin', id: 'ice', weight: 12 },
            { type: 'skin', id: 'marble', weight: 6 },
            { type: 'skin', id: 'quant', weight: 5 },
            { type: 'skin', id: 'ufo', weight: 3 },
            { type: 'skin', id: 'mimic', weight: 2 }
        ]
    }
};



let retroChallengeMs = 0;
const RETRO_CHALLENGE_GOAL = 20 * 60 * 1000; // 20 минут
let retroCoinSpawnTimer = 0;
let nextCoinDelay = 45000; // Первый вылет через 45 секунд
// Инвентарь кейсов у игрока
// Расширенный инвентарь кейсов
let userCases = {
    wooden: 1,
    iron: 0,
    gear: 0,
    talisman: 0,
    gold: 0
};

const LADDER_SKINS = {
    // === ОБЫЧНЫЕ (Common) ===
    wood: { rarity: 'common', name: 'Деревянная', file: 'assets/wood_stair-removebg-preview.png', color: '#bdc3c7', buffs: {}, mechanics: [] },
    banana: { rarity: 'common', name: 'Банановая', file: 'assets/banana_tree.webp', color: '#f1c40f', buffs: {}, mechanics: ['banana'] },
    beer: { rarity: 'common', name: 'Пивная', file: 'assets/beer_stair.webp', color: '#e67e22', buffs: { luck: 5 }, mechanics: [] },
    fire: { rarity: 'common', name: 'Огненная', file: 'assets/fire_stair.webp', color: '#e74c3c', buffs: { click: 7, caseLimitMinus: 10 }, mechanics: [] },
    fireman: { rarity: 'common', name: 'Пожарная', file: 'assets/fireman_stair.webp', color: '#c0392b', buffs: { newtonAdd: 15 }, mechanics: [] },
    plastic: { rarity: 'common', name: 'Пластиковая', file: 'assets/plastic_stair.webp', color: '#3498db', buffs: {}, mechanics: ['plastic'] },
    rusty: { rarity: 'common', name: 'Ржавая', file: 'assets/rusty_lader.webp', color: '#d35400', buffs: {}, mechanics: ['rusty'] },
    tape: { rarity: 'common', name: 'Изолента', file: 'assets/tape_stair.webp', color: '#2980b9', buffs: { discount: 0.10 }, mechanics: [] },

    // === РЕДКИЕ (Rare) ===
    book: { rarity: 'rare', name: 'Книжная', file: 'assets/book_stair.webp', color: '#8e44ad', buffs: { luck: 7 }, mechanics: [] },
    cactus: { rarity: 'rare', name: 'Кактус', file: 'assets/cactus_stair.webp', color: '#2ecc71', buffs: { speakerAdd: 20, newtonAdd: 10 }, mechanics: [] },
    cement: { rarity: 'rare', name: 'Цементная', file: 'assets/cement_stair.webp', color: '#95a5a6', buffs: { newtonMult: 1.5 }, mechanics: ['cement'] },
    neon: { rarity: 'rare', name: 'Неоновая', file: 'assets/neon_stair.webp', color: '#ff00ff', buffs: {}, mechanics: ['neon'] },
    scratch: { rarity: 'rare', name: 'Когтеточка', file: 'assets/scratching_post_stair.webp', color: '#d1ccc0', buffs: {}, mechanics: ['scratch'] },
    new_year: { rarity: 'rare', name: 'Новогодняя', file: 'assets/new_year_stair.webp', color: '#27ae60', buffs: {}, mechanics: ['new_year'] },

    // === ЭПИЧЕСКИЕ (Epic) ===
    add_stair: { rarity: 'epic', name: 'Билборд', file: 'assets/add_stair.webp', color: '#00d2d3', buffs: {}, mechanics: ['billboard'] },
    bone: { rarity: 'epic', name: 'Костяная', file: 'assets/bone_stair.webp', color: '#ecf0f1', buffs: {}, mechanics: ['bone'] },
    crystal: { rarity: 'epic', name: 'Кристальная', file: 'assets/crystal_stair.webp', color: '#00ffff', buffs: {}, mechanics: ['crystal'] }, // <-- ДОБАВИЛИ
    cyber: { rarity: 'epic', name: 'Киберпанк', file: 'assets/cyper_pank.webp', color: '#00ffff', buffs: {}, mechanics: ['cyber'] },
    golden: { rarity: 'epic', name: 'Золотая', file: 'assets/golden_stair.webp', color: '#f1c40f', buffs: {}, mechanics: ['golden'] },
    goth: { rarity: 'epic', name: 'Готическая', file: 'assets/goth_stair.webp', color: '#2c3e50', buffs: { discount: 0.20 }, mechanics: ['goth'] },
    ice: { rarity: 'epic', name: 'Ледяная', file: 'assets/ice_stair.webp', color: '#74b9ff', buffs: {}, mechanics: ['ice'] },
    vine: { rarity: 'epic', name: 'Лоза', file: 'assets/vine_stair.webp', color: '#22a6b3', buffs: {}, mechanics: ['vine'] },
    calendar_stair: { rarity: 'epic', name: 'Календарь', file: 'assets/calendar_stair.webp', color: '#e74c3c', buffs: { luck: 10 }, mechanics: ['calendar'] },

    // === ЛЕГЕНДАРНЫЕ (Legendary) ===
    marble: { rarity: 'legendary', name: 'Мраморное Золото', file: 'assets/marble_gold_stair.webp', color: '#f5f6fa', buffs: {}, mechanics: ['marble'] },
    quant: { rarity: 'legendary', name: 'Квантовая', file: 'assets/quant_stair.webp', color: '#9c88ff', buffs: { caseLimitMinus: 50 }, mechanics: ['quant'] },
    ufo: { rarity: 'legendary', name: 'НЛО', file: 'assets/ufo_stair.webp', color: '#4cd137', buffs: {}, mechanics: ['ufo'] },
    mimic: { rarity: 'legendary', name: 'Мимик', file: 'assets/mimic_stair.webp', color: '#8c7ae6', buffs: {}, mechanics: ['mimic'] },

    // === ОСОБЕННЫЕ (Секретные) ===
    retro: { rarity: 'special', name: 'Ретро (День 2)', file: 'assets/retro_stair.webp', color: '#ff9f43', buffs: {}, mechanics: ['retro'] },
    storm: { rarity: 'special', name: 'Грозовой фронт', file: 'assets/storm_front_stair.webp', color: '#7f8fa6', buffs: { clickAdd: 20 }, mechanics: ['storm'] },
    strato: { rarity: 'special', name: 'Стратосфера', file: 'assets/stratosphere_stair.webp', color: '#0097e6', buffs: {}, mechanics: ['strato'] },
    cosmo: { rarity: 'special', name: 'Космос', file: 'assets/cosmo_stair.webp', color: '#192a56', buffs: {}, mechanics: ['cosmo'] },
    milkyway: { rarity: 'special', name: 'Млечный Путь', file: 'assets/milkyway_stair.webp', color: '#9b59b6', buffs: {}, mechanics: ['milkyway'] }, // <-- ДОБАВИТЬ ЭТО
    endless: { rarity: 'special', name: 'Сингулярность', file: 'assets/endless_loc_stair.webp', color: '#000000', buffs: {}, mechanics: ['endless'] }, // <-- ДОБАВИТЬ ЭТО
    absolute: {
        rarity: 'special', name: 'АБСОЛЮТ', file: 'assets/absolute_stair.webp', color: '#ffffff', buffs: {
            click: 7,              // Огненная (+7)
            clickAdd: 20,          // Грозовой фронт (+20)
            luck: 22,              // Пивная (5) + Книжная (7) + Календарь (10)
            caseLimitMinus: 60,    // Огненная (-10) + Квантовая (-50)
            discount: 0.20,        // Готическая (-20% на весь магазин)
            speakerAdd: 20,        // Кактус (+20 к колонке)
            newtonAdd: 25,         // Пожарная (+15) + Кактус (+10) к шарам
            newtonMult: 1.5        // Цементная (+50% урон шаров)
        },
        mechanics: ['absolute']
    }
};

// Отрисовка огромной горы слева (250м - 9500м)
function drawMountain() {
    if (visualHouseHeight < 550 || visualHouseHeight > 11500) return;
    if (!mountainImg.complete || !mountainImg.naturalWidth) return;

    // 1. ОЧЕНЬ ПЛАВНОЕ ПОЯВЛЕНИЕ (длится 1250 метров: с 250м до 1500м)
    let alpha = 1.0;
    if (visualHouseHeight < 4000) {
        const p = Math.max(0, (visualHouseHeight - 550) / 3500);
        alpha = Math.pow(p, 2.5);
    }

    // 2. ТИТАНИЧЕСКИЙ РАЗМЕР (Масштабируем так, чтобы гора занимала 85% высоты экрана)
    const scale = Math.max(
        (canvas.width * 0.90) / mountainImg.naturalWidth,
        (canvas.height * 0.65) / mountainImg.naturalHeight
    );
    const destW = mountainImg.naturalWidth * scale;
    const destH = mountainImg.naturalHeight * scale;

    // Сдвигаем влево, чтобы гора нависала сбоку
    const mountainX = -destW * 0.25;

    // 3. ДОЛГИЙ УХОД ВНИЗ (Начинает опускаться только после 1500м и скрывается к 9500м)
    // Замени блок drawY на этот:
    let drawY = canvas.height - destH * 0.85;

    if (visualHouseHeight > 4500) {
        const progress = Math.min(1, (visualHouseHeight - 4500) / 6500);
        drawY += progress * (destH * 0.90);
    }

    if (drawY > canvas.height + 50) return;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.drawImage(mountainImg, mountainX, drawY, destW, destH);
    ctx.restore();
}

// Отрисовка планеты Земля (15 000м - 150 000м: подъем горизонта и отдаление шара)
function drawEarthAtmosphere() {
    if (visualHouseHeight < 15000 || visualHouseHeight > 160000) return;
    if (!planetEarthImg.complete || !planetEarthImg.naturalWidth) return;

    // 1. ПРОЗРАЧНОСТЬ (мягкий вход на 15k-22k и растворение в бездне на 115k-145k)
    let alpha = 1.0;
    if (visualHouseHeight < 22000) {
        alpha = Math.max(0, (visualHouseHeight - 15000) / 7000);
    } else if (visualHouseHeight > 115000) {
        alpha = Math.max(0, 1.0 - (visualHouseHeight - 115000) / 30000);
    }
    alpha = Math.max(0, Math.min(1, alpha));
    if (alpha <= 0) return;

    // 2. ДИНАМИЧЕСКИЙ МАСШТАБ (ЭФФЕКТ ОТДАЛЕНИЯ)
    let widthRatio = 1.35; // До 45 000м — огромный нависающий горизонт
    let drawY = canvas.height;

    if (visualHouseHeight <= 45000) {
        // ФАЗА 1: Подъем горизонта из-под пола (15 000м - 45 000м)
        const riseProgress = (visualHouseHeight - 15000) / 30000;
        // Мягкий нелинейный выход на орбиту
        const easeRise = Math.sin(riseProgress * (Math.PI / 2));

        const scale = (canvas.width * widthRatio) / planetEarthImg.naturalWidth;
        const destH = planetEarthImg.naturalHeight * scale;

        // Планета плавно поднимается до пиковой высоты
        drawY = canvas.height - (destH * 0.38 * easeRise);
    } else {
        // ФАЗА 2: ОТДАЛЕНИЕ В ГЛУБОКИЙ КОСМОС (45 000м - 145 000м)
        // recedeProgress идет от 0 (на 45k) до 1 (к 130k)
        const recedeProgress = Math.min(1, (visualHouseHeight - 45000) / 85000);

        // Планета уменьшается со 135% экрана до 42% (превращается в аккуратный шар)
        widthRatio = 1.35 - (recedeProgress * 0.93);

        const scale = (canvas.width * widthRatio) / planetEarthImg.naturalWidth;
        const destH = planetEarthImg.naturalHeight * scale;

        // По мере уменьшения шар плавно оседает в нижнюю треть экрана
        const startTopY = canvas.height - (planetEarthImg.naturalHeight * ((canvas.width * 1.35) / planetEarthImg.naturalWidth) * 0.38);
        const endTopY = canvas.height - destH * 0.75; // шар красиво виден над нижним интерфейсом

        drawY = startTopY + (endTopY - startTopY) * Math.pow(recedeProgress, 0.85);
    }

    // Итоговые габариты с учетом текущего масштаба
    const destW = canvas.width * widthRatio;
    const scale = destW / planetEarthImg.naturalWidth;
    const destH = planetEarthImg.naturalHeight * scale;
    const destX = (canvas.width - destW) / 2; // Строго по центру

    ctx.save();
    ctx.globalAlpha = alpha;

    // 3. АДАПТИВНОЕ СВЕЧЕНИЕ АТМОСФЕРЫ (сжимается синхронно с планетой)
    const cx = destX + destW / 2;
    const cy = drawY + destH / 2;
    const radius = destW / 2;
    const glowThickness = 35 * (widthRatio / 1.35); // толщина ореола тоже уменьшается вдалеке

    ctx.beginPath();
    ctx.arc(cx, cy, radius + glowThickness, 0, Math.PI * 2);
    const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.94, cx, cy, radius + glowThickness);
    haloGrad.addColorStop(0, 'rgba(64, 164, 255, 0.85)');
    haloGrad.addColorStop(1, 'rgba(64, 164, 255, 0)');
    ctx.fillStyle = haloGrad;
    ctx.fill();

    // 4. ОТРИСОВКА САМОЙ ПЛАНЕТЫ
    ctx.drawImage(planetEarthImg, destX, drawY, destW, destH);

    ctx.restore();
}

let ownedSkins = ['wood']; // Инвентарь скинов (деревянная открыта со старта)
let currentSkinId = 'wood'; // Текущая активная лестница
let currentEffectId = 'wood'; // Текущий активный эффект/пассивка
let activeSkinTab = 'visual';    // 'visual' (внешний вид) или 'effect' (эффект)

let lightningFlash = 0;

let newtonAnimProgress = 0; // 0 - покой, от 0 до 1 - цикл удара
let newtonLeftHitFired = false; // Флаг удара левого шара

const bgFirstLocImg = new Image();
bgFirstLocImg.src = 'assets/bg_first_loc1.webp';

// === АРТЫ ПЕРВОЙ ЛОКАЦИИ (ХРУЩЕВКА) ===
const houseDownImg = new Image();
houseDownImg.src = 'assets/houses_down.webp';

const houseMidImg = new Image();
houseMidImg.src = 'assets/houses_midle.webp';

const houseRoofImg = new Image();
houseRoofImg.src = 'assets/roof.webp';

const balloonImg = new Image();
balloonImg.src = 'assets/balloon.webp';

const rocketImg = new Image();
rocketImg.src = 'assets/rocket.webp';

const meteorImg = new Image();
meteorImg.src = 'assets/meteor.webp';

// Кадры чайки (.webp)
const seagullFrames = [1, 2, 3].map(num => {
    const img = new Image();
    img.src = `assets/seagull_${num}.webp`;
    return img;
});
const seagullAnimSeq = [0, 1, 2, 1];

// Новые объекты
const planeImg = new Image();
planeImg.src = 'assets/airplane.webp';

const satelliteImg = new Image();
satelliteImg.src = 'assets/satellite.webp';

const ufoImg = new Image();
ufoImg.src = 'assets/ufo.webp';

// === НОВЫЕ КОСМИЧЕСКИЕ СУЩНОСТИ И ОБЪЕКТЫ ===
const obeliskImg = new Image(); obeliskImg.src = 'assets/obelisk.webp';
const cosmoTrackImg = new Image(); cosmoTrackImg.src = 'assets/cosmo_track.webp';
const shutleImg = new Image(); shutleImg.src = 'assets/shutle.webp';
const asteroidCreatureImg = new Image(); asteroidCreatureImg.src = 'assets/asteroid_creature.webp';
// Космические задние фоны (Млечный Путь и Бескрайний простор)
const nebulaImg = new Image();
nebulaImg.src = 'assets/nebula.webp';

const blackHoleImg = new Image();
blackHoleImg.src = 'assets/black_hole.webp';

// Анимации космических змей (по 6 кадров)
const cr1Frames = []; // creature1 (голова налево)
const cr2Frames = []; // cr2 (голова направо)
for (let i = 1; i <= 6; i++) {
    let img1 = new Image(); img1.src = `assets/creature1_frame${i}.webp`; cr1Frames.push(img1);
    let img2 = new Image(); img2.src = `assets/cr2_frame${i}.webp`; cr2Frames.push(img2);
}

// Куб (Тессеракт - 3 слоя)
const cubeBackImg = new Image(); cubeBackImg.src = 'assets/cube_back.webp';
const cubeLighterImg = new Image(); cubeLighterImg.src = 'assets/cube_lighter.webp';
const cubeFrontImg = new Image(); cubeFrontImg.src = 'assets/cube_front.webp';

// Страж (Ядро + 4 пластины)
const guardCoreImg = new Image(); guardCoreImg.src = 'assets/guard_core.webp';
const guardLUImg = new Image(); guardLUImg.src = 'assets/left_up_plate.webp';
const guardLDImg = new Image(); guardLDImg.src = 'assets/left_down_plate.webp';
const guardRUImg = new Image(); guardRUImg.src = 'assets/right_up_plate.webp';
const guardRDImg = new Image(); guardRDImg.src = 'assets/right_down_plate.webp';


// Характеристики Колонки (Пассив)
let speakerLevel = 0;
let speakerMPS = 0;
let speakerTimer = 0;
let speakerCost = 50; // <-- Стало 120 по новой экономике

// Характеристики Шариков (Авто-удар)
let newtonLevel = 0;
let newtonPower = 0;
let newtonSpeed = 3000;
let newtonTimer = 0;
let newtonCost = 75; // <-- Стало 250 по новой экономике

// Физика и эффекты
let ladderScaleX = 1;
let ladderScaleY = 1;
let ladderYOffset = 0;
let ladderSpeed = 0;
let shakeTime = 0;
let ladderDropY = 0;
let breakDelay = 0;

const ladderImg = new Image();
ladderImg.src = 'assets/wood_stair-removebg-preview.png';

let particles = [];
let debrisArray = [];
let bgObjects = [];
let lastBgTime = Date.now();
let bgSpawnTimer = 0;
let lastFrameTime = Date.now();

// DOM Элементы
const canvas = document.getElementById('canvas') || document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const heightDisplay = document.getElementById('height-display');
const locationDisplay = document.getElementById('location-name');

const slotSpeaker = document.getElementById('slot-speaker');
const slotNewton = document.getElementById('slot-newton');
const lvlSpeakerDisplay = document.getElementById('lvl-speaker');
const lvlNewtonDisplay = document.getElementById('lvl-newton');

const uiNuts = document.getElementById('nuts-display');
const uiBoxProgress = document.getElementById('box-progress-bar');
const uiBoxText = document.getElementById('box-progress-text');
const uiCasesCount = document.getElementById('cases-count');
const modalCasesCount = document.getElementById('modal-cases-count');
const btnOpenBox = document.getElementById('btn-open-box');
const gachaResult = document.getElementById('gacha-result');

// База локаций и цветов фона
const LOCATIONS = [
    { h: 0, name: "Хрущевка", top: [1, 140, 197], bot: [38, 166, 219] },
    { h: 250, name: "Крыши", top: [1, 140, 197], bot: [38, 166, 219] },
    { h: 550, name: "Крыши", top: [1, 140, 197], bot: [50, 175, 225] },
    { h: 1000, name: "Грозовой Фронт", top: [55, 71, 79], bot: [120, 144, 156] },
    { h: 10000, name: "Стратосфера", top: [26, 35, 126], bot: [63, 81, 181] },
    { h: 100000, name: "Открытый Космос", top: [0, 0, 0], bot: [15, 5, 25] },
    { h: 1000000, name: "Млечный Путь", top: [18, 5, 38], bot: [48, 16, 78] },
    { h: 10000000, name: "Бескрайний простор", top: [2, 1, 8], bot: [8, 12, 28] }
];

function lerp(a, b, t) { return a + (b - a) * t; }
function lerpColor(c1, c2, t) {
    const r = Math.round(lerp(c1[0], c2[0], t));
    const g = Math.round(lerp(c1[1], c2[1], t));
    const b = Math.round(lerp(c1[2], c2[2], t));
    return `rgb(${r}, ${g}, ${b})`;
}

function resizeCanvas() {
    // Ограничиваем DPR максимум двойкой, чтобы не перегружать телефоны
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    starfieldBackCanvas = null;
starfieldFrontCanvas = null;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function spawnBGObject() {
    const fromLeft = Math.random() > 0.5;
    let x = fromLeft ? -120 : canvas.width + 120;

    // Спавн летящих горизонтально объектов в верхней части экрана (верхние 40%)
    let y = Math.random() * (canvas.height * 0.4);

    let type = 'dust';
    let speedMult = 0.4 + Math.random() * 0.6;
    let size = 1 + Math.random() * 2;
    let color = `rgba(255, 255, 255, ${speedMult * 0.4})`;
    let vx = (fromLeft ? 1 : -1) * (20 + Math.random() * 30);

    // Флаги активных объектов на экране
    const hasSatellite = bgObjects.some(o => o.type === 'satellite');
    const hasUfo = bgObjects.some(o => o.type === 'ufo');
    const hasShutle = bgObjects.some(o => o.type === 'shutle');
    const hasTruck = bgObjects.some(o => o.type === 'cosmo_track');
    const hasCube = bgObjects.some(o => o.type === 'cube');
    const hasGuard = bgObjects.some(o => o.type === 'guard');
    const hasCr1 = bgObjects.some(o => o.type === 'creature1');
    const hasCr2 = bgObjects.some(o => o.type === 'cr2');
    const hasAsteroid = bgObjects.some(o => o.type === 'asteroid_creature');
    const hasEvent = bgObjects.some(o => o.type === 'rocket_event');
    const hasRocket = bgObjects.some(o => o.type === 'solo_rocket');
    const hasMeteor = bgObjects.some(o => o.type === 'solo_meteor');
    const hasBalloon = bgObjects.some(o => o.type === 'balloon');

    // Проверка соседства монументов (Куб / Страж)
    const activeMonolith = bgObjects.find(o => o.type === 'cube' || o.type === 'guard');
    const hasNearMonolith = bgObjects.some(o => (o.type === 'cube' || o.type === 'guard') && o.y < 350);

    // Функция выбора стороны для Стража (не перекрывает лестницу и другой монумент)
    const setupGuardSpawn = () => {
        type = 'guard';
        const isLeft = activeMonolith ? (activeMonolith.x > canvas.width / 2) : (Math.random() > 0.5);
        x = isLeft
            ? canvas.width * (0.14 + Math.random() * 0.08)
            : canvas.width * (0.78 + Math.random() * 0.08);
        y = -180;
        vx = 0;
    };

    // --- 0. БЕСКРАЙНИЙ ПРОСТОР (>= 10 000 000 м) ---
    if (currentHeight >= 10000000) {
        const roll = Math.random();

        // 1. Куб
        if (roll < 0.04 && !hasCube && !hasNearMonolith) {
            type = 'cube';
            const isLeft = activeMonolith ? (activeMonolith.x > canvas.width / 2) : (Math.random() > 0.5);
            x = isLeft
                ? canvas.width * (0.12 + Math.random() * 0.08)
                : canvas.width * (0.80 + Math.random() * 0.08);
            y = -180;
            vx = 0;
        }
        // 2. Страж
        else if (roll < 0.08 && !hasGuard && !hasNearMonolith) {
            setupGuardSpawn();
        }
        // 3. Космо-грузовик (появляется везде >= 1 000 000 м)
        else if (roll < 0.16 && !hasTruck) {
            type = 'cosmo_track';
            vx = (fromLeft ? 1 : -1) * (80 + Math.random() * 50);
        }
        // 4. Редкий шаттл на краю вселенной
        else if (roll < 0.20 && !hasShutle) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (120 + Math.random() * 50);
        }
        // 5. Космические змеи
        else if (roll < 0.32 && !hasCr2) {
            type = 'cr2';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else if (roll < 0.44 && !hasCr1) {
            type = 'creature1';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else {
            return;
        }
    }
    // --- 1. МЛЕЧНЫЙ ПУТЬ (>= 1 000 000 м) ---
    else if (currentHeight >= 1000000) {
        const roll = Math.random();

        // 1. Страж (продолжает встречаться)
        if (roll < 0.05 && !hasGuard && !hasNearMonolith) {
            setupGuardSpawn();
        }
        // 2. Космо-грузовик
        else if (roll < 0.15 && !hasTruck) {
            type = 'cosmo_track';
            vx = (fromLeft ? 1 : -1) * (80 + Math.random() * 50);
        }
        // 3. Редкий шаттл
        else if (roll < 0.20 && !hasShutle) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (110 + Math.random() * 50);
        }
        // 4. Астероид и змеи
        else if (roll < 0.28 && !hasAsteroid) {
            type = 'asteroid_creature';
            vx = (fromLeft ? 1 : -1) * (40 + Math.random() * 30);
        } else if (roll < 0.38 && !hasCr2) {
            type = 'cr2';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else if (roll < 0.48 && !hasCr1) {
            type = 'creature1';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else {
            return;
        }
    }
    // --- 2. ГЛУБОКИЙ КОСМОС (>= 500 000 м): СТАРТ СТРАЖА ---
    else if (currentHeight >= 500000) {
        const roll = Math.random();

        // Первое появление Стража
        if (roll < 0.05 && !hasGuard && !hasNearMonolith) {
            setupGuardSpawn();
        }
        // Первое существо creature1
        else if (roll < 0.14 && !hasCr1) {
            type = 'creature1';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        }
        // Шаттлы, НЛО и спутники
        else if (roll < 0.20 && !hasShutle) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (110 + Math.random() * 60);
        } else if (roll < 0.26 && !hasUfo) {
            type = 'ufo';
            vx = (fromLeft ? 1 : -1) * (90 + Math.random() * 40);
        } else if (roll < 0.32 && !hasSatellite) {
            type = 'satellite';
            vx = (fromLeft ? 1 : -1) * 20;
        } else {
            return;
        }
    }
    // --- 3. ПОЯС СУЩЕСТВ (>= 400 000 м): СТАРТ ПЕРВОГО СУЩЕСТВА ---
    else if (currentHeight >= 400000) {
        const roll = Math.random();

        // Первое появление creature1
        if (roll < 0.08 && !hasCr1) {
            type = 'creature1';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else if (roll < 0.14 && !hasShutle) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (110 + Math.random() * 60);
        } else if (roll < 0.20 && !hasUfo) {
            type = 'ufo';
            vx = (fromLeft ? 1 : -1) * (90 + Math.random() * 40);
        } else if (roll < 0.26 && !hasSatellite) {
            type = 'satellite';
            vx = (fromLeft ? 1 : -1) * 20;
        } else {
            return;
        }
    }
    // --- 4. КОСМОС (>= 100 000 м) ---
    else if (currentHeight >= 100000) {
        const roll = Math.random();
        if (roll < 0.04 && !hasShutle) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (110 + Math.random() * 60);
        } else if (roll < 0.08 && !hasUfo) {
            type = 'ufo';
            vx = (fromLeft ? 1 : -1) * (90 + Math.random() * 40);
        } else if (roll < 0.12 && !hasSatellite) {
            type = 'satellite';
            vx = (fromLeft ? 1 : -1) * 20;
        } else {
            return;
        }
    }
    // --- 5. СТРАТОСФЕРА (10 000 - 100 000 м) ---
    else if (currentHeight >= 10000) {
        const roll = Math.random();

        // Сцена взрыва слева или справа
        if (roll < 0.003 && !hasEvent && !hasRocket && !hasMeteor) {
            const isLeft = Math.random() > 0.5;
            const randTargetX = isLeft
                ? canvas.width * (0.1 + Math.random() * 0.25)
                : canvas.width * (0.65 + Math.random() * 0.25);
            const randTargetY = canvas.height * (0.15 + Math.random() * 0.25);

            bgObjects.push({
                type: 'rocket_event', t: 0,
                startX_r: randTargetX + (Math.random() - 0.5) * 40, startY_r: canvas.height + 120,
                startX_m: randTargetX + (Math.random() - 0.5) * 200, startY_m: -100,
                targetX: randTargetX, targetY: randTargetY, exploded: false
            });
            return;
        }
        else if (roll < 0.007 && !hasRocket && !hasEvent) {
            bgObjects.push({ type: 'solo_rocket', x: canvas.width * (0.15 + Math.random() * 0.7), y: canvas.height + 100, vx: (Math.random() - 0.5) * 12, vy: -90, speedMult: 0.7 });
            return;
        }
        else if (roll < 0.012 && !hasMeteor && !hasEvent) {
            const fromRight = Math.random() > 0.4;
            const startX = fromRight ? canvas.width + 80 : -80;
            const angle = fromRight ? (Math.PI * 0.65 + Math.random() * 0.25) : (Math.PI * 0.15 + Math.random() * 0.25);
            const speed = 120 + Math.random() * 60;
            bgObjects.push({ type: 'solo_meteor', x: startX, y: -50, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, angle: angle, speedMult: 0.85 });
            return;
        }
        else if (roll < 0.02 && !bgObjects.some(o => o.type === 'obelisk')) {
            type = 'obelisk';
            const isLeft = Math.random() > 0.5;
            x = isLeft
                ? canvas.width * (0.08 + Math.random() * 0.14)
                : canvas.width * (0.78 + Math.random() * 0.14);
            y = -180;
            vx = 0;
        }
        else if (roll < 0.035 && !hasBalloon) {
            type = 'balloon'; vx = (fromLeft ? 1 : -1) * 10;
        } else if (roll < 0.055 && !hasSatellite) {
            type = 'satellite'; vx = (fromLeft ? 1 : -1) * 22;
        } else {
            return;
        }
    }
    // --- 6. ГРОЗОВОЙ ФРОНТ (1 000 - 10 000 м) ---
    else if (currentHeight >= 1000) {
        if (Math.random() < 0.2) {
            type = 'airplane';
            vx = (fromLeft ? 1 : -1) * (70 + Math.random() * 30);

            const now = Date.now();
            if (now - lastPlaneSoundTime > 14000 && Math.random() < 0.8) {
                lastPlaneSoundTime = now;
                AudioEngine.play('airplane', 0.45);
            }
        } else {
            type = 'cloud'; size = 35 + Math.random() * 30; color = `rgba(85, 95, 105, ${speedMult * 0.5})`; vx *= 0.5;
        }
    }
    // --- 7. КРЫШИ / НЕБО (100 - 1 000 м) ---
    else if (currentHeight >= 200) {
        if (Math.random() < 0.35) {
            type = 'seagull'; vx = (fromLeft ? 1 : -1) * (45 + Math.random() * 25);
        } else {
            type = 'cloud'; size = 30 + Math.random() * 25; color = `rgba(255, 255, 255, ${speedMult * 0.5})`;
        }
    }

    bgObjects.push({ x, y, type, size, speedMult, color, vx, fromLeft, animTimer: Math.random() * 10, rot: 0 });
}

function drawBGObjects() {
    const now = Date.now();
    const dt = (now - lastBgTime) / 1000;
    lastBgTime = now;
    bgSpawnTimer += dt * 1000;

    // Стало (вспышка + раскат грома с кулдауном):
    if (currentHeight >= 1000 && currentHeight < 10000 && Math.random() < 0.004) {
        lightningFlash = 0.8;

        const now = Date.now();
        if (now - lastThunderTime > 5500) {
            lastThunderTime = now;
            AudioEngine.play('balfron_thunder', 0.75); // 0.75 — комфортная громкость SFX
        }
    }
    if (lightningFlash > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${lightningFlash})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        lightningFlash -= 0.04;
    }

    if (bgSpawnTimer > (currentHeight >= 10000 ? 80 : 700)) {
        spawnBGObject();
        bgSpawnTimer = 0;
    }

    for (let i = bgObjects.length - 1; i >= 0; i--) {
        let obj = bgObjects[i];

        // Горизонтальный дрейф
        obj.x += obj.vx * dt;

        // 1. Физика скролла стоячих объектов (строго неподвижны, пока игрок не поднимается)
        if (obj.type === 'obelisk' || obj.type === 'cube' || obj.type === 'guard') {
            if (ladderSpeed > 0) {
                obj.y += ladderSpeed * 8 * dt; // Двигаются вниз ТОЛЬКО при подъеме игрока
            }
        } else {
            const speedFactor = obj.type === 'star' ? 1.5 : 18;
            obj.y += ladderSpeed * obj.speedMult * speedFactor * dt;
        }

        ctx.fillStyle = obj.color;

        // 1. Обелиск (Слабое покачивание + точные пропорции 1762x1422)
        if (obj.type === 'obelisk') {
            obj.animTimer += dt;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer * 1.8) * 8);

            const ow = 115;
            const oh = ow * (1422 / 1762); // ~92.8px

            if (obeliskImg.complete && obeliskImg.naturalWidth !== 0) {
                ctx.drawImage(obeliskImg, -ow / 2, -oh / 2, ow, oh);
            }
            ctx.restore();
        }
        // 2. Куб (Тессеракт: квантовое расслоение, RGB-сдвиг и медленное парение)
        else if (obj.type === 'cube') {
            obj.animTimer += dt;
            const t = obj.animTimer;
            ctx.save();

            // Очень медленное, глубокое парение на месте (частота 0.3 вместо 0.75)
            ctx.translate(obj.x, obj.y + Math.sin(t * 0.3) * 2.5);

            const cw = 130;
            const ch = cw * (1452 / 1250);

            // КВАНТОВЫЙ ГЛИТЧ И РАССЛОЕНИЕ:
            const isGlitchTwitch = Math.random() < 0.06;
            const splitDist = isGlitchTwitch ? (4 + Math.random() * 4) : (1.6 + Math.sin(t * 1.5) * 0.6);
            const glitchShiftY = isGlitchTwitch ? (Math.random() - 0.5) * 3 : 0;

            const drawFrameGhost = (shiftX, shiftY, shadowHex, alphaVal) => {
                ctx.save();
                ctx.globalAlpha = alphaVal;
                ctx.shadowColor = shadowHex;
                ctx.shadowOffsetX = shiftX;
                ctx.shadowOffsetY = shiftY;
                ctx.shadowBlur = isGlitchTwitch ? 8 : 3;

                if (cubeBackImg.complete && cubeBackImg.naturalWidth !== 0) {
                    ctx.drawImage(cubeBackImg, -cw / 2, -ch / 2, cw, ch);
                }
                if (cubeFrontImg.complete && cubeFrontImg.naturalWidth !== 0) {
                    ctx.drawImage(cubeFrontImg, -cw / 2, -ch / 2, cw, ch);
                }
                ctx.restore();
            };

            // 1. Квантовое расслоение (Красный/Маджента канал влево)
            drawFrameGhost(-splitDist, glitchShiftY, 'rgba(255, 0, 95, 0.75)', 0.65);

            // 2. Квантовое расслоение (Циан канал вправо)
            drawFrameGhost(splitDist, -glitchShiftY, 'rgba(0, 240, 255, 0.75)', 0.65);

            // 3. Основной физический каркас (задник)
            if (cubeBackImg.complete && cubeBackImg.naturalWidth !== 0) {
                ctx.drawImage(cubeBackImg, -cw / 2, -ch / 2, cw, ch);
            }

            // 4. ЭНЕРГОЯДРО С АДДИТИВНЫМ ФОНОМ
            const pulse = Math.sin(t * 1.8);
            const coreScale = 0.46 + pulse * 0.04;
            const lw = cw * coreScale;
            const lh = lw * (1321 / 1359);

            ctx.save();
            const flareR = lw * 0.85;
            const flareGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, flareR);
            flareGrad.addColorStop(0, 'rgba(0, 240, 255, 0.8)');
            flareGrad.addColorStop(0.45, 'rgba(243, 156, 18, 0.35)');
            flareGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = flareGrad;
            ctx.beginPath();
            ctx.arc(0, 0, flareR, 0, Math.PI * 2);
            ctx.fill();

            // Вращение ядра
            ctx.rotate(t * 0.6);

            ctx.globalCompositeOperation = 'lighter';
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 20 + pulse * 8;
            ctx.globalAlpha = 0.9 + pulse * 0.1;

            if (cubeLighterImg.complete && cubeLighterImg.naturalWidth !== 0) {
                ctx.drawImage(cubeLighterImg, -lw / 2, -lh / 2, lw, lh);
            }
            ctx.restore();

            // 5. Передние ребра куба
            if (cubeFrontImg.complete && cubeFrontImg.naturalWidth !== 0) {
                ctx.drawImage(cubeFrontImg, -cw / 2, -ch / 2, cw, ch);
            }

            ctx.restore();
        }
        // 3. Страж (Асинхронные живые пластины на магнитной левитации)
        else if (obj.type === 'guard') {
            obj.animTimer += dt;
            const t = obj.animTimer;
            ctx.save();

            // Очень медленное, величественное парение
            ctx.translate(obj.x, obj.y + Math.sin(t * 0.35) * 2.5);

            // Ядро (50x49.5px, радиус ~25px)
            const gw = 50;
            const gh = gw * (333 / 336);

            // 1. МЯГКОЕ НЕОНОВОЕ СВЕЧЕНИЕ ЯДРА
            ctx.save();
            const glowPulse = 0.85 + Math.sin(t * 2.0) * 0.15;
            const glowR = gw * 0.95 * glowPulse;
            const coreGlow = ctx.createRadialGradient(0, 0, gw * 0.15, 0, 0, glowR);
            coreGlow.addColorStop(0, 'rgba(0, 245, 255, 0.40)');     // Мягкий циан в центре
            coreGlow.addColorStop(0.45, 'rgba(0, 180, 255, 0.18)');  // Рассеянный полутон
            coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');            // Уход в прозрачность

            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(0, 0, glowR, 0, Math.PI * 2);
            ctx.fill();

            // Само ядро
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 8 + Math.sin(t * 1.5) * 4;
            if (guardCoreImg.complete && guardCoreImg.naturalWidth !== 0) {
                ctx.drawImage(guardCoreImg, -gw / 2, -gh / 2, gw, gh);
            }
            ctx.restore();

            // ХАОТИЧНЫЕ ДИСТАНЦИИ ПЛАСТИН:
            const distLU = 35 + Math.sin(t * 1.7 + 0.5) * 4.5 + Math.cos(t * 0.8) * 1.5;
            const distRU = 34 + Math.sin(t * 1.2 + 2.3) * 4.0 + Math.sin(t * 2.1) * 1.8;
            const distLD = 36 + Math.sin(t * 2.0 + 4.1) * 5.0 + Math.cos(t * 1.3) * 1.6;
            const distRD = 35 + Math.sin(t * 1.4 + 5.8) * 4.2 + Math.sin(t * 0.9) * 2.0;

            // Верхние пластины (434x521)
            const upW = 38;
            const upH = upW * (521 / 434);
            if (guardLUImg.complete && guardLUImg.naturalWidth !== 0) {
                ctx.drawImage(guardLUImg, -distLU - upW / 2, -distLU - upH / 2, upW, upH);
            }
            if (guardRUImg.complete && guardRUImg.naturalWidth !== 0) {
                ctx.drawImage(guardRUImg, distRU - upW / 2, -distRU - upH / 2, upW, upH);
            }

            // Нижние пластины (374x350)
            const dnW = 36;
            const dnH = dnW * (350 / 374);
            if (guardLDImg.complete && guardLDImg.naturalWidth !== 0) {
                ctx.drawImage(guardLDImg, -distLD - dnW / 2, distLD - dnH / 2, dnW, dnH);
            }
            if (guardRDImg.complete && guardRDImg.naturalWidth !== 0) {
                ctx.drawImage(guardRDImg, distRD - dnW / 2, distRD - dnH / 2, dnW, dnH);
            }

            ctx.restore();
        }
        // 4. Космический грузовик (Плотные ракетные факелы из 3-х турбин)
        else if (obj.type === 'cosmo_track') {
            obj.animTimer += dt;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer * 2) * 4);

            if (obj.fromLeft) ctx.scale(-1, 1);

            const tw = 160, th = 65;

            // 1. Сначала рисуем грузовик
            if (cosmoTrackImg.complete && cosmoTrackImg.naturalWidth !== 0) {
                ctx.drawImage(cosmoTrackImg, -tw / 2, -th / 2, tw, th);
            }

            // 2. Функция плотного ракетного факела
            const drawTruckFlameCone = (startX, startY, baseH, len) => {
                ctx.save();
                ctx.shadowColor = '#e67e22';
                ctx.shadowBlur = 12;

                const grad = ctx.createLinearGradient(startX, startY, startX + len, startY);
                grad.addColorStop(0, '#ffffff');                     // Белое ядро
                grad.addColorStop(0.2, '#f1c40f');                   // Желтый центр
                grad.addColorStop(0.6, 'rgba(230, 126, 34, 0.85)'); // Оранжевое тело
                grad.addColorStop(1, 'rgba(231, 76, 60, 0)');        // Хвост

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.moveTo(startX, startY - baseH / 2);
                // Дуги Безье делают пламя округлым и объемным (как у ракеты)
                ctx.quadraticCurveTo(startX + len * 0.45, startY - baseH * 0.7, startX + len, startY);
                ctx.quadraticCurveTo(startX + len * 0.45, startY + baseH * 0.7, startX, startY + baseH / 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };

            // Длина пламени (регулируй fLen)
            const fLen = 32 + Math.random() * 12;

            // ТОЛЩИНА: 13 и 15 px вместо старых 7-8 px (3-е число в скобках)
            drawTruckFlameCone(62.5, -12.8, 9, fLen * 0.9); // Верхнее сопло
            drawTruckFlameCone(64.1, -0.1, 11, fLen);       // Центральное сопло
            drawTruckFlameCone(62.4, 13.0, 9, fLen * 0.9); // Нижнее сопло

            ctx.restore();
        }
        // 5. Шаттл (Широкий неоновый плазменный факел #20ECF4)
        else if (obj.type === 'shutle') {
            obj.animTimer += dt;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer * 2) * 8);

            if (obj.fromLeft) ctx.scale(-1, 1);

            const sw = 150, sh = 39;

            // 1. Сначала шаттл
            if (shutleImg.complete && shutleImg.naturalWidth !== 0) {
                ctx.drawImage(shutleImg, -sw / 2, -sh / 2, sw, sh);
            }

            // 2. Параметры пламени шаттла
            const startX = 41.4;
            const startY = 0.1;
            const flameLen = 45 + Math.random() * 15; // Длина струи
            const flameH = 18;                        // ТОЛЩИНА (было 9, стало 18 px!)

            ctx.save();
            ctx.shadowColor = '#20ECF4';
            ctx.shadowBlur = 18; // Увеличенное яркое неоновое свечение

            const flameGrad = ctx.createLinearGradient(startX, startY, startX + flameLen, startY);
            flameGrad.addColorStop(0, '#ffffff');
            flameGrad.addColorStop(0.25, '#20ECF4');
            flameGrad.addColorStop(0.65, 'rgba(0, 168, 255, 0.75)');
            flameGrad.addColorStop(1, 'rgba(32, 236, 244, 0)');

            ctx.fillStyle = flameGrad;
            ctx.beginPath();
            ctx.moveTo(startX, startY - flameH / 2);
            // Округлая форма факела
            ctx.quadraticCurveTo(startX + flameLen * 0.45, startY - flameH * 0.7, startX + flameLen, startY);
            ctx.quadraticCurveTo(startX + flameLen * 0.45, startY + flameH * 0.7, startX, startY + flameH / 2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
            ctx.restore();
        }
        // 6. Замороженный Астероид (Замедлено вращение)
        else if (obj.type === 'asteroid_creature') {
            // Было 1.5, стало 0.35 (крутится очень медленно и тяжело)
            obj.rot += dt * (obj.fromLeft ? 0.35 : -0.35);
            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(obj.rot);
            if (asteroidCreatureImg.complete) ctx.drawImage(asteroidCreatureImg, -45, -45, 90, 90);
            ctx.restore();
        }
        // 7. Космические Змеи (Титаническое плавное парение)
        else if (obj.type === 'cr2' || obj.type === 'creature1') {
            obj.animTimer += dt * 8; // Смена 8 кадров пасти в секунду

            if (!obj.moveTimer) obj.moveTimer = 0;
            obj.moveTimer += dt;

            const frameIdx = Math.floor(obj.animTimer) % 6;
            const frame = (obj.type === 'cr2') ? cr2Frames[frameIdx] : cr1Frames[frameIdx];

            ctx.save();

            // Плавная синусоида: низкая частота 1.6 вместо нервной 12, амплитуда 7 px
            ctx.translate(obj.x, obj.y + Math.sin(obj.moveTimer * 1.6) * 7);

            let flip = false;
            if (obj.type === 'cr2' && !obj.fromLeft) flip = true;
            if (obj.type === 'creature1' && obj.fromLeft) flip = true;

            if (flip) ctx.scale(-1, 1);

            // === РАЗМЕР МОДЕЛИ В ИГРЕ ===
            // Было: -80, -30, 160, 60. Стало: увеличенная модель титана 205x77
            const creatureW = 205;
            const creatureH = 77;

            if (frame && frame.complete && frame.naturalWidth !== 0) {
                ctx.drawImage(frame, -creatureW / 2, -creatureH / 2, creatureW, creatureH);
            }
            ctx.restore();
        }
        // 8. Метеозонд (Правильные обрезанные пропорции 148x340)
        else if (obj.type === 'balloon') {
            obj.animTimer += dt * 2;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer) * 5);

            // Пропорции: ширина 55, высота 126
            if (balloonImg.complete) ctx.drawImage(balloonImg, -27.5, -63, 55, 126);
            ctx.restore();
        }

        // --- СТАРЫЕ ОБЪЕКТЫ ---

        else if (obj.type === 'seagull') {
            obj.animTimer += dt * 7;
            const fIdx = seagullAnimSeq[Math.floor(obj.animTimer) % seagullAnimSeq.length];
            const frame = seagullFrames[fIdx];
            ctx.save(); ctx.translate(obj.x, obj.y); if (!obj.fromLeft) ctx.scale(-1, 1);
            if (frame && frame.complete) ctx.drawImage(frame, -20, -14, 40, 28);
            ctx.restore();
        }
        else if (obj.type === 'airplane') {
            obj.animTimer += dt * 3;
            ctx.save(); ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer) * 2); if (!obj.fromLeft) ctx.scale(-1, 1);
            if (planeImg.complete) ctx.drawImage(planeImg, -30, -15, 60, 30);
            ctx.restore();
        }
        else if (obj.type === 'satellite') {
            obj.rot += dt * 0.4;
            ctx.save(); ctx.translate(obj.x, obj.y); ctx.rotate(obj.rot);
            if (satelliteImg.complete) ctx.drawImage(satelliteImg, -35, -19, 70, 38);
            ctx.fillStyle = (Math.floor(Date.now() / 350) % 2 === 0) ? '#ff2222' : '#440000';
            ctx.beginPath(); ctx.arc(0, -1, 1.4, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        }
        else if (obj.type === 'ufo') {
            obj.animTimer += dt * 5;
            ctx.save(); ctx.translate(obj.x, obj.y); ctx.rotate((obj.fromLeft ? 0.15 : -0.15) + Math.sin(obj.animTimer) * 0.08);
            if (ufoImg.complete) ctx.drawImage(ufoImg, -25, -15, 50, 30);
            ctx.fillStyle = `rgba(0, 255, 200, ${(Math.sin(obj.animTimer * 2) + 1) * 0.4})`;
            ctx.beginPath(); ctx.arc(0, 10, 4, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        }
        else if (obj.type === 'cloud') {
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.size * 0.8, 0, Math.PI * 2);
            ctx.arc(obj.x + obj.size * 0.5, obj.y - obj.size * 0.2, obj.size * 0.7, 0, Math.PI * 2);
            ctx.arc(obj.x - obj.size * 0.5, obj.y - obj.size * 0.1, obj.size * 0.6, 0, Math.PI * 2);
            ctx.arc(obj.x + obj.size * 0.9, obj.y + obj.size * 0.1, obj.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
        }
        else if (obj.type === 'solo_rocket') {
            obj.x += obj.vx * dt;
            obj.y += obj.vy * dt;

            // Угол наклона строго по направлению движения:
            const rocketAngle = Math.atan2(obj.vx, -obj.vy);

            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(rocketAngle); // Поворачиваем ракету вместе с факелом

            if (rocketImg.complete) ctx.drawImage(rocketImg, -75, -50, 150, 100);

            const flameY = 25;
            const flameH = 20 + Math.random() * 12;
            const flameGrad = ctx.createLinearGradient(0, flameY, 0, flameY + flameH);
            flameGrad.addColorStop(0, '#ffffff');
            flameGrad.addColorStop(0.2, '#f1c40f');
            flameGrad.addColorStop(0.5, '#e67e22');
            flameGrad.addColorStop(1, 'rgba(231, 76, 60, 0)');
            ctx.fillStyle = flameGrad;
            ctx.beginPath();
            ctx.moveTo(-8, flameY);
            ctx.lineTo(8, flameY);
            ctx.lineTo(0, flameY + flameH);
            ctx.fill();

            ctx.restore();
            if (obj.y < -150) obj.x = -999;
        }
        else if (obj.type === 'solo_meteor') {
            obj.x += obj.vx * dt; obj.y += obj.vy * dt;
            obj.y += ladderSpeed * obj.speedMult * 18 * dt;
            ctx.save(); ctx.translate(obj.x, obj.y); ctx.rotate(obj.angle - Math.PI / 4);
            const tailLen = 45 + Math.random() * 8;
            const tailGrad = ctx.createRadialGradient(0, 0, 4, -18, -18, tailLen);
            tailGrad.addColorStop(0, 'rgba(255, 220, 120, 0.95)'); tailGrad.addColorStop(0.3, 'rgba(243, 156, 18, 0.75)');
            tailGrad.addColorStop(1, 'rgba(231, 76, 60, 0)');
            ctx.fillStyle = tailGrad; ctx.beginPath(); ctx.ellipse(-15, -15, tailLen, 16 + Math.random() * 6, Math.PI / 4, 0, Math.PI * 2); ctx.fill();
            if (meteorImg.complete) ctx.drawImage(meteorImg, -22, -22, 45, 45);
            ctx.restore();
            if (obj.y > canvas.height + 120 || obj.x < -120 || obj.x > canvas.width + 120) obj.x = -999;
        }
        else if (obj.type === 'rocket_event') {
            obj.t += dt * 0.12;
            if (obj.t < 0.5 && !obj.exploded) {
                const p = obj.t / 0.5;
                const curRocketX = obj.startX_r + (obj.targetX - obj.startX_r) * p;
                const curRocketY = obj.startY_r + (obj.targetY - obj.startY_r) * p;

                // Наклон точно по вектору полёта к цели (метеориту):
                const rocketAngle = Math.atan2(obj.targetX - obj.startX_r, -(obj.targetY - obj.startY_r));

                ctx.save();
                ctx.translate(curRocketX, curRocketY);
                ctx.rotate(rocketAngle);

                if (rocketImg.complete) ctx.drawImage(rocketImg, -75, -50, 150, 100);
                const fg = ctx.createLinearGradient(0, 25, 0, 25 + 18 + Math.random() * 10);
                fg.addColorStop(0, '#fff');
                fg.addColorStop(0.2, '#f1c40f');
                fg.addColorStop(1, 'rgba(231,76,60,0)');
                ctx.fillStyle = fg;
                ctx.beginPath();
                ctx.moveTo(-8, 25);
                ctx.lineTo(8, 25);
                ctx.lineTo(0, 25 + 18 + Math.random() * 10);
                ctx.fill();
                ctx.restore();

                // Метеорит (поворот строго по направлению к ракете)
                const meteorAngle = Math.atan2(obj.targetY - obj.startY_m, obj.targetX - obj.startX_m);

                ctx.save();
                ctx.translate(obj.startX_m + (obj.targetX - obj.startX_m) * p, obj.startY_m + (obj.targetY - obj.startY_m) * p);
                ctx.rotate(meteorAngle - Math.PI / 4); // Выравниваем нос и хвост по траектории

                const tg = ctx.createRadialGradient(0, 0, 4, -18, -18, 45 + Math.random() * 8);
                tg.addColorStop(0, 'rgba(255,220,120,0.95)');
                tg.addColorStop(1, 'rgba(231,76,60,0)');
                ctx.fillStyle = tg;
                ctx.beginPath();
                ctx.ellipse(-15, -15, 45 + Math.random() * 8, 16 + Math.random() * 6, Math.PI / 4, 0, Math.PI * 2);
                ctx.fill();
                if (meteorImg.complete) ctx.drawImage(meteorImg, -22, -22, 45, 45);
                ctx.restore();
            } else if (!obj.exploded) {
                obj.exploded = true;
                shakeTime = 16;
                AudioEngine.play('explosion_2', 0.8);
                for (let k = 0; k < 14; k++) debrisArray.push({ x: obj.targetX, y: obj.targetY, vx: (Math.random() - 0.5) * 24, vy: (Math.random() - 0.5) * 24, rot: Math.random() * Math.PI, rotSpeed: 0.35, width: 10 + Math.random() * 8, height: 10 + Math.random() * 8 });
            }
            if (obj.t >= 1.0) { obj.x = -999; obj.y = -999; }
        }
        else {
            ctx.save();
            ctx.fillStyle = obj.color;
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Удаление объектов, улетевших за экран
        if (obj.x < -200 || obj.x > canvas.width + 200 || obj.y > canvas.height + 250) {
            bgObjects.splice(i, 1);
        }
    }
}
// === АНИМАЦИЯ РЕТРО-МОНЕТКИ ===
const coinFrames = [];
for (let i = 1; i <= 4; i++) {
    let img = new Image();
    img.src = `assets/coin_frame${i}.webp`; // Точно как на твоем скриншоте
    coinFrames.push(img);
}

// ==========================================
// === НОВАЯ СИСТЕМА КАСТОМИЗАЦИИ И УДАЧИ ===
// ==========================================

let currentCustType = null; // 'speakers' или 'newton'
let selectedCustSkin = null; // ID скина, который сейчас рассматриваем в модалке

const custModal = document.getElementById('customization-modal');
const luckModal = document.getElementById('luck-modal');

// Обновление иконок прямо на игровом экране
function updateFieldIcons() {
    const spIcon = document.getElementById('field-icon-speaker');
    const nwIcon = document.getElementById('field-icon-newton');
    const lkVal = document.getElementById('field-luck-val');
    const lkIcon = document.getElementById('field-luck-icon');
    const btnLuck = document.getElementById('btn-field-luck');

    if (spIcon) {
        const curSp = SPEAKER_SKINS[currentSpeakerSkin] || SPEAKER_SKINS.old;
        spIcon.src = curSp.file || 'assets/old_speaker.webp';
        spIcon.style.display = 'block';
    }
    if (nwIcon) {
        const curNw = NEWTON_SKINS[currentNewtonSkin] || NEWTON_SKINS.steel;
        nwIcon.src = curNw.file || STEEL_BALL_IMG_URL;
        nwIcon.style.display = 'block';
    }

    // 1. Делаем саму кнопку контейнером для абсолютного позиционирования
    if (btnLuck) {
        btnLuck.style.position = 'relative';
        btnLuck.style.display = 'flex';
        btnLuck.style.alignItems = 'center';
        btnLuck.style.justifyContent = 'center';
        btnLuck.style.padding = '0';
        btnLuck.style.overflow = 'hidden';
    }

    // 2. Иконка/талисман растягивается почти на весь квадрат
    if (lkIcon) {
        lkIcon.style.width = '100%';
        lkIcon.style.height = '100%';
        lkIcon.style.display = 'flex';
        lkIcon.style.alignItems = 'center';
        lkIcon.style.justifyContent = 'center';

        if (currentTalisman && TALISMANS[currentTalisman]) {
            lkIcon.innerHTML = `<img src="${TALISMANS[currentTalisman].file}" style="width: 82%; height: 82%; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.7));">`;
        } else {
            lkIcon.innerHTML = `<img src="assets/clover_lucky.webp" style="width: 75%; height: 75%; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));">`;
        }
    }

    // 3. Число удачи превращаем в компактный бейдж в правом нижнем углу
    // В функции updateFieldIcons() замени блок стилей lkVal:
    if (lkVal) {
        lkVal.innerText = getTotalLuck();
        lkVal.style.position = 'absolute';
        lkVal.style.bottom = '1px';
        lkVal.style.right = '2px';
        lkVal.style.fontSize = '8.5px';       // Уменьшили шрифт
        lkVal.style.fontWeight = 'bold';
        lkVal.style.color = '#2ecc71';
        lkVal.style.background = 'rgba(8, 12, 16, 0.88)';
        lkVal.style.padding = '0px 3px';     // Уменьшили плашку
        lkVal.style.borderRadius = '3px';
        lkVal.style.border = '1px solid rgba(46, 204, 113, 0.4)';
        lkVal.style.lineHeight = '1.1';
        lkVal.style.pointerEvents = 'none';
    }
}

// Открытие окна Удачи
document.getElementById('btn-field-luck').onclick = () => {
    renderLuckModal();
    luckModal.classList.remove('hidden');
    AudioEngine.play('click', 0.5);
};
document.getElementById('btn-close-luck').onclick = () => luckModal.classList.add('hidden');

// Открытие окна Кастомизации
document.getElementById('btn-field-speaker').onclick = () => openCustomization('speakers');
document.getElementById('btn-field-newton').onclick = () => openCustomization('newton');
document.getElementById('btn-close-cust').onclick = () => custModal.classList.add('hidden');

function openCustomization(type) {
    currentCustType = type;
    selectedCustSkin = (type === 'speakers') ? currentSpeakerSkin : currentNewtonSkin;

    // Настраиваем цвета и заголовки в зависимости от типа
    const titleEl = document.getElementById('cust-title');
    const modalBorder = document.querySelector('#customization-modal .modal-card');

    if (type === 'speakers') {
        titleEl.innerHTML = '📻 Колонки';
        titleEl.style.color = '#3498db';
        modalBorder.style.borderColor = '#3498db';
    } else {
        titleEl.innerHTML = '⚪ Шары Ньютона';
        titleEl.style.color = '#9b59b6';
        modalBorder.style.borderColor = '#9b59b6';
    }

    renderCustomizationModal();
    custModal.classList.remove('hidden');
    AudioEngine.play('click', 0.5);
}

// Отрисовка внутренностей окна кастомизации
function renderCustomizationModal() {
    const itemsSource = (currentCustType === 'speakers') ? SPEAKER_SKINS : NEWTON_SKINS;
    const ownedList = (currentCustType === 'speakers') ? ownedSpeakerSkins : ownedNewtonSkins;
    const equippedId = (currentCustType === 'speakers') ? currentSpeakerSkin : currentNewtonSkin;

    const skinData = itemsSource[selectedCustSkin];
    if (!skinData) return;

    // 1. Блок прокачки базовой мощи
    const lvlEl = document.getElementById('cust-base-lvl');
    const powerEl = document.getElementById('cust-base-power');
    const upgBtn = document.getElementById('btn-cust-upgrade');

    let currentLvl = (currentCustType === 'speakers') ? speakerLevel : newtonLevel;
    let cost = getUpgradeCost(currentCustType === 'speakers' ? 'speaker' : 'newton', currentLvl);
    let powerTxt = '';

    if (currentCustType === 'speakers') {
        powerTxt = `Мощь: ${speakerMPS} м/сек`;
    } else {
        let actualNSpeed = Math.max(500, 3000 - (newtonLevel * 130));
        powerTxt = `Удар: ${newtonPower} м (${(actualNSpeed / 1000).toFixed(1)}с)`;
    }

    lvlEl.innerText = currentLvl;
    powerEl.innerText = powerTxt;
    upgBtn.innerText = `Улучшить: ${cost} м`;
    upgBtn.style.background = (currentHeight >= cost) ? '#2ecc71' : '#7f8c8d';
    upgBtn.disabled = (currentHeight < cost);

    upgBtn.onclick = () => {
        if (currentHeight >= cost) {
            currentHeight -= cost;
            if (currentCustType === 'speakers') {
                speakerLevel++;
                speakerMPS = UPGRADES_CONFIG.speaker.basePower + (speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel);
            } else {
                newtonLevel++;
                newtonPower = UPGRADES_CONFIG.newton.basePower + (newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel);
            }
            triggerPurchaseEffect(cost);
            saveGame();
            renderCustomizationModal(); // перерисовываем
        }
    };

    // 2. Блок предпросмотра выбранного скина
    const defaultPreview = (currentCustType === 'speakers') ? 'assets/old_speaker.webp' : STEEL_BALL_IMG_URL;
    document.getElementById('cust-preview-img').src = skinData.file || defaultPreview;
    document.getElementById('cust-item-name').innerText = skinData.name;
    document.getElementById('cust-item-rarity').innerText = skinData.rarity;
    document.getElementById('cust-item-rarity').style.color = RARITY_COLORS[skinData.rarity] || '#fff';

let buffText = getItemBuffText(currentCustType, selectedCustSkin);
document.getElementById('cust-item-desc').innerHTML = buffText; // <-- СТРОГО innerHTML

    const badge = document.getElementById('cust-equipped-badge');
    const isEquipped = (selectedCustSkin === equippedId);
    const isOwned = ownedList.includes(selectedCustSkin);

    if (isEquipped) {
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    // 3. Кнопка действия (Купить / Надеть)
    const actionBtn = document.getElementById('btn-cust-action');
    if (isEquipped) {
        actionBtn.innerText = 'ВЫБРАНО';
        actionBtn.style.background = 'rgba(255,255,255,0.1)';
        actionBtn.style.color = '#bdc3c7';
        actionBtn.disabled = true;
    } else if (isOwned) {
        actionBtn.innerText = 'НАДЕТЬ';
        actionBtn.style.background = '#3498db';
        actionBtn.style.color = '#fff';
        actionBtn.disabled = false;
        actionBtn.onclick = () => {
            equipItem(currentCustType, selectedCustSkin);
            renderCustomizationModal();
            updateFieldIcons();
            checkAbsoluteUnlock();
            saveGame();
        };
    } else {
        // Покупка
        const isGold = skinData.priceType === 'goldenNuts';
        const currencyIcon = isGold ? '🟡' : '🔩';
        const canAfford = isGold ? (goldenNuts >= skinData.price) : (nuts >= skinData.price);

        actionBtn.innerText = `КУПИТЬ ЗА ${skinData.price} ${currencyIcon}`;
        actionBtn.style.background = canAfford ? (isGold ? '#f1c40f' : '#e67e22') : '#555';
        actionBtn.style.color = canAfford ? '#111' : '#bdc3c7';
        actionBtn.disabled = !canAfford;

        actionBtn.onclick = () => {
            const processPurchase = () => {
                if (isGold) {
                    goldenNuts -= skinData.price;
                } else {
                    nuts -= skinData.price;
                }
                ownedList.push(selectedCustSkin);
                equipItem(currentCustType, selectedCustSkin);
                AudioEngine.play('gaiki', 0.8);
                uiNuts.innerText = `${nuts}`;
                renderCustomizationModal();
                updateFieldIcons();
                saveGame();
            };

            if (isGold && goldenNuts >= skinData.price) {
                showConfirmPurchase('Покупка обвеса', `Купить "${skinData.name}" за ${skinData.price} 🟡?`, skinData.price, processPurchase);
            } else if (!isGold && nuts >= skinData.price) {
                processPurchase();
            }
        };
    }

    // 4. Горизонтальный список всех скинов
    const listEl = document.getElementById('cust-items-list');
    listEl.innerHTML = '';

    Object.keys(itemsSource).forEach(id => {
        const item = itemsSource[id];
        const color = RARITY_COLORS[item.rarity];
        const owned = ownedList.includes(id);
        const equip = (equippedId === id);
        const selected = (selectedCustSkin === id);

        const card = document.createElement('div');
        card.style.cssText = `
            width: 58px; height: 58px; flex-shrink: 0; border-radius: 10px; box-sizing: border-box;
            background: ${selected ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.4)'};
            border: 2px solid ${equip ? '#2ecc71' : (selected ? color : '#34495e')};
            display: flex; align-items: center; justify-content: center; cursor: pointer;
            opacity: ${owned ? '1' : '0.5'}; position: relative;
        `;

        const cardImg = item.file || ((currentCustType === 'speakers') ? 'assets/old_speaker.webp' : STEEL_BALL_IMG_URL);
        card.innerHTML = `<img src="${cardImg}" style="max-width: 70%; max-height: 70%; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">`;
        if (equip) {
            card.innerHTML += `<div style="position: absolute; bottom: 2px; right: 4px; font-size: 11px; font-weight: bold; color: #2ecc71;">✔</div>`;
        }

        card.onclick = () => {
            selectedCustSkin = id;
            AudioEngine.play('click', 0.5);
            renderCustomizationModal();
        };
        listEl.appendChild(card);
    });
}

// Отрисовка окна Удачи
function renderLuckModal() {
    const totalLuck = getTotalLuck();

    const luckValModal = document.getElementById('luck-total-val-modal');
    if (luckValModal) luckValModal.innerText = totalLuck;

    const lkValField = document.getElementById('field-luck-val');
    if (lkValField) lkValField.innerText = totalLuck;

    // Показываем картинку талисмана в модалке удачи
    const imgCont = document.getElementById('modal-luck-image-container');
    const imgEl = document.getElementById('modal-luck-image');
    if (imgCont && imgEl) {
        if (currentTalisman && TALISMANS[currentTalisman]) {
            imgEl.src = TALISMANS[currentTalisman].file;
            imgCont.style.display = 'block';
        } else {
            imgCont.style.display = 'none';
        }
    }

    // Модификаторы текстом
    const modEl = document.getElementById('luck-modifiers-list');
    if (!modEl) return;
    modEl.innerHTML = '';

    const ladderSkin = LADDER_SKINS[currentSkinId];
    if (ladderSkin && ladderSkin.buffs.luck) {
        modEl.innerHTML += `<div>🪜 Лестница «${ladderSkin.name}»: <b style="color:#2ecc71;">+${ladderSkin.buffs.luck}</b></div>`;
    }
    if (currentTalisman && TALISMANS[currentTalisman]) {
        modEl.innerHTML += `<div>🧿 Талисман «${TALISMANS[currentTalisman].name}»: <b style="color:#2ecc71;">+${TALISMANS[currentTalisman].luck}</b></div>`;
    }
    if (hasMech('cyber') && cyberExtraAccessory.type === 'talismans' && cyberExtraAccessory.id && TALISMANS[cyberExtraAccessory.id]) {
        modEl.innerHTML += `<div>🦾 Кибер-слот «${TALISMANS[cyberExtraAccessory.id].name}»: <b style="color:#00ffff;">+${TALISMANS[cyberExtraAccessory.id].luck}</b></div>`;
    }
    if (adState.fortuneTimer > 0) {
        modEl.innerHTML += `<div>📺 Буст от рекламы (Знак Фортуны): <b style="color:#2ecc71;">+15</b></div>`;
    }
    if (modEl.innerHTML === '') {
        modEl.innerHTML = `<div>Нет активных баффов удачи.</div>`;
    }

    // Горизонтальный список талисманов для покупки
    const listEl = document.getElementById('luck-talismans-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    let nextTalismanToBuy = TALISMANS_ORDER.find(tId => !ownedTalismans.includes(tId));

    TALISMANS_ORDER.forEach(id => {
        const item = TALISMANS[id];
        const isOwned = ownedTalismans.includes(id);
        const isEquipped = (currentTalisman === id);
        const color = RARITY_COLORS[item.rarity];

        const card = document.createElement('div');
        card.style.cssText = `
            width: 70px; flex-shrink: 0; border-radius: 10px; padding: 6px; text-align: center;
            background: rgba(0,0,0,0.4); border: 2px solid ${isEquipped ? '#f1c40f' : '#34495e'};
            opacity: ${isOwned || id === nextTalismanToBuy ? '1' : '0.4'};
        `;

        card.innerHTML = `
            <img src="${item.file}" style="height: 35px; object-fit: contain; margin-bottom: 4px;">
            <div style="font-size: 10px; font-weight: bold; color: ${color};">+${item.luck} 🍀</div>
        `;

        if (isEquipped) {
            card.innerHTML += `<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">НАДЕТО</div>`;
        } else if (isOwned) {
            const btn = document.createElement('button');
            btn.innerText = 'Надеть';
            btn.style.cssText = 'width: 100%; margin-top: 4px; padding: 4px; font-size: 9px; background: #3498db; color: #fff; border: none; border-radius: 4px; cursor: pointer;';
            btn.onclick = () => { equipItem('talismans', id); renderLuckModal(); updateFieldIcons(); saveGame(); };
            card.appendChild(btn);
        } else if (id === nextTalismanToBuy) {
            const canAfford = goldenNuts >= item.price;
            const btn = document.createElement('button');
            btn.innerHTML = `${item.price} <img src="assets/golden_nut.webp" class="ui-ico-sm">`;
            btn.style.cssText = `width: 100%; margin-top: 4px; padding: 4px; font-size: 9px; font-weight: bold; background: ${canAfford ? '#f1c40f' : '#555'}; color: #111; border: none; border-radius: 4px; cursor: pointer;`;
            btn.disabled = !canAfford;
            btn.onclick = () => {
                if (goldenNuts >= item.price) {
                    showConfirmPurchase('Новый талисман', `Купить талисман "${item.name}" за ${item.price} 🟡?`, item.price, () => {
                        goldenNuts -= item.price;
                        ownedTalismans.push(id);
                        equipItem('talismans', id);
                        AudioEngine.play('gaiki', 0.8);
                        renderLuckModal();
                        updateFieldIcons();
                        saveGame();
                    });
                }
            };
            card.appendChild(btn);
        } else {
            card.innerHTML += `<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Закрыто</div>`;
        }

        listEl.appendChild(card);
    });
}

// --- АВТОКЛИКЕРЫ (ПРАВИЛЬНЫЙ РАСЧЕТ) ---
function updateAutoClickers(dt) {
    if (typeof dt !== 'number' || isNaN(dt) || dt <= 0) return;

    const skin = { buffs: getActiveLadderBuffs() };

    // 1. КОЛОНКА
    if (speakerLevel > 0) {
        const sTimeMult = hasMech('strato') ? 1.42 : 1.0;
        speakerTimer += (dt * sTimeMult);

        const isCoolSpeaker = currentSpeakerSkin === 'cool' || (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id === 'cool');
        const speakerInterval = isCoolSpeaker ? 1500 : 1000;

        if (speakerTimer >= speakerInterval) {
            speakerTimer -= speakerInterval;
            speakerPulseCount++;

            const speakerSkinData = SPEAKER_SKINS[currentSpeakerSkin] || SPEAKER_SKINS.old;
            const speakerMult = speakerSkinData.buff?.mpsMult || 1.0;

            // Проверка доп. множителя Киберпанка
            let cyberSpeakerMult = 1.0;
            if (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id) {
                cyberSpeakerMult = SPEAKER_SKINS[cyberExtraAccessory.id]?.buff?.mpsMult || 1.0;
            }

            const speakerAdd = skin.buffs.speakerAdd || 0;
            let finalMPS = Math.floor((speakerMPS + speakerAdd) * speakerMult * cyberSpeakerMult);
            if (hasMech('vine')) finalMPS = Math.round(finalMPS * 1.4);

            // МЕХАНИКА 3 (ЗЕМЛЯ): +25% MPS за каждый активный бафф
            finalMPS = Math.floor(finalMPS * getPlanetBuffMultiplier());

            if (adState.turboTimer > 0) finalMPS *= 3;

            currentHeight += Math.round(finalMPS * getGlobalMultiplier());
            checkHeightMilestones();

            // Безопасный звук колонки
            if (speakerSkinData.sound) {
                AudioEngine.play(speakerSkinData.sound, 0.4, 'speaker');
            }

            // Безопасная анимация (не крашит цикл, если элемента нет)
            if (slotSpeaker) {
                slotSpeaker.style.transform = 'scale(1.2)';
                setTimeout(() => { if (slotSpeaker) slotSpeaker.style.transform = 'scale(1)'; }, 100);
            }

            if (isCoolSpeaker && speakerPulseCount % 3 === 0) {
				const spGold = addGoldenNuts(1);

				// 1. Точные координаты висящей колонки на тросах:
				const targetWidth = canvas.width * 0.27;
				const ladderLeft = canvas.width / 2 - targetWidth / 2;
				const speakerCenterX = ladderLeft - 36; // Ровно центр подвешенной колонки
				const speakerTopY = canvas.height * 0.50 + ladderDropY;

				// 2. Спавним партикл с картинкой золотой гайки (без эмодзи):
				particles.push({
					x: speakerCenterX,
					y: speakerTopY,
					img: canvasIcoGold,        // Картинка golden_nut.webp
					imgSize: 22,
					text: `+${spGold}`,        // Только цифра, без желтого кружка
					color: '#f1c40f',
					font: 'bold 22px sans-serif',
					alpha: 1.8,
					speed: 2.2
				});

				if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
			}
        }
    }

    // 2. ШАРИКИ НЬЮТОНА
    if (newtonLevel > 0) {
        const nTimeMult = hasMech('strato') ? 1.42 : 1.0;
        newtonTimer += (dt * nTimeMult);

        let actualNSpeed = newtonSpeed;
        if (hasMech('plastic')) actualNSpeed = Math.max(200, actualNSpeed - 150);
        const activeEff = currentEffectId || currentSkinId;
        if (hasMech('cement') && activeEff !== 'absolute') {
            actualNSpeed += 300;
        }

        if (newtonTimer >= actualNSpeed && newtonAnimProgress === 0) {
            newtonAnimProgress = 0.001;
            newtonLeftHitFired = false;
        }

        if (newtonAnimProgress > 0) {
            const animDuration = Math.min(1200, actualNSpeed * 0.85);
            newtonAnimProgress += dt / animDuration;

            const newtonMult = (NEWTON_SKINS[currentNewtonSkin]?.buff?.powerMult) || 1.0;

            // Проверка доп. множителя Киберпанка
            let cyberNewtonMult = 1.0;
            if (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id) {
                cyberNewtonMult = NEWTON_SKINS[cyberExtraAccessory.id]?.buff?.powerMult || 1.0;
            }

            const newtonAdd = skin.buffs.newtonAdd || 0;
            const cementMult = skin.buffs.newtonMult || 1.0;

            let baseHit = Math.floor((newtonPower + newtonAdd) * newtonMult * cementMult * cyberNewtonMult);
            if (hasMech('vine')) baseHit = Math.round(baseHit * 1.4);

            // МЕХАНИКА 3 (ЗЕМЛЯ): +25% силы шаров за каждый активный бафф
            baseHit = Math.floor(baseHit * getPlanetBuffMultiplier());

            const processBallHit = (isRightBall, ballX) => {
                newtonHitCount++;
                let hitDamage = baseHit;

                const isBilliard = currentNewtonSkin === 'billiard' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'billiard');
                const isPlasma = currentNewtonSkin === 'plasma' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'plasma');
                const isPlanet = currentNewtonSkin === 'planet' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'planet');

                if (isBilliard && newtonHitCount % 8 === 0) {
                    hitDamage = Math.floor(hitDamage * 2.5);
                    const bNuts = Math.floor(3 + Math.random() * 3);
                    addNuts(bNuts);
                    particles.push({ x: ballX, y: canvas.height * 0.22, text: `🎱 x2.5! +${bNuts} 🔩`, color: '#ffffff', font: 'bold 20px sans-serif', alpha: 1.6, speed: 2 });
                }

                // МЕХАНИКА 3 (ЗЕМЛЯ): 1% шанс на активацию случайного бонуса
                if (isPlanet && Math.random() < 0.01) {
                    const bonuses = ['turbo', 'fortune', 'frenzy'];
                    const picked = bonuses[Math.floor(Math.random() * bonuses.length)];

                    if (picked === 'turbo') {
                        adState.turboTimer = Math.max(adState.turboTimer, 0) + 20000;
                        particles.push({ x: ballX, y: canvas.height * 0.22, text: '🌍 ТУРБО x3 (20с)!', color: '#e67e22', font: 'bold 20px sans-serif', alpha: 2.2, speed: 2 });
                    } else if (picked === 'fortune') {
                        adState.fortuneTimer = Math.max(adState.fortuneTimer, 0) + 60000;
                        particles.push({ x: ballX, y: canvas.height * 0.22, text: '🌍 УДАЧА +15 (60с)!', color: '#2ecc71', font: 'bold 20px sans-serif', alpha: 2.2, speed: 2 });
                    } else if (picked === 'frenzy') {
                        adState.frenzyTimer = Math.max(adState.frenzyTimer, 0) + 15000;
                        particles.push({ x: ballX, y: canvas.height * 0.22, text: '🌍 ГАЙКОПАД (15с)!', color: '#f1c40f', font: 'bold 20px sans-serif', alpha: 2.2, speed: 2 });
                    }
                    AudioEngine.play('win', 0.85);
                }

                const boxAdd = isPlanet ? 3 : 1;
                clicksForBox += boxAdd;
                if (isPlanet) shakeTime = Math.max(shakeTime, 10);

                let actualNeeded = clicksNeeded;
                if (skin.buffs.caseLimitMinus) actualNeeded -= skin.buffs.caseLimitMinus;
                actualNeeded = Math.max(10, actualNeeded);

                if (clicksForBox >= actualNeeded) {
                    clicksForBox -= actualNeeded;
                    boxesOwned++;
                    userCases.wooden = boxesOwned;
                    if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                    pityStage++;
                    clicksNeeded = getClicksNeeded(pityStage);
                    triggerCaseGainedPopup();
                }
                if (uiBoxText) {
                    uiBoxText.innerText = `Ящик: ${clicksForBox}/${actualNeeded}`;
                }
                if (uiBoxProgress) {
                    uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / actualNeeded) * 100)}%`;
                }

                // Турбо x3 для шаров Ньютона
                if (adState.turboTimer > 0) hitDamage *= 3;

                const effectiveBallHit = Math.round(hitDamage * getGlobalMultiplier());
                currentHeight += effectiveBallHit;

                checkHeightMilestones();
                ladderScaleX = 1.06; ladderScaleY = 0.92; ladderSpeed = 16;
                shakeTime = Math.max(shakeTime, 7);

                AudioEngine.play(NEWTON_SKINS[currentNewtonSkin].sound, 0.6, 'newton');
                particles.push({ 
                    x: ballX, 
                    y: canvas.height * 0.28 + ladderDropY, 
                    text: `+${effectiveBallHit}`,
                    alpha: 1, 
                    speed: 2.5 
                });
            }; // <-- ЗДЕСЬ ЗАКРЫВАЕТСЯ processBallHit!

            // Удар левого шара
            if (newtonAnimProgress >= 0.5 && !newtonLeftHitFired) {
                newtonLeftHitFired = true;
                processBallHit(false, canvas.width / 2 - (canvas.width * 0.2) - 25);
            }

            // Удар правого шара
            if (newtonAnimProgress >= 1.0) {
                newtonAnimProgress = 0;
                newtonTimer = 0;
                processBallHit(true, canvas.width / 2 + (canvas.width * 0.2) + 25);
            }
        }
    }
}

// Отрисовка пояса космического мусора (250 000м - 850 000м)
function drawCosmicDebris() {
    // 1. Расширили диапазон: теперь от 250 000 до 850 000
    if (visualHouseHeight < 250000 || visualHouseHeight > 850000) return;

    if (typeof cosmicDebrisImg === 'undefined') return;
    if (!cosmicDebrisImg.complete || !cosmicDebrisImg.naturalWidth || cosmicDebrisImg.naturalHeight === 0) return;

    let alpha = 1.0;
    // 2. Плавный вход с 250k до 300k (50 000 метров мягкого появления)
    if (visualHouseHeight < 300000) {
        alpha = (visualHouseHeight - 250000) / 50000;
    } else if (visualHouseHeight > 800000) {
        alpha = 1.0 - (visualHouseHeight - 800000) / 50000;
    }
    alpha = Math.max(0, Math.min(1, alpha));
    if (alpha <= 0) return;

    const time = Date.now();

    ctx.save();
    try {
        ctx.globalCompositeOperation = 'screen';

        const baseHeight = canvas.height * 0.40;
        const scale = baseHeight / cosmicDebrisImg.naturalHeight;
        const imgW = Math.ceil(cosmicDebrisImg.naturalWidth * scale);
        const imgH = Math.ceil(cosmicDebrisImg.naturalHeight * scale);

        if (imgW <= 0 || imgH <= 0) {
            ctx.restore();
            return;
        }

        // 3. Дистанция теперь 600 000 м (от 250k до 850k), чтобы он плавно шел сквозь всю зону
        const flightProgress = (visualHouseHeight - 250000) / 600000;
        const worldY = -imgH + (canvas.height + imgH * 2) * flightProgress;

        const drawLayer = (speedMult, scaleYMult, alphaMult, driftSpeed) => {
            ctx.save();
            ctx.globalAlpha = alpha * alphaMult;

            const breathe = 1.0 + Math.sin(time * 0.0004 * driftSpeed) * 0.15;
            const driftY = Math.cos(time * 0.0003 * driftSpeed) * 50;

            const currentScaleY = scaleYMult * breathe;
            const layerY = worldY + driftY;
            const scrollX = -(time * 0.04 * speedMult) % imgW;

            ctx.translate(0, layerY);
            ctx.scale(1, currentScaleY);

            ctx.drawImage(cosmicDebrisImg, scrollX, -imgH / 2, imgW, imgH);
            ctx.drawImage(cosmicDebrisImg, scrollX + imgW, -imgH / 2, imgW, imgH);

            ctx.restore();
        };

        drawLayer(0.4, 0.75, 0.35, 0.8);
        drawLayer(1.2, 1.0, 1.0, 1.3);
    } finally {
        ctx.restore();
    }
}

// --- ГЛАВНЫЙ ЦИКЛ ---
function gameLoop() {
    const now = performance.now();
    if (!window._lastLoopTime) window._lastLoopTime = now;

    const dt = Math.min(100, now - window._lastLoopTime);
    window._lastLoopTime = now;

    // ГАРАНТИЯ ДВИЖЕНИЯ: плавная высота непрерывно догоняет реальную высоту тапов
    if (isNaN(visualHouseHeight)) visualHouseHeight = currentHeight;
    visualHouseHeight += (currentHeight - visualHouseHeight) * 0.15;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    if (shakeTime > 0) {
        const shakeX = (Math.random() - 0.5) * (shakeTime * 1.5);
        const shakeY = (Math.random() - 0.5) * (shakeTime * 1.5);
        ctx.translate(shakeX, shakeY);
        shakeTime--;
    }

    // === 1. КОСМИЧЕСКАЯ ИНЕРЦИЯ (МЛЕЧНЫЙ ПУТЬ) ===
    if (hasMech('milkyway') && cosmicMomentum > 0) {
        currentHeight += (cosmicMomentum * getGlobalMultiplier()) * (dt / 1000);

        // Передаем скорость инерции в визуальный скролл лестницы
        ladderSpeed = Math.max(ladderSpeed, Math.min(32, cosmicMomentum * 0.15));

        cosmicMomentum -= (cosmicMomentum * 0.8) * (dt / 1000);
        if (cosmicMomentum < 0.5) cosmicMomentum = 0;
    }

    // === 2. РОСТ МАССЫ И ПЫЛЕСОС (ЧЁРНАЯ ДЫРА) ===
    const currentlyHasBH = hasMech('endless');

    if (currentlyHasBH) {
        wasBlackHole = true;

        // Набираем массу: +50% в минуту -> ровно 10.0 (1000%) за 20 минут (1200 сек)
        if (blackHoleBonus < 10.0) {
            blackHoleBonus = Math.min(10.0, blackHoleBonus + (10.0 / 1200) * (dt / 1000));
        }

        // Гравитационный автосбор (Пылесос)
        if (blackHoleBonus >= 3.0) {
            // На 1000% скорость притяжения бешеная
            const pullSpeed = (blackHoleBonus >= 10.0) ? 1500 : 300;

            // Засасываем контейнер НЛО (если он летит, ускоряем его в центр)
            if (typeof ufoGift !== 'undefined' && ufoGift.active) {
                ufoGift.progress += (pullSpeed / 10000) * (dt / 1000);
            }
            // ПРИМЕЧАНИЕ: Если у тебя есть падающие гайки или монетки, 
            // просто прибавляй к их координатам вектор в сторону центра экрана с силой pullSpeed.
        }
    } else {
        // === 3. ИЗЛУЧЕНИЕ ХОКИНГА (ВЗРЫВ ПРИ СНЯТИИ) ===
        if (wasBlackHole) {
            if (blackHoleBonus >= 10.0) {
                // Игрок дотерпел до 1000% и снял лестницу — выдаем катарсис!
                currentHeight += 100000;

                AudioEngine.play('jacpot', 1.0);
                shakeTime = 20; // Сильная тряска экрана

                particles.push({
                    x: canvas.width / 2, y: canvas.height / 2,
                    text: '💥 ИЗЛУЧЕНИЕ ХОКИНГА: +100 000 м!',
                    color: '#9b59b6', font: 'bold 28px sans-serif', alpha: 3.0, speed: 1.5
                });
            }
            blackHoleBonus = 0.0; // Сбрасываем массу
            wasBlackHole = false;
        }
    }

    drawBackground();
    drawFirstLocationBG();

    drawStarfield();

    drawMountain();
    drawEarthAtmosphere();
    drawCosmicDebris();     // Рисуется под лестницей

    drawTower();
    drawHouses();
    drawBGObjects();

    ladderScaleX += (1 - ladderScaleX) * 0.15;
    ladderScaleY += (1 - ladderScaleY) * 0.15;

    if (breakDelay > 0) breakDelay--;
    else ladderDropY += (0 - ladderDropY) * 0.15;

    if (ladderImg.complete) drawLadder();

    if (speakerLevel > 0) drawHangingSpeaker();
    if (newtonLevel > 0) drawNewtonCradle();

    drawDebris();
    drawParticles();
    ctx.restore();

    if (Math.abs(ladderSpeed) > 0.05) {
        ladderSpeed *= 0.85;
        ladderYOffset += ladderSpeed;
    } else {
        ladderSpeed = 0; // ЖЕЛЕЗНЫЙ СТОП: когда стоим на месте, скорость строго 0!
    }

    // Отсчет времени баффов рекламы
    if (adState.turboTimer > 0) adState.turboTimer = Math.max(0, adState.turboTimer - dt);
    if (adState.fortuneTimer > 0) adState.fortuneTimer = Math.max(0, adState.fortuneTimer - dt);
    if (adState.frenzyTimer > 0) adState.frenzyTimer = Math.max(0, adState.frenzyTimer - dt);

// === ПЛАЗМЕННЫЕ ШАРЫ: НАГРЕВ / ОСТЫВАНИЕ И ЗАЛП ПРИ БЕЗДЕЙСТВИИ ===
    const isPlasmaActive = currentNewtonSkin === 'plasma' || 
        (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'plasma');

    if (isPlasmaActive) {
        const tapNow = Date.now();
        clickTimestamps = clickTimestamps.filter(t => tapNow - t <= 1000);
        const currentCps = clickTimestamps.length;

        // Плавный нагрев при CPS >= 6, иначе остывание
        if (currentCps >= 6) {
            plasmaHeat = Math.min(1.0, plasmaHeat + (dt / 350));
        } else {
            plasmaHeat = Math.max(0.0, plasmaHeat - (dt / 700));
        }

        // МЕХАНИКА 2: Бездействие 5 секунд -> залп из 10 кликов за 0.5с
        if (plasmaBurstRemaining === 0 && (tapNow - lastPlayerTapTime >= 5000)) {
            lastPlayerTapTime = tapNow; // сбрасываем таймер
            plasmaBurstRemaining = 10;
            plasmaHeat = 1.0; // шар мгновенно вспыхивает на разряде

            AudioEngine.play('neon_newton', 0.9, 'newton');
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.28,
                img: lightningImg,
                imgSize: 28,
                text: 'РАЗРЯД (x10)!',
                color: '#00ffff',
                font: 'bold 22px sans-serif',
                alpha: 2.2,
                speed: 2
            });

            if (plasmaBurstTimer) clearInterval(plasmaBurstTimer);
            plasmaBurstTimer = setInterval(() => {
                if (plasmaBurstRemaining <= 0) {
                    clearInterval(plasmaBurstTimer);
                    plasmaBurstTimer = null;
                    return;
                }
                plasmaBurstRemaining--;
                const rect = canvas.getBoundingClientRect();
                const tapX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 40;
                const tapY = rect.top + rect.height * 0.45 + (Math.random() - 0.5) * 40;
                handleTap(tapX, tapY, true); // true = флаг авто-клика
            }, 50); // 10 кликов каждые 50мс = 500мс (полсекунды)
        }
    } else {
        plasmaHeat = 0.0;
    }

    updateAutoClickers(dt);
    updateShopUI();
    updateBoostsUI();

    // === НЛО (Каждые 30 сек спавн инопланетного контейнера) ===
    if (hasMech('ufo')) {
        ufoBonusTimer += dt;
        if (ufoBonusTimer >= 30000 && !ufoGift.active) {
            ufoBonusTimer = 0;

            ufoGift.active = true;
            ufoGift.progress = 0;
            ufoGift.targetX = canvas.width / 2;
            ufoGift.targetY = canvas.height * 0.45; // Тянем ровно в центр светящейся лестницы

            // Появление за экраном слева или справа-снизу
            const isLeft = Math.random() > 0.5;
            ufoGift.startX = isLeft ? -90 : canvas.width + 90;
            ufoGift.startY = canvas.height * (0.15 + Math.random() * 0.6);

            // Заранее решаем, что внутри контейнера
            const r = Math.random();
            if (r < 0.4) ufoGift.rewardType = 0;
            else if (r < 0.7) ufoGift.rewardType = 1;
            else if (r < 0.9) ufoGift.rewardType = 2;
            else ufoGift.rewardType = 3;

            AudioEngine.play('ufo_tap', 0.6); // Звук старта грави-луча
        }
    }

    // === АНИМАЦИЯ ПРИТЯГИВАНИЯ ПОДАРКА НЛО ===
    if (ufoGift.active) {
        // Контейнер притягивается 2.4 секунды
        ufoGift.progress += dt / 2400;

        if (ufoGift.progress >= 1.0) {
            // ВМЕСТО КУЧИ СТРОК С addNuts И particles ВЫЗЫВАЕМ ЕДИНУЮ ФУНКЦИЮ:
            claimUfoGift(ufoGift.targetX, ufoGift.targetY);
        } else {
            // Плавное замедление скорости при приближении к лестнице (EaseOut)
            const p = 1 - Math.pow(1 - ufoGift.progress, 3);

            const shakeStr = (1 - p) * 12;
            const shakeX = (Math.random() - 0.5) * shakeStr;
            const shakeY = (Math.random() - 0.5) * shakeStr;

            ufoGift.x = ufoGift.startX + (ufoGift.targetX - ufoGift.startX) * p + shakeX;
            ufoGift.y = ufoGift.startY + (ufoGift.targetY - ufoGift.startY) * p + shakeY;

            ctx.save();

            // 1. НЕОНОВЫЙ КОНУС ПРИТЯЖЕНИЯ
            const beamAlpha = 0.15 + Math.sin(Date.now() / 60) * 0.1; // Быстрое мерцание луча
            ctx.fillStyle = `rgba(0, 255, 100, ${beamAlpha})`;
            ctx.beginPath();
            ctx.moveTo(ufoGift.targetX, ufoGift.targetY); // Узкая вершина на лестнице

            // Широкий раструб луча захватывает сам контейнер
            const angleToGift = Math.atan2(ufoGift.y - ufoGift.targetY, ufoGift.x - ufoGift.targetX);
            ctx.lineTo(ufoGift.x - Math.cos(angleToGift - Math.PI / 2) * 55, ufoGift.y - Math.sin(angleToGift - Math.PI / 2) * 55);
            ctx.lineTo(ufoGift.x - Math.cos(angleToGift + Math.PI / 2) * 55, ufoGift.y - Math.sin(angleToGift + Math.PI / 2) * 55);
            ctx.fill();

            // 2. ДВИЖУЩИЕСЯ КОЛЬЦА/ВОЛНЫ ВНУТРИ ЛУЧА
            const waveP = (Date.now() % 500) / 500; // Цикл 0.5 сек (волна бежит к лестнице)
            const wX = ufoGift.x + (ufoGift.targetX - ufoGift.x) * waveP;
            const wY = ufoGift.y + (ufoGift.targetY - ufoGift.y) * waveP;

            ctx.strokeStyle = `rgba(0, 255, 150, ${1 - waveP})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(wX, wY, 15 + waveP * 35, 0, Math.PI * 2);
            ctx.stroke();

            // 3. ОТРИСОВКА САМОГО КОНТЕЙНЕРА (ufo_gift.webp)
            const gw = 85;
            if (ufoGiftImg.complete && ufoGiftImg.naturalWidth !== 0) {
                // Динамический расчет высоты, чтобы тарелка сохраняла идеальные пропорции
                const gh = gw * (ufoGiftImg.naturalHeight / ufoGiftImg.naturalWidth);

                ctx.translate(ufoGift.x, ufoGift.y);
                ctx.rotate(shakeX * 0.05); // Контейнер слегка кренится при рывках

                // Тень/Ореол вокруг контейнера
                ctx.shadowColor = '#00ff99';
                ctx.shadowBlur = 15;
                ctx.drawImage(ufoGiftImg, -gw / 2, -gh / 2, gw, gh);
            }

            ctx.restore();
        }
    }

    // === РЕТРО МОНЕТКА (Вылет строго раз в 45-65 секунд) ===
    if (hasMech('retro')) {
        if (!retroCoin.active) {
            retroCoinSpawnTimer += dt;
            if (retroCoinSpawnTimer >= nextCoinDelay) {
                retroCoinSpawnTimer = 0;
                nextCoinDelay = 20000 + Math.random() * 15000;

                retroCoin.active = true;
                retroCoin.x = 25 + Math.random() * (canvas.width - 90);
                retroCoin.y = canvas.height + 50;
                retroCoin.animTimer = 0;
            }
        }
    } else {
        retroCoinSpawnTimer = 0;
    }

    if (retroCoin.active) {
        retroCoin.y -= 180 * (dt / 1000);
        retroCoin.animTimer += dt;

        // Смена кадров каждые 130 мс
        const frameIdx = Math.floor(retroCoin.animTimer / 130) % 4;
        const currentFrame = coinFrames[frameIdx];

        if (currentFrame && currentFrame.complete && currentFrame.naturalWidth !== 0) {
            ctx.drawImage(currentFrame, retroCoin.x, retroCoin.y, retroCoin.size, retroCoin.size);
        } else {
            ctx.fillStyle = '#f1c40f';
            ctx.beginPath();
            ctx.arc(retroCoin.x + retroCoin.size / 2, retroCoin.y + retroCoin.size / 2, retroCoin.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }

        if (retroCoin.y < -100) retroCoin.active = false;
    }

    // Таймер ящика
    const isMonster = currentSpeakerSkin === 'monster' || (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id === 'monster');
    const activeBoxTarget = isMonster ? 60000 : 180000;
    if (!isTimedBoxReady) {
        activePlayBoxTimer += dt;
        if (activePlayBoxTimer >= activeBoxTarget) {
            activePlayBoxTimer = activeBoxTarget;
            isTimedBoxReady = true;
            AudioEngine.play('case_drop_by_click', 0.9);
        }
    }

    if (timedBoxText && btnClaimTimedBox) {
        const timedBoxLabel = document.getElementById('timed-box-label');
        if (isTimedBoxReady) {
            timedBoxText.innerText = "ГОТОВО!";
            if (timedBoxLabel) timedBoxLabel.style.display = 'none';
            btnClaimTimedBox.style.background = "#27ae60";
            btnClaimTimedBox.style.borderColor = "#2ecc71";
            btnClaimTimedBox.style.color = "#ffffff";
        } else {
            if (timedBoxLabel) timedBoxLabel.style.display = 'inline';
            const timeLeftSec = Math.max(0, Math.ceil((activeBoxTarget - activePlayBoxTimer) / 1000));
            const m = Math.floor(timeLeftSec / 60);
            const s = timeLeftSec % 60;
            timedBoxText.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
            btnClaimTimedBox.style.background = "rgba(44, 62, 80, 0.95)";
            btnClaimTimedBox.style.borderColor = "#f39c12";
            btnClaimTimedBox.style.color = "#f1c40f";
        }
        const topGoldDisplay = document.getElementById('gold-display');
        if (topGoldDisplay) topGoldDisplay.innerText = `${goldenNuts}`;
    }

    updateActiveBuffsDisplay();

    const uiNutsEl = document.getElementById('nuts-display');
    const uiGoldEl = document.getElementById('gold-display');
    if (uiNutsEl) uiNutsEl.innerText = `${nuts >= 10000 ? (nuts / 1000).toFixed(1) + 'K' : Math.floor(nuts)}`;
    if (uiGoldEl) uiGoldEl.innerText = `${goldenNuts >= 10000 ? (goldenNuts / 1000).toFixed(1) + 'K' : Math.floor(goldenNuts)}`;

    // === ИСПЫТАНИЕ НА 20 МИНУТ (РЕТРО-СКИН) ===
    const timerContainer = document.getElementById('retro-timer-container');

    // Показываем таймер только если скина еще нет
    if (!ownedSkins.includes('retro')) {
        if (timerContainer && timerContainer.classList.contains('hidden')) {
            timerContainer.classList.remove('hidden');
            timerContainer.style.display = 'flex';
        }

        retroChallengeMs += dt;
        const timeLeftMs = Math.max(0, RETRO_CHALLENGE_GOAL - retroChallengeMs);

        const progressCircle = document.getElementById('retro-timer-progress');
        const timerText = document.getElementById('retro-timer-text');

        // Обновляем текст
        if (timerText) {
            const m = Math.floor(timeLeftMs / 60000);
            const s = Math.floor((timeLeftMs % 60000) / 1000);
            const timeFormatted = `${m}:${s < 10 ? '0' : ''}${s}`;
            if (timerText) timerText.innerText = timeFormatted;

            const infoTimeText = document.getElementById('retro-info-time-left');
            if (infoTimeText) infoTimeText.innerText = timeFormatted;
        }

        // Полоса прогресса (82 — полная длина окружности для радиуса 13)
        if (progressCircle) {
            const pct = retroChallengeMs / RETRO_CHALLENGE_GOAL;
            progressCircle.style.strokeDashoffset = 82 - (pct * 82);
        }

        // Событие завершения испытания
        if (retroChallengeMs >= RETRO_CHALLENGE_GOAL) {
            // Выдаем скин, чтобы таймер больше не появлялся
            ownedSkins.push('retro');
            saveGame();

            if (timerContainer) timerContainer.classList.add('hidden');

            const modal = document.getElementById('retro-modal');
            if (modal) {
                modal.classList.remove('hidden');
                AudioEngine.play('jacpot', 1.0); // Эпичный звук победы
            }
        }
    } else {
        // Прячем таймер, если скин уже получен
        if (timerContainer && !timerContainer.classList.contains('hidden')) {
            timerContainer.classList.add('hidden');
        }
    }

    // === UI АНИМАЦИЯ СЧЁТЧИКА ВЫСОТЫ (LERP, SQUASH & STRETCH, DANGER FLASH) ===
    if (heightDisplay) {
        // 1. Lerp интерполяция высоты
        displayedHeight += (currentHeight - displayedHeight) * 0.25;
        const currentInt = Math.floor(displayedHeight);
        if (lastRenderedHeight !== currentInt) {
            heightDisplay.textContent = `${currentInt.toLocaleString('ru-RU')} м`;
            lastRenderedHeight = currentInt;
        }

        // 2. Пружинящий scale (Squash & Stretch)
        counterScale += (1.0 - counterScale) * 0.2;
        if (Math.abs(counterScale - 1.0) > 0.001) {
            heightDisplay.style.transform = `scale(${counterScale})`;
        } else {
            heightDisplay.style.transform = '';
        }

        // 3. Красная вспышка при списании (Danger Flash)
        // Плавное затухание вспышки урона/покупки
        if (dangerFlash > 0.01) {
            dangerFlash += (0.0 - dangerFlash) * 0.1;
            const val = Math.floor(255 * (1 - dangerFlash));
            heightDisplay.style.color = `rgb(255, ${val}, ${val})`;
        } else {
            heightDisplay.style.color = '#ffffff';
        }
    }

    // === UI АНИМАЦИЯ ШКАЛЫ ВЫСОТЫ (ALTITUDE TRACKER) ===
    markerBounce += (1.0 - markerBounce) * 0.2;
    updateAltitudeTrackerUI();

    requestAnimationFrame(gameLoop);
}

// Открытие окна информации об испытании
function openRetroInfo() {
    const modal = document.getElementById('retro-info-modal');
    if (modal) {
        modal.classList.remove('hidden');
        AudioEngine.play('click', 0.5);
    }
}

// Закрытие окна информации
function closeRetroInfo() {
    const modal = document.getElementById('retro-info-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// === КЭШИРОВАННОЕ ЗВЁЗДНОЕ НЕБО (OFFSCREEN CANVAS) ===


// === КЭШИРОВАННОЕ ЗВЁЗДНОЕ НЕБО (2 СЛОЯ ДЛЯ ПАРАЛЛАКСА) ===
function initStarfield() {
    if (!canvas || !canvas.width || !canvas.height) return;

    const w = canvas.width;
    const h = Math.round(canvas.height * 2.5);

    // -------------------------------------------------------------
    // СЛОЙ 1: ДАЛЬНИЙ ФОН (Мелкая пыль и средние звёзды)
    // -------------------------------------------------------------
    const offBack = document.createElement('canvas');
    offBack.width = w;
    offBack.height = h;
    const bCtx = offBack.getContext('2d');

    // 1. Мелкая фоновая пыль (320 шт.)
    for (let i = 0; i < 320; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = 0.5 + Math.random() * 0.8;
        const alpha = 0.2 + Math.random() * 0.55;

        bCtx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        bCtx.beginPath();
        bCtx.arc(x, y, r, 0, Math.PI * 2);
        bCtx.fill();
    }

    // 2. Средние чёткие звёзды (90 шт.)
    const palette = ['#ffffff', '#e0f7fa', '#fff9c4', '#f3e5f5'];
    for (let i = 0; i < 90; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = 1.1 + Math.random() * 1.0;
        const col = palette[Math.floor(Math.random() * palette.length)];
        const alpha = 0.5 + Math.random() * 0.45;

        bCtx.save();
        bCtx.globalAlpha = alpha;
        bCtx.fillStyle = col;
        bCtx.beginPath();
        bCtx.arc(x, y, r, 0, Math.PI * 2);
        bCtx.fill();
        bCtx.restore();
    }

    // -------------------------------------------------------------
    // СЛОЙ 2: БЛИЖНИЙ ПЛАН (Крупные ромбовидные сияющие звёзды)
    // -------------------------------------------------------------
    const offFront = document.createElement('canvas');
    offFront.width = w;
    offFront.height = h;
    const fCtx = offFront.getContext('2d');

    const flareHues = [
        { core: '#ffffff', glow: 'rgba(255, 255, 255,' },
        { core: '#e0f7fa', glow: 'rgba(0, 225, 255,' },
        { core: '#fff8e1', glow: 'rgba(255, 220, 140,' }
    ];

    for (let i = 0; i < 28; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const starSize = 1.3 + Math.random() * 1.6;
        const theme = flareHues[Math.floor(Math.random() * flareHues.length)];
        const alpha = 0.75 + Math.random() * 0.25;

        fCtx.save();
        fCtx.globalAlpha = alpha;

        // А) Ореол
        const glowR = starSize * 3.6;
        const glow = fCtx.createRadialGradient(x, y, 0, x, y, glowR);
        glow.addColorStop(0, `${theme.glow} 0.6)`);
        glow.addColorStop(0.35, `${theme.glow} 0.18)`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        fCtx.fillStyle = glow;
        fCtx.beginPath();
        fCtx.arc(x, y, glowR, 0, Math.PI * 2);
        fCtx.fill();

        // Б) Ромбовидные лучи
        const rayLen = starSize * 4.2;
        const rayThick = starSize * 0.48;

        fCtx.fillStyle = '#ffffff';
        fCtx.beginPath();
        fCtx.moveTo(x, y - rayLen);
        fCtx.lineTo(x + rayThick, y);
        fCtx.lineTo(x, y + rayLen);
        fCtx.lineTo(x - rayThick, y);

        fCtx.moveTo(x - rayLen, y);
        fCtx.lineTo(x, y + rayThick);
        fCtx.lineTo(x + rayLen, y);
        fCtx.lineTo(x, y - rayThick);
        fCtx.closePath();
        fCtx.fill();

        // В) Ядро
        fCtx.fillStyle = theme.core;
        fCtx.beginPath();
        fCtx.arc(x, y, starSize * 0.65, 0, Math.PI * 2);
        fCtx.fill();

        fCtx.restore();
    }

    starfieldBackCanvas = offBack;
    starfieldFrontCanvas = offFront;
}

function drawStarfield() {
    if (visualHouseHeight < 2500) return;

    if (!starfieldBackCanvas || !starfieldFrontCanvas) initStarfield();
    if (!starfieldBackCanvas || !starfieldFrontCanvas) return;

    let alpha = 1.0;
    if (visualHouseHeight < 12000) {
        alpha = (visualHouseHeight - 2500) / 9500;
    }

    const h = starfieldBackCanvas.height;

    // ПАРАЛЛАКС:
    // Дальние звёзды плывут не спеша (фактор 0.02)
    // Крупные передние звёзды летят навстречу почти в 3 раза быстрее (фактор 0.055)
    const scrollYBack = (visualHouseHeight * 0.02) % h;
    const scrollYFront = (visualHouseHeight * 0.055) % h;

    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

    // 1. Отрисовка дальнего слоя (бесшовный тайлинг)
    ctx.drawImage(starfieldBackCanvas, 0, scrollYBack);
    ctx.drawImage(starfieldBackCanvas, 0, scrollYBack - h);

    // 2. Отрисовка ближнего слоя с крупными звёздами
    ctx.drawImage(starfieldFrontCanvas, 0, scrollYFront);
    ctx.drawImage(starfieldFrontCanvas, 0, scrollYFront - h);

    ctx.restore();
}

function drawBackground() {
    let currentLocIndex = 0;
    for (let i = 0; i < LOCATIONS.length; i++) {
        if (currentHeight >= LOCATIONS[i].h) currentLocIndex = i;
    }
    let loc = LOCATIONS[currentLocIndex];
    let nextLoc = LOCATIONS[currentLocIndex + 1] || loc;

    let progress = 0;
    if (nextLoc.h > loc.h) {
        progress = (currentHeight - loc.h) / (nextLoc.h - loc.h);
        progress = Math.min(Math.max(progress, 0), 1);
    }

    const topColor = lerpColor(loc.top, nextLoc.top, progress);
    const botColor = lerpColor(loc.bot, nextLoc.bot, progress);
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(1, botColor);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Отрисовка светящейся Луны (Плавное появление и исчезновение)
    if (currentHeight >= 7000 && currentHeight < 1000000) {
        let moonAlpha = 1;

        // Появление (7 000 - 13 000 м) — ТВОЙ ОРИГИНАЛ
        if (currentHeight < 13000) {
            moonAlpha = (currentHeight - 7000) / 6000;
        }
        // Растворение перед Млечным Путем (384 000 - 500 000 м) — ТВОЙ ОРИГИНАЛ
        else if (currentHeight > 384000) {
            moonAlpha = Math.max(0, 1 - ((currentHeight - 384000) / 116000));
        }

        // Ограничиваем прозрачность от 0 до 1
        moonAlpha = Math.max(0, Math.min(1, moonAlpha));

        if (moonAlpha > 0) {
            ctx.save();
            ctx.globalAlpha = moonAlpha;

            const moonX = canvas.width * 0.28;

            // Начальная позиция 90px. Плавный параллакс-спуск вниз от сглаженной камеры
            const moonY = 90 + Math.max(0, visualHouseHeight - 7000) * 0.00025;
            const moonSize = 48; // Родной диаметр (в коде был радиус 24)

            // Мягкое неоновое свечение — ТВОЙ ОРИГИНАЛ
            const glow = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 55);
            glow.addColorStop(0, 'rgba(245, 246, 250, 0.35)');
            glow.addColorStop(1, 'rgba(245, 246, 250, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(moonX, moonY, 55, 0, Math.PI * 2);
            ctx.fill();

            // Отрисовка ассета Луны (с безопасным фолбэком на случай отсутствия файла)
            if (moonImg.complete && moonImg.naturalWidth !== 0) {
                ctx.drawImage(moonImg, moonX - moonSize / 2, moonY - moonSize / 2, moonSize, moonSize);
            } else {
                ctx.fillStyle = '#f5f6fa';
                ctx.beginPath();
                ctx.arc(moonX, moonY, moonSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }
    }
    // ========================================================
    // === ГЛУБОКИЙ КОСМИЧЕСКИЙ ЗАДНИК (НЕБУЛА И ЧЕРНАЯ ДЫРА) ==
    // ========================================================

    // 1. МЛЕЧНЫЙ ПУТЬ И ДАЛЕЕ (>= 800 000 м): Бесшовная сияющая туманность
    if (currentHeight >= 800000) {
        // Проявление на Млечном Пути, легкое приглушение возле Черной Дыры для атмосферы бездны
        let nebFade = Math.min(1, Math.max(0, (currentHeight - 800000) / 400000));
        if (currentHeight >= 8500000) {
            nebFade *= 0.55; // У черной дыры туманность становится темнее и глубже
        }

        const nebPulse = 0.42 + Math.sin(Date.now() * 0.0006) * 0.06;
        const finalNebAlpha = nebFade * nebPulse;

        if (finalNebAlpha > 0 && nebulaImg.complete && nebulaImg.naturalWidth !== 0) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';

            const nebW = canvas.width * 2.5;
            const nebH = nebW * (1097 / 3168);

            // Мягкий непрерывный микро-дрейф плазмы
            const timeFloatX = Math.sin(Date.now() * 0.00025) * 12;
            const timeFloatY = Math.cos(Date.now() * 0.0002) * 8;
            const liveScale = 1.0 + Math.sin(Date.now() * 0.00035) * 0.02;

            // БЕСШОВНЫЙ ШАГ: шаг равен 75% экрана
            const stepY = canvas.height * 0.75;
const nebulaSpeedFactor = 0.015; // Было 0.035 (уменьшили в 2.3 раза)
const scrollY = (visualHouseHeight * nebulaSpeedFactor) % stepY;
const blockIndex = Math.floor((visualHouseHeight * nebulaSpeedFactor) / stepY);

            const drawNebulaArm = (posX, posY, rotDeg, flip = false) => {
                ctx.save();
                ctx.translate(posX + timeFloatX, posY + timeFloatY);
                ctx.rotate(rotDeg * Math.PI / 180);
                if (flip) ctx.scale(-1, 1);
                ctx.scale(liveScale, liveScale);

                // Внешнее рассеянное свечение (Bloom)
                ctx.globalAlpha = finalNebAlpha * 0.35;
                ctx.drawImage(nebulaImg, -nebW * 1.08 / 2, -nebH * 1.08 / 2, nebW * 1.08, nebH * 1.08);

                // Основное тело газового рукава
                ctx.globalAlpha = finalNebAlpha;
                ctx.drawImage(nebulaImg, -nebW / 2, -nebH / 2, nebW, nebH);

                ctx.restore();
            };

            // Рисуем непрерывные слои без скачков ориентации при переходе
            for (let i = -1; i <= 2; i++) {
                const curY = scrollY + (i * stepY);
                // ИСПРАВЛЕНО: ориентация привязана к глобальному положению слоя в космосе
                const globalLayer = i - blockIndex;
                const isFlipped = Math.abs(globalLayer) % 2 === 1;
                drawNebulaArm(canvas.width * 0.5, curY, isFlipped ? 22 : -22, isFlipped);
            }

            ctx.restore();
        }
    }

    // 2. БЕСКРАЙНИЙ ПРОСТОР (>= 8 500 000 м): Величественная Черная Дыра строго по центру
    if (currentHeight >= 8500000) {
        const bhFade = Math.min(1, Math.max(0, (currentHeight - 8500000) / 1500000));

        if (bhFade > 0 && blackHoleImg.complete && blackHoleImg.naturalWidth !== 0) {
            ctx.save();
            ctx.globalAlpha = bhFade;

            // Комфортный масштаб: крылья диска огибают лестницу
            const bhW = canvas.width * 1.48;
            const bhH = bhW * (1062 / 2187);

            // ПОЗИЦИЯ: 0.48 — ровно по центру экрана за лестницей (не улетает вверх!)
            const bhX = canvas.width * 0.5;
            const bhY = canvas.height * 0.48 + Math.sin(Date.now() * 0.00018) * 3;

            const bhAngle = -0.05 + Math.sin(Date.now() * 0.00015) * 0.008;
            const bhScale = 1.0 + Math.sin(Date.now() * 0.00025) * 0.008;

            // Тонкие релятивистские волны искажения пространства
            ctx.save();
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
            ctx.lineWidth = 1.5;
            for (let r = 1; r <= 3; r++) {
                const ringR = (bhW * 0.28 * r + (Date.now() * 0.0028) % (bhW * 0.28)) * 0.75;
                ctx.beginPath();
                ctx.ellipse(bhX, bhY, ringR, ringR * 0.48, bhAngle, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.restore();

            // Теплый ореол гравитационного линзирования
            const aura = ctx.createRadialGradient(bhX, bhY, bhW * 0.12, bhX, bhY, bhW * 0.48);
            aura.addColorStop(0, 'rgba(230, 126, 34, 0.28)');
            aura.addColorStop(0.55, 'rgba(155, 89, 182, 0.12)');
            aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(bhX, bhY, bhW * 0.48, 0, Math.PI * 2);
            ctx.fill();

            // Сама Черная Дыра (строго source-over — черная дыра поглощает свет за собой)
            ctx.translate(bhX, bhY);
            ctx.rotate(bhAngle);
            ctx.scale(bhScale, bhScale);
            ctx.drawImage(blackHoleImg, -bhW / 2, -bhH / 2, bhW, bhH);

            ctx.restore();
        }
    }
    locationDisplay.innerText = loc.name;
}

// Отрисовка дальнего городского фона с мягким бесшовным небом
function drawFirstLocationBG() {
    // Выше 650м город уже полностью под полом, а небо бесшовно перешло в градиент игры
    if (visualHouseHeight > 650) return;
    if (!bgFirstLocImg.complete || !bgFirstLocImg.naturalWidth) return;

    const scale = Math.max(
        canvas.width / bgFirstLocImg.naturalWidth,
        canvas.height / bgFirstLocImg.naturalHeight
    );
    const bgW = bgFirstLocImg.naturalWidth * scale;
    const bgH = bgFirstLocImg.naturalHeight * scale;
    const bgX = (canvas.width - bgW) / 2;

    // Опускание дальних домов вниз: к 500м крыши уходят под срез пола
    const shiftY = (visualHouseHeight / 500) * (bgH * 0.52);
    const drawY = (canvas.height - bgH) + shiftY;

    // Плавное растворение остатка картинки (с 420м до 620м)
    let alpha = 1.0;
    if (visualHouseHeight > 420) {
        alpha = Math.max(0, 1.0 - (visualHouseHeight - 420) / 200);
    }
    if (alpha <= 0) return;

    ctx.save();
    ctx.globalAlpha = alpha;

    // 1. Отрисовка самой панорамы города
    ctx.drawImage(bgFirstLocImg, bgX, drawY, bgW, bgH);

    // 2. БЕСШОВНОЕ НЕБО БЕЗ ПОЛОС И ГРАНИЦ:
    // Если верхний край картинки опустился в кадр, мягко растушёвываем стык в цвет неба
    if (drawY > 0) {
        // Заливаем всё пространство над картинкой ровным цветом неба
        ctx.fillStyle = '#018cc5';
        ctx.fillRect(0, 0, canvas.width, drawY + 1);

        // Мягкий 140-пиксельный градиентный переход от неба к изображению
        const blendH = 140;
        const grad = ctx.createLinearGradient(0, drawY, 0, drawY + blendH);
        grad.addColorStop(0, '#018cc5');
        grad.addColorStop(1, 'rgba(1, 140, 197, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, drawY, canvas.width, blendH);
    }

    ctx.restore();
}

// Отрисовка телевышки и стробоскопического маяка (спрятана за правым домом)
function drawTower() {
    if (!towerHeadImg.complete || !towerHeadImg.naturalWidth) return;

    // 1. РАЗМЕРЫ ВЫШКИ
    const destW = canvas.width * 0.22;
    const scale = destW / 342;
    const bodyH = 765 * scale;
    const headH = 767 * scale;

    if (bodyH < 15) return;

    // 2. СМЕЩЕНИЕ ВПРАВО (строго за правый дом: 82% экрана)
    const towerX = canvas.width * 0.82 - destW / 2;

    const ppm = 3.2;
    const beaconRelY = 50 * scale;
    const eyeLevelY = canvas.height * 0.35;

    // Координата верхушки головы вышки
    const headTopY = (eyeLevelY - beaconRelY) + (visualHouseHeight - 1000) * ppm;

    // Вышка плавно скрывается под нижний край экрана выше 1150-1200м
    if (headTopY > canvas.height + 60) return;

    ctx.save();

    // 3. ОТРИСОВКА ГОЛОВЫ ВЫШКИ
    if (headTopY + headH >= -50 && headTopY <= canvas.height + 60) {
        ctx.drawImage(towerHeadImg, towerX, headTopY, destW, headH);
    }

    // 4. ТАЙЛИНГ ТЕЛА ВЫШКИ ВНИЗ
    let curBodyY = headTopY + headH;
    const stepH = Math.max(20, bodyH - 1);
    let safetyCounter = 0;

    while (curBodyY < canvas.height + 60 && safetyCounter < 45) {
        safetyCounter++;
        if (curBodyY + bodyH >= -50 && towerBodyImg.complete && towerBodyImg.naturalWidth) {
            ctx.drawImage(towerBodyImg, towerX, curBodyY, destW, bodyH);
        }
        curBodyY += stepH;
    }

    // 5. АВИАЦИОННЫЙ СТРОБОСКОП (смещён вместе с мачтой)
    const beaconX = towerX + 170 * scale;
    const beaconY = headTopY + beaconRelY;

    if (beaconY >= -30 && beaconY <= canvas.height + 30) {
        const cycle = (Date.now() % 650) / 650;
        let flash = 0;

        // Двойная частая вспышка
        if (cycle >= 0 && cycle < 0.16) {
            flash = Math.sin((cycle / 0.16) * Math.PI);
        } else if (cycle >= 0.22 && cycle < 0.38) {
            flash = Math.sin(((cycle - 0.22) / 0.16) * Math.PI);
        }

        // Постоянный красный диод
        ctx.fillStyle = '#ff2222';
        ctx.beginPath();
        ctx.arc(beaconX, beaconY, 4 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Сверхъяркий импульс свечения
        if (flash > 0) {
            ctx.save();

            const haloR = 55 * scale * flash;
            const halo = ctx.createRadialGradient(beaconX, beaconY, 2, beaconX, beaconY, haloR);
            halo.addColorStop(0, `rgba(255, 255, 255, ${1.0 * flash})`);
            halo.addColorStop(0.18, `rgba(255, 50, 50, ${0.95 * flash})`);
            halo.addColorStop(0.55, `rgba(235, 15, 15, ${0.45 * flash})`);
            halo.addColorStop(1, 'rgba(255, 0, 0, 0)');

            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(beaconX, beaconY, haloR, 0, Math.PI * 2);
            ctx.fill();

            // Горизонтальный линзовый луч
            const flareLen = 70 * scale * flash;
            const flareH = 3 * scale * flash;
            const flareGrad = ctx.createLinearGradient(beaconX - flareLen, beaconY, beaconX + flareLen, beaconY);
            flareGrad.addColorStop(0, 'rgba(255, 50, 50, 0)');
            flareGrad.addColorStop(0.5, `rgba(255, 240, 240, ${0.9 * flash})`);
            flareGrad.addColorStop(1, 'rgba(255, 50, 50, 0)');

            ctx.fillStyle = flareGrad;
            ctx.fillRect(beaconX - flareLen, beaconY - flareH / 2, flareLen * 2, flareH);

            ctx.restore();
        }
    }

    ctx.restore();
}

// Отрисовка жилых домов хрущевки (от 0 до 250 метров)
function drawHouses() {
    if (visualHouseHeight > 350) return;
    if (!houseDownImg.complete || !houseDownImg.naturalWidth) return;

    const HOUSE_WIDTH_RATIO = 0.42;
    const destW = canvas.width * HOUSE_WIDTH_RATIO;

    const hDown = destW * (houseDownImg.naturalHeight / (houseDownImg.naturalWidth * 0.5));
    const hMid = (houseMidImg.complete && houseMidImg.naturalHeight)
        ? destW * (houseMidImg.naturalHeight / (houseMidImg.naturalWidth * 0.5))
        : hDown;
    const hRoof = (houseRoofImg.complete && houseRoofImg.naturalHeight)
        ? destW * (houseRoofImg.naturalHeight / (houseRoofImg.naturalWidth * 0.5))
        : (destW * 0.5);

    const MID_SECTIONS_COUNT = 4;
    const totalWallHeight = hDown + (MID_SECTIONS_COUNT * hMid);

    const ppm = totalWallHeight / 250;
    const camY = visualHouseHeight * ppm;

    const drawSplitSection = (img, worldBottom, height, isGround = false) => {
        if (!img.complete || !img.naturalWidth) return;
        const screenY = canvas.height - (worldBottom + height) + camY;

        if (screenY + height < -60 || screenY > canvas.height + 60) return;

        const srcHalfW = img.naturalWidth * 0.5;
        const srcH = img.naturalHeight;

        if (isGround) {
            const groundH = height * 0.22;
            ctx.fillStyle = '#736e69';
            ctx.fillRect(0, screenY + height - groundH, canvas.width, groundH);
        }

        ctx.drawImage(img, 0, 0, srcHalfW, srcH, 0, screenY, destW, height);
        ctx.drawImage(img, srcHalfW, 0, srcHalfW, srcH, canvas.width - destW, screenY, destW, height);
    };

    drawSplitSection(houseDownImg, 0, hDown, true);

    let currentY = hDown;
    for (let i = 0; i < MID_SECTIONS_COUNT; i++) {
        drawSplitSection(houseMidImg, currentY, hMid, false);
        currentY += hMid;
    }

    drawSplitSection(houseRoofImg, currentY, hRoof, false);
}

// Автоматическое извлечение светящихся пикселей для Эндгейм-лестниц
function initUfoGlowMask() {
    if (ufoGlowCanvas || !ladderImg.complete || !ladderImg.naturalWidth) return;

    const w = ladderImg.naturalWidth;
    const h = ladderImg.naturalHeight;

    const offCanvas = document.createElement('canvas');
    offCanvas.width = w;
    offCanvas.height = h;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(ladderImg, 0, 0);

    const imgData = offCtx.getImageData(0, 0, w, h);
    const d = imgData.data;

    for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];
        const a = d[i + 3];

        if (a < 15) continue; // Прозрачный фон пропускаем

        // Вычисляем "яркость" и "насыщенность" пикселя (отбрасываем серый/чёрный металл)
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;

        // Если пиксель яркий и цветной (плазма/неон) ИЛИ он чисто белый (ядро)
        const isNeon = (max > 120 && diff > 30) || (r > 190 && g > 190 && b > 190);

        if (isNeon) {
            // Усиливаем неон на 20%
            d[i] = Math.min(255, r * 1.2);
            d[i + 1] = Math.min(255, g * 1.2);
            d[i + 2] = Math.min(255, b * 1.2);
        } else {
            // Весь тёмный металл и тусклые детали стираем
            d[i + 3] = 0;
        }
    }

    offCtx.putImageData(imgData, 0, 0);
    ufoGlowCanvas = offCanvas;
}

function drawLadder() {
    if (!ladderImg.complete || !ladderImg.naturalWidth || !ladderImg.naturalHeight) return;

    const imgAspect = ladderImg.naturalWidth / ladderImg.naturalHeight;
    const targetWidth = canvas.width * 0.27;
    const targetHeight = targetWidth / imgAspect;
    if (isNaN(targetHeight) || targetHeight <= 0) return;

    ladderYOffset = ((ladderYOffset % targetHeight) + targetHeight) % targetHeight;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2 + ladderDropY);
    ctx.scale(ladderScaleX, ladderScaleY);

    const x = -targetWidth / 2;
    const baseY = -targetHeight / 2 + ladderYOffset;

    // === ОБЫЧНЫЕ ЛЕСТНИЦЫ ===
    if (currentSkinId !== 'quant') {
        ctx.drawImage(ladderImg, x, baseY, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x, baseY - targetHeight + 2, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x, baseY + targetHeight - 2, targetWidth, targetHeight);

        // === ЖИВОЙ НЕОН ДЛЯ НЛО, МЛЕЧНОГО ПУТИ И АБСОЛЮТА ===
        const isEndgameSkin = ['ufo', 'milkyway', 'endless', 'absolute'].includes(currentSkinId);

        if (isEndgameSkin) {
            if (!ufoGlowCanvas && ladderImg.complete && ladderImg.naturalWidth) {
                initUfoGlowMask(); // Создаем маску для текущей надетой лестницы
            }

            if (ufoGlowCanvas) {
                ctx.save();
                const now = Date.now();
                const sx = targetWidth / ladderImg.naturalWidth;
                const sy = targetHeight / ladderImg.naturalHeight;

                // 1. ОСНОВНОЕ ТЕЛО РЕАКТОРА
                ctx.globalCompositeOperation = 'screen';
                const maskPulse = 0.34 + Math.sin(now / 420) * 0.18;
                ctx.globalAlpha = maskPulse;

                ctx.drawImage(ufoGlowCanvas, x, baseY, targetWidth, targetHeight);
                ctx.drawImage(ufoGlowCanvas, x, baseY - targetHeight + 2, targetWidth, targetHeight);
                ctx.drawImage(ufoGlowCanvas, x, baseY + targetHeight - 2, targetWidth, targetHeight);

                // 2. ЧЁТКИЙ ОСТРЫЙ ТРЕЗУБЕЦ (Только для НЛО!)
                if (currentSkinId === 'ufo') {
                    ctx.globalCompositeOperation = 'lighter';
                    const lights = [
                        { x: 23, y: 41 }, { x: 135, y: 41 }, { x: 23, y: 131 }, { x: 135, y: 131 },
                        { x: 23, y: 216 }, { x: 135, y: 216 }, { x: 23, y: 298 }, { x: 135, y: 298 },
                        { x: 23, y: 392 }, { x: 135, y: 392 }, { x: 23, y: 478 }, { x: 135, y: 478 },
                        { x: 23, y: 562 }, { x: 135, y: 562 }, { x: 23, y: 650 }, { x: 135, y: 650 },
                        { x: 23, y: 737 }, { x: 135, y: 737 }, { x: 23, y: 823 }, { x: 135, y: 823 },
                        { x: 23, y: 911 }, { x: 135, y: 911 }
                    ];

                    const drawTridents = (offsetY) => {
                        for (let i = 0; i < lights.length; i++) {
                            const pt = lights[i];
                            const isLeft = (i % 2 === 0);
                            const row = Math.floor(i / 2);
                            const baseAngle = isLeft ? (-Math.PI * 0.63) : (-Math.PI * 0.37);
                            const pulse = 0.4 + Math.max(0, Math.sin(now / 140 - row * 0.45)) * 0.6;
                            const lx = x + pt.x * sx;
                            const ly = baseY + pt.y * sy + offsetY;

                            ctx.save();
                            ctx.translate(lx, ly);
                            ctx.rotate(baseAngle);

                            const drawBlade = (angleOffset, length, baseWidth, alphaMult) => {
                                ctx.save();
                                ctx.rotate(angleOffset);
                                ctx.beginPath();
                                ctx.moveTo(0, -baseWidth / 2);
                                ctx.lineTo(length, 0);
                                ctx.lineTo(0, baseWidth / 2);
                                ctx.closePath();
                                const grad = ctx.createLinearGradient(0, 0, length, 0);
                                grad.addColorStop(0, `rgba(255, 255, 255, ${pulse * alphaMult})`);
                                grad.addColorStop(0.35, `rgba(80, 255, 150, ${pulse * alphaMult * 0.9})`);
                                grad.addColorStop(1, 'rgba(0, 255, 100, 0)');
                                ctx.fillStyle = grad;
                                ctx.fill();
                                ctx.restore();
                            };

                            const mainLen = (18 + pulse * 5) * sx;
                            const sideLen = mainLen * 0.62;
                            const bladeW = 2.2 * sx;

                            drawBlade(0, mainLen, bladeW * 1.2, 1.0);
                            drawBlade(-0.38, sideLen, bladeW, 0.85);
                            drawBlade(0.38, sideLen, bladeW, 0.85);
                            ctx.restore();
                        }
                    };

                    drawTridents(0);
                    drawTridents(-targetHeight + 2);
                    drawTridents(targetHeight - 2);
                }
                ctx.restore();
            }
        }

        // === ВИЗУАЛ ЧЁРНОЙ ДЫРЫ (ЖИВЫЕ СИНГУЛЯРНОСТИ В ЩЕЛЯХ) ===
        if ((currentSkinId === 'endless' || currentSkinId === 'absolute') && blackHoleBonus > 0) {
            ctx.save();
            const now = Date.now();
            const sx = targetWidth / ladderImg.naturalWidth;
            const sy = targetHeight / ladderImg.naturalHeight;
            const intensity = blackHoleBonus / 10.0; // от 0.1 до 1.0

            // ТВОИ ТОЧНЫЕ Y-КООРДИНАТЫ ЦЕНТРОВ РАЗЛОМОВ
            const holeYs = [208, 440, 670, 894, 1123, 1353, 1806, 2033, 2257];

            const drawSingularities = (offsetY) => {
                for (let i = 0; i < holeYs.length; i++) {
                    const hy = baseY + holeYs[i] * sy + offsetY;
                    const hx = 0; // X=208 находится ровно по центру спрайта

                    // Габариты вертикальной щели: узкая по X, вытянутая по Y
                    const slitRx = 9 * sx;
                    const slitRy = 26 * sy;

                    // 1. ПУЛЬСИРУЮЩАЯ БЕЗДНА ИЗНУТРИ ЩЕЛИ (Режим Screen)
                    ctx.save();
                    ctx.globalCompositeOperation = 'screen';

                    const breathe = 0.5 + Math.sin(now / 300 + i) * 0.35;
                    const auraGrad = ctx.createRadialGradient(hx, hy, 2 * sx, hx, hy, slitRy * 1.5);
                    auraGrad.addColorStop(0, `rgba(255, 120, 30, ${0.4 + intensity * 0.6})`); // Горячее ядро
                    auraGrad.addColorStop(0.4, `rgba(142, 68, 173, ${0.3 + intensity * 0.4})`); // Фиолетовый горизонт
                    auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                    ctx.fillStyle = auraGrad;
                    ctx.beginPath();
                    ctx.ellipse(hx, hy, slitRx * 1.6, slitRy * 1.3, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // 2. ФОТОННОЕ КОЛЬЦО ЭЙНШТЕЙНА (Тончайшая дуга по кромке щели)
                    ctx.lineWidth = 1.8 * sx;
                    ctx.strokeStyle = `rgba(255, 180, 50, ${0.4 + breathe * 0.5 * intensity})`;
                    ctx.beginPath();
                    ctx.ellipse(hx, hy, slitRx * 0.95, slitRy * 0.95, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Внутренний квантовый циановый контур
                    ctx.lineWidth = 1.0 * sx;
                    ctx.strokeStyle = `rgba(0, 240, 255, ${0.3 + intensity * 0.5})`;
                    ctx.beginPath();
                    ctx.ellipse(hx, hy, slitRx * 0.7, slitRy * 0.7, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();

                    // 3. ЗАСАСЫВАНИЕ КВАНТОВЫХ ЧАСТИЦ (Спираль аккреции)
                    ctx.save();
                    ctx.globalCompositeOperation = 'lighter';
                    const swirlSpeed = now * 0.005;

                    for (let s = 0; s < 3; s++) {
                        // Каждая частица крутится на своей фазе
                        const phase = swirlSpeed + (s * (Math.PI * 2 / 3)) + i;
                        // Спираль: расстояние до центра плавно сжимается в ноль
                        const distP = (swirlSpeed * 0.6 + s * 0.33) % 1;
                        const curDistX = (1 - distP) * (slitRx * 2.5);
                        const curDistY = (1 - distP) * (slitRy * 1.8);

                        const px = hx + Math.cos(phase) * curDistX;
                        const py = hy + Math.sin(phase) * curDistY;

                        const sparkR = (1.5 + (1 - distP) * 1.5) * sx;
                        ctx.fillStyle = `rgba(255, 230, 150, ${distP * (0.4 + intensity * 0.6)})`;
                        ctx.beginPath();
                        ctx.arc(px, py, sparkR, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.restore();
                }
            };

            // Отрисовываем на всех 3-х тайлах лестницы
            drawSingularities(0);
            drawSingularities(-targetHeight + 2);
            drawSingularities(targetHeight - 2);

            ctx.restore();
        }

        ctx.restore();
        return;
    }

    // === КВАНТОВАЯ ЛЕСТНИЦА (ГЛИТЧ) ===
    const isBurst = quantumGlitch > 0;
    if (quantumGlitch > 0) quantumGlitch--;

    const isPassiveTwitch = Math.random() < 0.08;
    const glitchActive = isBurst || isPassiveTwitch;
    const splitDist = isBurst ? (5 + Math.random() * 7) : (glitchActive ? 3 : 1.5);

    const drawSegments = (offsetX = 0, offsetY = 0) => {
        ctx.drawImage(ladderImg, x + offsetX, baseY + offsetY, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x + offsetX, baseY - targetHeight + 2 + offsetY, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x + offsetX, baseY + targetHeight - 2 + offsetY, targetWidth, targetHeight);
    };

    ctx.save();
    ctx.shadowColor = 'rgba(255, 0, 85, 0.75)';
    ctx.shadowOffsetX = -splitDist;
    ctx.shadowOffsetY = (Math.random() - 0.5) * (isBurst ? 3 : 0);
    ctx.shadowBlur = isBurst ? 4 : 1;
    drawSegments();
    ctx.restore();

    ctx.save();
    ctx.shadowColor = 'rgba(0, 240, 255, 0.75)';
    ctx.shadowOffsetX = splitDist;
    ctx.shadowOffsetY = (Math.random() - 0.5) * (isBurst ? 3 : 0);
    ctx.shadowBlur = isBurst ? 4 : 1;
    drawSegments();
    ctx.restore();

    drawSegments();

    if (isBurst) {
        const sliceCount = 3 + Math.floor(Math.random() * 3);
        for (let s = 0; s < sliceCount; s++) {
            const sliceH = 10 + Math.random() * 25;
            const sliceY = -targetHeight / 2 + Math.random() * targetHeight;
            const sliceShift = (Math.random() - 0.5) * 18;

            ctx.save();
            ctx.beginPath();
            ctx.rect(x - 30, sliceY, targetWidth + 60, sliceH);
            ctx.clip();
            ctx.drawImage(ladderImg, x + sliceShift, baseY, targetWidth, targetHeight);
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.25)' : 'rgba(255, 0, 120, 0.25)';
            ctx.fillRect(x - 30, sliceY, targetWidth + 60, sliceH);
            ctx.restore();
        }
    }

    ctx.restore();
}

// === 1. УВЕЛИЧЕННАЯ КОЛОНКА (В 2 РАЗА ШИРЕ И ВЫШЕ) ===
function drawHangingSpeaker() {
    const targetWidth = canvas.width * 0.27;
    const ladderLeft = canvas.width / 2 - targetWidth / 2;

    // Новые пропорции: 68x92 px вместо старых 34x46 px
    const speakerW = 68;
    const speakerH = 92;
    // Зазор 6px от балки лестницы, чтобы не наезжать на текстуру
    const speakerX = ladderLeft - speakerW - 2;

    const floatY = Math.sin(Date.now() / 450) * 4;
    const speakerY = canvas.height * 0.52 + ladderDropY + floatY;
    const anchorY = -30;

    ctx.save();
    // Тросы подвеса (сделали плотнее — 1.8px вместо 1.2px)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(speakerX + 12, anchorY);
    ctx.lineTo(speakerX + 12, speakerY + 8);
    ctx.moveTo(speakerX + speakerW - 12, anchorY);
    ctx.lineTo(speakerX + speakerW - 12, speakerY + 8);
    ctx.stroke();

    let pulse = 1.0;
    if (speakerTimer < 160) pulse = 1.12;

    ctx.translate(speakerX + speakerW / 2, speakerY + speakerH / 2);
    ctx.scale(pulse, pulse);

    // Спрайт колонки
    if (speakerSprite.complete && speakerSprite.naturalWidth !== 0) {
        ctx.drawImage(speakerSprite, -speakerW / 2, -speakerH / 2, speakerW, speakerH);
    } else {
        ctx.fillStyle = '#1e272e';
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.fillRect(-speakerW / 2, -speakerH / 2, speakerW, speakerH);
        ctx.strokeRect(-speakerW / 2, -speakerH / 2, speakerW, speakerH);
    }
    ctx.restore();
}

// Легковесная процедурная электризация шаров
function drawBallElectricity(targetCtx, x, y, radius, heat) {
    if (heat <= 0.05) return;

    targetCtx.save();
    targetCtx.globalCompositeOperation = 'lighter';

    // 1. Быстрые мерцающие дуги молний (2-3 зигзага)
    const arcCount = Math.floor(2 + heat * 3);
    targetCtx.strokeStyle = Math.random() > 0.35 ? '#00ffff' : '#ffffff';
    targetCtx.lineWidth = 1.2 + Math.random() * 0.8;
    targetCtx.shadowColor = '#00ffff';
    targetCtx.shadowBlur = 6;

    for (let a = 0; a < arcCount; a++) {
        const angle = Math.random() * Math.PI * 2;
        const startR = radius * (0.85 + Math.random() * 0.2);
        const startX = x + Math.cos(angle) * startR;
        const startY = y + Math.sin(angle) * startR;

        const arcLen = (8 + Math.random() * 12) * heat;
        const midAngle = angle + (Math.random() - 0.5) * 0.6;
        const endAngle = angle + (Math.random() - 0.5) * 0.8;

        const midX = x + Math.cos(midAngle) * (startR + arcLen * 0.5) + (Math.random() - 0.5) * 4;
        const midY = y + Math.sin(midAngle) * (startR + arcLen * 0.5) + (Math.random() - 0.5) * 4;

        const endX = x + Math.cos(endAngle) * (startR + arcLen);
        const endY = y + Math.sin(endAngle) * (startR + arcLen);

        targetCtx.beginPath();
        targetCtx.moveTo(startX, startY);
        targetCtx.lineTo(midX, midY);
        targetCtx.lineTo(endX, endY);
        targetCtx.stroke();
    }

    // 2. Слабая анимация спрайта lighting.webp вокруг шара
    if (lightningImg.complete && lightningImg.naturalWidth !== 0) {
        const now = Date.now();
        const flicker = 0.4 + Math.sin(now * 0.02) * 0.6;
        if (flicker > 0.15) {
            targetCtx.globalAlpha = flicker * heat * 0.85;
            const sprSize = 18 + Math.sin(now * 0.01) * 3;
            const sprAngle = Math.sin(now * 0.005) * 0.4;
            const offsetX = Math.cos(now * 0.003) * (radius * 1.15);
            const offsetY = Math.sin(now * 0.003) * (radius * 1.15);

            targetCtx.save();
            targetCtx.translate(x + offsetX, y + offsetY);
            targetCtx.rotate(sprAngle);
            targetCtx.drawImage(lightningImg, -sprSize / 2, -sprSize / 2, sprSize, sprSize);
            targetCtx.restore();
        }
    }

    targetCtx.restore();
}

// === 2. УВЕЛИЧЕННЫЕ ШАРЫ НЬЮТОНА (РАДИУС 22px ВМЕСТО 13px) ===
function drawNewtonCradle() {
    const targetWidth = canvas.width * 0.27;
    const ladderLeft = canvas.width / 2 - targetWidth / 2;
    const ladderRight = canvas.width / 2 + targetWidth / 2;

    // Радиус увеличен с 13px до 22px (диаметр стал 44px вместо 26px)
    const r = 22;
    const ballRestY = canvas.height * 0.28 + ladderDropY;
    const anchorY = -30;
    const stringLen = ballRestY - anchorY;

    // Точки соприкосновения с боковинами лестницы
    const leftRestX = ladderLeft - r;
    const rightRestX = ladderRight + r;

    let leftAngle = 0;
    let rightAngle = 0;
    const maxAngle = 0.35;

    if (newtonAnimProgress > 0) {
        if (newtonAnimProgress < 0.5) {
            const t = newtonAnimProgress / 0.5;
            leftAngle = -Math.sin(t * Math.PI) * maxAngle;
        } else {
            const t = (newtonAnimProgress - 0.5) / 0.5;
            rightAngle = Math.sin(t * Math.PI) * maxAngle;
        }
    }

    ctx.save();
    // 1. ЛЕВЫЙ ШАР
    const leftBallX = leftRestX + Math.sin(leftAngle) * stringLen;
    const leftBallY = anchorY + Math.cos(leftAngle) * stringLen;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(leftRestX, anchorY);
    ctx.lineTo(leftBallX, leftBallY);
    ctx.stroke();

    if (newtonSprite.src && newtonSprite.complete && newtonSprite.naturalWidth !== 0) {
        ctx.drawImage(newtonSprite, leftBallX - r, leftBallY - r, r * 2, r * 2);
       // Визуал Плазмы (раскал до белого и голубого)
        if (plasmaHeat > 0.05 && (currentNewtonSkin === 'plasma' || (hasMech('cyber') && cyberExtraAccessory.id === 'plasma'))) {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            const heatGrad = ctx.createRadialGradient(leftBallX, leftBallY, 0, leftBallX, leftBallY, r * 1.5);
            heatGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * plasmaHeat})`);
            heatGrad.addColorStop(0.35, `rgba(160, 245, 255, ${0.8 * plasmaHeat})`);
            heatGrad.addColorStop(0.7, `rgba(0, 210, 255, ${0.4 * plasmaHeat})`);
            heatGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = heatGrad;
            ctx.beginPath();
            ctx.arc(leftBallX, leftBallY, r * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            drawBallElectricity(ctx, leftBallX, leftBallY, r, plasmaHeat);
        }

        // Визуал Земли (яркая атмосфера при активных баффах)
        const earthBuffs = getActiveTemporaryBuffsCount();
        if (earthBuffs > 0 && (currentNewtonSkin === 'planet' || (hasMech('cyber') && cyberExtraAccessory.id === 'planet'))) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            const auraGrad = ctx.createRadialGradient(leftBallX, leftBallY, r * 0.7, leftBallX, leftBallY, r * 1.4);
            auraGrad.addColorStop(0, 'rgba(0, 220, 255, 0.5)');
            auraGrad.addColorStop(0.6, 'rgba(46, 204, 113, 0.3)');
            auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = auraGrad;
            ctx.beginPath();
            ctx.arc(leftBallX, leftBallY, r * 1.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    } else {
        ctx.fillStyle = '#bdc3c7';
        ctx.beginPath();
        ctx.arc(leftBallX, leftBallY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(leftBallX - 4, leftBallY - 4, 4, 0, Math.PI * 2);
        ctx.fill();
    }

    // 2. ПРАВЫЙ ШАР
    const rightBallX = rightRestX + Math.sin(rightAngle) * stringLen;
    const rightBallY = anchorY + Math.cos(rightAngle) * stringLen;

    ctx.beginPath();
    ctx.moveTo(rightRestX, anchorY);
    ctx.lineTo(rightBallX, rightBallY);
    ctx.stroke();

    if (newtonSprite.src && newtonSprite.complete && newtonSprite.naturalWidth !== 0) {
        ctx.drawImage(newtonSprite, rightBallX - r, rightBallY - r, r * 2, r * 2);
        // Визуал Плазмы (раскал до белого и голубого)
        if (plasmaHeat > 0.05 && (currentNewtonSkin === 'plasma' || (hasMech('cyber') && cyberExtraAccessory.id === 'plasma'))) {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            const heatGrad = ctx.createRadialGradient(rightBallX, rightBallY, 0, rightBallX, rightBallY, r * 1.5);
            heatGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * plasmaHeat})`);
            heatGrad.addColorStop(0.35, `rgba(160, 245, 255, ${0.8 * plasmaHeat})`);
            heatGrad.addColorStop(0.7, `rgba(0, 210, 255, ${0.4 * plasmaHeat})`);
            heatGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = heatGrad;
            ctx.beginPath();
            ctx.arc(rightBallX, rightBallY, r * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            drawBallElectricity(ctx, rightBallX, rightBallY, r, plasmaHeat);
        }

        // Визуал Земли (яркая атмосфера при активных баффах)
        const earthBuffs = getActiveTemporaryBuffsCount();
        if (earthBuffs > 0 && (currentNewtonSkin === 'planet' || (hasMech('cyber') && cyberExtraAccessory.id === 'planet'))) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            const auraGrad = ctx.createRadialGradient(rightBallX, rightBallY, r * 0.7, rightBallX, rightBallY, r * 1.4);
            auraGrad.addColorStop(0, 'rgba(0, 220, 255, 0.5)');
            auraGrad.addColorStop(0.6, 'rgba(46, 204, 113, 0.3)');
            auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = auraGrad;
            ctx.beginPath();
            ctx.arc(rightBallX, rightBallY, r * 1.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    } else {
        ctx.fillStyle = '#bdc3c7';
        ctx.beginPath();
        ctx.arc(rightBallX, rightBallY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(rightBallX - 4, rightBallY - 4, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}

function drawParticles() {
    if (particles.length > 25) {
        particles.splice(0, particles.length - 25);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        // Гравитационное притяжение Чёрной дыры
        if ((currentSkinId === 'endless' || currentSkinId === 'absolute') && blackHoleBonus > 0) {
            const pullForce = (0.8 + (blackHoleBonus / 10.0) * 2.2);
            const dx = (canvas.width / 2) - p.x;
            p.x += dx * 0.04 * pullForce;
        }

        p.y -= p.speed;
        p.alpha -= 0.02;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);

        // Крупный базовый размер (30px)
        ctx.font = p.font || 'bold 30px sans-serif';
        ctx.lineWidth = 3.5;
        ctx.textBaseline = 'middle'; // Центрирует текст по вертикали с иконкой
        ctx.strokeStyle = `rgba(0, 0, 0, ${p.alpha})`;
        ctx.fillStyle = p.color ? p.color.replace('ALPHA', p.alpha) : `rgba(255, 255, 255, ${p.alpha})`;

        // Если есть и иконка, и текст (связка молния + цифры)
        if (p.img && p.img.complete && p.img.naturalWidth !== 0 && p.text) {
            const s = p.imgSize || 26;
            const textW = ctx.measureText(p.text).width;
            const gap = 8;
            const totalW = s + gap + textW;
            const startX = p.x - totalW / 2;

            // Молния
            ctx.drawImage(p.img, startX, p.y - s / 2, s, s);

            // Текст очков
            ctx.textAlign = 'left';
            ctx.strokeText(p.text, startX + s + gap, p.y);
            ctx.fillText(p.text, startX + s + gap, p.y);
        } else if (p.img && p.img.complete && p.img.naturalWidth !== 0) {
            const s = p.imgSize || 26;
            ctx.drawImage(p.img, p.x - s / 2, p.y - s / 2, s, s);
        } else if (p.text) {
            ctx.textAlign = 'center';
            ctx.strokeText(p.text, p.x, p.y);
            ctx.fillText(p.text, p.x, p.y);
        }

        ctx.restore();

        if (p.alpha <= 0) particles.splice(i, 1);
    }
}

function breakLadder() {
    const chunkCount = 4 + Math.floor(Math.random() * 3);
    const baseW = canvas.width * 0.27;

    for (let i = 0; i < chunkCount; i++) {
        debrisArray.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 60,
            y: canvas.height * 0.3 + (i * 60),
            vx: (Math.random() - 0.5) * 24,
            vy: -7 - Math.random() * 10,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.4,
            // Вытянутые пропорции: узкие (35% ширины) и длинные вертикально
            width: baseW * 0.45,
            height: baseW * 0.95
        });
    }
}

function drawDebris() {
    for (let i = debrisArray.length - 1; i >= 0; i--) {
        let d = debrisArray[i];
        d.vy += 0.8;
        d.x += d.vx;
        d.y += d.vy;
        d.rot += d.rotSpeed;

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rot);

        // Вырезаем вертикальный сегмент боковой стойки без сплющивания
        if (ladderImg.complete && ladderImg.naturalWidth !== 0) {
            ctx.drawImage(
                ladderImg,
                0, ladderImg.height * 0.2, ladderImg.width * 0.5, ladderImg.height * 0.4,
                -d.width / 2, -d.height / 2, d.width, d.height
            );
        }
        ctx.restore();

        if (d.y > canvas.height + 250) debrisArray.splice(i, 1);
    }
}

// Проверка полной коллекции игры и открытие венца эволюции — «АБСОЛЮТ»
function checkAbsoluteUnlock() {
    // Если Абсолют уже получен — выходим
    if (ownedSkins.includes('absolute')) return;

    // 1. Все лестницы (кроме самого Абсолюта)
    const allLadders = Object.keys(LADDER_SKINS).filter(id => id !== 'absolute');
    const hasAllLadders = allLadders.every(id => ownedSkins.includes(id));

    // 2. Все колонки
    const allSpeakers = Object.keys(SPEAKER_SKINS);
    const hasAllSpeakers = allSpeakers.every(id => ownedSpeakerSkins.includes(id));

    // 3. Все шары Ньютона
    const allNewtons = Object.keys(NEWTON_SKINS);
    const hasAllNewtons = allNewtons.every(id => ownedNewtonSkins.includes(id));

    // 4. Все талисманы (включая секретный носок)
    const allTalismans = Object.keys(TALISMANS);
    const hasAllTalismans = allTalismans.every(id => ownedTalismans.includes(id));

    // Если собрано АБСОЛЮТНО ВСЁ:
    if (hasAllLadders && hasAllSpeakers && hasAllNewtons && hasAllTalismans) {
        ownedSkins.push('absolute');
        saveGame();

        AudioEngine.play('jacpot', 1.0);
        shakeTime = 30; // Эпичная тряска экрана

        particles.push({
    x: canvas.width / 2,
    y: canvas.height * 0.35,
    img: canvasIcoCrown,
    imgSize: 30,
    text: 'ОТКРЫТ АБСОЛЮТ!',
    color: '#f1c40f',
    font: 'bold 24px sans-serif',
    alpha: 3.0,
    speed: 1.2
});

        if (typeof renderInventory === 'function') renderInventory();
        
        // Открываем модалку предпросмотра только что полученного Абсолюта
        if (typeof openLadderPreview === 'function') {
            openLadderPreview('absolute');
        }
    }
}

function hardResetGame() {
    window.onbeforeunload = null;
    localStorage.clear();
    location.reload();
}

// Проверка наград за достижение высоты
function checkHeightUnlocks() {
    const unlocks = [
        { h: 1000, id: 'storm', name: 'Грозовой фронт' },
        { h: 10000, id: 'strato', name: 'Стратосфера' },
        { h: 100000, id: 'cosmo', name: 'Космос' },
        { h: 1000000, id: 'milkyway', name: 'Млечный Путь' },
        { h: 10000000, id: 'endless', name: 'Бескрайний простор' }
    ];

    const alt = Math.max(maxAltitudeReached, currentHeight);

    unlocks.forEach(u => {
        if (alt >= u.h && !ownedSkins.includes(u.id)) {
            ownedSkins.push(u.id);
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.35,
                text: `👑 ЛЕГЕНДАРНЫЙ СКИН: ${u.name}!`,
                color: '#f1c40f',
                font: 'bold 24px sans-serif',
                alpha: 3.0,
                speed: 1.2
            });
            if (typeof AudioEngine !== 'undefined') AudioEngine.play('win', 1.0);
            if (typeof saveGame === 'function') saveGame();
        }
    });
}

// --- УПРАВЛЕНИЕ И СВАЙПЫ (ЛЕДЯНАЯ ЛЕСТНИЦА) ---
let lastSwipeTime = 0;

canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    handleTap(e.clientX, e.clientY);
});

window.addEventListener('pointerup', () => isPointerDown = false);
window.addEventListener('pointercancel', () => isPointerDown = false); // <-- Добавить эту строку

canvas.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    // Ледяная лестница: свайп генерирует клики с задержкой 80мс
    if (hasMech('ice')) {
        const now = Date.now();
        if (now - lastSwipeTime > 80) {
            handleTap(e.clientX, e.clientY);
            lastSwipeTime = now;
        }
    }
});

function handleTap(clientX, clientY, isAutoBurst = false) {
    if (!isAutoBurst) {
        lastPlayerTapTime = Date.now();
    }

    if (settingsState.vibrate && navigator.vibrate) {
        navigator.vibrate(15);
    }
    AudioEngine.playTap(currentSkinId);
    AudioEngine.updateAmbient(currentHeight);

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clickX = (clientX - rect.left) * scaleX;
    const clickY = (clientY - rect.top) * scaleY;

    const skin = { buffs: getActiveLadderBuffs() };

    // === РАСЧЁТ МНОЖИТЕЛЯ ТАПОВ (КОСТЬ + БАНАН) ===
    let isBananaProc = false;
    if (hasMech('banana')) {
        bananaTapCounter = (bananaTapCounter || 0) + 1;
        if (bananaTapCounter >= 5) {
            bananaTapCounter = 0;
            isBananaProc = true;
        }
    } else {
        bananaTapCounter = 0;
    }

    let tapsNum = 1;
    if (hasMech('bone')) tapsNum *= 2;
    if (isBananaProc) tapsNum *= 2; // На 5-й клик Банана tapsNum становится 2!

    // Подсчет CPS в скользящем окне 1 секунды
    const tapNow = Date.now();
    for (let i = 0; i < tapsNum; i++) {
        clickTimestamps.push(tapNow);
    }
    clickTimestamps = clickTimestamps.filter(t => tapNow - t <= 1000);
    const liveCps = clickTimestamps.length;
    totalClicks += tapsNum;

    // Поимка монетки Ретро (Insert Coin)
    if (hasMech('retro') && retroCoin.active) {
        const dx = clickX - (retroCoin.x + retroCoin.size / 2);
        const dy = clickY - (retroCoin.y + retroCoin.size / 2);
        if (Math.sqrt(dx * dx + dy * dy) < retroCoin.size * 1.5) {
            retroCoin.active = false;

           // Награда: Обычные гайки + Золотые гайки (5-15)
            const coinReward = Math.floor(75 + Math.random() * 50);
            const goldReward = Math.floor(5 + Math.random() * 11);

            const finalCoinNuts = addNuts(coinReward);
            const finalCoinGold = addGoldenNuts(goldReward);

            AudioEngine.play('pickupCoin5', 1.0);
            particles.push({
    x: clickX,
    y: clickY,
    img: canvasIcoGold,
    imgSize: 24,
    text: `+${finalCoinNuts} гаек, +${finalCoinGold}!`,
    color: '#f1c40f',
    font: 'bold 22px sans-serif',
    speed: 3,
    alpha: 1.6
});
            return;
        }
    }

    if (typeof ufoGift !== 'undefined' && ufoGift.active) {
        const dx = clickX - ufoGift.x;
        const dy = clickY - ufoGift.y;

        if (Math.hypot(dx, dy) < 75) {
            claimUfoGift(clickX, clickY); // <-- Выдаёт гайки/кейсы/золото, звук и частицы
            return;
        }
    }

    // База клика + баффы
    let currentClickPower = clickPower;
    if (skin.buffs.clickAdd) currentClickPower += skin.buffs.clickAdd;

    // Умножаем урон клика на количество тапов (Кость x2, Банан на 5-й тап x2)
    currentClickPower *= tapsNum;

    // === МЕХАНИКА 1 (ПЛАЗМА): CPS > 6 ДАЁТ x2 К ВЫСОТЕ ===
    let isPlasmaX2 = false;
    const isPlasmaEquipped = currentNewtonSkin === 'plasma' || 
        (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'plasma');
    if (isPlasmaEquipped && liveCps >= 6) {
        currentClickPower *= 2;
        isPlasmaX2 = true;
    }

    // === МЕХАНИКА 3 (ЗЕМЛЯ): +25% СИЛЫ КЛИКА ЗА КАЖДЫЙ АКТИВНЫЙ БАФФ ===
    currentClickPower = Math.round(currentClickPower * getPlanetBuffMultiplier());

    // Накачиваем инерцию Млечного пути (теперь переменная объявлена и не крашит игру!)
    if (hasMech('milkyway')) {
        cosmicMomentum += currentClickPower * 1.5;
        cosmicMomentum = Math.min(cosmicMomentum, currentClickPower * 20);
    }

    // Если сработал Банан — выводим визуальное уведомление
    if (isBananaProc) {
        particles.push({
            x: clickX,
            y: clickY - 35,
            text: '🍌 x2 КЛИК!',
            color: '#f1c40f',
            font: 'bold 18px sans-serif',
            speed: 2.2,
            alpha: 1.8
        });
    }

    // Когтеточка (Комбо CPS)
    if (hasMech('scratch') && liveCps > 4) {
        const comboMult = Math.min(1.5, 1.0 + (liveCps - 4) * 0.08);
        currentClickPower = Math.round(currentClickPower * comboMult);
        particles.push({
            x: clickX + (Math.random() * 30 - 15),
            y: clickY - 50,
            text: `🔥 x${comboMult.toFixed(2)} (${liveCps} CPS)`,
            color: '#ff4757',
            font: 'bold 18px sans-serif',
            speed: 2.2,
            alpha: 1.6
        });
    }


    const activeEff = currentEffectId || currentSkinId;
    if (hasMech('storm') && activeEff !== 'absolute' && Math.random() < 0.05) {
        currentHeight = Math.max(0, currentHeight - (currentClickPower * 3));
        triggerPurchaseEffect(10);
        return;
    }

    // Лоза (+40%)
    if (hasMech('vine')) currentClickPower = Math.round(currentClickPower * 1.4);

    // Турбо x3
    if (adState.turboTimer > 0) {
        currentClickPower *= 3;
    }

    // Гайкопад: честно дает гайки за каждый засчитанный тап
    if (adState.frenzyTimer > 0) {
        addNuts(tapsNum);
        for (let i = 0; i < tapsNum; i++) {
            if (Math.random() < 0.01) {
                goldenNuts += 1;
                particles.push({
    x: clickX,
    y: clickY - 30,
    img: canvasIcoGold,
    imgSize: 22,
    text: '+1',
    color: '#f1c40f',
    font: 'bold 22px sans-serif',
    speed: 2,
    alpha: 1.5
});
            }
        }
    }

    // Применяем высоту и импульс пружины UI
    const effectiveClick = Math.round(currentClickPower * getGlobalMultiplier());
    currentHeight += effectiveClick;

    counterScale = Math.min(counterScale + 0.08, 1.4);
    markerBounce = Math.min(markerBounce + 0.15, 1.45);
    checkHeightUnlocks();

    // Ржавая лестница: роллит шанс на каждый из тапов
    if (hasMech('rusty')) {
        for (let i = 0; i < tapsNum; i++) {
            if (Math.random() < 0.65) addNuts(1);
        }
    }

    // Расчет лимита Pity для ящиков
    let actualClicksNeeded = clicksNeeded;
    if (skin.buffs.caseLimitMinus) actualClicksNeeded -= skin.buffs.caseLimitMinus;
    actualClicksNeeded = Math.max(10, actualClicksNeeded);

    // Шанс дропа кейса (проверяется за каждый засчитанный тап)
    const totalLuck = getTotalLuck();
    const dropChance = 0.012 + (totalLuck * 0.0005);
    const ironUpgradeChance = (totalLuck * 0.15) / 100;

for (let i = 0; i < tapsNum; i++) {
        if (Math.random() < dropChance) {
            let caseType = (Math.random() < ironUpgradeChance) ? 'iron' : 'wooden';

            // МЛЕЧНЫЙ ПУТЬ: 25% шанс повысить редкость кейса на уровень выше
            let wasUpgraded = false;
            if (hasMech('milkyway') && Math.random() < 0.25) {
                if (caseType === 'wooden') { caseType = 'iron'; wasUpgraded = true; }
                else if (caseType === 'iron') { caseType = 'gold'; wasUpgraded = true; }
            }

            if (caseType === 'gold') {
                userCases.gold = (userCases.gold || 0) + 1;
                AudioEngine.play('jacpot', 1.0);
                particles.push({
                    x: clickX, y: clickY - 50,
                    img: canvasIcoGoldBox, imgSize: 30,
                    text: wasUpgraded ? 'ЗОЛОТОЙ КЕЙС (МЛЕЧНЫЙ ПУТЬ)!' : 'ЗОЛОТОЙ КЕЙС!',
                    color: '#f1c40f', font: 'bold 24px sans-serif', alpha: 2.2, speed: 3.5
                });
            } else if (caseType === 'iron') {
                userCases.iron = (userCases.iron || 0) + 1;
                AudioEngine.play('win', 0.85);
                particles.push({
                    x: clickX, y: clickY - 50,
                    img: canvasIcoIronBox, imgSize: 28,
                    text: wasUpgraded ? 'СЕЙФ (МЛЕЧНЫЙ ПУТЬ)!' : 'СЕЙФ (УДАЧА)!',
                    color: '#7f8c8d', font: 'bold 24px sans-serif', alpha: 2.0, speed: 3.5
                });
            } else {
                boxesOwned++;
                userCases.wooden = boxesOwned;
                if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                AudioEngine.play('case_drop_by_click', 0.9);
                particles.push({
                    x: clickX, y: clickY - 45,
                    img: canvasIcoWoodenBox, imgSize: 28,
                    text: '+1 КЕЙС!',
                    color: '#f1c40f', font: 'bold 24px sans-serif', alpha: 1.8, speed: 3.5
                });
            }
            break;
        }
    }

// === ПРОГРЕСС-БАР КЕЙСА И ВЫДАЧА НАГРАД ===
    clicksForBox += tapsNum;
    if (clicksForBox >= actualClicksNeeded) {
        clicksForBox = clicksForBox - actualClicksNeeded;

        pityStage++;
        clicksNeeded = getClicksNeeded(pityStage);

        let awardedCase = 'wooden';
        if (hasMech('golden')) {
            awardedCase = 'iron';
        } else if (hasMech('marble') && Math.random() < 0.25) {
            awardedCase = 'gold';
        }

        // МЛЕЧНЫЙ ПУТЬ: 25% шанс повысить ящик за шкалу на уровень выше
        if (hasMech('milkyway') && Math.random() < 0.25) {
            if (awardedCase === 'wooden') awardedCase = 'iron';
            else if (awardedCase === 'iron') awardedCase = 'gold';
        }

        if (awardedCase === 'gold') {
            userCases.gold = (userCases.gold || 0) + 1;
            AudioEngine.play('jacpot', 1.0);
            particles.push({
                x: clickX, y: clickY - 50,
                img: canvasIcoGoldBox, imgSize: 30,
                text: 'ЗОЛОТОЙ КЕЙС!',
                color: '#f1c40f', font: 'bold 24px sans-serif', alpha: 2.2, speed: 3.5
            });
        } else if (awardedCase === 'iron') {
            userCases.iron = (userCases.iron || 0) + 1;
            AudioEngine.play('win', 0.85);
            particles.push({
                x: clickX, y: clickY - 50,
                img: canvasIcoIronBox, imgSize: 28,
                text: 'ЖЕЛЕЗНЫЙ СЕЙФ!',
                color: '#7f8c8d', font: 'bold 24px sans-serif', alpha: 2.0, speed: 3.5
            });
        } else {
            boxesOwned++;
            userCases.wooden = boxesOwned;
            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
            triggerCaseGainedPopup();
        }
    }

    // Обновление текста и вертикальной шкалы прогресса
    if (uiBoxText) {
        uiBoxText.innerText = `Ящик: ${clicksForBox}/${actualClicksNeeded}`;
    }
    if (uiBoxProgress) {
        uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / actualClicksNeeded) * 100)}%`;
    }

    // Новогодняя лестница
    if (hasMech('new_year')) {
        newYearCounter += tapsNum;
        if (newYearCounter >= newYearTarget) {
            newYearCounter = 0;
            newYearTarget = Math.floor(150 + Math.random() * 100);

            const roll = Math.random();
            if (roll < 0.6) {
    addNuts(100);
    particles.push({ x: clickX, y: clickY, img: canvasIcoNut, imgSize: 22, text: '+100', color: '#27ae60', speed: 2, alpha: 1 });
} else if (roll < 0.9) {
    userCases.wooden++;
    boxesOwned = userCases.wooden;
    if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
    particles.push({ x: clickX, y: clickY, img: canvasIcoWoodenBox, imgSize: 26, text: '+1 ЯЩИК!', color: '#8d6e63', speed: 2, alpha: 1 });
} else {
    userCases.iron++;
    particles.push({ x: clickX, y: clickY, img: canvasIcoIronBox, imgSize: 26, text: '+1 СЕЙФ!', color: '#7f8c8d', speed: 2, alpha: 1 });
}
        }
    }

// Визуал и физика
    ladderScaleX = 1.1;
    ladderScaleY = 0.85;
    ladderSpeed = 25;

    if (isPlasmaX2) {
        // Увеличенный сочный партикл для телефонов: 30px + молния 26px
        particles.push({
            x: clickX + (Math.random() * 30 - 15),
            y: clickY - 20,
            img: lightningImg,
            imgSize: 26,
            text: `+${effectiveClick} (x2)`,
            color: '#00ffff',
            font: 'bold 30px sans-serif',
            alpha: 1.5,
            speed: 3.5
        });
    } else {
        // Базовый крупный шрифт (30px, как и было)
        particles.push({
            x: clickX + (Math.random() * 40 - 20),
            y: clickY - 20,
            text: `+${effectiveClick}`,
            font: 'bold 30px sans-serif',
            alpha: 1,
            speed: 3 + Math.random() * 2
        });
    }

    // Проверка офферов на 500 м
    if (currentHeight >= 500 && !starterPack.unlocked && !starterPack.purchased) {
        starterPack.unlocked = true;
        starterPack.startTime = Date.now();
        saveGame();
    }

    if (currentHeight >= 500 && !radarState.prompted) {
        radarState.prompted = true;
        const radarMod = document.getElementById('radar-modal');
        if (radarMod) radarMod.classList.remove('hidden');
        saveGame();
    }

    checkHeightMilestones();
}
// --- МАГАЗИН И УПРАВЛЕНИЕ ---
const shopModal = document.getElementById('shop-modal');
const btnOpenShop = document.getElementById('btn-open-shop');
const btnCloseShop = document.getElementById('btn-close-shop');

const btnBuyClick = document.getElementById('buy-click');
const btnBuySpeaker = document.getElementById('buy-speaker');
const btnBuyNewton = document.getElementById('buy-newton');

const uiCostClick = document.getElementById('cost-click');
const uiCostSpeaker = document.getElementById('cost-speaker');
const uiCostNewton = document.getElementById('cost-newton');

const uiClickPower = document.getElementById('shop-click-power');
const uiLvlSpeaker = document.getElementById('shop-speaker-lvl');
const uiLvlNewton = document.getElementById('shop-newton-lvl');

btnOpenShop.addEventListener('click', () => {
    const isClosed = shopModal.classList.toggle('hidden');
    if (!isClosed) {
        updateShopUI();
    }
});
btnCloseShop.addEventListener('click', () => shopModal.classList.add('hidden'));

function updateShopUI() {
    upgradeCost = getUpgradeCost('click', clickLevel);
    speakerCost = getUpgradeCost('speaker', speakerLevel);
    newtonCost = getUpgradeCost('newton', newtonLevel);

    if (uiCostClick) uiCostClick.innerText = upgradeCost;
    if (uiCostSpeaker) uiCostSpeaker.innerText = speakerCost;
    if (uiCostNewton) uiCostNewton.innerText = newtonCost;

    // Вывод текущей мощности (лаконично, в 2 строчки)
    const elSpkPwr = document.getElementById('shop-speaker-power');
    const elNwtPwr = document.getElementById('shop-newton-power');
    if (elSpkPwr && typeof speakerMPS !== 'undefined') elSpkPwr.innerText = speakerMPS;
    if (elNwtPwr && typeof newtonPower !== 'undefined') elNwtPwr.innerText = newtonPower;

    if (currentHeight >= upgradeCost) btnBuyClick.classList.remove('disabled');
    else btnBuyClick.classList.add('disabled');

    if (currentHeight >= speakerCost) btnBuySpeaker.classList.remove('disabled');
    else btnBuySpeaker.classList.add('disabled');

    if (currentHeight >= newtonCost) btnBuyNewton.classList.remove('disabled');
    else btnBuyNewton.classList.add('disabled');
}

// Покупка: Сила Тапа
document.getElementById('buy-click').addEventListener('click', () => {
    const cost = getUpgradeCost('click', clickLevel);
    if (currentHeight >= cost) {
        currentHeight -= cost;
        clickLevel++;

        // Пересчёт базовой силы клика по формуле
        baseClickPower = UPGRADES_CONFIG.click.basePower + (clickLevel * UPGRADES_CONFIG.click.powerPerLevel);

        const currentSkin = LADDER_SKINS[currentSkinId] || {};
        const extraClick = (currentSkin.buffs && currentSkin.buffs.click) ? currentSkin.buffs.click : 0;
        clickPower = baseClickPower + extraClick;

        if (uiClickPower) uiClickPower.innerText = clickPower;

        triggerPurchaseEffect(cost);
        updateShopUI();
    }
});

// Покупка: Колонка (Сабвуфер)
document.getElementById('buy-speaker').addEventListener('click', () => {
    const cost = getUpgradeCost('speaker', speakerLevel);
    if (currentHeight >= cost) {
        currentHeight -= cost;
        speakerLevel++;

        // Пересчёт MPS по формуле
        speakerMPS = UPGRADES_CONFIG.speaker.basePower + (speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel);

        if (uiLvlSpeaker) uiLvlSpeaker.innerText = speakerLevel;
        if (lvlSpeakerDisplay) lvlSpeakerDisplay.innerText = speakerLevel; // Безопасная проверка

        triggerPurchaseEffect(cost); // Теперь гарантированно вызывается!
        updateShopUI();
    }
});

// Покупка: Шарики Ньютона
document.getElementById('buy-newton').addEventListener('click', () => {
    const cost = getUpgradeCost('newton', newtonLevel);
    if (currentHeight >= cost) {
        currentHeight -= cost;
        newtonLevel++;

        // Пересчёт силы удара по формуле
        newtonPower = UPGRADES_CONFIG.newton.basePower + (newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel);
        newtonSpeed = Math.max(500, 3000 - (newtonLevel * 130));

        if (uiLvlNewton) uiLvlNewton.innerText = newtonLevel;
        if (lvlNewtonDisplay) lvlNewtonDisplay.innerText = newtonLevel; // Безопасная проверка

        triggerPurchaseEffect(cost); // Теперь гарантированно вызывается!
        updateShopUI();
    }
});

// ===================================================
// --- КЕЙСЫ, РУЛЕТКА-ЛЕСТНИЦА И ИНВЕНТАРЬ ---
// ===================================================

const GACHA_CELL_H = 100;
const GACHA_WIN_INDEX = 42;
let currentGachaY = 0;
let targetGachaY = 0;
let pendingPrize = null;
let lastGachaRung = 0;

const RARITY_COLORS = {
    common: '#bdc3c7',
    rare: '#3498db',
    epic: '#9b59b6',
    legendary: '#f1c40f',
    special: '#e74c3c'
};


function createGachaItemCard(item, caseId = 'wooden') {
    const card = document.createElement('div');
    card.style.position = 'relative';
    card.style.width = '100%';
    card.style.height = `${GACHA_CELL_H}px`;
    card.style.boxSizing = 'border-box';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';

    const leftRail = document.createElement('div');
    const rightRail = document.createElement('div');
    const rung = document.createElement('div');

    if (caseId === 'gold') {
        // === ЗОЛОТАЯ ЛЕСТНИЦА-КЕЙС ===
        leftRail.style.cssText = 'position:absolute;left:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#d4ac0d 0%,#fff9d2 30%,#f1c40f 65%,#9a7d0a 100%);box-shadow:inset 1px 0 4px #ffffff,inset -2px 0 5px rgba(0,0,0,0.7),0 0 8px rgba(241,196,15,0.35);border-right:1px solid #7d6608;';
        rightRail.style.cssText = 'position:absolute;right:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#9a7d0a 0%,#f1c40f 35%,#fff9d2 70%,#d4ac0d 100%);box-shadow:inset 2px 0 5px rgba(0,0,0,0.7),inset -1px 0 4px #ffffff,0 0 8px rgba(241,196,15,0.35);border-left:1px solid #7d6608;';
        rung.style.cssText = 'position:absolute;bottom:4px;left:14px;right:14px;height:16px;background:linear-gradient(180deg,#fffdf0 0%,#f9e79f 20%,#f1c40f 50%,#b7950b 80%,#7d6608 100%);box-shadow:0 4px 12px rgba(0,0,0,0.9),0 0 10px rgba(241,196,15,0.5),inset 0 1px 2px #fff;border-radius:3px;border-top:1px solid #fff;border-bottom:1px solid #564805;';
        // Рубиновые заклёпки на золоте
        rung.innerHTML = `
            <div style="position:absolute;left:3px;top:3px;width:8px;height:8px;background:radial-gradient(circle,#ff7675 25%,#d63031 75%,#2d3436 100%);border-radius:50%;box-shadow:0 0 6px #ff7675,0 1px 2px #000;"></div>
            <div style="position:absolute;right:3px;top:3px;width:8px;height:8px;background:radial-gradient(circle,#ff7675 25%,#d63031 75%,#2d3436 100%);border-radius:50%;box-shadow:0 0 6px #ff7675,0 1px 2px #000;"></div>
        `;
    } else if (caseId === 'iron') {
        // === ЖЕЛЕЗНАЯ ЛЕСТНИЦА-СЕЙФ ===
        leftRail.style.cssText = 'position:absolute;left:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#636e72 0%,#b2bec3 35%,#4b5358 80%,#2d3436 100%);box-shadow:inset 1px 0 3px rgba(255,255,255,0.6),inset -2px 0 4px rgba(0,0,0,0.8);border-right:1px solid #1e272e;';
        rightRail.style.cssText = 'position:absolute;right:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#2d3436 0%,#4b5358 20%,#b2bec3 65%,#636e72 100%);box-shadow:inset 2px 0 4px rgba(0,0,0,0.8),inset -1px 0 3px rgba(255,255,255,0.6);border-left:1px solid #1e272e;';
        rung.style.cssText = 'position:absolute;bottom:4px;left:14px;right:14px;height:16px;background:repeating-linear-gradient(90deg,#3d454d,#3d454d 3px,#636e72 3px,#636e72 6px),linear-gradient(180deg,#dfe6e9 0%,#636e72 40%,#2d3436 100%);background-blend-mode:overlay;box-shadow:0 4px 10px rgba(0,0,0,0.9),inset 0 1px 2px rgba(255,255,255,0.6);border-radius:3px;border-top:1px solid #dfe6e9;border-bottom:1px solid #111;';
        // Стальные болты-шестигранники
        rung.innerHTML = `
            <div style="position:absolute;left:3px;top:3px;width:8px;height:8px;background:radial-gradient(circle,#dfe6e9 30%,#2d3436 90%);border:1px solid #111;border-radius:2px;box-shadow:0 1px 2px #000;"></div>
            <div style="position:absolute;right:3px;top:3px;width:8px;height:8px;background:radial-gradient(circle,#dfe6e9 30%,#2d3436 90%);border:1px solid #111;border-radius:2px;box-shadow:0 1px 2px #000;"></div>
        `;
    } else {
        // === ДЕРЕВЯННАЯ СТРЕМЯНКА ===
        leftRail.style.cssText = 'position:absolute;left:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#5c3a21 0%,#8d5524 45%,#4a2e1b 100%);box-shadow:inset 1px 0 2px rgba(255,255,255,0.15),inset -2px 0 4px rgba(0,0,0,0.8);border-right:1px solid #341a0b;';
        rightRail.style.cssText = 'position:absolute;right:4px;top:0;bottom:0;width:14px;background:linear-gradient(90deg,#4a2e1b 0%,#7d4820 45%,#3c1e0e 100%);box-shadow:inset 2px 0 4px rgba(0,0,0,0.8),inset -1px 0 2px rgba(255,255,255,0.1);border-left:1px solid #341a0b;';
        rung.style.cssText = 'position:absolute;bottom:4px;left:14px;right:14px;height:16px;background:linear-gradient(180deg,#965b2d 0%,#6d3d19 50%,#43220c 100%);box-shadow:0 4px 8px rgba(0,0,0,0.85),inset 0 1px 1px rgba(255,255,255,0.25);border-radius:2px;';
        // Тёмные кованые гвозди
        rung.innerHTML = `
            <div style="position:absolute;left:3px;top:4px;width:7px;height:7px;border-radius:50%;background:radial-gradient(circle,#7f8c8d 30%,#2c3e50 90%);box-shadow:0 1px 2px #000;"></div>
            <div style="position:absolute;right:3px;top:4px;width:7px;height:7px;border-radius:50%;background:radial-gradient(circle,#7f8c8d 30%,#2c3e50 90%);box-shadow:0 1px 2px #000;"></div>
        `;
    }

    card.appendChild(leftRail);
    card.appendChild(rightRail);
    card.appendChild(rung);

    // Контент награды между перекладинами
    const content = document.createElement('div');
    content.style.cssText = 'display:flex;flex-direction:column;align-items:center;margin-bottom:14px;z-index:2;';

    if (item.type === 'nuts') {
        content.innerHTML = `
            <img src="assets/nut.webp" style="width: 32px; height: 32px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));">
            <div style="color: #f1c40f; font-size: 11px; font-weight: bold; margin-top: 2px;">+${item.amount}</div>
        `;
    } else {
        let meta = { name: 'Предмет', rarity: 'common', file: '' };
        if (item.type === 'skin') meta = LADDER_SKINS[item.id] || meta;
        else if (item.type === 'speaker') meta = SPEAKER_SKINS[item.id] || meta;
        else if (item.type === 'newton') meta = NEWTON_SKINS[item.id] || meta;
        else if (item.type === 'talisman') meta = TALISMANS[item.id] || meta;

        const color = RARITY_COLORS[meta.rarity] || '#bdc3c7';

        content.innerHTML = `
            <div style="width: 32px; height: 42px; display: flex; justify-content: center; align-items: center; filter: drop-shadow(0 0 6px ${color});">
                <img src="${meta.file || 'assets/wood_stair-removebg-preview.png'}" style="width: 26px; max-height: 38px; object-fit: contain;" onerror="this.style.display='none'">
            </div>
            <div style="color: ${color}; font-size: 10px; font-weight: bold; margin-top: 2px; max-width: 95px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 0 1px 3px #000;">${meta.name}</div>
        `;
    }

    card.appendChild(content);
    return card;
}

// 2. Определение победителя по весам
function rollLootFromCase(caseId) {
    const caseData = CASES_DB[caseId] || CASES_DB.wooden;
    const totalLuck = getTotalLuck();

    // 1. Деревянный ящик (динамические гайки 60-180 + бонус удачи)
    if (caseId === 'wooden') {
        const rollType = Math.random();
        // 70% шанс на выпадение гаек
        if (rollType < 0.70) {
            const baseAmount = Math.floor(60 + Math.random() * 121); // 60..180 гаек
            const bonusMult = 1 + (totalLuck * 0.01); // +1% за единицу удачи
            const finalNuts = Math.floor(baseAmount * bonusMult);

            // Микро-джекпот: 3% шанс на +1 🟡 при 30+ удачи
            if (totalLuck >= 30 && Math.random() < 0.03) {
                goldenNuts += 1;
                if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
                particles.push({ x: canvas.width / 2, y: canvas.height * 0.3, text: 'ДЖЕКПОТ: +1 ЗОЛОТО!', color: '#f1c40f', alpha: 2, speed: 1.5 });
            }

            return { type: 'nuts', amount: finalNuts, name: `${finalNuts} Гаек` };
        }
    }

    // 2. Клонируем лут для пересчета шансов от удачи
    let currentLoot = caseData.loot.map(item => ({ ...item }));

    // Механика «Магия дат» скина Календарь
    if (hasMech('calendar')) {
        // 1. 1% шанс достать Легендарку прямо из Железного сейфа
        if (caseId === 'iron' && Math.random() < 0.01) {
            const legSkins = Object.keys(LADDER_SKINS).filter(k => LADDER_SKINS[k].rarity === 'legendary');
            const chosenLeg = legSkins[Math.floor(Math.random() * legSkins.length)];
            return { type: 'skin', id: chosenLeg };
        }

        // 2. +5% к весу Легендарок в Золотом кейсе
        if (caseId === 'gold') {
            currentLoot.forEach(item => {
                const s = LADDER_SKINS[item.id];
                if (s && s.rarity === 'legendary') item.weight += 15;
            });
        }
    }

    // Железный сейф: 1 удача дает +0.5% к шансу на эпик (увеличиваем вес эпиков)
    if (caseId === 'iron') {
        const epicBonusWeight = Math.floor(totalLuck * 1.5);
        currentLoot.forEach(item => {
            const s = LADDER_SKINS[item.id];
            if (s && s.rarity === 'epic') {
                item.weight += epicBonusWeight;
            }
        });
    }

    // Золотой контейнер: 1 удача дает +0.2% к шансу на легендарку
    if (caseId === 'gold') {
        const legBonusWeight = Math.floor(totalLuck * 0.8);
        currentLoot.forEach(item => {
            const s = LADDER_SKINS[item.id];
            if (s && s.rarity === 'legendary') {
                item.weight += legBonusWeight;
            }
        });
    }

    const totalWeight = currentLoot.reduce((sum, i) => sum + i.weight, 0);
    let rand = Math.random() * totalWeight;

    for (let item of currentLoot) {
        if (rand < item.weight) return item;
        rand -= item.weight;
    }
    return currentLoot[0];
}

// Клик по бесплатному ящику за активную игру
if (btnClaimTimedBox) {
    btnClaimTimedBox.onclick = () => {
        if (isTimedBoxReady) {
            isTimedBoxReady = false;
            activePlayBoxTimer = 0; // Сбрасываем и запускаем таймер заново
            boxesOwned++;
            userCases.wooden = boxesOwned;
            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;

           AudioEngine.play('win', 0.8);
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.4,
                img: canvasIcoWoodenBox,
                imgSize: 28,
                text: '+1 ЯЩИК ПОЛУЧЕН!',
                color: '#2ecc71',
                font: 'bold 26px sans-serif',
                alpha: 2.0,
                speed: 2
            });
            saveGame();
        }
    };
}

// 3. Запуск анимации вращения
let isGachaSpinning = false;

function startCaseOpening(caseId = 'wooden', isReroll = false) {
    // 1. Сразу глушим все победные звуки предыдущего дропа
    AudioEngine.stop('jacpot');
    AudioEngine.stop('win');
    AudioEngine.stop('gaiki');
    AudioEngine.stop('open_case_end');

    // 2. Сразу убираем кнопки реролла с экрана, пока крутится лента
    const oldNeonBtn = document.getElementById('btn-neon-reroll');
    if (oldNeonBtn) oldNeonBtn.remove();
    const oldAdBtn = document.getElementById('btn-ad-reroll');
    if (oldAdBtn) oldAdBtn.remove();

    // 3. Сбрасываем попытки только если это абсолютно новый кейс
    if (!isReroll) {
        window._caseAdRerollUsed = false;
        neonRerollUsed = false;
    }

    const modal = document.getElementById('gachaModal');
    const tape = document.getElementById('gachaTape');
    const claimBtn = document.getElementById('gachaClaimBtn');
    const title = document.getElementById('gachaTitle');

    // Прячем окно со списком кейсов, чтобы не мешало
    if (casesModal) casesModal.classList.add('hidden');

    const caseData = CASES_DB[caseId] || CASES_DB.wooden;
    title.innerText = `Открываем: ${caseData.name}`;
    title.style.color = caseData.color;

    // Подсвечиваем саму рамку рулетки под цвет текущего кейса
    if (tape && tape.parentElement) {
        tape.parentElement.style.borderColor = caseData.color;
        tape.parentElement.style.boxShadow = `0 0 25px ${caseData.color}66`;
    }

    modal.style.display = 'flex';
    claimBtn.style.display = 'none';
    tape.innerHTML = '';
    isGachaSpinning = true;

    pendingPrize = rollLootFromCase(caseId);

    // Сборка 50 ступеней лестницы (передаем caseId для отрисовки дерева/железа/золота)
    for (let i = 0; i < 50; i++) {
        const item = (i === GACHA_WIN_INDEX)
            ? pendingPrize
            : caseData.loot[Math.floor(Math.random() * caseData.loot.length)];
        tape.appendChild(createGachaItemCard(item, caseId));
    }

    currentGachaY = 0;
    lastGachaRung = 0;
    const spinTickSound = Math.random() > 0.5 ? 'click' : 'click_3';
    const offset = (Math.random() - 0.5) * 36;
    targetGachaY = -(GACHA_WIN_INDEX * GACHA_CELL_H) + 100 + offset;

    function finishSpin() {
        if (!isGachaSpinning) return;
        isGachaSpinning = false;
        currentGachaY = targetGachaY;
        tape.style.transform = `translateY(${currentGachaY}px)`;
        claimBtn.style.display = 'block';

        let prizeRarity = 'common';
        let isDuplicate = false;
        let prizeName = '';

        // Определение типа выигрыша
        if (pendingPrize.type === 'nuts') {
            title.innerHTML = `ВЫИГРЫШ: +${pendingPrize.amount} <img src="assets/nut.webp" class="ui-ico-title">`;
            title.style.color = '#54a0ff';
            AudioEngine.play('open_case_end', 0.8);
        } else {
            if (pendingPrize.type === 'skin') {
                const s = LADDER_SKINS[pendingPrize.id] || {};
                prizeRarity = s.rarity || 'common';
                prizeName = s.name || pendingPrize.id;
                isDuplicate = ownedSkins.includes(pendingPrize.id);
            } else if (pendingPrize.type === 'speaker') {
                const s = SPEAKER_SKINS[pendingPrize.id] || {};
                prizeRarity = s.rarity || 'common';
                prizeName = s.name || pendingPrize.id;
                isDuplicate = ownedSpeakerSkins.includes(pendingPrize.id);
            } else if (pendingPrize.type === 'newton') {
                const s = NEWTON_SKINS[pendingPrize.id] || {};
                prizeRarity = s.rarity || 'common';
                prizeName = s.name || pendingPrize.id;
                isDuplicate = ownedNewtonSkins.includes(pendingPrize.id);
            } else if (pendingPrize.type === 'talisman') {
                const s = TALISMANS[pendingPrize.id] || {};
                prizeRarity = s.rarity || 'common';
                prizeName = s.name || pendingPrize.id;
                isDuplicate = ownedTalismans.includes(pendingPrize.id);
            }

            const goldReward = DUPLICATE_GOLD_REWARDS[prizeRarity] || 5;

            if (isDuplicate) {
                title.innerHTML = `ПОВТОРКА: ${prizeName} (+${goldReward} <img src="assets/golden_nut.webp" class="ui-ico-title">)`;
                title.style.color = '#e67e22';
                AudioEngine.play('gaiki', 0.8);
            } else {
                title.innerText = `НОВЫЙ ПРЕДМЕТ: ${prizeName}!`;
                title.style.color = RARITY_COLORS[prizeRarity] || '#fff';

                if (prizeRarity === 'legendary' || prizeRarity === 'epic') {
                    AudioEngine.play('jacpot', 1.0);
                } else {
                    AudioEngine.play('win', 0.85);
                }
            }
        }

        // 1. Механика Неоновой лестницы (1 бесплатный реролл)
        const oldReroll = document.getElementById('btn-neon-reroll');
        if (oldReroll) oldReroll.remove();

        if (hasMech('neon') && !neonRerollUsed) {
            const rerollBtn = document.createElement('button');
            rerollBtn.id = 'btn-neon-reroll';
            rerollBtn.innerText = '🎲 Перекрутить (Неон)';
            rerollBtn.style.cssText = `
                margin-top: 10px; padding: 8px 20px; font-size: 15px; font-weight: bold;
                background: #ff00ff; color: #fff; border: none; border-radius: 5px;
                cursor: pointer; box-shadow: 0 0 12px #ff00ff;
            `;
            rerollBtn.onclick = (e) => {
                e.stopPropagation();
                neonRerollUsed = true;
                rerollBtn.remove();
                startCaseOpening(caseId, true); // <-- Передаем true (isReroll)
            };
            claimBtn.parentNode.insertBefore(rerollBtn, claimBtn.nextSibling);
        }

        // 2. Реролл кейса за рекламу (строго 1 раз за открытие!)
        const oldAdReroll = document.getElementById('btn-ad-reroll');
        if (oldAdReroll) oldAdReroll.remove();

        if (!window._caseAdRerollUsed) {
            const adRerollBtn = document.createElement('button');
            adRerollBtn.id = 'btn-ad-reroll';
            adRerollBtn.innerText = '📺 Перекрутить (Реклама)';
            adRerollBtn.style.cssText = `
                margin-top: 8px; padding: 8px 18px; font-size: 13px; font-weight: bold;
                background: #e67e22; color: #fff; border: none; border-radius: 5px; cursor: pointer;
            `;
            adRerollBtn.onclick = (e) => {
                e.stopPropagation();
                watchRewardedAd('case_reroll', () => {
                    window._caseAdRerollUsed = true;
                    adRerollBtn.remove();
                    startCaseOpening(caseId, true); // <-- Передаем true (isReroll)
                });
            };
            claimBtn.parentNode.insertBefore(adRerollBtn, claimBtn.nextSibling);
        }
    }

    function renderGachaPhysics() {
        if (!isGachaSpinning) return;

        currentGachaY += (targetGachaY - currentGachaY) * 0.032;
        tape.style.transform = `translateY(${currentGachaY}px)`;

        const currentRung = Math.floor(-currentGachaY / GACHA_CELL_H);
        if (currentRung !== lastGachaRung) {
            lastGachaRung = currentRung;
            AudioEngine.play(spinTickSound, 0.35);
        }

        if (Math.abs(targetGachaY - currentGachaY) > 0.6) {
            requestAnimationFrame(renderGachaPhysics);
        } else {
            setTimeout(finishSpin, 80);
        }
    }

    modal.onclick = (e) => {
        if (isGachaSpinning) {
            finishSpin();
        } else if (e.target === modal) {
            claimBtn.click();
        }
    };

    requestAnimationFrame(renderGachaPhysics);
}

// Забор награды
document.getElementById('gachaClaimBtn').onclick = () => {
    AudioEngine.stop('jacpot');
    AudioEngine.stop('win');
    AudioEngine.stop('gaiki');
    AudioEngine.stop('open_case_end');

    const oldReroll = document.getElementById('btn-neon-reroll');
    if (oldReroll) oldReroll.remove();
    const oldAdReroll = document.getElementById('btn-ad-reroll');
    if (oldAdReroll) oldAdReroll.remove();

    if (!pendingPrize) return;

    // === ПАССИВКА КРИСТАЛЬНОЙ ЛЕСТНИЦЫ (+3 ЗОЛОТА ЗА ЛЮБОЙ КЕЙС) ===
    if (hasMech('crystal')) {
        const actualCrystalGold = addGoldenNuts(3); // С 1 колонкой даст 4, с 2 колонками даст 5
        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.32,
            text: `+${actualCrystalGold} (Кристалл)!`,
            color: '#00ffff',
            font: 'bold 22px sans-serif',
            alpha: 2.2,
            speed: 2
        });
    }

    if (pendingPrize.type === 'nuts') {
        addNuts(pendingPrize.amount);
    } else if (pendingPrize.type === 'skin') {
        const id = pendingPrize.id;
        if (ownedSkins.includes(id)) {
            const rarity = LADDER_SKINS[id]?.rarity || 'common';
            addGoldenNuts(DUPLICATE_GOLD_REWARDS[rarity] || 5);
        } else {
            ownedSkins.push(id);
        }
    } else if (pendingPrize.type === 'speaker') {
        const id = pendingPrize.id;
        if (ownedSpeakerSkins.includes(id)) {
            addGoldenNuts(80);
        } else {
            ownedSpeakerSkins.push(id);
        }
    } else if (pendingPrize.type === 'newton') {
        const id = pendingPrize.id;
        if (ownedNewtonSkins.includes(id)) {
            addGoldenNuts(80);
        } else {
            ownedNewtonSkins.push(id);
        }
    } else if (pendingPrize.type === 'talisman') {
        const id = pendingPrize.id;
        if (ownedTalismans.includes(id)) {
            addGoldenNuts(60);
        } else {
            ownedTalismans.push(id);
            const regular = ['clover', 'horseshoe', 'paw', 'coin', 'star', 'key'];
            if (regular.every(t => ownedTalismans.includes(t)) && !ownedTalismans.includes('sock')) {
                ownedTalismans.push('sock');
                setTimeout(() => alert('🎉 НЕВЕРОЯТНО! Ты собрал все талисманы и открыл СЕКРЕТНЫЙ НОСОК (+50 к удаче)!'), 300);
            }
        }
    }
    checkAbsoluteUnlock();

    uiNuts.innerText = `${nuts}`;
    document.getElementById('gachaModal').style.display = 'none';
    pendingPrize = null;

    // Снова открываем окно кейсов с обновленными балансами
    if (casesModal) {
        casesModal.classList.remove('hidden');
        renderCasesShop();
    }
};

// === УПРАВЛЕНИЕ ОКНОМ КЕЙСОВ ===
const casesModal = document.getElementById('cases-modal');
const casesContainer = document.getElementById('cases-list-container');
const modalNutsVal = document.getElementById('cases-modal-nuts');
const modalGoldVal = document.getElementById('cases-modal-gold');

function renderCasesShop() {
    if (!casesContainer) return;

    userCases.wooden = boxesOwned;
    if (modalNutsVal) modalNutsVal.innerText = nuts;
    if (modalGoldVal) modalGoldVal.innerText = goldenNuts;

    casesContainer.innerHTML = '';

    for (let [caseId, c] of Object.entries(CASES_DB)) {
        const count = userCases[caseId] || 0;
        const row = document.createElement('div');
        row.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            background: #2c3e50; padding: 10px 12px; border-radius: 8px;
            border-left: 5px solid ${c.color}; color: #fff; flex-shrink: 0;
        `;

        // Расчет цены со скидкой Готической лестницы (-20%)
        let actualPrice = c.price;
        if (c.priceType === 'nuts' && hasMech('goth')) {
            actualPrice = Math.floor(c.price * 0.8);
        }

        let costLabel = 'Бесплатно (дроп)';
        let canBuy = false;

        if (c.priceType === 'nuts') {
            costLabel = `${actualPrice} <img src="assets/nut.webp" class="ui-ico-sm">`;
            canBuy = nuts >= actualPrice;
        } else if (c.priceType === 'goldenNuts') {
            costLabel = `${actualPrice} <img src="assets/golden_nut.webp" class="ui-ico-sm">`;
            canBuy = goldenNuts >= actualPrice;
        }

        let caseIcon = 'assets/wooden_box.webp';
        if (caseId === 'iron') caseIcon = 'assets/iron_box.webp';
        if (caseId === 'gold') caseIcon = 'assets/golden_box.webp';

        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="${caseIcon}" style="width: 32px; height: 32px; object-fit: contain;">
                <div>
                    <div style="font-weight: bold; color: ${c.color}; font-size: 14px;">${c.name}</div>
                    <div style="font-size: 11px; color: #bdc3c7;">Цена: ${costLabel} | У тебя: <b style="color:#fff;">${count} шт.</b></div>
                </div>
            </div>
            <div style="display: flex; gap: 6px;">
                ${c.priceType !== 'free' ? `
                    <button class="buy-c-btn" style="padding: 6px 10px; font-size: 11px; font-weight: bold; border-radius: 4px; border: none; cursor: pointer; background: ${canBuy ? '#e67e22' : '#555'}; color: #fff;" ${!canBuy ? 'disabled' : ''}>
                        Купить
                    </button>
                ` : ''}
                <button class="open-c-btn" style="padding: 6px 10px; font-size: 11px; font-weight: bold; border-radius: 4px; border: none; cursor: pointer; background: ${count > 0 ? '#27ae60' : '#555'}; color: #fff;" ${count <= 0 ? 'disabled' : ''}>
                    Открыть
                </button>
            </div>
        `;

        const buyBtn = row.querySelector('.buy-c-btn');
        if (buyBtn) {
            buyBtn.onclick = () => {
                // Списываем именно actualPrice со скидкой!
                if (c.priceType === 'nuts' && nuts >= actualPrice) {
                    nuts -= actualPrice;
                    userCases[caseId] = (userCases[caseId] || 0) + 1;
                    AudioEngine.play('gaiki', 0.8);
                } else if (c.priceType === 'goldenNuts' && goldenNuts >= actualPrice) {
                    goldenNuts -= actualPrice;
                    userCases[caseId] = (userCases[caseId] || 0) + 1;
                    AudioEngine.play('gaiki', 0.8);
                }
                uiNuts.innerText = `${nuts}`;
                renderCasesShop();
            };
        }

        const openBtn = row.querySelector('.open-c-btn');
        if (openBtn) {
            openBtn.onclick = () => {
                if ((userCases[caseId] || 0) > 0) {
                    userCases[caseId]--;
                    if (caseId === 'wooden') {
                        boxesOwned = userCases.wooden;
                        uiCasesCount.innerText = boxesOwned;
                    }
                    renderCasesShop();
                    startCaseOpening(caseId);
                }
            };
        }

        casesContainer.appendChild(row);
    }

    updateAdFreeRewardsUI();
}

// === УПРАВЛЕНИЕ МОДАЛКОЙ СДЕЛКИ ДНЯ ===
const dailyDealModal = document.getElementById('daily-deal-modal');
const btnOpenDeal = document.getElementById('btn-open-deal');
const btnCloseDeal = document.getElementById('btn-close-deal');

if (btnOpenDeal && dailyDealModal) {
    btnOpenDeal.onclick = () => {
        dailyDealModal.classList.remove('hidden');
        refreshDailyDeal();
        renderDailyDealUI();
    };
}

if (btnCloseDeal && dailyDealModal) {
    btnCloseDeal.onclick = () => {
        dailyDealModal.classList.add('hidden');
    };
}

document.getElementById('btn-open-cases').onclick = () => {
    casesModal.classList.remove('hidden');
    renderCasesShop();
};

document.getElementById('btn-close-cases').onclick = () => {
    AudioEngine.stop('jacpot');
    casesModal.classList.add('hidden');
};

// === 7. ПОЛНЫЙ ИНВЕНТАРЬ (ВКЛАДКИ И ЭКИПИРОВКА) ===
let currentInventoryTab = 'ladders';

const inventoryModal = document.getElementById('inventory-modal');
const inventoryItemsList = document.getElementById('inventory-items-list');
const tabButtons = document.querySelectorAll('.inv-tab');

// Переключение вкладок
tabButtons.forEach(btn => {
    btn.onclick = () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentInventoryTab = btn.dataset.tab;
        renderInventory();
    };
});

// Открытие и закрытие
document.getElementById('btn-open-inventory').onclick = () => {
    inventoryModal.classList.remove('hidden');
    renderInventory();
};

document.getElementById('btn-close-inventory').onclick = () => {
    inventoryModal.classList.add('hidden');
};

function equipLadderEffect(id, silent = false) {
    if (!LADDER_SKINS[id]) return;
    currentEffectId = id;

    // Пересчет урона клика под активный эффект
    const ladderBuffs = getActiveLadderBuffs();
    const extraClick = ladderBuffs.click || 0;
    clickPower = (typeof baseClickPower !== 'undefined' ? baseClickPower : 1) + extraClick;
    if (typeof uiClickPower !== 'undefined' && uiClickPower) {
        uiClickPower.innerText = clickPower;
    }

    if (!silent) AudioEngine.play('click', 0.5);
    saveGame();
    renderInventory();
    updateFieldIcons();
}

// Функция надевания обвесов и скинов
function equipItem(type, id, silent = false) {
    if (type === 'ladders') {
        if (!LADDER_SKINS[id]) return;
        currentSkinId = id;
        const skinData = LADDER_SKINS[id];
        ladderImg.src = skinData.file;

        ufoGlowCanvas = null;

        // Пересчет клика берем из getActiveLadderBuffs()
        const ladderBuffs = getActiveLadderBuffs();
        const extraClick = ladderBuffs.click || 0;
        clickPower = (typeof baseClickPower !== 'undefined' ? baseClickPower : 1) + extraClick;
        if (typeof uiClickPower !== 'undefined' && uiClickPower) {
            uiClickPower.innerText = clickPower;
        }
    }
    else if (type === 'speakers') {
        if (!SPEAKER_SKINS[id]) return;
        currentSpeakerSkin = id;
        speakerSprite.src = SPEAKER_SKINS[id].file;
    }
    else if (type === 'newton') {
        if (!NEWTON_SKINS[id]) return;
        currentNewtonSkin = id;
        const skinData = NEWTON_SKINS[id];
        newtonSprite.src = skinData.file ? skinData.file : '';
    }
    else if (type === 'talismans') {
        // При тихой загрузке (silent === true) не сбрасываем, а строго надеваем!
        if (silent) {
            currentTalisman = id;
        } else {
            currentTalisman = (currentTalisman === id) ? null : id;
            saveGame(); // Сразу сохраняем изменение
        }
        updateFieldIcons();
    }

    // Звук играет только при ручном клике в инвентаре, а при загрузке молчит:
    if (!silent) AudioEngine.play('click', 0.5);
    renderInventory();
}

// Генерация описания баффов
const LADDER_DESC = {
    // === ОБЫЧНЫЕ ===
    wood: 'Стартовая классика. Пахнет началом бесконечного пути.',
    banana: 'Удваивает каждый 5-й тап.',
    beer: '+5 к показателю Удачи.',
    fire: '+7 м за тап, -10 тапов до ящика.',
    fireman: 'Колыбель Ньютона: +15 м за удар',
    plastic: 'Шары Ньютона бьют быстрее на 0.15 c',
    rusty: '65% шанс получить <img src="assets/nut.webp" class="ui-ico"> за каждый тап.',
    tape: 'Скидка 10% в магазине улучшений.',

    // === РЕДКИЕ ===
    book: '+7 к показателю Удачи.',
    cactus: 'Сабвуфер: +20 м/c. Колыбель Ньютона: +10 м за удар',
    cement: 'Колыбель Ньютона: +50%, но удары на 0.3c реже.',
    neon: 'Бесплатный реролл при открытии каждого кейса',
    scratch: 'При 5+ тапах/сек высота за тап x1.5',
    new_year: 'Подарок за каждые 150-250 тапов.',

    // === ЭПИЧЕСКИЕ ===
    bone: 'Удваивает каждый тап',
    crystal: 'Каждое открытие кейса дополнительно приносит +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
    cyber: 'Открывает дополнительный слот под аксессуар.',
    golden: 'Заполнение шкалы тапов даёт Железный сейф вместо деревяного ящика',
    goth: 'Скидка 20% в магазине улучшений и кейсов',
    ice: 'Скольжение: тапать можно свайпом по экрану',
    vine: 'Увеличивает силу тапа, сабвуфера и шаров на +40%.',
    add_stair: 'Баффы длятся на 50% дольше; каждый просмотр рекламы дополнительно приносит 20 <img src="assets/nut.webp" class="ui-ico"> и 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
    calendar_stair: '+10 к показателю Удачи; доп. шанс на легендарные скины из сейфа.',

    // === ЛЕГЕНДАРНЫЕ ===
    marble: '25% шанс на Золотой контейнер за шкалу тапов.',
    quant: 'Расщепление материи: 20% получаемых гаек становятся золотыми, -50 тапов до ящика.',
    ufo: 'Каждые 30 секунд притягивает инопланетный контейнер',
    mimic: 'Мимикрия: копирует способности 2 выбранных лестниц.',

    // === ОСОБЕННЫЕ ===
    retro: 'Поймай летящую монетку (приз: до 125 <img src="assets/nut.webp" class="ui-ico"> и 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
    storm: '+20 м к подъёму за тап, но 5% шанс сломаться при клике.',
    strato: 'Разреженный воздух: ускоряет работу сабвуфера и Колыбели Ньютона на 40%.',
    cosmo: 'Увеличивает лимит оффлайн-накопления ресурсов до 3 часов.',
    milkyway: 'Инерционный разгон лестницы. Шанс 25% повысить редкость любого выпадающего кейса на один уровень выше.',
    endless: 'Каждую минуту увеличивает бонус получаемой высоты (тапы, колонка, колыбель) на +50% (максимум +1 000%). Смена лестницы сбрасывает накопленный бонус',
    absolute: 'Венец эволюции: пассивные эффекты всех лестниц сразу'
};

const SPEAKER_DESC = {
    old: 'Базовый ритм Сабвуфера (мощность x1)',
    monster: '+20% к мощности Сабвуфера. -2 минуты от таймера бесплатного ящика.',
    cyber: '+40% к мощности Сабвуфера. Получайте на 25% больше <img src="assets/nut.webp" class="ui-ico"> и <img src="assets/golden_nut.webp" class="ui-ico">!',
    cool: '×2 к мощности Сабвуфера. Каждый 3-й бас приносит +1 <img src="assets/golden_nut.webp" class="ui-ico">.'
};

const NEWTON_DESC = {
    steel: 'Базовый авто-удар Колыбели Ньютона (урон x1)',
    billiard: '+25% к урону шаров. Каждый 8-й удар даёт x2.5 высоты и 3–5 <img src="assets/nut.webp" class="ui-ico">.',
    plasma: '+50% к урону шаров. Наэлектризованность: при 6+ тапах/сек удваивает высоту за каждый тап. После 5 сек бездействия — автоклик 10 тапов.',
    planet: '×2 к урону шаров, +3 тапа к ящику за удар. +25% к силе тапа, Сабвуфера и шаров за каждый активный бафф. 1% шанс, что удар включит случайный бонус.'
};

function getItemBuffText(type, itemOrId) {
    // Определяем строковый ID, независимо от того, передали ID или объект
    const id = typeof itemOrId === 'string' ? itemOrId : (
        type === 'ladders' ? Object.keys(LADDER_SKINS).find(k => LADDER_SKINS[k] === itemOrId) :
        type === 'speakers' ? Object.keys(SPEAKER_SKINS).find(k => SPEAKER_SKINS[k] === itemOrId) :
        type === 'newton' ? Object.keys(NEWTON_SKINS).find(k => NEWTON_SKINS[k] === itemOrId) :
        type === 'talismans' ? Object.keys(TALISMANS).find(k => TALISMANS[k] === itemOrId) : null
    );

    if (type === 'ladders') {
        return LADDER_DESC[id] || 'Без эффектов';
    }
    if (type === 'speakers') {
        return SPEAKER_DESC[id] || `Бас: x${SPEAKER_SKINS[id]?.buff?.mpsMult || 1.0}`;
    }
    if (type === 'newton') {
        return NEWTON_DESC[id] || `Удар: x${NEWTON_SKINS[id]?.buff?.powerMult || 1.0}`;
    }
    if (type === 'talismans') {
        const item = typeof itemOrId === 'object' ? itemOrId : TALISMANS[id];
        return `+${item?.luck || 0} к удаче`;
    }
    return '';
}

// Отрисовка списка предметов инвентаря (с поддержкой сетки 2 в ряд для лестниц)
function renderInventory() {
    if (!inventoryItemsList) return;
    inventoryItemsList.innerHTML = '';

    // Если вкладка лестниц — включаем класс 2 колонок
    if (currentInventoryTab === 'ladders') {
        inventoryItemsList.classList.add('inv-grid-ladders');
    } else {
        inventoryItemsList.classList.remove('inv-grid-ladders');
    }

    let itemsSource = {};
    let ownedList = [];
    let equippedId = null;

    if (currentInventoryTab === 'ladders') {
        itemsSource = LADDER_SKINS;
        ownedList = ownedSkins;
        equippedId = currentSkinId;

        // Плашка текущего облика и эффекта над сеткой
        const curVisName = LADDER_SKINS[currentSkinId]?.name || 'Деревянная';
        const curEffName = LADDER_SKINS[currentEffectId]?.name || 'Деревянная';
        const statusBox = document.createElement('div');
        statusBox.style.cssText = 'grid-column: 1 / -1; background: rgba(0,0,0,0.5); border: 1px solid #34495e; border-radius: 8px; padding: 6px 10px; margin-bottom: 2px; font-size: 11px; display: flex; justify-content: space-between; color: #bdc3c7;';
        statusBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 5px;">
                <img src="assets/roller.webp" class="ui-ico-sm"> Облик: <b style="color: #2ecc71;">${curVisName}</b>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
                <img src="assets/perk.webp" class="ui-ico-sm"> Эффект: <b style="color: #9b59b6;">${curEffName}</b>
            </div>
        `;
        inventoryItemsList.appendChild(statusBox);

        // Отрисовка каждой лестницы карточкой в 2 колонки
        Object.keys(itemsSource).forEach(id => {
            const item = itemsSource[id];
            const isOwned = ownedList.includes(id);
            const isVis = (currentSkinId === id);
            const isEff = (currentEffectId === id);
            const rarityColor = RARITY_COLORS[item.rarity] || '#bdc3c7';

            const card = document.createElement('div');
            card.className = `ladder-card-tile ${!isOwned ? 'locked' : ''}`;

            // Подсветка рамки активных лестниц
            if (isVis && isEff) {
                card.style.borderColor = '#f1c40f';
                card.style.boxShadow = '0 0 12px rgba(241,196,15,0.35)';
            } else if (isVis) {
                card.style.borderColor = '#2ecc71';
            } else if (isEff) {
                card.style.borderColor = '#9b59b6';
            } else if (isOwned) {
                card.style.borderColor = rarityColor;
            }

            // Бейджи надетых свойств
            let badgesHtml = '';
            if (isVis) {
                badgesHtml += `<div class="ladder-mini-badge" style="background: rgba(46,204,113,0.3); border: 1px solid #2ecc71;"><img src="assets/roller.webp" style="width:11px; height:11px;"></div>`;
            }
            if (isEff) {
                badgesHtml += `<div class="ladder-mini-badge" style="background: rgba(155,89,182,0.3); border: 1px solid #9b59b6;"><img src="assets/perk.webp" style="width:11px; height:11px;"></div>`;
            }

            card.innerHTML = `
                ${badgesHtml ? `<div class="ladder-tile-badges">${badgesHtml}</div>` : ''}
                ${!isOwned ? `<img src="assets/locker.webp" class="ladder-lock-icon">` : ''}
                <div class="ladder-tile-pedestal">
                    <img src="${item.file}" class="ladder-tile-img" onerror="this.style.display='none'">
                </div>
                <div class="ladder-tile-title" style="color: ${rarityColor};">${item.name}</div>
                <div class="ladder-tile-rarity" style="color: ${rarityColor};">${item.rarity}</div>
            `;

            // Клик открывает окно детального предпросмотра
            card.onclick = () => openLadderPreview(id);
            inventoryItemsList.appendChild(card);
        });

        return; // Завершаем, так как для лестниц отрисовка окончена
    }

    // ДЛЯ ОСТАЛЬНЫХ ВКЛАДОК (Колонки, Шары, Брелоки) сохраняем привычный список:
    if (currentInventoryTab === 'speakers') { itemsSource = SPEAKER_SKINS; ownedList = ownedSpeakerSkins; equippedId = currentSpeakerSkin; }
    else if (currentInventoryTab === 'newton') { itemsSource = NEWTON_SKINS; ownedList = ownedNewtonSkins; equippedId = currentNewtonSkin; }
    else if (currentInventoryTab === 'talismans') { itemsSource = TALISMANS; ownedList = ownedTalismans; equippedId = currentTalisman; }

    const itemsKeys = (currentInventoryTab === 'talismans') ? TALISMANS_ORDER : Object.keys(itemsSource);
    const nextTalismanToBuy = (currentInventoryTab === 'talismans') ? TALISMANS_ORDER.find(tId => !ownedTalismans.includes(tId)) : null;

    for (let id of itemsKeys) {
        const item = itemsSource[id];
        if (!item) continue;
        const isOwned = ownedList.includes(id);
        const rarityColor = RARITY_COLORS[item.rarity] || '#bdc3c7';

        const card = document.createElement('div');
        card.className = 'inv-item-card';
        card.style.borderColor = (equippedId === id) ? '#f1c40f' : (isOwned ? rarityColor : '#333');
        card.style.opacity = isOwned ? '1' : '0.65';

        const buffDesc = getItemBuffText(currentInventoryTab, item);
        const imgSrc = item.file || '';

        let actionAreaHtml = '';
        const isEquipped = (equippedId === id);
        if (isEquipped) {
            actionAreaHtml = `<button class="btn-equip active">${currentInventoryTab === 'talismans' ? 'СНЯТЬ' : 'НАДЕТО'}</button>`;
        } else if (isOwned) {
            actionAreaHtml = `<button class="btn-equip available">Надеть</button>`;
        } else if (currentInventoryTab === 'talismans') {
            if (id === nextTalismanToBuy) {
                const canAfford = goldenNuts >= item.price;
                actionAreaHtml = `<button class="btn-equip buy-gear-btn" data-type="talismans" data-id="${id}" style="background: ${canAfford ? '#f1c40f' : '#555'}; color: #000; font-weight: bold;" ${!canAfford ? 'disabled' : ''}>${item.price} <img src="assets/golden_nut.webp" class="ui-ico-sm"></button>`;
            } else {
                actionAreaHtml = `<button class="btn-equip locked" disabled><img src="assets/locker.webp" class="ui-ico-sm"> По очереди</button>`;
            }
        } else {
            const isGold = item.priceType === 'goldenNuts';
            const canAfford = isGold ? (goldenNuts >= item.price) : (nuts >= item.price);
            const currencyIcoHtml = isGold ? '<img src="assets/golden_nut.webp" class="ui-ico-sm">' : '<img src="assets/nut.webp" class="ui-ico-sm">';
            actionAreaHtml = `<button class="btn-equip buy-gear-btn" data-type="${currentInventoryTab}" data-id="${id}" style="background: ${canAfford ? (isGold ? '#f1c40f' : '#3498db') : '#555'}; color: ${isGold ? '#000' : '#fff'}; font-weight: bold;" ${!canAfford ? 'disabled' : ''}>${item.price} ${currencyIcoHtml}</button>`;
        }

        card.innerHTML = `
            <div class="inv-item-left">
                <div class="inv-item-preview">
                    ${imgSrc ? `<img src="${imgSrc}" onerror="this.style.display='none'">` : `<span style="font-size: 20px;">⚪</span>`}
                </div>
                <div class="inv-item-meta">
                    <h4 style="color: ${rarityColor};">${item.name}</h4>
                    <p>${buffDesc}</p>
                </div>
            </div>
            <div>${actionAreaHtml}</div>
        `;

        if (isOwned) {
            card.style.cursor = 'pointer';
            card.onclick = () => equipItem(currentInventoryTab, id);
        }

        const buyBtn = card.querySelector('.buy-gear-btn');
        if (buyBtn) {
            buyBtn.onclick = (e) => {
                e.stopPropagation();
                const bType = buyBtn.dataset.type;
                const bId = buyBtn.dataset.id;
                const targetItem = itemsSource[bId];
                if (!targetItem) return;
                const isGold = (bType === 'talismans') || (targetItem.priceType === 'goldenNuts');

                const processPurchase = () => {
                    if (isGold) goldenNuts -= targetItem.price;
                    else nuts -= targetItem.price;

                    if (bType === 'talismans') { ownedTalismans.push(bId); equipItem('talismans', bId); }
                    else if (bType === 'speakers') { ownedSpeakerSkins.push(bId); equipItem('speakers', bId); }
                    else if (bType === 'newton') { ownedNewtonSkins.push(bId); equipItem('newton', bId); }

                    AudioEngine.play('gaiki', 0.8);
                    uiNuts.innerText = `${nuts}`;
                    updateFieldIcons();
                    checkAbsoluteUnlock();
                    saveGame();
                    renderInventory();
                };

                if (isGold && goldenNuts >= targetItem.price) {
                    showConfirmPurchase('Покупка предмета', `Купить «${targetItem.name}» за ${targetItem.price}?`, targetItem.price, processPurchase);
                } else if (!isGold && nuts >= targetItem.price) {
                    processPurchase();
                }
            };
        }

        inventoryItemsList.appendChild(card);
    }
}

// === ЛОГИКА ОКНА ПРЕДПРОСМОТРА ЛЕСТНИЦЫ ===
let currentPreviewLadderId = null;

function openLadderPreview(id) {
    const item = LADDER_SKINS[id];
    if (!item) return;
    currentPreviewLadderId = id;

    const modal = document.getElementById('ladder-preview-modal');
    const cardEl = modal ? modal.querySelector('.ladder-preview-card') : null;
    const imgEl = document.getElementById('lp-img');
    const nameEl = document.getElementById('lp-name');
    const descEl = document.getElementById('lp-desc');
    const badgeEl = document.getElementById('lp-rarity-badge');
    const haloEl = document.getElementById('lp-halo');
    const actionsBox = document.getElementById('lp-actions');
    const rarityColor = RARITY_COLORS[item.rarity] || '#bdc3c7';

    if (!modal) return;

    // Подстраиваем цвет рамки карточки под редкость
    if (cardEl) {
        cardEl.style.borderColor = rarityColor;
        cardEl.style.boxShadow = `0 0 35px rgba(0, 0, 0, 0.9), 0 0 25px ${rarityColor}40`;
    }

    imgEl.src = item.file;
    nameEl.innerText = item.name;
    nameEl.style.color = rarityColor;
    descEl.innerHTML = LADDER_DESC[id] || 'Базовые свойства лестницы';
    badgeEl.innerText = (item.rarity || 'common').toUpperCase();
    badgeEl.style.color = rarityColor;
    badgeEl.style.borderColor = rarityColor;
    if (haloEl) haloEl.style.background = `radial-gradient(circle, ${rarityColor}45 0%, transparent 70%)`;

    // Настраиваем кнопки в зависимости от статуса владения
    actionsBox.innerHTML = '';
    const isOwned = ownedSkins.includes(id);
    const isVis = (currentSkinId === id);
    const isEff = (currentEffectId === id);

    if (isOwned) {
        // Кнопки для Мимика и Киберпанка
        if (id === 'mimic') {
            actionsBox.innerHTML += `
                <button onclick="openMimicConfig()" style="background: none; border: 1.5px dashed #8c7ae6; color: #8c7ae6; border-radius: 8px; padding: 7px; font-weight: bold; cursor: pointer; font-size: 11px;">
                    ⚙️ Настроить слоты (${LADDER_SKINS[mimicSlots[0]]?.name || '1'}, ${LADDER_SKINS[mimicSlots[1]]?.name || '2'})
                </button>
            `;
        }
        if (id === 'cyber' || id === 'absolute') {
            const bCol = (id === 'absolute') ? '#f1c40f' : '#00ffff';
            actionsBox.innerHTML += `
                <button onclick="openCyberConfig()" style="background: none; border: 1.5px dashed ${bCol}; color: ${bCol}; border-radius: 8px; padding: 7px; font-weight: bold; cursor: pointer; font-size: 11px;">
                    🦾 Настроить доп. слот
                </button>
            `;
        }

        // Основная большая кнопка «Экипировать всё»
        const isFullyEquipped = isVis && isEff;
        actionsBox.innerHTML += `
            <button id="btn-lp-equip-all" style="width: 100%; height: 42px; border-radius: 10px; border: none; font-size: 13px; font-weight: 900; cursor: ${isFullyEquipped ? 'default' : 'pointer'}; background: ${isFullyEquipped ? '#27ae60' : 'linear-gradient(135deg, #f1c40f, #e67e22)'}; color: ${isFullyEquipped ? '#fff' : '#111'}; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
                ${isFullyEquipped ? '✔ ПОЛНОСТЬЮ НАДЕТО' : 'ЭКИПИРОВАТЬ ВСЁ'}
            </button>
        `;

        // Две раздельные кнопки (Только облик / Только эффект)
        actionsBox.innerHTML += `
            <div style="display: flex; gap: 8px; width: 100%;">
                <button id="btn-lp-equip-vis" style="flex: 1; height: 36px; border-radius: 8px; font-size: 11px; font-weight: bold; cursor: pointer; border: 1.5px solid #2ecc71; background: ${isVis ? 'rgba(46,204,113,0.3)' : 'rgba(0,0,0,0.4)'}; color: #2ecc71; display: flex; align-items: center; justify-content: center; gap: 4px;">
                    <img src="assets/roller.webp" class="ui-ico-sm"> ${isVis ? 'Облик надет ✓' : 'Только облик'}
                </button>
                <button id="btn-lp-equip-eff" style="flex: 1; height: 36px; border-radius: 8px; font-size: 11px; font-weight: bold; cursor: pointer; border: 1.5px solid #9b59b6; background: ${isEff ? 'rgba(155,89,182,0.3)' : 'rgba(0,0,0,0.4)'}; color: #e056fd; display: flex; align-items: center; justify-content: center; gap: 4px;">
                    <img src="assets/perk.webp" class="ui-ico-sm"> ${isEff ? 'Эффект надет ✓' : 'Только эффект'}
                </button>
            </div>
        `;
    } else {
        actionsBox.innerHTML = `
            <div style="padding: 10px; background: rgba(0,0,0,0.4); border: 1px solid #555; border-radius: 8px; font-size: 12px; color: #bdc3c7; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <img src="assets/locker.webp" class="ui-ico"> Предмет не открыт
            </div>
        `;
    }

    modal.classList.remove('hidden');
    AudioEngine.play('click', 0.5);

    // Привязка действий кнопок
    const btnAll = document.getElementById('btn-lp-equip-all');
    const btnVis = document.getElementById('btn-lp-equip-vis');
    const btnEff = document.getElementById('btn-lp-equip-eff');

    if (btnAll) {
        btnAll.onclick = () => {
            equipItem('ladders', id, true);
            equipLadderEffect(id);
            openLadderPreview(id); // Обновляем статусы в открытом окне
            renderInventory();
        };
    }
    if (btnVis) {
        btnVis.onclick = () => {
            equipItem('ladders', id);
            openLadderPreview(id);
            renderInventory();
        };
    }
    if (btnEff) {
        btnEff.onclick = () => {
            equipLadderEffect(id);
            openLadderPreview(id);
            renderInventory();
        };
    }
}

// Закрытие модалки предпросмотра
const btnCloseLp = document.getElementById('btn-close-ladder-preview');
if (btnCloseLp) {
    btnCloseLp.onclick = () => {
        const modal = document.getElementById('ladder-preview-modal');
        if (modal) modal.classList.add('hidden');
    };
}

// 8. Запуск цикла (с защитой от двойного старта при смене скина)
let isGameLoopRunning = false;

function startMainGame() {
    if (isGameLoopRunning) return; // Блокируем повторный запуск наглухо!
    isGameLoopRunning = true;
    //строка 2752
    // Сбрасываем таймер времени при старте
    updateFieldIcons();
    window._lastLoopTime = performance.now();
    gameLoop();
}

ladderImg.onload = () => {
    startMainGame();
};

if (ladderImg.complete) {
    startMainGame();
}

window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    // 1. КРИТИЧЕСКИЕ ОКНА НАГРАД (Блокируют закрытие по Esc)
    const milestoneModal = document.getElementById('milestone-modal');
    const calendarModal = document.getElementById('calendar-modal');
    const offlineModal = document.getElementById('offline-modal');
    const thankModal = document.getElementById('thank-you-modal');

    const isRewardModalOpen =
        (milestoneModal && !milestoneModal.classList.contains('hidden')) ||
        (calendarModal && !calendarModal.classList.contains('hidden')) ||
        (offlineModal && !offlineModal.classList.contains('hidden')) ||
        (thankModal && !thankModal.classList.contains('hidden'));

    if (isRewardModalOpen) return;

    // 2. КАРТОЧКА ЛОКАЦИИ СПРАВА (Бортовой журнал)
    const locCard = document.getElementById('location-card');
    if (locCard && !locCard.classList.contains('hidden')) {
        hideLocationCard();
        return;
    }

    // 3. ПОД-ОКНА ИНВЕНТАРЯ (Закрываются в первую очередь)
    const lpModal = document.getElementById('ladder-preview-modal');
    if (lpModal && !lpModal.classList.contains('hidden')) {
        lpModal.classList.add('hidden');
        return;
    }

    const mimicModalEl = document.getElementById('mimic-modal');
    if (mimicModalEl && !mimicModalEl.classList.contains('hidden')) {
        mimicModalEl.classList.add('hidden');
        return;
    }

    const cyberModalEl = document.getElementById('cyber-modal');
    if (cyberModalEl && !cyberModalEl.classList.contains('hidden')) {
        cyberModalEl.classList.add('hidden');
        return;
    }

    const custModal = document.getElementById('customization-modal');
    if (custModal && !custModal.classList.contains('hidden')) {
        custModal.classList.add('hidden');
        return;
    }

    const luckModal = document.getElementById('luck-modal');
    if (luckModal && !luckModal.classList.contains('hidden')) {
        luckModal.classList.add('hidden');
        return;
    }

    // 4. Окно рулетки кейса
    const gachaModal = document.getElementById('gachaModal');
    const claimBtn = document.getElementById('gachaClaimBtn');
    if (gachaModal && gachaModal.style.display !== 'none') {
        AudioEngine.stop('jacpot');
        if (isGachaSpinning) {
            gachaModal.click();
        } else if (claimBtn && claimBtn.style.display !== 'none') {
            claimBtn.click();
        }
        return;
    }

    // 5. ОСНОВНЫЕ МЕНЮ
    const retroInfoModal = document.getElementById('retro-info-modal');
    if (retroInfoModal) retroInfoModal.classList.add('hidden');
    if (shopModal) shopModal.classList.add('hidden');
    if (casesModal) casesModal.classList.add('hidden');
    if (inventoryModal) inventoryModal.classList.add('hidden');
    if (dailyDealModal) dailyDealModal.classList.add('hidden');
    if (adStreakModal) adStreakModal.classList.add('hidden');
    if (donateModal) donateModal.classList.add('hidden');
    if (starterModal) starterModal.classList.add('hidden');
    if (radarModal) radarModal.classList.add('hidden');

    const lbModal = document.getElementById('leaderboard-modal');
    if (lbModal) lbModal.classList.add('hidden');

    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) settingsModal.classList.add('hidden');
});

function triggerPurchaseEffect(cost = 10) {
    dangerFlash = 1.0;
    counterScale = 0.65;

    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.08,
        text: `-${Math.floor(cost).toLocaleString('ru-RU')} м`,
        color: '#ff4757',
        font: 'bold 22px sans-serif',
        alpha: 2.2,
        speed: 2.5
    });

    // Серия тресков: имитация надлома и полного обрушения балок
    AudioEngine.play('upgrade_crack_ladder', 0.5);
    setTimeout(() => AudioEngine.play('upgrade_crack_ladder', 0.75), 80);
    setTimeout(() => AudioEngine.play('upgrade_crack_ladder', 0.95), 170);

    const costPower = Math.min(5.0, 1.0 + Math.log10(Math.max(10, cost)) * 0.75);
    shakeTime = Math.floor(12 * costPower);
    breakDelay = Math.floor(14 * costPower);
    ladderDropY = canvas.height * (0.9 * costPower);
    ladderSpeed = -60 * costPower;
    breakLadder();
}

// ==========================================
// --- СИСТЕМА СОХРАНЕНИЙ (LOCAL STORAGE) ---
// ==========================================

function saveGame() {
    const saveData = {
        blackHoleBonus,
        retroChallengeMs,
        mimicSlots,
        cyberExtraAccessory,
        currentEffectId: currentEffectId || currentSkinId || 'wood',
        settingsState,
        radarState,
        calendarState,
        isVip, hasAdFree, starterPack,
        adState,
        claimedMilestones, dailyDeal,
        activePlayBoxTimer, isTimedBoxReady,
        currentHeight, maxAltitudeReached, unlockedTrackerCheckpoints, nuts, goldenNuts, boxesOwned,
        clickLevel, speakerLevel, newtonLevel,
        clicksForBox, clicksNeeded, pityStage,
        userCases,
        ownedSkins, ownedSpeakerSkins, ownedNewtonSkins, ownedTalismans,
        currentSkinId, currentSpeakerSkin, currentNewtonSkin, currentTalisman,
        lastSaveTime: Date.now() // Метка времени для будущего оффлайн-дохода
    };
    localStorage.setItem('cosmicStaircaseSave', JSON.stringify(saveData));
}

function loadGame() {
    const saved = localStorage.getItem('cosmicStaircaseSave');

    setTimeout(() => {
        if (checkDailyCalendarStatus()) {
            renderCalendarUI();
            const calModal = document.getElementById('calendar-modal');
            if (calModal) calModal.classList.remove('hidden');
        }
    }, 800);

    if (!saved) return false;

   try {

        // 1. СНАЧАЛА ПАРСИМ СЕЙВ (исправлена критическая ошибка)
        const data = JSON.parse(saved);
        if (data.mimicSlots && Array.isArray(data.mimicSlots)) {
            mimicSlots = data.mimicSlots;
        }
        if (data.cyberExtraAccessory) cyberExtraAccessory = data.cyberExtraAccessory;

        if (data.settingsState) {
            Object.assign(settingsState, data.settingsState);
            applySettingsUI();
        }
        if (data.radarState) radarState = data.radarState;
        if (data.calendarState) calendarState = data.calendarState;

        if (data.adState) Object.assign(adState, data.adState);
        if (data.blackHoleBonus !== undefined) blackHoleBonus = data.blackHoleBonus;

        if (adState.autotapTimer > 0) {
            startAutoTapInterval();
        }

        isVip = data.isVip || false;
        hasAdFree = data.hasAdFree || false;
        if (data.starterPack) starterPack = data.starterPack;

        currentHeight = data.currentHeight || 0;
        maxAltitudeReached = data.maxAltitudeReached || data.currentHeight || 0;
        unlockedTrackerCheckpoints = data.unlockedTrackerCheckpoints || [0];

        displayedHeight = currentHeight;
        lastRenderedHeight = Math.floor(currentHeight);
        visualHouseHeight = currentHeight;

        nuts = data.nuts || 0;
        goldenNuts = data.goldenNuts || 0;
        boxesOwned = data.boxesOwned || 0;
        retroChallengeMs = data.retroChallengeMs || 0;

        claimedMilestones = data.claimedMilestones || [];
        dailyDeal = data.dailyDeal || dailyDeal;

        activePlayBoxTimer = data.activePlayBoxTimer || 0;
        isTimedBoxReady = data.isTimedBoxReady || false;

        pityStage = data.pityStage || 0;
        clicksNeeded = data.clicksNeeded || getClicksNeeded(pityStage);
        clicksForBox = data.clicksForBox || 0;

        clickLevel = data.clickLevel || 0;
        speakerLevel = data.speakerLevel || 0;
        newtonLevel = data.newtonLevel || 0;

        if (data.userCases) Object.assign(userCases, data.userCases);
        if (data.ownedSkins) ownedSkins = data.ownedSkins;
        if (data.ownedSpeakerSkins) ownedSpeakerSkins = data.ownedSpeakerSkins;
        if (data.ownedNewtonSkins) ownedNewtonSkins = data.ownedNewtonSkins;
        if (data.ownedTalismans) ownedTalismans = data.ownedTalismans;

        // 2. ВОССТАНАВЛИВАЕМ ОБЛИК И ЭФФЕКТ
        currentSkinId = data.currentSkinId || 'wood';
        currentEffectId = data.currentEffectId || data.currentSkinId || 'wood';
        currentSpeakerSkin = data.currentSpeakerSkin || 'old';
        currentNewtonSkin = data.currentNewtonSkin || 'steel';
        currentTalisman = data.currentTalisman || null;

        baseClickPower = UPGRADES_CONFIG.click.basePower + (clickLevel * UPGRADES_CONFIG.click.powerPerLevel);
        speakerMPS = UPGRADES_CONFIG.speaker.basePower + (speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel);
        newtonPower = UPGRADES_CONFIG.newton.basePower + (newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel);
        newtonSpeed = Math.max(500, 3000 - (newtonLevel * 130));

        // Надеваем облик и обвесы
        equipItem('ladders', currentSkinId, true);
        equipItem('speakers', currentSpeakerSkin, true);
        equipItem('newton', currentNewtonSkin, true);
        if (data.currentTalisman) {
            equipItem('talismans', data.currentTalisman, true);
        }

        // Применяем пассивный эффект
        equipLadderEffect(currentEffectId, true);

        // Обновляем UI
        if (heightDisplay) heightDisplay.textContent = `${Math.floor(currentHeight).toLocaleString('ru-RU')} м`;
        uiNuts.innerText = `${nuts}`;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        if (uiLvlSpeaker) uiLvlSpeaker.innerText = speakerLevel;
        if (lvlSpeakerDisplay) lvlSpeakerDisplay.innerText = speakerLevel;
        if (uiLvlNewton) uiLvlNewton.innerText = newtonLevel;
        if (lvlNewtonDisplay) lvlNewtonDisplay.innerText = newtonLevel;

        if (uiBoxText) uiBoxText.innerText = `Ящик: ${clicksForBox}/${clicksNeeded}`;
        if (uiBoxProgress) uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / clicksNeeded) * 100)}%`;

        const streakBtnText = document.getElementById('ad-streak-btn-text');
        if (streakBtnText) streakBtnText.innerText = `${adState.streakCount}/10`;

        // Расчет оффлайна
        const now = Date.now();
        const lastTime = data.lastSaveTime || now;
        const offlineMs = Math.max(0, now - lastTime);

        if (offlineMs > 60000) {
            const activeSavedEff = data.currentEffectId || data.currentSkinId;
            const isCosmo = (activeSavedEff === 'cosmo' || activeSavedEff === 'absolute');
            const maxOfflineMs = isCosmo ? 3 * 3600000 : 30 * 60000;
            const effectiveMs = Math.min(offlineMs, maxOfflineMs);
            const seconds = effectiveMs / 1000;

            const skin = LADDER_SKINS[data.currentEffectId || data.currentSkinId] || { buffs: {} };

            let realMPS = 0;
            if (data.speakerLevel > 0) {
                realMPS = Math.floor(((UPGRADES_CONFIG.speaker.basePower + (data.speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel)) + (skin.buffs.speakerAdd || 0)) * (SPEAKER_SKINS[data.currentSpeakerSkin]?.buff?.mpsMult || 1.0));
                if (hasMech('vine')) realMPS = Math.round(realMPS * 1.4);
            }
            const offSpeakerMeters = Math.floor(realMPS * seconds);

            let offNewtonMeters = 0;
            if (data.newtonLevel > 0) {
                let actualNSpeed = Math.max(500, 3000 - (data.newtonLevel * 130));
                if (hasMech('plastic')) actualNSpeed = Math.max(200, actualNSpeed - 150);
                if (hasMech('cement')) actualNSpeed += 300;

                let realHit = Math.floor(((UPGRADES_CONFIG.newton.basePower + (data.newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel)) + (skin.buffs.newtonAdd || 0)) * (NEWTON_SKINS[data.currentNewtonSkin]?.buff?.powerMult || 1.0) * (skin.buffs.newtonMult || 1.0));
                if (hasMech('vine')) realHit = Math.round(realHit * 1.4);

                const hits = Math.floor(effectiveMs / actualNSpeed) * 2;
                offNewtonMeters = hits * realHit;
            }

            let offCases = Math.floor(effectiveMs / 600000);
            offCases = Math.min(offCases, isCosmo ? 8 : 3);
            const totalOffMeters = offSpeakerMeters + offNewtonMeters;

            if (totalOffMeters > 0 || offCases > 0) {
                setTimeout(() => {
                    const offModal = document.getElementById('offline-modal');
                    const offMin = Math.floor(effectiveMs / 60000);
                    const offSec = Math.floor((effectiveMs % 60000) / 1000);
                    document.getElementById('off-time-txt').innerText = `${offMin}м ${offSec}с`;
                    document.getElementById('off-limit-txt').innerText = isCosmo ? '3 часа' : '30 мин';

                    document.getElementById('off-speaker-txt').innerText = `+${offSpeakerMeters} м`;
                    document.getElementById('off-newton-txt').innerText = `+${offNewtonMeters} м`;
                    document.getElementById('off-cases-txt').innerText = `${offCases} шт.`;
                    document.getElementById('off-total-txt').innerText = `+${totalOffMeters} м`;

                    const btnClaim2x = document.getElementById('btn-claim-offline-x2');
                    btnClaim2x.innerHTML = `▶ Удвоить за рекламу (+${(totalOffMeters * 2).toLocaleString('ru-RU')} м, ${offCases * 2} <img src="assets/wooden_box.webp" class="ui-ico-sm">)`;

                    offModal.classList.remove('hidden');

                    document.getElementById('btn-claim-offline-normal').onclick = () => {
                        currentHeight += totalOffMeters;
                        boxesOwned += offCases;
                        userCases.wooden = boxesOwned;
                        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                        offModal.classList.add('hidden');
                        saveGame();
                    };

                    btnClaim2x.onclick = () => {
                        watchRewardedAd('offline_x2', () => {
                            currentHeight += (totalOffMeters * 2);
                            boxesOwned += (offCases * 2);
                            userCases.wooden = boxesOwned;
                            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                            offModal.classList.add('hidden');
                            saveGame();
                        });
                    };
                }, 500);
            }
        }

        checkAbsoluteUnlock();
    updateFieldIcons();
    return true;
    } catch (e) {
        console.error("Ошибка при загрузке сохранения:", e);
        return false;
    }
}

// Возвращает активные баффы (для Мимика и Абсолюта объединяет статы)
function getActiveLadderBuffs() {
    const effId = currentEffectId || currentSkinId;

    // 1. АБСОЛЮТ — полный сводный набор числовых характеристик
    if (effId === 'absolute') {
        return {
            click: 7,              // +7 к клику (Огненная)
            clickAdd: 20,          // +20 к клику (Грозовой фронт)
            luck: 22,              // +22 к Удаче (Пивная 5 + Книжная 7 + Календарь 10)
            caseLimitMinus: 60,    // -60 кликов до ящика (Огненная 10 + Квантовая 50)
            discount: 0.20,        // 20% скидка на магазин за метры и кейсы (Готика)
            speakerAdd: 20,        // +20 к колонке (Кактус)
            newtonAdd: 25,         // +25 к шарам (Пожарная 15 + Кактус 10)
            newtonMult: 1.5        // +50% урона шаров Ньютона (Цементная)
        };
    }

    // 2. МИМИК — объединяет статы 2-х выбранных слотов
    if (effId === 'mimic') {
        const s1 = LADDER_SKINS[mimicSlots[0]]?.buffs || {};
        const s2 = LADDER_SKINS[mimicSlots[1]]?.buffs || {};
        return {
            click: (s1.click || 0) + (s2.click || 0),
            clickAdd: (s1.clickAdd || 0) + (s2.clickAdd || 0),
            luck: (s1.luck || 0) + (s2.luck || 0),
            discount: Math.max(s1.discount || 0, s2.discount || 0),
            caseLimitMinus: (s1.caseLimitMinus || 0) + (s2.caseLimitMinus || 0),
            speakerAdd: (s1.speakerAdd || 0) + (s2.speakerAdd || 0),
            newtonAdd: (s1.newtonAdd || 0) + (s2.newtonAdd || 0),
            newtonMult: (s1.newtonMult || 1.0) * (s2.newtonMult || 1.0)
        };
    }

    return LADDER_SKINS[effId]?.buffs || {};
}

// === КОНФИГУРАЦИЯ И ЛОГИКА РЕКЛАМНОГО СТРИКА (1-10) ===
const AD_STREAK_REWARDS = [
    { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Гаек', type: 'nuts', amount: 300 },
    { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15 мин)', type: 'buff_luck', durationMin: 15, luckAmount: 20 },
    { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">', type: 'gold', amount: 5 },
    { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Гаек', type: 'nuts', amount: 600 },
    { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Сейф', type: 'case', caseId: 'iron', amount: 1 },
    { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Турбо x3 (3 мин)', type: 'buff_turbo', durationSec: 180 },
    { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">', type: 'gold', amount: 15 },
    { step: 8, title: '+1 000 <img src="assets/nut.webp" class="ui-ico"> Гаек', type: 'nuts', amount: 1000 },
    { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">', type: 'gold', amount: 25 },
    { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Скин «Билборд»', type: 'skin', skinId: 'add_stair' }
];

// Забор награды за шаг
function claimStreakReward(step) {
    if (adState.streakCount < step) return;
    if (adState.claimedStreakRewards.includes(step)) return;

    const r = AD_STREAK_REWARDS[step - 1];
    if (!r) return;

    adState.claimedStreakRewards.push(step);

    if (r.type === 'nuts') {
        addNuts(r.amount);
    } else if (r.type === 'gold') {
        goldenNuts += r.amount;
    } else if (r.type === 'case') {
        userCases[r.caseId] = (userCases[r.caseId] || 0) + r.amount;
        if (typeof renderCasesShop === 'function') renderCasesShop();
    } else if (r.type === 'buff_luck') {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        adState.fortuneTimer = Math.min(45 * 60000, adState.fortuneTimer + (r.durationMin * 60000 * mult));
    } else if (r.type === 'buff_turbo') {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        adState.turboTimer += (r.durationSec * 1000 * mult);
    } else if (r.type === 'skin') {
        if (ownedSkins.includes(r.skinId)) {
            goldenNuts += (DUPLICATE_GOLD_REWARDS.epic || 35);
            particles.push({ x: canvas.width / 2, y: canvas.height * 0.4, text: `Повторка: +${DUPLICATE_GOLD_REWARDS.epic || 35} 🟡`, color: '#f1c40f', alpha: 2, speed: 1.5 });
        } else {
            ownedSkins.push(r.skinId);
            checkAbsoluteUnlock();
            particles.push({ x: canvas.width / 2, y: canvas.height * 0.4, text: '🎉 ПОЛУЧЕН СКИН БИЛБОРД!', color: '#00d2d3', alpha: 2.5, speed: 1.5 });
            if (typeof renderInventory === 'function') renderInventory();
        }
    }

    AudioEngine.play('pickupCoin5', 1.0);
    saveGame();
    renderAdStreakUI();
}

// Отрисовка списка наград
function renderAdStreakUI() {
    const listEl = document.getElementById('ad-streak-list');
    const barEl = document.getElementById('ad-streak-bar');
    const countBtnText = document.getElementById('ad-streak-btn-text');
    if (!listEl) return;

    if (countBtnText) countBtnText.innerText = `${adState.streakCount}/10`;
    if (barEl) barEl.style.width = `${(adState.streakCount / 10) * 100}%`;

    listEl.innerHTML = '';

    AD_STREAK_REWARDS.forEach(r => {
        const isClaimed = adState.claimedStreakRewards.includes(r.step);
        const isUnlocked = adState.streakCount >= r.step;

        const row = document.createElement('div');
        row.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            background: ${isClaimed ? 'rgba(44, 62, 80, 0.4)' : (isUnlocked ? 'rgba(155, 89, 182, 0.25)' : 'rgba(0,0,0,0.35)')};
            border: 1px solid ${isUnlocked && !isClaimed ? '#9b59b6' : '#34495e'};
            padding: 8px 10px; border-radius: 8px; font-size: 13px;
        `;

        let btnHtml = '';
        if (isClaimed) {
            btnHtml = `<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Взято</span>`;
        } else if (isUnlocked) {
            btnHtml = `<button class="claim-streak-btn" data-step="${r.step}" style="background: #2ecc71; color: #fff; border: none; padding: 5px 10px; border-radius: 6px; font-weight: bold; font-size: 11px; cursor: pointer;">Забрать</button>`;
        } else {
            btnHtml = `<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> ${r.step} ролик</span>`;
        }

        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 14px; font-weight: bold; color: ${isUnlocked ? '#f1c40f' : '#7f8c8d'}; width: 22px;">#${r.step}</span>
                <span style="color: ${isClaimed ? '#7f8c8d' : '#fff'};">${r.title}</span>
            </div>
            <div>${btnHtml}</div>
        `;

        const btn = row.querySelector('.claim-streak-btn');
        if (btn) {
            btn.onclick = () => claimStreakReward(r.step);
        }

        listEl.appendChild(row);
    });
}

// Модальное окно стрика (открытие/закрытие)
const adStreakModal = document.getElementById('ad-streak-modal');
const btnOpenStreak = document.getElementById('btn-open-streak');
const btnCloseStreak = document.getElementById('btn-close-streak');

if (btnOpenStreak && adStreakModal) {
    btnOpenStreak.onclick = () => {
        adStreakModal.classList.remove('hidden');
        checkAdStreakDailyReset();
        renderAdStreakUI();
    };
}

if (btnCloseStreak && adStreakModal) {
    btnCloseStreak.onclick = () => {
        adStreakModal.classList.add('hidden');
    };
}

// Таймер до полуночи 00:00 для окна стрика
setInterval(() => {
    if (casesModal && !casesModal.classList.contains('hidden')) {
        updateAdFreeRewardsUI();
    }
    if (!adStreakModal || adStreakModal.classList.contains('hidden')) return;

    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeLeft = Math.max(0, midnight - now);

    const h = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
    const m = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');
    if (timerEl) timerEl.innerText = `${h}:${m}:${s}`;
}, 1000);

function refreshDailyDeal(isAdReroll = false) {
    const now = new Date();
    const todayId = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    // Если наступил новый день (00:00) — сбрасываем попытки рекламы на 5
    if (dailyDeal.currentDayId !== todayId) {
        dailyDeal.currentDayId = todayId;
        dailyDeal.adRerollsLeft = 5;
    } else if (!isAdReroll && dailyDeal.id) {
        // Если день тот же и это не реролл за рекламу — товар не меняем
        return;
    }

    // Если это реролл за рекламу — списываем 1 попытку
    if (isAdReroll) {
        if (dailyDeal.adRerollsLeft <= 0) return;
        dailyDeal.adRerollsLeft--;
    }

    const roll = Math.random() * 100;

    // 10% — Легендарная лестница
    if (roll < 10) {
        const legSkins = Object.keys(LADDER_SKINS).filter(k => LADDER_SKINS[k].rarity === 'legendary');
        const chosen = legSkins[Math.floor(Math.random() * legSkins.length)];
        dailyDeal = { ...dailyDeal, type: 'skin', id: chosen, basePrice: 450, salePrice: 219 };
    }
    // 15% — Талисман со скидкой 30%
    else if (roll < 25) {
        const allTalismans = Object.keys(TALISMANS);
        const chosen = allTalismans[Math.floor(Math.random() * allTalismans.length)];
        const base = TALISMANS[chosen].price;
        dailyDeal = { ...dailyDeal, type: 'talisman', id: chosen, basePrice: base, salePrice: Math.floor(base * 0.7) };
    }
    // 75% — Эпическая лестница
    else {
        const epicSkins = Object.keys(LADDER_SKINS).filter(k => LADDER_SKINS[k].rarity === 'epic' && k !== 'calendar_stair' && k !== 'add_stair');
        const chosen = epicSkins[Math.floor(Math.random() * epicSkins.length)];
        dailyDeal = { ...dailyDeal, type: 'skin', id: chosen, basePrice: 220, salePrice: 119 };
    }

    saveGame();
}

// Таймеры бесплатных наград
function updateAdFreeRewardsUI() {
    const now = Date.now();
    const safeTimerEl = document.getElementById('ad-safe-timer');
    const safeBtn = document.getElementById('btn-ad-free-safe');
    if (safeTimerEl && safeBtn) {
        const leftSafe = Math.max(0, adState.freeIronSafeTime - now);
        if (leftSafe > 0) {
            safeTimerEl.innerText = `${Math.floor(leftSafe / 60000)}:${String(Math.floor((leftSafe % 60000) / 1000)).padStart(2, '0')}`;
            safeBtn.style.opacity = '0.5'; safeBtn.disabled = true;
        } else {
            safeTimerEl.innerText = '📺 Забрать';
            safeBtn.style.opacity = '1'; safeBtn.disabled = false;
        }
    }

    const nutsTimerEl = document.getElementById('ad-nuts-timer');
    const nutsBtn = document.getElementById('btn-ad-free-nuts');
    if (nutsTimerEl && nutsBtn) {
        const leftNuts = Math.max(0, adState.freeNutsTime - now);
        if (leftNuts > 0) {
            nutsTimerEl.innerText = `${Math.floor(leftNuts / 60000)}:${String(Math.floor((leftNuts % 60000) / 1000)).padStart(2, '0')}`;
            nutsBtn.style.opacity = '0.5'; nutsBtn.disabled = true;
        } else {
            nutsTimerEl.innerText = '📺 Забрать';
            nutsBtn.style.opacity = '1'; nutsBtn.disabled = false;
        }
    }
}

const btnAdFreeSafe = document.getElementById('btn-ad-free-safe');
if (btnAdFreeSafe) {
    btnAdFreeSafe.onclick = () => {
        if (Date.now() < adState.freeIronSafeTime) return;
        watchRewardedAd('free_iron_safe', () => {
            adState.freeIronSafeTime = Date.now() + 10 * 60 * 1000;
            userCases.iron = (userCases.iron || 0) + 1;
            renderCasesShop(); updateAdFreeRewardsUI();
        });
    };
}

const btnAdFreeNuts = document.getElementById('btn-ad-free-nuts');
if (btnAdFreeNuts) {
    btnAdFreeNuts.onclick = () => {
        if (Date.now() < adState.freeNutsTime) return;
        watchRewardedAd('free_nuts', () => {
            adState.freeNutsTime = Date.now() + 5 * 60 * 1000;
            addNuts(Math.floor(250 + Math.random() * 101));
            renderCasesShop(); updateAdFreeRewardsUI();
        });
    };
}

function renderDailyDealUI() {
    const container = document.getElementById('daily-deal-content');
    const timerEl = document.getElementById('daily-deal-timer');
    const rerollBtn = document.getElementById('btn-deal-reroll');
    if (!container || !dailyDeal.id) return;

    // 1. Таймер (без дублирования "Смена через")
    const timeLeft = Math.max(0, (24 * 60 * 60 * 1000) - (Date.now() - dailyDeal.lastRefresh));
    const h = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
    const m = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');
    if (timerEl) timerEl.innerText = `${h}:${m}:${s}`;

    // 2. Данные предмета
    let itemData = null;
    let isOwned = false;

    if (dailyDeal.type === 'skin') {
        itemData = LADDER_SKINS[dailyDeal.id];
        isOwned = ownedSkins.includes(dailyDeal.id);
    } else {
        itemData = TALISMANS[dailyDeal.id];
        isOwned = ownedTalismans.includes(dailyDeal.id);
    }

    if (!itemData) return;

    const rarityColor = RARITY_COLORS[itemData.rarity] || '#f1c40f';
    const buffDesc = (dailyDeal.type === 'skin')
        ? (LADDER_DESC[dailyDeal.id] || 'Уникальная лестница')
        : `+${itemData.luck} к общей удаче`;

    // 3. Состояние кнопки
    const canAfford = goldenNuts >= dailyDeal.salePrice;
    let buttonHtml = '';

    if (isOwned) {
        buttonHtml = `
            <button disabled style="width: 100%; background: #27ae60; color: #fff; border: none; padding: 10px; border-radius: 8px; font-weight: bold; font-size: 14px; opacity: 0.9;">
                ✔ В КОЛЛЕКЦИИ
            </button>`;
    } else if (canAfford) {
        buttonHtml = `
            <button id="btn-buy-deal" style="width: 100%; background: #f1c40f; color: #111; border: none; padding: 10px; border-radius: 8px; font-weight: bold; font-size: 14px; cursor: pointer; box-shadow: 0 3px 10px rgba(241,196,15,0.3);">
                Купить: <s style="color: #666; font-size: 12px; margin-right: 4px;">${dailyDeal.basePrice}</s> ${dailyDeal.salePrice} 🟡
            </button>`;
    } else {
        const needGold = dailyDeal.salePrice - goldenNuts;
        buttonHtml = `
            <button id="btn-buy-deal" style="width: 100%; background: #e67e22; color: #fff; border: none; padding: 10px; border-radius: 8px; font-size: 13px; font-weight: bold; cursor: pointer;">
                Не хватает ${needGold} 🟡 → Получить
            </button>`;
    }

    // 4. Вертикальная сочная карточка
    container.innerHTML = `
        <div style="width: 130px; height: 130px; background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.5) 100%); border: 2px solid ${rarityColor}; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px ${rarityColor}40;">
            <img src="${itemData.file || 'assets/wood_stair-removebg-preview.png'}" style="max-width: 90px; max-height: 105px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.6));" onerror="this.style.display='none'">
        </div>
        
        <div style="text-align: center; margin-top: 4px;">
            <div style="font-size: 17px; font-weight: bold; color: ${rarityColor}; margin-bottom: 2px;">${itemData.name}</div>
            <div style="font-size: 11px; color: ${rarityColor}; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px; opacity: 0.85;">${itemData.rarity || 'epic'}</div>
            <div style="font-size: 12px; color: #bdc3c7; margin-top: 6px; line-height: 1.3; max-width: 230px;">${buffDesc}</div>
        </div>

        <div style="width: 100%; margin-top: 6px;">
            ${buttonHtml}
        </div>
    `;

    // Обработка кнопки покупки
    const buyBtn = document.getElementById('btn-buy-deal');
    if (buyBtn && !isOwned) {
        buyBtn.onclick = () => {
            if (goldenNuts >= dailyDeal.salePrice) {
                showConfirmPurchase('Сделка дня', `Купить "${itemData.name}" за ${dailyDeal.salePrice} 🟡?`, dailyDeal.salePrice, () => {
                    goldenNuts -= dailyDeal.salePrice;
                    if (dailyDeal.type === 'skin') {
                        ownedSkins.push(dailyDeal.id);
                        if (itemData.rarity === 'legendary') dailyDeal.lastLegendaryBuy = Date.now();
                    } else {
                        ownedTalismans.push(dailyDeal.id);
                    }

                    AudioEngine.play('gaiki', 0.8);
                    saveGame();
                    renderDailyDealUI();
                    if (typeof renderInventory === 'function') renderInventory();
                });
            } else {
                alert(`Вам не хватает ${dailyDeal.salePrice - goldenNuts} 🟡. Здесь откроется просмотр рекламы/магазин.`);
            }
        };
    }

    
    // 5. Кнопка реролла за рекламу
    if (rerollBtn) {
        const attempts = dailyDeal.adRerollsLeft !== undefined ? dailyDeal.adRerollsLeft : 5;

        if (attempts > 0) {
            rerollBtn.innerHTML = `<img src="assets/ico_ad_tv.webp" class="ui-ico"> Обновить (${attempts}/5)`;
            rerollBtn.disabled = false;
            rerollBtn.style.opacity = '1';
            rerollBtn.style.cursor = 'pointer';
            rerollBtn.onclick = () => {
                watchRewardedAd('daily_deal_reroll', () => {
                    refreshDailyDeal(true);
                    renderDailyDealUI();
                });
            };
        } else {
            rerollBtn.innerHTML = `Попытки исчерпаны (0/5)`;
            rerollBtn.disabled = true;
            rerollBtn.style.opacity = '0.45';
            rerollBtn.style.cursor = 'default';
            rerollBtn.onclick = null;
        }
    }
}


// === ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ (7 ДНЕЙ) ===
const CALENDAR_REWARDS = [
    { day: 1, text: '+300 <img src="assets/nut.webp" class="ui-ico-sm">', icon: '<img src="assets/nut.webp" class="ui-ico-lg">', type: 'nuts', amount: 300 },
    { day: 2, text: '2 <img src="assets/wooden_box.webp" class="ui-ico-sm">', icon: '<img src="assets/wooden_box.webp" class="ui-ico-lg">', type: 'case', caseId: 'wooden', amount: 2 },
    { day: 3, text: '+10 <img src="assets/golden_nut.webp" class="ui-ico-sm">', icon: '<img src="assets/golden_nut.webp" class="ui-ico-lg">', type: 'gold', amount: 10 },
    { day: 4, text: '+800 <img src="assets/nut.webp" class="ui-ico-sm">', icon: '<img src="assets/nut.webp" class="ui-ico-lg">', type: 'nuts', amount: 800 },
    { day: 5, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">', icon: '<img src="assets/iron_box.webp" class="ui-ico-lg">', type: 'case', caseId: 'iron', amount: 1 },
    { day: 6, text: '+25 <img src="assets/golden_nut.webp" class="ui-ico-sm">', icon: '<img src="assets/golden_nut.webp" class="ui-ico-lg">', type: 'gold', amount: 25 },
    { day: 7, text: 'Скин «Календарь»', icon: '<img src="assets/calendar_stair.webp" class="ui-ico-lg">', type: 'skin', skinId: 'calendar_stair' }
];

let calendarState = {
    currentDay: 1,          // День, который ждёт забора (1..7)
    lastClaimDate: null,    // 'YYYY-MM-DD'
    missedDay: false,       // Флаг пропуска дня
    cycle: 1                // 1 = первая неделя (скин), 2+ = бесконечный цикл (+75 золота и сейф)
};

// Проверка статуса при входе в игру
function checkDailyCalendarStatus() {
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    // Если уже забирали сегодня
    if (calendarState.lastClaimDate === todayStr) {
        return false;
    }

    // Если первый вход в истории
    if (!calendarState.lastClaimDate) {
        return true;
    }

    // Расчет разницы в днях
    const lastDate = new Date(calendarState.lastClaimDate.replace(/-/g, '/'));
    const currDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
        // Зашёл на следующий день — стрик сохранен
        calendarState.missedDay = false;
        return true;
    } else if (diffDays > 1) {
        // Пропустил день
        calendarState.missedDay = true;
        return true;
    }

    return false;
}

// Отрисовка календаря
// Отрисовка календаря (с поддержкой цикла 2+ недели)
function renderCalendarUI() {
    const grid = document.getElementById('calendar-grid');
    const day7Action = document.getElementById('calendar-day-7-action');
    const day7Box = document.getElementById('calendar-day-7');
    const missedAlert = document.getElementById('calendar-missed-alert');
    const actionsBox = document.getElementById('calendar-claim-actions');
    const btnClaimX2 = document.getElementById('btn-claim-calendar-x2');
    const btnClaimNormal = document.getElementById('btn-claim-calendar-normal');

    if (!grid) return;
    grid.innerHTML = '';

    const isLoopCycle = (calendarState.cycle || 1) > 1 || ownedSkins.includes('calendar_stair');

    // 1. Отображение плашки пропуска
    if (calendarState.missedDay && calendarState.currentDay > 1) {
        missedAlert.classList.remove('hidden');
        actionsBox.classList.add('hidden');
    } else {
        missedAlert.classList.add('hidden');
        actionsBox.classList.remove('hidden');
    }

    // 2. Сетка Дней 1 - 6
    for (let i = 0; i < 6; i++) {
        const rew = CALENDAR_REWARDS[i];
        const isPast = rew.day < calendarState.currentDay;
        const isCurrent = rew.day === calendarState.currentDay;

        const card = document.createElement('div');
        card.style.cssText = `
            background: ${isCurrent ? 'rgba(46, 204, 113, 0.2)' : (isPast ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.05)')};
            border: 1px solid ${isCurrent ? '#2ecc71' : (isPast ? '#7f8c8d' : '#34495e')};
            border-radius: 8px; padding: 8px 4px; text-align: center;
        `;
        card.innerHTML = `
            <div style="font-size: 10px; color: ${isCurrent ? '#2ecc71' : '#bdc3c7'}; font-weight: bold;">День ${rew.day}</div>
            <div style="font-size: 18px; margin: 4px 0;">${isPast ? '✔' : rew.icon}</div>
            <div style="font-size: 10px; color: ${isPast ? '#7f8c8d' : '#fff'}; font-weight: bold;">${rew.text}</div>
        `;
        grid.appendChild(card);
    }

    // 3. Динамическая карточка 7-го дня (Скин на 1-й неделе, Золото+Сейф на 2-й+)
if (day7Box) {
        const day7Title = isLoopCycle ? 'День 7: Супер-награда' : 'День 7: Супер-приз';
        const day7Desc = isLoopCycle ? '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm"> и 1 <img src="assets/iron_box.webp" class="ui-ico-sm">' : 'Скин «Календарь» (Epic)';
        const day7Icon = isLoopCycle ? '<img src="assets/iron_box.webp" class="ui-ico-lg">' : '<img src="assets/calendar_stair.webp" class="ui-ico-lg">';

        day7Box.querySelector('div').innerHTML = `
            <span style="font-size: 24px;">${day7Icon}</span>
            <div>
                <div style="font-size: 12px; font-weight: bold; color: #e74c3c;">${day7Title}</div>
                <div style="font-size: 10px; color: #fff;">${day7Desc}</div>
            </div>
        `;
    }

    // 4. Кнопки действий
    if (day7Action) {
        if (calendarState.currentDay === 7) {
            day7Action.innerHTML = `<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">СЕГОДНЯ!</span>`;

            if (isLoopCycle) {
                // Начиная со 2-й недели День 7 МОЖНО удваивать за рекламу!
                if (btnClaimX2) {
                    btnClaimX2.style.display = 'block';
                    btnClaimX2.innerText = '▶ Удвоить за рекламу (+150 🟡, 2 🧰)';
                }
                if (btnClaimNormal) btnClaimNormal.innerText = 'Забрать обычную (+75 🟡, 1 🧰)';
            } else {
                // На 1-й неделе скин выдается строго в 1 экземпляре
                if (btnClaimX2) btnClaimX2.style.display = 'none';
                if (btnClaimNormal) btnClaimNormal.innerText = 'Забрать скин «Календарь»!';
            }
        } else if (calendarState.currentDay > 7) {
            day7Action.innerHTML = `<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ ВЗЯТО</span>`;
        } else {
            day7Action.innerHTML = `<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> День 7</span>`;
            if (btnClaimX2) {
                btnClaimX2.style.display = 'block';
                btnClaimX2.innerText = '▶ Удвоить за рекламу (x2)';
            }
            if (btnClaimNormal) btnClaimNormal.innerText = 'Забрать обычную';
        }
    }
}

// Забор награды
// Забор награды дня (с поддержкой бесконечного цикла)
function claimCalendarDay(isDouble = false) {
    const isLoopCycle = (calendarState.cycle || 1) > 1 || ownedSkins.includes('calendar_stair');
    const day = calendarState.currentDay;
    const mult = (isDouble && (day < 7 || isLoopCycle)) ? 2 : 1;

    // Выдача наград Дней 1 - 6
    if (day < 7) {
        const dayData = CALENDAR_REWARDS[day - 1];
        if (!dayData) return;

        if (dayData.type === 'nuts') {
            addNuts(dayData.amount * mult);
        } else if (dayData.type === 'gold') {
            goldenNuts += (dayData.amount * mult);
        } else if (dayData.type === 'case') {
            userCases[dayData.caseId] = (userCases[dayData.caseId] || 0) + (dayData.amount * mult);
            if (dayData.caseId === 'wooden') {
                boxesOwned = userCases.wooden;
                if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
            }
            if (typeof renderCasesShop === 'function') renderCasesShop();
        }

        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.4,
            img: canvasIcoClover, // Или canvasIcoWoodenBox
            imgSize: 26,
            text: `День ${day} получен!`,
            color: '#f1c40f',
            font: 'bold 24px sans-serif',
            alpha: 2.2,
            speed: 1.8
        });
    }
    // Выдача награды Дня 7
    else {
        if (!isLoopCycle) {
            // Неделя 1: Выдаем эксклюзивную лестницу
            if (!ownedSkins.includes('calendar_stair')) {
                ownedSkins.push('calendar_stair');
                checkAbsoluteUnlock();
                if (typeof renderInventory === 'function') renderInventory();
            }
            particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.4,
            img: canvasIcoCrown,
            imgSize: 30,
            text: 'ПОЛУЧЕН СКИН КАЛЕНДАРЬ!',
            color: '#e74c3c',
            font: 'bold 22px sans-serif',
            alpha: 2.5,
            speed: 1.8
        });
        } else {
            // Неделя 2 и далее: +75 🟡 и 1 🧰 сейф (или 150 🟡 и 2 🧰 с x2)
            goldenNuts += (75 * mult);
            userCases.iron = (userCases.iron || 0) + (1 * mult);
            if (typeof renderCasesShop === 'function') renderCasesShop();

            particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.4,
            img: canvasIcoGold,
            imgSize: 26,
            text: `+${75 * mult} и +${1 * mult} сейф!`,
            color: '#f1c40f',
            font: 'bold 24px sans-serif',
            alpha: 2.5,
            speed: 1.8
        });
        }
    }

    // Если реклама уже сыграла «тыдынь», не дублируем. Если обычный забор — играем «тыдынь»
    if (!isDouble) {
        AudioEngine.play('win', 0.8);
    }

    // Запоминаем дату забора
    const now = new Date();
    calendarState.lastClaimDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    // Переход на следующий день или перезапуск цикла на 2-ю неделю
    if (calendarState.currentDay >= 7) {
        calendarState.currentDay = 1;
        calendarState.cycle = (calendarState.cycle || 1) + 1; // Запуск следующей недели
    } else {
        calendarState.currentDay++;
    }

    saveGame();
    const modal = document.getElementById('calendar-modal');
    if (modal) modal.classList.add('hidden');
}

// Кнопки забора и модалки
const calendarModal = document.getElementById('calendar-modal');
const btnCloseCalendar = document.getElementById('btn-close-calendar');
const btnClaimCalendarX2 = document.getElementById('btn-claim-calendar-x2');
const btnClaimCalendarNormal = document.getElementById('btn-claim-calendar-normal');
const btnRestoreStreak = document.getElementById('btn-restore-streak');
const btnResetStreak = document.getElementById('btn-reset-streak');

const btnClaimRetro = document.getElementById('btn-claim-retro');
if (btnClaimRetro) {
    btnClaimRetro.onclick = () => {
        const modal = document.getElementById('retro-modal');
        if (modal) modal.classList.add('hidden');
        equipItem('ladders', 'retro'); // Сразу надеваем скин
        checkAbsoluteUnlock();
        saveGame();
    };
}

if (btnCloseCalendar && calendarModal) btnCloseCalendar.onclick = () => calendarModal.classList.add('hidden');

if (btnClaimCalendarNormal) {
    btnClaimCalendarNormal.onclick = () => claimCalendarDay(false);
}

if (btnClaimCalendarX2) {
    btnClaimCalendarX2.onclick = () => {
        watchRewardedAd('calendar_x2', () => claimCalendarDay(true));
    };
}

// Восстановление стрика за рекламу
if (btnRestoreStreak) {
    btnRestoreStreak.onclick = () => {
        watchRewardedAd('restore_calendar_streak', () => {
            calendarState.missedDay = false;
            saveGame();
            renderCalendarUI();
        });
    };
}

// Сброс стрика на День 1
if (btnResetStreak) {
    btnResetStreak.onclick = () => {
        calendarState.currentDay = 1;
        calendarState.missedDay = false;
        saveGame();
        renderCalendarUI();
    };
}



function activateFrenzyMode(seconds = 30) {
    watchRewardedAd('frenzy_nuts', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        adState.frenzyTimer = seconds * 1000 * mult;

        AudioEngine.play('whoosh_air', 0.8);
        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.35,
            img: canvasIcoNutRain,
            imgSize: 32,
            text: 'ГАЙКОПАД!',
            color: '#f1c40f',
            font: 'bold 26px sans-serif',
            alpha: 2.5,
            speed: 1.5
        });
    });
}

// Привязка квадратных кнопок экрана
const btnBoostFortune = document.getElementById('btn-boost-fortune');
const btnBoostTurbo = document.getElementById('btn-boost-turbo');
const btnBoostFrenzy = document.getElementById('btn-boost-frenzy');

if (btnBoostFortune) btnBoostFortune.onclick = () => activateFortuneBoost();
if (btnBoostTurbo) btnBoostTurbo.onclick = () => activateTurboBoost();
if (btnBoostFrenzy) btnBoostFrenzy.onclick = () => activateFrenzyMode(30);

// Живое обновление квадратных кнопок
function updateBoostsUI() {
    const formatTime = (ms) => {
        if (ms >= 60000) return `${Math.floor(ms / 60000)}:${String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')}`;
        return `${Math.ceil(ms / 1000)}с`;
    };

    const tTxt = document.getElementById('boost-turbo-text');
    const tBtn = document.getElementById('btn-boost-turbo');
    if (tTxt && tBtn) {
        if (adState.turboTimer > 0) {
            tTxt.innerText = formatTime(adState.turboTimer);
            tBtn.style.background = '#e67e22'; tBtn.style.color = '#fff'; tBtn.style.boxShadow = '0 0 12px rgba(230,126,34,0.6)';
        } else {
            tTxt.innerText = 'x3';
            tBtn.style.background = 'rgba(30, 39, 46, 0.95)'; tBtn.style.color = '#e67e22'; tBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
        }
    }

    const fTxt = document.getElementById('boost-fortune-text');
    const fBtn = document.getElementById('btn-boost-fortune');
    if (fTxt && fBtn) {
        if (adState.fortuneTimer > 0) {
            fTxt.innerText = formatTime(adState.fortuneTimer);
            fBtn.style.background = '#2ecc71'; fBtn.style.color = '#fff'; fBtn.style.boxShadow = '0 0 12px rgba(46,204,113,0.6)';
        } else {
            fTxt.innerText = 'Удача';
            fBtn.style.background = 'rgba(30, 39, 46, 0.95)'; fBtn.style.color = '#2ecc71'; fBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
        }
    }

    const zTxt = document.getElementById('boost-frenzy-text');
    const zBtn = document.getElementById('btn-boost-frenzy');
    if (zTxt && zBtn) {
        if (adState.frenzyTimer > 0) {
            zTxt.innerText = formatTime(adState.frenzyTimer);
            zBtn.style.background = '#f1c40f'; zBtn.style.color = '#111'; zBtn.style.boxShadow = '0 0 12px rgba(241,196,15,0.6)';
        } else {
            zTxt.innerText = 'Дождь';
            zBtn.style.background = 'rgba(30, 39, 46, 0.95)'; zBtn.style.color = '#f1c40f'; zBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
        }
    }
}

// Живой отсчет таймера каждую секунду при открытом окне
setInterval(() => {
    if (!dailyDealModal || dailyDealModal.classList.contains('hidden') || !dailyDeal.id) return;

    const timerEl = document.getElementById('daily-deal-timer');
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeLeft = Math.max(0, midnight - now);

    // Если наступила полночь прямо при открытом окне — генерируем новый товар
    if (timeLeft <= 0) {
        refreshDailyDeal(false);
        renderDailyDealUI();
        return;
    }

    const h = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
    const m = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');
    if (timerEl) timerEl.innerText = `${h}:${m}:${s}`;
}, 1000);

// Автосохранение каждые 5 секунд
setInterval(saveGame, 5000);

// Фоновый синк в лидерборд каждые 60 секунд (по троттлингу)
setInterval(() => submitScoreToLeaderboard(false), 60000);

// Сохранение при закрытии вкладки или сворачивании на телефоне
window.addEventListener('beforeunload', saveGame);
let lastVisibilityHiddenTime = 0;

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        lastVisibilityHiddenTime = Date.now();
        if (window.autoTapInterval) {
            clearInterval(window.autoTapInterval);
            window.autoTapInterval = null;
        }
        saveGame();
    } else if (document.visibilityState === 'visible') {
        // Если игрок был в Alt-Tab с надетой Чёрной дырой — доначисляем массу!
        if (hasMech('endless') && lastVisibilityHiddenTime > 0) {
            const awaySeconds = (Date.now() - lastVisibilityHiddenTime) / 1000;
            // +1000% (10.0) за 1200 секунд (20 минут)
            blackHoleBonus = Math.min(10.0, blackHoleBonus + (10.0 / 1200) * awaySeconds);
            lastVisibilityHiddenTime = 0;
        }

        if (adState.autotapTimer > 0 && !window.autoTapInterval) {
            startAutoTapInterval();
        }
    }
});

// === РАДАР БАЗЫ И DEEP LINKING ===
const radarModal = document.getElementById('radar-modal');
const btnEnableRadar = document.getElementById('btn-enable-radar');
const btnSkipRadar = document.getElementById('btn-skip-radar');

if (btnSkipRadar && radarModal) {
    btnSkipRadar.onclick = () => radarModal.classList.add('hidden');
}

if (btnEnableRadar && radarModal) {
    btnEnableRadar.onclick = () => {
        // Запрос системных пушей браузера (или SDK VK/Яндекс)
        if ('Notification' in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }

        radarState.enabled = true;
        goldenNuts += 25;
        AudioEngine.play('win', 0.85);
        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.4,
            text: '📡 РАДАР ВКЛЮЧЕН! +25 🟡',
            color: '#f1c40f',
            font: 'bold 22px sans-serif',
            alpha: 2.2,
            speed: 1.8
        });

        radarModal.classList.add('hidden');
        saveGame();
    };
}

/// === СИСТЕМА ЛИДЕРБОРДА, ТРОТТЛИНГА И СЕЗОНОВ ===
let lastSubmittedHeight = 0;
let lastLeaderboardSubmitTime = 0;
let currentLeaderboardTab = 'all'; // 'all' | 'week'
let cachedYandexLeaderboard = null; // Кэш реальных данных

// 1. Отправка счета в Яндекс Игры
function submitScoreToLeaderboard(force = false) {
    const now = Date.now();
    const intScore = Math.floor(currentHeight);

    if (intScore <= 0 || intScore > 500000000) return;
    if (intScore <= lastSubmittedHeight && !force) return;
    if (!force && (now - lastLeaderboardSubmitTime < 60000)) return;

    lastLeaderboardSubmitTime = now;
    lastSubmittedHeight = intScore;

    if (window.ysdk && window.ysdk.getLeaderboards) {
        window.ysdk.getLeaderboards().then(lb => {
            const table = currentLeaderboardTab === 'week' ? 'season_height' : 'all_time_height';
            // В extraData упаковываем VIP-статус
            const extraData = JSON.stringify({ isVip: !!isVip });
            lb.setLeaderboardScore(table, intScore, extraData);
        }).catch(err => {
            // Ошибка нормальна, если игрок не залогинен в Яндекс
            console.warn('[Leaderboard] Запись не удалась (возможно, гость):', err);
        });
    }
}

// Демо-игроки (фоллбэк для локального тестирования и гостей)
const MOCK_LEADERS = {
    all: [
        { rank: 1, name: 'CyberStair', score: 145000, isVip: true, avatar: null },
        { rank: 2, name: 'CosmoClimber', score: 98200, isVip: true, avatar: null },
        { rank: 3, name: 'ApexStriker', score: 64100, isVip: false, avatar: null },
        { rank: 4, name: 'SkyWalker', score: 32000, isVip: false, avatar: null },
        { rank: 5, name: 'StepMaster', score: 12500, isVip: false, avatar: null }
    ],
    week: [
        { rank: 1, name: 'SpeedyTap', score: 18400, isVip: true, avatar: null },
        { rank: 2, name: 'Newbie2026', score: 11200, isVip: false, avatar: null },
        { rank: 3, name: 'StarFall', score: 7800, isVip: false, avatar: null },
        { rank: 4, name: 'LadderHero', score: 4500, isVip: false, avatar: null },
        { rank: 5, name: 'Volt', score: 2100, isVip: false, avatar: null }
    ]
};

// 2. Универсальная загрузка и отрисовка ТОПа
async function renderLeaderboardUI() {
    const listEl = document.getElementById('leaderboard-list');
    const playerCardEl = document.getElementById('lb-player-card');
    const descEl = document.getElementById('lb-season-desc');
    if (!listEl) return;

    listEl.innerHTML = '<div style="text-align:center;color:#bdc3c7;padding:20px;">Загрузка рекордов...</div>';
    
    descEl.innerText = currentLeaderboardTab === 'all'
        ? 'Общий рейтинг покорителей космоса'
        : 'Сброс каждый понедельник в 00:00';

    const myScore = Math.floor(currentHeight);
    let entries = [];
    let myRank = null;

    // Пытаемся получить живых игроков из Яндекс Игр
    if (window.ysdk && window.ysdk.getLeaderboards) {
        try {
            const lb = await window.ysdk.getLeaderboards();
            const table = currentLeaderboardTab === 'week' ? 'season_height' : 'all_time_height';
            const res = await lb.getLeaderboardEntries(table, {
                quantityTop: 10,
                includeUser: true,
                quantityAround: 3
            });

            if (res && res.entries) {
                entries = res.entries.map(e => {
                    let extra = {};
                    try { extra = JSON.parse(e.extraData || '{}'); } catch (_) {}
                    return {
                        rank: e.rank,
                        name: e.player.publicName || 'Анонимный альпинист',
                        score: e.score,
                        isVip: extra.isVip || false,
                        avatar: e.player.getAvatarSrc ? e.player.getAvatarSrc('small') : null,
                        isPlayer: e.player.uniqueID === res.userRank?.player?.uniqueID
                    };
                });
                if (res.userRank) myRank = res.userRank;
            }
        } catch (e) {
            console.warn('[Leaderboard] Фоллбэк на демо-ботов:', e);
        }
    }

    // Фоллбэк: если запустились на ПК, оффлайн или в Яндексе пока пусто
    if (entries.length === 0) {
        const base = MOCK_LEADERS[currentLeaderboardTab] || [];
        entries = base.map(p => ({ ...p, isPlayer: false }));
        entries.push({
            name: 'Ты (Игрок)',
            score: myScore,
            isVip: isVip,
            avatar: null,
            isPlayer: true
        });
        entries.sort((a, b) => b.score - a.score);
        entries.forEach((entry, idx) => {
            entry.rank = idx + 1;
            if (entry.isPlayer) myRank = entry.rank;
        });
    }

    listEl.innerHTML = '';

    // Отрисовка списка
    entries.slice(0, 10).forEach(p => {
        const row = document.createElement('div');
        let borderStyle = 'border: 1px solid #34495e;';
        let bgStyle = 'background: rgba(30, 39, 46, 0.85);';

        if (p.isPlayer) {
            borderStyle = 'border: 2px solid #2ecc71;';
            bgStyle = 'background: rgba(46, 204, 113, 0.2);';
        } else if (p.isVip) {
            borderStyle = 'border: 1px solid #f1c40f; box-shadow: 0 0 6px rgba(241,196,15,0.3);';
        }

        row.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            padding: 8px 10px; border-radius: 8px; font-size: 12px; margin-bottom: 4px;
            ${bgStyle} ${borderStyle}
        `;

        const avatarHtml = p.avatar 
            ? `<img src="${p.avatar}" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;">`
            : '';

        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: bold; width: 24px; color: ${p.rank <= 3 ? '#f1c40f' : '#bdc3c7'};">#${p.rank}</span>
                ${avatarHtml}
                <span style="color: ${p.isPlayer ? '#2ecc71' : (p.isVip ? '#f1c40f' : '#fff')}; font-weight: bold;">
                    ${p.isVip ? '<img src="assets/crown.webp" class="ui-ico-sm" style="margin-right: 3px;"> ' : ''}${p.name}
                </span>
            </div>
            <b style="color: ${p.rank <= 3 ? '#f1c40f' : '#3498db'};">${p.score.toLocaleString('ru-RU')} м</b>
        `;
        listEl.appendChild(row);
    });

    // Нижняя плашка игрока
    if (playerCardEl) {
        playerCardEl.style.borderColor = isVip ? '#f1c40f' : '#2ecc71';
        playerCardEl.style.boxShadow = isVip ? '0 0 10px rgba(241,196,15,0.4)' : 'none';

        playerCardEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: bold; color: #f1c40f;">#${myRank || '—'}</span>
                <span style="color: ${isVip ? '#f1c40f' : '#fff'}; font-weight: bold;">
                    ${isVip ? '<img src="assets/crown.webp" class="ui-ico-sm" style="margin-right: 3px;"> ' : ''}Ты ${isVip ? '(VIP)' : ''}
                </span>
            </div>
            <b style="color: #f1c40f; font-size: 13px;">${myScore.toLocaleString('ru-RU')} м</b>
        `;
    }
}

// Привязка кнопок модалки и вкладок
const lbModal = document.getElementById('leaderboard-modal');
const btnOpenLb = document.getElementById('btn-open-leaderboard');
const btnCloseLb = document.getElementById('btn-close-leaderboard');
const lbTabAll = document.getElementById('lb-tab-all');
const lbTabWeek = document.getElementById('lb-tab-week');

if (btnOpenLb && lbModal) {
    btnOpenLb.onclick = () => {
        submitScoreToLeaderboard(true);
        renderLeaderboardUI();
        lbModal.classList.remove('hidden');
    };
}
if (btnCloseLb && lbModal) {
    btnCloseLb.onclick = () => lbModal.classList.add('hidden');
}

if (lbTabAll && lbTabWeek) {
    lbTabAll.onclick = () => {
        currentLeaderboardTab = 'all';
        lbTabAll.classList.add('active');
        lbTabWeek.classList.remove('active');
        renderLeaderboardUI();
    };
    lbTabWeek.onclick = () => {
        currentLeaderboardTab = 'week';
        lbTabWeek.classList.add('active');
        lbTabAll.classList.remove('active');
        renderLeaderboardUI();
    };
}

// === УПРАВЛЕНИЕ НАСТРОЙКАМИ ===
const settingsModal = document.getElementById('settings-modal');
const btnOpenSettings = document.getElementById('btn-open-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');

// DOM элементы ползунков
const sliderMusic = document.getElementById('slider-music');
const sliderTap = document.getElementById('slider-tap');
const sliderSpeaker = document.getElementById('slider-speaker');
const sliderNewton = document.getElementById('slider-newton');
const sliderSfx = document.getElementById('slider-sfx');
const toggleVibrate = document.getElementById('toggle-vibrate');

const valMusic = document.getElementById('val-music');
const valTap = document.getElementById('val-tap');
const valSpeaker = document.getElementById('val-speaker');
const valNewton = document.getElementById('val-newton');
const valSfx = document.getElementById('val-sfx');

function applySettingsUI() {
    if (sliderMusic) sliderMusic.value = settingsState.musicVol;
    if (sliderTap) sliderTap.value = settingsState.tapVol;
    if (sliderSpeaker) sliderSpeaker.value = settingsState.speakerVol;
    if (sliderNewton) sliderNewton.value = settingsState.newtonVol;
    if (sliderSfx) sliderSfx.value = settingsState.sfxVol;
    if (toggleVibrate) toggleVibrate.checked = settingsState.vibrate;

    if (valMusic) valMusic.innerText = `${Math.round(settingsState.musicVol * 100)}%`;
    if (valTap) valTap.innerText = `${Math.round(settingsState.tapVol * 100)}%`;
    if (valSpeaker) valSpeaker.innerText = `${Math.round(settingsState.speakerVol * 100)}%`;
    if (valNewton) valNewton.innerText = `${Math.round(settingsState.newtonVol * 100)}%`;
    if (valSfx) valSfx.innerText = `${Math.round(settingsState.sfxVol * 100)}%`;

    if (AudioEngine.bgm) AudioEngine.bgm.volume = settingsState.musicVol;
}

// Слушатели изменений
if (sliderSpeaker) {
    sliderSpeaker.oninput = (e) => {
        settingsState.speakerVol = parseFloat(e.target.value);
        applySettingsUI();
        saveGame();
    };
}

if (sliderNewton) {
    sliderNewton.oninput = (e) => {
        settingsState.newtonVol = parseFloat(e.target.value);
        applySettingsUI();
        saveGame();
    };
}

if (sliderMusic) {
    sliderMusic.oninput = (e) => {
        settingsState.musicVol = parseFloat(e.target.value);
        applySettingsUI();
        saveGame();
    };
}

if (sliderTap) {
    sliderTap.oninput = (e) => {
        settingsState.tapVol = parseFloat(e.target.value);
        applySettingsUI();
        saveGame();
    };
}

if (sliderSfx) {
    sliderSfx.oninput = (e) => {
        settingsState.sfxVol = parseFloat(e.target.value);
        applySettingsUI();
        saveGame();
    };
}

if (toggleVibrate) {
    toggleVibrate.onchange = (e) => {
        settingsState.vibrate = e.target.checked;
        if (settingsState.vibrate && navigator.vibrate) navigator.vibrate(25);
        saveGame();
    };
}

if (btnOpenSettings && settingsModal) {
    btnOpenSettings.onclick = () => {
        applySettingsUI();
        settingsModal.classList.remove('hidden');
    };
}

if (btnCloseSettings && settingsModal) {
    btnCloseSettings.onclick = () => settingsModal.classList.add('hidden');
}

// Гарантированный запуск обновления иконок при старте DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateFieldIcons);
} else {
    updateFieldIcons();
}

function triggerCaseGainedPopup() {
    const layer = document.getElementById('case-popups-layer');
    if (!layer) return;

    const popup = document.createElement('div');
    popup.className = 'case-floating-popup';
    popup.innerHTML = '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> КЕЙС!';
    layer.appendChild(popup);

    setTimeout(() => {
        if (popup.parentNode) popup.parentNode.removeChild(popup);
    }, 1400);
}

// ==========================================================
// === ФОРМАТИРОВАНИЕ ВАЛЮТЫ (ПОЛНЫЕ ЧИСЛА В МАГАЗИНАХ) =====
// ==========================================================
function formatFullCurrency(num) {
    return Math.floor(num || 0).toLocaleString('ru-RU');
}

// ==========================================================
// === ШТОРКА, УДАЧА И НАСТРОЙКИ ============================
// ==========================================================
const buffsDrawer = document.getElementById('buffs-drawer');
const btnToggleBuffs = document.getElementById('btn-toggle-buffs');
const btnCloseBuffs = document.getElementById('btn-close-buffs');

if (btnToggleBuffs && buffsDrawer) {
    btnToggleBuffs.onclick = (e) => {
        e.stopPropagation();
        buffsDrawer.style.transform = 'translateX(0%)';
        if (typeof AudioEngine !== 'undefined') AudioEngine.play('click', 0.5);
    };
}
if (btnCloseBuffs && buffsDrawer) {
    btnCloseBuffs.onclick = () => {
        buffsDrawer.style.transform = 'translateX(105%)';
    };
}

// Настройки
const btnSettingsEl = document.getElementById('btn-open-settings');
const modalSettingsEl = document.getElementById('settings-modal');
if (btnSettingsEl && modalSettingsEl) {
    btnSettingsEl.onclick = (e) => {
        e.stopPropagation();
        modalSettingsEl.classList.remove('hidden');
        if (typeof AudioEngine !== 'undefined') AudioEngine.play('click', 0.5);
    };
}

// Удача
const btnFieldLuck = document.getElementById('btn-field-luck');
const modalLuck = document.getElementById('luck-modal');
if (btnFieldLuck && modalLuck) {
    btnFieldLuck.onclick = (e) => {
        e.stopPropagation();
        modalLuck.classList.remove('hidden');
        if (typeof renderLuckModal === 'function') renderLuckModal();
        if (typeof AudioEngine !== 'undefined') AudioEngine.play('click', 0.5);
    };
}

// ==========================================================
// === АКТИВАЦИЯ БАФФОВ (В ЧЕСТНЫХ МИЛЛИСЕКУНДАХ) ===========
// ==========================================================
// ==========================================================
// === АКТИВАЦИЯ БАФФОВ (В ЧЕСТНЫХ МИЛЛИСЕКУНДАХ) ===========
// ==========================================================
function triggerTimeWarp() {
    const skin = LADDER_SKINS[currentSkinId] || LADDER_SKINS.wood;
    const isVine = hasMech('vine');
    const isStrato = hasMech('strato');
    const timeMult = isStrato ? 1.42 : 1.0;
    const turboMult = (adState.turboTimer > 0) ? 3 : 1;

    let earnedMeters = 0;
    let earnedNuts = 0;
    let earnedGold = 0;
    let earnedBoxClicks = 0;

    // 1. КОЛОНКА (300 секунд)
    if (speakerLevel > 0) {
        const isCool = (currentSpeakerSkin === 'cool' || (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id === 'cool'));
        const intervalSec = isCool ? 1.5 : 1.0;
        const totalPulses = Math.floor((300 * timeMult) / intervalSec);

        const speakerSkinData = SPEAKER_SKINS[currentSpeakerSkin] || SPEAKER_SKINS.old;
        let spMult = speakerSkinData.buff?.mpsMult || 1.0;
        if (hasMech('cyber') && cyberExtraAccessory.type === 'speakers' && cyberExtraAccessory.id) {
            spMult *= (SPEAKER_SKINS[cyberExtraAccessory.id]?.buff?.mpsMult || 1.0);
        }

        let mps = Math.floor((speakerMPS + (skin.buffs?.speakerAdd || 0)) * spMult);
        if (isVine) mps = Math.round(mps * 1.4);
        mps *= turboMult;

        earnedMeters += (totalPulses * mps);

        // Абсолютный динамик: каждый 3-й бас даёт +1 🟡
        if (isCool) {
            earnedGold += Math.floor(totalPulses / 3);
        }
    }

    // 2. ШАРИКИ НЬЮТОНА (300 секунд)
    if (newtonLevel > 0) {
        let actualNSpeed = Math.max(500, 3000 - (newtonLevel * 130));
        if (hasMech('plastic')) actualNSpeed = Math.max(200, actualNSpeed - 150);
        if (hasMech('cement') && (currentEffectId || currentSkinId) !== 'absolute') actualNSpeed += 300;

        const effectiveMs = 300000 * timeMult;
        const cycles = Math.floor(effectiveMs / actualNSpeed);
        const totalHits = cycles * 2; // Левый и правый шары

        let nwMult = (NEWTON_SKINS[currentNewtonSkin]?.buff?.powerMult) || 1.0;
        if (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id) {
            nwMult *= (NEWTON_SKINS[cyberExtraAccessory.id]?.buff?.powerMult || 1.0);
        }

        const cementMult = skin.buffs?.newtonMult || 1.0;
        let baseHit = Math.floor((newtonPower + (skin.buffs?.newtonAdd || 0)) * nwMult * cementMult);
        if (isVine) baseHit = Math.round(baseHit * 1.4);
        baseHit *= turboMult;

        earnedMeters += (totalHits * baseHit);

        const isBilliard = currentNewtonSkin === 'billiard' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'billiard');
        const isPlasma = currentNewtonSkin === 'plasma' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'plasma');
        const isPlanet = currentNewtonSkin === 'planet' || (hasMech('cyber') && cyberExtraAccessory.type === 'newton' && cyberExtraAccessory.id === 'planet');

        // Бильярдный #8: каждый 8-й удар даёт +150% урона и 3–5 🔩
        if (isBilliard) {
            const billiardProcs = Math.floor(totalHits / 8);
            earnedMeters += billiardProcs * Math.floor(baseHit * 1.5);
            earnedNuts += billiardProcs * 4;
        }

        // Плазма: правый шар даёт +1 🔩 за цикл
        if (isPlasma) {
            earnedNuts += cycles;
        }

        // Земля: каждый удар даёт +3 прогресса в ящик
        if (isPlanet) {
            earnedBoxClicks += (totalHits * 3);
        }else {
            earnedBoxClicks += (totalHits * 1);
        }
    }

    // Если прокачек нет — даём минимальный старт
    earnedMeters = Math.max(150, earnedMeters);

    // Применяем высоту
    currentHeight += earnedMeters;

    // Честно начисляем гайки через addNuts (учитывает квантовое расщепление и кибер-колонку)
    if (earnedNuts > 0) addNuts(earnedNuts);
    if (earnedGold > 0) goldenNuts += earnedGold;

    // Начисляем прогресс кейсов для шаров Земли
    if (earnedBoxClicks > 0) {
        clicksForBox += earnedBoxClicks;
        let actualNeeded = clicksNeeded;
        if (skin.buffs?.caseLimitMinus) actualNeeded -= skin.buffs.caseLimitMinus;
        actualNeeded = Math.max(10, actualNeeded);

        while (clicksForBox >= actualNeeded) {
            clicksForBox -= actualNeeded;
            boxesOwned++;
            userCases.wooden = boxesOwned;
            pityStage++;
            clicksNeeded = getClicksNeeded(pityStage);
            actualNeeded = clicksNeeded;
            if (skin.buffs?.caseLimitMinus) actualNeeded -= skin.buffs.caseLimitMinus;
            actualNeeded = Math.max(10, actualNeeded);
        }
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        if (uiBoxText) uiBoxText.innerText = `Ящик: ${clicksForBox}/${actualNeeded}`;
        if (uiBoxProgress) uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / actualNeeded) * 100)}%`;
    }

let report = `+${earnedMeters.toLocaleString('ru-RU')} м`;
    if (earnedNuts > 0) report += ` • +${earnedNuts} гаек`;
    if (earnedGold > 0) report += ` • +${earnedGold} золота`;

    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.38,
        img: canvasIcoTimeSkip,
        imgSize: 30,
        text: report,
        color: '#9b59b6',
        font: 'bold 22px sans-serif',
        alpha: 3.0,
        speed: 1.6
    });

    if (typeof AudioEngine !== 'undefined') AudioEngine.play('win', 1.0);
    checkAbsoluteUnlock();
    checkHeightMilestones();
    if (typeof saveGame === 'function') saveGame();
}

function startAutoTapInterval() {
    if (window.autoTapInterval) {
        clearInterval(window.autoTapInterval);
        window.autoTapInterval = null;
    }

    window.autoTapInterval = setInterval(() => {
        adState.autotapTimer = Math.max(0, (adState.autotapTimer || 0) - 66);
        if (adState.autotapTimer <= 0) {
            clearInterval(window.autoTapInterval);
            window.autoTapInterval = null;
            return;
        }
        const rect = canvas.getBoundingClientRect();
        handleTap(rect.left + rect.width / 2, rect.top + rect.height * 0.45, true);
    }, 66);
}

function activateBuffDirectly(type, durationMs) {
    if (typeof adState === 'undefined') window.adState = {};

    if (type === 'fortune') {
        adState.fortuneTimer = durationMs;
        particles.push({
            x: canvas.width / 2, y: canvas.height * 0.35,
            img: canvasIcoClover, imgSize: 32,
            text: 'УДАЧА +15!', color: '#2ecc71', font: 'bold 24px sans-serif', alpha: 2.2, speed: 1.5
        });
    }
    if (type === 'turbo') {
        adState.turboTimer = durationMs;
        particles.push({
            x: canvas.width / 2, y: canvas.height * 0.35,
            img: canvasIcoTurbo, imgSize: 32,
            text: 'ТУРБО-ДОХОД x3!', color: '#e67e22', font: 'bold 24px sans-serif', alpha: 2.2, speed: 1.5
        });
    }
    if (type === 'frenzy') {
        adState.frenzyTimer = durationMs;
        particles.push({
            x: canvas.width / 2, y: canvas.height * 0.35,
            img: canvasIcoNutRain, imgSize: 32,
            text: 'ГАЙКОПАД!', color: '#f1c40f', font: 'bold 24px sans-serif', alpha: 2.5, speed: 1.5
        });
    }
    if (type === 'autotap') {
        adState.autotapTimer = durationMs; // <-- ЗАДАЁМ ВРЕМЯ БАФФА (40 сек)
        particles.push({
            x: canvas.width / 2, 
            y: canvas.height * 0.35,
            img: canvasIcoRobotHand, 
            imgSize: 32,
            text: 'АВТОПИЛОТ (15 тапов/с)!', 
            color: '#00d2ff', 
            font: 'bold 24px sans-serif', 
            alpha: 2.2, 
            speed: 1.5
        });

        startAutoTapInterval(); // <-- ЗАПУСКАЕМ ЕДИНЫЙ ИНТЕРВАЛ
    }

    if (type === 'timewarp') {
        triggerTimeWarp();
        if (buffsDrawer) buffsDrawer.style.transform = 'translateX(105%)';
    }

    if (typeof AudioEngine !== 'undefined') AudioEngine.play('whoosh_air', 0.7);
    if (typeof saveGame === 'function') saveGame();
}

// Покупка за ЗОЛОТО (базовая стоимость 39 🟡)
const bindBuffGoldAction = (btnId, cost, durationMs, type) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.onclick = (e) => {
        e.stopPropagation();
        if (goldenNuts >= cost) {
            showConfirmPurchase(
                'Активация усиления',
                `Потратить ${cost} <img src="assets/golden_nut.webp" class="ui-ico"> на активацию эффекта?`,
                cost,
                () => {
                    goldenNuts -= cost;
                    activateBuffDirectly(type, durationMs);
                }
            );
        } else {
            alert('Недостаточно золотых гаек');
        }
    };
};
bindBuffGoldAction('btn-buy-buff-fortune-gold', 39, 600000, 'fortune');
bindBuffGoldAction('btn-buy-buff-turbo-gold', 39, 60000, 'turbo');
bindBuffGoldAction('btn-buy-buff-frenzy-gold', 39, 30000, 'frenzy');
bindBuffGoldAction('btn-buy-buff-autotap-gold', 39, 40000, 'autotap');
bindBuffGoldAction('btn-buy-buff-timewarp-gold', 39, 0, 'timewarp');

// Покупка за РЕКЛАМУ
const bindBuffAdAction = (btnId, durationMs, type, fallbackBtnId) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.onclick = (e) => {
        e.stopPropagation();
        const oldBtn = fallbackBtnId ? document.getElementById(fallbackBtnId) : null;
        if (oldBtn) {
            oldBtn.click();
        } else {
            if (typeof adState === 'undefined') window.adState = {};
            adState.streakCount = Math.min(10, (adState.streakCount || 0) + 1);
            activateBuffDirectly(type, durationMs);
        }
    };
};
bindBuffAdAction('btn-buy-buff-fortune-ad', 600000, 'fortune', 'btn-boost-fortune');
bindBuffAdAction('btn-buy-buff-turbo-ad', 60000, 'turbo', 'btn-boost-turbo');
bindBuffAdAction('btn-buy-buff-frenzy-ad', 30000, 'frenzy', 'btn-boost-frenzy');
bindBuffAdAction('btn-buy-buff-autotap-ad', 40000, 'autotap', null);
bindBuffAdAction('btn-buy-buff-timewarp-ad', 0, 'timewarp', null);

// ==========================================================
// === КРУГЛЫЕ ЗНАЧКИ (ЧЕСТНЫЕ СЕКУНДЫ) И СТРИК =============
// ==========================================================
function updateActiveBuffsDisplay() {
    if (typeof adState === 'undefined') return;

    // === ЖИВОЕ ОБНОВЛЕНИЕ УДАЧИ НА ЭКРАНЕ ===
    const lkVal = document.getElementById('field-luck-val');
    if (lkVal) {
        const curLuck = getTotalLuck();
        if (lkVal.innerText !== String(curLuck)) {
            lkVal.innerText = curLuck;
        }
    }

    // Если открыто само окно удачи — обновляем число и там
    const modalLuckVal = document.getElementById('luck-total-val-modal');
    if (modalLuckVal && luckModal && !luckModal.classList.contains('hidden')) {
        modalLuckVal.innerText = getTotalLuck();
    }

    const dock = document.getElementById('active-buffs-dock');
    if (!dock) return;

    const buffs = [
        { type: 'fortune', timer: adState.fortuneTimer || 0, max: 600000, icon: 'assets/clover_lucky.webp', color: '#2ecc71' },
        { type: 'turbo', timer: adState.turboTimer || 0, max: 60000, icon: 'assets/x3_bust.webp', color: '#e67e22' },
        { type: 'frenzy', timer: adState.frenzyTimer || 0, max: 30000, icon: 'assets/nut_rain.webp', color: '#f1c40f' },
        { type: 'autotap', timer: adState.autotapTimer || 0, max: 40000, icon: 'assets/robot_hand.webp', color: '#00d2ff' }
    ];

    dock.innerHTML = '';

    buffs.forEach(b => {
        if (b.timer > 0) {
            const badge = document.createElement('div');
            badge.className = 'active-buff-badge';
            badge.style.borderColor = b.color;

            // Расчет часовой стрелки (от 0 до 360 градусов)
            const progressRatio = Math.max(0, Math.min(1, (b.max - b.timer) / b.max));
            const darkAngle = progressRatio * 360;

            // ПЕРЕВОДИМ МИЛЛИСЕКУНДЫ В ЧЕСТНЫЕ СЕКУНДЫ:
            const totalSec = Math.ceil(b.timer / 1000);

            // Если меньше минуты — СТРОГО СЕКУНДЫ (например "45с", "12с")
            // Если больше минуты — формат "09:45"
            let timeTxt = '';
            if (totalSec >= 60) {
                const m = Math.floor(totalSec / 60);
                const s = totalSec % 60;
                timeTxt = `${m}:${s < 10 ? '0' : ''}${s}`;
            } else {
                timeTxt = `${totalSec}с`;
            }

            badge.innerHTML = `
                <div class="buff-clock-wipe" style="background: conic-gradient(rgba(0, 0, 0, 0.75) ${darkAngle}deg, transparent 0deg);"></div>
                <img src="${b.icon}" class="buff-badge-emoji" style="width: 22px; height: 22px; object-fit: contain; z-index: 2;">
                <span class="buff-badge-time">${timeTxt}</span>
            `;
            dock.appendChild(badge);
        }
    });

    // СВЕЧЕНИЕ СТРИКА: светится ТОЛЬКО когда есть реальная несобранная награда
    const btnStreak = document.getElementById('btn-open-streak');
    if (btnStreak) {
        const streak = adState.streakCount || 0;
        let isReady = false;

        if (Array.isArray(adState.claimedStreakRewards)) {
            for (let i = 1; i <= streak; i++) {
                if (!adState.claimedStreakRewards.includes(i)) { isReady = true; break; }
            }
        } else {
            const claimed = adState.claimedCount || adState.streakClaimed || 0;
            isReady = streak > claimed;
        }

        if (isReady && streak > 0) {
            btnStreak.classList.add('streak-ready-pulse');
        } else {
            btnStreak.classList.remove('streak-ready-pulse');
        }
    }
}

// ==========================================================
// === ЗАКРЫТИЕ ОКОН И ШТОРКИ ПРИ КЛИКЕ ВНЕ ИХ ОБЛАСТИ =======
// ==========================================================

// 1. Все модальные окна с затемнением (Overlay)
let overlayMouseDownTarget = null; // Переменная для отслеживания старта свайпа

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    // Запоминаем элемент, по которому ИЗНАЧАЛЬНО был сделан клик/свайп
    overlay.addEventListener('pointerdown', (e) => {
        overlayMouseDownTarget = e.target;
    });

    overlay.addEventListener('click', (e) => {
        // Окно закрывается ТОЛЬКО если и нажал, и отпустил строго по темному фону
        if (e.target === overlay && overlayMouseDownTarget === overlay) {
            const protectedModals = ['milestone-modal', 'calendar-modal', 'offline-modal', 'thank-you-modal', 'gachaModal'];

            if (!protectedModals.includes(overlay.id)) {
                overlay.classList.add('hidden');
                AudioEngine.stop('jacpot');
            }
        }
    });
});

// 2. Закрытие правой шторки баффов при клике мимо
document.addEventListener('pointerdown', (e) => {
    // Шторка баффов
    if (buffsDrawer && buffsDrawer.style.transform === 'translateX(0%)') {
        const confirmModal = document.getElementById('confirm-purchase-modal');
        const isClickOnConfirm = confirmModal && !confirmModal.classList.contains('hidden') && confirmModal.contains(e.target);

        // Не закрываем шторку, если кликаем внутри шторки, по кнопке вызова ИЛИ по окну подтверждения покупки
        if (!buffsDrawer.contains(e.target) && !btnToggleBuffs.contains(e.target) && !isClickOnConfirm) {
            buffsDrawer.style.transform = 'translateX(105%)';
        }
    }
});

// === ПЛАВНЫЙ СКРОЛЛ ЗАЖАТИЕМ (DRAG-TO-SCROLL) ===
function enableDragScroll(slider) {
    if (!slider) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    slider.style.cursor = 'grab';

    slider.addEventListener('pointerdown', (e) => {
        // Игнорируем нажатия правой кнопки мыши
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        isDown = true;
        hasMoved = false;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('pointerleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('pointerup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        // На телефонах тач-скролл идеально работает нативно с физикой инерции
        if (e.pointerType === 'touch') return;

        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // Скорость перетаскивания
        if (Math.abs(walk) > 5) {
            hasMoved = true;
        }
        slider.scrollLeft = scrollLeft - walk;
    });

    // Если список тянули, предотвращаем случайный клик/покупку предмета при отпускании
    slider.addEventListener('click', (e) => {
        if (hasMoved) {
            e.stopPropagation();
            e.preventDefault();
            hasMoved = false;
        }
    }, true);
}

// === УПРАВЛЕНИЕ МИМИКОМ ===
const mimicModal = document.getElementById('mimic-modal');
const btnCloseMimic = document.getElementById('btn-close-mimic');
const btnConfirmMimic = document.getElementById('btn-confirm-mimic');

if (btnCloseMimic && mimicModal) btnCloseMimic.onclick = () => mimicModal.classList.add('hidden');
if (btnConfirmMimic && mimicModal) {
    btnConfirmMimic.onclick = () => {
        mimicModal.classList.add('hidden');
        saveGame();
        renderInventory();
        AudioEngine.play('click', 0.5);
    };
}

// === УПРАВЛЕНИЕ МИМИКОМ ===
function openMimicConfig() {
    const modal = document.getElementById('mimic-modal');
    if (!modal) return;

    renderMimicUI();
    modal.classList.remove('hidden');
    AudioEngine.play('click', 0.5);

    // Привязываем кнопки закрытия и подтверждения
    const btnClose = document.getElementById('btn-close-mimic');
    const btnConfirm = document.getElementById('btn-confirm-mimic');

    if (btnClose) {
        btnClose.onclick = () => modal.classList.add('hidden');
    }
    if (btnConfirm) {
        btnConfirm.onclick = () => {
            modal.classList.add('hidden');
            saveGame();
            renderInventory();
            AudioEngine.play('click', 0.5);
        };
    }
}

function renderMimicUI() {
    const listEl = document.getElementById('mimic-selection-list');
    const slot0El = document.querySelector('#mimic-slot-0 .slot-name');
    const slot1El = document.querySelector('#mimic-slot-1 .slot-name');
    if (!listEl) return;

    if (slot0El) slot0El.innerText = LADDER_SKINS[mimicSlots[0]]?.name || 'Пусто';
    if (slot1El) slot1El.innerText = LADDER_SKINS[mimicSlots[1]]?.name || 'Пусто';

    listEl.innerHTML = '';

    // Перебираем открытые лестницы (кроме самого Мимика и Абсолюта)
    ownedSkins.forEach(id => {
        if (id === 'mimic' || id === 'absolute') return;
        const item = LADDER_SKINS[id];
        if (!item) return;

        const isSlot0 = mimicSlots[0] === id;
        const isSlot1 = mimicSlots[1] === id;
        const isSelected = isSlot0 || isSlot1;

        const card = document.createElement('div');
        card.style.cssText = `
            background: ${isSelected ? 'rgba(140, 122, 230, 0.25)' : 'rgba(0,0,0,0.35)'};
            border: 1.5px solid ${isSelected ? '#8c7ae6' : '#34495e'};
            border-radius: 8px; padding: 6px; display: flex; flex-direction: column;
            align-items: center; text-align: center; cursor: pointer;
        `;

        card.innerHTML = `
            <img src="${item.file}" style="height: 32px; object-fit: contain; margin-bottom: 2px;">
            <div style="font-size: 11px; font-weight: bold; color: ${item.color || '#fff'};">${item.name}</div>
            <div style="font-size: 9px; color: #bdc3c7; height: 24px; overflow: hidden; line-height: 1.2; margin-top: 2px;">
                ${LADDER_DESC[id] || 'Базовые свойства'}
            </div>
            <div style="margin-top: 4px; font-size: 9px; font-weight: bold; color: ${isSelected ? '#8c7ae6' : '#7f8c8d'};">
                ${isSlot0 ? '✔ Слот 1' : (isSlot1 ? '✔ Слот 2' : '+ Выбрать')}
            </div>
        `;

        // Клик по карточке выбирает способность
        card.onclick = () => {
            if (mimicSlots[0] === id) {
                // Если кликнули по первому слоту — меняем их местами
                const temp = mimicSlots[0];
                mimicSlots[0] = mimicSlots[1];
                mimicSlots[1] = temp;
            } else if (mimicSlots[1] === id) {
                // Если кликнули по второму — делаем его первым
                mimicSlots[1] = mimicSlots[0];
                mimicSlots[0] = id;
            } else {
                // Новый выбор: сдвигаем очередь (Слот 1 уходит в Слот 2, новый встает в Слот 1)
                mimicSlots[1] = mimicSlots[0];
                mimicSlots[0] = id;
            }
            AudioEngine.play('click', 0.5);
            renderMimicUI();
        };

        listEl.appendChild(card);
    });
}

// === УПРАВЛЕНИЕ КИБЕРПАНКОМ ===
let currentCyberTab = 'speakers';
const cyberModal = document.getElementById('cyber-modal');
const btnCloseCyber = document.getElementById('btn-close-cyber');
const btnConfirmCyber = document.getElementById('btn-confirm-cyber');
const cyberTabs = document.querySelectorAll('.cyber-tab');

if (btnCloseCyber && cyberModal) btnCloseCyber.onclick = () => cyberModal.classList.add('hidden');
if (btnConfirmCyber && cyberModal) {
    btnConfirmCyber.onclick = () => {
        cyberModal.classList.add('hidden');
        saveGame();
        renderInventory();
        updateFieldIcons();
        AudioEngine.play('click', 0.5);
    };
}

cyberTabs.forEach(btn => {
    btn.onclick = () => {
        cyberTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCyberTab = btn.dataset.tab;
        renderCyberUI();
        AudioEngine.play('click', 0.5);
    };
});

function openCyberConfig() {
    if (!cyberModal) return;
    renderCyberUI();
    cyberModal.classList.remove('hidden');
    AudioEngine.play('click', 0.5);
}

function renderCyberUI() {
    const listEl = document.getElementById('cyber-selection-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    let itemsSource = {};
    let ownedList = [];
    if (currentCyberTab === 'speakers') { itemsSource = SPEAKER_SKINS; ownedList = ownedSpeakerSkins; }
    else if (currentCyberTab === 'newton') { itemsSource = NEWTON_SKINS; ownedList = ownedNewtonSkins; }
    else if (currentCyberTab === 'talismans') { itemsSource = TALISMANS; ownedList = ownedTalismans; }

    Object.keys(itemsSource).forEach(id => {
        if (!ownedList.includes(id)) return;
        const item = itemsSource[id];
        const isSelected = (cyberExtraAccessory.type === currentCyberTab && cyberExtraAccessory.id === id);

        const card = document.createElement('div');
        card.style.cssText = `
            background: ${isSelected ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0,0,0,0.35)'};
            border: 1.5px solid ${isSelected ? '#00ffff' : '#34495e'};
            border-radius: 8px; padding: 6px; display: flex; flex-direction: column;
            align-items: center; text-align: center; cursor: pointer;
        `;

        let buffDesc = getItemBuffText(currentCyberTab, item);
        card.innerHTML = `
            <img src="${item.file}" style="height: 32px; object-fit: contain; margin-bottom: 2px;">
            <div style="font-size: 11px; font-weight: bold; color: ${item.color || RARITY_COLORS[item.rarity] || '#fff'};">${item.name}</div>
            <div style="font-size: 9px; color: #bdc3c7; height: 24px; overflow: hidden; line-height: 1.2; margin-top: 2px;">${buffDesc}</div>
            <div style="margin-top: 4px; font-size: 9px; font-weight: bold; color: ${isSelected ? '#00ffff' : '#7f8c8d'};">
                ${isSelected ? '✔ Установлено' : '+ Выбрать'}
            </div>
        `;

        card.onclick = () => {
            if (isSelected) cyberExtraAccessory = { type: null, id: null };
            else cyberExtraAccessory = { type: currentCyberTab, id: id };

            AudioEngine.play('click', 0.5);
            renderCyberUI();
        };
        listEl.appendChild(card);
    });
}

// Включаем перетаскивание для списка талисманов и скинов обвесов
enableDragScroll(document.getElementById('luck-talismans-list'));
enableDragScroll(document.getElementById('cust-items-list'));

// --- ИНИЦИАЛИЗАЦИЯ ИГРЫ ПРИ СТАРТЕ ---
loadGame();      // Сначала грузим сейв
updateShopUI();  // Затем пересчитываем и рисуем цены в магазине
updateAltitudeTrackerUI(); // Первичное обновление шкалы высоты

// Кнопка переключения Zen-режима (Скрытие UI)
const btnToggleZen = document.getElementById('btn-toggle-zen');
const uiLayer = document.getElementById('ui-layer');

if (btnToggleZen && uiLayer) {
    btnToggleZen.addEventListener('click', (e) => {
        e.stopPropagation();
        const isZen = uiLayer.classList.toggle('zen-mode');
        
        // Меняем иконку: если скрыто — закрытый глаз, если видно — открытый
        const icoZen = document.getElementById('ico-zen');
        if (icoZen) {
            icoZen.src = isZen ? 'assets/ico_closed_eye.webp' : 'assets/ico_open_eye.webp';
        }

        AudioEngine.play('click', 0.5);
    });
}

// Клик по контрольным точкам шкалы высоты (показ карточки «Бортовой журнал»)
document.querySelectorAll('.altitude-checkpoint').forEach(cp => {
    cp.addEventListener('click', (e) => {
        e.stopPropagation();
        const stg = parseInt(cp.dataset.stage, 10);
        if (isNaN(stg)) return;
        showLocationCard(stg, cp);
    });
});

// Кнопка закрытия карточки локации
const btnCloseLocCard = document.getElementById('btn-close-location-card');
if (btnCloseLocCard) {
    btnCloseLocCard.addEventListener('click', (e) => {
        e.stopPropagation();
        hideLocationCard();
        AudioEngine.play('click', 0.5);
    });
}

// Закрытие карточки при клике в свободное пространство
document.addEventListener('click', (e) => {
    const card = document.getElementById('location-card');
    if (!card || card.classList.contains('hidden')) return;
    if (e.target.closest('#location-card') || e.target.closest('.altitude-checkpoint')) return;
    hideLocationCard();
});

function triggerUfoBeacon() {
    ufoGift.active = true;
    ufoGift.progress = 0;
    ufoGift.targetX = canvas.width / 2;
    ufoGift.targetY = canvas.height * 0.45;

    const isLeft = Math.random() > 0.5;
    ufoGift.startX = isLeft ? -90 : canvas.width + 90;
    ufoGift.startY = canvas.height * (0.2 + Math.random() * 0.5);

    const r = Math.random();
    if (r < 0.4) ufoGift.rewardType = 0;       // Гайки
    else if (r < 0.7) ufoGift.rewardType = 1;  // Деревянный ящик
    else if (r < 0.9) ufoGift.rewardType = 2;  // Железный сейф
    else ufoGift.rewardType = 3;               // Золото

    // Всплывающее уведомление с тарелкой
    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.35,
        img: ufoGiftImg,
        imgSize: 32,
        text: 'МАГНИТ НЛО!',
        color: '#4cd137',
        font: 'bold 24px sans-serif',
        alpha: 2.2,
        speed: 1.5
    });

    if (typeof AudioEngine !== 'undefined') AudioEngine.play('ufo_tap', 0.8);
    
    // Закрываем шторку при призыве НЛО
    if (buffsDrawer) buffsDrawer.style.transform = 'translateX(105%)';
}

// Привязка кнопок:
const btnUfoAd = document.getElementById('btn-buy-buff-ufo-ad');
if (btnUfoAd) {
    btnUfoAd.onclick = (e) => {
        e.stopPropagation();
        watchRewardedAd('ufo_beacon', () => triggerUfoBeacon());
    };
}

const btnUfoGold = document.getElementById('btn-buy-buff-ufo-gold');
if (btnUfoGold) {
    btnUfoGold.onclick = (e) => {
        e.stopPropagation();
        if (goldenNuts >= 39) {
            showConfirmPurchase(
                'Активация усиления',
                'Потратить 39 <img src="assets/golden_nut.webp" class="ui-ico"> на призыв НЛО?',
                39,
                () => {
                    goldenNuts -= 39;
                    triggerUfoBeacon();
                    saveGame();
                }
            );
        } else {
            alert('Недостаточно золотых гаек');
        }
    };
}