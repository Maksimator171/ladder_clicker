// --- ИГРОВЫЕ СОСТОЯНИЯ И ПЕРЕМЕННЫЕ ---

let settingsState = {
    musicVol: 0.3,
    tapVol: 0.8,
    sfxVol: 0.9,
    vibrate: true
};

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
    if (descEl) descEl.innerText = desc;

    modal.classList.remove('hidden');
    AudioEngine.play('jacpot', 1.0);

    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
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
const btnBuyStarter = document.getElementById('btn-buy-starter');
if (btnBuyStarter) {
    btnBuyStarter.onclick = () => {
        // Заглушка оплаты (в проде здесь вызов платёжки ВК/Яндекса)
        starterPack.purchased = true;
        isVip = true;

        goldenNuts += 179;
        nuts += 1799;
        boxesOwned += 10;
        userCases.wooden = boxesOwned;
        userCases.iron = (userCases.iron || 0) + 5;

        // Выдаём скин колонки Кибер
        if (!ownedSpeakerSkins.includes('cyber')) {
            ownedSpeakerSkins.push('cyber');
        }

        AudioEngine.play('jacpot', 1.0);
        particles.push({ x: canvas.width/2, y: canvas.height * 0.4, text: '👑 НАБОР НОВИЧКА ПОЛУЧЕН!', color: '#f1c40f', alpha: 2.5, speed: 2 });

        uiNuts.innerText = `🔩 ${nuts}`;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        starterModal.classList.add('hidden');
        if (btnOpenStarter) btnOpenStarter.classList.add('hidden');
        starterModal.classList.add('hidden');
        if (btnOpenStarter) btnOpenStarter.classList.add('hidden');
        showThankYouModal('НАБОР НОВИЧКА!', 'Гора ресурсов и легендарный скин «Кибер» твои! Спасибо за поддержку 👑');
        saveGame();
    };
}

// Покупки золота и AdFree
document.querySelectorAll('.mock-buy-btn').forEach(btn => {
    btn.onclick = () => {
        const type = btn.dataset.type;
        isVip = true; // Любая покупка даёт VIP 👑

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
            showThankYouModal('ЗОЛОТО ЗАЧИСЛЕНО!', `+${amount} 🟡 уже на балансе. Приятных покупок!`);
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
            AudioEngine.play('win', 0.7);
            
            // Обновляем текст кнопки на экране [🎬 3/10]
            const streakBtnText = document.getElementById('ad-streak-btn-text');
            if (streakBtnText) streakBtnText.innerText = `${adState.streakCount}/10`;
        }

        // 3. Пассивка лестницы «Билборд» (Спонсорский контракт)
        if (hasMech('billboard')) {
            addNuts(20);
            goldenNuts += 1;
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.4,
                text: '📺 Спонсор: +20 🔩 и +1 🟡!',
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

// Активация Турбо-рывка (x3 на 60 сек, с Билбордом 90 сек)
function activateTurboBoost(customSeconds = null) {
    watchRewardedAd('turbo_x3', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        const durationMs = (customSeconds ? customSeconds * 1000 : 60000) * mult;
        adState.turboTimer = Math.max(adState.turboTimer, 0) + durationMs;

        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.35,
            text: `🔥 ТУРБО x3 (${Math.round(durationMs / 1000)}с)!`,
            color: '#e67e22',
            font: 'bold 26px sans-serif',
            alpha: 2.2,
            speed: 1.5
        });
    });
}

// База 6 рубежей с иллюстрациями и текстами
const HEIGHT_MILESTONES = [
    { 
        height: 100, reward: 5, name: 'Крыши', icon: '🏙️', file: 'assets/roofs_100.webp',
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

// Активация Знака Фортуны (+15 удачи на 10 мин, стек до 30 мин)
function activateFortuneBoost(customMinutes = null, luckAdd = 15) {
    watchRewardedAd('fortune_luck', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        const durationMs = (customMinutes ? customMinutes * 60000 : 10 * 60000) * mult;
        const maxCapMs = 30 * 60000 * mult;

        adState.fortuneTimer = Math.min(maxCapMs, adState.fortuneTimer + durationMs);

        particles.push({
            x: canvas.width / 2,
            y: canvas.height * 0.35,
            text: `🍀 УДАЧА +${luckAdd}!`,
            color: '#2ecc71',
            font: 'bold 26px sans-serif',
            alpha: 2.2,
            speed: 1.5
        });
    });
}

// Активация Гайкопада (Frenzy-режим: 30 сек)
function activateFrenzyMode(seconds = 30) {
    const mult = hasMech('billboard') ? 1.5 : 1.0;
    adState.frenzyTimer = seconds * 1000 * mult;

    AudioEngine.play('jacpot', 1.0);
    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.35,
        text: '⚡ ГАЙКОПАД АКТИВИРОВАН!',
        color: '#f1c40f',
        font: 'bold 26px sans-serif',
        alpha: 2.5,
        speed: 1.5
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
    id: null,             // ID скина или талисмана
    basePrice: 0,
    salePrice: 0,
    lastRefresh: 0,       // Время последней смены (timestamp)
    lastLegendaryBuy: 0,  // Кулдаун 5 дней на покупку леги
    lastAdReroll: 0       // Кулдаун 4 часа на рекламу
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

function showMilestoneModal(m) {
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

    btnX2.innerText = `▶ Удвоить за рекламу (+${m.reward * 2} 🟡)`;
    btnNormal.innerText = `Забрать обычную (+${m.reward} 🟡)`;

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
    if (!pendingMilestone) return;

    const mult = isDouble ? 2 : 1;
    const finalGold = pendingMilestone.reward * mult;

    goldenNuts += finalGold;
    AudioEngine.play('pickupCoin5', 1.0);

    particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.4,
        text: `+${finalGold} 🟡!`,
        color: '#f1c40f',
        font: 'bold 26px sans-serif',
        alpha: 2.2,
        speed: 2
    });

    const modalGold = document.getElementById('cases-modal-gold');
    if (modalGold) modalGold.innerText = goldenNuts;

    const modal = document.getElementById('milestone-modal');
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

    // Учёт скидки экипированной лестницы (tape -10%, goth -20%)
    const currentSkin = LADDER_SKINS[currentSkinId] || {};
    const discount = (currentSkin.buffs && currentSkin.buffs.discount) ? currentSkin.buffs.discount : 0;
    return Math.max(1, Math.floor(price * (1 - discount)));
}

//const flameY = xx;
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

// Спрайты в памяти
const speakerSprite = new Image();

const newtonSprite = new Image();
// Для шариков подгрузится при выборе скина

// --- ТАЙМЕРЫ И ПЕРЕМЕННЫЕ ДЛЯ МЕХАНИК ЛЕСТНИЦ ---
let newtonHitCount = 0;       // Счётчик ударов шаров (для Бильярдного #8)
let speakerPulseCount = 0;    // Счётчик басов (для Абсолютного динамика)
let activePlayBoxTimer = 0;   // Накопленное время (мс)
let isTimedBoxReady = false;  // Флаг: готов ли ящик (кап = 1 шт.)
const btnClaimTimedBox = document.getElementById('btn-claim-timed-box');
const timedBoxText = document.getElementById('timed-box-text');
let totalClicks = 0;        // Общий счетчик для Банановой, Золотой, Мраморной
let currentCps = 0;         // Текущие клики в секунду (для Когтеточки)
let clicksThisSec = 0;      
let lastCpsTime = Date.now();
let newYearCounter = 0;     // Счетчик Новогодней
let newYearTarget = Math.floor(150 + Math.random() * 100);
let ufoBonusTimer = 0;      // Таймер НЛО
let retroCoin = { active: false, x: 0, y: 0, size: 45 }; // Монетка Ретро
let neonRerollUsed = false; // Флаг реролла для Неоновой
let isPointerDown = false;  // Для свайпов Ледяной

// Проверка наличия механики у текущей лестницы (включая АБСОЛЮТ)
function hasMech(mech) {
    if (currentSkinId === 'absolute' && mech !== 'mimic' && mech !== 'cyber') return true;
    const skin = LADDER_SKINS[currentSkinId];
    return skin && skin.mechanics && skin.mechanics.includes(mech);
}

// Подсчет всей текущей удачи игрока (Лестница + Талисман)
function getTotalLuck() {
    const skin = LADDER_SKINS[currentSkinId] || { buffs: {} };
    let luck = skin.buffs.luck || 0;
    if (currentTalisman && TALISMANS[currentTalisman]) {
        luck += TALISMANS[currentTalisman].luck;
    }
    // Бонус от рекламы
    if (adState.fortuneTimer > 0) luck += 15;

    return luck;
}

// Умное начисление гаек (Квантовое расщепление: 20% в золото)
function addNuts(amount) {
    if (amount <= 0) return;

    // Кибер-спикер: +25% ко всем получаемым гайкам
    if (currentSpeakerSkin === 'cyber') {
        amount = Math.round(amount * 1.25);
    }

    if (hasMech('quant')) {
        const goldShare = Math.floor(amount * 0.2);
        const regShare = amount - goldShare;
        nuts += regShare;
        goldenNuts += goldShare;
        if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
    } else {
        nuts += amount;
    }
    uiNuts.innerText = `🔩 ${nuts}`;
    // Внутри addNuts() после uiNuts.innerText = ...
const topGoldDisplay = document.getElementById('gold-display');
if (topGoldDisplay) topGoldDisplay.innerText = `🟡 ${goldenNuts}`;
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
    clover:    { name: 'Клевер-четырёхлистник', file: 'assets/lucky_4leaf.webp', rarity: 'rare', luck: 3, price: 15 },
    horseshoe: { name: 'Золотая подкова', file: 'assets/lucky_golden_horseshoe.webp', rarity: 'rare', luck: 5, price: 40 },
    paw:       { name: 'Кроличья лапка', file: 'assets/lucky_rabbit_hand.webp', rarity: 'epic', luck: 8, price: 90 },
    coin:      { name: 'Древняя монета', file: 'assets/lucky_coin.webp', rarity: 'epic', luck: 12, price: 180 },
    star:      { name: 'Звезда удачи', file: 'assets/lucky_star.webp', rarity: 'legendary', luck: 18, price: 350 },
    key:       { name: 'Ключ от всех тайн', file: 'assets/lucky_key.webp', rarity: 'legendary', luck: 25, price: 650 },
    sock:      { name: 'Счастливый носок', file: 'assets/lucky_sock.webp', rarity: 'special', luck: 50, price: 999 }
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
        add_stair: 'add_stair_sound',
        bone: 'bone_tap',
        cyber: 'cyber_tap',
        golden: 'gold_tap',
        goth: 'garguli_tup',
        ice: 'ice_tap',
        vine: 'vine_tap',

        // Legendary
        marble: 'marble_tap',
        quant: 'quant_tap',
        ufo: 'ufo_tap',

        // Special
        retro: 'retro_tap',
        cosmo: 'cosmo_tap',
        storm: 'storm_tap',
        strato: 'wind_tap',
        absolute: 'absolut_tap',

        default: 'base_tup'
    },

activeSounds: [],

    play: function(soundName, vol = 1.0) {
        try {
            // Если такой же звук уже звучит (особенно длинный джекпот/фанфары) — глушим его
            if (this.sounds[soundName]) {
                this.sounds[soundName].pause();
                this.sounds[soundName].currentTime = 0;
            }

            const audio = new Audio(`assets/sounds/${soundName}.ogg`);
            const sfxMultiplier = (typeof settingsState !== 'undefined' && settingsState.sfxVol !== undefined) ? settingsState.sfxVol : 1.0;
            audio.volume = Math.max(0, Math.min(1, vol * sfxMultiplier));
            
            // Запоминаем текущий играющий звук
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

    stop: function(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].pause();
            this.sounds[soundName].currentTime = 0;
            delete this.sounds[soundName];
        }
    },

    // Воспроизведение звука тапа (с рандомом для Мимика)
    playTap: function(skinId) {
        if (skinId === 'mimic') {
            const allSounds = Object.values(this.ladderSounds).filter(s => s !== 'base_tup');
            const randomSound = allSounds[Math.floor(Math.random() * allSounds.length)];
            this.play(randomSound, 0.85);
            return;
        }

        const soundName = this.ladderSounds[skinId] || this.ladderSounds.default;
        this.play(soundName, 1.0 * settingsState.tapVol);
        //this.play(soundName, 0.8);
    },

    // Фоновая музыка и переходы по высотам
    updateAmbient: function(height) {
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
            { type: 'nuts', amount: 50,  weight: 40, name: '50 Гаек' },
            { type: 'nuts', amount: 150, weight: 20, name: '150 Гаек' },
            { type: 'nuts', amount: 300, weight: 10, name: '300 Гаек' },

            // Все Обычные лестницы (суммарно 21% шанс)
            { type: 'skin', id: 'banana',  weight: 3 },
            { type: 'skin', id: 'beer',    weight: 3 },
            { type: 'skin', id: 'fire',    weight: 3 },
            { type: 'skin', id: 'fireman', weight: 3 },
            { type: 'skin', id: 'plastic', weight: 3 },
            { type: 'skin', id: 'rusty',   weight: 3 },
            { type: 'skin', id: 'tape',    weight: 3 },

            // Все Редкие лестницы (суммарно 9% шанс)
            { type: 'skin', id: 'book',     weight: 2 },
            { type: 'skin', id: 'cactus',   weight: 2 },
            { type: 'skin', id: 'cement',   weight: 2 },
            { type: 'skin', id: 'neon',     weight: 1 },
            { type: 'skin', id: 'scratch',  weight: 1 },
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
            { type: 'skin', id: 'banana',  weight: 57 },
            { type: 'skin', id: 'beer',    weight: 57 },
            { type: 'skin', id: 'fire',    weight: 57 },
            { type: 'skin', id: 'fireman', weight: 57 },
            { type: 'skin', id: 'plastic', weight: 57 },
            { type: 'skin', id: 'rusty',   weight: 57 },
            { type: 'skin', id: 'tape',    weight: 58 },

            // Rare лестницы (суммарно 50% = 500 веса / 6 скинов ≈ по 83)
            { type: 'skin', id: 'book',     weight: 83 },
            { type: 'skin', id: 'cactus',   weight: 83 },
            { type: 'skin', id: 'cement',   weight: 83 },
            { type: 'skin', id: 'neon',     weight: 83 },
            { type: 'skin', id: 'scratch',  weight: 84 },
            { type: 'skin', id: 'new_year', weight: 84 },

            // Epic лестницы (суммарно 10% = 100 базового веса / 6 скинов ≈ по 17)
            { type: 'skin', id: 'bone',   weight: 17 },
            { type: 'skin', id: 'cyber',  weight: 17 },
            { type: 'skin', id: 'golden', weight: 17 },
            { type: 'skin', id: 'goth',   weight: 16 },
            { type: 'skin', id: 'ice',    weight: 16 },
            { type: 'skin', id: 'vine',   weight: 17 }
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
            { type: 'skin', id: 'bone',     weight: 20 },
            { type: 'skin', id: 'cyber',    weight: 20 },
            { type: 'skin', id: 'golden',   weight: 18 },
            { type: 'skin', id: 'goth',     weight: 14 },
            { type: 'skin', id: 'ice',      weight: 12 },
            { type: 'skin', id: 'marble',   weight: 6 },
            { type: 'skin', id: 'quant',    weight: 5 },
            { type: 'skin', id: 'ufo',      weight: 3 },
            { type: 'skin', id: 'mimic',    weight: 2 }
        ]
    }
};

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
    wood:     { rarity: 'common', name: 'Деревянная', file: 'assets/wood_stair-removebg-preview.png', color: '#bdc3c7', buffs: {}, mechanics: [] },
    banana:   { rarity: 'common', name: 'Банановая', file: 'assets/banana_tree.webp', color: '#f1c40f', buffs: {}, mechanics: ['banana'] },
    beer:     { rarity: 'common', name: 'Пивная', file: 'assets/beer_stair.webp', color: '#e67e22', buffs: { luck: 5 }, mechanics: [] },
    fire:     { rarity: 'common', name: 'Огненная', file: 'assets/fire_stair.webp', color: '#e74c3c', buffs: { click: 7, caseLimitMinus: 10 }, mechanics: [] },
    fireman:  { rarity: 'common', name: 'Пожарная', file: 'assets/fireman_stair.webp', color: '#c0392b', buffs: { newtonAdd: 15 }, mechanics: [] },
    plastic:  { rarity: 'common', name: 'Пластиковая', file: 'assets/plastic_stair.webp', color: '#3498db', buffs: {}, mechanics: ['plastic'] },
    rusty:    { rarity: 'common', name: 'Ржавая', file: 'assets/rusty_lader.webp', color: '#d35400', buffs: {}, mechanics: ['rusty'] },
    tape:     { rarity: 'common', name: 'Изолента', file: 'assets/tape_stair.webp', color: '#2980b9', buffs: { discount: 0.10 }, mechanics: [] },

    // === РЕДКИЕ (Rare) ===
    book:     { rarity: 'rare', name: 'Книжная', file: 'assets/book_stair.webp', color: '#8e44ad', buffs: { luck: 7 }, mechanics: [] },
    cactus:   { rarity: 'rare', name: 'Кактус', file: 'assets/cactus_stair.webp', color: '#2ecc71', buffs: { speakerAdd: 20, newtonAdd: 10 }, mechanics: [] },
    cement:   { rarity: 'rare', name: 'Цементная', file: 'assets/cement_stair.webp', color: '#95a5a6', buffs: { newtonMult: 1.5 }, mechanics: ['cement'] },
    neon:     { rarity: 'rare', name: 'Неоновая', file: 'assets/neon_stair.webp', color: '#ff00ff', buffs: {}, mechanics: ['neon'] },
    scratch:  { rarity: 'rare', name: 'Когтеточка', file: 'assets/scratching_post_stair.webp', color: '#d1ccc0', buffs: {}, mechanics: ['scratch'] },
    new_year: { rarity: 'rare', name: 'Новогодняя', file: 'assets/new_year_stair.webp', color: '#27ae60', buffs: {}, mechanics: ['new_year'] },

    // === ЭПИЧЕСКИЕ (Epic) ===
    add_stair: {rarity: 'epic', name: 'Билборд', file: 'assets/add_stair.webp', color: '#00d2d3', buffs: {}, mechanics: ['billboard']},
    bone:     { rarity: 'epic', name: 'Костяная', file: 'assets/bone_stair.webp', color: '#ecf0f1', buffs: {}, mechanics: ['bone'] },
    cyber:    { rarity: 'epic', name: 'Киберпанк', file: 'assets/cyper_pank.webp', color: '#00ffff', buffs: {}, mechanics: ['cyber'] },
    golden:   { rarity: 'epic', name: 'Золотая', file: 'assets/golden_stair.webp', color: '#f1c40f', buffs: {}, mechanics: ['golden'] },
    goth:     { rarity: 'epic', name: 'Готическая', file: 'assets/goth_stair.webp', color: '#2c3e50', buffs: { discount: 0.20 }, mechanics: ['goth'] },
    ice:      { rarity: 'epic', name: 'Ледяная', file: 'assets/ice_stair.webp', color: '#74b9ff', buffs: {}, mechanics: ['ice'] },
    vine:     { rarity: 'epic', name: 'Лоза', file: 'assets/vine_stair.webp', color: '#22a6b3', buffs: {}, mechanics: ['vine'] },
    calendar_stair: {rarity: 'epic', name: 'Календарь', file: 'assets/calendar_stair.webp', color: '#e74c3c', buffs: { luck: 10 }, mechanics: ['calendar']},

    // === ЛЕГЕНДАРНЫЕ (Legendary) ===
    marble:   { rarity: 'legendary', name: 'Мраморное Золото', file: 'assets/marble_gold_stair.webp', color: '#f5f6fa', buffs: {}, mechanics: ['marble'] },
    quant:    { rarity: 'legendary', name: 'Квантовая', file: 'assets/quant_stair.webp', color: '#9c88ff', buffs: { caseLimitMinus: 50 }, mechanics: ['quant'] },
    ufo:      { rarity: 'legendary', name: 'НЛО', file: 'assets/ufo_stair.webp', color: '#4cd137', buffs: {}, mechanics: ['ufo'] },
    mimic:    { rarity: 'legendary', name: 'Мимик', file: 'assets/mimic_stair.webp', color: '#8c7ae6', buffs: {}, mechanics: ['mimic'] },

    // === ОСОБЕННЫЕ (Секретные) ===
    retro:    { rarity: 'special', name: 'Ретро (День 2)', file: 'assets/retro_stair.webp', color: '#ff9f43', buffs: {}, mechanics: ['retro'] },
    storm:    { rarity: 'special', name: 'Грозовой фронт', file: 'assets/storm_front_stair.webp', color: '#7f8fa6', buffs: { clickAdd: 20 }, mechanics: ['storm'] },
    strato:   { rarity: 'special', name: 'Стратосфера', file: 'assets/stratosphere_stair.webp', color: '#0097e6', buffs: {}, mechanics: ['strato'] },
    cosmo:    { rarity: 'special', name: 'Космос', file: 'assets/cosmo_stair.webp', color: '#192a56', buffs: {}, mechanics: ['cosmo'] },
    absolute: { rarity: 'special', name: 'АБСОЛЮТ', file: 'assets/absolute_stair.webp', color: '#ffffff', buffs: {}, mechanics: ['absolute'] }
};

let ownedSkins = ['wood']; // Инвентарь скинов (деревянная открыта со старта)
let currentSkinId = 'wood'; // Текущая активная лестница

let lightningFlash = 0;

let newtonAnimProgress = 0; // 0 - покой, от 0 до 1 - цикл удара
let newtonLeftHitFired = false; // Флаг удара левого шара

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

// Анимации космических змей (по 6 кадров)
const cr1Frames = []; // creature1 (голова налево)
const cr2Frames = []; // cr2 (голова направо)
for(let i = 1; i <= 6; i++) {
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
const canvas = document.getElementById('gameCanvas');
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

// База локаций и цветов фона (включая 1М и 10М)
const LOCATIONS = [
    { h: 0,        name: "Хрущевка",          top: [93, 64, 55],   bot: [141, 110, 99] }, 
    { h: 100,      name: "Крыши",              top: [79, 195, 247], bot: [179, 229, 252] }, 
    { h: 1000,     name: "Грозовой Фронт",     top: [55, 71, 79],   bot: [120, 144, 156] }, 
    { h: 10000,    name: "Стратосфера",        top: [26, 35, 126],  bot: [63, 81, 181] }, 
    { h: 100000,   name: "Открытый Космос",    top: [0, 0, 0],      bot: [15, 5, 25] },
    { h: 1000000,  name: "Млечный Путь",       top: [18, 5, 38],    bot: [48, 16, 78] },
    { h: 10000000, name: "Бескрайний простор", top: [2, 1, 8],      bot: [8, 12, 28] }
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

    const hasSatellite = bgObjects.some(o => o.type === 'satellite');
    const hasUfo = bgObjects.some(o => o.type === 'ufo');
    const hasEvent = bgObjects.some(o => o.type === 'rocket_event');
    const hasRocket = bgObjects.some(o => o.type === 'solo_rocket');
    const hasMeteor = bgObjects.some(o => o.type === 'solo_meteor');
    const hasBalloon = bgObjects.some(o => o.type === 'balloon');
    
    // Считаем текущее количество звезд, чтобы они не забивали память
    const currentStars = bgObjects.filter(o => o.type === 'star').length;

    // --- 0. БЕСКРАЙНИЙ ПРОСТОР (>= 10 000 000 м) ---
    if (currentHeight >= 10000000) {
        const roll = Math.random();
        if (roll < 0.05 && !bgObjects.some(o => o.type === 'cube')) {
            type = 'cube';
            x = canvas.width / 2 + (Math.random() - 0.5) * 120; // По центру со смещением
            y = -150; // Появляется сверху
            vx = 0; // Не летит вбок
        } else if (roll < 0.1 && !bgObjects.some(o => o.type === 'guard')) {
            type = 'guard';
            x = canvas.width / 2 + (Math.random() - 0.5) * 120;
            y = -150;
            vx = 0;
        } else if (roll < 0.25 && !bgObjects.some(o => o.type === 'cr2')) {
            type = 'cr2';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else if (roll < 0.4 && !bgObjects.some(o => o.type === 'creature1')) {
            type = 'creature1';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else {
            if (Math.random() < 0.5 && currentStars < 70) {
                type = 'star'; x = Math.random() * canvas.width; y = ladderSpeed > 1 ? -10 : Math.random() * canvas.height; vx = 0; size = 0.5 + Math.random();
            } else return;
        }
    }
    // --- 0.5 МЛЕЧНЫЙ ПУТЬ (>= 1 000 000 м) ---
    else if (currentHeight >= 1000000) {
        const roll = Math.random();
        if (roll < 0.08 && !bgObjects.some(o => o.type === 'asteroid_creature')) {
            type = 'asteroid_creature';
            vx = (fromLeft ? 1 : -1) * (40 + Math.random() * 30);
        } else if (roll < 0.16 && !bgObjects.some(o => o.type === 'cosmo_track')) {
            type = 'cosmo_track';
            vx = (fromLeft ? 1 : -1) * (80 + Math.random() * 50);
        } else if (roll < 0.3 && !bgObjects.some(o => o.type === 'cr2')) {
            type = 'cr2';
            vx = (fromLeft ? 1 : -1) * (60 + Math.random() * 40);
        } else {
             if (Math.random() < 0.4 && currentStars < 60) {
                type = 'star'; x = Math.random() * canvas.width; y = ladderSpeed > 1 ? -10 : Math.random() * canvas.height; vx = 0; size = 0.4 + Math.random() * 0.8;
            } else return;
        }
    }
    // --- 1. КОСМОС (>= 100 000 м) ---
    else if (currentHeight >= 100000) {
        const roll = Math.random();
        if (roll < 0.04 && !bgObjects.some(o => o.type === 'shutle')) {
            type = 'shutle';
            vx = (fromLeft ? 1 : -1) * (110 + Math.random() * 60);
        } else if (roll < 0.08 && !hasUfo) {
            type = 'ufo';
            vx = (fromLeft ? 1 : -1) * (90 + Math.random() * 40);
        } else if (roll < 0.12 && !hasSatellite) {
            type = 'satellite';
            vx = (fromLeft ? 1 : -1) * 20;
        } else {
            if (Math.random() < 0.4 && currentStars < 50) {
                type = 'star'; x = Math.random() * canvas.width; y = ladderSpeed > 1 ? -10 : Math.random() * canvas.height; vx = 0; size = 0.4 + Math.random() * 0.8; 
            } else return;
        }
    } 
    // --- 2. СТРАТОСФЕРА (10 000 - 100 000 м) ---
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
            // Строго слева или справа от лестницы (лестница в центре не перекрывается)
            const isLeft = Math.random() > 0.5;
            x = isLeft 
                ? canvas.width * (0.08 + Math.random() * 0.14) 
                : canvas.width * (0.78 + Math.random() * 0.14);
            y = -180; // Спавнится чуть выше экрана
            vx = 0;   // Не дрейфует в стороны
        }
        else if (roll < 0.035 && !hasBalloon) {
            type = 'balloon'; vx = (fromLeft ? 1 : -1) * 10;
        } 
        else if (roll < 0.055 && !hasSatellite) {
            type = 'satellite'; vx = (fromLeft ? 1 : -1) * 22;
        } 
        else {
            if (Math.random() < 0.25 && currentStars < 35) {
                type = 'star'; x = Math.random() * canvas.width; y = ladderSpeed > 1 ? -10 : Math.random() * canvas.height; vx = 0; size = 0.6 + Math.random() * 1.2; 
            } else return; 
        }
    } 
    // --- 3. ГРОЗОВОЙ ФРОНТ (1 000 - 10 000 м) ---
    else if (currentHeight >= 1000) {
        if (Math.random() < 0.2) {
            type = 'airplane'; vx = (fromLeft ? 1 : -1) * (70 + Math.random() * 30);
        } else {
            type = 'cloud'; size = 35 + Math.random() * 30; color = `rgba(85, 95, 105, ${speedMult * 0.5})`; vx *= 0.5;
        }
    } 
    // --- 4. КРЫШИ / НЕБО (100 - 1 000 м) ---
    else if (currentHeight >= 100) {
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

    if (currentHeight >= 1000 && currentHeight < 10000 && Math.random() < 0.004) {
        lightningFlash = 0.8;
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

        // 1. Физика скролла стоячих объектов (пролетаем мимо них при кликах)
        if (obj.type === 'obelisk' || obj.type === 'cube' || obj.type === 'guard') {
            obj.y += ladderSpeed * 15 * dt; // Полноценная скорость скролла мира!
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
        // 2. Куб (Точные пропорции: каркас 1250x1452, ядро 1359x1321)
        else if (obj.type === 'cube') {
            obj.animTimer += dt;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer * 1.5) * 12);
            
            // Базовый размер внешнего каркаса
            const cw = 130;
            const ch = cw * (1452 / 1250); // ~151px

            // 1. Задняя стенка
            if (cubeBackImg.complete && cubeBackImg.naturalWidth !== 0) {
                ctx.drawImage(cubeBackImg, -cw / 2, -ch / 2, cw, ch);
            }
            
            // 2. Ядро (пульсация, свечение и точные пропорции 1359x1321)
            const coreScale = 0.38 + Math.sin(obj.animTimer * 4) * 0.04;
            const lw = cw * coreScale;
            const lh = lw * (1321 / 1359);
            
            ctx.save();
            ctx.globalAlpha = 0.8 + Math.sin(obj.animTimer * 5) * 0.2;
            ctx.shadowColor = `hsl(${Math.floor(obj.animTimer * 60 % 360)}, 100%, 65%)`;
            ctx.shadowBlur = 14;
            if (cubeLighterImg.complete && cubeLighterImg.naturalWidth !== 0) {
                ctx.drawImage(cubeLighterImg, -lw / 2, -lh / 2, lw, lh);
            }
            ctx.restore();
            
            // 3. Передние ребра
            if (cubeFrontImg.complete && cubeFrontImg.naturalWidth !== 0) {
                ctx.drawImage(cubeFrontImg, -cw / 2, -ch / 2, cw, ch);
            }
            
            ctx.restore();
        }
        // 3. Страж (Ядро 336x333, верхние 434x521, нижние 374x350)
        else if (obj.type === 'guard') {
            obj.animTimer += dt;
            ctx.save();
            ctx.translate(obj.x, obj.y + Math.sin(obj.animTimer * 2) * 8);
            
            // Ядро (336x333)
            const gw = 50;
            const gh = gw * (333 / 336);
            ctx.save();
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 12 + Math.sin(obj.animTimer * 4) * 6;
            if (guardCoreImg.complete && guardCoreImg.naturalWidth !== 0) {
                ctx.drawImage(guardCoreImg, -gw / 2, -gh / 2, gw, gh);
            }
            ctx.restore();
            
            // Пластины: диагональный вылет
            const pDist = 30 + Math.sin(obj.animTimer * 3) * 8;
            
            // Верхние пластины (434x521)
            const upW = 38;
            const upH = upW * (521 / 434); // ~45.6px
            if (guardLUImg.complete && guardLUImg.naturalWidth !== 0) {
                ctx.drawImage(guardLUImg, -pDist - upW / 2, -pDist - upH / 2, upW, upH);
            }
            if (guardRUImg.complete && guardRUImg.naturalWidth !== 0) {
                ctx.drawImage(guardRUImg, pDist - upW / 2, -pDist - upH / 2, upW, upH);
            }
            
            // Левая нижняя (374x350) и Правая нижняя (373x350)
            const dnW = 36;
            const dnH = dnW * (350 / 374); // ~33.7px
            if (guardLDImg.complete && guardLDImg.naturalWidth !== 0) {
                ctx.drawImage(guardLDImg, -pDist - dnW / 2, pDist - dnH / 2, dnW, dnH);
            }
            if (guardRDImg.complete && guardRDImg.naturalWidth !== 0) {
                ctx.drawImage(guardRDImg, pDist - dnW / 2, pDist - dnH / 2, dnW, dnH);
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
            drawTruckFlameCone(64.1, -0.1,  11, fLen);       // Центральное сопло
            drawTruckFlameCone(62.4,  13.0, 9, fLen * 0.9); // Нижнее сопло
            
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
            obj.x += obj.vx * dt; obj.y += obj.vy * dt;
            ctx.save(); ctx.translate(obj.x, obj.y); ctx.rotate(-0.1);
            if (rocketImg.complete) ctx.drawImage(rocketImg, -75, -50, 150, 100);
            
            const flameY = 25; const flameH = 20 + Math.random() * 12;
            const flameGrad = ctx.createLinearGradient(0, flameY, 0, flameY + flameH);
            flameGrad.addColorStop(0, '#ffffff'); flameGrad.addColorStop(0.2, '#f1c40f');
            flameGrad.addColorStop(0.5, '#e67e22'); flameGrad.addColorStop(1, 'rgba(231, 76, 60, 0)');
            ctx.fillStyle = flameGrad; ctx.beginPath(); ctx.moveTo(-8, flameY); ctx.lineTo(8, flameY); ctx.lineTo(0, flameY + flameH); ctx.fill();
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
                ctx.save(); ctx.translate(obj.startX_r + (obj.targetX - obj.startX_r) * p, obj.startY_r + (obj.targetY - obj.startY_r) * p); ctx.rotate(-0.1);
                if (rocketImg.complete) ctx.drawImage(rocketImg, -75, -50, 150, 100);
                const fg = ctx.createLinearGradient(0, 25, 0, 25 + 18 + Math.random() * 10);
                fg.addColorStop(0, '#fff'); fg.addColorStop(0.2, '#f1c40f'); fg.addColorStop(1, 'rgba(231,76,60,0)');
                ctx.fillStyle = fg; ctx.beginPath(); ctx.moveTo(-8, 25); ctx.lineTo(8, 25); ctx.lineTo(0, 25 + 18 + Math.random() * 10); ctx.fill();
                ctx.restore();
                
                ctx.save(); ctx.translate(obj.startX_m + (obj.targetX - obj.startX_m) * p, obj.startY_m + (obj.targetY - obj.startY_m) * p); ctx.rotate(0.75);
                const tg = ctx.createRadialGradient(0, 0, 4, -18, -18, 45 + Math.random() * 8);
                tg.addColorStop(0, 'rgba(255,220,120,0.95)'); tg.addColorStop(1, 'rgba(231,76,60,0)');
                ctx.fillStyle = tg; ctx.beginPath(); ctx.ellipse(-15, -15, 45 + Math.random() * 8, 16 + Math.random() * 6, Math.PI / 4, 0, Math.PI * 2); ctx.fill();
                if (meteorImg.complete) ctx.drawImage(meteorImg, -22, -22, 45, 45);
                ctx.restore();
            } else if (!obj.exploded) {
                obj.exploded = true; shakeTime = 16;
                for (let k = 0; k < 14; k++) debrisArray.push({ x: obj.targetX, y: obj.targetY, vx: (Math.random() - 0.5) * 24, vy: (Math.random() - 0.5) * 24, rot: Math.random() * Math.PI, rotSpeed: 0.35, width: 10 + Math.random() * 8, height: 10 + Math.random() * 8 });
            }
            if (obj.t >= 1.0) { obj.x = -999; obj.y = -999; }
        } 
        else {
            ctx.save();
            if (obj.type === 'star') {
                const twinkle = 0.08 + 0.92 * Math.abs(Math.sin(obj.animTimer * 8.5));
                ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
                if (obj.size > 1.1 && twinkle > 0.4) {
                    const rl = obj.size * 3.2, rt = obj.size * 0.45;
                    ctx.beginPath(); ctx.moveTo(obj.x, obj.y - rl); ctx.lineTo(obj.x + rt, obj.y); ctx.lineTo(obj.x, obj.y + rl); ctx.lineTo(obj.x - rt, obj.y);
                    ctx.moveTo(obj.x - rl, obj.y); ctx.lineTo(obj.x, obj.y + rt); ctx.lineTo(obj.x + rl, obj.y); ctx.lineTo(obj.x, obj.y - rt); ctx.fill();
                    ctx.beginPath(); ctx.arc(obj.x, obj.y, obj.size * 0.6, 0, Math.PI * 2); ctx.fill();
                } else {
                    ctx.beginPath(); ctx.arc(obj.x, obj.y, obj.size * 0.8, 0, Math.PI * 2); ctx.fill();
                }
            } else {
                ctx.fillStyle = obj.color;
            }
            if (obj.type !== 'star') {
                ctx.beginPath(); ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.restore();
        }

        // Удаление объектов, улетевших за экран
        if (obj.x < -200 || obj.x > canvas.width + 200 || obj.y > canvas.height + 250) {
            bgObjects.splice(i, 1);
        }
    }
}

// ==========================================
// === НОВАЯ СИСТЕМА КАСТОМИЗАЦИИ И УДАЧИ ===
// ==========================================

let currentCustType = null; // 'speakers' или 'newton'
let selectedCustSkin = null; // ID скина, который сейчас рассматриваем в модалке

const custModal = document.getElementById('customization-modal');
const luckModal = document.getElementById('luck-modal');

// Обновление иконок прямо на игровом экране (вызывать при старте и смене скинов)
function updateFieldIcons() {
    const spIcon = document.getElementById('field-icon-speaker');
    const nwIcon = document.getElementById('field-icon-newton');
    const lkVal = document.getElementById('field-luck-val');

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
    if (lkVal) {
        lkVal.innerText = getTotalLuck();
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
        powerTxt = `Удар: ${newtonPower} м (${(actualNSpeed/1000).toFixed(1)}с)`;
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
            heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
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
    document.getElementById('cust-item-desc').innerText = buffText;

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
            if (isGold && goldenNuts >= skinData.price) {
                goldenNuts -= skinData.price;
            } else if (!isGold && nuts >= skinData.price) {
                nuts -= skinData.price;
            } else return;

            ownedList.push(selectedCustSkin);
            equipItem(currentCustType, selectedCustSkin);
            AudioEngine.play('jacpot', 1.0);
            
            uiNuts.innerText = `🔩 ${nuts}`;
            renderCustomizationModal();
            updateFieldIcons();
            saveGame();
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
    document.getElementById('luck-total-val-modal').innerText = totalLuck;
    document.getElementById('field-luck-val').innerText = totalLuck;

    // Модификаторы текстом
    const modEl = document.getElementById('luck-modifiers-list');
    modEl.innerHTML = '';

    const ladderSkin = LADDER_SKINS[currentSkinId];
    if (ladderSkin && ladderSkin.buffs.luck) {
        modEl.innerHTML += `<div>🪜 Лестница «${ladderSkin.name}»: <b style="color:#2ecc71;">+${ladderSkin.buffs.luck}</b></div>`;
    }
    if (currentTalisman && TALISMANS[currentTalisman]) {
        modEl.innerHTML += `<div>🧿 Талисман «${TALISMANS[currentTalisman].name}»: <b style="color:#2ecc71;">+${TALISMANS[currentTalisman].luck}</b></div>`;
    }
    if (adState.fortuneTimer > 0) {
        modEl.innerHTML += `<div>📺 Буст от рекламы (Знак Фортуны): <b style="color:#2ecc71;">+15</b></div>`;
    }
    if (modEl.innerHTML === '') {
        modEl.innerHTML = `<div>Нет активных баффов удачи.</div>`;
    }

    // Горизонтальный список талисманов для покупки
    const listEl = document.getElementById('luck-talismans-list');
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
            btn.innerText = `${item.price} 🟡`;
            btn.style.cssText = `width: 100%; margin-top: 4px; padding: 4px; font-size: 9px; font-weight: bold; background: ${canAfford ? '#f1c40f' : '#555'}; color: #111; border: none; border-radius: 4px; cursor: pointer;`;
            btn.disabled = !canAfford;
            btn.onclick = () => {
                if (goldenNuts >= item.price) {
                    goldenNuts -= item.price;
                    ownedTalismans.push(id);
                    equipItem('talismans', id);
                    AudioEngine.play('jacpot', 1.0);
                    renderLuckModal();
                    updateFieldIcons();
                    saveGame();
                }
            };
            card.appendChild(btn);
        } else {
            card.innerHTML += `<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px;">🔒 Закрыто</div>`;
        }

        listEl.appendChild(card);
    });
}

// --- АВТОКЛИКЕРЫ (ПРАВИЛЬНЫЙ РАСЧЕТ) ---
function updateAutoClickers(dt) {
    if (typeof dt !== 'number' || isNaN(dt) || dt <= 0) return;

    const skin = LADDER_SKINS[currentSkinId] || { buffs: {} };

// 1. КОЛОНКА
    if (speakerLevel > 0) {
        const sTimeMult = hasMech('strato') ? 1.42 : 1.0;
        speakerTimer += (dt * sTimeMult);
        
        const speakerInterval = (currentSpeakerSkin === 'cool') ? 1500 : 1000;

        if (speakerTimer >= speakerInterval) {
            speakerTimer -= speakerInterval;
            speakerPulseCount++;

            const speakerSkinData = SPEAKER_SKINS[currentSpeakerSkin] || SPEAKER_SKINS.old;
            const speakerMult = speakerSkinData.buff?.mpsMult || 1.0;
            const speakerAdd = skin.buffs.speakerAdd || 0;
            
            let finalMPS = Math.floor((speakerMPS + speakerAdd) * speakerMult);
            if (hasMech('vine')) finalMPS = Math.round(finalMPS * 1.4);

            if (adState.turboTimer > 0) finalMPS *= 3;

            currentHeight += finalMPS;
            checkHeightMilestones();
            if (heightDisplay) heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
            
            // Безопасный звук
            if (speakerSkinData.sound) {
                AudioEngine.play(speakerSkinData.sound, 0.4);
            }

            // Безопасная анимация (не крашит цикл, если элемента нет)
            if (slotSpeaker) {
                slotSpeaker.style.transform = 'scale(1.2)';
                setTimeout(() => { if (slotSpeaker) slotSpeaker.style.transform = 'scale(1)'; }, 100);
            }

            if (currentSpeakerSkin === 'cool' && speakerPulseCount % 3 === 0) {
                goldenNuts += 1;
                if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;
                if (slotSpeaker) {
                    particles.push({
                        x: slotSpeaker.getBoundingClientRect().left + 25,
                        y: slotSpeaker.getBoundingClientRect().top,
                        text: '+1 🟡', color: '#f1c40f', font: 'bold 22px sans-serif', alpha: 1.5, speed: 2
                    });
                }
            }
        }
    }

    // 2. ШАРИКИ НЬЮТОНА
    if (newtonLevel > 0) {
        const nTimeMult = hasMech('strato') ? 1.42 : 1.0;
        newtonTimer += (dt * nTimeMult);

        let actualNSpeed = newtonSpeed;
        if (hasMech('plastic')) actualNSpeed = Math.max(200, actualNSpeed - 150);
        if (hasMech('cement')) actualNSpeed += 300;

        if (newtonTimer >= actualNSpeed && newtonAnimProgress === 0) {
            newtonAnimProgress = 0.001;
            newtonLeftHitFired = false;
        }

        if (newtonAnimProgress > 0) {
            const animDuration = Math.min(1200, actualNSpeed * 0.85);
            newtonAnimProgress += dt / animDuration;

            const newtonMult = (NEWTON_SKINS[currentNewtonSkin]?.buff?.powerMult) || 1.0;
            const newtonAdd = skin.buffs.newtonAdd || 0;
            const cementMult = skin.buffs.newtonMult || 1.0;

            let baseHit = Math.floor((newtonPower + newtonAdd) * newtonMult * cementMult);
            if (hasMech('vine')) baseHit = Math.round(baseHit * 1.4);

            const processBallHit = (isRightBall, ballX) => {
                newtonHitCount++;
                let hitDamage = baseHit;

                if (currentNewtonSkin === 'billiard' && newtonHitCount % 8 === 0) {
                    hitDamage = Math.floor(hitDamage * 2.5);
                    const bNuts = Math.floor(3 + Math.random() * 3);
                    addNuts(bNuts);
                    particles.push({ x: ballX, y: canvas.height * 0.22, text: `🎱 x2.5! +${bNuts} 🔩`, color: '#ffffff', font: 'bold 20px sans-serif', alpha: 1.6, speed: 2 });
                }

                if (currentNewtonSkin === 'plasma' && isRightBall) {
                    addNuts(1);
                    particles.push({ x: ballX, y: canvas.height * 0.24, text: '+1 🔩', color: '#00ffff', font: 'bold 18px sans-serif', alpha: 1.2, speed: 1.8 });
                }

                if (currentNewtonSkin === 'planet') {
                    clicksForBox += 3;
                    shakeTime = Math.max(shakeTime, 10);
                    let actualNeeded = clicksNeeded;
                    if (skin.buffs.caseLimitMinus) actualNeeded -= skin.buffs.caseLimitMinus;
                    actualNeeded = Math.max(10, actualNeeded);

                    if (clicksForBox >= actualNeeded) {
                        clicksForBox = 0;
                        boxesOwned++;
                        userCases.wooden = boxesOwned;
                        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                        pityStage++;
                        clicksNeeded = getClicksNeeded(pityStage);
                    }
                    if (uiBoxText) {
        uiBoxText.innerText = `Ящик: ${clicksForBox}/${actualNeeded}`;
        uiBoxProgress.style.width = `${Math.min(100, (clicksForBox / actualNeeded) * 100)}%`;
    }
}

// Турбо x3 для шаров Ньютона
if (adState.turboTimer > 0) hitDamage *= 3;

currentHeight += hitDamage;
checkHeightMilestones();
                heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
                ladderScaleX = 1.06; ladderScaleY = 0.92; ladderSpeed = 16;
                shakeTime = Math.max(shakeTime, 7);

                AudioEngine.play(NEWTON_SKINS[currentNewtonSkin].sound, 0.6);
                particles.push({ x: ballX, y: canvas.height * 0.28 + ladderDropY, text: `+${hitDamage}`, alpha: 1, speed: 2.5 });
            };

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

// --- ГЛАВНЫЙ ЦИКЛ ---
function gameLoop() {
    const now = performance.now(); // Высокоточные часы браузера
    if (!window._lastLoopTime) window._lastLoopTime = now;
    
    // Чистое реальное время, прошедшее с прошлого кадра (в миллисекундах)
    const dt = Math.min(100, now - window._lastLoopTime);
    window._lastLoopTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    
    if (shakeTime > 0) {
        const shakeX = (Math.random() - 0.5) * (shakeTime * 1.5);
        const shakeY = (Math.random() - 0.5) * (shakeTime * 1.5);
        ctx.translate(shakeX, shakeY);
        shakeTime--;
    }

    drawBackground();
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

    if (Math.abs(ladderSpeed) > 0.5) {
        ladderSpeed *= 0.85; 
        ladderYOffset += ladderSpeed;
    }

 // Отсчет времени баффов рекламы
    if (adState.turboTimer > 0) adState.turboTimer = Math.max(0, adState.turboTimer - dt);
    if (adState.fortuneTimer > 0) adState.fortuneTimer = Math.max(0, adState.fortuneTimer - dt);
    if (adState.frenzyTimer > 0) adState.frenzyTimer = Math.max(0, adState.frenzyTimer - dt);

    // Передаем точный dt
 updateAutoClickers(dt);
 updateShopUI();
 updateBoostsUI();



    if (now - lastCpsTime > 1000) {
        currentCps = clicksThisSec;
        clicksThisSec = 0;
        lastCpsTime = now;
    }

    // НЛО: Каждые 60 сек дроп бонуса
    if (hasMech('ufo')) {
        ufoBonusTimer += dt;
        if (ufoBonusTimer >= 60000) {
            ufoBonusTimer = 0;
            const r = Math.random();
            let bonusTxt = "";
            if (r < 0.4) { addNuts(250); bonusTxt = "👽 +250 🔩"; }
            else if (r < 0.7) { userCases.wooden++; boxesOwned++; if(uiCasesCount)uiCasesCount.innerText = boxesOwned; bonusTxt = "👽 +📦"; }
            else if (r < 0.9) { userCases.iron++; bonusTxt = "👽 +🧰"; }
            else { addNuts(25); bonusTxt = "👽 +25 🟡 (Эквивалент)"; goldenNuts+=25; }
            particles.push({ x: canvas.width/2, y: canvas.height*0.2, text: bonusTxt, color: '#4cd137', alpha: 2, speed: 1.5 });
        }
    }

    // Ретро: Монетка снизу (1% каждую секунду)
    if (hasMech('retro') && !retroCoin.active && Math.random() < 0.01 / 60) {
        retroCoin.active = true;
        retroCoin.x = 20 + Math.random() * (canvas.width - 80);
        retroCoin.y = canvas.height + 50;
    }
    if (retroCoin.active) {
        retroCoin.y -= 180 * (dt / 1000); // Скорость вверх
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(retroCoin.x + retroCoin.size/2, retroCoin.y + retroCoin.size/2, retroCoin.size/2, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#d35400';
        ctx.font = '24px Arial';
        ctx.fillText('C', retroCoin.x + 14, retroCoin.y + 32);
        
        if (retroCoin.y < -100) retroCoin.active = false;
    }

// --- ТАЙМЕР БЕСПЛАТНОГО ЯЩИКА (С КАПОМ В 1 ЯЩИК) ---
    const activeBoxTarget = (currentSpeakerSkin === 'monster') ? 120000 : 180000;

    // Таймер тикает ТОЛЬКО если готовый ящик ещё не ожидает игрока
    if (!isTimedBoxReady) {
        activePlayBoxTimer += dt;

        if (activePlayBoxTimer >= activeBoxTarget) {
            activePlayBoxTimer = activeBoxTarget;
            isTimedBoxReady = true; // Склад полон: таймер остановлен!
            AudioEngine.play('case_drop_by_click', 0.9);
        }
    }

    // Обновляем визуальный таймер на экране
    // СТАЛО:
    if (timedBoxText && btnClaimTimedBox) {
        const timedBoxLabel = document.getElementById('timed-box-label');
        
        if (isTimedBoxReady) {
            timedBoxText.innerText = "ГОТОВО!";
            if (timedBoxLabel) timedBoxLabel.style.display = 'none'; // Прячем слово "Беспл:", оставляем только "ГОТОВО!"
            btnClaimTimedBox.style.background = "#27ae60";
            btnClaimTimedBox.style.borderColor = "#2ecc71";
            btnClaimTimedBox.style.color = "#ffffff";
        } else {
            if (timedBoxLabel) timedBoxLabel.style.display = 'inline'; // Показываем "Беспл:"
            
            const timeLeftSec = Math.max(0, Math.ceil((activeBoxTarget - activePlayBoxTimer) / 1000));
            const m = Math.floor(timeLeftSec / 60);
            const s = timeLeftSec % 60;
            timedBoxText.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
            
            btnClaimTimedBox.style.background = "rgba(44, 62, 80, 0.95)";
            btnClaimTimedBox.style.borderColor = "#f39c12";
            btnClaimTimedBox.style.color = "#f1c40f";
        }
        const topGoldDisplay = document.getElementById('gold-display');
    if (topGoldDisplay) {
        topGoldDisplay.innerText = `🟡 ${goldenNuts}`;
    }
    }

    // Обновление круглых иконок баффов и свечения стрика
    updateActiveBuffsDisplay();

    // Обновление валюты на экране (компактно в шапке, полно в магазинах)
    const uiNutsEl = document.getElementById('nuts-display');
    const uiGoldEl = document.getElementById('gold-display');
    if (uiNutsEl) uiNutsEl.innerText = `🔩 ${nuts >= 10000 ? (nuts / 1000).toFixed(1) + 'K' : Math.floor(nuts)}`;
    if (uiGoldEl) uiGoldEl.innerText = `🟡 ${goldenNuts >= 10000 ? (goldenNuts / 1000).toFixed(1) + 'K' : Math.floor(goldenNuts)}`;

    // В магазинах — полные числа с пробелами (например, 1 500 000):
    const casesModalNutsEl = document.getElementById('cases-modal-nuts');
    const casesModalGoldEl = document.getElementById('cases-modal-gold');
    if (casesModalNutsEl) casesModalNutsEl.innerText = formatFullCurrency(nuts);
    if (casesModalGoldEl) casesModalGoldEl.innerText = formatFullCurrency(goldenNuts);

    updateActiveBuffsDisplay();
    requestAnimationFrame(gameLoop);
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
        
        // Появление (7 000 - 13 000 м)
        if (currentHeight < 13000) {
            moonAlpha = (currentHeight - 7000) / 6000;
        } 
        // Растворение перед Млечным Путем (900 000 - 1 000 000 м)
        else if (currentHeight > 900000) {
            moonAlpha = 1 - ((currentHeight - 900000) / 100000);
        }

        // Ограничиваем прозрачность от 0 до 1
        moonAlpha = Math.max(0, Math.min(1, moonAlpha));

        if (moonAlpha > 0) {
            ctx.save();
            ctx.globalAlpha = moonAlpha; // Применяем прозрачность ко всей Луне
            
            const moonX = canvas.width * 0.82;
            const moonY = 90;
            
            // Мягкое неоновое свечение
            const glow = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 55);
            glow.addColorStop(0, 'rgba(245, 246, 250, 0.35)');
            glow.addColorStop(1, 'rgba(245, 246, 250, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(moonX, moonY, 55, 0, Math.PI * 2);
            ctx.fill();

            // Тело Луны
            ctx.fillStyle = '#f5f6fa';
            ctx.beginPath();
            ctx.arc(moonX, moonY, 24, 0, Math.PI * 2);
            ctx.fill();

            // Кратеры
            ctx.fillStyle = '#dcdde1';
            ctx.beginPath();
            ctx.arc(moonX - 7, moonY - 6, 5, 0, Math.PI * 2);
            ctx.arc(moonX + 8, moonY + 4, 4, 0, Math.PI * 2);
            ctx.arc(moonX - 2, moonY + 9, 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
    }
    locationDisplay.innerText = loc.name;
}

function drawLadder() {
    const imgAspect = ladderImg.width / ladderImg.height;
    const targetWidth = canvas.width * 0.27;
    const targetHeight = targetWidth / imgAspect;
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
        ctx.restore();
        return;
    }

    // === КВАНТОВАЯ ЛЕСТНИЦА: RGB-СМЕЩЕНИЕ И ГЛИТЧ ===
    const isBurst = quantumGlitch > 0;
    if (quantumGlitch > 0) quantumGlitch--;

    // Фоновая квантовая нестабильность (рандомный редкий микро-тик)
    const isPassiveTwitch = Math.random() < 0.08;
    const glitchActive = isBurst || isPassiveTwitch;

    // Сила расхождения каналов в пикселях
    const splitDist = isBurst ? (5 + Math.random() * 7) : (glitchActive ? 3 : 1.5);

    // Вспомогательная функция отрисовки 3 сегментов бесконечной лестницы
    const drawSegments = (offsetX = 0, offsetY = 0) => {
        ctx.drawImage(ladderImg, x + offsetX, baseY + offsetY, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x + offsetX, baseY - targetHeight + 2 + offsetY, targetWidth, targetHeight);
        ctx.drawImage(ladderImg, x + offsetX, baseY + targetHeight - 2 + offsetY, targetWidth, targetHeight);
    };

    // 1. Красный/Маджента канал (сдвиг влево)
    ctx.save();
    ctx.shadowColor = 'rgba(255, 0, 85, 0.75)';
    ctx.shadowOffsetX = -splitDist;
    ctx.shadowOffsetY = (Math.random() - 0.5) * (isBurst ? 3 : 0);
    ctx.shadowBlur = isBurst ? 4 : 1;
    drawSegments();
    ctx.restore();

    // 2. Синий/Циан канал (сдвиг вправо)
    ctx.save();
    ctx.shadowColor = 'rgba(0, 240, 255, 0.75)';
    ctx.shadowOffsetX = splitDist;
    ctx.shadowOffsetY = (Math.random() - 0.5) * (isBurst ? 3 : 0);
    ctx.shadowBlur = isBurst ? 4 : 1;
    drawSegments();
    ctx.restore();
//строка 1495
    // 3. Основной четкий слой по центру
    drawSegments();

    // 4. Горизонтальные разрывы текстуры (Slice Tearing) при активном импульсе
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

            // Перерисовываем сдвинутый горизонтальный срез
            ctx.drawImage(ladderImg, x + sliceShift, baseY, targetWidth, targetHeight);
            
            // Неоновый артефакт на срезе
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.25)' : 'rgba(255, 0, 120, 0.25)';
            ctx.fillRect(x - 30, sliceY, targetWidth + 60, sliceH);
            ctx.restore();
        }
    }

    ctx.restore();
}

function drawHangingSpeaker() {
    const targetWidth = canvas.width * 0.27;
    const ladderLeft = canvas.width / 2 - targetWidth / 2;
    const speakerW = 34;
    const speakerH = 46;
    const speakerX = ladderLeft - speakerW; 
    
    const floatY = Math.sin(Date.now() / 450) * 4;
    const speakerY = canvas.height * 0.52 + ladderDropY + floatY;
    const anchorY = -30; 

    ctx.save();
    // Тросы подвеса
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(speakerX + 6, anchorY);
    ctx.lineTo(speakerX + 6, speakerY);
    ctx.moveTo(speakerX + speakerW - 6, anchorY);
    ctx.lineTo(speakerX + speakerW - 6, speakerY);
    ctx.stroke();

    let pulse = 1.0;
    if (speakerTimer < 160) pulse = 1.14;

    ctx.translate(speakerX + speakerW / 2, speakerY + speakerH / 2);
    ctx.scale(pulse, pulse);

    // Если спрайт загружен — рисуем его, иначе фоллбек
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

function drawNewtonCradle() {
    const targetWidth = canvas.width * 0.27;
    const ladderLeft = canvas.width / 2 - targetWidth / 2;
    const ladderRight = canvas.width / 2 + targetWidth / 2;

    const r = 13; 
    const ballRestY = canvas.height * 0.28 + ladderDropY;
    const anchorY = -30;
    const stringLen = ballRestY - anchorY;

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
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(leftRestX, anchorY); ctx.lineTo(leftBallX, leftBallY); ctx.stroke();

    if (newtonSprite.src && newtonSprite.complete && newtonSprite.naturalWidth !== 0) {
        ctx.drawImage(newtonSprite, leftBallX - r, leftBallY - r, r * 2, r * 2);
    } else {
        ctx.fillStyle = '#bdc3c7';
        ctx.beginPath(); ctx.arc(leftBallX, leftBallY, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(leftBallX - 3, leftBallY - 3, 3, 0, Math.PI * 2); ctx.fill();
    }

    // 2. ПРАВЫЙ ШАР
    const rightBallX = rightRestX + Math.sin(rightAngle) * stringLen;
    const rightBallY = anchorY + Math.cos(rightAngle) * stringLen;

    ctx.beginPath(); ctx.moveTo(rightRestX, anchorY); ctx.lineTo(rightBallX, rightBallY); ctx.stroke();

    if (newtonSprite.src && newtonSprite.complete && newtonSprite.naturalWidth !== 0) {
        ctx.drawImage(newtonSprite, rightBallX - r, rightBallY - r, r * 2, r * 2);
    } else {
        ctx.fillStyle = '#bdc3c7';
        ctx.beginPath(); ctx.arc(rightBallX, rightBallY, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(rightBallX - 3, rightBallY - 3, 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
}

function drawParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.y -= p.speed; 
        p.alpha -= 0.02; 
        ctx.fillStyle = p.color ? p.color.replace('ALPHA', p.alpha) : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.font = p.font || 'bold 28px sans-serif';
        ctx.textAlign = 'center';
        ctx.lineWidth = 3;
        ctx.strokeStyle = `rgba(0, 0, 0, ${p.alpha})`;
        ctx.strokeText(p.text, p.x, p.y);
        ctx.fillText(p.text, p.x, p.y);
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

// Проверка наград за достижение высоты
function checkHeightUnlocks() {
    const unlocks = [
        { h: 1000,   id: 'storm',  name: 'Грозовой фронт' },
        { h: 10000,  id: 'strato', name: 'Стратосфера' },
        { h: 100000, id: 'cosmo',  name: 'Космос' }
    ];

    unlocks.forEach(u => {
        if (currentHeight >= u.h && !ownedSkins.includes(u.id)) {
            ownedSkins.push(u.id);
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.35,
                text: `🎉 СКИН: ${u.name}!`,
                color: `rgba(241, 196, 15, ALPHA)`,
                font: 'bold 24px sans-serif',
                alpha: 2.0,
                speed: 1.2
            });
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

function handleTap(clientX, clientY) {
    // Тактильный отклик на смартфонах
    if (settingsState.vibrate && navigator.vibrate) {
        navigator.vibrate(15);
    }
    AudioEngine.playTap(currentSkinId);
    AudioEngine.updateAmbient(currentHeight);
    
    const rect = canvas.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    clicksThisSec++;
    totalClicks++;

    // 1. Поимка монетки Ретро (Insert Coin)
    if (hasMech('retro') && retroCoin.active) {
        const dx = clickX - (retroCoin.x + retroCoin.size/2);
        const dy = clickY - (retroCoin.y + retroCoin.size/2);
        if (Math.sqrt(dx*dx + dy*dy) < retroCoin.size * 1.5) { // Хитбокс чуть больше
            retroCoin.active = false;
            const coinReward = Math.floor(75 + Math.random() * 50);
            addNuts(coinReward);
            AudioEngine.play('jacpot', 0.8);
            particles.push({ x: clickX, y: clickY, text: `+${coinReward} 🔩!`, color: '#f1c40f', speed: 3, alpha: 1.5 });
            return; // Забираем клик на монету
        }
    }

const skin = LADDER_SKINS[currentSkinId] || { buffs: {} };
    let tapsNum = hasMech('bone') ? 2 : 1; // Костяная: 1 тап за 2 (для ящика)

    // База клика + бафф скина
    let currentClickPower = clickPower; 
    if (skin.buffs.clickAdd) currentClickPower += skin.buffs.clickAdd; // Огненная, Шторм

    // Когтеточка (Комбо CPS)
    if (hasMech('scratch') && currentCps > 4) {
        const comboMult = Math.min(1.5, 1.0 + (currentCps - 4) * 0.05);
        currentClickPower = Math.floor(currentClickPower * comboMult);
    }

    // Банановая (Каждый 5-й тап х2)
    if (hasMech('banana') && totalClicks % 5 === 0) currentClickPower *= 2;

    // === ВОТ СЮДА ВСТАВЛЯЙ КОСТЯНУЮ ===
    // Костяная лестница (удваивает урон за тап)
    if (hasMech('bone')) {
        currentClickPower *= 2;
    }

    // Грозовой фронт (Риск надлома 10%)
    if (hasMech('storm') && Math.random() < 0.10) {
        currentHeight = Math.max(0, currentHeight - (currentClickPower * 3));
        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
        triggerPurchaseEffect(10);
        return; 
    }

    // Лоза (+40% ко всему)
    if (hasMech('vine')) currentClickPower = Math.round(currentClickPower * 1.4);

// Турбо-рывок x3 ко всем кликам
    if (adState.turboTimer > 0) {
        currentClickPower *= 3;
    }

    // Механика Гайкопада (Frenzy)
    if (adState.frenzyTimer > 0) {
        addNuts(1);
        if (Math.random() < 0.01) {
            goldenNuts += 1;
            particles.push({ x: clickX, y: clickY - 30, text: '+1 🟡!', color: '#f1c40f', speed: 2, alpha: 1.5 });
        }
    }

    // Применяем урон
    currentHeight += currentClickPower;
    heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
    checkHeightUnlocks();

    // Ржавая лестница (Гайки из ниоткуда)
    if (hasMech('rusty') && Math.random() < 0.65) addNuts(1);

    // Расчет лимита Pity для ящиков
    let actualClicksNeeded = clicksNeeded;
    if (skin.buffs.caseLimitMinus) actualClicksNeeded -= skin.buffs.caseLimitMinus;
    actualClicksNeeded = Math.max(10, actualClicksNeeded);

    // Дроп кейса: 1.2% + (0.05% * удачу)
    const totalLuck = getTotalLuck();
    const dropChance = 0.012 + (totalLuck * 0.0005);
    
    if (Math.random() < dropChance) {
        // Шанс превратить деревянный ящик в железный сейф: (удача * 0.15)%
        const ironUpgradeChance = (totalLuck * 0.15) / 100;

        if (Math.random() < ironUpgradeChance) {
            userCases.iron++;
            AudioEngine.play('jacpot', 0.85);
            particles.push({ x: clickX, y: clickY - 50, text: '🧰 ЖЕЛЕЗНЫЙ СЕЙФ (УДАЧА)!', color: '#7f8c8d', font: 'bold 22px sans-serif', alpha: 1.8, speed: 3.5 });
        } else {
            boxesOwned++;
            userCases.wooden = boxesOwned;
            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
            AudioEngine.play('case_drop_by_click', 0.9);
            particles.push({ x: clickX, y: clickY - 45, text: '+ 📦!', color: '#f1c40f', alpha: 1.4, speed: 3.5 });
        }
    }
    
    if (Math.random() < dropChance) {
        boxesOwned++;
        userCases.wooden = boxesOwned;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        AudioEngine.play('case_drop_by_click', 0.9);
        particles.push({ x: clickX, y: clickY - 45, text: '+ 📦!', color: '#f1c40f', alpha: 1.4, speed: 3.5 });
    }

   // Прогресс-бар кейса
    clicksForBox += tapsNum;
    if (clicksForBox >= actualClicksNeeded) {
        clicksForBox = 0;
        boxesOwned++;
        userCases.wooden = boxesOwned;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        
        // Переход на следующий порог (40 -> 50 -> 60 -> 70 -> 80 -> 90 -> 100)
        pityStage++;
        clicksNeeded = getClicksNeeded(pityStage);
        triggerCaseGainedPopup();
    }
    
    // Двигаем вертикальную полоску снизу вверх:
    if (uiBoxText) {
        uiBoxText.innerText = `${clicksForBox}/${actualClicksNeeded}`;
    }
    if (uiBoxProgress) {
        uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / actualClicksNeeded) * 100)}%`;
    }

    // Золотая и Мраморная лестницы (События сотых кликов)
    if (totalClicks % 100 === 0) {
        if (hasMech('marble') && Math.random() < 0.25) {
            userCases.gold++;
            particles.push({ x: canvas.width/2, y: 150, text: '🟡 ЗОЛОТОЙ КЕЙС!', color: '#f1c40f', font: '30px sans-serif', alpha: 2, speed: 1 });
        } else if (hasMech('golden')) {
            userCases.iron++;
            boxesOwned = Math.max(0, boxesOwned - 1); // Заменяет деревянный на железный
            userCases.wooden = boxesOwned;
            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
            particles.push({ x: canvas.width/2, y: 150, text: '🧰 ЖЕЛЕЗНЫЙ СЕЙФ!', color: '#7f8c8d', font: '30px sans-serif', alpha: 2, speed: 1 });
        }
    }

    // Новогодняя лестница (Подарки)
    if (hasMech('new_year')) {
        newYearCounter++;
        if (newYearCounter >= newYearTarget) {
            newYearCounter = 0;
            newYearTarget = Math.floor(150 + Math.random() * 100);
            
            const roll = Math.random();
            if (roll < 0.6) {
                addNuts(100);
                particles.push({ x: clickX, y: clickY, text: '🎁 +100 🔩', color: '#27ae60', speed: 2, alpha: 1 });
            } else if (roll < 0.9) {
                userCases.wooden++;
                boxesOwned = userCases.wooden;
                if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                particles.push({ x: clickX, y: clickY, text: '🎁 ДЕРЕВЯННЫЙ!', color: '#8d6e63', speed: 2, alpha: 1 });
            } else {
                userCases.iron++;
                particles.push({ x: clickX, y: clickY, text: '🎁 ЖЕЛЕЗНЫЙ!', color: '#7f8c8d', speed: 2, alpha: 1 });
            }
        }
    }

    // Визуал и физика
    ladderScaleX = 1.1; ladderScaleY = 0.85; ladderSpeed = 25; 
    particles.push({ x: clickX + (Math.random()*40-20), y: clickY - 20, text: `+${currentClickPower}`, alpha: 1, speed: 3+Math.random()*2 });

    // Проверка триггера на Starter Pack (500 м)
    if (currentHeight >= 500 && !starterPack.unlocked && !starterPack.purchased) {
        starterPack.unlocked = true;
        starterPack.startTime = Date.now();
        saveGame();
    }

    // Проверка триггера на Радар базы (500 м) — СТРОГО ОТДЕЛЬНЫМ БЛОКОМ ПОСЛЕ:
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

btnOpenShop.addEventListener('click', () => shopModal.classList.remove('hidden'));
btnCloseShop.addEventListener('click', () => shopModal.classList.add('hidden'));

function updateShopUI() {
    upgradeCost = getUpgradeCost('click', clickLevel);
    speakerCost = getUpgradeCost('speaker', speakerLevel);
    newtonCost = getUpgradeCost('newton', newtonLevel);

    if (uiCostClick) uiCostClick.innerText = upgradeCost;
    if (uiCostSpeaker) uiCostSpeaker.innerText = speakerCost;
    if (uiCostNewton) uiCostNewton.innerText = newtonCost;

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
        
        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
        uiClickPower.innerText = clickPower;

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
        
        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
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
        
        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
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
    common:    '#bdc3c7',
    rare:      '#3498db',
    epic:      '#9b59b6',
    legendary: '#f1c40f',
    special:   '#e74c3c'
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

    // Стили балок и перекладин в зависимости от типа кейса
    let leftRailCss = '';
    let rightRailCss = '';
    let rungCss = '';
    let rivetColor = '';
    let rivetGlow = '';

    if (caseId === 'iron') {
        // === ЖЕЛЕЗНЫЙ СЕЙФ: Шлифованная сталь + бирюзовые неоновые диоды ===
        leftRailCss = 'background: linear-gradient(to right, #2c3e50, #95a5a6 40%, #34495e); box-shadow: inset 2px 0 4px rgba(255,255,255,0.4), inset -2px 0 5px rgba(0,0,0,0.8); border-right: 1px solid #1a252f;';
        rightRailCss = 'background: linear-gradient(to right, #34495e, #95a5a6 60%, #2c3e50); box-shadow: inset -2px 0 4px rgba(255,255,255,0.4), inset 2px 0 5px rgba(0,0,0,0.8); border-left: 1px solid #1a252f;';
        rungCss = 'background: linear-gradient(to bottom, #ecf0f1 0%, #7f8c8d 45%, #2c3e50 100%); border-top: 1px solid #fff; border-bottom: 2px solid #111; box-shadow: 0 4px 8px rgba(0,0,0,0.85); border-radius: 3px;';
        rivetColor = '#00d2d3';
        rivetGlow = '0 0 6px #00d2d3';
    } else if (caseId === 'gold') {
        // === ЗОЛОТОЙ КЕЙС: Чистое золото + янтарно-рубиновые заклёпки и сияние ===
        leftRailCss = 'background: linear-gradient(to right, #b7791f, #fef08a 35%, #ffd700 70%, #78350f); box-shadow: inset 2px 0 5px rgba(255,255,255,0.8), 0 0 10px rgba(241,196,15,0.45); border-right: 1px solid #5c3000;';
        rightRailCss = 'background: linear-gradient(to right, #78350f, #ffd700 30%, #fef08a 65%, #b7791f); box-shadow: inset -2px 0 5px rgba(255,255,255,0.8), 0 0 10px rgba(241,196,15,0.45); border-left: 1px solid #5c3000;';
        rungCss = 'background: linear-gradient(to bottom, #fff9d2 0%, #f1c40f 40%, #e67e22 80%, #7e2a00 100%); border-top: 1.5px solid #ffffff; border-bottom: 2px solid #3d1400; box-shadow: 0 4px 10px rgba(0,0,0,0.9), 0 0 10px rgba(241,196,15,0.65); border-radius: 4px;';
        rivetColor = '#e74c3c';
        rivetGlow = '0 0 6px #e74c3c, inset 1px 1px 2px #fff';
    } else {
        // === ДЕРЕВЯННЫЙ ЯЩИК: Тёмный дуб с древесной текстурой ===
        leftRailCss = 'background: linear-gradient(to right, #3a2010, #6b4423 50%, #2d180b); box-shadow: inset 2px 0 4px rgba(0,0,0,0.8); border-right: 1px solid #1e0f06;';
        rightRailCss = 'background: linear-gradient(to right, #2d180b, #6b4423 50%, #3a2010); box-shadow: inset -2px 0 4px rgba(0,0,0,0.8); border-left: 1px solid #1e0f06;';
        rungCss = 'background: linear-gradient(to bottom, #a06331 0%, #6e3d17 50%, #3e1e07 100%); border-top: 1px solid rgba(255,255,255,0.25); border-bottom: 2px solid #1a0c04; box-shadow: 0 4px 6px rgba(0,0,0,0.85); border-radius: 2px;';
        rivetColor = '#2d180b';
        rivetGlow = 'inset 1px 1px 1px rgba(255,255,255,0.2)';
    }

    // Левая вертикальная балка
    const leftRail = document.createElement('div');
    leftRail.style.cssText = `position:absolute;left:4px;top:0;bottom:0;width:14px;${leftRailCss}`;
    // Заклёпка на левой балке
    const leftRivet = document.createElement('div');
    leftRivet.style.cssText = `position:absolute;bottom:9px;left:4px;width:6px;height:6px;border-radius:50%;background:${rivetColor};box-shadow:${rivetGlow};`;
    leftRail.appendChild(leftRivet);
    card.appendChild(leftRail);

    // Правая вертикальная балка
    const rightRail = document.createElement('div');
    rightRail.style.cssText = `position:absolute;right:4px;top:0;bottom:0;width:14px;${rightRailCss}`;
    // Заклёпка на правой балке
    const rightRivet = document.createElement('div');
    rightRivet.style.cssText = `position:absolute;bottom:9px;right:4px;width:6px;height:6px;border-radius:50%;background:${rivetColor};box-shadow:${rivetGlow};`;
    rightRail.appendChild(rightRivet);
    card.appendChild(rightRail);

    // Ступенька (перекладина)
    const rung = document.createElement('div');
    rung.style.cssText = `position:absolute;bottom:4px;left:14px;right:14px;height:16px;${rungCss}`;
    card.appendChild(rung);

    // Контент награды
    const content = document.createElement('div');
    content.style.cssText = 'display:flex;flex-direction:column;align-items:center;margin-bottom:14px;z-index:2;';

    if (item.type === 'nuts') {
        content.innerHTML = `
            <div style="font-size: 26px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));">🔩</div>
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
                particles.push({ x: canvas.width/2, y: canvas.height * 0.3, text: '✨ ДЖЕКПОТ: +1 🟡!', color: '#f1c40f', alpha: 2, speed: 1.5 });
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

            AudioEngine.play('jacpot', 0.8);
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.4,
                text: '+1 📦 ПОЛУЧЕН!',
                color: '#2ecc71',
                font: 'bold 24px sans-serif',
                alpha: 1.8,
                speed: 2
            });
            saveGame();
        }
    };
}

// 3. Запуск анимации вращения
let isGachaSpinning = false;

function startCaseOpening(caseId = 'wooden', isReroll = false) {
    // Сбрасываем флаг рекламы ТОЛЬКО если это новое открытие, а не реролл!
    if (!isReroll) {
        window._caseAdRerollUsed = false;
    }

    const modal = document.getElementById('gachaModal');
    const tape = document.getElementById('gachaTape');
    const claimBtn = document.getElementById('gachaClaimBtn');
    const title = document.getElementById('gachaTitle');

    if (casesModal) casesModal.classList.add('hidden');

    const caseData = CASES_DB[caseId] || CASES_DB.wooden;
    title.innerText = `Открываем: ${caseData.name}`;
    title.style.color = caseData.color;

    modal.style.display = 'flex';
    claimBtn.style.display = 'none';
    tape.innerHTML = '';
    isGachaSpinning = true;

    pendingPrize = rollLootFromCase(caseId);

    // Сборка 50 ступеней (теперь передаем caseId, чтобы рисовались железные/золотые перекладины!)
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

        // 1. Определение типа выигрыша
        if (pendingPrize.type === 'nuts') {
            title.innerText = `ВЫИГРЫШ: +${pendingPrize.amount} ГАЕК!`;
            title.style.color = '#f1c40f';
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

            // Вычисляем точную награду за повторку по редкости предмета
            const goldReward = DUPLICATE_GOLD_REWARDS[prizeRarity] || 5;

            if (isDuplicate) {
                // Пишем честную сумму в зависимости от редкости (5, 10, 35 или 150)
                title.innerText = `ПОВТОРКА: ${prizeName} (+${goldReward} 🟡)`;
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

// 2. Механика Неоновой лестницы
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
                startCaseOpening(caseId, window._caseAdRerollUsed); // сохраняем статус реролла
            };
            claimBtn.parentNode.insertBefore(rerollBtn, claimBtn.nextSibling);
        } else {
            neonRerollUsed = false;
        }

        // Реролл кейса за рекламу (СТРОГО 1 раз на ящик)
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
                    startCaseOpening(caseId, true); // <-- передаем isReroll = true!
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

    // Клик по фону: во время прокрутки — пропустить, после завершения — забрать награду
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
    const oldReroll = document.getElementById('btn-neon-reroll');
    if (oldReroll) oldReroll.remove();
    if (!pendingPrize) return;

    if (pendingPrize.type === 'nuts') {
        addNuts(pendingPrize.amount);
    } else if (pendingPrize.type === 'skin') {
        const id = pendingPrize.id;
        if (ownedSkins.includes(id)) {
            const rarity = LADDER_SKINS[id]?.rarity || 'common';
            goldenNuts += (DUPLICATE_GOLD_REWARDS[rarity] || 5);
        } else {
            ownedSkins.push(id);
        }
    } else if (pendingPrize.type === 'speaker') {
        const id = pendingPrize.id;
        if (ownedSpeakerSkins.includes(id)) {
            goldenNuts += 80;
        } else {
            ownedSpeakerSkins.push(id);
        }
    } else if (pendingPrize.type === 'newton') {
        const id = pendingPrize.id;
        if (ownedNewtonSkins.includes(id)) {
            goldenNuts += 80;
        } else {
            ownedNewtonSkins.push(id);
        }
    } else if (pendingPrize.type === 'talisman') {
        const id = pendingPrize.id;
        if (ownedTalismans.includes(id)) {
            goldenNuts += 60;
        } else {
            ownedTalismans.push(id);
            const regular = ['clover', 'horseshoe', 'paw', 'coin', 'star', 'key'];
            if (regular.every(t => ownedTalismans.includes(t)) && !ownedTalismans.includes('sock')) {
                ownedTalismans.push('sock');
                setTimeout(() => alert('🎉 НЕВЕРОЯТНО! Ты собрал все талисманы и открыл СЕКРЕТНЫЙ НОСОК (+50 к удаче)!'), 300);
            }
        }
    }

    uiNuts.innerText = `🔩 ${nuts}`;
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
            costLabel = `${actualPrice} 🔩`;
            canBuy = nuts >= actualPrice;
        } else if (c.priceType === 'goldenNuts') {
            costLabel = `${actualPrice} 🟡`;
            canBuy = goldenNuts >= actualPrice;
        }

        row.innerHTML = `
            <div>
                <div style="font-weight: bold; color: ${c.color}; font-size: 14px;">${c.name}</div>
                <div style="font-size: 11px; color: #bdc3c7;">Цена: ${costLabel} | У тебя: <b style="color:#fff;">${count} шт.</b></div>
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
                uiNuts.innerText = `🔩 ${nuts}`;
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

// Функция надевания обвесов и скинов
function equipItem(type, id, silent = false) {
    if (type === 'ladders') {
        if (!LADDER_SKINS[id]) return;
        currentSkinId = id;
        const skinData = LADDER_SKINS[id];
        ladderImg.src = skinData.file;

        const extraClick = (skinData.buffs && skinData.buffs.click) ? skinData.buffs.click : 0;
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
        currentTalisman = (currentTalisman === id) ? null : id;
        const slotTalisman = document.getElementById('slot-talisman');
        if (slotTalisman) {
            if (currentTalisman && TALISMANS[currentTalisman]) {
                slotTalisman.innerHTML = `<img src="${TALISMANS[currentTalisman].file}" style="width: 32px; height: 32px; object-fit: contain;">`;
            } else {
                slotTalisman.innerHTML = '';
            }
        }
    }

    // Звук играет только при ручном клике в инвентаре, а при загрузке молчит:
    if (!silent) AudioEngine.play('click', 0.5);
    renderInventory();
}

// Генерация описания баффов
const LADDER_DESC = {
    wood: 'Стартовая стремянка',
    banana: 'Каждый 5-й клик работает дважды',
    beer: '+5 к удаче',
    fire: '+7 к клику, -10 до ящика',
    fireman: '+15 к силе шаров',
    plastic: 'Шары бьют на 0.15с быстрее',
    rusty: '65% шанс +1 🔩 за клик',
    tape: '-10% цены магазина за метры',
    book: '+7 к удаче',
    cactus: '+20 колонка, +10 шары',
    cement: '+50% урон шаров (+0.3с пауза)',
    neon: 'Бесплатный реролл кейса',
    scratch: 'CPS > 4 включает комбо до x1.5',
    new_year: 'Подарки каждые 150-250 тапов',
    bone: 'Каждый клик считается за два',
    cyber: '+1 слот под аксессуары',
    golden: 'Сейф каждые 100 кликов',
    goth: '-20% скидка на всё',
    ice: 'Скольжение свайпом вверх',
    vine: '+40% ко всем доходам',
    marble: '25% шанс золотого кейса на 100 тапов',
    quant: '20% гаек в золото, -50 до кейса',
    ufo: 'Дроп бонусов раз в 60 секунд',
    mimic: '2 слота способностей лестниц',
    retro: 'Ловля монеток на 75–125 🔩',
    add_stair: 'Баффы рекламы +50% времени. Каждый ролик дополнительно даёт +20 🔩 и +1 🟡',
    storm: '+20 к клику (10% риск надлома)',
    strato: 'Колонка и шары на 30% быстрее',
    cosmo: 'Оффлайн-лимит до 3 часов',
    calendar_stair: '+10 к Удаче. +5% на легу в Золотом кейсе и 1% шанс леги из Железного сейфа',
    absolute: 'Все способности одновременно'
};

const SPEAKER_DESC = {
    old: 'Базовый пассивный бас',
    monster: '- 60 секунд к таймеру бесплатного ящика',
    cyber: 'Пассивно +25% к гайкам и золоту',
    cool: ' Каждый 3-й бас дает +1 🟡'
};

const NEWTON_DESC = {
    steel: 'Базовый авто-удар',
    billiard: 'Каждый 8-й удар: x2.5 высоты и +3-5 🔩',
    plasma: 'Каждый удар 2-го шара дает +1 🔩 (x1.5)',
    planet: 'Каждый удар дает +3 тапа в ящик (x2.0)'
};

function getItemBuffText(type, item) {
    if (type === 'ladders') {
        const id = Object.keys(LADDER_SKINS).find(k => LADDER_SKINS[k] === item);
        return LADDER_DESC[id] || 'Без эффектов';
    } 
    if (type === 'speakers') {
        const id = Object.keys(SPEAKER_SKINS).find(k => SPEAKER_SKINS[k] === item);
        return SPEAKER_DESC[id] || `Бас: x${item.buff?.mpsMult || 1.0}`;
    } 
    if (type === 'newton') {
        const id = Object.keys(NEWTON_SKINS).find(k => NEWTON_SKINS[k] === item);
        return NEWTON_DESC[id] || `Удар: x${item.buff?.powerMult || 1.0}`;
    } 
    if (type === 'talismans') {
        return `+${item.luck} к удаче`; // Как ты и просил
    }
    return '';
}

// Отрисовка списка предметов
// Отрисовка списка предметов инвентаря
function renderInventory() {
    if (!inventoryItemsList) return;
    inventoryItemsList.innerHTML = '';

    let itemsSource = {};
    let ownedList = [];
    let equippedId = null;

    if (currentInventoryTab === 'ladders') {
        itemsSource = LADDER_SKINS;
        ownedList = ownedSkins;
        equippedId = currentSkinId;
    } else if (currentInventoryTab === 'speakers') {
        itemsSource = SPEAKER_SKINS;
        ownedList = ownedSpeakerSkins;
        equippedId = currentSpeakerSkin;
    } else if (currentInventoryTab === 'newton') {
        itemsSource = NEWTON_SKINS;
        ownedList = ownedNewtonSkins;
        equippedId = currentNewtonSkin;
    } else if (currentInventoryTab === 'talismans') {
        itemsSource = TALISMANS;
        ownedList = ownedTalismans;
        equippedId = currentTalisman;
    }

    // Определяем следующий доступный для покупки талисман в цепочке
    let nextTalismanToBuy = null;
    if (currentInventoryTab === 'talismans') {
        nextTalismanToBuy = TALISMANS_ORDER.find(tId => !ownedTalismans.includes(tId));
    }

    const itemsKeys = (currentInventoryTab === 'talismans') ? TALISMANS_ORDER : Object.keys(itemsSource);

    for (let id of itemsKeys) {
        const item = itemsSource[id];
        if (!item) continue;

        const isOwned = ownedList.includes(id);
        const isEquipped = (equippedId === id);
        const rarityColor = RARITY_COLORS[item.rarity] || '#bdc3c7';

        const card = document.createElement('div');
        card.className = `inv-item-card ${isEquipped ? 'equipped' : ''}`;
        card.style.borderColor = isEquipped ? '#f1c40f' : (isOwned ? rarityColor : '#333');
        card.style.opacity = isOwned ? '1' : '0.65';

        const buffDesc = getItemBuffText(currentInventoryTab, item);
        const imgSrc = item.file || (currentInventoryTab === 'newton' ? '' : 'assets/wood_stair-removebg-preview.png');

        // Кнопка действия (Надеть / Снять / Купить / Закрыто)
        let actionBtnHtml = '';

        if (isEquipped) {
            actionBtnHtml = `<button class="btn-equip active">${currentInventoryTab === 'talismans' ? 'СНЯТЬ' : 'НАДЕТО'}</button>`;
        } else if (isOwned) {
            actionBtnHtml = `<button class="btn-equip available">Надеть</button>`;
        } else if (currentInventoryTab === 'talismans') {
            // Покупка талисманов по цепочке
            if (id === nextTalismanToBuy) {
                const canAfford = goldenNuts >= item.price;
                actionBtnHtml = `<button class="btn-equip buy-gear-btn" data-type="talismans" data-id="${id}" style="background: ${canAfford ? '#f1c40f' : '#555'}; color: #000;" ${!canAfford ? 'disabled' : ''}>${item.price} 🟡</button>`;
            } else {
                actionBtnHtml = `<button class="btn-equip locked" disabled>По очереди</button>`;
            }
        } else if (currentInventoryTab === 'speakers' || currentInventoryTab === 'newton') {
            // Прямая покупка обвесов за Гайки или Золото
            const isGold = item.priceType === 'goldenNuts';
            const canAfford = isGold ? (goldenNuts >= item.price) : (nuts >= item.price);
            const currencyIcon = isGold ? '🟡' : '🔩';
            const btnBg = canAfford ? (isGold ? '#f1c40f' : '#3498db') : '#555';
            const btnColor = isGold ? '#000' : '#fff';

            actionBtnHtml = `<button class="btn-equip buy-gear-btn" data-type="${currentInventoryTab}" data-id="${id}" style="background: ${btnBg}; color: ${btnColor}; font-weight: bold;" ${!canAfford ? 'disabled' : ''}>${item.price} ${currencyIcon}</button>`;
        } else {
            // Лестницы остаются закрытыми (выбиваются из сейфов/наград)
            actionBtnHtml = `<button class="btn-equip locked" disabled>Закрыто</button>`;
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
            <div>${actionBtnHtml}</div>
        `;

        // Клик по карточке надевает экипировку
        if (isOwned) {
            card.style.cursor = 'pointer';
            card.onclick = () => equipItem(currentInventoryTab, id);
        }

        // Покупка обвеса или талисмана
        const buyBtn = card.querySelector('.buy-gear-btn');
        if (buyBtn) {
            buyBtn.onclick = (e) => {
                e.stopPropagation();
                const bType = buyBtn.dataset.type;
                const bId = buyBtn.dataset.id;
                const targetItem = itemsSource[bId];
                if (!targetItem) return;

                const isGold = targetItem.priceType === 'goldenNuts';

                if (isGold && goldenNuts >= targetItem.price) {
                    goldenNuts -= targetItem.price;
                } else if (!isGold && nuts >= targetItem.price) {
                    nuts -= targetItem.price;
                } else {
                    return; // Недостаточно средств
                }

                // Добавляем предмет в соответствующий список
                if (bType === 'talismans') ownedTalismans.push(bId);
                else if (bType === 'speakers') ownedSpeakerSkins.push(bId);
                else if (bType === 'newton') ownedNewtonSkins.push(bId);

                AudioEngine.play('jacpot', 0.9);
                uiNuts.innerText = `🔩 ${nuts}`;
                if (typeof modalNutsVal !== 'undefined' && modalNutsVal) modalNutsVal.innerText = nuts;
                if (typeof modalGoldVal !== 'undefined' && modalGoldVal) modalGoldVal.innerText = goldenNuts;

                saveGame();
                renderInventory();
            };
        }

        inventoryItemsList.appendChild(card);
    }
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

    // 1. КРИТИЧЕСКИЕ ОКНА НАГРАД (Строго блокируют закрытие по Esc!)
    const milestoneModal = document.getElementById('milestone-modal');
    const calendarModal = document.getElementById('calendar-modal');
    const offlineModal = document.getElementById('offline-modal');
    const thankModal = document.getElementById('thank-you-modal');

    const isRewardModalOpen = 
        (milestoneModal && !milestoneModal.classList.contains('hidden')) ||
        (calendarModal && !calendarModal.classList.contains('hidden')) ||
        (offlineModal && !offlineModal.classList.contains('hidden')) ||
        (thankModal && !thankModal.classList.contains('hidden'));

    // Если открыто любое окно с наградой — Esc полностью игнорируется
    if (isRewardModalOpen) {
        return;
    }

    const custModal = document.getElementById('customization-modal');
    if (custModal) custModal.classList.add('hidden');

    const luckModal = document.getElementById('luck-modal');
    if (luckModal) luckModal.classList.add('hidden');

    // 2. Окно рулетки кейса
    const gachaModal = document.getElementById('gachaModal');
    const claimBtn = document.getElementById('gachaClaimBtn');
    if (gachaModal && gachaModal.style.display !== 'none') {
        AudioEngine.stop('jacpot'); // <-- Глушим при закрытии рулетки по Escape
        if (isGachaSpinning) {
            gachaModal.click(); // Пропустить прокрутку
        } else if (claimBtn && claimBtn.style.display !== 'none') {
            claimBtn.click(); // Забрать предмет
        }
        return;
    }

    // 3. ОБЫЧНЫЕ МЕНЮ (Их безопасно закрывать на Esc)
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
        settingsState,
        radarState,
        calendarState,
        isVip, hasAdFree, starterPack,
        adState,
        claimedMilestones, dailyDeal,
        activePlayBoxTimer, isTimedBoxReady,
        currentHeight, nuts, goldenNuts, boxesOwned,
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

    // Проверка и авто-открытие календаря на старте сессии (перенесли сюда, чтобы работало плавно)
    setTimeout(() => {
        if (checkDailyCalendarStatus()) {
            renderCalendarUI();
            const calModal = document.getElementById('calendar-modal');
            if (calModal) calModal.classList.remove('hidden');
        }
    }, 800);

    if (!saved) return false;

    try {
if (data.settingsState) {
    Object.assign(settingsState, data.settingsState);
    applySettingsUI();
}

        if (data.radarState) radarState = data.radarState;
        const data = JSON.parse(saved);
        
        // ВОТ ЗДЕСЬ ПРАВИЛЬНОЕ МЕСТО ДЛЯ ЗАГРУЗКИ КАЛЕНДАРЯ
        if (data.calendarState) calendarState = data.calendarState;
        
        isVip = data.isVip || false;
        hasAdFree = data.hasAdFree || false;
        if (data.starterPack) starterPack = data.starterPack;

        // 1. Восстанавливаем валюту и высоты
        currentHeight = data.currentHeight || 0;
        nuts = data.nuts || 0;
        goldenNuts = data.goldenNuts || 0;
        boxesOwned = data.boxesOwned || 0; 

        // ежедневная акция
        claimedMilestones = data.claimedMilestones || [];
        dailyDeal = data.dailyDeal || dailyDeal;

        // таймер беслпатного ящика
        activePlayBoxTimer = data.activePlayBoxTimer || 0;
        isTimedBoxReady = data.isTimedBoxReady || false;

        // 2. Восстанавливаем цепочку порогов ящика
        pityStage = data.pityStage || 0;
        clicksNeeded = data.clicksNeeded || getClicksNeeded(pityStage);
        clicksForBox = data.clicksForBox || 0;
        
        // 3. Восстанавливаем уровни прокачки
        clickLevel = data.clickLevel || 0;
        speakerLevel = data.speakerLevel || 0;
        newtonLevel = data.newtonLevel || 0;

        // 4. Восстанавливаем инвентарь
        if (data.userCases) Object.assign(userCases, data.userCases);
        if (data.ownedSkins) ownedSkins = data.ownedSkins;
        if (data.ownedSpeakerSkins) ownedSpeakerSkins = data.ownedSpeakerSkins;
        if (data.ownedNewtonSkins) ownedNewtonSkins = data.ownedNewtonSkins;
        if (data.ownedTalismans) ownedTalismans = data.ownedTalismans;

        // 5. Восстанавливаем экипированные скины
        currentSkinId = data.currentSkinId || 'wood';
        currentSpeakerSkin = data.currentSpeakerSkin || 'old';
        currentNewtonSkin = data.currentNewtonSkin || 'steel';
        currentTalisman = data.currentTalisman || null;

        // 6. Пересчитываем характеристики (ровно один раз)
        baseClickPower = UPGRADES_CONFIG.click.basePower + (clickLevel * UPGRADES_CONFIG.click.powerPerLevel);
        speakerMPS = UPGRADES_CONFIG.speaker.basePower + (speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel);
        newtonPower = UPGRADES_CONFIG.newton.basePower + (newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel);
        newtonSpeed = Math.max(500, 3000 - (newtonLevel * 130));

        // 7. Надеваем предметы тихо (без щелчков звука)
        equipItem('ladders', currentSkinId, true);
        equipItem('speakers', currentSpeakerSkin, true);
        equipItem('newton', currentNewtonSkin, true);
        if (currentTalisman) equipItem('talismans', currentTalisman, true);

        // 8. Обновляем все элементы интерфейса
        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
        uiNuts.innerText = `🔩 ${nuts}`;
        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
        if (uiLvlSpeaker) uiLvlSpeaker.innerText = speakerLevel;
        if (lvlSpeakerDisplay) lvlSpeakerDisplay.innerText = speakerLevel;
        if (uiLvlNewton) uiLvlNewton.innerText = newtonLevel;
        if (lvlNewtonDisplay) lvlNewtonDisplay.innerText = newtonLevel;
        
        // 9. Синхронизируем полоску прогресса ящика
        if (uiBoxText) {
            uiBoxText.innerText = `${clicksForBox}/${clicksNeeded}`;
        }
        if (uiBoxProgress) {
            uiBoxProgress.style.height = `${Math.min(100, (clicksForBox / clicksNeeded) * 100)}%`;
        }

        // Обновляем текст кнопки стрика [🎬 0/10]
        const streakBtnText = document.getElementById('ad-streak-btn-text');
        if (streakBtnText) streakBtnText.innerText = `${adState.streakCount}/10`;

        // РАСЧЁТ ОФФЛАЙНА (Пункт 11) - Должен быть в самом конце, когда все скины загружены!
        const now = Date.now();
        const lastTime = data.lastSaveTime || now;
        const offlineMs = Math.max(0, now - lastTime);

        // Порог срабатывания: 60 секунд
        if (offlineMs > 60000) {
            // Капы: 30 минут база, 3 часа Космос
            const isCosmo = (data.currentSkinId === 'cosmo');
            const maxOfflineMs = isCosmo ? 3 * 3600000 : 30 * 60000;
            const effectiveMs = Math.min(offlineMs, maxOfflineMs);
            const seconds = effectiveMs / 1000;

            const skin = LADDER_SKINS[data.currentSkinId] || { buffs: {} };
            
            // 1. Метры Колонки
            let realMPS = 0;
            if (data.speakerLevel > 0) {
                realMPS = Math.floor(((UPGRADES_CONFIG.speaker.basePower + (data.speakerLevel * UPGRADES_CONFIG.speaker.powerPerLevel)) + (skin.buffs.speakerAdd || 0)) * (SPEAKER_SKINS[data.currentSpeakerSkin]?.buff?.mpsMult || 1.0));
                if (hasMech('vine')) realMPS = Math.round(realMPS * 1.4);
            }
            const offSpeakerMeters = Math.floor(realMPS * seconds);

            // 2. Метры Шаров Ньютона
            let offNewtonMeters = 0;
            if (data.newtonLevel > 0) {
                let actualNSpeed = Math.max(500, 3000 - (data.newtonLevel * 130));
                if (hasMech('plastic')) actualNSpeed = Math.max(200, actualNSpeed - 150);
                if (hasMech('cement')) actualNSpeed += 300;

                let realHit = Math.floor(((UPGRADES_CONFIG.newton.basePower + (data.newtonLevel * UPGRADES_CONFIG.newton.powerPerLevel)) + (skin.buffs.newtonAdd||0)) * (NEWTON_SKINS[data.currentNewtonSkin]?.buff?.powerMult||1.0) * (skin.buffs.newtonMult||1.0));
                if (hasMech('vine')) realHit = Math.round(realHit * 1.4);

                // 2 удара за цикл
                const hits = Math.floor(effectiveMs / actualNSpeed) * 2; 
                offNewtonMeters = hits * realHit;
            }

            // 3. Ящики (1 ящик в 10 минут)
            let offCases = Math.floor(effectiveMs / 600000);
            offCases = Math.min(offCases, isCosmo ? 8 : 3);
            const totalOffMeters = offSpeakerMeters + offNewtonMeters;

            if (totalOffMeters > 0 || offCases > 0) {
                setTimeout(() => {
                    const offModal = document.getElementById('offline-modal');
                    
                    // Заполняем UI
                    const offMin = Math.floor(effectiveMs / 60000);
                    const offSec = Math.floor((effectiveMs % 60000) / 1000);
                    document.getElementById('off-time-txt').innerText = `${offMin}м ${offSec}с`;
                    document.getElementById('off-limit-txt').innerText = isCosmo ? '3 часа' : '30 мин';
                    
                    document.getElementById('off-speaker-txt').innerText = `+${offSpeakerMeters} м`;
                    document.getElementById('off-newton-txt').innerText = `+${offNewtonMeters} м`;
                    document.getElementById('off-cases-txt').innerText = `${offCases} шт.`;
                    document.getElementById('off-total-txt').innerText = `+${totalOffMeters} м`;

                    const btnClaim2x = document.getElementById('btn-claim-offline-x2');
                    btnClaim2x.innerText = `▶ Забрать x2 (+${totalOffMeters * 2} м, ${offCases * 2} 📦)`;

                    offModal.classList.remove('hidden');

                    // Кнопки
                    document.getElementById('btn-claim-offline-normal').onclick = () => {
                        currentHeight += totalOffMeters;
                        boxesOwned += offCases;
                        userCases.wooden = boxesOwned;
                        heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
                        if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                        offModal.classList.add('hidden');
                        saveGame();
                    };

                    btnClaim2x.onclick = () => {
                        watchRewardedAd('offline_x2', () => {
                            currentHeight += (totalOffMeters * 2);
                            boxesOwned += (offCases * 2);
                            userCases.wooden = boxesOwned;
                            heightDisplay.innerText = `${Math.floor(currentHeight)} м`;
                            if (uiCasesCount) uiCasesCount.innerText = boxesOwned;
                            offModal.classList.add('hidden');
                            saveGame();
                        });
                    };
                }, 500);
            }
        }
        checkDeepLinks();
        updateFieldIcons();
        return true;
    } catch (e) {
        console.error("Ошибка при загрузке сохранения:", e);
        return false;
    }
}

// === КОНФИГУРАЦИЯ И ЛОГИКА РЕКЛАМНОГО СТРИКА (1-10) ===
const AD_STREAK_REWARDS = [
    { step: 1, title: '+300 🔩 Гаек', icon: '🔩', type: 'nuts', amount: 300 },
    { step: 2, title: '+20 🍀 Удача (15 мин)', icon: '🍀', type: 'buff_luck', durationMin: 15, luckAmount: 20 },
    { step: 3, title: '+5 🟡 Золотые гайки', icon: '🟡', type: 'gold', amount: 5 },
    { step: 4, title: '+600 🔩 Гаек', icon: '🔩', type: 'nuts', amount: 600 },
    { step: 5, title: '🧰 Железный сейф', icon: '🧰', type: 'case', caseId: 'iron', amount: 1 },
    { step: 6, title: '🔥 Турбо x3 (3 мин)', icon: '🔥', type: 'buff_turbo', durationSec: 180 },
    { step: 7, title: '+15 🟡 Золотые гайки', icon: '🟡', type: 'gold', amount: 15 },
    { step: 8, title: '+1 000 🔩 Гаек', icon: '🔩', type: 'nuts', amount: 1000 },
    { step: 9, title: '+25 🟡 Золотые гайки', icon: '🟡', type: 'gold', amount: 25 },
    { step: 10, title: '🪜 Скин «Билборд» (Epic)', icon: '⭐', type: 'skin', skinId: 'add_stair' }
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
            btnHtml = `<span style="color: #7f8c8d; font-size: 11px;">🔒 ${r.step} ролик</span>`;
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
    const msLeft = Math.max(0, midnight - now);

    const h = String(Math.floor(msLeft / 3600000)).padStart(2, '0');
    const m = String(Math.floor((msLeft % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((msLeft % 60000) / 1000)).padStart(2, '0');

    const timerEl = document.getElementById('ad-streak-timer');
    if (timerEl) timerEl.innerText = `${h}:${m}:${s}`;
}, 1000);

function refreshDailyDeal(force = false) {
    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;

    // Обновляем, только если прошли 24 часа или нажат принудительный реролл
    if (!force && dailyDeal.id && (now - dailyDeal.lastRefresh < DAY_MS)) {
        return;
    }

    const roll = Math.random() * 100;
    const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;
    const canLegendary = (now - dailyDeal.lastLegendaryBuy) >= fiveDaysMs;

    // 10% — Legendary скин лестницы
    if (roll < 10 && canLegendary) {
        const legSkins = Object.keys(LADDER_SKINS).filter(k => LADDER_SKINS[k].rarity === 'legendary');
        const chosen = legSkins[Math.floor(Math.random() * legSkins.length)];
        dailyDeal = { ...dailyDeal, type: 'skin', id: chosen, basePrice: 450, salePrice: 219, lastRefresh: now };
    } 
    // 15% — Талисман со скидкой 30%
    else if (roll < 25) {
        const allTalismans = Object.keys(TALISMANS);
        const chosen = allTalismans[Math.floor(Math.random() * allTalismans.length)];
        const base = TALISMANS[chosen].price;
        dailyDeal = { ...dailyDeal, type: 'talisman', id: chosen, basePrice: base, salePrice: Math.floor(base * 0.7), lastRefresh: now };
    } 
    // 75% — Epic скин лестницы
    else {
        // Исключаем Календарь и Билборд, так как они выдаются только за прогресс
const epicSkins = Object.keys(LADDER_SKINS).filter(k => LADDER_SKINS[k].rarity === 'epic' && k !== 'calendar_ladder' && k !== 'add_stair');
        const chosen = epicSkins[Math.floor(Math.random() * epicSkins.length)];
        dailyDeal = { ...dailyDeal, type: 'skin', id: chosen, basePrice: 220, salePrice: 119, lastRefresh: now };
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
            safeTimerEl.innerText = `${Math.floor(leftSafe/60000)}:${String(Math.floor((leftSafe%60000)/1000)).padStart(2,'0')}`;
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
            nutsTimerEl.innerText = `${Math.floor(leftNuts/60000)}:${String(Math.floor((leftNuts%60000)/1000)).padStart(2,'0')}`;
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
                goldenNuts -= dailyDeal.salePrice;
                if (dailyDeal.type === 'skin') {
                    ownedSkins.push(dailyDeal.id);
                    if (itemData.rarity === 'legendary') dailyDeal.lastLegendaryBuy = Date.now();
                } else {
                    ownedTalismans.push(dailyDeal.id);
                }

                AudioEngine.play('jacpot', 1.0);
                saveGame();
                renderDailyDealUI();
                if (typeof renderInventory === 'function') renderInventory();
            } else {
                alert(`Вам не хватает ${dailyDeal.salePrice - goldenNuts} 🟡. Здесь откроется просмотр рекламы/магазин.`);
            }
        };
    }

    // 5. Кулдаун реролла с иконкой 🔄
    if (rerollBtn) {
        const FOUR_HOURS = 4 * 60 * 60 * 1000;
        const rerollLeft = FOUR_HOURS - (Date.now() - dailyDeal.lastAdReroll);
        if (rerollLeft > 0) {
            const rh = Math.floor(rerollLeft / 3600000);
            const rm = Math.floor((rerollLeft % 3600000) / 60000);
            rerollBtn.innerText = `🔄 Обновление через ${rh}ч ${rm}м`;
            rerollBtn.disabled = true;
            rerollBtn.style.opacity = '0.4';
            rerollBtn.style.cursor = 'default';
        } else {
            rerollBtn.innerText = '🔄 Обновить (Реклама)';
            rerollBtn.disabled = false;
            rerollBtn.style.opacity = '1';
            rerollBtn.style.cursor = 'pointer';
            rerollBtn.onclick = () => {
                dailyDeal.lastAdReroll = Date.now();
                refreshDailyDeal(true);
                renderDailyDealUI();
            };
        }
    }
}


// === ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ (7 ДНЕЙ) ===
const CALENDAR_REWARDS = [
    { day: 1, text: '+300 🔩', icon: '🔩', type: 'nuts', amount: 300 },
    { day: 2, text: '2 📦 Кейса', icon: '📦', type: 'case', caseId: 'wooden', amount: 2 },
    { day: 3, text: '+10 🟡', icon: '🟡', type: 'gold', amount: 10 },
    { day: 4, text: '+800 🔩', icon: '🔩', type: 'nuts', amount: 800 },
    { day: 5, text: '1 🧰 Сейф', icon: '🧰', type: 'case', caseId: 'iron', amount: 1 },
    { day: 6, text: '+25 🟡', icon: '🟡', type: 'gold', amount: 25 },
    { day: 7, text: 'Скин «Календарь»', icon: '🪜', type: 'skin', skinId: 'calendar_stair' }
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
        const day7Desc = isLoopCycle ? '+75 🟡 и 1 🧰 Железный сейф' : 'Скин «Календарь» (Epic)';
        const day7Icon = isLoopCycle ? '🧰' : '🪜';

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
            day7Action.innerHTML = `<span style="color: #7f8c8d; font-size: 11px;">🔒 День 7</span>`;
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
            text: `📅 День ${day} получен!`,
            color: '#f1c40f',
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
                if (typeof renderInventory === 'function') renderInventory();
            }
            particles.push({
                x: canvas.width / 2,
                y: canvas.height * 0.4,
                text: '🎉 ПОЛУЧЕН СКИН КАЛЕНДАРЬ!',
                color: '#e74c3c',
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
                text: `🎁 +${75 * mult} 🟡 и +${1 * mult} 🧰!`,
                color: '#f1c40f',
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

// Активация Гайкопада (С рекламой)
function activateFrenzyMode(seconds = 30) {
    watchRewardedAd('frenzy_nuts', () => {
        const mult = hasMech('billboard') ? 1.5 : 1.0;
        adState.frenzyTimer = seconds * 1000 * mult;
        particles.push({ x: canvas.width/2, y: canvas.height * 0.35, text: '⚡ ГАЙКОПАД!', color: '#f1c40f', font: 'bold 26px sans-serif', alpha: 2.5, speed: 1.5 });
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
        if (ms >= 60000) return `${Math.floor(ms/60000)}:${String(Math.floor((ms%60000)/1000)).padStart(2,'0')}`;
        return `${Math.ceil(ms/1000)}с`;
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
    const timeLeft = Math.max(0, (24 * 60 * 60 * 1000) - (Date.now() - dailyDeal.lastRefresh));

    // Если 24 часа закончились прямо с открытым окном — перегенерируем товар
    if (timeLeft <= 0) {
        refreshDailyDeal(true);
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
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveGame();
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
        AudioEngine.play('jacpot', 1.0);
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

// Обработка клика по пушу (Deep Linking через параметры URL ?action=...)
function checkDeepLinks() {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');

    if (!action) return;

    setTimeout(() => {
        if (action === 'deal' && dailyDealModal) {
            dailyDealModal.classList.remove('hidden');
            renderDailyDealUI();
        } else if (action === 'gift') {
            addNuts(500);
            AudioEngine.play('jacpot', 1.0);
            particles.push({ x: canvas.width/2, y: canvas.height*0.35, text: '🎁 ВОЗВРАЩЕНИЕ: +500 🔩!', color: '#3498db', alpha: 2.5, speed: 2 });
        }
    }, 1000);
}

// === СИСТЕМА ЛИДЕРБОРДА, ТРОТТЛИНГА И СЕЗОНОВ ===
let lastSubmittedHeight = 0;
let lastLeaderboardSubmitTime = 0;
let currentLeaderboardTab = 'all'; // 'all' | 'week'

// Защищенная отправка счета с валидацией и троттлингом (Sanity Check)
function submitScoreToLeaderboard(force = false) {
    const now = Date.now();
    const intScore = Math.floor(currentHeight);

    // 1. Sanity Check (защита от читеров и мусора)
    if (intScore <= 0 || intScore > 500000000) return;
    if (intScore <= lastSubmittedHeight && !force) return;

    // 2. Троттлинг: не чаще 1 раза в 60 секунд, если это не важный рубеж
    if (!force && (now - lastLeaderboardSubmitTime < 60000)) return;

    lastLeaderboardSubmitTime = now;
    lastSubmittedHeight = intScore;

    // 3. Отправка в SDK Яндекс Игр / VK (заглушка готова для прода)
    if (window.ysdk && window.ysdk.getLeaderboards) {
        window.ysdk.getLeaderboards().then(lb => {
            const table = currentLeaderboardTab === 'week' ? 'season_height' : 'all_time_height';
            lb.setLeaderboardScore(table, intScore);
        }).catch(err => console.warn('[Leaderboard] Ошибка отправки:', err));
    }

    console.log(`[Leaderboard] Очки отправлены: ${intScore} м (force=${force})`);
}

// Демо-игроки для оживления рейтинга
const MOCK_LEADERS = {
    all: [
        { rank: 1, name: 'CyberStair', score: 145000, isVip: true },
        { rank: 2, name: 'CosmoClimber', score: 98200, isVip: true },
        { rank: 3, name: 'ApexStriker', score: 64100, isVip: false },
        { rank: 4, name: 'SkyWalker', score: 32000, isVip: false },
        { rank: 5, name: 'StepMaster', score: 12500, isVip: false }
    ],
    week: [
        { rank: 1, name: 'SpeedyTap', score: 18400, isVip: true },
        { rank: 2, name: 'Newbie2026', score: 11200, isVip: false },
        { rank: 3, name: 'StarFall', score: 7800, isVip: false },
        { rank: 4, name: 'LadderHero', score: 4500, isVip: false },
        { rank: 5, name: 'Volt', score: 2100, isVip: false }
    ]
};

// Отрисовка интерфейса Лидерборда
function renderLeaderboardUI() {
    const listEl = document.getElementById('leaderboard-list');
    const playerCardEl = document.getElementById('lb-player-card');
    const descEl = document.getElementById('lb-season-desc');
    if (!listEl) return;

    listEl.innerHTML = '';
    descEl.innerText = currentLeaderboardTab === 'all' 
        ? 'Общий рейтинг покорителей космоса' 
        : 'Сброс каждый понедельник в 00:00';

    const leaders = MOCK_LEADERS[currentLeaderboardTab] || [];
    const myScore = Math.floor(currentHeight);

    // Отрисовка списка топа
    leaders.forEach(p => {
        const row = document.createElement('div');
        const vipClass = p.isVip ? 'border: 1px solid #f1c40f; box-shadow: 0 0 6px rgba(241,196,15,0.3);' : 'border: 1px solid #34495e;';
        
        row.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(30, 39, 46, 0.85); padding: 8px 10px; border-radius: 8px; font-size: 12px;
            ${vipClass}
        `;

        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: bold; width: 20px; color: ${p.rank <= 3 ? '#f1c40f' : '#bdc3c7'};">#${p.rank}</span>
                <span style="color: ${p.isVip ? '#f1c40f' : '#fff'}; font-weight: ${p.isVip ? 'bold' : 'normal'};">
                    ${p.isVip ? '👑 ' : ''}${p.name}
                </span>
            </div>
            <b style="color: #3498db;">${p.score.toLocaleString()} м</b>
        `;
        listEl.appendChild(row);
    });

    // Карточка самого игрока внизу
    if (playerCardEl) {
        playerCardEl.style.borderColor = isVip ? '#f1c40f' : '#3498db';
        playerCardEl.style.boxShadow = isVip ? '0 0 10px rgba(241,196,15,0.4)' : 'none';

        playerCardEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: bold; color: #f1c40f;">Ты</span>
                <span style="color: ${isVip ? '#f1c40f' : '#fff'}; font-weight: bold;">
                    ${isVip ? '👑 ' : ''}Игрок ${isVip ? '(VIP)' : ''}
                </span>
            </div>
            <b style="color: #f1c40f; font-size: 13px;">${myScore.toLocaleString()} м</b>
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

const sliderMusic = document.getElementById('slider-music');
const sliderTap = document.getElementById('slider-tap');
const sliderSfx = document.getElementById('slider-sfx');
const toggleVibrate = document.getElementById('toggle-vibrate');

const valMusic = document.getElementById('val-music');
const valTap = document.getElementById('val-tap');
const valSfx = document.getElementById('val-sfx');

function applySettingsUI() {
    if (sliderMusic) sliderMusic.value = settingsState.musicVol;
    if (sliderTap) sliderTap.value = settingsState.tapVol;
    if (sliderSfx) sliderSfx.value = settingsState.sfxVol;
    if (toggleVibrate) toggleVibrate.checked = settingsState.vibrate;

    if (valMusic) valMusic.innerText = `${Math.round(settingsState.musicVol * 100)}%`;
    if (valTap) valTap.innerText = `${Math.round(settingsState.tapVol * 100)}%`;
    if (valSfx) valSfx.innerText = `${Math.round(settingsState.sfxVol * 100)}%`;

    if (AudioEngine.bgm) AudioEngine.bgm.volume = settingsState.musicVol;
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
    popup.innerText = '+📦 КЕЙС!';
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
function activateBuffDirectly(type, durationMs) {
    if (typeof adState === 'undefined') window.adState = {};

    // Выставляем таймер в миллисекундах (как считает весь остальной game.js)
    if (type === 'fortune') adState.fortuneTimer = durationMs;
    if (type === 'turbo') adState.turboTimer = durationMs;
    if (type === 'frenzy') adState.frenzyTimer = durationMs;

    if (typeof AudioEngine !== 'undefined') AudioEngine.play('jacpot', 1.0);
    if (typeof saveGame === 'function') saveGame();

    if (buffsDrawer) buffsDrawer.style.transform = 'translateX(105%)';
}

// Покупка за ЗОЛОТО (10 мин = 600 000 мс, 1 мин = 60 000 мс, 30 сек = 30 000 мс)
const bindBuffGoldAction = (btnId, cost, durationMs, type) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.onclick = (e) => {
        e.stopPropagation();
        if (goldenNuts >= cost) {
            goldenNuts -= cost;
            activateBuffDirectly(type, durationMs);
        } else {
            alert('Недостаточно золотых гаек 🟡');
        }
    };
};
bindBuffGoldAction('btn-buy-buff-fortune-gold', 15, 600000, 'fortune');
bindBuffGoldAction('btn-buy-buff-turbo-gold', 15, 60000, 'turbo');
bindBuffGoldAction('btn-buy-buff-frenzy-gold', 15, 30000, 'frenzy');

// Покупка за РЕКЛАМУ
const bindBuffAdAction = (btnId, durationMs, type, fallbackBtnId) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.onclick = (e) => {
        e.stopPropagation();
        const oldBtn = document.getElementById(fallbackBtnId);
        if (oldBtn) {
            oldBtn.click();
        } else {
            if (typeof adState === 'undefined') window.adState = {};
            adState.streakCount = Math.min(10, (adState.streakCount || 0) + 1);
            activateBuffDirectly(type, durationMs);
        }
        if (buffsDrawer) buffsDrawer.style.transform = 'translateX(105%)';
    };
};
bindBuffAdAction('btn-buy-buff-fortune-ad', 600000, 'fortune', 'btn-boost-fortune');
bindBuffAdAction('btn-buy-buff-turbo-ad', 60000, 'turbo', 'btn-boost-turbo');
bindBuffAdAction('btn-buy-buff-frenzy-ad', 30000, 'frenzy', 'btn-boost-frenzy');

// ==========================================================
// === КРУГЛЫЕ ЗНАЧКИ (ЧЕСТНЫЕ СЕКУНДЫ) И СТРИК =============
// ==========================================================
function updateActiveBuffsDisplay() {
    if (typeof adState === 'undefined') return;

    const dock = document.getElementById('active-buffs-dock');
    if (!dock) return;

    // Конфиг в миллисекундах (max: 600 000, 60 000, 30 000)
    const buffs = [
        { type: 'fortune', timer: adState.fortuneTimer || 0, max: 600000, icon: '🍀', color: '#2ecc71' },
        { type: 'turbo', timer: adState.turboTimer || 0, max: 60000, icon: '🔥', color: '#e67e22' },
        { type: 'frenzy', timer: adState.frenzyTimer || 0, max: 30000, icon: '⚡', color: '#f1c40f' }
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
                <span class="buff-badge-emoji">${b.icon}</span>
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


// --- ИНИЦИАЛИЗАЦИЯ ИГРЫ ПРИ СТАРТЕ ---
loadGame();      // Сначала грузим сейв
updateShopUI();  // Затем пересчитываем и рисуем цены в магазине