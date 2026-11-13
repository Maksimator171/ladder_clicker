// ═══════════════════════════════════════════════════════════════
//  TRANSLATIONS.JS — Единый словарь всех строк проекта (i18n)
//  Ключи иерархические: ui.shop.title, ladder.banana.name и т.д.
//  Динамические значения обозначены {placeholders}.
//  HTML-теги (<img>, <b>, <span>) сохранены как есть.
// ═══════════════════════════════════════════════════════════════

const TRANSLATIONS = {
    ru: {

        // ═══════════════════════════════════════
        //  ОБЩИЕ / ГЛОБАЛЬНЫЕ
        // ═══════════════════════════════════════
        game: {
            title: 'Космическая Стремянка',
            version: 'Космическая Стремянка v1.0.0',
            height_display: '{height} м',
            height_short: '{height} м',
        }, 
        assets: {
            top_btn: 'assets/top.webp',
            starter_banner: 'assets/starter_pack_ru.webp',
            bank_banner: 'assets/bank_window2.webp',
        },

        // ═══════════════════════════════════════
        //  ЕДИНИЦЫ ИЗМЕРЕНИЯ
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} м/клик',
            meters_per_sec: '{value} м/с',
            meters_per_hit: '{value} м/уд',
            level: 'Ур. {level}',
            seconds_short: '{value}с',
            meters: '{value} м',
            meters_plus: '+{value} м',
            pieces: '{count} шт.',
            min_sec: '{min}м {sec}с',
            meters_per_click_short: 'м/клик',
            meters_per_sec_short: 'м/с',
            meters_per_hit_short: 'м/уд',
            level_short: 'Ур.',
            meters_unit: 'м',
        },

        // ═══════════════════════════════════════
        //  ВЕРХНИЙ UI (HUD)
        // ═══════════════════════════════════════
        ui: {
            // --- Валюты и верхняя панель ---
            gold_tooltip: 'Пополнить золото',
            donate_btn: 'Донат',
            deal_btn: 'Акция',
            top_btn_aria: 'Зал Славы',
            zen_title: 'Дзен-режим (Скрыть UI)',
            rewards_btn: 'Награды',
            rewards_count: '{current}/10',
            buffs_btn: 'БАФФЫ',

            // --- Кнопки нижнего ряда ---
            shop_btn: 'МАГАЗИН',
            skins_btn: 'Скины',
            cases_btn_label: 'Кейсы:',
            free_box_label: 'Беспл:',

            // --- Общие кнопки ---
            close_btn: '✕',
            close_aria: 'Закрыть',
            cancel_btn: 'Отмена',
            buy_btn: 'Купить',
            claim_btn: 'Забрать',
            equip_btn: 'Надеть',
            equipped_badge: 'НАДЕТО',
            later_btn: 'Позже',
            not_now_btn: 'Не сейчас',
            excellent_btn: 'ОТЛИЧНО!',
            forward_btn: 'ВПЕРЁД К ВЕРШИНЕ',
            claim_and_equip_btn: 'ЗАБРАТЬ И НАДЕТЬ',
            just_claim_btn: 'Отлично, забрать!',
            selected_btn: 'ВЫБРАНО',
            buy_for: 'КУПИТЬ ЗА {price} {currency}',
        },

        // ═══════════════════════════════════════
        //  МАГАЗИН (Черный Рынок)
        // ═══════════════════════════════════════
        shop: {
            title: 'Черный Рынок',
            buy_label: 'КУПИТЬ',
            // --- Товары ---
            click_title: 'УДАР',
            speaker_title: 'САБВУФЕР',
            newton_title: 'ШАРЫ НЬЮТОНА',
            cost_suffix: '{cost} м',
        },

        // ═══════════════════════════════════════
        //  ШТОРКА БАФФОВ
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ УСИЛИТЕЛИ',
            ad_btn: 'Реклама',

            fortune_name: 'УДАЧА',
            fortune_desc: '+15 к показателю удачи',
            turbo_name: 'ТУРБО-ДОХОД',
            turbo_desc: 'x3 ко всем источникам дохода',
            frenzy_name: 'ГАЙКОПАД',
            frenzy_desc: 'Гайки летят градом с неба',
            autotap_name: 'АВТОПИЛОТ',
            autotap_desc: 'Авто-клики 15 раз/сек по лестнице',
            timewarp_name: 'МАШИНА ВРЕМЕНИ',
            timewarp_desc: 'Доход за 5 минут пассивного фарма',
            timewarp_instant: 'Мгновенно',
            ufo_name: 'МАГНИТ НЛО',
            ufo_desc: 'Притягивает контейнер с ресурсами',
            ufo_summon: 'Призыв',
        },

        // ═══════════════════════════════════════
        //  ИНВЕНТАРЬ
        // ═══════════════════════════════════════
        inventory: {
            title: 'Инвентарь снаряжения',
            tab_ladders: 'Лестницы',
            tab_speakers: 'Колонки',
            tab_newton: 'Шарики',
            tab_talismans: 'Брелки',
            available_skins: 'Доступные скины:',
            no_effects: 'Без эффектов',
            default_ladder_desc: 'Базовые свойства лестницы',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Облик',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Эффект',
            equipped_btn: 'НАДЕТО',
            unequip_btn: 'СНЯТЬ',
            equip_btn: 'Надеть',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> По очереди',
            fully_equipped: '✔ ПОЛНОСТЬЮ НАДЕТО',
            equip_all: 'ЭКИПИРОВАТЬ ВСЁ',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Облик надет ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Только облик',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Эффект надет ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Только эффект',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Предмет не открыт',
            mimic_setup: '⚙️ Настроить слоты ({slot0}, {slot1})',
            cyber_setup: '🦾 Настроить доп. слот',
            item_fallback: 'Предмет',
            luck_plus: '+{luck} к удаче',
            slot_empty: 'Пусто',
            slot_default: 'Базовые свойства',
            slot_1_selected: '✔ Слот 1',
            slot_2_selected: '✔ Слот 2',
            select_action: '+ Выбрать',
            cyber_installed: '✔ Установлено',
        },

        // ═══════════════════════════════════════
        //  КАСТОМИЗАЦИЯ (Колонки/Шары)
        // ═══════════════════════════════════════
        customization: {
            title: 'Настройка',
            base_level: 'Уровень базы: {level}',
            base_level_prefix: 'Уровень базы:',
            power: 'Мощь: {value}',
            power_mps: 'Мощь: {value} м/сек',
            upgrade_btn: 'Улучшить',
            speakers_title: '📻 Колонки',
            newton_title: '⚪ Шары Ньютона',
            hit_power: 'Удар: {power} м ({speed}с)',
            upgrade_cost: 'Улучшить: {cost} м',
        },

        // ═══════════════════════════════════════
        //  КИБЕРПАНК
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Слот Киберпанка',
            desc: 'Выберите 1 дополнительный эффект любого открытого аксессуара (Колонки, Шаров или Брелока):',
            tab_speakers: 'Колонки',
            tab_newton: 'Шарики',
            tab_talismans: 'Брелки',
            install_btn: 'Установить имплант',
        },

        // ═══════════════════════════════════════
        //  МИМИК
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Способности Мимика',
            desc: 'Выберите 2 любые открытые лестницы для копирования их пассивок:',
            slot1: 'Слот 1',
            slot2: 'Слот 2',
            apply_btn: 'Применить способности',
        },

        // ═══════════════════════════════════════
        //  ПОДТВЕРЖДЕНИЕ ПОКУПКИ
        // ═══════════════════════════════════════
        confirm: {
            title: 'Подтверждение',
            desc: 'Потратить золото?',
            buy_btn: 'Купить ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: 'Купить',
            buff_title: 'Активация усиления',
            buff_desc: 'Потратить {cost} <img src="assets/golden_nut.webp" class="ui-ico"> на активацию эффекта?',
            not_enough_gold: 'Недостаточно золотых гаек',
            gear_title: 'Покупка обвеса',
            gear_desc: 'Купить "{name}" за {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            talisman_title: 'Новый талисман',
            talisman_desc: 'Купить талисман "{name}" за {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            deal_title: 'Сделка дня',
            deal_desc: 'Купить "{name}" за {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            item_title: 'Покупка предмета',
            item_desc: 'Купить «{name}» за {price}?',
            ufo_desc: 'Потратить 39 <img src="assets/golden_nut.webp" class="ui-ico"> на призыв НЛО?',
        },

        // ═══════════════════════════════════════
        //  ДОНАТ / ЗОЛОТОЙ БАНК
        // ═══════════════════════════════════════
        donate: {
            badge: 'КАЗНА',
            title: 'ЗОЛОТОЙ БАНК',
            vip_note: 'Любая покупка навсегда даёт статус <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> в лидерборде!',
            free_gold_title: 'Бесплатное золото',
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> за просмотр',
            free_gold_btn: 'Забрать',
            hit_badge: '🔥 ХИТ',
            adfree_title: 'Без рекламы + VIP',
            adfree_desc: 'Отключение принудительной рекламы навсегда!',
            pack_handful: 'Горсть гаек',
            pack_pouch: 'Мешочек гаек',
            pack_pouch_tag: 'На кейс',
            pack_crate: 'Ящик гаек',
            pack_safe: 'Сейф магната',
            pack_safe_tag: '+40% ВЫГОДА',
            purchased: 'Куплено',
            price_99: '99 Ян',
            price_249: '249 Ян',
            price_590: '590 Ян',
            price_1390: '1 390 Ян',
        },

        // ═══════════════════════════════════════
        //  СТАРТЕР-ПАК
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 ВЫГОДА x50',
            timer_text: 'Предложение исчезнет через:',
            golden_nuts: 'Золотых гаек',
            regular_nuts: 'Обычных гаек',
            wooden_boxes: 'Деревянных ящиков',
            iron_safes: 'Железных сейфов',
            golden_cases: 'Золотых кейсов',
            cyber_speaker: '«Кибер»',
            cyber_speaker_sub: 'Колонка (Epic)',
            no_ads: 'БЕЗ РЕКЛАМЫ',
            no_ads_sub: 'Отключение баннеров навсегда',
            vip_status: 'VIP-СТАТУС',
            vip_status_sub: 'Золотая рамка в ТОПе навсегда',
            claim_btn: 'ЗАБРАТЬ ВСЁ ЗА <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2 099 Ян</s> 39 Ян',
            timer_badge: '39 Ян',
        },

        // ═══════════════════════════════════════
        //  СКЛАД КЕЙСОВ
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Гайки',
            badge: 'ТАЙНИК',
            title: 'СКЛАД КЕЙСОВ',
            safe_tile: 'Сейф',
            bonus_label: 'Бонус склада',
            bonus_gold: '+15 Золотых гаек',
            wooden_name: 'Деревянный ящик',
            iron_name: 'Железный сейф',
            gold_name: 'Золотой Контейнер',
            nut_loot_50: '50 Гаек',
            nut_loot_150: '150 Гаек',
            nut_loot_300: '300 Гаек',
            open_btn: 'Открыть',
            buy_more_title: 'Купить еще',
            open_all_title: 'Открыть все',
            in_game: 'В игре',
            buy_price: 'Купить {price} <img src="{icon}" class="ui-ico-sm">',
            buy_multi_title: 'Купить несколько',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Забрать',
            ready: 'ГОТОВО!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> КЕЙС!',
            box_label: 'Ящик: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  МУЛЬТИПОКУПКА
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Выбери количество:',
            total: 'Итого:',
        },

        // ═══════════════════════════════════════
        //  РЕЗУЛЬТАТЫ ПАЧКИ
        // ═══════════════════════════════════════
        batch_result: {
            title: 'ОТКРЫТО {count} ЯЩИКОВ',
            claim_all: 'Забрать всё',
            open_more: 'Ещё ×10',
            open_more_count: 'Ещё ×{count}',
            new_count: '<span style="color:#2ecc71;">Новых: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">Новых: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ НОВАЯ!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Повтор (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  РУЛЕТКА (ГАЧА)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Открытие кейса...',
            opening_title: 'Открываем: {name}',
            again_btn: 'Ещё',
            again_count: 'Ещё ({count})',
            batch_btn: '×10',
            skip_btn: 'Пропустить ⏩',
            close_btn: 'Закрыть',
            reroll_btn: '📺 Перекрутить за рекламу',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Перекрутить (Неон)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Перекрутить за рекламу',
            duplicate: 'Повторка → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  ПРЕДПРОСМОТР ЛЕСТНИЦЫ
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Описание эффекта',
        },

        // ═══════════════════════════════════════
        //  ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ
        // ═══════════════════════════════════════
        calendar: {
            title: 'Награды за вход',
            subtitle: 'Заходи каждый день! На 7-й день — эксклюзивная лестница.',
            missed_alert: '⚠️ Ты пропустил день!',
            restore_streak: 'Восстановить стрик',
            reset_day1: 'День 1',
            day7_title: 'День 7: Супер-приз',
            day7_desc: 'Скин «Календарь» (Epic)',
            double_ad: '▶ Удвоить за рекламу (x2)',
            claim_normal: 'Забрать обычную',
            day_badge: 'День {day}',
            day7_title_loop: 'День 7: Супер-награда',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Золотых кейса',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">СЕГОДНЯ!</span>',
            double_claim_loop: '▶ Удвоить за рекламу (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: 'Забрать обычную (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: 'Забрать скин «Календарь»!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ ВЗЯТО</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> День 7</span>',
        },

        // ═══════════════════════════════════════
        //  РЕКЛАМНЫЙ СТРИК
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Рекламный стрик',
            reset_timer: 'Сброс через:',
            footer: 'В зачет идет любая просмотренная реклама в игре.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Взято</span>',
            claim_btn: 'Забрать',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} ролик</span>',
            popup_safe: '+1 Сейф!',
            popup_nuts: '+600 Гаек!',
            popup_gold: '+{gold} Золота!',
        },

        // ═══════════════════════════════════════
        //  РЕКЛАМНЫЙ СТРИК — НАГРАДЫ
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Гаек' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15 мин)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Гаек' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Сейф' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Турбо x3 (3 мин)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1 000 <img src="assets/nut.webp" class="ui-ico"> Гаек' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Скин «Билборд»' },
        ],

        // ═══════════════════════════════════════
        //  ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ — НАГРАДЫ
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: 'Скин «Календарь»' },
        ],

        // ═══════════════════════════════════════
        //  МОДАЛЬНОЕ ОКНО ОФФЛАЙНА
        // ═══════════════════════════════════════
        offline: {
            title: 'С возвращением!',
            away_time: 'Ты отсутствовал: {time}',
            away_prefix: 'Ты отсутствовал:',
            limit_label: 'Лимит: {limit}',
            limit_prefix: 'Лимит:',
            speaker_earned: 'Колонка настучала:',
            newton_earned: 'Шары выбили:',
            cases_found: 'Найдено ящиков: {count} шт.',
            cases_found_prefix: 'Найдено ящиков:',
            total_earned: 'Всего заработано:',
            double_ad: '▶ Удвоить за рекламу',
            claim_normal: 'Забрать обычную',
            limit_3h: '3 часа',
            limit_30m: '30 мин',
            double_btn: '▶ Удвоить за рекламу (+{meters} м, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  РУБЕЖИ ВЫСОТЫ
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ПОКОРЕНО',
            double_ad: '▶ Удвоить за рекламу (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: 'Забрать обычную (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  БАЗА РУБЕЖЕЙ ВЫСОТЫ
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: 'Крыши', desc: 'Выше только птицы и цены на аренду. Первая сотня за спиной!' },
            { height: 1000, name: 'Грозовой фронт', desc: 'Держись крепче за мокрые перекладины. Впереди открытый воздух!' },
            { height: 10000, name: 'Стратосфера', desc: 'Высота гражданской авиации. Земля уже заметно закругляется.' },
            { height: 100000, name: 'Космос', desc: 'Гравитация сдалась. Ты официально в полной невесомости!' },
            { height: 1000000, name: 'Млечный Путь', desc: 'Один миллион метров. Ты покинул пределы разумного.' },
            { height: 10000000, name: 'Бескрайний простор', desc: 'Конец карты? Нет, только самое начало абсолютной пустоты.' },
        ],

        // ═══════════════════════════════════════
        //  ЛОР ЛОКАЦИЙ (БОРТОВОЙ ЖУРНАЛ)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: 'Хрущевка', desc: 'Родной двор. Панельные джунгли и шуршание старых деревянных перекладин. Здесь начинается твой бесконечный путь.' },
            { id: 1, name: 'Крыши', desc: 'Выше антенн, голубей и городских пробок. Первая сотня метров за спиной, а воздух вокруг становится свежее.' },
            { id: 2, name: 'Грозовой Фронт', desc: 'Стены из плотных туч, ослепительные вспышки молний и запах озона. Перекладины мокрые и скользкие, держись крепче!' },
            { id: 3, name: 'Стратосфера', desc: 'Край атмосферы Земли. Небо темнеет до глубокого ультрамарина, а далеко внизу отчетливо виден синий изгиб планеты.' },
            { id: 4, name: 'Открытый Космос', desc: 'Орбита редких спутников и вечная молчаливая тишина. Гравитация сдалась — только лестница ведет все выше.' },
            { id: 5, name: 'Млечный Путь', desc: 'Спирали далеких галактик, мерцание туманностей и звездная пыль. Миллион метров над земными проблемами.' },
            { id: 6, name: 'Бескрайний простор', desc: 'Горизонт событий и край ведомой Вселенной. Абсолютная высота, где время сливается с космическим пространством.' },
        ],

        // ═══════════════════════════════════════
        //  ЛОКАЦИИ (HUD name + чекпоинты)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: 'Хрущевка',
            roofs: 'Крыши',
            storm_front: 'Грозовой Фронт',
            stratosphere: 'Стратосфера',
            open_space: 'Открытый Космос',
            milky_way: 'Млечный Путь',
            endless: 'Бескрайний простор',

            // Чекпоинты (title-тексты)
            checkpoint_0: '0 м — Хрущевка',
            checkpoint_250: '250 м — Крыши',
            checkpoint_1000: '1 000 м — Грозовой фронт',
            checkpoint_10000: '10 000 м — Стратосфера',
            checkpoint_100000: '100 000 м — Космос',
            checkpoint_1000000: '1 000 000 м — Млечный Путь',
            checkpoint_10000000: '10 000 000 м — Бескрайний простор',
        },

        // ═══════════════════════════════════════
        //  КАРТОЧКА ЛОКАЦИИ (Бортовой журнал)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'ИССЛЕДОВАНО',
            signal_lost_badge: 'СИГНАЛ ПОТЕРЯН',
            unknown_sector: 'Неизвестный сектор',
            height_label: 'Высота: {height} м',
            target_label: 'Цель: {target} м (Осталось: {remaining} м)',
            locked_desc: 'Датчики фиксируют аномалии на этой высоте. Продолжайте подъем, чтобы расшифровать данные.',
        },

        // ═══════════════════════════════════════
        //  РЕТРО-ИСПЫТАНИЕ
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Испытание на выдержку',
            challenge_desc: 'Продержись в игре 20 минут и бесплатно забери уникальный ретро-облик!',
            skin_name: 'Скин «Ретро»',
            ability_label: '<b style="color: #f1c40f;">Способность:</b> Поймай летящую монетку (приз: до 125 <img src="assets/nut.webp" class="ui-ico-sm"> и 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: 'Осталось продержаться:',
            challenge_complete: 'ИСПЫТАНИЕ ЗАВЕРШЕНО!',
            challenge_reward: 'Ты выстоял 20 минут! Твоя заслуженная награда:',
            epic_skin: 'ЭПИЧЕСКИЙ СКИН «РЕТРО»',
        },

        // ═══════════════════════════════════════
        //  ЯРЛЫК НА ЭКРАН (ШОРТКАТ)
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'БОНУС',
            title: 'Добавь игру на экран телефона и поднимайся в один тап!',
            desc: 'В следующем окне нажмите «Добавить», и награда твоя',
            reward_label: 'Награда за установку:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: 'ДОБАВИТЬ (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            // Окно удержания
            decline_title: 'Точно не хочешь награду?',
            decline_desc: 'Тебя ждут 100 <img src="assets/golden_nut.webp" class="ui-ico">. Ярлык добавится за пару секунд, и игра всегда будет под рукой.',
            decline_claim: 'Забрать 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },

        // ═══════════════════════════════════════
        //  ЛИДЕРБОРД
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'ЛИГА АЛЬПИНИСТОВ',
            title: 'ЗАЛ СЛАВЫ',
            season_desc: 'Общий рейтинг покорителей космоса',
            tab_alltime: 'За всё время',
            tab_week: 'Сезон (Неделя)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Загрузка рекордов...</div>',
            desc_alltime: 'Общий рейтинг покорителей космоса',
            desc_week: 'Сброс каждый понедельник в 00:00',
            anon: 'Анонимный альпинист',
            you_player: 'Ты (Игрок)',
            you_vip: '<span>Ты (VIP)</span>',
            you: '<span>Ты</span>',
        },

        // ═══════════════════════════════════════
        //  СДЕЛКА ДНЯ
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'ГОРЯЩИЙ КОНТРАКТ',
            title: 'СДЕЛКА ДНЯ',
            timer_label: 'Смена контракта через',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Обновить ({left}/5)',
            reroll_exhausted: 'Попытки исчерпаны (0/5)',
            in_collection: '✔ В КОЛЛЕКЦИИ',
            buy_btn: 'КУПИТЬ: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: 'Не хватает {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → В Банк',
            discount_badge: '{rarity} • СКИДКА -{percent}%',
            unique_ladder: 'Уникальная лестница',
            luck_desc: '+{luck} к общей удаче',
        },

        // ═══════════════════════════════════════
        //  НАСТРОЙКИ
        // ═══════════════════════════════════════
        settings: {
            title: 'НАСТРОЙКИ',
            language: '🌐 Язык / language',
            music: 'Музыка и фон',
            tap_sounds: 'Звуки тапа',
            speaker_bass: 'Бас колонки',
            newton_hit: 'Удар шаров',
            rewards_sfx: 'Награды и эффекты',
            vibration: 'Вибрация (телефон)',
            support_btn: 'Поддержка / Сообщество',
            support_alert: 'Сообщество игры и поддержка: vk.com/your_game_group',
        },

        // ═══════════════════════════════════════
        //  УДАЧА
        // ═══════════════════════════════════════
        luck: {
            title: 'Твоя Удача',
            total_label: 'Общий показатель',
            influence_title: 'На что влияет Удача:',
            influence_cases: 'Увеличивает шанс дропа кейсов.',
            influence_nuts: 'Увеличивает количество гаек в кейсах.',
            influence_rarity: 'Повышает шанс на Epic и Leg скины.',
            breakdown_title: 'Из чего складывается:',
            talismans_title: 'Коллекция талисманов:',
            buff_label: 'Удача',
            plus_luck: '+{value} к удаче',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">НАДЕТО</div>',
            equip_btn: 'Надеть',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Закрыто</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Лестница «{name}»: <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Талисман «{name}»: <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 Кибер-слот «{name}»: <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 Буст от рекламы (Знак Фортуны): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>Нет активных баффов удачи.</div>',
        },

        // ═══════════════════════════════════════
        //  БЛАГОДАРНОСТЬ (МАСКОТ)
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'ЗОЛОТО НАЧИСЛЕНО!',
            default_desc: 'Спасибо, что ты с нами!',
            vip_badge: 'СТАТУС VIP АКТИВИРОВАН',
        },

        // ═══════════════════════════════════════
        //  ДАННЫЕ showThankYouModal
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'НАБОР НОВИЧКА!',
                desc: 'Гора кейсов, ресурсы, отключение рекламы и скин «Кибер» твои! Спасибо за поддержку <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'ЗОЛОТО ПОЛУЧЕНО!',
                desc: 'Тебе начислено <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> за просмотр рекламы!',
            },
            adfree: {
                title: 'БЕЗ РЕКЛАМЫ!',
                desc: 'Баннеры отключены навсегда! Спасибо за вклад в развитие игры ❤️',
            },
            gold_credited: {
                title: 'ЗОЛОТО ЗАЧИСЛЕНО!',
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> уже на балансе. Спасибо за вклад в развитие игры ❤️! Приятных покупок!',
            },
            shortcut_reward: {
                title: 'ЗОЛОТО НАЧИСЛЕНО!',
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> уже на балансе!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Спасибо, что ты с нами! ❤️</span>',
            },
            deal: {
                buy_btn: 'КУПИТЬ: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  ПАРТИКЛЫ (ВСПЛЫВАЮЩИЕ ТЕКСТЫ)
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'НАБОР НОВИЧКА ПОЛУЧЕН!',
            sponsor: '📺 Спонсор: +{nuts} 🔩 и +{gold} 🟡!',
            turbo_boost: 'ТУРБО-ДОХОД x3 ({seconds}с)!',
            luck_boost: 'УДАЧА +{value}!',
            frenzy: 'ГАЙКОПАД!',
            autotap: 'АВТОПИЛОТ (15 тапов/с)!',
            turbo_income: 'ТУРБО-ДОХОД x3!',
            luck_15: 'УДАЧА +15!',
            ufo_case: '+1 КЕЙС!',
            ufo_safe: '+1 СЕЙФ!',
            billiard_crit: '🎱 x2.5! +{nuts} 🔩',
            planet_turbo: '🌍 ТУРБО x3 (20с)!',
            planet_luck: '🌍 УДАЧА +15 (60с)!',
            planet_frenzy: '🌍 ГАЙКОПАД (15с)!',
            hawking: '💥 ИЗЛУЧЕНИЕ ХОКИНГА: +100 000 м!',
            storm_discharge: 'РАЗРЯД (x10)!',
            absolute_unlocked: 'АБСОЛЮТ ОТКРЫТ!',
            legendary_skin: '👑 ЛЕГЕНДАРНЫЙ СКИН: {name}!',
            retro_coin: '+{nuts} гаек, +{gold}!',
            banana_double: '🍌 x2 КЛИК!',
            combo: '🔥 x{mult} ({cps} CPS)',
            case_drop: '+1 КЕЙС!',
            golden_case_milky: 'ЗОЛОТОЙ КЕЙС (МЛЕЧНЫЙ ПУТЬ)!',
            golden_case: 'ЗОЛОТОЙ КЕЙС!',
            safe_milky: 'СЕЙФ (МЛЕЧНЫЙ ПУТЬ)!',
            safe_luck: 'СЕЙФ (УДАЧА)!',
            iron_safe: 'ЖЕЛЕЗНЫЙ СЕЙФ!',
            rusty_nut: '+100',
            rusty_box: '+1 ЯЩИК!',
            rusty_safe: '+1 СЕЙФ!',
            marble_double: '+{value} (x2)',
            jackpot: 'ДЖЕКПОТ: +1!',
            timed_box: '+1 ЯЩИК ПОЛУЧЕН!',
            crystal_gold: '+{value} (Кристалл)!',
            shop_spent: '-{cost} м',
            streak_dupe: 'Повторка: +{value}!',
            streak_billboard: '🎉 ПОЛУЧЕН СКИН БИЛБОРД!',
            calendar_day: 'День {day} получен!',
            calendar_skin: 'ПОЛУЧЕН СКИН КАЛЕНДАРЬ!',
            calendar_bonus: '+{cases} Золотых кейса!',
            timewarp_report: '+{meters} м',
            timewarp_nuts: '+{nuts} гаек',
            timewarp_gold: '+{gold} золота',
            magnet_ufo: 'МАГНИТ НЛО!',
        },

        // ═══════════════════════════════════════
        //  ЛЕСТНИЦЫ — ИМЕНА
        // ═══════════════════════════════════════
        ladder: {
            // === ОБЫЧНЫЕ ===
            wood: { name: 'Деревянная' },
            banana: { name: 'Банановая' },
            beer: { name: 'Пивная' },
            fire: { name: 'Огненная' },
            fireman: { name: 'Пожарная' },
            plastic: { name: 'Пластиковая' },
            rusty: { name: 'Ржавая' },
            tape: { name: 'Изолента' },
            // === РЕДКИЕ ===
            book: { name: 'Книжная' },
            cactus: { name: 'Кактус' },
            cement: { name: 'Цементная' },
            neon: { name: 'Неоновая' },
            scratch: { name: 'Когтеточка' },
            new_year: { name: 'Новогодняя' },
            // === ЭПИЧЕСКИЕ ===
            add_stair: { name: 'Билборд' },
            bone: { name: 'Костяная' },
            crystal: { name: 'Кристальная' },
            cyber: { name: 'Киберпанк' },
            golden: { name: 'Золотая' },
            goth: { name: 'Готическая' },
            ice: { name: 'Ледяная' },
            vine: { name: 'Лоза' },
            calendar_stair: { name: 'Календарь' },
            // === ЛЕГЕНДАРНЫЕ ===
            marble: { name: 'Мраморное Золото' },
            quant: { name: 'Квантовая' },
            ufo: { name: 'НЛО' },
            mimic: { name: 'Мимик' },
            // === ОСОБЕННЫЕ ===
            retro: { name: 'Ретро' },
            storm: { name: 'Грозовой фронт' },
            strato: { name: 'Стратосфера' },
            cosmo: { name: 'Космос' },
            milkyway: { name: 'Млечный Путь' },
            endless: { name: 'Сингулярность' },
            absolute: { name: 'АБСОЛЮТ' },
        },

        // ═══════════════════════════════════════
        //  ЛЕСТНИЦЫ — ОПИСАНИЯ БАФФОВ
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Стартовая классика. Пахнет началом бесконечного пути.',
            banana: 'Удваивает каждый 5-й тап.',
            beer: '+5 к показателю Удачи.',
            fire: '+7 м за тап, -10 тапов до ящика.',
            fireman: 'Колыбель Ньютона: +15 м за удар',
            plastic: 'Шары Ньютона бьют быстрее на 0.15 c',
            rusty: '65% шанс получить <img src="assets/nut.webp" class="ui-ico"> за каждый тап.',
            tape: 'Скидка 10% в магазине улучшений.',
            book: '+7 к показателю Удачи.',
            cactus: 'Сабвуфер: +20 м/c. Колыбель Ньютона: +10 м за удар',
            cement: 'Колыбель Ньютона: +50%, но удары на 0.3c реже.',
            neon: 'Бесплатный реролл при открытии каждого кейса',
            scratch: 'При 5+ тапах/сек высота за тап x1.5',
            new_year: 'Подарок за каждые 150-250 тапов.',
            bone: 'Удваивает каждый тап',
            crystal: 'Каждое открытие кейса дополнительно приносит +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Открывает дополнительный слот под аксессуар.',
            golden: 'Заполнение шкалы тапов даёт Железный сейф вместо деревяного ящика',
            goth: 'Скидка 20% в магазине улучшений и кейсов',
            ice: 'Скольжение: тапать можно свайпом по экрану',
            vine: 'Увеличивает силу тапа, сабвуфера и шаров на +40%.',
            add_stair: 'Баффы длятся на 50% дольше; каждый просмотр рекламы дополнительно приносит 20 <img src="assets/nut.webp" class="ui-ico"> и 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 к показателю Удачи; доп. шанс на легендарные скины из сейфа.',
            marble: '25% шанс на Золотой контейнер за шкалу тапов.',
            quant: 'Расщепление материи: 20% получаемых гаек становятся золотыми, -50 тапов до ящика.',
            ufo: 'Каждые 30 секунд притягивает инопланетный контейнер',
            mimic: 'Мимикрия: копирует способности 2 выбранных лестниц.',
            retro: 'Поймай летящую монетку (приз: до 125 <img src="assets/nut.webp" class="ui-ico"> и 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 м к подъёму за тап, но 5% шанс сломаться при клике.',
            strato: 'Разреженный воздух: ускоряет работу сабвуфера и Колыбели Ньютона на 40%.',
            cosmo: 'Увеличивает лимит оффлайн-накопления ресурсов до 3 часов.',
            milkyway: 'Инерционный разгон лестницы. Шанс 25% повысить редкость любого выпадающего кейса на один уровень выше.',
            endless: 'Каждую минуту увеличивает бонус получаемой высоты (тапы, колонка, колыбель) на +50% (максимум +1 000%). Смена лестницы сбрасывает накопленный бонус',
            absolute: 'Венец эволюции: пассивные эффекты всех лестниц сразу',
        },

        // ═══════════════════════════════════════
        //  КОЛОНКИ — ИМЕНА
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Советский динамик' },
            monster: { name: 'Монстр-стек' },
            cyber: { name: 'Кибер-спикер' },
            cool: { name: 'Абсолютный динамик' },
        },

        // ═══════════════════════════════════════
        //  КОЛОНКИ — ОПИСАНИЯ
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Базовый ритм Сабвуфера (мощность x1)',
            monster: '+20% к мощности Сабвуфера. -2 минуты от таймера бесплатного ящика.',
            cyber: '+40% к мощности Сабвуфера. Получайте на 25% больше <img src="assets/nut.webp" class="ui-ico"> и <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: '×2 к мощности Сабвуфера. Каждый 3-й бас приносит +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Бас: x{mult}',
        },

        // ═══════════════════════════════════════
        //  ШАРЫ НЬЮТОНА — ИМЕНА
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Стальные шары' },
            billiard: { name: 'Бильярдный шар 8' },
            plasma: { name: 'Плазменная сфера' },
            planet: { name: 'Мини-Земля' },
        },

        // ═══════════════════════════════════════
        //  ШАРЫ НЬЮТОНА — ОПИСАНИЯ
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Базовый авто-удар Колыбели Ньютона (урон x1)',
            billiard: '+25% к урону шаров. Каждый 8-й удар даёт x2.5 высоты и 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% к урону шаров. Наэлектризованность: при 6+ тапах/сек удваивает высоту за каждый тап. После 5 сек бездействия — автоклик 10 тапов.',
            planet: '×2 к урону шаров, +3 тапа к ящику за удар. +100% к силе тапа, Сабвуфера и шаров за каждый активный бафф. 1% шанс, что удар включит случайный бонус.',
            fallback: 'Удар: x{mult}',
        },

        // ═══════════════════════════════════════
        //  ТАЛИСМАНЫ
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Клевер-четырёхлистник' },
            horseshoe: { name: 'Золотая подкова' },
            paw: { name: 'Кроличья лапка' },
            coin: { name: 'Древняя монета' },
            star: { name: 'Звезда удачи' },
            key: { name: 'Ключ от всех тайн' },
            sock: { name: 'Счастливый носок' },
            sock_alert: '🎉 НЕВЕРОЯТНО! Ты собрал все талисманы и открыл СЕКРЕТНЫЙ НОСОК (+50 к удаче)!',
        },

        // ═══════════════════════════════════════
        //  РЕДКОСТИ
        // ═══════════════════════════════════════
        rarity: {
            common: 'ОБЫЧНЫЙ',
            rare: 'РЕДКИЙ',
            epic: 'ЭПИЧЕСКИЙ',
            legendary: 'ЛЕГЕНДАРНЫЙ',
            special: 'ОСОБЕННЫЙ',
        },
    },

    //английский 2
    en: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder', // Main game title shown in the browser tab and store catalog
            version: 'Space Stepladder v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} m', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} m', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/tap', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} m/s', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} m/hit', // Auto-clicker income from the swinging Newton Cradle (meters per ball impact)
            level: 'Lv. {level}', // Upgrade level indicator
            seconds_short: '{value}s', // Compact seconds format for buff timers (no space, e.g., 45s)
            meters: '{value} m', // Value in meters
            meters_plus: '+{value} m', // Positive meter gain (used in the Offline Earnings summary)
            pieces: '{count} pcs', // Quantity of items (e.g., crates found)
            min_sec: '{min}m {sec}s', // Duration format: minutes and seconds (e.g., time away)
            meters_per_click_short: 'm/tap', // Unit label for tap power in the shop
            meters_per_sec_short: 'm/s', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'm/hit', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Lv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'm', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Get Golden Nuts', // Tooltip (title) when hovering over the Golden Nuts balance
            donate_btn: 'Bank', // Compact button to open the Golden Bank (must be very short, 4-6 chars max)
            deal_btn: 'Deal', // Compact button to open the Daily Deal modal with timer (must be short)
            top_btn_aria: 'Hall of Fame', // Accessibility label (aria-label) for the Leaderboard button
            zen_title: 'Zen Mode (Hide UI)', // Tooltip for the eye icon button that hides all UI overlays
            rewards_btn: 'Rewards', // Button opening the Ad Streak reward track
            rewards_count: '{current}/10', // Ad watch progress counter on the Rewards button
            buffs_btn: 'BUFFS', // Button opening the side drawer with temporary boosters (short, uppercase)

            // --- Bottom Navigation ---
            shop_btn: 'SHOP', // Main bottom-center button (upgrades bought with meters)
            skins_btn: 'Skins', // Bottom-right button (opens Gear Inventory with skins and accessories)
            cases_btn_label: 'Cases:', // Label on the bottom-left Case Vault button (followed by case count)
            free_box_label: 'Free:', // Label on the 3-minute free crate timer button (strictly limited width!)

            // --- Action Buttons ---
            close_btn: '✕', // Close modal cross symbol (do not translate)
            close_aria: 'Close', // Accessibility label for close buttons
            cancel_btn: 'Cancel', // Cancel action button in confirmation dialogs
            buy_btn: 'Buy', // Generic purchase button
            claim_btn: 'Claim', // Button to collect a free reward or prize
            equip_btn: 'Equip', // Button to equip an owned skin or item
            equipped_badge: 'EQUIPPED', // Status badge shown on currently active gear
            later_btn: 'Later', // Postpone button (e.g., on the home screen shortcut prompt)
            not_now_btn: 'Not now', // Decline button on the secondary retention prompt
            excellent_btn: 'AWESOME!', // Button to close the mascot thank-you modal after receiving gold/purchases
            forward_btn: 'TO THE TOP!', // Button to close the Retro Endurance Trial info modal
            claim_and_equip_btn: 'CLAIM & EQUIP', // Button upon completing the 20-min trial (claims and equips both skin & perk)
            just_claim_btn: 'Claim only', // Secondary button upon completing the 20-min trial (claims skin without equipping)
            selected_btn: 'SELECTED', // Disabled button state in the customization modal when skin is already active
            buy_for: 'BUY FOR {price} {currency}', // Purchase button in the customization modal ({currency} is nut icon)
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Black Market', // Header title of the meter-based upgrade shop
            buy_label: 'BUY', // Small sub-label above the cost inside green purchase buttons (uppercase, short)
            click_title: 'TAP POWER', // Upgrade 1: increases manual tap height gain
            speaker_title: 'SUBWOOFER', // Upgrade 2: increases passive meters per second
            newton_title: 'NEWTON CRADLE', // Upgrade 3: increases auto-swinging pendulum impact power
            cost_suffix: '{cost} m', // Upgrade cost in meters
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ BOOSTERS', // Header of the slide-out right drawer with temporary buffs
            ad_btn: 'Watch Ad', // Button text to activate a booster by watching a rewarded video

            fortune_name: 'LUCK', // Booster 1 name (increases drop rates and rare loot chances)
            fortune_desc: '+15 to Luck stat', // Booster 1 description
            turbo_name: 'TURBO CLIMB', // Booster 2 name (triples all height gains)
            turbo_desc: '3x boost to all height income', // Booster 2 description (affects taps, speaker, and cradle)
            frenzy_name: 'NUT RAIN', // Booster 3 name (every tap guarantees regular nut drops)
            frenzy_desc: 'Nuts drop from the sky with every tap', // Booster 3 description
            autotap_name: 'AUTOPILOT', // Booster 4 name (high-speed auto-clicker)
            autotap_desc: 'Auto-taps ladder 15 times/sec', // Booster 4 description
            timewarp_name: 'TIME MACHINE', // Booster 5 name (instant time jump)
            timewarp_desc: 'Instantly get 5 min of idle income', // Booster 5 description (grants 5 minutes of Speaker + Cradle farm)
            timewarp_instant: 'Instant', // Badge shown instead of a timer on the Time Machine tile
            ufo_name: 'UFO MAGNET', // Booster 6 name (summons a flying saucer with a supply pod)
            ufo_desc: 'Pulls in a loot pod with resources', // Booster 6 description
            ufo_summon: 'Summon', // Badge shown instead of a timer on the UFO Magnet tile
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Gear Inventory', // Header title of the equipment & skins modal
            tab_ladders: 'Ladders', // Tab 1: Stepladder skins
            tab_speakers: 'Speakers', // Tab 2: Subwoofer skins
            tab_newton: 'Cradles', // Tab 3: Newton Cradle ball skins
            tab_talismans: 'Charms', // Tab 4: Lucky charms / talismans
            available_skins: 'Available Skins:', // Label above the horizontal skin selector in the customization modal
            no_effects: 'No bonus effects', // Fallback text when an item has no passive perks
            default_ladder_desc: 'Standard ladder parameters', // Default description for the basic ladder
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin', // Slot banner label: visual appearance only (transmog)
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk', // Slot banner label: active passive ability
            equipped_btn: 'EQUIPPED', // Button text on an already equipped item
            unequip_btn: 'REMOVE', // Button text on an equipped charm allowing the player to unequip it
            equip_btn: 'Equip', // Button text to equip an owned item
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> In Order', // Locked charm button text (charms must be unlocked sequentially)
            fully_equipped: '✔ FULLY EQUIPPED', // Status button in ladder preview when both Skin and Perk are active
            equip_all: 'EQUIP BOTH', // Main button in ladder preview to equip both visual Skin and passive Perk
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin On ✓', // Toggle button when visual appearance is active
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin only', // Toggle button to equip visual appearance without changing active perk
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk On ✓', // Toggle button when passive ability is active
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk only', // Toggle button to equip passive ability without changing visual skin
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Locked Item', // Notice shown in ladder preview when the skin is not yet owned
            mimic_setup: '⚙️ Configure Slots ({slot0}, {slot1})', // Button to open the Mimic ability selector (shows 2 copied ladders)
            cyber_setup: '🦾 Tune Extra Slot', // Button to open the Cyberpunk extra accessory implant selector
            item_fallback: 'Item', // Generic fallback item name
            luck_plus: '+{luck} Luck', // Short luck bonus description on charm cards
            slot_empty: 'Empty', // Placeholder when a Mimic slot is empty
            slot_default: 'Standard stats', // Fallback perk description inside Mimic configuration
            slot_1_selected: '✔ Slot 1', // Badge on a card assigned to Mimic Slot 1
            slot_2_selected: '✔ Slot 2', // Badge on a card assigned to Mimic Slot 2
            select_action: '+ Select', // Prompt on unselected cards in Mimic/Cyberpunk modals
            cyber_installed: '✔ Installed', // Badge on the active accessory inside the Cyberpunk slot modal
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Customize', // Default modal header
            base_level: 'Base Level: {level}', // Current upgrade level of the accessory
            base_level_prefix: 'Base Level:', // Label before the level number
            power: 'Power: {value}', // Generic power output label
            power_mps: 'Power: {value} m/s', // Subwoofer output in meters per second
            upgrade_btn: 'Upgrade', // Level-up button label
            speakers_title: '📻 Subwoofer', // Modal header when customizing Speakers
            newton_title: '⚪ Newton Cradle', // Modal header when customizing Newton Cradle balls
            hit_power: 'Hit: {power} m (every {speed}s)', // Cradle stats: meters per hit and swing interval in seconds
            upgrade_cost: 'Upgrade: {cost} m', // Upgrade button text with meter cost
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Cyberpunk Slot', // Header of the Cyberpunk ladder's special modal
            desc: 'Pick 1 extra perk from any unlocked gear (Speaker, Cradle, or Charm):', // Instructions for selecting an extra passive effect
            tab_speakers: 'Speakers', // Tab for Speaker perks
            tab_newton: 'Cradles', // Tab for Newton Cradle perks
            tab_talismans: 'Charms', // Tab for Lucky Charm perks
            install_btn: 'Install Implant', // Confirm button to save the selected extra perk
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Mimic Abilities', // Header of the Mimic ladder's special modal
            desc: 'Pick any 2 unlocked ladders to copy their passive perks:', // Instructions for copying 2 ladder abilities
            slot1: 'Slot 1', // First copied ability slot header
            slot2: 'Slot 2', // Second copied ability slot header
            apply_btn: 'Apply Abilities', // Confirm button to save copied abilities
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Confirmation', // Header of the Golden Nuts spend confirmation dialog
            desc: 'Spend gold?', // Default confirmation question
            buy_btn: 'Buy ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Confirm button showing Golden Nut cost
            buy_label: 'Buy', // "Buy" word before the cost bracket
            buff_title: 'Activate Booster', // Header when buying a temporary booster with gold
            buff_desc: 'Spend {cost} <img src="assets/golden_nut.webp" class="ui-ico"> to activate boost?', // Description when buying a booster
            not_enough_gold: 'Not enough Golden Nuts', // Alert message when player lacks Golden Nuts
            gear_title: 'Unlock Gear Skin', // Header when buying a Speaker or Cradle skin with gold
            gear_desc: 'Buy "{name}" for {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying gear
            talisman_title: 'New Lucky Charm', // Header when buying a Lucky Charm
            talisman_desc: 'Buy charm "{name}" for {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying a charm
            deal_title: 'Daily Deal', // Header when buying the Daily Deal item
            deal_desc: 'Buy "{name}" for {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying the Daily Deal
            item_title: 'Buy Item', // Header when buying an item directly from the Inventory list
            item_desc: 'Buy "{name}" for {price}?', // Prompt when buying an item from Inventory
            ufo_desc: 'Spend 39 <img src="assets/golden_nut.webp" class="ui-ico"> to summon UFO?', // Prompt when summoning a UFO with gold
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'VAULT', // Small top badge in the Golden Bank header
            title: 'GOLDEN BANK', // Main header of the premium currency & IAP store
            vip_note: 'Any purchase permanently unlocks <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> on the leaderboard!', // Note about permanent VIP status perk
            free_gold_title: 'Free Gold', // Title on the rewarded ad card inside the Bank
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> per ad', // Reward amount for watching an ad in the Bank
            free_gold_btn: 'Claim', // Button to watch an ad for +15 Golden Nuts
            hit_badge: '🔥 BESTSELLER', // Highlight tag on the No Ads bundle
            adfree_title: 'No Ads + VIP', // Title of the permanent ad removal bundle
            adfree_desc: 'Removes all forced ads forever!', // Description of the ad removal bundle
            pack_handful: 'Handful of Nuts', // Gold Pack 1 (100 Golden Nuts)
            pack_pouch: 'Pouch of Nuts', // Gold Pack 2 (300 Golden Nuts)
            pack_pouch_tag: 'Fits a Case', // Green hint tag: enough to buy 1 Golden Case (250 gold)
            pack_crate: 'Crate of Nuts', // Gold Pack 3 (750 Golden Nuts)
            pack_safe: 'Tycoon Safe', // Gold Pack 4 (2,000 Golden Nuts)
            pack_safe_tag: '+40% VALUE', // Orange best-value tag on the largest gold pack
            purchased: 'Purchased', // Button label once No Ads has been bought
            price_99: '99 Yans', // Price button for 99 portal currency units (Yans)
            price_249: '249 Yans', // Price button for 249 Yans
            price_590: '590 Yans', // Price button for 590 Yans
            price_1390: '1,390 Yans', // Price button for 1,390 Yans
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 50x VALUE', // Discount badge in the Starter Pack header
            timer_text: 'Offer expires in:', // Label before the 48-hour countdown timer
            golden_nuts: 'Golden Nuts', // Label under "179" in the Starter Pack loot grid
            regular_nuts: 'Standard Nuts', // Label under "1,799" in the loot grid
            wooden_boxes: 'Wooden Crates', // Label under "25" in the loot grid
            iron_safes: 'Iron Safes', // Label under "10" in the loot grid
            golden_cases: 'Golden Cases', // Label under "5" in the loot grid
            cyber_speaker: '"Cyber"', // Name of the exclusive Epic speaker skin included in the pack
            cyber_speaker_sub: 'Speaker (Epic)', // Subtitle clarifying that "Cyber" is an Epic speaker skin
            no_ads: 'NO ADS', // Title of the ad-free tile in the loot grid
            no_ads_sub: 'Removes forced ads forever', // Subtitle of the ad-free tile
            vip_status: 'VIP STATUS', // Title of the VIP status tile in the loot grid
            vip_status_sub: 'Permanent golden frame in TOP', // Subtitle explaining the leaderboard VIP crown/frame
            claim_btn: 'CLAIM ALL FOR <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2,099 Yans</s> 39 Yans', // Main purchase button with crossed-out original price
            timer_badge: '39 Yans', // Compact price label on the pulsing HUD Starter Pack button
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Nuts',
            badge: 'CACHE', // Small top badge in the Case Vault header
            title: 'CASE VAULT', // Main header of the cases & gacha modal
            safe_tile: 'Safe', // Short label on the free Iron Safe ad tile
            bonus_label: 'Vault Bonus', // Top label on the wide +15 Golden Nuts ad tile
            bonus_gold: '+15 Golden Nuts', // Reward text on the wide gold ad tile
            wooden_name: 'Wooden Crate', // Tier 1 case (earned via tapping)
            iron_name: 'Iron Safe', // Tier 2 case (bought with regular nuts)
            gold_name: 'Golden Case', // Tier 3 featured case (bought with Golden Nuts)
            nut_loot_50: '50 Nuts', // Wooden Crate loot item: 50 regular nuts
            nut_loot_150: '150 Nuts', // Wooden Crate loot item: 150 regular nuts
            nut_loot_300: '300 Nuts', // Wooden Crate loot item: 300 regular nuts
            open_btn: 'Open', // Button to spin/open a single case
            buy_more_title: 'Buy more', // Tooltip on the "+" button
            open_all_title: 'Open all', // Tooltip on the "×10" batch open button
            in_game: 'In Game', // Disabled button text when player has 0 Wooden Crates (earned by playing)
            buy_price: 'Buy {price} <img src="{icon}" class="ui-ico-sm">', // Button text to buy a case when count is 0
            buy_multi_title: 'Buy multiple', // Tooltip on the "+" multi-buy button
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Claim', // Button text on the free ad reward tiles
            ready: 'READY!', // Text on the bottom-left 3-min free crate button when ready to claim
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> CASE!', // Floating popup above the Cases button when filling the tap bar
            box_label: 'Crate: {box}/{needed}', // Progress bar text format for taps until next crate
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Choose amount:', // Subtitle in the multi-buy popup (×1, ×5, ×10)
            total: 'Total:', // Label before the total calculated cost
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: 'OPENED {count} CASES', // Header of the ×10 batch opening results modal
            claim_all: 'Claim All', // Primary button to close and collect batch rewards
            open_more: 'Open ×10 more', // Secondary button to immediately open another 10 cases
            open_more_count: 'Open ×{count} more', // Secondary button when 2 to 9 cases remain
            new_count: '<span style="color:#2ecc71;">New: {count} 🪜</span>', // Summary counter of newly unlocked skins in the batch
            new_zero: '<span style="color:#7f8c8d;">New: 0</span>', // Summary text when all skins in the batch were duplicates
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ NEW!</span>', // Badge next to a newly unlocked skin in the batch list
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Duplicate (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Badge next to a duplicate skin showing gold compensation
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Opening case...', // Default roulette title
            opening_title: 'Opening: {name}', // Header title while spinning a specific case
            again_btn: 'Again', // Button to spin another case of the same type
            again_count: 'Again ({count})', // Button to spin again showing remaining case count
            batch_btn: '×10', // Button inside roulette to batch-open 10 cases at once
            skip_btn: 'Skip ⏩', // Button to skip the spinning animation
            close_btn: 'Close', // Button to close the roulette and return to the Vault
            reroll_btn: '📺 Reroll with Ad', // Button to re-spin the roulette by watching an ad
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Reroll (Neon)', // Free reroll button granted by the Neon ladder perk
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Reroll with Ad', // Ad reroll button with custom TV icon
            duplicate: 'Duplicate → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Result text when the spun skin is already owned
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Perk description', // Default placeholder in the detailed ladder preview modal
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Daily Rewards', // Header of the 7-day login calendar modal
            subtitle: 'Log in daily! Claim an exclusive ladder skin on Day 7.', // Subtitle explaining the 7-day streak
            missed_alert: '⚠️ You missed a day!', // Warning shown when the player breaks their daily login streak
            restore_streak: 'Restore Streak', // Button to save the login streak by watching an ad
            reset_day1: 'Day 1', // Button to reset the login streak back to Day 1
            day7_title: 'Day 7: Super Prize', // Week 1 Day 7 banner title
            day7_desc: '"Calendar" Skin (Epic)', // Week 1 Day 7 prize description
            double_ad: '▶ Double with Ad (x2)', // Button to claim 2x daily reward via ad
            claim_normal: 'Claim regular', // Button to claim 1x daily reward without ad
            day_badge: 'Day {day}', // Day number header on calendar grid cards (Day 1 .. Day 6)
            day7_title_loop: 'Day 7: Grand Reward', // Week 2+ Day 7 banner title (after skin is already owned)
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Golden Cases', // Week 2+ Day 7 reward description
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">TODAY!</span>', // Badge on Day 7 card when ready to claim
            double_claim_loop: '▶ Double with Ad (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to double Week 2+ Day 7 reward to 6 Golden Cases
            claim_normal_loop: 'Claim regular (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to claim regular Week 2+ Day 7 reward (3 Golden Cases)
            claim_skin_btn: 'Claim "Calendar" Skin!', // Button to claim the exclusive skin on Week 1 Day 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ CLAIMED</span>', // Badge when Day 7 is completed
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Day 7</span>', // Locked badge on Day 7 during Days 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Ad Streak', // Header of the daily 1-10 ad watch reward track
            reset_timer: 'Resets in:', // Label before the midnight reset countdown
            footer: 'Any ad watched in the game counts towards progress.', // Footer note explaining how to advance the track
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Claimed</span>', // Status on already collected steps
            claim_btn: 'Claim', // Button to claim an unlocked step reward
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} ads</span>', // Requirement badge on locked steps
            popup_safe: '+1 Safe!', // Floating feedback popup when claiming the free Iron Safe
            popup_nuts: '+600 Nuts!', // Floating feedback popup when claiming +600 free nuts
            popup_gold: '+{gold} Gold!', // Floating feedback popup when claiming +15 free gold
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Nuts' }, // Step 1 reward
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' }, // Step 2 reward: +20 Luck for 15 minutes
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 3 reward: 5 Golden Nuts
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Nuts' }, // Step 4 reward: 600 regular nuts
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Safe' }, // Step 5 reward: 1 Iron Safe
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3m)' }, // Step 6 reward: 3x Turbo boost for 3 minutes
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 7 reward: 15 Golden Nuts
            { step: 8, title: '+1,000 <img src="assets/nut.webp" class="ui-ico"> Nuts' }, // Step 8 reward: 1,000 regular nuts
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 9 reward: 25 Golden Nuts
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> "Billboard" Skin' }, // Step 10 grand prize: Epic Billboard ladder skin
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Day 1: 500 regular nuts
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Day 2: 1 Iron Safe
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 3: 1 Golden Case
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 4: 75 Golden Nuts
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 5: 2 Golden Cases
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 6: 100 Golden Nuts
            { day: 7, text: '"Calendar" Skin' }, // Day 7: Exclusive Calendar ladder skin
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Welcome Back!', // Header when returning to the game after >1 minute away
            away_time: 'You were away for: {time}', // Full time away line
            away_prefix: 'You were away for:', // Prefix before away duration
            limit_label: 'Cap: {limit}', // Full offline accumulation limit text
            limit_prefix: 'Cap:', // Prefix before max offline time cap
            speaker_earned: 'Speaker pumped:', // Meters generated passively by the Subwoofer while away
            newton_earned: 'Cradle hammered:', // Meters generated passively by the Newton Cradle while away
            cases_found: 'Crates found: {count} pcs', // Passive Wooden Crates found while away
            cases_found_prefix: 'Crates found:', // Prefix before crates count
            total_earned: 'Total Height Gained:', // Header above total offline meters earned
            double_ad: '▶ Double with Ad', // Button to double offline earnings via ad
            claim_normal: 'Claim regular', // Button to collect base offline earnings
            limit_3h: '3 hours', // Extended offline cap (with Deep Space ladder perk)
            limit_30m: '30 min', // Base offline cap (30 minutes)
            double_btn: '▶ Double with Ad (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Dynamic button text showing exact doubled amounts
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'REACHED', // Red stamp over the milestone postcard illustration
            double_ad: '▶ Double with Ad (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to double milestone gold reward via ad
            claim_normal: 'Claim regular (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to collect base milestone gold reward
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Fullscreen achievement postcards triggered upon reaching major altitudes:
            { height: 250, name: 'Rooftops', desc: 'Only birds and sky-high rent above you. First hundred meters cleared!' },
            { height: 1000, name: 'Storm Front', desc: 'Hold tight onto those wet rungs. Open skies and thunder ahead!' },
            { height: 10000, name: 'Stratosphere', desc: 'Cruising altitude. The curvature of Earth is clearly visible below.' },
            { height: 100000, name: 'Space', desc: 'Gravity gives up. You are officially in total zero gravity!' },
            { height: 1000000, name: 'Milky Way', desc: 'One million meters. You have journeyed way beyond reason.' },
            { height: 10000000, name: 'The Great Void', desc: 'Edge of the map? No, just the beginning of absolute nothingness.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Lore entries shown in the Logbook popup card when clicking altitude checkpoints on the right rail:
            { id: 0, name: 'Old Courtyard', desc: 'Your home turf. Concrete jungle and the creak of worn wooden steps. This is where your endless ascent begins.' },
            { id: 1, name: 'Rooftops', desc: 'Higher than TV antennas, pigeons, and city traffic. First hundred meters behind you, and the air is getting crisper.' },
            { id: 2, name: 'Storm Front', desc: 'Towering dense clouds, blinding lightning strikes, and the sharp scent of ozone. Rungs are slippery—hold tight!' },
            { id: 3, name: 'Stratosphere', desc: 'The edge of Earth\'s atmosphere. The sky fades to deep ultramarine, revealing the vivid blue curve of the globe.' },
            { id: 4, name: 'Deep Space', desc: 'Orbit of silent satellites and timeless void. Gravity has surrendered—the ladder is the only way up.' },
            { id: 5, name: 'Milky Way', desc: 'Spirals of distant galaxies, shimmering nebulae, and cosmic dust. A million meters above earthly troubles.' },
            { id: 6, name: 'The Great Void', desc: 'The event horizon at the edge of the known universe. Ultimate altitude where time dissolves into cosmic infinity.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Current zone names displayed below the main altitude counter:
            khrushchevka: 'Old Courtyard',
            roofs: 'Rooftops',
            storm_front: 'Storm Front',
            stratosphere: 'Stratosphere',
            open_space: 'Deep Space',
            milky_way: 'Milky Way',
            endless: 'The Great Void',

            // Hover tooltips (title) on the 7 altitude tracker checkpoints:
            checkpoint_0: '0 m — Old Courtyard',
            checkpoint_250: '250 m — Rooftops',
            checkpoint_1000: '1,000 m — Storm Front',
            checkpoint_10000: '10,000 m — Stratosphere',
            checkpoint_100000: '100,000 m — Deep Space',
            checkpoint_1000000: '1,000,000 m — Milky Way',
            checkpoint_10000000: '10,000,000 m — The Great Void',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'EXPLORED', // Green badge when the stage has been reached
            signal_lost_badge: 'SIGNAL LOST', // Red badge when the stage is still locked
            unknown_sector: 'Unknown Sector', // Masked title for locked stages
            height_label: 'Altitude: {height} m', // Altitude label on unlocked stages
            target_label: 'Target: {target} m ({remaining} m left)', // Progress required to unlock a stage
            locked_desc: 'Sensors detect severe anomalies at this altitude. Continue climbing to decrypt signal data.', // Sci-fi flavor text for locked stages
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Endurance Trial', // Header of the 20-minute session timer modal
            challenge_desc: 'Hang in the game for 20 minutes to claim an exclusive Retro skin for free!', // Challenge rules
            skin_name: '"Retro" Skin', // Name of the 8-bit arcade ladder skin
            ability_label: '<b style="color: #f1c40f;">Ability:</b> Catch the flying coin (loot: up to 125 <img src="assets/nut.webp" class="ui-ico-sm"> and 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).', // Perk description
            time_left: 'Time remaining:', // Label before the countdown timer
            challenge_complete: 'TRIAL COMPLETE!', // Fullscreen celebration header after 20 minutes
            challenge_reward: 'You survived 20 minutes! Here is your reward:', // Celebration subtitle
            epic_skin: 'EPIC "RETRO" SKIN', // Featured reward title
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS', // Badge on the home screen shortcut offer banner
            title: 'Add game to home screen and climb in just one tap!', // Main offer heading
            desc: 'Tap "Add" in the next prompt and the reward is yours', // Instructions for the browser/platform prompt
            reward_label: 'Install reward:', // Label inside the reward pill
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Reward amount
            add_btn: 'ADD (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Primary accept button
            decline_title: 'Sure you don\'t want the reward?', // Retention modal header (sad mascot) if player clicks "Later"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> are waiting for you. Adding the shortcut takes two seconds!', // Retention description
            decline_claim: 'Claim 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Retention accept button
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'CLIMBERS LEAGUE', // Top badge in the Hall of Fame header
            title: 'HALL OF FAME', // Main leaderboard title
            season_desc: 'Global space conquerors ranking', // Default subtitle
            tab_alltime: 'All Time', // All-time ranking tab
            tab_week: 'Season (Weekly)', // Weekly tournament tab
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Loading ranks...</div>', // Loading state text
            desc_alltime: 'Global space conquerors ranking', // Subtitle when All Time tab is active
            desc_week: 'Resets every Monday at 00:00', // Subtitle when Weekly tab is active
            anon: 'Anonymous Climber', // Fallback name for unauthorized players
            you_player: 'You (Player)', // Player's entry name in local/fallback mode
            you_vip: '<span>You (VIP)</span>', // Sticky bottom card label when player has VIP status
            you: '<span>You</span>', // Sticky bottom card label without VIP status
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'HOT CONTRACT', // Top badge in the Daily Deal header
            title: 'DEAL OF THE DAY', // Main header of the Daily Deal modal
            timer_label: 'New contract in', // Label before the midnight refresh countdown
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Refresh ({left}/5)', // Button to reroll the deal via ad (up to 5 times/day)
            reroll_exhausted: 'No refreshes left (0/5)', // Disabled button text when 0 rerolls remain
            in_collection: '✔ IN COLLECTION', // Button text when the featured item is already owned
            buy_btn: 'BUY: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Purchase button with old and discounted prices
            not_enough: 'Need {need} more <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Bank', // Button when player lacks gold (redirects to Golden Bank)
            discount_badge: '{rarity} • -{percent}% OFF', // Discount tag above the item name
            unique_ladder: 'Unique Ladder', // Fallback description for ladder deals
            luck_desc: '+{luck} to overall Luck', // Description when the deal features a Lucky Charm
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'SETTINGS', // Settings modal header
            language: '🌐 Language',
            music: 'Music & Ambience', // Slider 1: background music and wind/space ambience volume
            tap_sounds: 'Tap Sounds', // Slider 2: ladder tap sound effects volume
            speaker_bass: 'Subwoofer Bass', // Slider 3: passive Subwoofer bass volume
            newton_hit: 'Cradle Impact', // Slider 4: Newton Cradle clack volume
            rewards_sfx: 'Rewards & SFX', // Slider 5: UI, fanfare, and roulette sounds volume
            vibration: 'Haptic Feedback', // Checkbox: mobile vibration on tap
            support_btn: 'Support / Community', // Footer button for player support
            support_alert: 'Game community & support: t.me/your_game_group', // Alert text with community link
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Your Luck', // Header of the Luck breakdown & Charms modal
            total_label: 'Overall Stat', // Subtitle under the big green total luck number
            influence_title: 'How Luck affects gameplay:', // Info box heading
            influence_cases: 'Increases random crate drop rate while tapping.', // Bullet 1
            influence_nuts: 'Increases the amount of nuts found inside crates.', // Bullet 2
            influence_rarity: 'Boosts chances for Epic and Legendary skins.', // Bullet 3
            breakdown_title: 'Stat Breakdown:', // Heading above the list of active luck sources
            talismans_title: 'Charms Collection:', // Heading above the horizontal charm shop strip
            buff_label: 'Luck', // Short luck label
            plus_luck: '+{value} Luck', // Luck bonus format
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">EQUIPPED</div>', // Equipped tag on charm card
            equip_btn: 'Equip', // Equip button on owned charm card
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Locked</div>', // Locked tag on future charms in the chain
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Ladder "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: active ladder perk luck
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Charm "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: equipped charm luck
            cyber_item: '<div>🦾 Cyber Slot "{name}": <b style="color:#00ffff;">+{luck}</b></div>', // Breakdown line: Cyberpunk slot charm luck
            ad_fortune: '<div>📺 Ad Boost (Fortune Sign): <b style="color:#2ecc71;">+15</b></div>', // Breakdown line: temporary +15 Luck ad booster
            no_buffs: '<div>No active luck boosters.</div>', // Shown when total luck is 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'GOLD CREDITED!', // Default header in the mascot thank-you modal
            default_desc: 'Thanks for playing with us!', // Default thank-you message
            vip_badge: 'VIP STATUS ACTIVATED', // Golden badge shown when a purchase grants VIP status
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'STARTER PACK!', // Header after purchasing the Starter Pack
                desc: 'A mountain of cases, nuts, ad-free access, and the "Cyber" skin are yours! Thanks for your support <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'GOLD EARNED!', // Header after watching an ad for +15 Golden Nuts
                desc: 'You received <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> for watching an ad!',
            },
            adfree: {
                title: 'NO ADS!', // Header after purchasing No Ads
                desc: 'Forced ads removed forever! Thanks for supporting our game ❤️',
            },
            gold_credited: {
                title: 'GOLD CREDITED!', // Header after purchasing a Gold Pack
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> added to your balance. Thank you for your support ❤️! Enjoy climbing!',
            },
            shortcut_reward: {
                title: 'GOLD REWARD!', // Header after installing the home screen shortcut
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> added to your balance!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Thanks for playing! ❤️</span>',
            },
            deal: {
                buy_btn: 'BUY: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Daily Deal purchase button
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        //  Keep these short and punchy — they float on the canvas and fade quickly!
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'STARTER PACK UNLOCKED!', // Floating text when Starter Pack is bought
            sponsor: '📺 Sponsor: +{nuts} 🔩 & +{gold} 🟡!', // Bonus from Billboard ladder perk after watching any ad
            turbo_boost: 'TURBO BOOST 3x ({seconds}s)!', // Floating text when Turbo Climb is activated
            luck_boost: 'LUCK +{value}!', // Floating text when Luck booster is activated
            frenzy: 'NUT RAIN!', // Floating text when Nut Rain is activated
            autotap: 'AUTOPILOT (15 taps/s)!', // Floating text when Autopilot is activated
            turbo_income: 'TURBO BOOST 3x!', // Floating text when buying Turbo with gold
            luck_15: 'LUCK +15!', // Floating text when buying Luck with gold
            ufo_case: '+1 CASE!', // UFO loot pod reward: Wooden Crate
            ufo_safe: '+1 SAFE!', // UFO loot pod reward: Iron Safe
            billiard_crit: '🎱 2.5x! +{nuts} 🔩', // Every 8th hit proc from the 8-Ball cradle skin
            planet_turbo: '🌍 TURBO 3x (20s)!', // 1% random buff proc from Mini Earth cradle: Turbo
            planet_luck: '🌍 LUCK +15 (60s)!', // 1% random buff proc from Mini Earth cradle: Luck
            planet_frenzy: '🌍 NUT RAIN (15s)!', // 1% random buff proc from Mini Earth cradle: Nut Rain
            hawking: '💥 HAWKING RADIATION: +100,000 m!', // Easter egg burst when unequipping Singularity ladder at max +1,000% charge
            storm_discharge: 'DISCHARGE (10x)!', // 10 auto-tap burst from Plasma Globe after 5s of idle time
            absolute_unlocked: 'ABSOLUTE UNLOCKED!', // Floating text when unlocking 100% collection completion skin
            legendary_skin: '👑 LEGENDARY SKIN: {name}!', // Floating text when unlocking a milestone ladder skin
            retro_coin: '+{nuts} nuts, +{gold}!', // Floating text when catching the flying Retro coin
            banana_double: '🍌 2x TAP!', // Every 5th tap proc from the Banana ladder
            combo: '🔥 {mult}x ({cps} CPS)', // High-speed tapping multiplier proc from the Scratcher ladder
            case_drop: '+1 CRATE!', // Random Wooden Crate drop while tapping
            golden_case_milky: 'GOLDEN CASE (MILKY WAY)!', // When Milky Way perk upgrades a dropped safe into a Golden Case
            golden_case: 'GOLDEN CASE!', // Golden Case drop (e.g., from Marble Gold perk)
            safe_milky: 'SAFE (MILKY WAY)!', // When Milky Way perk upgrades a dropped crate into an Iron Safe
            safe_luck: 'SAFE (LUCK)!', // When high Luck upgrades a random crate drop into an Iron Safe
            iron_safe: 'IRON SAFE!', // Iron Safe awarded from tap meter (Golden ladder perk)
            rusty_nut: '+100', // Bonus 100 nuts from Holiday ladder gift
            rusty_box: '+1 CRATE!', // Bonus crate from Holiday ladder gift
            rusty_safe: '+1 SAFE!', // Bonus safe from Holiday ladder gift
            marble_double: '+{value} (2x)', // Doubled tap value
            jackpot: 'JACKPOT: +1!', // Micro-jackpot (+1 Golden Nut) when opening a Wooden Crate with 30+ Luck
            timed_box: '+1 CRATE CLAIMED!', // Floating text when collecting the 3-minute free crate
            crystal_gold: '+{value} (Crystal)!', // +3 Golden Nuts bonus when opening any case with Crystal ladder perk
            shop_spent: '-{cost} m', // Red floating text when spending meters on shop upgrades
            streak_dupe: 'Duplicate: +{value}!', // Gold compensation if Billboard skin is already owned on Ad Streak step 10
            streak_billboard: '🎉 BILLBOARD SKIN UNLOCKED!', // Unlocking Billboard skin on Ad Streak step 10
            calendar_day: 'Day {day} claimed!', // Floating text when claiming daily login reward
            calendar_skin: 'CALENDAR SKIN UNLOCKED!', // Unlocking Calendar skin on Day 7
            calendar_bonus: '+{cases} Golden Cases!', // Claiming Week 2+ Day 7 grand reward
            timewarp_report: '+{meters} m', // Time Machine report part: meters gained
            timewarp_nuts: '+{nuts} nuts', // Time Machine report part: nuts gained
            timewarp_gold: '+{gold} gold', // Time Machine report part: gold gained
            magnet_ufo: 'UFO MAGNET!', // Floating text when summoning a UFO pod
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Wooden' }, // Default wooden stepladder
            banana: { name: 'Banana' }, // Ladder made of bananas and palm leaves
            beer: { name: 'Beer Crate' }, // Ladder stacked from beer cans/bottles
            fire: { name: 'Fiery' }, // Blazing fire ladder
            fireman: { name: 'Fire Escape' }, // Red metal fireman ladder
            plastic: { name: 'Plastic' }, // Lightweight blue plastic ladder
            rusty: { name: 'Rusty' }, // Old corroded metal ladder that drops nuts
            tape: { name: 'Duct Tape' }, // Ladder held together with blue duct/insulation tape
            // === RARE ===
            book: { name: 'Bookstack' }, // Ladder built from stacks of books
            cactus: { name: 'Cactus' }, // Prickly green desert cactus ladder
            cement: { name: 'Concrete' }, // Heavy-duty reinforced concrete ladder
            neon: { name: 'Neon' }, // Glowing pink/cyan neon tube ladder
            scratch: { name: 'Scratcher' }, // Rope-wrapped cat scratching post ladder
            new_year: { name: 'Holiday' }, // Festive ladder decorated with lights and ornaments
            // === EPIC ===
            add_stair: { name: 'Billboard' }, // High-tech advertising screens ladder
            bone: { name: 'Skeletal' }, // Spooky bone and skull ladder
            crystal: { name: 'Crystal' }, // Shimmering blue crystal/diamond ladder
            cyber: { name: 'Cyberpunk' }, // Futuristic cybernetic ladder with circuit boards
            golden: { name: 'Golden' }, // Solid gleaming gold ladder
            goth: { name: 'Gothic' }, // Dark wrought-iron gothic gargoyle ladder
            ice: { name: 'Glacial' }, // Slippery frozen icicle ladder
            vine: { name: 'Ivy Vine' }, // Overgrown living jungle vine ladder
            calendar_stair: { name: 'Calendar' }, // Clockwork & calendar pages ladder (Day 7 login reward)
            // === LEGENDARY ===
            marble: { name: 'Marble Gold' }, // Classical white marble ladder with gold trim
            quant: { name: 'Quantum' }, // Glitching dimensional-shifting quantum ladder
            ufo: { name: 'UFO' }, // Alien saucer alloy ladder with green tractor beams
            mimic: { name: 'Mimic' }, // Monster chest-mimic ladder with teeth and eyes
            // === SPECIAL ===
            retro: { name: 'Retro' }, // 8-bit pixel arcade ladder (20-min trial reward)
            storm: { name: 'Storm Front' }, // Thundercloud & lightning ladder (unlocked at 1,000 m)
            strato: { name: 'Stratosphere' }, // High-altitude aero ladder (unlocked at 10,000 m)
            cosmo: { name: 'Deep Space' }, // Orbital spacecraft ladder (unlocked at 100,000 m)
            milkyway: { name: 'Milky Way' }, // Starry galactic nebula ladder (unlocked at 1,000,000 m)
            endless: { name: 'Singularity' }, // Black hole event horizon ladder (unlocked at 10,000,000 m)
            absolute: { name: 'ABSOLUTE' }, // Ultimate divine ladder (unlocked at 100% game completion)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Starting classic. Smells like the beginning of an endless journey.',
            banana: 'Doubles every 5th tap.',
            beer: '+5 to Luck stat.',
            fire: '+7 m per tap, -10 taps needed for crate.',
            fireman: 'Newton Cradle: +15 m per hit',
            plastic: 'Newton Cradle swings 0.15s faster',
            rusty: '65% chance to find <img src="assets/nut.webp" class="ui-ico"> with each tap.',
            tape: '10% discount in the Black Market.',
            book: '+7 to Luck stat.',
            cactus: 'Subwoofer: +20 m/s. Newton Cradle: +10 m per hit',
            cement: 'Newton Cradle: +50% power, but hits are 0.3s slower.',
            neon: 'Free reroll whenever you open a crate',
            scratch: 'At 5+ taps/sec, tap height is multiplied by 1.5x',
            new_year: 'Bonus gift every 150-250 taps.',
            bone: 'Doubles every tap',
            crystal: 'Each opened crate awards +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Unlocks an extra accessory slot.',
            golden: 'Maxing the tap meter awards an Iron Safe instead of a crate',
            goth: '20% discount on upgrades and nut-bought cases',
            ice: 'Slick climb: allows swipe-tapping across the ladder',
            vine: 'Increases tap power, Subwoofer, and Cradle by +40%.',
            add_stair: 'Boosters last 50% longer; each ad watched grants 20 <img src="assets/nut.webp" class="ui-ico"> and 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 to Luck; bonus chance for Legendary skins from safes.',
            marble: '25% chance for a Golden Case upon completing tap meter.',
            quant: 'Matter fission: 20% of gained nuts turn golden, -50 taps to crate.',
            ufo: 'Pulls an alien loot pod every 30 seconds',
            mimic: 'Mimicry: copies the passive abilities of 2 selected ladders.',
            retro: 'Catch the flying coin (loot: up to 125 <img src="assets/nut.webp" class="ui-ico"> and 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m per tap, but 5% chance of misfire on click.',
            strato: 'Thin air: boosts Subwoofer and Cradle speed by 40%.',
            cosmo: 'Increases idle resource accumulation cap to 3 hours.',
            milkyway: 'Inertia boost. 25% chance to upgrade any dropped case tier by +1.',
            endless: 'Increases height gains by +50% every minute (up to +1,000%). Changing ladder resets bonus.',
            absolute: 'Pinnacle of evolution: grants passive perks of all ladders simultaneously',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Vintage Speaker' }, // Default retro wooden speaker
            monster: { name: 'Monster Stack' }, // Concert rock amplifier stack
            cyber: { name: 'Cyber Speaker' }, // Futuristic neon cyberpunk subwoofer
            cool: { name: 'Supreme Subwoofer' }, // Golden stadium-grade sound system
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Base Subwoofer beat (Power x1)',
            monster: '+20% Subwoofer power. -2 minutes from free crate cooldown.',
            cyber: '+40% Subwoofer power. Earn 25% more <img src="assets/nut.webp" class="ui-ico"> and <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: '2x Subwoofer power. Every 3rd beat awards +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Bass: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Steel Spheres' }, // Classic chrome pendulum balls
            billiard: { name: '8-Ball' }, // Black pool 8-balls
            plasma: { name: 'Plasma Globe' }, // High-voltage Tesla plasma spheres
            planet: { name: 'Mini Earth' }, // Miniature planet Earth globes
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Base Newton Cradle hit (Damage x1)',
            billiard: '+25% Cradle damage. Every 8th hit grants 2.5x height and 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% Cradle damage. Electrified: at 6+ taps/s doubles tap height. After 5s idle — 10 auto-taps.',
            planet: '2x Cradle damage, +3 taps to crate per hit. +100% to all sources per active booster. 1% chance on hit to trigger random buff.',
            fallback: 'Hit: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Four-Leaf Clover' }, // Tier 1 charm (+3 Luck)
            horseshoe: { name: 'Golden Horseshoe' }, // Tier 2 charm (+5 Luck)
            paw: { name: 'Rabbit Foot' }, // Tier 3 charm (+8 Luck)
            coin: { name: 'Ancient Coin' }, // Tier 4 charm (+12 Luck)
            star: { name: 'Lucky Star' }, // Tier 5 charm (+18 Luck)
            key: { name: 'Skeleton Key' }, // Tier 6 charm (+25 Luck)
            sock: { name: 'Lucky Sock' }, // Tier 7 secret completion charm (+50 Luck)
            sock_alert: '🎉 INCREDIBLE! You collected all charms and unlocked the SECRET SOCK (+50 Luck)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'COMMON',
            rare: 'RARE',
            epic: 'EPIC',
            legendary: 'LEGENDARY',
            special: 'SPECIAL',
        },
    },

//китайский 3
    zh: {
    // ═══════════════════════════════════════
    //  ОБЩИЕ / ГЛОБАЛЬНЫЕ
    // ═══════════════════════════════════════
    game: {
        title: '太空阶梯',
        version: '太空阶梯 v1.0.0',
        height_display: '{height} 米',
        height_short: '{height} 米',
    },
    assets: {
        top_btn: 'assets/top_zh.webp',
        starter_banner: 'assets/starter_pack_zh.webp',
        bank_banner: 'assets/bank_window2_zh.webp',
    },

    // ═══════════════════════════════════════
    //  ЕДИНИЦЫ ИЗМЕРЕНИЯ
    // ═══════════════════════════════════════
    units: {
        meters_per_click: '{value} 米/点',
        meters_per_sec: '{value} 米/秒',
        meters_per_hit: '{value} 米/击',
        level: 'Lv.{level}',
        seconds_short: '{value}秒',
        meters: '{value} 米',
        meters_plus: '+{value} 米',
        pieces: '{count} 个',
        min_sec: '{min}分 {sec}秒',
        meters_per_click_short: '米/点',
        meters_per_sec_short: '米/秒',
        meters_per_hit_short: '米/击',
        level_short: 'Lv.',
        meters_unit: '米',
    },

    // ═══════════════════════════════════════
    //  ВЕРХНИЙ UI (HUD)
    // ═══════════════════════════════════════
    ui: {
        gold_tooltip: '充值金币',
        donate_btn: '充值',
        deal_btn: '特惠',
        top_btn_aria: '排行榜',
        zen_title: '禅定模式 (隐藏UI)',
        rewards_btn: '奖励',
        rewards_count: '{current}/10',
        buffs_btn: '增益',
        shop_btn: '商店',
        skins_btn: '皮肤',
        cases_btn_label: '宝箱:',
        free_box_label: '免费:',
        close_btn: '✕',
        close_aria: '关闭',
        cancel_btn: '取消',
        buy_btn: '购买',
        claim_btn: '领取',
        equip_btn: '装备',
        equipped_badge: '已装备',
        later_btn: '稍后',
        not_now_btn: '暂不',
        excellent_btn: '太棒了!',
        forward_btn: '向顶峰前进',
        claim_and_equip_btn: '领取并装备',
        just_claim_btn: '领取',
        selected_btn: '已选择',
        buy_for: '花费 {price} {currency} 购买',
    },

    // ═══════════════════════════════════════
    //  МАГАЗИН (Черный Рынок)
    // ═══════════════════════════════════════
    shop: {
        title: '黑市',
        buy_label: '购买',
        click_title: '点击',
        speaker_title: '音箱',
        newton_title: '牛顿摆',
        cost_suffix: '{cost} 米',
    },

    // ═══════════════════════════════════════
    //  ШТОРКА БАФФОВ
    // ═══════════════════════════════════════
    buffs: {
        drawer_title: '⚡ 增益效果',
        ad_btn: '广告',
        fortune_name: '幸运',
        fortune_desc: '幸运值 +15',
        turbo_name: '涡轮收益',
        turbo_desc: '所有收益 x3',
        frenzy_name: '螺母雨',
        frenzy_desc: '螺母如暴雨般落下',
        autotap_name: '自动驾驶',
        autotap_desc: '自动点击 15次/秒',
        timewarp_name: '时光机',
        timewarp_desc: '立即获得 5分钟 的离线收益',
        timewarp_instant: '立即',
        ufo_name: 'UFO 磁吸',
        ufo_desc: '吸引资源集装箱',
        ufo_summon: '召唤',
    },

    // ═══════════════════════════════════════
    //  ИНВЕНТАРЬ
    // ═══════════════════════════════════════
    inventory: {
        title: '装备库存',
        tab_ladders: '阶梯',
        tab_speakers: '音箱',
        tab_newton: '牛顿摆',
        tab_talismans: '护身符',
        available_skins: '可用皮肤:',
        no_effects: '无特效',
        default_ladder_desc: '阶梯基础属性',
        tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> 外观',
        tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> 特效',
        equipped_btn: '已装备',
        unequip_btn: '卸下',
        equip_btn: '装备',
        in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> 按顺序',
        fully_equipped: '✔ 完全装备',
        equip_all: '全部装备',
        visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> 外观已装备 ✓',
        visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> 仅外观',
        effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> 特效已装备 ✓',
        effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> 仅特效',
        item_locked: '<img src="assets/locker.webp" class="ui-ico"> 物品未解锁',
        mimic_setup: '⚙️ 配置槽位 ({slot0}, {slot1})',
        cyber_setup: '🦾 配置额外槽位',
        item_fallback: '物品',
        luck_plus: '幸运 +{luck}',
        slot_empty: '空',
        slot_default: '基础属性',
        slot_1_selected: '✔ 槽位 1',
        slot_2_selected: '✔ 槽位 2',
        select_action: '+ 选择',
        cyber_installed: '✔ 已安装',
    },

    // ═══════════════════════════════════════
    //  КАСТОМИЗАЦИЯ (Колонки/Шары)
    // ═══════════════════════════════════════
    customization: {
        title: '自定义设置',
        base_level: '基础等级: {level}',
        base_level_prefix: '基础等级:',
        power: '威力: {value}',
        power_mps: '威力: {value} 米/秒',
        upgrade_btn: '升级',
        speakers_title: '📻 音箱',
        newton_title: '⚪ 牛顿摆',
        hit_power: '击打: {power} 米 ({speed}秒)',
        upgrade_cost: '升级: {cost} 米',
    },

    // ═══════════════════════════════════════
    //  КИБЕРПАНК
    // ═══════════════════════════════════════
    cyber: {
        title: '🦾 赛博朋克槽位',
        desc: '选择 1 个已解锁配件（音箱、牛顿摆或护身符）的额外特效:',
        tab_speakers: '音箱',
        tab_newton: '牛顿摆',
        tab_talismans: '护身符',
        install_btn: '安装植入体',
    },

    // ═══════════════════════════════════════
    //  МИМИК
    // ═══════════════════════════════════════
    mimic: {
        title: '🎭 拟态能力',
        desc: '选择 2 个已解锁的阶梯来复制它们的被动效果:',
        slot1: '槽位 1',
        slot2: '槽位 2',
        apply_btn: '应用能力',
    },

    // ═══════════════════════════════════════
    //  ПОДТВЕРЖДЕНИЕ ПОКУПКИ
    // ═══════════════════════════════════════
    confirm: {
        title: '确认',
        desc: '消耗金币吗？',
        buy_btn: '购买 ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
        buy_label: '购买',
        buff_title: '激活增益',
        buff_desc: '消耗 {cost} <img src="assets/golden_nut.webp" class="ui-ico"> 激活效果？',
        not_enough_gold: '金币不足',
        gear_title: '购买配件',
        gear_desc: '花费 {price} <img src="assets/golden_nut.webp" class="ui-ico"> 购买 "{name}"？',
        talisman_title: '新护身符',
        talisman_desc: '花费 {price} <img src="assets/golden_nut.webp" class="ui-ico"> 购买护身符 "{name}"？',
        deal_title: '每日特惠',
        deal_desc: '花费 {price} <img src="assets/golden_nut.webp" class="ui-ico"> 购买 "{name}"？',
        item_title: '购买物品',
        item_desc: '花费 {price} 购买 "{name}"？',
        ufo_desc: '花费 39 <img src="assets/golden_nut.webp" class="ui-ico"> 召唤 UFO？',
    },

    // ═══════════════════════════════════════
    //  ДОНАТ / ЗОЛОТОЙ БАНК
    // ═══════════════════════════════════════
    donate: {
        badge: '金库',
        title: '黄金银行',
        vip_note: '任意购买即可永久获得排行榜 <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> 身份！',
        free_gold_title: '免费金币',
        free_gold_val: '观看视频 +15 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        free_gold_btn: '领取',
        hit_badge: '🔥 热门',
        adfree_title: '免广告 + VIP',
        adfree_desc: '永久关闭强制广告！',
        pack_handful: '一把螺母',
        pack_pouch: '一袋螺母',
        pack_pouch_tag: '够买宝箱',
        pack_crate: '一箱螺母',
        pack_safe: '大亨保险箱',
        pack_safe_tag: '+40% 超值',
        purchased: '已购买',
        price_99: '99 Yan',
        price_249: '249 Yan',
        price_590: '590 Yan',
        price_1390: '1 390 Yan',
    },

    // ═══════════════════════════════════════
    //  СТАРТЕР-ПАК
    // ═══════════════════════════════════════
    starter: {
        badge: '🔥 超值 x50',
        timer_text: '优惠剩余时间:',
        golden_nuts: '金螺母',
        regular_nuts: '普通螺母',
        wooden_boxes: '木箱',
        iron_safes: '铁保险箱',
        golden_cases: '金宝箱',
        cyber_speaker: '“赛博”',
        cyber_speaker_sub: '音箱 (史诗)',
        no_ads: '免广告',
        no_ads_sub: '永久关闭横幅广告',
        vip_status: 'VIP 身份',
        vip_status_sub: '排行榜永久金框',
        claim_btn: '全部领取 <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2 099 Yan</s> 39 Yan',
        timer_badge: '39 Yan',
    },

    // ═══════════════════════════════════════
    //  СКЛАД КЕЙСОВ
    // ═══════════════════════════════════════
    cases: {
        odds_nuts: '螺母',
        badge: '藏匿处',
        title: '宝箱仓库',
        safe_tile: '保险箱',
        bonus_label: '仓库奖励',
        bonus_gold: '+15 金螺母',
        wooden_name: '木箱',
        iron_name: '铁保险箱',
        gold_name: '黄金集装箱',
        nut_loot_50: '50 螺母',
        nut_loot_150: '150 螺母',
        nut_loot_300: '300 螺母',
        open_btn: '开启',
        buy_more_title: '购买更多',
        open_all_title: '全部开启',
        in_game: '游戏中',
        buy_price: '购买 {price} <img src="{icon}" class="ui-ico-sm">',
        buy_multi_title: '批量购买',
        ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 领取',
        ready: '就绪!',
        popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> 宝箱!',
        box_label: '宝箱: {box}/{needed}',
    },

    // ═══════════════════════════════════════
    //  МУЛЬТИПОКУПКА
    // ═══════════════════════════════════════
    multi_buy: {
        choose_amount: '选择数量:',
        total: '总计:',
    },

    // ═══════════════════════════════════════
    //  РЕЗУЛЬТАТЫ ПАЧКИ
    // ═══════════════════════════════════════
    batch_result: {
        title: '已开启 {count} 个宝箱',
        claim_all: '全部领取',
        open_more: '再来 x10',
        open_more_count: '再来 x{count}',
        new_count: '<span style="color:#2ecc71;">新增: {count} 🪜</span>',
        new_zero: '<span style="color:#7f8c8d;">新增: 0</span>',
        new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ 全新!</span>',
        duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">重复 (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
    },

    // ═══════════════════════════════════════
    //  РУЛЕТКА (ГАЧА)
    // ═══════════════════════════════════════
    gacha: {
        title: '开启宝箱中...',
        opening_title: '正在开启: {name}',
        again_btn: '再来',
        again_count: '再来 ({count})',
        batch_btn: 'x10',
        skip_btn: '跳过 ⏩',
        close_btn: '关闭',
        reroll_btn: '📺 看广告重抽',
        reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> 重抽 (霓虹)',
        reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 看广告重抽',
        duplicate: '重复 → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
    },

    // ═══════════════════════════════════════
    //  ПРЕДПРОСМОТР ЛЕСТНИЦЫ
    // ═══════════════════════════════════════
    ladder_preview: {
        effect_desc: '特效描述',
    },

    // ═══════════════════════════════════════
    //  ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ
    // ═══════════════════════════════════════
    calendar: {
        title: '签到奖励',
        subtitle: '每日签到！第 7 天可获得专属阶梯。',
        missed_alert: '⚠️ 你错过了一天！',
        restore_streak: '看广告恢复',
        reset_day1: '第 1 天',
        day7_title: '第 7 天: 超级大奖',
        day7_desc: '“日历”皮肤 (史诗)',
        double_ad: '▶ 看广告翻倍 (x2)',
        claim_normal: '领取普通',
        day_badge: '第 {day} 天',
        day7_title_loop: '第 7 天: 超级奖励',
        day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> 金宝箱',
        today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">今天!</span>',
        double_claim_loop: '▶ 看广告翻倍 (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_normal_loop: '领取普通 (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_skin_btn: '领取“日历”皮肤!',
        claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ 已领取</span>',
        day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 第 7 天</span>',
    },

    // ═══════════════════════════════════════
    //  РЕКЛАМНЫЙ СТРИК
    // ═══════════════════════════════════════
    ad_streak: {
        title: '广告连击',
        reset_timer: '重置剩余:',
        footer: '游戏内观看的任何广告均计入进度。',
        claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ 已领取</span>',
        claim_btn: '领取',
        locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} 个视频</span>',
        popup_safe: '+1 保险箱!',
        popup_nuts: '+600 螺母!',
        popup_gold: '+{gold} 金币!',
    },

    // ═══════════════════════════════════════
    //  РЕКЛАМНЫЙ СТРИК — НАГРАДЫ
    // ═══════════════════════════════════════
    ad_streak_rewards: [
        { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> 螺母' },
        { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15分钟)' },
        { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> 螺母' },
        { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> 保险箱' },
        { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> 涡轮 x3 (3分钟)' },
        { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 8, title: '+1 000 <img src="assets/nut.webp" class="ui-ico"> 螺母' },
        { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> “广告牌”皮肤' },
    ],

    // ═══════════════════════════════════════
    //  ЕЖЕДНЕВНЫЙ КАЛЕНДАРЬ — НАГРАДЫ
    // ═══════════════════════════════════════
    calendar_rewards: [
        { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
        { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
        { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 7, text: '“日历”皮肤' },
    ],

    // ═══════════════════════════════════════
    //  МОДАЛЬНОЕ ОКНО ОФФЛАЙНА
    // ═══════════════════════════════════════
    offline: {
        title: '欢迎回来！',
        away_time: '离线时间: {time}',
        away_prefix: '离线时间:',
        limit_label: '上限: {limit}',
        limit_prefix: '上限:',
        speaker_earned: '音箱收益:',
        newton_earned: '牛顿摆收益:',
        cases_found: '发现宝箱: {count} 个',
        cases_found_prefix: '发现宝箱:',
        total_earned: '总收益:',
        double_ad: '▶ 看广告翻倍',
        claim_normal: '领取普通',
        limit_3h: '3 小时',
        limit_30m: '30 分钟',
        double_btn: '▶ 看广告翻倍 (+{meters} 米, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
    },

    // ═══════════════════════════════════════
    //  РУБЕЖИ ВЫСОТЫ
    // ═══════════════════════════════════════
    milestones: {
        stamp: '已征服',
        double_ad: '▶ 看广告翻倍 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        claim_normal: '领取普通 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
    },

    // ═══════════════════════════════════════
    //  БАЗА РУБЕЖЕЙ ВЫСОТЫ
    // ═══════════════════════════════════════
    height_milestones: [
        { height: 250, name: '屋顶', desc: '比鸟儿和房租更高的地方。第一个百米已在身后！' },
        { height: 1000, name: '雷暴前线', desc: '抓紧湿滑的横档。前方是开阔的空域！' },
        { height: 10000, name: '平流层', desc: '民航客机的高度。地球已明显呈现弧度。' },
        { height: 100000, name: '太空', desc: '重力已屈服。你已正式处于完全失重状态！' },
        { height: 1000000, name: '银河系', desc: '一百万米。你已离开理智的边界。' },
        { height: 10000000, name: '无垠深渊', desc: '地图的尽头？不，这只是绝对虚空的开始。' },
    ],

    // ═══════════════════════════════════════
    //  ЛОР ЛОКАЦИЙ (БОРТОВОЙ ЖУРНАЛ)
    // ═══════════════════════════════════════
    stages_lore: [
        { id: 0, name: '老小区', desc: '熟悉的庭院。混凝土丛林与老旧木横档的沙沙声。你的无尽之旅从这里开始。' },
        { id: 1, name: '屋顶', desc: '高于天线、鸽子和城市拥堵。第一个百米已在身后，周围的空气变得更加清新。' },
        { id: 2, name: '雷暴前线', desc: '厚厚的云层墙壁，耀眼的闪电和臭氧的味道。横档湿滑，抓紧了！' },
        { id: 3, name: '平流层', desc: '地球大气层的边缘。天空暗化为深邃的海蓝色，下方清晰可见地球的蓝色弧线。' },
        { id: 4, name: '外太空', desc: '稀有卫星的轨道与永恒的寂静。重力已屈服——只有阶梯通向更高处。' },
        { id: 5, name: '银河系', desc: '遥远星系的螺旋、星云的闪烁与星尘。距离地球烦恼百万米之遥。' },
        { id: 6, name: '无垠深渊', desc: '事件视界与已知宇宙的边缘。绝对的高度，时间与宇宙空间在此交融。' },
    ],

    // ═══════════════════════════════════════
    //  ЛОКАЦИИ (HUD name + чекпоинты)
    // ═══════════════════════════════════════
    locations: {
        khrushchevka: '老小区',
        roofs: '屋顶',
        storm_front: '雷暴前线',
        stratosphere: '平流层',
        open_space: '外太空',
        milky_way: '银河系',
        endless: '无垠深渊',
        checkpoint_0: '0 米 — 老小区',
        checkpoint_250: '250 米 — 屋顶',
        checkpoint_1000: '1 000 米 — 雷暴前线',
        checkpoint_10000: '10 000 米 — 平流层',
        checkpoint_100000: '100 000 米 — 外太空',
        checkpoint_1000000: '1 000 000 米 — 银河系',
        checkpoint_10000000: '10 000 000 米 — 无垠深渊',
    },

    // ═══════════════════════════════════════
    //  КАРТОЧКА ЛОКАЦИИ (Бортовой журнал)
    // ═══════════════════════════════════════
    location_card: {
        explored_badge: '已探索',
        signal_lost_badge: '信号丢失',
        unknown_sector: '未知区域',
        height_label: '高度: {height} 米',
        target_label: '目标: {target} 米 (剩余: {remaining} 米)',
        locked_desc: '传感器在此高度检测到异常。继续攀登以解密数据。',
    },

    // ═══════════════════════════════════════
    //  РЕТРО-ИСПЫТАНИЕ
    // ═══════════════════════════════════════
    retro: {
        challenge_title: '耐力挑战',
        challenge_desc: '在游戏中坚持 20 分钟，即可免费获得独特的复古外观！',
        skin_name: '“复古”皮肤',
        ability_label: '<b style="color: #f1c40f;">能力:</b> 捕捉飞行的硬币 (奖励: 最多 125 <img src="assets/nut.webp" class="ui-ico-sm"> 和 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">)。',
        time_left: '剩余时间:',
        challenge_complete: '挑战完成！',
        challenge_reward: '你坚持了 20 分钟！这是你应得的奖励:',
        epic_skin: '史诗皮肤 “复古”',
    },

    // ═══════════════════════════════════════
    //  ЯРЛЫК НА ЭКРАН (ШОРТКАТ)
    // ═══════════════════════════════════════
    shortcut: {
        bonus_badge: '奖励',
        title: '将游戏添加到手机桌面，一键攀登！',
        desc: '在下一个窗口中点击“添加”，即可领取奖励',
        reward_label: '安装奖励:',
        reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
        add_btn: '添加 (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        decline_title: '确定不要奖励吗？',
        decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> 在等你。只需几秒钟即可添加快捷方式，游戏将随时触手可及。',
        decline_claim: '领取 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
    },

    // ═══════════════════════════════════════
    //  ЛИДЕРБОРД
    // ═══════════════════════════════════════
    leaderboard: {
        league_badge: '登山者联盟',
        title: '名人堂',
        season_desc: '太空征服者总排行榜',
        tab_alltime: '历史总榜',
        tab_week: '赛季 (本周)',
        loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">加载排行榜中...</div>',
        desc_alltime: '太空征服者总排行榜',
        desc_week: '每周一 00:00 重置',
        anon: '匿名登山者',
        you_player: '你 (玩家)',
        you_vip: '<span>你 (VIP)</span>',
        you: '<span>你</span>',
    },

    // ═══════════════════════════════════════
    //  СДЕЛКА ДНЯ
    // ═══════════════════════════════════════
    daily_deal: {
        badge: '火热合约',
        title: '每日特惠',
        timer_label: '合约更新剩余',
        reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> 刷新 ({left}/5)',
        reroll_exhausted: '次数已用尽 (0/5)',
        in_collection: '✔ 已拥有',
        buy_btn: '购买: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        not_enough: '缺少 {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → 去银行',
        discount_badge: '{rarity} • 折扣 -{percent}%',
        unique_ladder: '独特阶梯',
        luck_desc: '总幸运值 +{luck}',
    },

    // ═══════════════════════════════════════
    //  НАСТРОЙКИ
    // ═══════════════════════════════════════
    settings: {
        title: '设置',
        language: '🌐 语言',
        music: '音乐与环境音',
        tap_sounds: '点击音效',
        speaker_bass: '音箱低音',
        newton_hit: '摆球撞击',
        rewards_sfx: '奖励与特效',
        vibration: '振动 (手机)',
        support_btn: '支持 / 社区',
        support_alert: '游戏社区与支持: t.me/your_game_group',
    },

    // ═══════════════════════════════════════
    //  УДАЧА
    // ═══════════════════════════════════════
    luck: {
        title: '你的幸运值',
        total_label: '总数值',
        influence_title: '幸运值的影响:',
        influence_cases: '增加点击阶梯时掉落宝箱的几率。',
        influence_nuts: '增加宝箱中的螺母数量。',
        influence_rarity: '提高从保险箱和集装箱中开出史诗和传奇阶梯的几率。',
        breakdown_title: '幸运值来源:',
        talismans_title: '护身符收藏:',
        buff_label: '幸运',
        plus_luck: '幸运 +{value}',
        equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">已装备</div>',
        equip_btn: '装备',
        locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 未解锁</div>',
        ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> 阶梯 “{name}”: <b style="color:#2ecc71;">+{luck}</b></div>',
        talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> 护身符 “{name}”: <b style="color:#2ecc71;">+{luck}</b></div>',
        cyber_item: '<div>🦾 赛博槽位 “{name}”: <b style="color:#00ffff;">+{luck}</b></div>',
        ad_fortune: '<div>📺 广告增益 (幸运符): <b style="color:#2ecc71;">+15</b></div>',
        no_buffs: '<div>无活跃幸运增益。</div>',
    },

    // ═══════════════════════════════════════
    //  БЛАГОДАРНОСТЬ (МАСКОТ)
    // ═══════════════════════════════════════
    thank_you: {
        default_title: '金币已到账！',
        default_desc: '感谢你的支持！',
        vip_badge: 'VIP 身份已激活',
    },

    // ═══════════════════════════════════════
    //  ДАННЫЕ showThankYouModal
    // ═══════════════════════════════════════
    modal: {
        starter: {
            title: '新手礼包！',
            desc: '海量宝箱、资源、免广告和“赛博”皮肤归你了！感谢支持 <img src="assets/crown.webp" class="ui-ico-sm">',
        },
        bank_gold: {
            title: '金币已获取！',
            desc: '观看广告已为你发放 <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b>！',
        },
        adfree: {
            title: '免广告！',
            desc: '横幅广告已永久关闭！感谢你对游戏发展的支持 ❤️',
        },
        gold_credited: {
            title: '金币已到账！',
            desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> 已加入余额。感谢你对游戏发展的支持 ❤️！祝你购物愉快！',
        },
        shortcut_reward: {
            title: '金币已到账！',
            desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> 已加入余额！<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">感谢你的支持！❤️</span>',
        },
        deal: {
            buy_btn: '购买: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },
    },

    // ═══════════════════════════════════════
    //  ПАРТИКЛЫ (ВСПЛЫВАЮЩИЕ ТЕКСТЫ НА ХОЛСТЕ)
    // ═══════════════════════════════════════
    particle: {
        starter_obtained: '已获得新手礼包！',
        sponsor: '📺 赞助商: +{nuts} 🔩 和 +{gold} 🟡！',
        turbo_boost: '涡轮收益 x3 ({seconds}秒)！',
        luck_boost: '幸运 +{value}！',
        frenzy: '螺母雨！',
        autotap: '自动驾驶 (15 点击/秒)！',
        turbo_income: '涡轮收益 x3！',
        luck_15: '幸运 +15！',
        ufo_case: '+1 宝箱！',
        ufo_safe: '+1 保险箱！',
        billiard_crit: '🎱 x2.5! +{nuts} 🔩',
        planet_turbo: '🌍 涡轮 x3 (20秒)！',
        planet_luck: '🌍 幸运 +15 (60秒)！',
        planet_frenzy: '🌍 螺母雨 (15秒)！',
        hawking: '💥 霍金辐射: +100 000 米！',
        storm_discharge: '放电 (x10)！',
        absolute_unlocked: '绝对形态已解锁！',
        legendary_skin: '👑 传奇皮肤: {name}！',
        retro_coin: '+{nuts} 螺母, +{gold}！',
        banana_double: '🍌 x2 点击！',
        combo: '🔥 x{mult} ({cps} CPS)',
        case_drop: '+1 宝箱！',
        golden_case_milky: '金宝箱 (银河系)！',
        golden_case: '金宝箱！',
        safe_milky: '保险箱 (银河系)！',
        safe_luck: '保险箱 (幸运)！',
        iron_safe: '铁保险箱！',
        rusty_nut: '+100',
        rusty_box: '+1 宝箱！',
        rusty_safe: '+1 保险箱！',
        marble_double: '+{value} (x2)',
        jackpot: '头奖: +1！',
        timed_box: '+1 宝箱已领取！',
        crystal_gold: '+{value} (水晶)！',
        shop_spent: '-{cost} 米',
        streak_dupe: '重复: +{value}！',
        streak_billboard: '🎉 已获得广告牌皮肤！',
        calendar_day: '第 {day} 天奖励已领取！',
        calendar_skin: '已获得日历皮肤！',
        calendar_bonus: '+{cases} 金宝箱！',
        timewarp_report: '+{meters} 米',
        timewarp_nuts: '+{nuts} 螺母',
        timewarp_gold: '+{gold} 金币',
        magnet_ufo: 'UFO 磁吸！',
    },

    // ═══════════════════════════════════════
    //  ЛЕСТНИЦЫ — ИМЕНА (Скины стремянки)
    // ═══════════════════════════════════════
    ladder: {
        wood: { name: '木制' },
        banana: { name: '香蕉' },
        beer: { name: '啤酒' },
        fire: { name: '火焰' },
        fireman: { name: '消防' },
        plastic: { name: '塑料' },
        rusty: { name: '生锈' },
        tape: { name: '绝缘胶带' },
        book: { name: '书籍' },
        cactus: { name: '仙人掌' },
        cement: { name: '水泥' },
        neon: { name: '霓虹' },
        scratch: { name: '猫抓板' },
        new_year: { name: '新年' },
        add_stair: { name: '广告牌' },
        bone: { name: '白骨' },
        crystal: { name: '水晶' },
        cyber: { name: '赛博朋克' },
        golden: { name: '黄金' },
        goth: { name: '哥特' },
        ice: { name: '冰霜' },
        vine: { name: '藤蔓' },
        calendar_stair: { name: '日历' },
        marble: { name: '大理石金' },
        quant: { name: '量子' },
        ufo: { name: 'UFO' },
        mimic: { name: '拟态' },
        retro: { name: '复古' },
        storm: { name: '雷暴前线' },
        strato: { name: '平流层' },
        cosmo: { name: '外太空' },
        milkyway: { name: '银河系' },
        endless: { name: '奇点' },
        absolute: { name: '绝对形态' },
    },

    // ═══════════════════════════════════════
    //  ЛЕСТНИЦЫ — ОПИСАНИЯ БАФФОВ
    // ═══════════════════════════════════════
    ladder_desc: {
        wood: '初始经典。散发着无尽旅程开端的气息。',
        banana: '每第 5 次点击收益翻倍。',
        beer: '幸运值 +5。',
        fire: '每次点击 +7 米，免费宝箱进度需求 -10 次点击。',
        fireman: '牛顿摆: 每次击打 +15 米',
        plastic: '牛顿摆击打速度 +0.15 秒',
        rusty: '每次点击有 65% 几率获得 <img src="assets/nut.webp" class="ui-ico">。',
        tape: '商店升级费用减免 10%。',
        book: '幸运值 +7。',
        cactus: '音箱: +20 米/秒。牛顿摆: 每次击打 +10 米',
        cement: '牛顿摆: 伤害 +50%，但击打间隔 +0.3 秒。',
        neon: '每次开启宝箱可免费重抽一次',
        scratch: '点击速度 ≥5 次/秒时，每次点击高度收益 x1.5',
        new_year: '每 150-250 次点击获得一份礼物。',
        bone: '每次点击收益翻倍',
        crystal: '每次开启宝箱额外获得 +3 <img src="assets/golden_nut.webp" class="ui-ico">。',
        cyber: '解锁一个额外的配件槽位。',
        golden: '填满点击进度条可获得铁保险箱，而非木箱',
        goth: '商店升级和宝箱费用减免 20%',
        ice: '滑行: 可通过在屏幕上滑动来点击',
        vine: '点击、音箱和牛顿摆的威力 +40%。',
        add_stair: '增益效果持续时间 +50%；每次观看广告额外获得 20 <img src="assets/nut.webp" class="ui-ico"> 和 3 <img src="assets/golden_nut.webp" class="ui-ico">。',
        calendar_stair: '幸运值 +10；从保险箱中获得传奇皮肤的额外几率。',
        marble: '填满点击进度条有 25% 几率获得金宝箱。',
        quant: '物质分裂: 20% 的普通螺母转化为金螺母，免费宝箱进度需求 -50 次点击。',
        ufo: '每 30 秒吸引一个外星集装箱',
        mimic: '拟态: 复制 2 个选定阶梯的能力。',
        retro: '捕捉飞行的硬币 (奖励: 最多 125 <img src="assets/nut.webp" class="ui-ico"> 和 15 <img src="assets/golden_nut.webp" class="ui-ico">)。',
        storm: '每次点击爬升 +20 米，但有 5% 几率在点击时损坏。',
        strato: '稀薄空气: 音箱和牛顿摆的工作速度 +40%。',
        cosmo: '离线资源积累上限提升至 3 小时。',
        milkyway: '阶梯惯性加速。有 25% 几率将掉落的任何宝箱稀有度提升一级。',
        endless: '每分钟增加获得的高度收益 (点击、音箱、牛顿摆) +50% (最高 +1 000%)。更换阶梯将重置累积收益',
        absolute: '进化之巅: 立即拥有所有阶梯的被动效果',
    },

    // ═══════════════════════════════════════
    //  КОЛОНКИ — ИМЕНА (Скины Сабвуфера)
    // ═══════════════════════════════════════
    speaker: {
        old: { name: '复古音箱' },
        monster: { name: '怪兽音响' },
        cyber: { name: '赛博音箱' },
        cool: { name: '终极音响' },
    },

    // ═══════════════════════════════════════
    //  КОЛОНКИ — ОПИСАНИЯ
    // ═══════════════════════════════════════
    speaker_desc: {
        old: '音箱基础节奏 (威力 x1)',
        monster: '音箱威力 +20%。免费宝箱计时器 -2 分钟。',
        cyber: '音箱威力 +40%。额外获得 25% 的 <img src="assets/nut.webp" class="ui-ico"> 和 <img src="assets/golden_nut.webp" class="ui-ico">！',
        cool: '音箱威力 x2。每第 3 次低音带来 +1 <img src="assets/golden_nut.webp" class="ui-ico">。',
        fallback: '低音: x{mult}',
    },

    // ═══════════════════════════════════════
    //  ШАРЫ НЬЮТОНА — ИМЕНА (Скины маятника)
    // ═══════════════════════════════════════
    newton: {
        steel: { name: '钢球' },
        billiard: { name: '8号台球' },
        plasma: { name: '等离子球' },
        planet: { name: '微型地球' },
    },

    // ═══════════════════════════════════════
    //  ШАРЫ НЬЮТОНА — ОПИСАНИЯ
    // ═══════════════════════════════════════
    newton_desc: {
        steel: '牛顿摆基础自动击打 (伤害 x1)',
        billiard: '球伤害 +25%。每第 8 次击打提供 x2.5 高度和 3–5 <img src="assets/nut.webp" class="ui-ico">。',
        plasma: '球伤害 +50%。带电状态: 点击速度 ≥6 次/秒时，每次点击高度翻倍。5 秒无操作后 — 自动点击 10 次。',
        planet: '球伤害 x2，每次击打使宝箱进度 +3 次点击。每个活跃增益使点击、音箱和球威力 +100%。1% 几率使击打触发随机增益。',
        fallback: '击打: x{mult}',
    },

    // ═══════════════════════════════════════
    //  ТАЛИСМАНЫ (Брелоки на удачу)
    // ═══════════════════════════════════════
    talisman: {
        clover: { name: '四叶草' },
        horseshoe: { name: '金马蹄铁' },
        paw: { name: '兔脚' },
        coin: { name: '古钱币' },
        star: { name: '幸运星' },
        key: { name: '万能钥匙' },
        sock: { name: '幸运袜' },
        sock_alert: '🎉 难以置信！你已收集所有护身符并解锁了隐藏幸运袜 (+50 幸运值)！',
    },

    // ═══════════════════════════════════════
    //  РЕДКОСТИ ПРЕДМЕТОВ
    // ═══════════════════════════════════════
    rarity: {
        common: '普通',
        rare: '稀有',
        epic: '史诗',
        legendary: '传奇',
        special: '特殊',
    },
},

 //испанский 4 
    es: {
    game: {
        title: 'Escalera Espacial',
        version: 'Escalera Espacial v1.0.0',
        height_display: '{height} m',
        height_short: '{height} m',
    },
    assets: {
        top_btn: 'assets/top_en.webp',
        starter_banner: 'assets/starter_pack_en.webp',
        bank_banner: 'assets/bank_window2_en.webp',
    },
    units: {
        meters_per_click: '{value} m/toque',
        meters_per_sec: '{value} m/s',
        meters_per_hit: '{value} m/golpe',
        level: 'Nv. {level}',
        seconds_short: '{value}s',
        meters: '{value} m',
        meters_plus: '+{value} m',
        pieces: '{count} uds.',
        min_sec: '{min}m {sec}s',
        meters_per_click_short: 'm/toque',
        meters_per_sec_short: 'm/s',
        meters_per_hit_short: 'm/golpe',
        level_short: 'Nv.',
        meters_unit: 'm',
    },
    ui: {
        gold_tooltip: 'Consigue nueces doradas',
        donate_btn: 'Banco',
        deal_btn: 'Oferta',
        top_btn_aria: 'Salón de la fama',
        zen_title: 'Modo zen (ocultar interfaz)',
        rewards_btn: 'Premios',
        rewards_count: '{current}/10',
        buffs_btn: 'BONUS',
        shop_btn: 'TIENDA',
        skins_btn: 'Aspectos',
        cases_btn_label: 'Cajas:',
        free_box_label: 'Gratis:',
        close_btn: '✕',
        close_aria: 'Cerrar',
        cancel_btn: 'Cancelar',
        buy_btn: 'Comprar',
        claim_btn: 'Reclamar',
        equip_btn: 'Equipar',
        equipped_badge: 'EQUIPADO',
        later_btn: 'Luego',
        not_now_btn: 'Ahora no',
        excellent_btn: '¡GENIAL!',
        forward_btn: '¡HACIA ARRIBA!',
        claim_and_equip_btn: 'RECLAMAR Y EQUIPAR',
        just_claim_btn: 'Solo reclamar',
        selected_btn: 'SELECCIONADO',
        buy_for: 'COMPRAR POR {price} {currency}',
    },
    shop: {
        title: 'Mercado negro',
        buy_label: 'COMPRAR',
        click_title: 'PODER DE TOQUE',
        speaker_title: 'SUBWOOFER',
        newton_title: 'PÉNDULO DE NEWTON',
        cost_suffix: '{cost} m',
    },
    buffs: {
        drawer_title: '⚡ POTENCIADORES',
        ad_btn: 'Ver anuncio',
        fortune_name: 'SUERTE',
        fortune_desc: '+15 de suerte',
        turbo_name: 'SUBIDA TURBO',
        turbo_desc: 'Multiplica por 3 toda la ganancia de altura',
        frenzy_name: 'LLUVIA DE NUECES',
        frenzy_desc: 'Cada toque hace caer nueces del cielo',
        autotap_name: 'PILOTO AUTOMÁTICO',
        autotap_desc: 'Toca la escalera 15 veces por segundo',
        timewarp_name: 'MÁQUINA DEL TIEMPO',
        timewarp_desc: 'Obtén al instante 5 min de ganancias pasivas',
        timewarp_instant: 'Instantáneo',
        ufo_name: 'IMÁN OVNI',
        ufo_desc: 'Atrae una cápsula alienígena con recursos',
        ufo_summon: 'Invocar',
    },
    inventory: {
        title: 'Inventario de equipo',
        tab_ladders: 'Escaleras',
        tab_speakers: 'Altavoces',
        tab_newton: 'Péndulos',
        tab_talismans: 'Amuletos',
        available_skins: 'Aspectos disponibles:',
        no_effects: 'Sin efectos adicionales',
        default_ladder_desc: 'Características estándar de la escalera',
        tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Aspecto',
        tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Ventaja',
        equipped_btn: 'EQUIPADO',
        unequip_btn: 'QUITAR',
        equip_btn: 'Equipar',
        in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Por orden',
        fully_equipped: '✔ TODO EQUIPADO',
        equip_all: 'EQUIPAR AMBOS',
        visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Aspecto activo ✓',
        visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Solo aspecto',
        effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Ventaja activa ✓',
        effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Solo ventaja',
        item_locked: '<img src="assets/locker.webp" class="ui-ico"> Objeto bloqueado',
        mimic_setup: '⚙️ Configurar ranuras ({slot0}, {slot1})',
        cyber_setup: '🦾 Ajustar ranura extra',
        item_fallback: 'Objeto',
        luck_plus: '+{luck} de suerte',
        slot_empty: 'Vacía',
        slot_default: 'Estadísticas estándar',
        slot_1_selected: '✔ Ranura 1',
        slot_2_selected: '✔ Ranura 2',
        select_action: '+ Elegir',
        cyber_installed: '✔ Instalado',
    },
    customization: {
        title: 'Personalizar',
        base_level: 'Nivel base: {level}',
        base_level_prefix: 'Nivel base:',
        power: 'Potencia: {value}',
        power_mps: 'Potencia: {value} m/s',
        upgrade_btn: 'Mejorar',
        speakers_title: '📻 Subwoofer',
        newton_title: '⚪ Péndulo de Newton',
        hit_power: 'Golpe: {power} m (cada {speed}s)',
        upgrade_cost: 'Mejorar: {cost} m',
    },
    cyber: {
        title: '🦾 Ranura ciberpunk',
        desc: 'Elige 1 ventaja extra de cualquier equipo desbloqueado (altavoz, péndulo o amuleto):',
        tab_speakers: 'Altavoces',
        tab_newton: 'Péndulos',
        tab_talismans: 'Amuletos',
        install_btn: 'Instalar implante',
    },
    mimic: {
        title: '🎭 Habilidades de Mimic',
        desc: 'Elige 2 escaleras desbloqueadas para copiar sus ventajas pasivas:',
        slot1: 'Ranura 1',
        slot2: 'Ranura 2',
        apply_btn: 'Aplicar habilidades',
    },
    confirm: {
        title: 'Confirmación',
        desc: '¿Gastar oro?',
        buy_btn: 'Comprar ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
        buy_label: 'Comprar',
        buff_title: 'Activar potenciador',
        buff_desc: '¿Gastar {cost} <img src="assets/golden_nut.webp" class="ui-ico"> para activar el potenciador?',
        not_enough_gold: 'No tienes suficientes nueces doradas',
        gear_title: 'Desbloquear aspecto',
        gear_desc: '¿Comprar «{name}» por {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
        talisman_title: 'Nuevo amuleto de la suerte',
        talisman_desc: '¿Comprar el amuleto «{name}» por {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
        deal_title: 'Oferta diaria',
        deal_desc: '¿Comprar «{name}» por {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
        item_title: 'Comprar objeto',
        item_desc: '¿Comprar «{name}» por {price}?',
        ufo_desc: '¿Gastar 39 <img src="assets/golden_nut.webp" class="ui-ico"> para invocar un OVNI?',
    },
    donate: {
        badge: 'BÓVEDA',
        title: 'BANCO DORADO',
        vip_note: '¡Cualquier compra desbloquea permanentemente el <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> en la clasificación!',
        free_gold_title: 'Oro gratis',
        free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> por anuncio',
        free_gold_btn: 'Reclamar',
        hit_badge: '🔥 MÁS VENDIDO',
        adfree_title: 'Sin anuncios + VIP',
        adfree_desc: '¡Elimina todos los anuncios obligatorios para siempre!',
        pack_handful: 'Puñado de nueces',
        pack_pouch: 'Bolsa de nueces',
        pack_pouch_tag: 'Da para una caja',
        pack_crate: 'Cajón de nueces',
        pack_safe: 'Caja fuerte del magnate',
        pack_safe_tag: '+40% DE VALOR',
        purchased: 'Comprado',
        price_99: '99 Yans',
        price_249: '249 Yans',
        price_590: '590 Yans',
        price_1390: '1.390 Yans',
    },
    starter: {
        badge: '🔥 VALOR x50',
        timer_text: 'La oferta termina en:',
        golden_nuts: 'Nueces doradas',
        regular_nuts: 'Nueces normales',
        wooden_boxes: 'Cajas de madera',
        iron_safes: 'Cajas fuertes de hierro',
        golden_cases: 'Cajas doradas',
        cyber_speaker: '«Cyber»',
        cyber_speaker_sub: 'Altavoz (épico)',
        no_ads: 'SIN ANUNCIOS',
        no_ads_sub: 'Elimina los anuncios obligatorios para siempre',
        vip_status: 'ESTADO VIP',
        vip_status_sub: 'Marco dorado permanente en el TOP',
        claim_btn: 'RECLAMAR TODO POR <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yans</s> 39 Yans',
        timer_badge: '39 Yans',
    },
    cases: {
        odds_nuts: 'Nueces',
        badge: 'BOTÍN',
        title: 'BÓVEDA DE CAJAS',
        safe_tile: 'Caja fuerte',
        bonus_label: 'Bonus de la bóveda',
        bonus_gold: '+15 nueces doradas',
        wooden_name: 'Caja de madera',
        iron_name: 'Caja fuerte de hierro',
        gold_name: 'Caja dorada',
        nut_loot_50: '50 nueces',
        nut_loot_150: '150 nueces',
        nut_loot_300: '300 nueces',
        open_btn: 'Abrir',
        buy_more_title: 'Comprar más',
        open_all_title: 'Abrir todas',
        in_game: 'En juego',
        buy_price: 'Comprar {price} <img src="{icon}" class="ui-ico-sm">',
        buy_multi_title: 'Comprar varias',
        ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Reclamar',
        ready: '¡LISTO!',
        popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> ¡CAJA!',
        box_label: 'Caja: {box}/{needed}',
    },
    multi_buy: {
        choose_amount: 'Elige la cantidad:',
        total: 'Total:',
    },
    batch_result: {
        title: 'ABRISTE {count} CAJAS',
        claim_all: 'Reclamar todo',
        open_more: 'Abrir 10 más ×',
        open_more_count: 'Abrir {count} más ×',
        new_count: '<span style="color:#2ecc71;">Nuevos: {count} 🪜</span>',
        new_zero: '<span style="color:#7f8c8d;">Nuevos: 0</span>',
        new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ ¡NUEVO!</span>',
        duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Repetido (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
    },
    gacha: {
        title: 'Abriendo caja...',
        opening_title: 'Abriendo: {name}',
        again_btn: 'Otra vez',
        again_count: 'Otra vez ({count})',
        batch_btn: '×10',
        skip_btn: 'Saltar ⏩',
        close_btn: 'Cerrar',
        reroll_btn: '📺 Repetir con anuncio',
        reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Repetir (Neón)',
        reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Repetir con anuncio',
        duplicate: 'Repetido → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
    },
    ladder_preview: {
        effect_desc: 'Descripción de la ventaja',
    },
    calendar: {
        title: 'Premios diarios',
        subtitle: '¡Entra cada día y consigue un aspecto exclusivo de escalera el día 7!',
        missed_alert: '⚠️ ¡Te saltaste un día!',
        restore_streak: 'Recuperar racha',
        reset_day1: 'Día 1',
        day7_title: 'Día 7: Súper premio',
        day7_desc: 'Aspecto «Calendar» (épico)',
        double_ad: '▶ Duplicar con anuncio (x2)',
        claim_normal: 'Reclamar normal',
        day_badge: 'Día {day}',
        day7_title_loop: 'Día 7: Gran premio',
        day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> cajas doradas',
        today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">¡HOY!</span>',
        double_claim_loop: '▶ Duplicar con anuncio (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_normal_loop: 'Reclamar normal (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_skin_btn: '¡Reclamar aspecto «Calendar»!',
        claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ RECLAMADO</span>',
        day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Día 7</span>',
    },
    ad_streak: {
        title: 'Racha de anuncios',
        reset_timer: 'Se reinicia en:',
        footer: 'Todos los anuncios vistos en el juego cuentan para el progreso.',
        claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Reclamado</span>',
        claim_btn: 'Reclamar',
        locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} anuncios</span>',
        popup_safe: '¡+1 caja fuerte!',
        popup_nuts: '¡+600 nueces!',
        popup_gold: '¡+{gold} de oro!',
    },
    ad_streak_rewards: [
        { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> nueces' },
        { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' },
        { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> nueces' },
        { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> caja fuerte' },
        { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo x3 (3m)' },
        { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> nueces' },
        { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Aspecto «Billboard»' },
    ],
    calendar_rewards: [
        { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
        { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
        { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 7, text: 'Aspecto «Calendar»' },
    ],
    offline: {
        title: '¡Bienvenido de nuevo!',
        away_time: 'Estuviste fuera durante: {time}',
        away_prefix: 'Estuviste fuera durante:',
        limit_label: 'Límite: {limit}',
        limit_prefix: 'Límite:',
        speaker_earned: 'Generado por el altavoz:',
        newton_earned: 'Generado por el péndulo:',
        cases_found: 'Cajas encontradas: {count} uds.',
        cases_found_prefix: 'Cajas encontradas:',
        total_earned: 'Altura total ganada:',
        double_ad: '▶ Duplicar con anuncio',
        claim_normal: 'Reclamar normal',
        limit_3h: '3 horas',
        limit_30m: '30 min',
        double_btn: '▶ Duplicar con anuncio (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
    },
    milestones: {
        stamp: 'ALCANZADO',
        double_ad: '▶ Duplicar con anuncio (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        claim_normal: 'Reclamar normal (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
    },
    height_milestones: [
        { height: 250, name: 'Azoteas', desc: 'Por encima de ti solo hay pájaros y alquileres por las nubes. ¡Primeros cien metros superados!' },
        { height: 1000, name: 'Frente de tormenta', desc: '¡Agárrate bien a esos peldaños mojados! ¡Se acercan truenos y cielos abiertos!' },
        { height: 10000, name: 'Estratosfera', desc: 'Altitud de crucero. La curvatura de la Tierra se distingue claramente abajo.' },
        { height: 100000, name: 'Espacio', desc: 'La gravedad se rinde. ¡Ya estás en plena ingravidez!' },
        { height: 1000000, name: 'Vía Láctea', desc: 'Un millón de metros. Has viajado mucho más allá de lo imaginable.' },
        { height: 10000000, name: 'El gran vacío', desc: '¿El borde del mapa? No, solo el comienzo de la nada absoluta.' },
    ],
    stages_lore: [
        { id: 0, name: 'Viejo barrio', desc: 'Tu territorio. Una jungla de hormigón y el crujido de viejos peldaños de madera. Aquí comienza tu ascenso sin fin.' },
        { id: 1, name: 'Azoteas', desc: 'Por encima de antenas, palomas y tráfico. Ya superaste los primeros cien metros y el aire empieza a refrescar.' },
        { id: 2, name: 'Frente de tormenta', desc: 'Nubes enormes, relámpagos cegadores y un intenso olor a ozono. ¡Los peldaños resbalan, agárrate fuerte!' },
        { id: 3, name: 'Estratosfera', desc: 'El límite de la atmósfera terrestre. El cielo se vuelve azul ultramar y revela la brillante curva azul del planeta.' },
        { id: 4, name: 'Espacio profundo', desc: 'Satélites silenciosos y un vacío eterno. La gravedad se ha rendido: la escalera es el único camino hacia arriba.' },
        { id: 5, name: 'Vía Láctea', desc: 'Galaxias lejanas en espiral, nebulosas brillantes y polvo cósmico. A un millón de metros de los problemas terrenales.' },
        { id: 6, name: 'El gran vacío', desc: 'El horizonte de sucesos en el límite del universo conocido. La altitud definitiva, donde el tiempo se disuelve en el infinito cósmico.' },
    ],
    locations: {
        khrushchevka: 'Viejo barrio',
        roofs: 'Azoteas',
        storm_front: 'Frente de tormenta',
        stratosphere: 'Estratosfera',
        open_space: 'Espacio profundo',
        milky_way: 'Vía Láctea',
        endless: 'El gran vacío',
        checkpoint_0: '0 m — Viejo barrio',
        checkpoint_250: '250 m — Azoteas',
        checkpoint_1000: '1.000 m — Frente de tormenta',
        checkpoint_10000: '10.000 m — Estratosfera',
        checkpoint_100000: '100.000 m — Espacio profundo',
        checkpoint_1000000: '1.000.000 m — Vía Láctea',
        checkpoint_10000000: '10.000.000 m — El gran vacío',
    },
    location_card: {
        explored_badge: 'EXPLORADO',
        signal_lost_badge: 'SEÑAL PERDIDA',
        unknown_sector: 'Sector desconocido',
        height_label: 'Altitud: {height} m',
        target_label: 'Objetivo: {target} m (faltan {remaining} m)',
        locked_desc: 'Los sensores detectan anomalías graves a esta altitud. Sigue subiendo para descifrar los datos de la señal.',
    },
    retro: {
        challenge_title: 'Prueba de resistencia',
        challenge_desc: '¡Permanece 20 minutos en el juego para conseguir gratis un aspecto Retro exclusivo!',
        skin_name: 'Aspecto «Retro»',
        ability_label: '<b style="color: #f1c40f;">Habilidad:</b> Atrapa la moneda voladora (botín: hasta 125 <img src="assets/nut.webp" class="ui-ico-sm"> y 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
        time_left: 'Tiempo restante:',
        challenge_complete: '¡PRUEBA COMPLETADA!',
        challenge_reward: '¡Has aguantado 20 minutos! Aquí tienes tu premio:',
        epic_skin: 'ASPECTO ÉPICO «RETRO»',
    },
    shortcut: {
        bonus_badge: 'BONUS',
        title: '¡Añade el juego a la pantalla de inicio y sube con un solo toque!',
        desc: 'Pulsa «Añadir» en el siguiente aviso y el premio será tuyo',
        reward_label: 'Premio de instalación:',
        reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
        add_btn: 'AÑADIR (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        decline_title: '¿Seguro que no quieres el premio?',
        decline_desc: 'Te esperan 100 <img src="assets/golden_nut.webp" class="ui-ico">. ¡Añadir el acceso directo solo lleva dos segundos!',
        decline_claim: 'Reclamar 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
    },
    leaderboard: {
        league_badge: 'LIGA DE ESCALADORES',
        title: 'SALÓN DE LA FAMA',
        season_desc: 'Clasificación mundial de conquistadores del espacio',
        tab_alltime: 'Histórico',
        tab_week: 'Temporada (semanal)',
        loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Cargando clasificación...</div>',
        desc_alltime: 'Clasificación mundial de conquistadores del espacio',
        desc_week: 'Se reinicia cada lunes a las 00:00',
        anon: 'Escalador anónimo',
        you_player: 'Tú (jugador)',
        you_vip: '<span>Tú (VIP)</span>',
        you: '<span>Tú</span>',
    },
    daily_deal: {
        badge: 'OFERTA ESTELAR',
        title: 'OFERTA DEL DÍA',
        timer_label: 'Nuevo contrato en',
        reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Actualizar ({left}/5)',
        reroll_exhausted: 'Sin cambios disponibles (0/5)',
        in_collection: '✔ EN TU COLECCIÓN',
        buy_btn: 'COMPRAR: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        not_enough: 'Faltan {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Banco',
        discount_badge: '{rarity} • -{percent}%',
        unique_ladder: 'Escalera única',
        luck_desc: '+{luck} de suerte total',
    },
    settings: {
        title: 'AJUSTES',
        language: '🌐 Idioma',
        music: 'Música y ambiente',
        tap_sounds: 'Sonidos de toque',
        speaker_bass: 'Graves del subwoofer',
        newton_hit: 'Golpes del péndulo',
        rewards_sfx: 'Premios y efectos',
        vibration: 'Respuesta háptica',
        support_btn: 'Ayuda / Comunidad',
        support_alert: 'Comunidad y soporte del juego: t.me/your_game_group',
    },
    luck: {
        title: 'Tu suerte',
        total_label: 'Estadística total',
        influence_title: '¿Cómo influye la suerte en el juego?',
        influence_cases: 'Aumenta la probabilidad de encontrar cajas al tocar.',
        influence_nuts: 'Aumenta la cantidad de nueces que contienen las cajas.',
        influence_rarity: 'Mejora las probabilidades de obtener aspectos épicos y legendarios.',
        breakdown_title: 'Desglose de estadísticas:',
        talismans_title: 'Colección de amuletos:',
        buff_label: 'Suerte',
        plus_luck: '+{value} de suerte',
        equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">EQUIPADO</div>',
        equip_btn: 'Equipar',
        locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Bloqueado</div>',
        ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Escalera «{name}»: <b style="color:#2ecc71;">+{luck}</b></div>',
        talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Amuleto «{name}»: <b style="color:#2ecc71;">+{luck}</b></div>',
        cyber_item: '<div>🦾 Ranura ciber «{name}»: <b style="color:#00ffff;">+{luck}</b></div>',
        ad_fortune: '<div>📺 Bonus de anuncio (símbolo de la suerte): <b style="color:#2ecc71;">+15</b></div>',
        no_buffs: '<div>No hay potenciadores de suerte activos.</div>',
    },
    thank_you: {
        default_title: '¡ORO AÑADIDO!',
        default_desc: '¡Gracias por jugar con nosotros!',
        vip_badge: 'ESTADO VIP ACTIVADO',
    },
    modal: {
        starter: {
            title: '¡PACK INICIAL!',
            desc: '¡Ya tienes un montón de cajas, nueces, acceso sin anuncios y el aspecto «Cyber»! Gracias por apoyarnos <img src="assets/crown.webp" class="ui-ico-sm">',
        },
        bank_gold: {
            title: '¡ORO CONSEGUIDO!',
            desc: '¡Has recibido <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> por ver un anuncio!',
        },
        adfree: {
            title: '¡SIN ANUNCIOS!',
            desc: '¡Los anuncios obligatorios han desaparecido para siempre! Gracias por apoyar nuestro juego ❤️',
        },
        gold_credited: {
            title: '¡ORO AÑADIDO!',
            desc: 'Se han añadido +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> a tu saldo. ¡Gracias por tu apoyo ❤️! ¡A seguir subiendo!',
        },
        shortcut_reward: {
            title: '¡PREMIO DE ORO!',
            desc: '¡Se han añadido +100 <img src="assets/golden_nut.webp" class="ui-ico"> a tu saldo!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">¡Gracias por jugar! ❤️</span>',
        },
        deal: {
            buy_btn: 'COMPRAR: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },
    },
    particle: {
        starter_obtained: '¡PACK INICIAL DESBLOQUEADO!',
        sponsor: '📺 Patrocinador: +{nuts} 🔩 y +{gold} 🟡',
        turbo_boost: '¡TURBO x3 ({seconds}s)!',
        luck_boost: '¡SUERTE +{value}!',
        frenzy: '¡LLUVIA DE NUECES!',
        autotap: '¡PILOTO AUTOMÁTICO (15 toques/s)!',
        turbo_income: '¡TURBO x3!',
        luck_15: '¡SUERTE +15!',
        ufo_case: '¡+1 CAJA!',
        ufo_safe: '¡+1 CAJA FUERTE!',
        billiard_crit: '🎱 ¡x2,5! +{nuts} 🔩',
        planet_turbo: '🌍 ¡TURBO x3 (20s)!',
        planet_luck: '🌍 ¡SUERTE +15 (60s)!',
        planet_frenzy: '🌍 ¡LLUVIA DE NUECES (15s)!',
        hawking: '💥 RADIACIÓN DE HAWKING: ¡+100.000 m!',
        storm_discharge: '¡DESCARGA (x10)!',
        absolute_unlocked: '¡ABSOLUTO DESBLOQUEADO!',
        legendary_skin: '👑 ¡ASPECTO LEGENDARIO: {name}!',
        retro_coin: '+{nuts} nueces, ¡+{gold}!',
        banana_double: '🍌 ¡TOQUE x2!',
        combo: '🔥 {mult}x ({cps} T/S)',
        case_drop: '¡+1 CAJA!',
        golden_case_milky: '¡CAJA DORADA (VÍA LÁCTEA)!',
        golden_case: '¡CAJA DORADA!',
        safe_milky: '¡CAJA FUERTE (VÍA LÁCTEA)!',
        safe_luck: '¡CAJA FUERTE (SUERTE)!',
        iron_safe: '¡CAJA FUERTE DE HIERRO!',
        rusty_nut: '+100',
        rusty_box: '¡+1 CAJA!',
        rusty_safe: '¡+1 CAJA FUERTE!',
        marble_double: '+{value} (x2)',
        jackpot: 'PREMIO GORDO: ¡+1!',
        timed_box: '¡+1 CAJA RECLAMADA!',
        crystal_gold: '+{value} (¡Cristal!)',
        shop_spent: '-{cost} m',
        streak_dupe: 'Repetido: ¡+{value}!',
        streak_billboard: '🎉 ¡ASPECTO BILLBOARD DESBLOQUEADO!',
        calendar_day: '¡Premio del día {day} reclamado!',
        calendar_skin: '¡ASPECTO CALENDAR DESBLOQUEADO!',
        calendar_bonus: '¡+{cases} cajas doradas!',
        timewarp_report: '+{meters} m',
        timewarp_nuts: '+{nuts} nueces',
        timewarp_gold: '+{gold} de oro',
        magnet_ufo: '¡IMÁN OVNI!',
    },
    ladder: {
        wood: { name: 'Madera' },
        banana: { name: 'Plátano' },
        beer: { name: 'Cajas de cerveza' },
        fire: { name: 'Llameante' },
        fireman: { name: 'Escalera de incendios' },
        plastic: { name: 'Plástico' },
        rusty: { name: 'Oxidada' },
        tape: { name: 'Cinta adhesiva' },
        book: { name: 'Pila de libros' },
        cactus: { name: 'Cactus' },
        cement: { name: 'Hormigón' },
        neon: { name: 'Neón' },
        scratch: { name: 'Rascador' },
        new_year: { name: 'Festiva' },
        add_stair: { name: 'Valla publicitaria' },
        bone: { name: 'Esquelética' },
        crystal: { name: 'Cristal' },
        cyber: { name: 'Ciberpunk' },
        golden: { name: 'Dorada' },
        goth: { name: 'Gótica' },
        ice: { name: 'Glacial' },
        vine: { name: 'Enredadera' },
        calendar_stair: { name: 'Calendario' },
        marble: { name: 'Mármol dorado' },
        quant: { name: 'Cuántica' },
        ufo: { name: 'OVNI' },
        mimic: { name: 'Mímico' },
        retro: { name: 'Retro' },
        storm: { name: 'Frente de tormenta' },
        strato: { name: 'Estratosfera' },
        cosmo: { name: 'Espacio profundo' },
        milkyway: { name: 'Vía Láctea' },
        endless: { name: 'Singularidad' },
        absolute: { name: 'ABSOLUTO' },
    },
    ladder_desc: {
        wood: 'El clásico de siempre. Huele al comienzo de un viaje infinito.',
        banana: 'Duplica el valor de cada 5.º toque.',
        beer: '+5 de suerte.',
        fire: '+7 m por toque y 10 toques menos para conseguir una caja.',
        fireman: 'Péndulo de Newton: +15 m por golpe.',
        plastic: 'El péndulo de Newton oscila 0,15 s más rápido.',
        rusty: '65% de probabilidad de encontrar <img src="assets/nut.webp" class="ui-ico"> con cada toque.',
        tape: '10% de descuento en el mercado negro.',
        book: '+7 de suerte.',
        cactus: 'Subwoofer: +20 m/s. Péndulo de Newton: +10 m por golpe.',
        cement: 'Péndulo de Newton: +50% de potencia, pero golpea 0,3 s más despacio.',
        neon: 'Repetición gratis al abrir una caja.',
        scratch: 'Con 5 o más toques/s, la altura por toque se multiplica por 1,5.',
        new_year: 'Regalo extra cada 150-250 toques.',
        bone: 'Duplica el valor de cada toque.',
        crystal: 'Cada caja abierta otorga +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
        cyber: 'Desbloquea una ranura de accesorio extra.',
        golden: 'Al llenar la barra de toques, recibes una caja fuerte de hierro en vez de una caja normal.',
        goth: '20% de descuento en mejoras y cajas compradas con nueces.',
        ice: 'Subida deslizante: permite tocar deslizando el dedo por la escalera.',
        vine: 'Aumenta un 40% la potencia de toque, del subwoofer y del péndulo.',
        add_stair: 'Los potenciadores duran un 50% más; cada anuncio visto otorga 20 <img src="assets/nut.webp" class="ui-ico"> y 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
        calendar_stair: '+10 de suerte y más posibilidades de obtener aspectos legendarios en cajas fuertes.',
        marble: '25% de probabilidad de conseguir una caja dorada al llenar la barra de toques.',
        quant: 'Fisión de materia: el 20% de las nueces obtenidas se vuelven doradas; necesitas 50 toques menos para una caja.',
        ufo: 'Atrae una cápsula alienígena con botín cada 30 segundos.',
        mimic: 'Imitación: copia las habilidades pasivas de 2 escaleras elegidas.',
        retro: 'Atrapa la moneda voladora (botín: hasta 125 <img src="assets/nut.webp" class="ui-ico"> y 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
        storm: '+20 m por toque, pero hay un 5% de probabilidad de que el toque falle.',
        strato: 'Aire fino: aumenta un 40% la velocidad del subwoofer y del péndulo.',
        cosmo: 'Aumenta a 3 horas el límite de acumulación de recursos sin conexión.',
        milkyway: 'Impulso de inercia. 25% de probabilidad de mejorar en un nivel cualquier caja obtenida.',
        endless: 'Aumenta la ganancia de altura un 50% cada minuto (hasta +1.000%). Cambiar de escalera reinicia la bonificación.',
        absolute: 'La cima de la evolución: otorga simultáneamente las ventajas pasivas de todas las escaleras.',
    },
    speaker: {
        old: { name: 'Altavoz vintage' },
        monster: { name: 'Torre monstruosa' },
        cyber: { name: 'Altavoz ciber' },
        cool: { name: 'Subwoofer supremo' },
    },
    speaker_desc: {
        old: 'Ritmo básico del subwoofer (potencia x1)',
        monster: '+20% de potencia del subwoofer. Reduce en 2 minutos el tiempo de espera de la caja gratis.',
        cyber: '+40% de potencia del subwoofer. ¡Consigue un 25% más de <img src="assets/nut.webp" class="ui-ico"> y <img src="assets/golden_nut.webp" class="ui-ico">!',
        cool: 'x2 de potencia del subwoofer. Cada 3.º golpe otorga +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
        fallback: 'Graves: x{mult}',
    },
    newton: {
        steel: { name: 'Esferas de acero' },
        billiard: { name: 'Bola 8' },
        plasma: { name: 'Globo de plasma' },
        planet: { name: 'Mini Tierra' },
    },
    newton_desc: {
        steel: 'Golpe básico del péndulo de Newton (daño x1)',
        billiard: '+25% de daño del péndulo. Cada 8.º golpe otorga x2,5 de altura y 3–5 <img src="assets/nut.webp" class="ui-ico">.',
        plasma: '+50% de daño del péndulo. Electrizante: con 6 o más toques/s, duplica la altura por toque. Tras 5 s sin actividad, realiza 10 toques automáticos.',
        planet: 'x2 de daño del péndulo y +3 toques para conseguir una caja por golpe. +100% a todas las fuentes por cada potenciador activo. 1% de probabilidad de activar un potenciador aleatorio al golpear.',
        fallback: 'Golpe: x{mult}',
    },
    talisman: {
        clover: { name: 'Trébol de cuatro hojas' },
        horseshoe: { name: 'Herradura dorada' },
        paw: { name: 'Pata de conejo' },
        coin: { name: 'Moneda antigua' },
        star: { name: 'Estrella de la suerte' },
        key: { name: 'Llave maestra' },
        sock: { name: 'Calcetín de la suerte' },
        sock_alert: '🎉 ¡INCREÍBLE! Has reunido todos los amuletos y desbloqueado el CALCETÍN SECRETO (+50 de suerte).',
    },
    rarity: {
        common: 'COMÚN',
        rare: 'RARO',
        epic: 'ÉPICO',
        legendary: 'LEGENDARIO',
        special: 'ESPECIAL',
    },
},

// Турецкий (tr) 5
    tr: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Uzay Merdiveni', // Main game title shown in the browser tab and store catalog
            version: 'Uzay Merdiveni v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} m', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} m', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image (en asset used)
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner (en asset used)
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner (en asset used)
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/tık', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} m/sn', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} m/vuruş', // Auto-clicker income from the swinging Newton Cradle
            level: 'Sv. {level}', // Upgrade level indicator
            seconds_short: '{value}s', // Compact seconds format for buff timers
            meters: '{value} m', // Value in meters
            meters_plus: '+{value} m', // Positive meter gain
            pieces: '{count} adet', // Quantity of items
            min_sec: '{min}dk {sec}sn', // Duration format: compact minutes and seconds
            meters_per_click_short: 'm/tık', // Unit label for tap power in the shop
            meters_per_sec_short: 'm/sn', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'm/vuruş', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Sv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'm', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Altın Somun Al', // Tooltip when hovering over the Golden Nuts balance
            donate_btn: 'Banka', // Compact button to open the Golden Bank (5 chars)
            deal_btn: 'Fırsat', // Compact button to open Daily Deal (6 chars)
            top_btn_aria: 'Şöhretler Salonu', // Accessibility label for Leaderboard
            zen_title: 'Zen Modu (Arayüzü Gizle)', // Tooltip to hide UI overlays
            rewards_btn: 'Ödüller', // Button opening Ad Streak track
            rewards_count: '{current}/10', // Ad watch progress counter
            buffs_btn: 'GÜÇLER', // Short uppercase side drawer booster button (6 chars)

            // --- Bottom Navigation ---
            shop_btn: 'MARKET', // Main bottom-center button (6 chars)
            skins_btn: 'Kostüm', // Bottom-right button (6 chars)
            cases_btn_label: 'Kasa:', // Compact button label (5 chars)
            free_box_label: 'Bedava:', // Compact free crate button label (7 chars)

            // --- Action Buttons ---
            close_btn: '✕',
            close_aria: 'Kapat',
            cancel_btn: 'İptal',
            buy_btn: 'Satın Al',
            claim_btn: 'Al',
            equip_btn: 'Kuşan',
            equipped_badge: 'KUŞANILDI',
            later_btn: 'Sonra',
            not_now_btn: 'Şimdi Değil',
            excellent_btn: 'HARİKA!',
            forward_btn: 'ZİRVEYE!',
            claim_and_equip_btn: 'AL VE KUŞAN',
            just_claim_btn: 'Yalnızca al',
            selected_btn: 'SEÇİLDİ',
            buy_for: '{price} {currency} İLE AL',
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Karaborsa',
            buy_label: 'AL', // Ultra-short uppercase label inside price buttons
            click_title: 'TIK GÜCÜ',
            speaker_title: 'SUBWOOFER',
            newton_title: 'NEWTON BEŞİĞİ',
            cost_suffix: '{cost} m',
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ GÜÇLENDİRİCİLER',
            ad_btn: 'Reklam İzle',

            fortune_name: 'ŞANS',
            fortune_desc: 'Şans niteliğine +15',
            turbo_name: 'TURBO TIRMANIŞ',
            turbo_desc: 'Tüm yükseklik gelirlerine 3 kat artış',
            frenzy_name: 'SOMUN YAĞMURU',
            frenzy_desc: 'Her tıkta gökten somun yağar',
            autotap_name: 'OTOPİLOT',
            autotap_desc: 'Merdivene saniyede 15 kez otomatik tıklar',
            timewarp_name: 'ZAMAN MAKİNESİ',
            timewarp_desc: 'Anında 5 dakikalık boşta durma geliri al',
            timewarp_instant: 'Anında',
            ufo_name: 'UFO MIKNATISI',
            ufo_desc: 'Kaynak dolu bir ganimet kapsülü çeker',
            ufo_summon: 'Çağır',
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Ekipman Çantası',
            tab_ladders: 'Merdivenler',
            tab_speakers: 'Hoparlörler',
            tab_newton: 'Beşikler',
            tab_talismans: 'Tılsımlar',
            available_skins: 'Mevcut Görünümler:',
            no_effects: 'Bonus etki yok',
            default_ladder_desc: 'Standart merdiven özellikleri',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Görünüm',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Özellik',
            equipped_btn: 'KUŞANILDI',
            unequip_btn: 'ÇIKAR',
            equip_btn: 'Kuşan',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Sırayla',
            fully_equipped: '✔ TAM KUŞANILDI',
            equip_all: 'İKİSİNİ DE KUŞAN',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Görünüm Aktif ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Yalnızca görünüm',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Özellik Aktif ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Yalnızca özellik',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Kilitli Eşya',
            mimic_setup: '⚙️ Yuvaları Yapılandır ({slot0}, {slot1})',
            cyber_setup: '🦾 Ekstra Yuva Ayarla',
            item_fallback: 'Eşya',
            luck_plus: '+{luck} Şans',
            slot_empty: 'Boş',
            slot_default: 'Standart özellikler',
            slot_1_selected: '✔ Yuva 1',
            slot_2_selected: '✔ Yuva 2',
            select_action: '+ Seç',
            cyber_installed: '✔ Yüklendi',
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Özelleştir',
            base_level: 'Temel Seviye: {level}',
            base_level_prefix: 'Temel Seviye:',
            power: 'Güç: {value}',
            power_mps: 'Güç: {value} m/sn',
            upgrade_btn: 'Yükselt',
            speakers_title: '📻 Subwoofer',
            newton_title: '⚪ Newton Beşiği',
            hit_power: 'Vuruş: {power} m (her {speed} sn)',
            upgrade_cost: 'Yükselt: {cost} m',
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Siberpunk Yuvası',
            desc: 'Kilidi açık herhangi bir ekipmandan (Hoparlör, Beşik veya Tılsım) 1 ekstra özellik seç:',
            tab_speakers: 'Hoparlörler',
            tab_newton: 'Beşikler',
            tab_talismans: 'Tılsımlar',
            install_btn: 'İmplantı Tak',
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Taklitçi Yetenekleri',
            desc: 'Özelliklerini kopyalamak için kilidi açık herhangi 2 merdiven seç:',
            slot1: 'Yuva 1',
            slot2: 'Yuva 2',
            apply_btn: 'Yetenekleri Uygula',
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Onay',
            desc: 'Altın harcansın mı?',
            buy_btn: 'Satın Al ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: 'Satın Al',
            buff_title: 'Takviyeyi Etkinleştir',
            buff_desc: 'Takviyeyi etkinleştirmek için {cost} <img src="assets/golden_nut.webp" class="ui-ico"> harcansın mı?',
            not_enough_gold: 'Yetersiz Altın Somun',
            gear_title: 'Ekipman Görünümünü Aç',
            gear_desc: '"{name}" {price} <img src="assets/golden_nut.webp" class="ui-ico"> karşılığında satın alınsın mı?',
            talisman_title: 'Yeni Uğurlu Tılsım',
            talisman_desc: '"{name}" tılsımı {price} <img src="assets/golden_nut.webp" class="ui-ico"> karşılığında satın alınsın mı?',
            deal_title: 'Günün Fırsatı',
            deal_desc: '"{name}" {price} <img src="assets/golden_nut.webp" class="ui-ico"> karşılığında satın alınsın mı?',
            item_title: 'Eşya Satın Al',
            item_desc: '"{name}" {price} karşılığında satın alınsın mı?',
            ufo_desc: 'UFO çağırmak için 39 <img src="assets/golden_nut.webp" class="ui-ico"> harcansın mı?',
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'KASA',
            title: 'ALTIN BANKASI',
            vip_note: 'Herhangi bir satın alım, liderlik tablosunda kalıcı <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> açar!',
            free_gold_title: 'Ücretsiz Altın',
            free_gold_val: 'Reklam başına +15 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            free_gold_btn: 'Al',
            hit_badge: '🔥 EN ÇOK SATAN',
            adfree_title: 'Reklamsız + VIP',
            adfree_desc: 'Zorunlu tüm reklamları sonsuza dek kaldırır!',
            pack_handful: 'Bir Avuç Somun',
            pack_pouch: 'Bir Kese Somun',
            pack_pouch_tag: '1 Kasaya Yeter',
            pack_crate: 'Bir Kasa Somun',
            pack_safe: 'Kodaman Kasası',
            pack_safe_tag: '+%40 DEĞER',
            purchased: 'Alındı',
            price_99: '99 Yan',
            price_249: '249 Yan',
            price_590: '590 Yan',
            price_1390: '1.390 Yan',
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 50 KAT DEĞER',
            timer_text: 'Teklifin bitmesine kalan:',
            golden_nuts: 'Altın Somun',
            regular_nuts: 'Standart Somun',
            wooden_boxes: 'Ahşap Sandık',
            iron_safes: 'Demir Kasa',
            golden_cases: 'Altın Kasa',
            cyber_speaker: '"Siber"',
            cyber_speaker_sub: 'Hoparlör (Destansı)',
            no_ads: 'REKLAMSIZ',
            no_ads_sub: 'Zorunlu reklamları sonsuza dek kaldırır',
            vip_status: 'VIP STATÜSÜ',
            vip_status_sub: 'Sıralamada kalıcı altın çerçeve',
            claim_btn: 'HEPSİNİ AL: <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yan</s> 39 Yan',
            timer_badge: '39 Yan',
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Somun',
            badge: 'ZULA',
            title: 'KASA ODASI',
            safe_tile: 'Kasa',
            bonus_label: 'Zula Bonusu',
            bonus_gold: '+15 Altın Somun',
            wooden_name: 'Ahşap Sandık',
            iron_name: 'Demir Kasa',
            gold_name: 'Altın Kasa',
            nut_loot_50: '50 Somun',
            nut_loot_150: '150 Somun',
            nut_loot_300: '300 Somun',
            open_btn: 'Aç',
            buy_more_title: 'Daha fazla al',
            open_all_title: 'Tümünü aç',
            in_game: 'Oyunda',
            buy_price: '{price} <img src="{icon}" class="ui-ico-sm"> Al',
            buy_multi_title: 'Çoklu satın al',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Al',
            ready: 'HAZIR!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> KASA!',
            box_label: 'Sandık: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Miktar seç:',
            total: 'Toplam:',
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count} KASA AÇILDI',
            claim_all: 'Hepsini Al',
            open_more: '10 Kasa Daha Aç',
            open_more_count: '{count} Kasa Daha Aç',
            new_count: '<span style="color:#2ecc71;">Yeni: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">Yeni: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ YENİ!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Kopya (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Kasa açılıyor...',
            opening_title: 'Açılıyor: {name}',
            again_btn: 'Tekrar',
            again_count: 'Tekrar ({count})',
            batch_btn: '×10',
            skip_btn: 'Geç ⏩',
            close_btn: 'Kapat',
            reroll_btn: '📺 Reklamla Yenile',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Yenile (Neon)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Reklamla Yenile',
            duplicate: 'Kopya → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Özellik açıklaması',
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Günlük Ödüller',
            subtitle: 'Her gün giriş yap! 7. Günde özel merdiven görünümünü kap.',
            missed_alert: '⚠️ Bir günü kaçırdın!',
            restore_streak: 'Seriyi Kurtar',
            reset_day1: '1. Gün',
            day7_title: '7. Gün: Süper Ödül',
            day7_desc: '"Takvim" Görünümü (Destansı)',
            double_ad: '▶ Reklamla İkiye Katla (x2)',
            claim_normal: 'Standart al',
            day_badge: '{day}. Gün',
            day7_title_loop: '7. Gün: Büyük Ödül',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Altın Kasa',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">BUGÜN!</span>',
            double_claim_loop: '▶ Reklamla Katla (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: 'Standart al (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: '"Takvim" Görünümünü Al!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ ALINDI</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 7. Gün</span>',
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Reklam Serisi',
            reset_timer: 'Sıfırlanma süresi:',
            footer: 'Oyunda izlenen her reklam ilerlemeye sayılır.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Alındı</span>',
            claim_btn: 'Al',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} reklam</span>',
            popup_safe: '+1 Kasa!',
            popup_nuts: '+600 Somun!',
            popup_gold: '+{gold} Altın!',
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Somun' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15 dk)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Somun' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Kasa' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> 3x Turbo (3 dk)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> Somun' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> "Billboard" Görünümü' },
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: '"Takvim" Görünümü' },
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Tekrar Hoş Geldin!',
            away_time: 'Uzakta kaldığın süre: {time}',
            away_prefix: 'Uzakta kaldığın süre:',
            limit_label: 'Sınır: {limit}',
            limit_prefix: 'Sınır:',
            speaker_earned: 'Hoparlör pompaladı:',
            newton_earned: 'Beşik çekiçledi:',
            cases_found: 'Bulunan sandık: {count} adet',
            cases_found_prefix: 'Bulunan sandık:',
            total_earned: 'Kazanılan Toplam Yükseklik:',
            double_ad: '▶ Reklamla İkiye Katla',
            claim_normal: 'Standart al',
            limit_3h: '3 saat',
            limit_30m: '30 dk',
            double_btn: '▶ Reklamla Katla (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ULAŞILDI',
            double_ad: '▶ Reklamla Katla (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: 'Standart al (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: 'Çatılar', desc: 'Tepede sadece kuşlar ve fahiş kiralar var. İlk yüz metre aşıldı!' },
            { height: 1000, name: 'Fırtına Hattı', desc: 'Islak basamaklara sıkı tutun. İleride açık gökyüzü ve şimşekler var!' },
            { height: 10000, name: 'Stratosfer', desc: 'Seyir irtifası. Dünya\'nın eğriliği aşağıda net bir şekilde görünüyor.' },
            { height: 100000, name: 'Uzay', desc: 'Yer çekimi pes etti. Resmen tam yer çekimsiz ortamdasın!' },
            { height: 1000000, name: 'Samanyolu', desc: 'Bir milyon metre. Akıl sınırlarının çok ötesine yolculuk ettin.' },
            { height: 10000000, name: 'Büyük Boşluk', desc: 'Haritanın sınırı mı? Hayır, mutlak hiçliğin sadece başlangıcı.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: 'Eski Avlu', desc: 'Senin bölgen. Beton orman ve gıcırdayan eski ahşap basamaklar. Sonsuz tırmanışın burada başlıyor.' },
            { id: 1, name: 'Çatılar', desc: 'TV antenlerinden, güvercinlerden ve şehir trafiğinden daha yüksek. İlk yüz metre geride kaldı ve hava giderek serinliyor.' },
            { id: 2, name: 'Fırtına Hattı', desc: 'Devasa yoğun bulutlar, kör edici şimşekler ve keskin ozon kokusu. Basamaklar kaygan—sıkı tutun!' },
            { id: 3, name: 'Stratosfer', desc: 'Dünya atmosferinin sınırı. Gökyüzü koyu laciverte bürünüyor, gezegenin masmavi eğriliği ortaya çıkıyor.' },
            { id: 4, name: 'Derin Uzay', desc: 'Sessiz uyduların yörüngesi ve zamansız boşluk. Yer çekimi teslim oldu—merdiven tek çıkış yolu.' },
            { id: 5, name: 'Samanyolu', desc: 'Uzak galaksilerin spiralleri, parıldayan bulutsular ve kozmik toz. Dünyevi dertlerin bir milyon metre yukarısında.' },
            { id: 6, name: 'Büyük Boşluk', desc: 'Bilinen evrenin kıyısındaki olay ufku. Zamanın kozmik sonsuzlukta eridiği nihai irtifa.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: 'Eski Avlu',
            roofs: 'Çatılar',
            storm_front: 'Fırtına Hattı',
            stratosphere: 'Stratosfer',
            open_space: 'Derin Uzay',
            milky_way: 'Samanyolu',
            endless: 'Büyük Boşluk',

            checkpoint_0: '0 m — Eski Avlu',
            checkpoint_250: '250 m — Çatılar',
            checkpoint_1000: '1.000 m — Fırtına Hattı',
            checkpoint_10000: '10.000 m — Stratosfer',
            checkpoint_100000: '100.000 m — Derin Uzay',
            checkpoint_1000000: '1.000.000 m — Samanyolu',
            checkpoint_10000000: '10.000.000 m — Büyük Boşluk',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'KEŞFEDİLDİ',
            signal_lost_badge: 'SİNYAL KAYIP',
            unknown_sector: 'Bilinmeyen Sektör',
            height_label: 'İrtifa: {height} m',
            target_label: 'Hedef: {target} m ({remaining} m kaldı)',
            locked_desc: 'Sensörler bu irtifada ciddi anomaliler tespit ediyor. Sinyal verilerini çözmek için tırmanmaya devam et.',
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Dayanıklılık Sınavı',
            challenge_desc: 'Özel Retro görünümü ücretsiz kapmak için oyunda 20 dakika kal!',
            skin_name: '"Retro" Görünümü',
            ability_label: '<b style="color: #f1c40f;">Yetenek:</b> Uçan parayı yakala (ganimet: en fazla 125 <img src="assets/nut.webp" class="ui-ico-sm"> ve 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: 'Kalan süre:',
            challenge_complete: 'SINAV TAMAMLANDI!',
            challenge_reward: '20 dakika hayatta kaldın! İşte ödülün:',
            epic_skin: 'DESTANSI "RETRO" GÖRÜNÜMÜ',
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS',
            title: 'Oyunu ana ekrana ekle ve tek dokunuşla tırman!',
            desc: 'Sonraki bildirimde "Ekle"ye tıkla ve ödül senin olsun',
            reward_label: 'Kurulum ödülü:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: 'EKLE (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            decline_title: 'Ödülü istemediğinden emin misin?',
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> seni bekliyor. Kısayol eklemek sadece iki saniye sürer!',
            decline_claim: '100 <img src="assets/golden_nut.webp" class="ui-ico-sm"> Al',
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'TIRMANICILAR LİGİ',
            title: 'ŞÖHRETLER SALONU',
            season_desc: 'Küresel uzay fatihleri sıralaması',
            tab_alltime: 'Tüm Zamanlar',
            tab_week: 'Sezon (Haftalık)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Sıralamalar yükleniyor...</div>',
            desc_alltime: 'Küresel uzay fatihleri sıralaması',
            desc_week: 'Her pazartesi 00:00\'da sıfırlanır',
            anon: 'Anonim Tırmanıcı',
            you_player: 'Sen (Oyuncu)',
            you_vip: '<span>Sen (VIP)</span>',
            you: '<span>Sen</span>',
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'SICAK ANLAŞMA',
            title: 'GÜNÜN FIRSATI',
            timer_label: 'Yeni anlaşmaya kalan:',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Yenile ({left}/5)',
            reroll_exhausted: 'Yenileme hakkı bitti (0/5)',
            in_collection: '✔ KOLEKSİYONDA',
            buy_btn: 'SATIN AL: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: '{need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> daha lazım → Banka',
            discount_badge: '{rarity} • -%{percent} İNDİRİM',
            unique_ladder: 'Eşsiz Merdiven',
            luck_desc: 'Genel Şansa +{luck}',
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'AYARLAR',
            language: '🌐 Dil',
            music: 'Müzik ve Ambiyans',
            tap_sounds: 'Tıklama Sesleri',
            speaker_bass: 'Subwoofer Bası',
            newton_hit: 'Beşik Vuruşu',
            rewards_sfx: 'Ödüller ve Efektler',
            vibration: 'Titreşim',
            support_btn: 'Destek / Topluluk',
            support_alert: 'Oyun topluluğu ve destek: t.me/your_game_group',
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Şans Durumu',
            total_label: 'Genel Nitelik',
            influence_title: 'Şansın oyuna etkileri:',
            influence_cases: 'Tıklarken rastgele sandık düşme oranını artırır.',
            influence_nuts: 'Sandıklardan çıkan somun miktarını artırır.',
            influence_rarity: 'Destansı ve Efsanevi görünüm şansını yükseltir.',
            breakdown_title: 'Nitelik Dağılımı:',
            talismans_title: 'Tılsım Koleksiyonu:',
            buff_label: 'Şans',
            plus_luck: '+{value} Şans',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">KUŞANILDI</div>',
            equip_btn: 'Kuşan',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Kilitli</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> "{name}" Merdiveni: <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> "{name}" Tılsımı: <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 Siber Yuva "{name}": <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 Reklam Güçlendirmesi (Talih): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>Aktif şans güçlendirici yok.</div>',
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'ALTIN YÜKLENDİ!',
            default_desc: 'Bizimle oynadığın için teşekkürler!',
            vip_badge: 'VIP STATÜSÜ ETKİNLEŞTİRİLDİ',
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'BAŞLANGIÇ PAKETİ!',
                desc: 'Bir yığın kasa, somun, reklamsız erişim ve "Siber" görünümü senin! Desteğin için teşekkürler <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'ALTIN KAZANILDI!',
                desc: 'Reklam izlediğin için <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> kazandın!',
            },
            adfree: {
                title: 'REKLAMSIZ!',
                desc: 'Zorunlu reklamlar sonsuza dek kaldırıldı! Oyunumuzu desteklediğin için teşekkürler ❤️',
            },
            gold_credited: {
                title: 'ALTIN YÜKLENDİ!',
                desc: 'Bakiyene +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> eklendi. Desteğin için teşekkürler ❤️! İyi tırmanışlar!',
            },
            shortcut_reward: {
                title: 'ALTIN ÖDÜLÜ!',
                desc: 'Bakiyene +100 <img src="assets/golden_nut.webp" class="ui-ico"> eklendi!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Oynadığın için teşekkürler! ❤️</span>',
            },
            deal: {
                buy_btn: 'SATIN AL: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'BAŞLANGIÇ PAKETİ AÇILDI!',
            sponsor: '📺 Sponsor: +{nuts} 🔩 ve +{gold} 🟡!',
            turbo_boost: 'TURBO GÜÇ 3x ({seconds} sn)!',
            luck_boost: 'ŞANS +{value}!',
            frenzy: 'SOMUN YAĞMURU!',
            autotap: 'OTOPİLOT (15 tık/sn)!',
            turbo_income: 'TURBO GÜÇ 3x!',
            luck_15: 'ŞANS +15!',
            ufo_case: '+1 SANDIK!',
            ufo_safe: '+1 KASA!',
            billiard_crit: '🎱 2.5x! +{nuts} 🔩',
            planet_turbo: '🌍 TURBO 3x (20 sn)!',
            planet_luck: '🌍 ŞANS +15 (60 sn)!',
            planet_frenzy: '🌍 SOMUN YAĞMURU (15 sn)!',
            hawking: '💥 HAWKING IŞIMASI: +100.000 m!',
            storm_discharge: 'DEŞARJ (10x)!',
            absolute_unlocked: 'MUTLAK AÇILDI!',
            legendary_skin: '👑 EFSANEVİ GÖRÜNÜM: {name}!',
            retro_coin: '+{nuts} somun, +{gold}!',
            banana_double: '🍌 2x TIK!',
            combo: '🔥 {mult}x ({cps} TPS)',
            case_drop: '+1 SANDIK!',
            golden_case_milky: 'ALTIN KASA (SAMANYOLU)!',
            golden_case: 'ALTIN KASA!',
            safe_milky: 'DEMİR KASA (SAMANYOLU)!',
            safe_luck: 'DEMİR KASA (ŞANS)!',
            iron_safe: 'DEMİR KASA!',
            rusty_nut: '+100',
            rusty_box: '+1 SANDIK!',
            rusty_safe: '+1 KASA!',
            marble_double: '+{value} (2x)',
            jackpot: 'BÜYÜK İKRAMİYE: +1!',
            timed_box: '+1 SANDIK ALINDI!',
            crystal_gold: '+{value} (Kristal)!',
            shop_spent: '-{cost} m',
            streak_dupe: 'Kopya: +{value}!',
            streak_billboard: '🎉 BILLBOARD GÖRÜNÜMÜ AÇILDI!',
            calendar_day: '{day}. Gün alındı!',
            calendar_skin: 'TAKVİM GÖRÜNÜMÜ AÇILDI!',
            calendar_bonus: '+{cases} Altın Kasa!',
            timewarp_report: '+{meters} m',
            timewarp_nuts: '+{nuts} somun',
            timewarp_gold: '+{gold} altın',
            magnet_ufo: 'UFO MIKNATISI!',
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Ahşap' },
            banana: { name: 'Muz' },
            beer: { name: 'Bira Kasası' },
            fire: { name: 'Alevli' },
            fireman: { name: 'İtfaiye Merdiveni' },
            plastic: { name: 'Plastik' },
            rusty: { name: 'Paslı' },
            tape: { name: 'Koli Bandı' },
            // === RARE ===
            book: { name: 'Kitap Yığını' },
            cactus: { name: 'Kaktüs' },
            cement: { name: 'Beton' },
            neon: { name: 'Neon' },
            scratch: { name: 'Tırmalama' },
            new_year: { name: 'Yılbaşı' },
            // === EPIC ===
            add_stair: { name: 'Billboard' },
            bone: { name: 'İskelet' },
            crystal: { name: 'Kristal' },
            cyber: { name: 'Siberpunk' },
            golden: { name: 'Altın' },
            goth: { name: 'Gotik' },
            ice: { name: 'Buzul' },
            vine: { name: 'Sarmaşık' },
            calendar_stair: { name: 'Takvim' },
            // === LEGENDARY ===
            marble: { name: 'Altın Mermer' },
            quant: { name: 'Kuantum' },
            ufo: { name: 'UFO' },
            mimic: { name: 'Taklitçi' },
            // === SPECIAL ===
            retro: { name: 'Retro' },
            storm: { name: 'Fırtına Hattı' },
            strato: { name: 'Stratosfer' },
            cosmo: { name: 'Derin Uzay' },
            milkyway: { name: 'Samanyolu' },
            endless: { name: 'Tekillik' },
            absolute: { name: 'MUTLAK' },
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Başlangıç klasiği. Sonsuz bir yolculuğun başlangıcı gibi kokuyor.',
            banana: 'Her 5. tıkı ikiye katlar.',
            beer: 'Şans niteliğine +5.',
            fire: 'Tık başına +7 m, sandık için gereken -10 tık.',
            fireman: 'Newton Beşiği: Vuruş başına +15 m',
            plastic: 'Newton Beşiği 0.15 sn daha hızlı sallanır',
            rusty: 'Her tıkta %65 ihtimalle <img src="assets/nut.webp" class="ui-ico"> bulma şansı.',
            tape: 'Karaborsada %10 indirim.',
            book: 'Şans niteliğine +7.',
            cactus: 'Subwoofer: +20 m/sn. Newton Beşiği: Vuruş başına +10 m',
            cement: 'Newton Beşiği: +%50 güç, ancak vuruşlar 0.3 sn daha yavaş.',
            neon: 'Her sandık açışında ücretsiz yenileme hakkı',
            scratch: '5+ tık/sn hızında tık irtifası 1.5 katına çıkar',
            new_year: 'Her 150-250 tıkta bir bonus hediye.',
            bone: 'Her tıkı ikiye katlar',
            crystal: 'Açılan her sandık +3 <img src="assets/golden_nut.webp" class="ui-ico"> kazandırır.',
            cyber: 'Ekstra bir aksesuar yuvası açar.',
            golden: 'Tık barını doldurmak sandık yerine Demir Kasa verir',
            goth: 'Yükseltmelerde ve somunla alınan kasalarda %20 indirim',
            ice: 'Kaygan tırmanış: Merdiven üzerinde kaydırarak tıklama sağlar',
            vine: 'Tık gücünü, Subwoofer\'ı ve Beşiği +%40 artırır.',
            add_stair: 'Takviyeler %50 daha uzun sürer; izlenen her reklam 20 <img src="assets/nut.webp" class="ui-ico"> ve 3 <img src="assets/golden_nut.webp" class="ui-ico"> verir.',
            calendar_stair: 'Şansa +10; kasalardan Efsanevi görünüm çıkma şansını artırır.',
            marble: 'Tık barı dolduğunda %25 ihtimalle Altın Kasa verir.',
            quant: 'Madde fisyonu: Kazanılan somunların %20\'si altına dönüşür, sandığa -50 tık.',
            ufo: 'Her 30 saniyede bir uzaylı ganimet kapsülü çeker',
            mimic: 'Taklit: Seçilen 2 merdivenin pasif yeteneklerini kopyalar.',
            retro: 'Uçan parayı yakala (ganimet: en fazla 125 <img src="assets/nut.webp" class="ui-ico"> ve 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: 'Tık başına +20 m, ancak her tıkta %5 ihtimalle boşa basma riski.',
            strato: 'İnce hava: Subwoofer ve Beşik hızını %40 artırır.',
            cosmo: 'Boşta kaynak biriktirme sınırını 3 saate çıkarır.',
            milkyway: 'Eylemsizlik desteği. Düşen herhangi bir kasanın kademesini +1 yükseltme şansı %25.',
            endless: 'Yükseklik kazancını her dakika +%50 artırır (+%1.000\'e kadar). Merdiven değiştirmek bonusu sıfırlar.',
            absolute: 'Evrimin zirvesi: Tüm merdivenlerin pasif özelliklerini aynı anda verir',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Nostaljik Hoparlör' },
            monster: { name: 'Canavar Amfi' },
            cyber: { name: 'Siber Hoparlör' },
            cool: { name: 'Efsane Subwoofer' },
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Temel Subwoofer ritmi (Güç x1)',
            monster: '+%20 Subwoofer gücü. Ücretsiz sandık bekleme süresinden -2 dakika.',
            cyber: '+%40 Subwoofer gücü. %25 daha fazla <img src="assets/nut.webp" class="ui-ico"> ve <img src="assets/golden_nut.webp" class="ui-ico"> kazan!',
            cool: '2 kat Subwoofer gücü. Her 3. vuruş +1 <img src="assets/golden_nut.webp" class="ui-ico"> kazandırır.',
            fallback: 'Bas: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Çelik Küreler' },
            billiard: { name: '8 Numaralı Top' },
            plasma: { name: 'Plazma Küresi' },
            planet: { name: 'Mini Dünya' },
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Temel Newton Beşiği vuruşu (Hasar x1)',
            billiard: '+%25 Beşik hasarı. Her 8. vuruş 2.5 kat irtifa ve 3–5 <img src="assets/nut.webp" class="ui-ico"> verir.',
            plasma: '+%50 Beşik hasarı. Elektrikli: 6+ tık/sn hızında tık irtifasını ikiye katlar. 5 sn boşta kalınca — 10 otomatik tık.',
            planet: '2 kat Beşik hasarı, vuruş başına sandığa +3 tık. Aktif takviye başına tüm kaynaklara +%100. Vuruşta %1 ihtimalle rastgele takviye.',
            fallback: 'Vuruş: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Dört Yapraklı Yonca' },
            horseshoe: { name: 'Altın At Nalı' },
            paw: { name: 'Tavşan Ayağı' },
            coin: { name: 'Antik Sikke' },
            star: { name: 'Uğurlu Yıldız' },
            key: { name: 'İskelet Anahtar' },
            sock: { name: 'Şanslı Çorap' },
            sock_alert: '🎉 İNANILMAZ! Tüm tılsımları topladın ve GİZLİ ÇORAP (+50 Şans) kilidini açtın!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'YAYGIN',
            rare: 'NADİR',
            epic: 'DESTANSI',
            legendary: 'EFSANEVİ',
            special: 'ÖZEL',
        },
    },

        //португальский 6
        pt: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Escada Espacial', // Main game title shown in the browser tab and store catalog
            version: 'Escada Espacial v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} m', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} m', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/toque', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} m/s', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} m/golpe', // Auto-clicker income from the swinging Newton Cradle (meters per ball impact)
            level: 'Nv. {level}', // Upgrade level indicator
            seconds_short: '{value}s', // Compact seconds format for buff timers (no space, e.g., 45s)
            meters: '{value} m', // Value in meters
            meters_plus: '+{value} m', // Positive meter gain (used in the Offline Earnings summary)
            pieces: '{count} un.', // Quantity of items (e.g., crates found)
            min_sec: '{min}m {sec}s', // Duration format: minutes and seconds (e.g., time away)
            meters_per_click_short: 'm/toque', // Unit label for tap power in the shop
            meters_per_sec_short: 'm/s', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'm/golpe', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Nv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'm', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Ganhe Nozes Douradas', // Tooltip (title) when hovering over the Golden Nuts balance
            donate_btn: 'Banco', // Compact button to open the Golden Bank (must be very short, 4-6 chars max)
            deal_btn: 'Oferta', // Compact button to open the Daily Deal modal with timer (must be short)
            top_btn_aria: 'Hall da Fama', // Accessibility label (aria-label) for the Leaderboard button
            zen_title: 'Modo Zen (ocultar UI)', // Tooltip for the eye icon button that hides all UI overlays
            rewards_btn: 'Prêmios', // Button opening the Ad Streak reward track
            rewards_count: '{current}/10', // Ad watch progress counter on the Rewards button
            buffs_btn: 'BÔNUS', // Button opening the side drawer with temporary boosters (short, uppercase)

            // --- Bottom Navigation ---
            shop_btn: 'LOJA', // Main bottom-center button (upgrades bought with meters)
            skins_btn: 'Visuais', // Bottom-right button (opens Gear Inventory with skins and accessories)
            cases_btn_label: 'Cx:', // Label on the bottom-left Case Vault button (followed by case count)
            free_box_label: 'Grátis:', // Label on the 3-minute free crate timer button (strictly limited width!)

            // --- Action Buttons ---
            close_btn: '✕', // Close modal cross symbol (do not translate)
            close_aria: 'Fechar', // Accessibility label for close buttons
            cancel_btn: 'Cancelar', // Cancel action button in confirmation dialogs
            buy_btn: 'Comprar', // Generic purchase button
            claim_btn: 'Resgatar', // Button to collect a free reward or prize
            equip_btn: 'Equipar', // Button to equip an owned skin or item
            equipped_badge: 'EQUIPADO', // Status badge shown on currently active gear
            later_btn: 'Depois', // Postpone button (e.g., on the home screen shortcut prompt)
            not_now_btn: 'Agora não', // Decline button on the secondary retention prompt
            excellent_btn: 'IRADO!', // Button to close the mascot thank-you modal after receiving gold/purchases
            forward_btn: 'RUMO AO TOPO!', // Button to close the Retro Endurance Trial info modal
            claim_and_equip_btn: 'RESGATAR E EQUIPAR', // Button upon completing the 20-min trial (claims and equips both skin & perk)
            just_claim_btn: 'Só resgatar', // Secondary button upon completing the 20-min trial (claims skin without equipping)
            selected_btn: 'SELECIONADO', // Disabled button state in the customization modal when skin is already active
            buy_for: 'COMPRAR POR {price} {currency}', // Purchase button in the customization modal ({currency} is nut icon)
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Mercado Negro', // Header title of the meter-based upgrade shop
            buy_label: 'COMPRAR', // Small sub-label above the cost inside green purchase buttons (uppercase, short)
            click_title: 'FORÇA DO TOQUE', // Upgrade 1: increases manual tap height gain
            speaker_title: 'SUBWOOFER', // Upgrade 2: increases passive meters per second
            newton_title: 'PÊNDULO DE NEWTON', // Upgrade 3: increases auto-swinging pendulum impact power
            cost_suffix: '{cost} m', // Upgrade cost in meters
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ TURBINOS', // Header of the slide-out right drawer with temporary buffs
            ad_btn: 'Ver anúncio', // Button text to activate a booster by watching a rewarded video

            fortune_name: 'SORTE', // Booster 1 name (increases drop rates and rare loot chances)
            fortune_desc: '+15 de Sorte', // Booster 1 description
            turbo_name: 'SUBIDA TURBO', // Booster 2 name (triples all height gains)
            turbo_desc: '3x ganhos de altura', // Booster 2 description (affects taps, speaker, and cradle)
            frenzy_name: 'CHUVA DE NOZES', // Booster 3 name (every tap guarantees regular nut drops)
            frenzy_desc: 'Caem nozes a cada toque', // Booster 3 description
            autotap_name: 'PILOTO AUTOMÁTICO', // Booster 4 name (high-speed auto-clicker)
            autotap_desc: '15 toques/s automáticos', // Booster 4 description
            timewarp_name: 'MÁQUINA DO TEMPO', // Booster 5 name (instant time jump)
            timewarp_desc: 'Ganhe 5 min de renda inativa', // Booster 5 description (grants 5 minutes of Speaker + Cradle farm)
            timewarp_instant: 'Instantâneo', // Badge shown instead of a timer on the Time Machine tile
            ufo_name: 'ÍMÃ DE OVNI', // Booster 6 name (summons a flying saucer with a supply pod)
            ufo_desc: 'Atrai uma cápsula de recursos', // Booster 6 description
            ufo_summon: 'Invocar', // Badge shown instead of a timer on the UFO Magnet tile
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Inventário de Equipamentos', // Header title of the equipment & skins modal
            tab_ladders: 'Escadas', // Tab 1: Stepladder skins
            tab_speakers: 'Caixas de som', // Tab 2: Subwoofer skins
            tab_newton: 'Pêndulos', // Tab 3: Newton Cradle ball skins
            tab_talismans: 'Amuletos', // Tab 4: Lucky charms / talismans
            available_skins: 'Visuais disponíveis:', // Label above the horizontal skin selector in the customization modal
            no_effects: 'Sem bônus', // Fallback text when an item has no passive perks
            default_ladder_desc: 'Atributos padrão da escada', // Default description for the basic ladder
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Visual', // Slot banner label: visual appearance only (transmog)
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Bônus', // Slot banner label: active passive ability
            equipped_btn: 'EQUIPADO', // Button text on an already equipped item
            unequip_btn: 'REMOVER', // Button text on an equipped charm allowing the player to unequip it
            equip_btn: 'Equipar', // Button text to equip an owned item
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Em ordem', // Locked charm button text (charms must be unlocked sequentially)
            fully_equipped: '✔ TUDO EQUIPADO', // Status button in ladder preview when both Skin and Perk are active
            equip_all: 'EQUIPAR AMBOS', // Main button in ladder preview to equip both visual Skin and passive Perk
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Visual ativo ✓', // Toggle button when visual appearance is active
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Só visual', // Toggle button to equip visual appearance without changing active perk
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Bônus ativo ✓', // Toggle button when passive ability is active
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Só bônus', // Toggle button to equip passive ability without changing visual skin
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Item bloqueado', // Notice shown in ladder preview when the skin is not yet owned
            mimic_setup: '⚙️ Configurar espaços ({slot0}, {slot1})', // Button to open the Mimic ability selector (shows 2 copied ladders)
            cyber_setup: '🦾 Ajustar espaço extra', // Button to open the Cyberpunk extra accessory implant selector
            item_fallback: 'Item', // Generic fallback item name
            luck_plus: '+{luck} de Sorte', // Short luck bonus description on charm cards
            slot_empty: 'Vazio', // Placeholder when a Mimic slot is empty
            slot_default: 'Atributos padrão', // Fallback perk description inside Mimic configuration
            slot_1_selected: '✔ Espaço 1', // Badge on a card assigned to Mimic Slot 1
            slot_2_selected: '✔ Espaço 2', // Badge on a card assigned to Mimic Slot 2
            select_action: '+ Selecionar', // Prompt on unselected cards in Mimic/Cyberpunk modals
            cyber_installed: '✔ Instalado', // Badge on the active accessory inside the Cyberpunk slot modal
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Personalizar', // Default modal header
            base_level: 'Nível base: {level}', // Current upgrade level of the accessory
            base_level_prefix: 'Nível base:', // Label before the level number
            power: 'Potência: {value}', // Generic power output label
            power_mps: 'Potência: {value} m/s', // Subwoofer output in meters per second
            upgrade_btn: 'Melhorar', // Level-up button label
            speakers_title: '📻 Subwoofer', // Modal header when customizing Speakers
            newton_title: '⚪ Pêndulo de Newton', // Modal header when customizing Newton Cradle balls
            hit_power: 'Golpe: {power} m (a cada {speed}s)', // Cradle stats: meters per hit and swing interval in seconds
            upgrade_cost: 'Melhorar: {cost} m', // Upgrade button text with meter cost
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Espaço Cyberpunk', // Header of the Cyberpunk ladder's special modal
            desc: 'Escolha 1 bônus extra de qualquer equipamento desbloqueado (caixa de som, pêndulo ou amuleto):', // Instructions for selecting an extra passive effect
            tab_speakers: 'Caixas de som', // Tab for Speaker perks
            tab_newton: 'Pêndulos', // Tab for Newton Cradle perks
            tab_talismans: 'Amuletos', // Tab for Lucky Charm perks
            install_btn: 'Instalar implante', // Confirm button to save the selected extra perk
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Habilidades Miméticas', // Header of the Mimic ladder's special modal
            desc: 'Escolha 2 escadas desbloqueadas para copiar seus bônus passivos:', // Instructions for copying 2 ladder abilities
            slot1: 'Espaço 1', // First copied ability slot header
            slot2: 'Espaço 2', // Second copied ability slot header
            apply_btn: 'Aplicar bônus', // Confirm button to save copied abilities
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Confirmação', // Header of the Golden Nuts spend confirmation dialog
            desc: 'Gastar ouro?', // Default confirmation question
            buy_btn: 'Comprar ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Confirm button showing Golden Nut cost
            buy_label: 'Comprar', // "Buy" word before the cost bracket
            buff_title: 'Ativar turbino', // Header when buying a temporary booster with gold
            buff_desc: 'Gastar {cost} <img src="assets/golden_nut.webp" class="ui-ico"> para ativar o bônus?', // Description when buying a booster
            not_enough_gold: 'Nozes Douradas insuficientes', // Alert message when player lacks Golden Nuts
            gear_title: 'Desbloquear visual', // Header when buying a Speaker or Cradle skin with gold
            gear_desc: 'Comprar "{name}" por {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying gear
            talisman_title: 'Novo amuleto da sorte', // Header when buying a Lucky Charm
            talisman_desc: 'Comprar o amuleto "{name}" por {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying a charm
            deal_title: 'Oferta do dia', // Header when buying the Daily Deal item
            deal_desc: 'Comprar "{name}" por {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Prompt when buying the Daily Deal
            item_title: 'Comprar item', // Header when buying an item directly from the Inventory list
            item_desc: 'Comprar "{name}" por {price}?', // Prompt when buying an item from Inventory
            ufo_desc: 'Gastar 39 <img src="assets/golden_nut.webp" class="ui-ico"> para invocar o OVNI?', // Prompt when summoning a UFO with gold
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'COFRE', // Small top badge in the Golden Bank header
            title: 'BANCO DOURADO', // Main header of the premium currency & IAP store
            vip_note: 'Qualquer compra desbloqueia o <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> permanentemente no ranking!', // Note about permanent VIP status perk
            free_gold_title: 'Ouro grátis', // Title on the rewarded ad card inside the Bank
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> por anúncio', // Reward amount for watching an ad in the Bank
            free_gold_btn: 'Resgatar', // Button to watch an ad for +15 Golden Nuts
            hit_badge: '🔥 MAIS VENDIDO', // Highlight tag on the No Ads bundle
            adfree_title: 'Sem anúncios + VIP', // Title of the permanent ad removal bundle
            adfree_desc: 'Remove todos os anúncios obrigatórios para sempre!', // Description of the ad removal bundle
            pack_handful: 'Punhado de nozes', // Gold Pack 1 (100 Golden Nuts)
            pack_pouch: 'Bolsa de nozes', // Gold Pack 2 (300 Golden Nuts)
            pack_pouch_tag: 'Dá para 1 caixa', // Green hint tag: enough to buy 1 Golden Case (250 gold)
            pack_crate: 'Caixote de nozes', // Gold Pack 3 (750 Golden Nuts)
            pack_safe: 'Cofre do magnata', // Gold Pack 4 (2,000 Golden Nuts)
            pack_safe_tag: '+40% DE VALOR', // Orange best-value tag on the largest gold pack
            purchased: 'Comprado', // Button label once No Ads has been bought
            price_99: '99 Yans', // Price button for 99 portal currency units (Yans)
            price_249: '249 Yans', // Price button for 249 Yans
            price_590: '590 Yans', // Price button for 590 Yans
            price_1390: '1.390 Yans', // Price button for 1,390 Yans
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 VALOR 50x', // Discount badge in the Starter Pack header
            timer_text: 'Oferta acaba em:', // Label before the 48-hour countdown timer
            golden_nuts: 'Nozes Douradas', // Label under "179" in the Starter Pack loot grid
            regular_nuts: 'Nozes comuns', // Label under "1,799" in the loot grid
            wooden_boxes: 'Caixas de madeira', // Label under "25" in the loot grid
            iron_safes: 'Cofres de ferro', // Label under "10" in the loot grid
            golden_cases: 'Caixas douradas', // Label under "5" in the loot grid
            cyber_speaker: '"Cyber"', // Name of the exclusive Epic speaker skin included in the pack
            cyber_speaker_sub: 'Caixa de som (Épica)', // Subtitle clarifying that "Cyber" is an Epic speaker skin
            no_ads: 'SEM ANÚNCIOS', // Title of the ad-free tile in the loot grid
            no_ads_sub: 'Remove anúncios obrigatórios para sempre', // Subtitle of the ad-free tile
            vip_status: 'STATUS VIP', // Title of the VIP status tile in the loot grid
            vip_status_sub: 'Moldura dourada permanente no TOP', // Subtitle explaining the leaderboard VIP crown/frame
            claim_btn: 'LEVAR TUDO POR <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yans</s> 39 Yans', // Main purchase button with crossed-out original price
            timer_badge: '39 Yans', // Compact price label on the pulsing HUD Starter Pack button
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Nozes',
            badge: 'RESERVA', // Small top badge in the Case Vault header
            title: 'COFRE DE CAIXAS', // Main header of the cases & gacha modal
            safe_tile: 'Cofre', // Short label on the free Iron Safe ad tile
            bonus_label: 'Bônus do cofre', // Top label on the wide +15 Golden Nuts ad tile
            bonus_gold: '+15 Nozes Douradas', // Reward text on the wide gold ad tile
            wooden_name: 'Caixa de madeira', // Tier 1 case (earned via tapping)
            iron_name: 'Cofre de ferro', // Tier 2 case (bought with regular nuts)
            gold_name: 'Caixa dourada', // Tier 3 featured case (bought with Golden Nuts)
            nut_loot_50: '50 nozes', // Wooden Crate loot item: 50 regular nuts
            nut_loot_150: '150 nozes', // Wooden Crate loot item: 150 regular nuts
            nut_loot_300: '300 nozes', // Wooden Crate loot item: 300 regular nuts
            open_btn: 'Abrir', // Button to spin/open a single case
            buy_more_title: 'Comprar mais', // Tooltip on the "+" button
            open_all_title: 'Abrir tudo', // Tooltip on the "×10" batch open button
            in_game: 'No jogo', // Disabled button text when player has 0 Wooden Crates (earned by playing)
            buy_price: 'Comprar {price} <img src="{icon}" class="ui-ico-sm">', // Button text to buy a case when count is 0
            buy_multi_title: 'Comprar várias', // Tooltip on the "+" multi-buy button
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Resgatar', // Button text on the free ad reward tiles
            ready: 'PRONTO!', // Text on the bottom-left 3-min free crate button when ready to claim
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> CAIXA!', // Floating popup above the Cases button when filling the tap bar
            box_label: 'Caixa: {box}/{needed}', // Progress bar text format for taps until next crate
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Escolha a quantidade:', // Subtitle in the multi-buy popup (×1, ×5, ×10)
            total: 'Total:', // Label before the total calculated cost
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count} CAIXAS ABERTAS', // Header of the ×10 batch opening results modal
            claim_all: 'Resgatar tudo', // Primary button to close and collect batch rewards
            open_more: 'Abrir mais ×10', // Secondary button to immediately open another 10 cases
            open_more_count: 'Abrir mais ×{count}', // Secondary button when 2 to 9 cases remain
            new_count: '<span style="color:#2ecc71;">Novos: {count} 🪜</span>', // Summary counter of newly unlocked skins in the batch
            new_zero: '<span style="color:#7f8c8d;">Novos: 0</span>', // Summary text when all skins in the batch were duplicates
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ NOVO!</span>', // Badge next to a newly unlocked skin in the batch list
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Repetido (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Badge next to a duplicate skin showing gold compensation
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Abrindo caixa...', // Default roulette title
            opening_title: 'Abrindo: {name}', // Header title while spinning a specific case
            again_btn: 'De novo', // Button to spin another case of the same type
            again_count: 'De novo ({count})', // Button to spin again showing remaining case count
            batch_btn: '×10', // Button inside roulette to batch-open 10 cases at once
            skip_btn: 'Pular ⏩', // Button to skip the spinning animation
            close_btn: 'Fechar', // Button to close the roulette and return to the Vault
            reroll_btn: '📺 Girar de novo com anúncio', // Button to re-spin the roulette by watching an ad
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Girar de novo (Neon)', // Free reroll button granted by the Neon ladder perk
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Girar de novo com anúncio', // Ad reroll button with custom TV icon
            duplicate: 'Repetido → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Result text when the spun skin is already owned
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Descrição do bônus', // Default placeholder in the detailed ladder preview modal
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Recompensas diárias', // Header of the 7-day login calendar modal
            subtitle: 'Entre todos os dias e resgate um visual exclusivo de escada no 7º dia!', // Subtitle explaining the 7-day streak
            missed_alert: '⚠️ Você perdeu um dia!', // Warning shown when the player breaks their daily login streak
            restore_streak: 'Recuperar sequência', // Button to save the login streak by watching an ad
            reset_day1: 'Dia 1', // Button to reset the login streak back to Day 1
            day7_title: 'Dia 7: Prêmio especial', // Week 1 Day 7 banner title
            day7_desc: 'Visual "Calendário" (Épico)', // Week 1 Day 7 prize description
            double_ad: '▶ Dobrar com anúncio (x2)', // Button to claim 2x daily reward via ad
            claim_normal: 'Resgatar normal', // Button to claim 1x daily reward without ad
            day_badge: 'Dia {day}', // Day number header on calendar grid cards (Day 1 .. Day 6)
            day7_title_loop: 'Dia 7: Grande prêmio', // Week 2+ Day 7 banner title (after skin is already owned)
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> caixas douradas', // Week 2+ Day 7 reward description
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">HOJE!</span>', // Badge on Day 7 card when ready to claim
            double_claim_loop: '▶ Dobrar com anúncio (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to double Week 2+ Day 7 reward to 6 Golden Cases
            claim_normal_loop: 'Resgatar normal (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to claim regular Week 2+ Day 7 reward (3 Golden Cases)
            claim_skin_btn: 'Resgatar visual "Calendário"!', // Button to claim the exclusive skin on Week 1 Day 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ RESGATADO</span>', // Badge when Day 7 is completed
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Dia 7</span>', // Locked badge on Day 7 during Days 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Sequência de anúncios', // Header of the daily 1-10 ad watch reward track
            reset_timer: 'Reinicia em:', // Label before the midnight reset countdown
            footer: 'Todo anúncio assistido no jogo conta para o progresso.', // Footer note explaining how to advance the track
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Resgatado</span>', // Status on already collected steps
            claim_btn: 'Resgatar', // Button to claim an unlocked step reward
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} anúncios</span>', // Requirement badge on locked steps
            popup_safe: '+1 cofre!', // Floating feedback popup when claiming the free Iron Safe
            popup_nuts: '+600 nozes!', // Floating feedback popup when claiming +600 free nuts
            popup_gold: '+{gold} de ouro!', // Floating feedback popup when claiming +15 free gold
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> nozes' }, // Step 1 reward
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15 min)' }, // Step 2 reward: +20 Luck for 15 minutes
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 3 reward: 5 Golden Nuts
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> nozes' }, // Step 4 reward: 600 regular nuts
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> cofre' }, // Step 5 reward: 1 Iron Safe
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3 min)' }, // Step 6 reward: 3x Turbo boost for 3 minutes
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 7 reward: 15 Golden Nuts
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> nozes' }, // Step 8 reward: 1,000 regular nuts
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 9 reward: 25 Golden Nuts
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Visual "Outdoor" ' }, // Step 10 grand prize: Epic Billboard ladder skin
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Day 1: 500 regular nuts
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Day 2: 1 Iron Safe
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 3: 1 Golden Case
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 4: 75 Golden Nuts
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 5: 2 Golden Cases
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 6: 100 Golden Nuts
            { day: 7, text: 'Visual "Calendário"' }, // Day 7: Exclusive Calendar ladder skin
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Boas-vindas de volta!', // Header when returning to the game after >1 minute away
            away_time: 'Você ficou fora por: {time}', // Full time away line
            away_prefix: 'Você ficou fora por:', // Prefix before away duration
            limit_label: 'Limite: {limit}', // Full offline accumulation limit text
            limit_prefix: 'Limite:', // Prefix before max offline time cap
            speaker_earned: 'Caixa de som gerou:', // Meters generated passively by the Subwoofer while away
            newton_earned: 'Pêndulo gerou:', // Meters generated passively by the Newton Cradle while away
            cases_found: 'Caixas encontradas: {count} un.', // Passive Wooden Crates found while away
            cases_found_prefix: 'Caixas encontradas:', // Prefix before crates count
            total_earned: 'Altura total ganha:', // Header above total offline meters earned
            double_ad: '▶ Dobrar com anúncio', // Button to double offline earnings via ad
            claim_normal: 'Resgatar normal', // Button to collect base offline earnings
            limit_3h: '3 horas', // Extended offline cap (with Deep Space ladder perk)
            limit_30m: '30 min', // Base offline cap (30 minutes)
            double_btn: '▶ Dobrar com anúncio (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Dynamic button text showing exact doubled amounts
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ALCANÇADO', // Red stamp over the milestone postcard illustration
            double_ad: '▶ Dobrar com anúncio (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to double milestone gold reward via ad
            claim_normal: 'Resgatar normal (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to collect base milestone gold reward
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Fullscreen achievement postcards triggered upon reaching major altitudes:
            { height: 250, name: 'Telhados', desc: 'Lá em cima, só ficam os pássaros e os aluguéis absurdos. Os primeiros cem metros ficaram para trás!' },
            { height: 1000, name: 'Frente de tempestade', desc: 'Segure firme nos degraus molhados. Céu aberto e trovões pela frente!' },
            { height: 10000, name: 'Estratosfera', desc: 'Altitude de cruzeiro. Dá para ver claramente a curvatura da Terra lá embaixo.' },
            { height: 100000, name: 'Espaço', desc: 'A gravidade desistiu. Você está oficialmente em gravidade zero!' },
            { height: 1000000, name: 'Via Láctea', desc: 'Um milhão de metros. Você foi muito além de qualquer limite razoável.' },
            { height: 10000000, name: 'O Grande Vazio', desc: 'O fim do mapa? Não, só o começo do nada absoluto.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Lore entries shown in the Logbook popup card when clicking altitude checkpoints on the right rail:
            { id: 0, name: 'Pátio Antigo', desc: 'Seu território. Uma selva de concreto e o rangido dos velhos degraus de madeira. É aqui que sua escalada sem fim começa.' },
            { id: 1, name: 'Telhados', desc: 'Mais alto que antenas de TV, pombos e trânsito. Os primeiros cem metros ficaram para trás, e o ar está ficando mais puro.' },
            { id: 2, name: 'Frente de tempestade', desc: 'Nuvens gigantescas, relâmpagos cegantes e o cheiro forte de ozônio. Os degraus estão escorregadios — segure firme!' },
            { id: 3, name: 'Estratosfera', desc: 'O limite da atmosfera terrestre. O céu fica azul-ultramar profundo, revelando a curva azul intensa do planeta.' },
            { id: 4, name: 'Espaço profundo', desc: 'Satélites silenciosos em órbita e um vazio sem tempo. A gravidade se rendeu — a escada é o único caminho para cima.' },
            { id: 5, name: 'Via Láctea', desc: 'Espirais de galáxias distantes, nebulosas cintilantes e poeira cósmica. Um milhão de metros acima dos problemas terrestres.' },
            { id: 6, name: 'O Grande Vazio', desc: 'O horizonte de eventos na borda do universo conhecido. A altitude suprema, onde o tempo se dissolve na infinidade cósmica.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Current zone names displayed below the main altitude counter:
            khrushchevka: 'Pátio Antigo',
            roofs: 'Telhados',
            storm_front: 'Frente de tempestade',
            stratosphere: 'Estratosfera',
            open_space: 'Espaço profundo',
            milky_way: 'Via Láctea',
            endless: 'O Grande Vazio',

            // Hover tooltips (title) on the 7 altitude tracker checkpoints:
            checkpoint_0: '0 m — Pátio Antigo',
            checkpoint_250: '250 m — Telhados',
            checkpoint_1000: '1.000 m — Frente de tempestade',
            checkpoint_10000: '10.000 m — Estratosfera',
            checkpoint_100000: '100.000 m — Espaço profundo',
            checkpoint_1000000: '1.000.000 m — Via Láctea',
            checkpoint_10000000: '10.000.000 m — O Grande Vazio',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'EXPLORADO', // Green badge when the stage has been reached
            signal_lost_badge: 'SINAL PERDIDO', // Red badge when the stage is still locked
            unknown_sector: 'Setor desconhecido', // Masked title for locked stages
            height_label: 'Altitude: {height} m', // Altitude label on unlocked stages
            target_label: 'Alvo: {target} m (faltam {remaining} m)', // Progress required to unlock a stage
            locked_desc: 'Os sensores detectam anomalias graves nesta altitude. Continue subindo para decifrar os dados do sinal.', // Sci-fi flavor text for locked stages
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Desafio de resistência', // Header of the 20-minute session timer modal
            challenge_desc: 'Fique no jogo por 20 minutos para ganhar um visual Retro exclusivo de graça!', // Challenge rules
            skin_name: 'Visual "Retro"', // Name of the 8-bit arcade ladder skin
            ability_label: '<b style="color: #f1c40f;">Habilidade:</b> Pegue a moeda voadora (saque: até 125 <img src="assets/nut.webp" class="ui-ico-sm"> e 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).', // Perk description
            time_left: 'Tempo restante:', // Label before the countdown timer
            challenge_complete: 'DESAFIO CONCLUÍDO!', // Fullscreen celebration header after 20 minutes
            challenge_reward: 'Você sobreviveu por 20 minutos! Aqui está sua recompensa:', // Celebration subtitle
            epic_skin: 'VISUAL ÉPICO "RETRO"', // Featured reward title
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BÔNUS', // Badge on the home screen shortcut offer banner
            title: 'Adicione o jogo à tela inicial e suba com um toque!', // Main offer heading
            desc: 'Toque em "Adicionar" na próxima janela e a recompensa é sua', // Instructions for the browser/platform prompt
            reward_label: 'Recompensa de instalação:', // Label inside the reward pill
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Reward amount
            add_btn: 'ADICIONAR (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Primary accept button
            decline_title: 'Tem certeza de que não quer a recompensa?', // Retention modal header (sad mascot) if player clicks "Later"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> estão esperando por você. Adicionar o atalho leva só dois segundos!', // Retention description
            decline_claim: 'Resgatar 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Retention accept button
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'LIGA DOS ESCALADORES', // Top badge in the Hall of Fame header
            title: 'HALL DA FAMA', // Main leaderboard title
            season_desc: 'Ranking global dos conquistadores do espaço', // Default subtitle
            tab_alltime: 'Geral', // All-time ranking tab
            tab_week: 'Temporada (semanal)', // Weekly tournament tab
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Carregando ranking...</div>', // Loading state text
            desc_alltime: 'Ranking global dos conquistadores do espaço', // Subtitle when All Time tab is active
            desc_week: 'Reinicia toda segunda-feira às 00:00', // Subtitle when Weekly tab is active
            anon: 'Escalador anônimo', // Fallback name for unauthorized players
            you_player: 'Você (jogador)', // Player's entry name in local/fallback mode
            you_vip: '<span>Você (VIP)</span>', // Sticky bottom card label when player has VIP status
            you: '<span>Você</span>', // Sticky bottom card label without VIP status
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'OFERTA QUENTE', // Top badge in the Daily Deal header
            title: 'OFERTA DO DIA', // Main header of the Daily Deal modal
            timer_label: 'Nova oferta em', // Label before the midnight refresh countdown
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Atualizar ({left}/5)', // Button to reroll the deal via ad (up to 5 times/day)
            reroll_exhausted: 'Sem atualizações (0/5)', // Disabled button text when 0 rerolls remain
            in_collection: '✔ NA COLEÇÃO', // Button text when the featured item is already owned
            buy_btn: 'COMPRAR: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Purchase button with old and discounted prices
            not_enough: 'Faltam {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Banco', // Button when player lacks gold (redirects to Golden Bank)
            discount_badge: '{rarity} • -{percent}% OFF', // Discount tag above the item name
            unique_ladder: 'Escada única', // Fallback description for ladder deals
            luck_desc: '+{luck} de Sorte total', // Description when the deal features a Lucky Charm
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'CONFIGURAÇÕES', // Settings modal header
            language: '🌐 Idioma',
            music: 'Música e ambiente', // Slider 1: background music and wind/space ambience volume
            tap_sounds: 'Sons dos toques', // Slider 2: ladder tap sound effects volume
            speaker_bass: 'Graves do subwoofer', // Slider 3: passive Subwoofer bass volume
            newton_hit: 'Impacto do pêndulo', // Slider 4: Newton Cradle clack volume
            rewards_sfx: 'Prêmios e efeitos', // Slider 5: UI, fanfare, and roulette sounds volume
            vibration: 'Resposta tátil', // Checkbox: mobile vibration on tap
            support_btn: 'Suporte / Comunidade', // Footer button for player support
            support_alert: 'Comunidade e suporte do jogo: t.me/your_game_group', // Alert text with community link
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Sua Sorte', // Header of the Luck breakdown & Charms modal
            total_label: 'Atributo total', // Subtitle under the big green total luck number
            influence_title: 'Como a Sorte afeta o jogo:', // Info box heading
            influence_cases: 'Aumenta a chance de encontrar caixas ao tocar.', // Bullet 1
            influence_nuts: 'Aumenta a quantidade de nozes dentro das caixas.', // Bullet 2
            influence_rarity: 'Aumenta as chances de visuais Épicos e Lendários.', // Bullet 3
            breakdown_title: 'Detalhes dos atributos:', // Heading above the list of active luck sources
            talismans_title: 'Coleção de amuletos:', // Heading above the horizontal charm shop strip
            buff_label: 'Sorte', // Short luck label
            plus_luck: '+{value} de Sorte', // Luck bonus format
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">EQUIPADO</div>', // Equipped tag on charm card
            equip_btn: 'Equipar', // Equip button on owned charm card
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Bloqueado</div>', // Locked tag on future charms in the chain
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Escada "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: active ladder perk luck
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Amuleto "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: equipped charm luck
            cyber_item: '<div>🦾 Espaço Cyber "{name}": <b style="color:#00ffff;">+{luck}</b></div>', // Breakdown line: Cyberpunk slot charm luck
            ad_fortune: '<div>📺 Bônus de anúncio (Sinal da Sorte): <b style="color:#2ecc71;">+15</b></div>', // Breakdown line: temporary +15 Luck ad booster
            no_buffs: '<div>Nenhum bônus de Sorte ativo.</div>', // Shown when total luck is 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'OURO RECEBIDO!', // Default header in the mascot thank-you modal
            default_desc: 'Valeu por jogar com a gente!', // Default thank-you message
            vip_badge: 'STATUS VIP ATIVADO', // Golden badge shown when a purchase grants VIP status
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'PACOTE INICIAL!', // Header after purchasing the Starter Pack
                desc: 'Uma montanha de caixas, nozes, jogo sem anúncios e o visual "Cyber" agora são seus! Valeu pelo apoio <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'OURO RECEBIDO!', // Header after watching an ad for +15 Golden Nuts
                desc: 'Você recebeu <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> por assistir a um anúncio!',
            },
            adfree: {
                title: 'SEM ANÚNCIOS!', // Header after purchasing No Ads
                desc: 'Anúncios obrigatórios removidos para sempre! Valeu por apoiar nosso jogo ❤️',
            },
            gold_credited: {
                title: 'OURO RECEBIDO!', // Header after purchasing a Gold Pack
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> adicionadas ao seu saldo. Valeu pelo apoio ❤️! Boa escalada!',
            },
            shortcut_reward: {
                title: 'RECOMPENSA EM OURO!', // Header after installing the home screen shortcut
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> adicionadas ao seu saldo!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Valeu por jogar! ❤️</span>',
            },
            deal: {
                buy_btn: 'COMPRAR: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Daily Deal purchase button
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        //  Keep these short and punchy — they float on the canvas and fade quickly!
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'PACOTE INICIAL DESBLOQUEADO!', // Floating text when Starter Pack is bought
            sponsor: '📺 Patrocinador: +{nuts} 🔩 e +{gold} 🟡!', // Bonus from Billboard ladder perk after watching any ad
            turbo_boost: 'TURBO 3x ({seconds}s)!', // Floating text when Turbo Climb is activated
            luck_boost: 'SORTE +{value}!', // Floating text when Luck booster is activated
            frenzy: 'CHUVA DE NOZES!', // Floating text when Nut Rain is activated
            autotap: 'PILOTO AUTOMÁTICO (15 toques/s)!', // Floating text when Autopilot is activated
            turbo_income: 'TURBO 3x!', // Floating text when buying Turbo with gold
            luck_15: 'SORTE +15!', // Floating text when buying Luck with gold
            ufo_case: '+1 CAIXA!', // UFO loot pod reward: Wooden Crate
            ufo_safe: '+1 COFRE!', // UFO loot pod reward: Iron Safe
            billiard_crit: '🎱 2,5x! +{nuts} 🔩', // Every 8th hit proc from the 8-Ball cradle skin
            planet_turbo: '🌍 TURBO 3x (20s)!', // 1% random buff proc from Mini Earth cradle: Turbo
            planet_luck: '🌍 SORTE +15 (60s)!', // 1% random buff proc from Mini Earth cradle: Luck
            planet_frenzy: '🌍 CHUVA DE NOZES (15s)!', // 1% random buff proc from Mini Earth cradle: Nut Rain
            hawking: '💥 RADIAÇÃO HAWKING: +100.000 m!', // Easter egg burst when unequipping Singularity ladder at max +1,000% charge
            storm_discharge: 'DESCARGA (10x)!', // 10 auto-tap burst from Plasma Globe after 5s of idle time
            absolute_unlocked: 'ABSOLUTO DESBLOQUEADO!', // Floating text when unlocking 100% collection completion skin
            legendary_skin: '👑 VISUAL LENDÁRIO: {name}!', // Floating text when unlocking a milestone ladder skin
            retro_coin: '+{nuts} nozes, +{gold}!', // Floating text when catching the flying Retro coin
            banana_double: '🍌 TOQUE 2x!', // Every 5th tap proc from the Banana ladder
            combo: '🔥 {mult}x ({cps} TOQUES/S)', // High-speed tapping multiplier proc from the Scratcher ladder
            case_drop: '+1 CAIXA!', // Random Wooden Crate drop while tapping
            golden_case_milky: 'CAIXA DOURADA (VIA LÁCTEA)!', // When Milky Way perk upgrades a dropped safe into a Golden Case
            golden_case: 'CAIXA DOURADA!', // Golden Case drop (e.g., from Marble Gold perk)
            safe_milky: 'COFRE (VIA LÁCTEA)!', // When Milky Way perk upgrades a dropped crate into an Iron Safe
            safe_luck: 'COFRE (SORTE)!', // When high Luck upgrades a random crate drop into an Iron Safe
            iron_safe: 'COFRE DE FERRO!', // Iron Safe awarded from tap meter (Golden ladder perk)
            rusty_nut: '+100', // Bonus 100 nuts from Holiday ladder gift
            rusty_box: '+1 CAIXA!', // Bonus crate from Holiday ladder gift
            rusty_safe: '+1 COFRE!', // Bonus safe from Holiday ladder gift
            marble_double: '+{value} (2x)', // Doubled tap value
            jackpot: 'JACKPOT: +1!', // Micro-jackpot (+1 Golden Nut) when opening a Wooden Crate with 30+ Luck
            timed_box: '+1 CAIXA RESGATADA!', // Floating text when collecting the 3-minute free crate
            crystal_gold: '+{value} (Cristal)!', // +3 Golden Nuts bonus when opening any case with Crystal ladder perk
            shop_spent: '-{cost} m', // Red floating text when spending meters on shop upgrades
            streak_dupe: 'Repetido: +{value}!', // Gold compensation if Billboard skin is already owned on Ad Streak step 10
            streak_billboard: '🎉 VISUAL "OUTDOOR" DESBLOQUEADO!', // Unlocking Billboard skin on Ad Streak step 10
            calendar_day: 'Recompensa do dia {day} resgatada!', // Floating text when claiming daily login reward
            calendar_skin: 'VISUAL "CALENDÁRIO" DESBLOQUEADO!', // Unlocking Calendar skin on Day 7
            calendar_bonus: '+{cases} caixas douradas!', // Claiming Week 2+ Day 7 grand reward
            timewarp_report: '+{meters} m', // Time Machine report part: meters gained
            timewarp_nuts: '+{nuts} nozes', // Time Machine report part: nuts gained
            timewarp_gold: '+{gold} de ouro', // Time Machine report part: gold gained
            magnet_ufo: 'ÍMÃ DE OVNI!', // Floating text when summoning a UFO pod
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Madeira' }, // Default wooden stepladder
            banana: { name: 'Banana' }, // Ladder made of bananas and palm leaves
            beer: { name: 'Caixote de cerveja' }, // Ladder stacked from beer cans/bottles
            fire: { name: 'Flamejante' }, // Blazing fire ladder
            fireman: { name: 'Escada de incêndio' }, // Red metal fireman ladder
            plastic: { name: 'Plástico' }, // Lightweight blue plastic ladder
            rusty: { name: 'Enferrujada' }, // Old corroded metal ladder that drops nuts
            tape: { name: 'Fita adesiva' }, // Ladder held together with blue duct/insulation tape
            // === RARE ===
            book: { name: 'Pilha de livros' }, // Ladder built from stacks of books
            cactus: { name: 'Cacto' }, // Prickly green desert cactus ladder
            cement: { name: 'Concreto' }, // Heavy-duty reinforced concrete ladder
            neon: { name: 'Neon' }, // Glowing pink/cyan neon tube ladder
            scratch: { name: 'Arranhador' }, // Rope-wrapped cat scratching post ladder
            new_year: { name: 'Festiva' }, // Festive ladder decorated with lights and ornaments
            // === EPIC ===
            add_stair: { name: 'Painel publicitário' }, // High-tech advertising screens ladder
            bone: { name: 'Esquelética' }, // Spooky bone and skull ladder
            crystal: { name: 'Cristal' }, // Shimmering blue crystal/diamond ladder
            cyber: { name: 'Cyberpunk' }, // Futuristic cybernetic ladder with circuit boards
            golden: { name: 'Dourada' }, // Solid gleaming gold ladder
            goth: { name: 'Gótica' }, // Dark wrought-iron gothic gargoyle ladder
            ice: { name: 'Glacial' }, // Slippery frozen icicle ladder
            vine: { name: 'Trepadeira' }, // Overgrown living jungle vine ladder
            calendar_stair: { name: 'Calendário' }, // Clockwork & calendar pages ladder (Day 7 login reward)
            // === LEGENDARY ===
            marble: { name: 'Mármore dourado' }, // Classical white marble ladder with gold trim
            quant: { name: 'Quântica' }, // Glitching dimensional-shifting quantum ladder
            ufo: { name: 'OVNI' }, // Alien saucer alloy ladder with green tractor beams
            mimic: { name: 'Mímico' }, // Monster chest-mimic ladder with teeth and eyes
            // === SPECIAL ===
            retro: { name: 'Retrô' }, // 8-bit pixel arcade ladder (20-min trial reward)
            storm: { name: 'Frente de tempestade' }, // Thundercloud & lightning ladder (unlocked at 1,000 m)
            strato: { name: 'Estratosfera' }, // High-altitude aero ladder (unlocked at 10,000 m)
            cosmo: { name: 'Espaço profundo' }, // Orbital spacecraft ladder (unlocked at 100,000 m)
            milkyway: { name: 'Via Láctea' }, // Starry galactic nebula ladder (unlocked at 1,000,000 m)
            endless: { name: 'Singularidade' }, // Black hole event horizon ladder (unlocked at 10,000,000 m)
            absolute: { name: 'ABSOLUTA' }, // Ultimate divine ladder (unlocked at 100% game completion)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'A clássica para começar. Tem cheiro de início de uma jornada sem fim.',
            banana: 'Dobra a cada 5º toque.',
            beer: '+5 de Sorte.',
            fire: '+7 m por toque, 10 toques a menos para ganhar uma caixa.',
            fireman: 'Pêndulo de Newton: +15 m por golpe',
            plastic: 'O pêndulo de Newton oscila 0,15s mais rápido',
            rusty: '65% de chance de encontrar <img src="assets/nut.webp" class="ui-ico"> a cada toque.',
            tape: '10% de desconto no Mercado Negro.',
            book: '+7 de Sorte.',
            cactus: 'Subwoofer: +20 m/s. Pêndulo de Newton: +10 m por golpe',
            cement: 'Pêndulo de Newton: +50% de potência, mas os golpes ficam 0,3s mais lentos.',
            neon: 'Giro grátis toda vez que abrir uma caixa',
            scratch: 'Com 5+ toques/s, a altura por toque é multiplicada por 1,5x',
            new_year: 'Presente bônus a cada 150–250 toques.',
            bone: 'Dobra o valor de cada toque',
            crystal: 'Cada caixa aberta concede +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Desbloqueia um espaço extra para acessório.',
            golden: 'Ao encher a barra de toques, ganha um cofre de ferro em vez de uma caixa',
            goth: '20% de desconto em melhorias e caixas compradas com nozes',
            ice: 'Escalada deslizando: permite tocar e deslizar pela escada',
            vine: 'Aumenta em 40% a força dos toques, do subwoofer e do pêndulo.',
            add_stair: 'Os bônus duram 50% mais; cada anúncio assistido concede 20 <img src="assets/nut.webp" class="ui-ico"> e 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 de Sorte; mais chance de visuais Lendários em cofres.',
            marble: '25% de chance de ganhar uma caixa dourada ao completar a barra de toques.',
            quant: 'Fissão da matéria: 20% das nozes obtidas viram douradas; 50 toques a menos para ganhar uma caixa.',
            ufo: 'Atrai uma cápsula alienígena de saque a cada 30 segundos',
            mimic: 'Imitação: copia as habilidades passivas de 2 escadas selecionadas.',
            retro: 'Pegue a moeda voadora (saque: até 125 <img src="assets/nut.webp" class="ui-ico"> e 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m por toque, mas há 5% de chance de falha a cada toque.',
            strato: 'Ar rarefeito: aumenta em 40% a velocidade do subwoofer e do pêndulo.',
            cosmo: 'Aumenta o limite de acúmulo de recursos inativos para 3 horas.',
            milkyway: 'Bônus de inércia. 25% de chance de aumentar em 1 nível qualquer caixa encontrada.',
            endless: 'Aumenta os ganhos de altura em +50% a cada minuto (até +1.000%). Trocar de escada zera o bônus.',
            absolute: 'O auge da evolução: concede simultaneamente os bônus passivos de todas as escadas',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Caixa de som vintage' }, // Default retro wooden speaker
            monster: { name: 'Torre monstruosa' }, // Concert rock amplifier stack
            cyber: { name: 'Caixa de som Cyber' }, // Futuristic neon cyberpunk subwoofer
            cool: { name: 'Subwoofer supremo' }, // Golden stadium-grade sound system
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Batida básica do subwoofer (Potência x1)',
            monster: '+20% de potência do subwoofer. Reduz em 2 minutos o tempo de espera da caixa grátis.',
            cyber: '+40% de potência do subwoofer. Ganhe 25% mais <img src="assets/nut.webp" class="ui-ico"> e <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: '2x de potência do subwoofer. A cada 3ª batida, ganhe +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Graves: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Esferas de aço' }, // Classic chrome pendulum balls
            billiard: { name: 'Bola 8' }, // Black pool 8-balls
            plasma: { name: 'Globo de plasma' }, // High-voltage Tesla plasma spheres
            planet: { name: 'Mini Terra' }, // Miniature planet Earth globes
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Golpe básico do pêndulo de Newton (Dano x1)',
            billiard: '+25% de dano do pêndulo. A cada 8º golpe, ganhe 2,5x de altura e 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% de dano do pêndulo. Eletrificado: com 6+ toques/s, dobra a altura por toque. Após 5s sem atividade, dá 10 toques automáticos.',
            planet: '2x de dano do pêndulo, +3 toques por golpe para ganhar uma caixa. +100% em todas as fontes por turbino ativo. 1% de chance de ativar um bônus aleatório por golpe.',
            fallback: 'Golpe: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Trevo de quatro folhas' }, // Tier 1 charm (+3 Luck)
            horseshoe: { name: 'Ferradura dourada' }, // Tier 2 charm (+5 Luck)
            paw: { name: 'Pata de coelho' }, // Tier 3 charm (+8 Luck)
            coin: { name: 'Moeda antiga' }, // Tier 4 charm (+12 Luck)
            star: { name: 'Estrela da sorte' }, // Tier 5 charm (+18 Luck)
            key: { name: 'Chave-mestra' }, // Tier 6 charm (+25 Luck)
            sock: { name: 'Meia da sorte' }, // Tier 7 secret completion charm (+50 Luck)
            sock_alert: '🎉 INCRÍVEL! Você coletou todos os amuletos e desbloqueou a MEIA SECRETA (+50 de Sorte)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'COMUM',
            rare: 'RARO',
            epic: 'ÉPICO',
            legendary: 'LENDÁRIO',
            special: 'ESPECIAL',
        },
    },

    // Арабский (ar) 7
    ar: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'سلم الفضاء',
            version: 'Space Stepladder v1.0.0',
            height_display: '{height} م',
            height_short: '{height} م',
        },
        assets: {
            top_btn: 'assets/top_en.webp',
            starter_banner: 'assets/starter_pack_en.webp',
            bank_banner: 'assets/bank_window2_en.webp',
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} م/نقرة',
            meters_per_sec: '{value} م/ث',
            meters_per_hit: '{value} م/ضربة',
            level: 'مستوى {level}',
            seconds_short: '{value} ث',
            meters: '{value} م',
            meters_plus: '+{value} م',
            pieces: '{count} ق',
            min_sec: '{min} د {sec} ث',
            meters_per_click_short: 'م/نقرة',
            meters_per_sec_short: 'م/ث',
            meters_per_hit_short: 'م/ضربة',
            level_short: 'م.',
            meters_unit: 'م',
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'الحصول على صواميل ذهبية',
            donate_btn: 'البنك',
            deal_btn: 'صفقة',
            top_btn_aria: 'قاعة المشاهير',
            zen_title: 'وضع الهدوء (إخفاء الواجهة)',
            rewards_btn: 'المكافآت',
            rewards_count: '{current}/10',
            buffs_btn: 'معززات',

            // --- Bottom Navigation ---
            shop_btn: 'المتجر',
            skins_btn: 'المظاهر',
            cases_btn_label: 'صناديق:',
            free_box_label: 'مجاني:',

            // --- Action Buttons ---
            close_btn: '✕',
            close_aria: 'إغلاق',
            cancel_btn: 'إلغاء',
            buy_btn: 'شراء',
            claim_btn: 'استلام',
            equip_btn: 'تجهيز',
            equipped_badge: 'مُجهّز',
            later_btn: 'لاحقاً',
            not_now_btn: 'ليس الآن',
            excellent_btn: 'رائع!',
            forward_btn: 'إلى القمة!',
            claim_and_equip_btn: 'استلام وتجهيز',
            just_claim_btn: 'استلام فقط',
            selected_btn: 'محدد',
            buy_for: 'شراء مقابل {price} {currency}',
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'السوق السوداء',
            buy_label: 'شراء',
            click_title: 'قوة النقر',
            speaker_title: 'مضخم الصوت',
            newton_title: 'بندول نيوتن',
            cost_suffix: '{cost} م',
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ المعززات',
            ad_btn: 'مشاهدة إعلان',

            fortune_name: 'الحظ',
            fortune_desc: '15+ لإحصائية الحظ',
            turbo_name: 'تسلق توربو',
            turbo_desc: 'مضاعفة 3x لكل كسب الارتفاع',
            frenzy_name: 'مطر الصواميل',
            frenzy_desc: 'تسقط الصواميل من السماء مع كل نقرة',
            autotap_name: 'طيار آلي',
            autotap_desc: 'نقر تلقائي على السلم 15 مرة/ث',
            timewarp_name: 'آلة الزمن',
            timewarp_desc: 'احصل فوراً على دخل 5 دقائق',
            timewarp_instant: 'فوري',
            ufo_name: 'مغناطيس الفضائيين',
            ufo_desc: 'يجذب كبسولة موارد وغنائم',
            ufo_summon: 'استدعاء',
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'حقيبة العتاد',
            tab_ladders: 'السلالم',
            tab_speakers: 'المكبرات',
            tab_newton: 'البندولات',
            tab_talismans: 'التمائم',
            available_skins: 'المظاهر المتاحة:',
            no_effects: 'لا توجد تأثيرات إضافية',
            default_ladder_desc: 'خصائص السلم القياسية',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> المظهر',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> الميزة',
            equipped_btn: 'مُجهّز',
            unequip_btn: 'إزالة',
            equip_btn: 'تجهيز',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> بالترتيب',
            fully_equipped: '✔ مُجهّز بالكامل',
            equip_all: 'تجهيز الاثنين',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> المظهر مفعل ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> المظهر فقط',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> الميزة مفعلة ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> الميزة فقط',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> عنصر مقفل',
            mimic_setup: '⚙️ ضبط الخانات ({slot0}، {slot1})',
            cyber_setup: '🦾 ضبط الخانة الإضافية',
            item_fallback: 'عنصر',
            luck_plus: '+{luck} حظ',
            slot_empty: 'فارغ',
            slot_default: 'إحصائيات قياسية',
            slot_1_selected: '✔ الخانة 1',
            slot_2_selected: '✔ الخانة 2',
            select_action: '+ اختيار',
            cyber_installed: '✔ مُثبَّت',
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'تخصيص',
            base_level: 'المستوى الأساسي: {level}',
            base_level_prefix: 'المستوى الأساسي:',
            power: 'القوة: {value}',
            power_mps: 'القوة: {value} م/ث',
            upgrade_btn: 'ترقية',
            speakers_title: '📻 مضخم الصوت',
            newton_title: '⚪ بندول نيوتن',
            hit_power: 'الضربة: {power} م (كل {speed} ث)',
            upgrade_cost: 'ترقية: {cost} م',
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 خانة السايبربانك',
            desc: 'اختر ميزة إضافية واحدة من أي عتاد مفتوح (مضخم، بندول، أو تميمة):',
            tab_speakers: 'المكبرات',
            tab_newton: 'البندولات',
            tab_talismans: 'التمائم',
            install_btn: 'تثبيت الغرسة',
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 قدرات الميميك',
            desc: 'اختر أي سلمين مفتوحين لنسخ قدراتهما السلبية:',
            slot1: 'الخانة 1',
            slot2: 'الخانة 2',
            apply_btn: 'تطبيق القدرات',
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'تأكيد',
            desc: 'إنفاق الذهب؟',
            buy_btn: 'شراء ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: 'شراء',
            buff_title: 'تفعيل المعزز',
            buff_desc: 'إنفاق {cost} <img src="assets/golden_nut.webp" class="ui-ico"> لتفعيل المعزز؟',
            not_enough_gold: 'لا تملك ما يكفي من الصواميل الذهبية',
            gear_title: 'فتح مظهر عتاد',
            gear_desc: 'شراء "{name}" مقابل {price} <img src="assets/golden_nut.webp" class="ui-ico">؟',
            talisman_title: 'تميمة حظ جديدة',
            talisman_desc: 'شراء التميمة "{name}" مقابل {price} <img src="assets/golden_nut.webp" class="ui-ico">؟',
            deal_title: 'صفقة اليوم',
            deal_desc: 'شراء "{name}" مقابل {price} <img src="assets/golden_nut.webp" class="ui-ico">؟',
            item_title: 'شراء عنصر',
            item_desc: 'شراء "{name}" مقابل {price}؟',
            ufo_desc: 'إنفاق 39 <img src="assets/golden_nut.webp" class="ui-ico"> لاستدعاء الفضائيين؟',
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'الخزينة',
            title: 'البنك الذهبي',
            vip_note: 'أي عملية شراء تفتح رتبة <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> بشكل دائم في لوحة الصدارة!',
            free_gold_title: 'ذهب مجاني',
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> لكل إعلان',
            free_gold_btn: 'استلام',
            hit_badge: '🔥 الأكثر مبيعاً',
            adfree_title: 'بدون إعلانات + VIP',
            adfree_desc: 'إزالة جميع الإعلانات الإجبارية للأبد!',
            pack_handful: 'حفنة صواميل',
            pack_pouch: 'كيس صواميل',
            pack_pouch_tag: 'تكفي لصندوق',
            pack_crate: 'صندوق صواميل',
            pack_safe: 'خزينة الثري',
            pack_safe_tag: 'قيمة +40%',
            purchased: 'تم الشراء',
            price_99: '99 يان',
            price_249: '249 يان',
            price_590: '590 يان',
            price_1390: '1,390 يان',
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 قيمة مضاعفة 50x',
            timer_text: 'ينتهي العرض خلال:',
            golden_nuts: 'صواميل ذهبية',
            regular_nuts: 'صواميل قياسية',
            wooden_boxes: 'صناديق خشبية',
            iron_safes: 'خزائن حديدية',
            golden_cases: 'صناديق ذهبية',
            cyber_speaker: '"سايبر"',
            cyber_speaker_sub: 'مضخم صوت (ملحمي)',
            no_ads: 'بدون إعلانات',
            no_ads_sub: 'إزالة الإعلانات الإجبارية للأبد',
            vip_status: 'رتبة VIP',
            vip_status_sub: 'إطار ذهبي دائم في لوحة الصدارة',
            claim_btn: 'احصل على الكل مقابل <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2,099 يان</s> 39 يان',
            timer_badge: '39 يان',
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'صواميل',
            badge: 'المخبأ',
            title: 'مستودع الصناديق',
            safe_tile: 'خزينة',
            bonus_label: 'مكافأة المستودع',
            bonus_gold: '+15 صامولة ذهبية',
            wooden_name: 'صندوق خشبي',
            iron_name: 'خزينة حديدية',
            gold_name: 'صندوق ذهبي',
            nut_loot_50: '50 صامولة',
            nut_loot_150: '150 صامولة',
            nut_loot_300: '300 صامولة',
            open_btn: 'فتح',
            buy_more_title: 'شراء المزيد',
            open_all_title: 'فتح الكل',
            in_game: 'في اللعبة',
            buy_price: 'شراء {price} <img src="{icon}" class="ui-ico-sm">',
            buy_multi_title: 'شراء متعدد',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> استلام',
            ready: 'جاهز!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> صندوق!',
            box_label: 'الصندوق: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'اختر الكمية:',
            total: 'الإجمالي:',
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: 'تم فتح {count} صناديق',
            claim_all: 'جمع الكل',
            open_more: 'فتح 10× إضافية',
            open_more_count: 'فتح {count}× إضافية',
            new_count: '<span style="color:#2ecc71;">جديد: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">جديد: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ جديد!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">مكرر (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'جاري فتح الصندوق...',
            opening_title: 'فتح: {name}',
            again_btn: 'مجدداً',
            again_count: 'مجدداً ({count})',
            batch_btn: '×10',
            skip_btn: 'تخطي ⏩',
            close_btn: 'إغلاق',
            reroll_btn: '📺 إعادة تدوير بإعلان',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> إعادة تدوير (نيون)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> إعادة تدوير بإعلان',
            duplicate: 'مكرر ← +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'وصف الميزة',
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'المكافآت اليومية',
            subtitle: 'سجّل دخولك يومياً! احصل على مظهر سلم حصري في اليوم 7.',
            missed_alert: '⚠️ فاتك يوم!',
            restore_streak: 'استعادة السلسلة',
            reset_day1: 'اليوم 1',
            day7_title: 'اليوم 7: الجائزة الكبرى',
            day7_desc: 'مظهر "التقويم" (ملحمي)',
            double_ad: '▶ مضاعفة بإعلان (x2)',
            claim_normal: 'استلام عادي',
            day_badge: 'اليوم {day}',
            day7_title_loop: 'اليوم 7: المكافأة الكبرى',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> صناديق ذهبية',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">اليوم!</span>',
            double_claim_loop: '▶ مضاعفة بإعلان (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: 'استلام عادي (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: 'استلام مظهر "التقويم"!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ تم الاستلام</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> اليوم 7</span>',
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'سلسلة الإعلانات',
            reset_timer: 'إعادة التعيين خلال:',
            footer: 'كل إعلان تشاهده في اللعبة يُحسب ضمن تقدمك.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ تم الاستلام</span>',
            claim_btn: 'استلام',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} إعلانات</span>',
            popup_safe: '+1 خزينة!',
            popup_nuts: '+600 صامولة!',
            popup_gold: '+{gold} ذهب!',
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> صامولة' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15 د)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> صامولة' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> خزينة' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> توربو 3x (3 د)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1,000 <img src="assets/nut.webp" class="ui-ico"> صامولة' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> مظهر "لوحة الإعلانات"' },
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: 'مظهر "التقويم"' },
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'مرحباً بعودتك!',
            away_time: 'كنت غائباً لمدة: {time}',
            away_prefix: 'كنت غائباً لمدة:',
            limit_label: 'الحد الأقصى: {limit}',
            limit_prefix: 'الحد الأقصى:',
            speaker_earned: 'أنتجه المضخم:',
            newton_earned: 'ضربات البندول:',
            cases_found: 'صناديق عُثر عليها: {count} ق',
            cases_found_prefix: 'صناديق عُثر عليها:',
            total_earned: 'إجمالي الارتفاع المكتسب:',
            double_ad: '▶ مضاعفة بإعلان',
            claim_normal: 'استلام عادي',
            limit_3h: '3 ساعات',
            limit_30m: '30 دقيقة',
            double_btn: '▶ مضاعفة بإعلان (+{meters} م، {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'تم الوصول',
            double_ad: '▶ مضاعفة بإعلان (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: 'استلام عادي (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: 'أسطح المباني', desc: 'فوقك فقط الطيور وتكاليف الإيجار الباهظة. اجتزت أول مئة متر!' },
            { height: 1000, name: 'جبهة العاصفة', desc: 'تمسك جيداً بالدرجات المبتلة. سماء مفتوحة ورعود في انتظارك!' },
            { height: 10000, name: 'الستراتوسفير', desc: 'ارتفاع التحليق. انحناء كوكب الأرض مرئي بوضوح في الأسفل.' },
            { height: 100000, name: 'الفضاء', desc: 'استسلمت الجاذبية. أنت الآن رسمياً في انعدام وزن تام!' },
            { height: 1000000, name: 'درب التبانة', desc: 'مليون متر كاملة. لقد تجاوزت حدود المعقول بمراحل.' },
            { height: 10000000, name: 'الفراغ العظيم', desc: 'حافة الخريطة؟ لا، إنها مجرد بداية اللاشيء المطلق.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: 'الفناء القديم', desc: 'منطقتك المألوفة. غابة خرسانية وصرير درجات خشبية بالية. من هنا يبدأ صعودك اللانهائي.' },
            { id: 1, name: 'أسطح المباني', desc: 'أعلى من هوائيات التلفاز، الحمام، وزحام المدينة. أول مئة متر خلفك، والهواء يزداد نقاءً.' },
            { id: 2, name: 'جبهة العاصفة', desc: 'سحب كثيفة شاهقة، صواعق خاطفة، ورائحة الأوزون النفاذة. الدرجات زلقة—تمسك بقوة!' },
            { id: 3, name: 'الستراتوسفير', desc: 'حافة الغلاف الجوي للأرض. تتلاشى السماء إلى كحلي عميق كاشفة عن انحناء الكوكب الأزرق.' },
            { id: 4, name: 'الفضاء السحيق', desc: 'مدار الأقمار الصناعية الصامتة وفراغ سرمدي. استسلمت الجاذبية—السلم هو طريقك الوحيد للأعلى.' },
            { id: 5, name: 'درب التبانة', desc: 'مجرات لولبية بعيدة، سدم متلألئة، وغبار كوني. مليون متر فوق كل هموم الأرض.' },
            { id: 6, name: 'الفراغ العظيم', desc: 'أفق الحدث عند حافة الكون المعروف. أقصى ارتفاع حيث يذوب الزمن في اللانهاية الكونية.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: 'الفناء القديم',
            roofs: 'أسطح المباني',
            storm_front: 'جبهة العاصفة',
            stratosphere: 'الستراتوسفير',
            open_space: 'الفضاء السحيق',
            milky_way: 'درب التبانة',
            endless: 'الفراغ العظيم',

            checkpoint_0: '0 م — الفناء القديم',
            checkpoint_250: '250 م — أسطح المباني',
            checkpoint_1000: '1,000 م — جبهة العاصفة',
            checkpoint_10000: '10,000 م — الستراتوسفير',
            checkpoint_100000: '100,000 م — الفضاء السحيق',
            checkpoint_1000000: '1,000,000 م — درب التبانة',
            checkpoint_10000000: '10,000,000 م — الفراغ العظيم',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'مُستكشَف',
            signal_lost_badge: 'انقطاع الإشارة',
            unknown_sector: 'قطاع مجهول',
            height_label: 'الارتفاع: {height} م',
            target_label: 'الهدف: {target} م (متبقي {remaining} م)',
            locked_desc: 'ترصد المستشعرات شذوذاً حاداً عند هذا الارتفاع. واصل التسلق لفك تشفير الإشارة.',
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'تحدي الصمود',
            challenge_desc: 'ابقَ في اللعبة لمدة 20 دقيقة للحصول على مظهر ريترو الحصري مجاناً!',
            skin_name: 'مظهر "ريترو"',
            ability_label: '<b style="color: #f1c40f;">القدرة:</b> التقط العملة الطائرة (غنائم: حتى 125 <img src="assets/nut.webp" class="ui-ico-sm"> و15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: 'الوقت المتبقي:',
            challenge_complete: 'اكتمل التحدي!',
            challenge_reward: 'لقد صمدت لمدة 20 دقيقة! ها هي مكافأتك:',
            epic_skin: 'مظهر "ريترو" الملحمي',
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'مكافأة',
            title: 'أضف اللعبة إلى الشاشة الرئيسية وتسلّق بنقرة واحدة!',
            desc: 'اضغط على "إضافة" في النافذة التالية وستكون المكافأة لك',
            reward_label: 'مكافأة التثبيت:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: 'إضافة (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            decline_title: 'هل أنت متأكد من تفويت المكافأة؟',
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> بانتظارك. إضافة الاختصار تستغرق ثانيتين فقط!',
            decline_claim: 'استلام 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'دوري المتسلقين',
            title: 'قاعة المشاهير',
            season_desc: 'تصنيف غزاة الفضاء العالمي',
            tab_alltime: 'كل الأوقات',
            tab_week: 'الموسم (أسبوعي)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">جاري تحميل التصنيف...</div>',
            desc_alltime: 'تصنيف غزاة الفضاء العالمي',
            desc_week: 'يُعاد التعيين كل إثنين الساعة 00:00',
            anon: 'متسلق مجهول',
            you_player: 'أنت (اللاعب)',
            you_vip: '<span>أنت (VIP)</span>',
            you: '<span>أنت</span>',
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'عقد مميز',
            title: 'صفقة اليوم',
            timer_label: 'عقد جديد خلال',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> تحديث ({left}/5)',
            reroll_exhausted: 'نفدت المحاولات (0/5)',
            in_collection: '✔ في مجموعتك',
            buy_btn: 'شراء: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: 'تحتاج {need} إضافية <img src="assets/golden_nut.webp" class="ui-ico-sm"> ← البنك',
            discount_badge: '{rarity} • خصم {percent}-%',
            unique_ladder: 'سلم فريد',
            luck_desc: '+{luck} للحظ الإجمالي',
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'الإعدادات',
            language: '🌐 اللغة',
            music: 'الموسيقى والأجواء',
            tap_sounds: 'أصوات النقر',
            speaker_bass: 'جهير المضخم',
            newton_hit: 'اصطدام البندول',
            rewards_sfx: 'المؤثرات والمكافآت',
            vibration: 'الاهتزاز التفاعلي',
            support_btn: 'الدعم / المجتمع',
            support_alert: 'مجتمع اللعبة والدعم: t.me/your_game_group',
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'حظك',
            total_label: 'الإحصائية الإجمالية',
            influence_title: 'كيف يؤثر الحظ على اللعب:',
            influence_cases: 'يزيد معدل سقوط الصناديق العشوائية أثناء النقر.',
            influence_nuts: 'يزيد كمية الصواميل الموجودة داخل الصناديق.',
            influence_rarity: 'يرفع فرص الحصول على مظاهر ملحمية وأسطورية.',
            breakdown_title: 'تفاصيل الإحصائيات:',
            talismans_title: 'مجموعة التمائم:',
            buff_label: 'الحظ',
            plus_luck: '+{value} حظ',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">مُجهّز</div>',
            equip_btn: 'تجهيز',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> مقفل</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> سلم "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> تميمة "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 خانة سايبر "{name}": <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 معزز الإعلانات (علامة الحظ): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>لا توجد معززات حظ نشطة.</div>',
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'تمت إضافة الذهب!',
            default_desc: 'شكراً للعبك معنا!',
            vip_badge: 'تم تفعيل رتبة VIP',
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'حزمة البداية!',
                desc: 'جبل من الصناديق، الصواميل، تجربة بدون إعلانات ومظهر "سايبر" أصبحت ملكك! شكراً لدعمك <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'كسبت ذهباً!',
                desc: 'حصلت على <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> لمشاهدة إعلان!',
            },
            adfree: {
                title: 'بدون إعلانات!',
                desc: 'تمت إزالة الإعلانات الإجبارية للأبد! شكراً لدعمك لعبتنا ❤️',
            },
            gold_credited: {
                title: 'تمت إضافة الذهب!',
                desc: 'تمت إضافة +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> إلى رصيدك. شكراً لدعمك ❤️! استمتع بالتسلق!',
            },
            shortcut_reward: {
                title: 'مكافأة ذهبية!',
                desc: 'تمت إضافة +100 <img src="assets/golden_nut.webp" class="ui-ico"> إلى رصيدك!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">شكراً للعبك معنا! ❤️</span>',
            },
            deal: {
                buy_btn: 'شراء: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'تم فتح حزمة البداية!',
            sponsor: '📺 الراعي: +{nuts} 🔩 و +{gold} 🟡!',
            turbo_boost: 'تعزيز توربو 3x ({seconds} ث)!',
            luck_boost: 'حظ +{value}!',
            frenzy: 'مطر الصواميل!',
            autotap: 'طيار آلي (15 نقرة/ث)!',
            turbo_income: 'تعزيز توربو 3x!',
            luck_15: 'حظ +15!',
            ufo_case: '+1 صندوق!',
            ufo_safe: '+1 خزينة!',
            billiard_crit: '🎱 2.5x! +{nuts} 🔩',
            planet_turbo: '🌍 توربو 3x (20 ث)!',
            planet_luck: '🌍 حظ +15 (60 ث)!',
            planet_frenzy: '🌍 مطر الصواميل (15 ث)!',
            hawking: '💥 إشعاع هوكينغ: +100,000 م!',
            storm_discharge: 'تفريغ صعق (10x)!',
            absolute_unlocked: 'تم فتح السلم المطلق!',
            legendary_skin: '👑 مظهر أسطوري: {name}!',
            retro_coin: '+{nuts} صامولة، +{gold}!',
            banana_double: '🍌 نقرة مضاعفة 2x!',
            combo: '🔥 {mult}x ({cps} نقرة/ث)',
            case_drop: '+1 صندوق!',
            golden_case_milky: 'صندوق ذهبي (درب التبانة)!',
            golden_case: 'صندوق ذهبي!',
            safe_milky: 'خزينة (درب التبانة)!',
            safe_luck: 'خزينة (حظ)!',
            iron_safe: 'خزينة حديدية!',
            rusty_nut: '+100',
            rusty_box: '+1 صندوق!',
            rusty_safe: '+1 خزينة!',
            marble_double: '+{value} (2x)',
            jackpot: 'الجائزة الكبرى: +1!',
            timed_box: 'تم استلام صندوق مجاني!',
            crystal_gold: '+{value} (كريستال)!',
            shop_spent: '-{cost} م',
            streak_dupe: 'مكرر: +{value}!',
            streak_billboard: '🎉 تم فتح مظهر لوحة الإعلانات!',
            calendar_day: 'تم استلام اليوم {day}!',
            calendar_skin: 'تم فتح مظهر التقويم!',
            calendar_bonus: '+{cases} صناديق ذهبية!',
            timewarp_report: '+{meters} م',
            timewarp_nuts: '+{nuts} صامولة',
            timewarp_gold: '+{gold} ذهب',
            magnet_ufo: 'مغناطيس الفضائيين!',
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'خشبي' },
            banana: { name: 'الموز' },
            beer: { name: 'صندوق مشروبات' },
            fire: { name: 'ناري' },
            fireman: { name: 'طوارئ الحريق' },
            plastic: { name: 'بلاستيكي' },
            rusty: { name: 'صدئ' },
            tape: { name: 'شريط لاصق' },
            // === RARE ===
            book: { name: 'كومة كتب' },
            cactus: { name: 'صبار' },
            cement: { name: 'خرساني' },
            neon: { name: 'نيون' },
            scratch: { name: 'عمود الخدش' },
            new_year: { name: 'الأعياد' },
            // === EPIC ===
            add_stair: { name: 'لوحة إعلانات' },
            bone: { name: 'عظمي' },
            crystal: { name: 'بلوري' },
            cyber: { name: 'سايبربانك' },
            golden: { name: 'ذهبي' },
            goth: { name: 'قوطي' },
            ice: { name: 'جليدي' },
            vine: { name: 'أغصان اللبلاب' },
            calendar_stair: { name: 'التقويم' },
            // === LEGENDARY ===
            marble: { name: 'رخامي ذهبي' },
            quant: { name: 'كمّي' },
            ufo: { name: 'الصحن الطائر' },
            mimic: { name: 'ميميك' },
            // === SPECIAL ===
            retro: { name: 'ريترو' },
            storm: { name: 'جبهة العاصفة' },
            strato: { name: 'الستراتوسفير' },
            cosmo: { name: 'الفضاء السحيق' },
            milkyway: { name: 'درب التبانة' },
            endless: { name: 'التفرد الكوني' },
            absolute: { name: 'المُطلق' },
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'البداية الكلاسيكية. تفوح منها رائحة انطلاق رحلة لا نهائية.',
            banana: 'يضاعف كل خامس نقرة.',
            beer: '5+ لإحصائية الحظ.',
            fire: '+7 م لكل نقرة، و10- نقرات مطلوبة للصندوق.',
            fireman: 'بندول نيوتن: +15 م لكل ضربة.',
            plastic: 'بندول نيوتن يتأرجح أسرع بـ 0.15 ث.',
            rusty: 'فرصة 65% للعثور على <img src="assets/nut.webp" class="ui-ico"> مع كل نقرة.',
            tape: 'خصم 10% في السوق السوداء.',
            book: '7+ لإحصائية الحظ.',
            cactus: 'مضخم الصوت: +20 م/ث. بندول نيوتن: +10 م لكل ضربة.',
            cement: 'بندول نيوتن: +50% قوة، لكن الضربات أبطأ بـ 0.3 ث.',
            neon: 'إعادة تدوير مجانية عند فتح أي صندوق.',
            scratch: 'عند 5+ نقرات/ث، يتضاعف ارتفاع النقرة 1.5x.',
            new_year: 'هدية إضافية كل 150-250 نقرة.',
            bone: 'يضاعف كل نقرة.',
            crystal: 'كل صندوق يُفتح يمنحك +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'يفتح خانة إضافية للعتاد.',
            golden: 'ملء شريط النقر يمنحك خزينة حديدية بدلاً من الصندوق.',
            goth: 'خصم 20% على الترقيات والصناديق المشتراة بالصواميل.',
            ice: 'تسلق انزلاقي: يسمح بالنقر بالتمرير السريع عبر السلم.',
            vine: 'يزيد قوة النقر، والمضخم، والبندول بنسبة +40%.',
            add_stair: 'تدوم المعززات 50% أطول؛ وكل إعلان تشاهده يمنح 20 <img src="assets/nut.webp" class="ui-ico"> و3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 للحظ؛ وفرصة إضافية لمظاهر أسطورية من الخزائن.',
            marble: 'فرصة 25% للحصول على صندوق ذهبي عند إكمال شريط النقر.',
            quant: 'انشطار المادة: تتحول 20% من الصواميل إلى ذهبية، و50- نقرة للصندوق.',
            ufo: 'يجذب كبسولة غنائم فضائية كل 30 ثانية.',
            mimic: 'المحاكاة: ينسخ القدرات السلبية لسلمين تختارهما.',
            retro: 'التقط العملة الطائرة (غنائم: حتى 125 <img src="assets/nut.webp" class="ui-ico"> و15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 م لكل نقرة، لكن باحتمال 5% لتعثر النقرة.',
            strato: 'هواء خفيف: يعزز سرعة المضخم والبندول بنسبة 40%.',
            cosmo: 'يزيد الحد الأقصى لجمع الموارد أثناء الغياب إلى 3 ساعات.',
            milkyway: 'تعزيز القصور الذاتي: فرصة 25% لترقية مستوى أي صندوق يسقط بمقدار +1.',
            endless: 'يزيد كسب الارتفاع بمقدار +50% كل دقيقة (حتى 1,000%+). تغيير السلم يعيد ضبط المكافأة.',
            absolute: 'ذروة التطور: يمنح مزايا جميع السلالم السلبية في وقت واحد.',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'مكبر صوت كلاسيكي' },
            monster: { name: 'مكبرات الحفلات' },
            cyber: { name: 'مكبر سايبر' },
            cool: { name: 'مضخم فائق' },
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'نبضات المضخم الأساسية (القوة x1)',
            monster: '+20% لقوة المضخم. اختصار دقيقتين من وقت انتظار الصندوق المجاني.',
            cyber: '+40% لقوة المضخم. اكسب 25% أكثر من <img src="assets/nut.webp" class="ui-ico"> و<img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: 'مضاعفة قوة المضخم 2x. كل ثالث نبضة تمنحك +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'الجهير: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'كرات فولاذية' },
            billiard: { name: 'الكرة رقم 8' },
            plasma: { name: 'كرة البلازما' },
            planet: { name: 'الأرض المصغرة' },
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'ضربة بندول نيوتن الأساسية (الضرر x1)',
            billiard: '+25% لضرر البندول. كل ثامن ضربة تمنح 2.5x ارتفاع و3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% لضرر البندول. كهرباء نشطة: عند 6+ نقرات/ث يتضاعف ارتفاع النقرة. بعد 5 ث غياب — 10 نقرات تلقائية.',
            planet: 'مضاعفة ضرر البندول 2x، و+3 نقرات للصندوق لكل ضربة. +100% لكل المصادر لكل معزز نشط. فرصة 1% عند كل ضربة لتفعيل تعزيز عشوائي.',
            fallback: 'الضربة: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'نبتة نفل رباعية' },
            horseshoe: { name: 'حدوة ذهبية' },
            paw: { name: 'قدم الأرنب' },
            coin: { name: 'عملة أثرية' },
            star: { name: 'نجمة الحظ' },
            key: { name: 'المفتاح الرئيسي' },
            sock: { name: 'جورب الحظ' },
            sock_alert: '🎉 مذهل! لقد جمعت كل التمائم وفتحت الجورب السري (+50 حظ)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'شائع',
            rare: 'نادر',
            epic: 'ملحمي',
            legendary: 'أسطوري',
            special: 'خاص',
        },
    },

    // Bahasa Indonesia (Indonesian) 8
    id: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder',
            version: 'Space Stepladder v1.0.0',
            height_display: '{height} m',
            height_short: '{height} m',
        },
        assets: {
            top_btn: 'assets/top_en.webp',
            starter_banner: 'assets/starter_pack_en.webp',
            bank_banner: 'assets/bank_window2_en.webp',
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/tap',
            meters_per_sec: '{value} m/dtk',
            meters_per_hit: '{value} m/pukul',
            level: 'Lv. {level}',
            seconds_short: '{value}dtk',
            meters: '{value} m',
            meters_plus: '+{value} m',
            pieces: '{count} bh',
            min_sec: '{min}m {sec}dtk',
            meters_per_click_short: 'm/tap',
            meters_per_sec_short: 'm/dtk',
            meters_per_hit_short: 'm/pukul',
            level_short: 'Lv.',
            meters_unit: 'm',
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Dapatkan Mur Emas',
            donate_btn: 'Bank',
            deal_btn: 'Promo',
            top_btn_aria: 'Peringkat',
            zen_title: 'Mode Zen (Sembunyikan UI)',
            rewards_btn: 'Hadiah',
            rewards_count: '{current}/10',
            buffs_btn: 'BUFF',

            // --- Bottom Navigation ---
            shop_btn: 'TOKO',
            skins_btn: 'Skin',
            cases_btn_label: 'Peti:',
            free_box_label: 'Gratis:',

            // --- Action Buttons ---
            close_btn: '✕',
            close_aria: 'Tutup',
            cancel_btn: 'Batal',
            buy_btn: 'Beli',
            claim_btn: 'Klaim',
            equip_btn: 'Pakai',
            equipped_badge: 'DIPAKAI',
            later_btn: 'Nanti',
            not_now_btn: 'Nanti saja',
            excellent_btn: 'MANTAP!',
            forward_btn: 'KE PUNCAK!',
            claim_and_equip_btn: 'KLAIM & PAKAI',
            just_claim_btn: 'Klaim saja',
            selected_btn: 'DIPILIH',
            buy_for: 'BELI {price} {currency}',
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Pasar Gelap',
            buy_label: 'BELI',
            click_title: 'DAYA TAP',
            speaker_title: 'SUBWOOFER',
            newton_title: 'AYUNAN NEWTON',
            cost_suffix: '{cost} m',
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ PENGUAT',
            ad_btn: 'Tonton Iklan',

            fortune_name: 'HOKI',
            fortune_desc: '+15 stat Keberuntungan',
            turbo_name: 'PANJAT TURBO',
            turbo_desc: 'Kecepatan panjat x3 lipat',
            frenzy_name: 'HUJAN MUR',
            frenzy_desc: 'Mur berjatuhan di setiap tap',
            autotap_name: 'AUTOPILOT',
            autotap_desc: 'Auto-tap tangga 15 kali/dtk',
            timewarp_name: 'MESIN WAKTU',
            timewarp_desc: 'Dapat instan hasil idle 5 mnt',
            timewarp_instant: 'Instan',
            ufo_name: 'MAGNET UFO',
            ufo_desc: 'Tarik pod suplai penuh sumber daya',
            ufo_summon: 'Panggil',
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Inventaris',
            tab_ladders: 'Tangga',
            tab_speakers: 'Speaker',
            tab_newton: 'Bandul',
            tab_talismans: 'Jimat',
            available_skins: 'Skin Tersedia:',
            no_effects: 'Tanpa efek bonus',
            default_ladder_desc: 'Parameter tangga standar',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Efek',
            equipped_btn: 'DIPAKAI',
            unequip_btn: 'LEPAS',
            equip_btn: 'Pakai',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Berurutan',
            fully_equipped: '✔ SUDAH LENGKAP',
            equip_all: 'PAKAI KEDUA',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin Aktif ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Hanya skin',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Efek Aktif ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Hanya efek',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Terkunci',
            mimic_setup: '⚙️ Atur Slot ({slot0}, {slot1})',
            cyber_setup: '🦾 Atur Slot Ekstra',
            item_fallback: 'Item',
            luck_plus: '+{luck} Hoki',
            slot_empty: 'Kosong',
            slot_default: 'Statistik standar',
            slot_1_selected: '✔ Slot 1',
            slot_2_selected: '✔ Slot 2',
            select_action: '+ Pilih',
            cyber_installed: '✔ Terpasang',
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Kustomisasi',
            base_level: 'Level Dasar: {level}',
            base_level_prefix: 'Level Dasar:',
            power: 'Daya: {value}',
            power_mps: 'Daya: {value} m/dtk',
            upgrade_btn: 'Tingkatkan',
            speakers_title: '📻 Subwoofer',
            newton_title: '⚪ Ayunan Newton',
            hit_power: 'Pukul: {power} m (tiap {speed}dtk)',
            upgrade_cost: 'Tingkatkan: {cost} m',
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Slot Cyberpunk',
            desc: 'Pilih 1 efek pasif ekstra dari item terbuka (Speaker, Bandul, atau Jimat):',
            tab_speakers: 'Speaker',
            tab_newton: 'Bandul',
            tab_talismans: 'Jimat',
            install_btn: 'Pasang Implan',
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Kemampuan Mimik',
            desc: 'Pilih 2 tangga terbuka untuk menyalin kemampuan pasifnya:',
            slot1: 'Slot 1',
            slot2: 'Slot 2',
            apply_btn: 'Terapkan Skill',
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Konfirmasi',
            desc: 'Gunakan emas?',
            buy_btn: 'Beli ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: 'Beli',
            buff_title: 'Aktifkan Penguat',
            buff_desc: 'Gunakan {cost} <img src="assets/golden_nut.webp" class="ui-ico"> untuk aktifkan penguat?',
            not_enough_gold: 'Mur Emas tidak cukup',
            gear_title: 'Buka Skin Item',
            gear_desc: 'Beli "{name}" seharga {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            talisman_title: 'Jimat Keberuntungan',
            talisman_desc: 'Beli jimat "{name}" seharga {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            deal_title: 'Promo Harian',
            deal_desc: 'Beli "{name}" seharga {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            item_title: 'Beli Item',
            item_desc: 'Beli "{name}" seharga {price}?',
            ufo_desc: 'Gunakan 39 <img src="assets/golden_nut.webp" class="ui-ico"> untuk panggil UFO?',
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'BRANKAS',
            title: 'BANK EMAS',
            vip_note: 'Pembelian apa pun membuka status permanen <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> di peringkat!',
            free_gold_title: 'Emas Gratis',
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> per iklan',
            free_gold_btn: 'Klaim',
            hit_badge: '🔥 TERLARIS',
            adfree_title: 'Bebas Iklan + VIP',
            adfree_desc: 'Hapus semua iklan paksa selamanya!',
            pack_handful: 'Segenggam Mur',
            pack_pouch: 'Sekantong Mur',
            pack_pouch_tag: 'Cukup 1 Peti',
            pack_crate: 'Sekotak Mur',
            pack_safe: 'Brankas Sultan',
            pack_safe_tag: 'NILAI +40%',
            purchased: 'Dibeli',
            price_99: '99 Yan',
            price_249: '249 Yan',
            price_590: '590 Yan',
            price_1390: '1.390 Yan',
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 UNTUNG 50x',
            timer_text: 'Promo berakhir dalam:',
            golden_nuts: 'Mur Emas',
            regular_nuts: 'Mur Standar',
            wooden_boxes: 'Peti Kayu',
            iron_safes: 'Brankas Besi',
            golden_cases: 'Peti Emas',
            cyber_speaker: '"Cyber"',
            cyber_speaker_sub: 'Speaker (Epik)',
            no_ads: 'BEBAS IKLAN',
            no_ads_sub: 'Hapus iklan paksa selamanya',
            vip_status: 'STATUS VIP',
            vip_status_sub: 'Bingkai emas permanen di TOP',
            claim_btn: 'AMBIL SEMUA <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yan</s> 39 Yan',
            timer_badge: '39 Yan',
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Mur',
            badge: 'SIMPANAN',
            title: 'RUANG PETI',
            safe_tile: 'Brankas',
            bonus_label: 'Bonus Peti',
            bonus_gold: '+15 Mur Emas',
            wooden_name: 'Peti Kayu',
            iron_name: 'Brankas Besi',
            gold_name: 'Peti Emas',
            nut_loot_50: '50 Mur',
            nut_loot_150: '150 Mur',
            nut_loot_300: '300 Mur',
            open_btn: 'Buka',
            buy_more_title: 'Beli lagi',
            open_all_title: 'Buka semua',
            in_game: 'Mainkan',
            buy_price: 'Beli {price} <img src="{icon}" class="ui-ico-sm">',
            buy_multi_title: 'Beli banyak',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Klaim',
            ready: 'SIAP!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> PETI!',
            box_label: 'Peti: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Pilih jumlah:',
            total: 'Total:',
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: 'MEMBUKA {count} PETI',
            claim_all: 'Ambil Semua',
            open_more: 'Buka ×10 lagi',
            open_more_count: 'Buka ×{count} lagi',
            new_count: '<span style="color:#2ecc71;">Baru: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">Baru: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ BARU!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Duplikat (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Membuka peti...',
            opening_title: 'Membuka: {name}',
            again_btn: 'Lagi',
            again_count: 'Lagi ({count})',
            batch_btn: '×10',
            skip_btn: 'Lewati ⏩',
            close_btn: 'Tutup',
            reroll_btn: '📺 Reroll dg Iklan',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Reroll (Neon)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Reroll dg Iklan',
            duplicate: 'Duplikat → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Deskripsi efek',
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Hadiah Harian',
            subtitle: 'Masuk tiap hari! Dapatkan skin tangga eksklusif di Hari ke-7.',
            missed_alert: '⚠️ Kamu melewatkan satu hari!',
            restore_streak: 'Pulihkan Streak',
            reset_day1: 'Hari 1',
            day7_title: 'Hari 7: Hadiah Super',
            day7_desc: 'Skin "Kalender" (Epik)',
            double_ad: '▶ Ganda dg Iklan (x2)',
            claim_normal: 'Klaim biasa',
            day_badge: 'Hari {day}',
            day7_title_loop: 'Hari 7: Hadiah Utama',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Peti Emas',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">HARI INI!</span>',
            double_claim_loop: '▶ Ganda dg Iklan (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: 'Klaim biasa (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: 'Klaim Skin "Kalender"!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ DIKLAIM</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Hari 7</span>',
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Streak Iklan',
            reset_timer: 'Direset dalam:',
            footer: 'Semua iklan yang ditonton dalam game akan dihitung.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Diklaim</span>',
            claim_btn: 'Klaim',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} iklan</span>',
            popup_safe: '+1 Brankas!',
            popup_nuts: '+600 Mur!',
            popup_gold: '+{gold} Emas!',
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Mur' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Mur' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Brankas' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3m)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> Mur' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Skin "Baliho"' },
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: 'Skin "Kalender"' },
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Selamat Datang!',
            away_time: 'Kamu pergi selama: {time}',
            away_prefix: 'Kamu pergi selama:',
            limit_label: 'Batas: {limit}',
            limit_prefix: 'Batas:',
            speaker_earned: 'Hasil Speaker:',
            newton_earned: 'Hasil Bandul:',
            cases_found: 'Peti ditemukan: {count} bh',
            cases_found_prefix: 'Peti ditemukan:',
            total_earned: 'Total Ketinggian Didapat:',
            double_ad: '▶ Ganda dg Iklan',
            claim_normal: 'Klaim biasa',
            limit_3h: '3 jam',
            limit_30m: '30 mnt',
            double_btn: '▶ Ganda dg Iklan (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'TERCAPAI',
            double_ad: '▶ Ganda dg Iklan (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: 'Klaim biasa (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: 'Atap Gedung', desc: 'Hanya burung dan sewa mahal di atasmu. Ratusan meter pertama terlewati!' },
            { height: 1000, name: 'Pusaran Badai', desc: 'Pegang erat anak tangga basah ini. Langit luas dan petir menanti!' },
            { height: 10000, name: 'Stratosfer', desc: 'Ketinggian jelajah. Lengkungan Bumi terlihat jelas di bawah sana.' },
            { height: 100000, name: 'Luar Angkasa', desc: 'Gravitasi menyerah. Kamu resmi melayang tanpa bobot!' },
            { height: 1000000, name: 'Bima Sakti', desc: 'Satu juta meter. Kamu telah menjelajah melampaui batas akal sehat.' },
            { height: 10000000, name: 'Kehampaan Mutlak', desc: 'Ujung peta? Bukan, ini baru awal dari kehampaan abadi.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: 'Pelataran Lama', desc: 'Wilayah asalmu. Hutan beton dan derit kayu usang. Dari sinilah pendakian tanpa akhirmu bermula.' },
            { id: 1, name: 'Atap Gedung', desc: 'Lebih tinggi dari antena TV, merpati, dan bising kota. Ratusan meter terlampaui, udara kian dingin.' },
            { id: 2, name: 'Pusaran Badai', desc: 'Gumpalan awan tebal, kilatan petir menyilaukan, dan aroma tajam ozon. Tangga licin—pegang erat-erat!' },
            { id: 3, name: 'Stratosfer', desc: 'Batas atmosfer Bumi. Langit memudar jadi biru tua pekat, menampakkan lengkungan biru bola dunia.' },
            { id: 4, name: 'Luar Angkasa', desc: 'Orbit satelit sunyi dan kehampaan abadi. Gravitasi sirna—tangga adalah satu-satunya jalan ke atas.' },
            { id: 5, name: 'Bima Sakti', desc: 'Spiral galaksi jauh, nebula berkilau, dan debu kosmik. Sejuta meter di atas persoalan duniawi.' },
            { id: 6, name: 'Kehampaan Mutlak', desc: 'Cakrawala peristiwa di batas alam semesta terjamah. Ketinggian pamungkas tempat waktu larut dalam keabadian.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: 'Pelataran Lama',
            roofs: 'Atap Gedung',
            storm_front: 'Pusaran Badai',
            stratosphere: 'Stratosfer',
            open_space: 'Luar Angkasa',
            milky_way: 'Bima Sakti',
            endless: 'Kehampaan Mutlak',

            checkpoint_0: '0 m — Pelataran Lama',
            checkpoint_250: '250 m — Atap Gedung',
            checkpoint_1000: '1.000 m — Pusaran Badai',
            checkpoint_10000: '10.000 m — Stratosfer',
            checkpoint_100000: '100.000 m — Luar Angkasa',
            checkpoint_1000000: '1.000.000 m — Bima Sakti',
            checkpoint_10000000: '10.000.000 m — Kehampaan Mutlak',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'TERJELAJAH',
            signal_lost_badge: 'SINYAL HILANG',
            unknown_sector: 'Sektor Misterius',
            height_label: 'Ketinggian: {height} m',
            target_label: 'Target: {target} m (sisa {remaining} m)',
            locked_desc: 'Sensor mendeteksi anomali kuat di ketinggian ini. Teruslah memanjat untuk menguraikan sinyal data.',
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Ujian Ketahanan',
            challenge_desc: 'Bertahanlah di game selama 20 menit untuk mengklaim skin Retro eksklusif gratis!',
            skin_name: 'Skin "Retro"',
            ability_label: '<b style="color: #f1c40f;">Kemampuan:</b> Tangkap koin terbang (hadiah: hingga 125 <img src="assets/nut.webp" class="ui-ico-sm"> dan 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: 'Waktu tersisa:',
            challenge_complete: 'UJIAN SELESAI!',
            challenge_reward: 'Kamu bertahan 20 menit! Ini hadiahmu:',
            epic_skin: 'SKIN EPIK "RETRO"',
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS',
            title: 'Pasang game ke layar utama dan panjat hanya dalam satu tap!',
            desc: 'Tekan "Tambah" di jendela berikutnya dan hadiah langsung jadi milikmu',
            reward_label: 'Hadiah instal:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: 'TAMBAH (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            decline_title: 'Yakin tidak ingin hadiahnya?',
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> menantimu. Menambahkan ikon hanya butuh dua detik!',
            decline_claim: 'Klaim 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'LIGA PEMANJAT',
            title: 'AULA KETENARAN',
            season_desc: 'Peringkat penakluk antariksa global',
            tab_alltime: 'Semua Waktu',
            tab_week: 'Musim (Mingguan)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Memuat peringkat...</div>',
            desc_alltime: 'Peringkat penakluk antariksa global',
            desc_week: 'Direset setiap Senin pukul 00:00',
            anon: 'Pemanjat Anonim',
            you_player: 'Kamu (Pemain)',
            you_vip: '<span>Kamu (VIP)</span>',
            you: '<span>Kamu</span>',
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'KONTRAK PANAS',
            title: 'PROMO HARI INI',
            timer_label: 'Kontrak baru dalam',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Segarkan ({left}/5)',
            reroll_exhausted: 'Kesempatan habis (0/5)',
            in_collection: '✔ SUDAH PUNYA',
            buy_btn: 'BELI: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: 'Kurang {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Bank',
            discount_badge: '{rarity} • DISKON -{percent}%',
            unique_ladder: 'Tangga Unik',
            luck_desc: '+{luck} ke Hoki keseluruhan',
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'PENGATURAN',
            language: '🌐 Bahasa',
            music: 'Musik & Suasana',
            tap_sounds: 'Suara Tap',
            speaker_bass: 'Bass Subwoofer',
            newton_hit: 'Denturan Bandul',
            rewards_sfx: 'Hadiah & SFX',
            vibration: 'Getaran',
            support_btn: 'Bantuan / Komunitas',
            support_alert: 'Komunitas game & bantuan: t.me/your_game_group',
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Keberuntunganmu',
            total_label: 'Total Hoki',
            influence_title: 'Pengaruh Hoki pada game:',
            influence_cases: 'Meningkatkan peluang drop peti saat mengetap.',
            influence_nuts: 'Meningkatkan jumlah mur yang didapat dari peti.',
            influence_rarity: 'Memperbesar peluang dapat skin Epik & Legendaris.',
            breakdown_title: 'Rincian Stat:',
            talismans_title: 'Koleksi Jimat:',
            buff_label: 'Hoki',
            plus_luck: '+{value} Hoki',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">DIPAKAI</div>',
            equip_btn: 'Pakai',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Terkunci</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Tangga "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Jimat "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 Slot Cyber "{name}": <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 Boost Iklan (Tanda Hoki): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>Tidak ada penguat hoki aktif.</div>',
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'EMAS DITERIMA!',
            default_desc: 'Terima kasih telah bermain bersama kami!',
            vip_badge: 'STATUS VIP DIAKTIFKAN',
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'PAKET PEMULA!',
                desc: 'Banjir peti, mur, bebas iklan, dan skin "Cyber" kini milikmu! Terima kasih atas dukunganmu <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'EMAS DIPEROLEH!',
                desc: 'Kamu mendapat <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> karena menonton iklan!',
            },
            adfree: {
                title: 'BEBAS IKLAN!',
                desc: 'Iklan paksa dihapus selamanya! Terima kasih telah mendukung game kami ❤️',
            },
            gold_credited: {
                title: 'EMAS DITERIMA!',
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> ditambahkan ke saldo. Terima kasih atas dukunganmu ❤️! Selamat memanjat!',
            },
            shortcut_reward: {
                title: 'HADIAH EMAS!',
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> masuk ke saldomu!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Terima kasih sudah bermain! ❤️</span>',
            },
            deal: {
                buy_btn: 'BELI: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'PAKET PEMULA TERBUKA!',
            sponsor: '📺 Sponsor: +{nuts} 🔩 & +{gold} 🟡!',
            turbo_boost: 'TURBO BOOST 3x ({seconds}dtk)!',
            luck_boost: 'HOKI +{value}!',
            frenzy: 'HUJAN MUR!',
            autotap: 'AUTOPILOT (15 tap/dtk)!',
            turbo_income: 'TURBO BOOST 3x!',
            luck_15: 'HOKI +15!',
            ufo_case: '+1 PETI!',
            ufo_safe: '+1 BRANKAS!',
            billiard_crit: '🎱 2.5x! +{nuts} 🔩',
            planet_turbo: '🌍 TURBO 3x (20dtk)!',
            planet_luck: '🌍 HOKI +15 (60dtk)!',
            planet_frenzy: '🌍 HUJAN MUR (15dtk)!',
            hawking: '💥 RADIASI HAWKING: +100.000 m!',
            storm_discharge: 'SENGATAN (10x)!',
            absolute_unlocked: 'MUTLAK TERBUKA!',
            legendary_skin: '👑 SKIN LEGENDA: {name}!',
            retro_coin: '+{nuts} mur, +{gold}!',
            banana_double: '🍌 2x TAP!',
            combo: '🔥 {mult}x ({cps} CPS)',
            case_drop: '+1 PETI!',
            golden_case_milky: 'PETI EMAS (BIMA SAKTI)!',
            golden_case: 'PETI EMAS!',
            safe_milky: 'BRANKAS (BIMA SAKTI)!',
            safe_luck: 'BRANKAS (HOKI)!',
            iron_safe: 'BRANKAS BESI!',
            rusty_nut: '+100',
            rusty_box: '+1 PETI!',
            rusty_safe: '+1 BRANKAS!',
            marble_double: '+{value} (2x)',
            jackpot: 'JACKPOT: +1!',
            timed_box: '+1 PETI DIKLAIM!',
            crystal_gold: '+{value} (Kristal)!',
            shop_spent: '-{cost} m',
            streak_dupe: 'Duplikat: +{value}!',
            streak_billboard: '🎉 SKIN BALIHO TERBUKA!',
            calendar_day: 'Hari {day} diklaim!',
            calendar_skin: 'SKIN KALENDER TERBUKA!',
            calendar_bonus: '+{cases} Peti Emas!',
            timewarp_report: '+{meters} m',
            timewarp_nuts: '+{nuts} mur',
            timewarp_gold: '+{gold} emas',
            magnet_ufo: 'MAGNET UFO!',
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Kayu' },
            banana: { name: 'Pisang' },
            beer: { name: 'Peti Bir' },
            fire: { name: 'Membara' },
            fireman: { name: 'Tangga Damkar' },
            plastic: { name: 'Plastik' },
            rusty: { name: 'Berkarat' },
            tape: { name: 'Lakban' },
            // === RARE ===
            book: { name: 'Tumpukan Buku' },
            cactus: { name: 'Kaktus' },
            cement: { name: 'Beton' },
            neon: { name: 'Neon' },
            scratch: { name: 'Garukan Kucing' },
            new_year: { name: 'Liburan' },
            // === EPIC ===
            add_stair: { name: 'Baliho' },
            bone: { name: 'Tulang' },
            crystal: { name: 'Kristal' },
            cyber: { name: 'Cyberpunk' },
            golden: { name: 'Emas Murni' },
            goth: { name: 'Gotik' },
            ice: { name: 'Es Abadi' },
            vine: { name: 'Sulur Liar' },
            calendar_stair: { name: 'Kalender' },
            // === LEGENDARY ===
            marble: { name: 'Marmer Emas' },
            quant: { name: 'Kuantum' },
            ufo: { name: 'UFO' },
            mimic: { name: 'Mimik' },
            // === SPECIAL ===
            retro: { name: 'Retro' },
            storm: { name: 'Pusaran Badai' },
            strato: { name: 'Stratosfer' },
            cosmo: { name: 'Luar Angkasa' },
            milkyway: { name: 'Bima Sakti' },
            endless: { name: 'Singularitas' },
            absolute: { name: 'MUTLAK' },
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Klasik pemula. Aroma langkah awal dari petualangan tanpa akhir.',
            banana: 'Menggandakan hasil setiap tap ke-5.',
            beer: '+5 stat Keberuntungan.',
            fire: '+7 m per tap, butuh -10 tap lebih sedikit untuk peti.',
            fireman: 'Ayunan Newton: +15 m per pukulan',
            plastic: 'Ayunan Newton bergerak 0.15dtk lebih cepat',
            rusty: 'Peluang 65% menemukan <img src="assets/nut.webp" class="ui-ico"> di setiap tap.',
            tape: 'Diskon 10% di Pasar Gelap.',
            book: '+7 stat Keberuntungan.',
            cactus: 'Subwoofer: +20 m/dtk. Ayunan Newton: +10 m per pukulan',
            cement: 'Ayunan Newton: +50% daya, tetapi ayunan 0.3dtk lebih lambat.',
            neon: 'Gratis reroll setiap membuka peti',
            scratch: 'Pada kecepatan 5+ tap/dtk, hasil tap berlipat 1.5x',
            new_year: 'Hadiah bonus setiap 150-250 tap.',
            bone: 'Menggandakan setiap tap',
            crystal: 'Tiap peti terbuka memberi +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Membuka slot aksesori tambahan.',
            golden: 'Bar tap penuh memberi Brankas Besi alih-alih peti biasa',
            goth: 'Diskon 20% peningkatan dan peti yang dibeli dengan mur',
            ice: 'Panjatan licin: memungkinkan usap layar (swipe) untuk mengetap',
            vine: 'Meningkatkan daya tap, Subwoofer, dan Bandul sebesar +40%.',
            add_stair: 'Penguat bertahan 50% lebih lama; tiap nonton iklan dapat 20 <img src="assets/nut.webp" class="ui-ico"> dan 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 Hoki; bonus peluang skin Legendaris dari brankas.',
            marble: 'Peluang 25% dapat Peti Emas saat bar tap penuh.',
            quant: 'Fisi materi: 20% mur menjadi emas, -50 tap untuk peti.',
            ufo: 'Menarik pod alien setiap 30 detik',
            mimic: 'Mimikri: meniru kemampuan pasif dari 2 tangga pilihan.',
            retro: 'Tangkap koin terbang (hadiah: hingga 125 <img src="assets/nut.webp" class="ui-ico"> dan 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m per tap, tapi 5% peluang luput saat diklik.',
            strato: 'Udara tipis: tingkatkan kecepatan Subwoofer dan Bandul 40%.',
            cosmo: 'Batas akumulasi sumber daya saat offline naik jadi 3 jam.',
            milkyway: 'Dorongan inersia. Peluang 25% menaikkan tier peti jatuh +1 tingkat.',
            endless: 'Ketinggian naik +50% tiap menit (maks +1.000%). Mengganti tangga mereset bonus.',
            absolute: 'Puncak evolusi: nikmati semua efek pasif tangga sekaligus',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Speaker Vintage' },
            monster: { name: 'Monster Stack' },
            cyber: { name: 'Speaker Cyber' },
            cool: { name: 'Subwoofer Sultan' },
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Ketukan dasar Subwoofer (Daya x1)',
            monster: '+20% daya Subwoofer. Cooldown peti gratis berkurang 2 menit.',
            cyber: '+40% daya Subwoofer. Dapatkan 25% lebih banyak <img src="assets/nut.webp" class="ui-ico"> dan <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: 'Daya Subwoofer 2x lipat. Tiap dentuman ke-3 memberi +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Bass: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Bola Baja' },
            billiard: { name: 'Bola 8' },
            plasma: { name: 'Bola Plasma' },
            planet: { name: 'Miniatur Bumi' },
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Benturan dasar Bandul (Damage x1)',
            billiard: '+25% damage Bandul. Tiap benturan ke-8 beri 2.5x tinggi & 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% damage Bandul. Listrik: 6+ tap/dtk gandakan hasil. Diam 5dtk — 10 auto-tap.',
            planet: 'Damage Bandul 2x, +3 kemajuan peti per ketuk. +100% semua sumber tiap penguat aktif. 1% peluang picu buff acak.',
            fallback: 'Pukul: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Semanggi Daun Empat' },
            horseshoe: { name: 'Tapal Kuda Emas' },
            paw: { name: 'Kaki Kelinci' },
            coin: { name: 'Koin Kuno' },
            star: { name: 'Bintang Keberuntungan' },
            key: { name: 'Kunci Antik' },
            sock: { name: 'Kaos Kaki Hoki' },
            sock_alert: '🎉 LUAR BIASA! Kamu mengumpulkan semua jimat dan membuka KAOS KAKI HOKI RAHASIA (+50 Hoki)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'BIASA',
            rare: 'LANGKA',
            epic: 'EPIK',
            legendary: 'LEGENDA',
            special: 'SPESIAL',
        },
    },

    // Немецкий (de) 9
    de: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder', // Main game title shown in the browser tab and store catalog
            version: 'Space Stepladder v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} m', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} m', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/Tap', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} m/s', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} m/Stoß', // Auto-clicker income from the swinging Newton Cradle (meters per ball impact)
            level: 'Lv. {level}', // Upgrade level indicator
            seconds_short: '{value}s', // Compact seconds format for buff timers (no space, e.g., 45s)
            meters: '{value} m', // Value in meters
            meters_plus: '+{value} m', // Positive meter gain (used in the Offline Earnings summary)
            pieces: '{count} Stk.', // Quantity of items (e.g., crates found)
            min_sec: '{min}m {sec}s', // Duration format: minutes and seconds (e.g., time away)
            meters_per_click_short: 'm/Tap', // Unit label for tap power in the shop
            meters_per_sec_short: 'm/s', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'm/Stoß', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Lv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'm', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Goldmuttern holen', // Tooltip (title) when hovering over the Golden Nuts balance
            donate_btn: 'Bank', // Compact button to open the Golden Bank (must be very short, 4-6 chars max)
            deal_btn: 'Deal', // Compact button to open the Daily Deal modal with timer (must be short)
            top_btn_aria: 'Ruhmeshalle', // Accessibility label (aria-label) for the Leaderboard button
            zen_title: 'Zen-Modus (UI ausblenden)', // Tooltip for the eye icon button that hides all UI overlays
            rewards_btn: 'Boni', // Button opening the Ad Streak reward track (kompakt für Mobile)
            rewards_count: '{current}/10', // Ad watch progress counter on the Rewards button
            buffs_btn: 'BUFFS', // Button opening the side drawer with temporary boosters (short, uppercase)

            // --- Bottom Navigation ---
            shop_btn: 'SHOP', // Main bottom-center button (upgrades bought with meters)
            skins_btn: 'Skins', // Bottom-right button (opens Gear Inventory with skins and accessories)
            cases_btn_label: 'Kisten:', // Label on the bottom-left Case Vault button (followed by case count)
            free_box_label: 'Gratis:', // Label on the 3-minute free crate timer button (strictly limited width!)

            // --- Action Buttons ---
            close_btn: '✕', // Close modal cross symbol (do not translate)
            close_aria: 'Schließen', // Accessibility label for close buttons
            cancel_btn: 'Abbrechen', // Cancel action button in confirmation dialogs
            buy_btn: 'Kaufen', // Generic purchase button
            claim_btn: 'Abholen', // Button to collect a free reward or prize
            equip_btn: 'Ausrüsten', // Button to equip an owned skin or item
            equipped_badge: 'AUSGERÜSTET', // Status badge shown on currently active gear
            later_btn: 'Später', // Postpone button (e.g., on the home screen shortcut prompt)
            not_now_btn: 'Nicht jetzt', // Decline button on the secondary retention prompt
            excellent_btn: 'GENIAL!', // Button to close the mascot thank-you modal after receiving gold/purchases
            forward_btn: 'NACH OBEN!', // Button to close the Retro Endurance Trial info modal
            claim_and_equip_btn: 'HOLEN & AUSRÜSTEN', // Button upon completing the 20-min trial (claims and equips both skin & perk)
            just_claim_btn: 'Nur abholen', // Secondary button upon completing the 20-min trial (claims skin without equipping)
            selected_btn: 'GEWÄHLT', // Disabled button state in the customization modal when skin is already active
            buy_for: 'FÜR {price} {currency} KAUFEN', // Purchase button in the customization modal ({currency} is nut icon)
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Schwarzmarkt', // Header title of the meter-based upgrade shop
            buy_label: 'KAUF', // Small sub-label above the cost inside green purchase buttons (uppercase, short)
            click_title: 'TAP-KRAFT', // Upgrade 1: increases manual tap height gain
            speaker_title: 'SUBWOOFER', // Upgrade 2: increases passive meters per second
            newton_title: 'NEWTON-PENDEL', // Upgrade 3: increases auto-swinging pendulum impact power
            cost_suffix: '{cost} m', // Upgrade cost in meters
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ BOOSTER', // Header of the slide-out right drawer with temporary buffs
            ad_btn: 'Ad ansehen', // Button text to activate a booster by watching a rewarded video

            fortune_name: 'GLÜCK', // Booster 1 name (increases drop rates and rare loot chances)
            fortune_desc: '+15 auf Glück-Stat', // Booster 1 description
            turbo_name: 'TURBO-AUFSTIEG', // Booster 2 name (triples all height gains)
            turbo_desc: '3x Bonus auf alle Höhengewinne', // Booster 2 description (affects taps, speaker, and cradle)
            frenzy_name: 'MUTTERN-REGEN', // Booster 3 name (every tap guarantees regular nut drops)
            frenzy_desc: 'Muttern regnen bei jedem Tap', // Booster 3 description
            autotap_name: 'AUTOPILOT', // Booster 4 name (high-speed auto-clicker)
            autotap_desc: 'Tappt automatisch 15x/Sek.', // Booster 4 description
            timewarp_name: 'ZEITMASCHINE', // Booster 5 name (instant time jump)
            timewarp_desc: 'Sofort 5 Min. Idle-Einkommen', // Booster 5 description (grants 5 minutes of Speaker + Cradle farm)
            timewarp_instant: 'Sofort', // Badge shown instead of a timer on the Time Machine tile
            ufo_name: 'UFO-MAGNET', // Booster 6 name (summons a flying saucer with a supply pod)
            ufo_desc: 'Zieht eine Beutekapsel heran', // Booster 6 description
            ufo_summon: 'Rufen', // Badge shown instead of a timer on the UFO Magnet tile
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Ausrüstung', // Header title of the equipment & skins modal
            tab_ladders: 'Leitern', // Tab 1: Stepladder skins
            tab_speakers: 'Lautsprecher', // Tab 2: Subwoofer skins
            tab_newton: 'Pendel', // Tab 3: Newton Cradle ball skins
            tab_talismans: 'Talismane', // Tab 4: Lucky charms / talismans
            available_skins: 'Verfügbare Skins:', // Label above the horizontal skin selector in the customization modal
            no_effects: 'Keine Bonuseffekte', // Fallback text when an item has no passive perks
            default_ladder_desc: 'Standard-Leiterwerte', // Default description for the basic ladder
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin', // Slot banner label: visual appearance only (transmog)
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk', // Slot banner label: active passive ability
            equipped_btn: 'AUSGERÜSTET', // Button text on an already equipped item
            unequip_btn: 'ABLEGEN', // Button text on an equipped charm allowing the player to unequip it
            equip_btn: 'Ausrüsten', // Button text to equip an owned item
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Der Reihe nach', // Locked charm button text (charms must be unlocked sequentially)
            fully_equipped: '✔ VOLL AUSGERÜSTET', // Status button in ladder preview when both Skin and Perk are active
            equip_all: 'BEIDES AUSRÜSTEN', // Main button in ladder preview to equip both visual Skin and passive Perk
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin an ✓', // Toggle button when visual appearance is active
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Nur Skin', // Toggle button to equip visual appearance without changing active perk
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk an ✓', // Toggle button when passive ability is active
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Nur Perk', // Toggle button to equip passive ability without changing visual skin
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Gesperrtes Item', // Notice shown in ladder preview when the skin is not yet owned
            mimic_setup: '⚙️ Slots anpassen ({slot0}, {slot1})', // Button to open the Mimic ability selector (shows 2 copied ladders)
            cyber_setup: '🦾 Extra-Slot anpassen', // Button to open the Cyberpunk extra accessory implant selector
            item_fallback: 'Item', // Generic fallback item name
            luck_plus: '+{luck} Glück', // Short luck bonus description on charm cards
            slot_empty: 'Leer', // Placeholder when a Mimic slot is empty
            slot_default: 'Standardwerte', // Fallback perk description inside Mimic configuration
            slot_1_selected: '✔ Slot 1', // Badge on a card assigned to Mimic Slot 1
            slot_2_selected: '✔ Slot 2', // Badge on a card assigned to Mimic Slot 2
            select_action: '+ Wählen', // Prompt on unselected cards in Mimic/Cyberpunk modals
            cyber_installed: '✔ Installiert', // Badge on the active accessory inside the Cyberpunk slot modal
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Anpassen', // Default modal header
            base_level: 'Basis-Stufe: {level}', // Current upgrade level of the accessory
            base_level_prefix: 'Basis-Stufe:', // Label before the level number
            power: 'Leistung: {value}', // Generic power output label
            power_mps: 'Leistung: {value} m/s', // Subwoofer output in meters per second
            upgrade_btn: 'Upgrade', // Level-up button label
            speakers_title: '📻 Subwoofer', // Modal header when customizing Speakers
            newton_title: '⚪ Newton-Pendel', // Modal header when customizing Newton Cradle balls
            hit_power: 'Stoß: {power} m (alle {speed}s)', // Cradle stats: meters per hit and swing interval in seconds
            upgrade_cost: 'Upgrade: {cost} m', // Upgrade button text with meter cost
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Cyberpunk-Slot', // Header of the Cyberpunk ladder's special modal
            desc: 'Wähle 1 Extra-Perk aus freigeschalteter Ausrüstung (Lautsprecher, Pendel oder Talisman):', // Instructions for selecting an extra passive effect
            tab_speakers: 'Lautsprecher', // Tab for Speaker perks
            tab_newton: 'Pendel', // Tab for Newton Cradle perks
            tab_talismans: 'Talismane', // Tab for Lucky Charm perks
            install_btn: 'Implantat einsetzen', // Confirm button to save the selected extra perk
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Mimik-Fähigkeiten', // Header of the Mimic ladder's special modal
            desc: 'Wähle 2 freigeschaltete Leitern, um deren passive Perks zu kopieren:', // Instructions for copying 2 ladder abilities
            slot1: 'Slot 1', // First copied ability slot header
            slot2: 'Slot 2', // Second copied ability slot header
            apply_btn: 'Perks anwenden', // Confirm button to save copied abilities
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Bestätigung', // Header of the Golden Nuts spend confirmation dialog
            desc: 'Gold ausgeben?', // Default confirmation question
            buy_btn: 'Kaufen ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Confirm button showing Golden Nut cost
            buy_label: 'Kaufen', // "Buy" word before the cost bracket
            buff_title: 'Booster aktivieren', // Header when buying a temporary booster with gold
            buff_desc: '{cost} <img src="assets/golden_nut.webp" class="ui-ico"> ausgeben, um Boost zu aktivieren?', // Description when buying a booster
            not_enough_gold: 'Nicht genug Goldmuttern', // Alert message when player lacks Golden Nuts
            gear_title: 'Ausrüstungs-Skin holen', // Header when buying a Speaker or Cradle skin with gold
            gear_desc: '"{name}" für {price} <img src="assets/golden_nut.webp" class="ui-ico"> kaufen?', // Prompt when buying gear
            talisman_title: 'Neuer Talisman', // Header when buying a Lucky Charm
            talisman_desc: 'Talisman "{name}" für {price} <img src="assets/golden_nut.webp" class="ui-ico"> kaufen?', // Prompt when buying a charm
            deal_title: 'Tagesdeal', // Header when buying the Daily Deal item
            deal_desc: '"{name}" für {price} <img src="assets/golden_nut.webp" class="ui-ico"> kaufen?', // Prompt when buying the Daily Deal
            item_title: 'Item kaufen', // Header when buying an item directly from the Inventory list
            item_desc: '"{name}" für {price} kaufen?', // Prompt when buying an item from Inventory
            ufo_desc: '39 <img src="assets/golden_nut.webp" class="ui-ico"> ausgeben, um UFO zu rufen?', // Prompt when summoning a UFO with gold
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'TRESOR', // Small top badge in the Golden Bank header
            title: 'GOLD-BANK', // Main header of the premium currency & IAP store
            vip_note: 'Jeder Kauf schaltet dauerhaft <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> in der Bestenliste frei!', // Note about permanent VIP status perk
            free_gold_title: 'Gratis-Gold', // Title on the rewarded ad card inside the Bank
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> pro Ad', // Reward amount for watching an ad in the Bank
            free_gold_btn: 'Abholen', // Button to watch an ad for +15 Golden Nuts
            hit_badge: '🔥 BESTSELLER', // Highlight tag on the No Ads bundle
            adfree_title: 'Keine Werbung + VIP', // Title of the permanent ad removal bundle
            adfree_desc: 'Entfernt alle Zwangswerbung für immer!', // Description of the ad removal bundle
            pack_handful: 'Handvoll Muttern', // Gold Pack 1 (100 Golden Nuts)
            pack_pouch: 'Beutel voller Muttern', // Gold Pack 2 (300 Golden Nuts)
            pack_pouch_tag: 'Reicht für 1 Kiste', // Green hint tag: enough to buy 1 Golden Case (250 gold)
            pack_crate: 'Kiste voller Muttern', // Gold Pack 3 (750 Golden Nuts)
            pack_safe: 'Tycoon-Tresor', // Gold Pack 4 (2,000 Golden Nuts)
            pack_safe_tag: '+40% MEHR WERT', // Orange best-value tag on the largest gold pack
            purchased: 'Gekauft', // Button label once No Ads has been bought
            price_99: '99 Yans', // Price button for 99 portal currency units (Yans)
            price_249: '249 Yans', // Price button for 249 Yans
            price_590: '590 Yans', // Price button for 590 Yans
            price_1390: '1.390 Yans', // Price button for 1,390 Yans
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 50x WERT', // Discount badge in the Starter Pack header
            timer_text: 'Angebot endet in:', // Label before the 48-hour countdown timer
            golden_nuts: 'Goldmuttern', // Label under "179" in the Starter Pack loot grid
            regular_nuts: 'Standard-Muttern', // Label under "1,799" in the loot grid
            wooden_boxes: 'Holzkisten', // Label under "25" in the loot grid
            iron_safes: 'Eisentresore', // Label under "10" in the loot grid
            golden_cases: 'Goldene Kisten', // Label under "5" in the loot grid
            cyber_speaker: '"Cyber"', // Name of the exclusive Epic speaker skin included in the pack
            cyber_speaker_sub: 'Lautsprecher (Episch)', // Subtitle clarifying that "Cyber" is an Epic speaker skin
            no_ads: 'KEINE WERBUNG', // Title of the ad-free tile in the loot grid
            no_ads_sub: 'Entfernt Zwangswerbung für immer', // Subtitle of the ad-free tile
            vip_status: 'VIP-STATUS', // Title of the VIP status tile in the loot grid
            vip_status_sub: 'Dauerhafter Goldrahmen in den TOP', // Subtitle explaining the leaderboard VIP crown/frame
            claim_btn: 'ALLES HOLEN FÜR <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yans</s> 39 Yans', // Main purchase button with crossed-out original price
            timer_badge: '39 Yans', // Compact price label on the pulsing HUD Starter Pack button
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Muttern',
            badge: 'VERSTECK', // Small top badge in the Case Vault header
            title: 'KISTEN-TRESOR', // Main header of the cases & gacha modal
            safe_tile: 'Tresor', // Short label on the free Iron Safe ad tile
            bonus_label: 'Tresor-Bonus', // Top label on the wide +15 Golden Nuts ad tile
            bonus_gold: '+15 Goldmuttern', // Reward text on the wide gold ad tile
            wooden_name: 'Holzkiste', // Tier 1 case (earned via tapping)
            iron_name: 'Eisentresor', // Tier 2 case (bought with regular nuts)
            gold_name: 'Goldene Kiste', // Tier 3 featured case (bought with Golden Nuts)
            nut_loot_50: '50 Muttern', // Wooden Crate loot item: 50 regular nuts
            nut_loot_150: '150 Muttern', // Wooden Crate loot item: 150 regular nuts
            nut_loot_300: '300 Muttern', // Wooden Crate loot item: 300 regular nuts
            open_btn: 'Öffnen', // Button to spin/open a single case
            buy_more_title: 'Mehr kaufen', // Tooltip on the "+" button
            open_all_title: 'Alle öffnen', // Tooltip on the "×10" batch open button
            in_game: 'Im Spiel', // Disabled button text when player has 0 Wooden Crates (earned by playing)
            buy_price: 'Kaufen {price} <img src="{icon}" class="ui-ico-sm">', // Button text to buy a case when count is 0
            buy_multi_title: 'Mehrere kaufen', // Tooltip on the "+" multi-buy button
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Abholen', // Button text on the free ad reward tiles
            ready: 'BEREIT!', // Text on the bottom-left 3-min free crate button when ready to claim
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> KISTE!', // Floating popup above the Cases button when filling the tap bar
            box_label: 'Kiste: {box}/{needed}', // Progress bar text format for taps until next crate
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Menge wählen:', // Subtitle in the multi-buy popup (×1, ×5, ×10)
            total: 'Gesamt:', // Label before the total calculated cost
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count} KISTEN GEÖFFNET', // Header of the ×10 batch opening results modal
            claim_all: 'Alle abholen', // Primary button to close and collect batch rewards
            open_more: '×10 weitere öffnen', // Secondary button to immediately open another 10 cases
            open_more_count: '×{count} weitere öffnen', // Secondary button when 2 to 9 cases remain
            new_count: '<span style="color:#2ecc71;">Neu: {count} 🪜</span>', // Summary counter of newly unlocked skins in the batch
            new_zero: '<span style="color:#7f8c8d;">Neu: 0</span>', // Summary text when all skins in the batch were duplicates
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ NEU!</span>', // Badge next to a newly unlocked skin in the batch list
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Duplikat (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Badge next to a duplicate skin showing gold compensation
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Öffne Kiste...', // Default roulette title
            opening_title: 'Öffne: {name}', // Header title while spinning a specific case
            again_btn: 'Nochmal', // Button to spin another case of the same type
            again_count: 'Nochmal ({count})', // Button to spin again showing remaining case count
            batch_btn: '×10', // Button inside roulette to batch-open 10 cases at once
            skip_btn: 'Skip ⏩', // Button to skip the spinning animation (Skip statt langem Überspringen)
            close_btn: 'Schließen', // Button to close the roulette and return to the Vault
            reroll_btn: '📺 Reroll mit Ad', // Button to re-spin the roulette by watching an ad
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Reroll (Neon)', // Free reroll button granted by the Neon ladder perk
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Reroll mit Ad', // Ad reroll button with custom TV icon
            duplicate: 'Duplikat → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Result text when the spun skin is already owned
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Perk-Beschreibung', // Default placeholder in the detailed ladder preview modal
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Tägliche Belohnungen', // Header of the 7-day login calendar modal
            subtitle: 'Täglich einloggen! Hol dir an Tag 7 einen exklusiven Leiter-Skin.', // Subtitle explaining the 7-day streak
            missed_alert: '⚠️ Du hast einen Tag verpasst!', // Warning shown when the player breaks their daily login streak
            restore_streak: 'Streak retten', // Button to save the login streak by watching an ad
            reset_day1: 'Tag 1', // Button to reset the login streak back to Day 1
            day7_title: 'Tag 7: Super-Preis', // Week 1 Day 7 banner title
            day7_desc: '"Kalender"-Skin (Episch)', // Week 1 Day 7 prize description
            double_ad: '▶ Mit Ad verdoppeln (x2)', // Button to claim 2x daily reward via ad
            claim_normal: 'Einfach abholen', // Button to claim 1x daily reward without ad
            day_badge: 'Tag {day}', // Day number header on calendar grid cards (Day 1 .. Day 6)
            day7_title_loop: 'Tag 7: Hauptgewinn', // Week 2+ Day 7 banner title (after skin is already owned)
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Goldene Kisten', // Week 2+ Day 7 reward description
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">HEUTE!</span>', // Badge on Day 7 card when ready to claim
            double_claim_loop: '▶ Mit Ad verdoppeln (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to double Week 2+ Day 7 reward to 6 Golden Cases
            claim_normal_loop: 'Einfach abholen (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to claim regular Week 2+ Day 7 reward (3 Golden Cases)
            claim_skin_btn: '"Kalender"-Skin abholen!', // Button to claim the exclusive skin on Week 1 Day 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ ABGEHOLT</span>', // Badge when Day 7 is completed
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Tag 7</span>', // Locked badge on Day 7 during Days 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Ad-Streak', // Header of the daily 1-10 ad watch reward track
            reset_timer: 'Reset in:', // Label before the midnight reset countdown
            footer: 'Jede im Spiel gesehene Werbung zählt für den Fortschritt.', // Footer note explaining how to advance the track
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Abgeholt</span>', // Status on already collected steps
            claim_btn: 'Abholen', // Button to claim an unlocked step reward
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} Ads</span>', // Requirement badge on locked steps
            popup_safe: '+1 Tresor!', // Floating feedback popup when claiming the free Iron Safe
            popup_nuts: '+600 Muttern!', // Floating feedback popup when claiming +600 free nuts
            popup_gold: '+{gold} Gold!', // Floating feedback popup when claiming +15 free gold
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Muttern' }, // Step 1 reward
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' }, // Step 2 reward: +20 Luck for 15 minutes
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 3 reward: 5 Golden Nuts
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Muttern' }, // Step 4 reward: 600 regular nuts
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Tresor' }, // Step 5 reward: 1 Iron Safe
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3m)' }, // Step 6 reward: 3x Turbo boost for 3 minutes
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 7 reward: 15 Golden Nuts
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> Muttern' }, // Step 8 reward: 1,000 regular nuts
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 9 reward: 25 Golden Nuts
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> "Billboard"-Skin' }, // Step 10 grand prize: Epic Billboard ladder skin
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Day 1: 500 regular nuts
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Day 2: 1 Iron Safe
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 3: 1 Golden Case
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 4: 75 Golden Nuts
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 5: 2 Golden Cases
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 6: 100 Golden Nuts
            { day: 7, text: '"Kalender"-Skin' }, // Day 7: Exclusive Calendar ladder skin
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Willkommen zurück!', // Header when returning to the game after >1 minute away
            away_time: 'Du warst offline: {time}', // Full time away line
            away_prefix: 'Du warst offline:', // Prefix before away duration
            limit_label: 'Limit: {limit}', // Full offline accumulation limit text
            limit_prefix: 'Limit:', // Prefix before max offline time cap
            speaker_earned: 'Subwoofer hat gepumpt:', // Meters generated passively by the Subwoofer while away
            newton_earned: 'Pendel hat gehämmert:', // Meters generated passively by the Newton Cradle while away
            cases_found: 'Kisten gefunden: {count} Stk.', // Passive Wooden Crates found while away
            cases_found_prefix: 'Kisten gefunden:', // Prefix before crates count
            total_earned: 'Gesamter Höhengewinn:', // Header above total offline meters earned
            double_ad: '▶ Mit Ad verdoppeln', // Button to double offline earnings via ad
            claim_normal: 'Einfach abholen', // Button to collect base offline earnings
            limit_3h: '3 Stunden', // Extended offline cap (with Deep Space ladder perk)
            limit_30m: '30 Min.', // Base offline cap (30 minutes)
            double_btn: '▶ Mit Ad verdoppeln (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Dynamic button text showing exact doubled amounts
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ERREICHT', // Red stamp over the milestone postcard illustration
            double_ad: '▶ Mit Ad verdoppeln (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to double milestone gold reward via ad
            claim_normal: 'Einfach abholen (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to collect base milestone gold reward
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Fullscreen achievement postcards triggered upon reaching major altitudes:
            { height: 250, name: 'Dächer', desc: 'Über dir nur Vögel und horrende Mieten. Erste hundert Meter geschafft!' },
            { height: 1000, name: 'Sturmfront', desc: 'Halt dich gut an den nassen Sprossen fest. Freier Himmel und Donner voraus!' },
            { height: 10000, name: 'Stratosphäre', desc: 'Reiseflughöhe. Die Erdkrümmung ist unter dir deutlich zu sehen.' },
            { height: 100000, name: 'Weltraum', desc: 'Die Schwerkraft gibt auf. Du bist offiziell in völliger Schwerelosigkeit!' },
            { height: 1000000, name: 'Milchstraße', desc: 'Eine Million Meter. Deine Reise trotzt längst jedem Verstand.' },
            { height: 10000000, name: 'Die große Leere', desc: 'Kartenrand? Nein, nur der Anfang des absoluten Nichts.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Lore entries shown in the Logbook popup card when clicking altitude checkpoints on the right rail:
            { id: 0, name: 'Alter Hof', desc: 'Deine Heimat. Betonwüste und das Knarren abgenutzter Holzsprossen. Hier beginnt dein endloser Aufstieg.' },
            { id: 1, name: 'Dächer', desc: 'Höher als Fernsehantennen, Tauben und Straßenlärm. Die ersten hundert Meter liegen hinter dir und die Luft wird kühler.' },
            { id: 2, name: 'Sturmfront', desc: 'Türmende Gewitterwolken, blendende Blitze und beißender Ozongeruch. Die Sprossen sind rutschig – halt dich fest!' },
            { id: 3, name: 'Stratosphäre', desc: 'Der Rand der Erdatmosphäre. Der Himmel verfärbt sich in tiefes Ultramarin und enthüllt das leuchtende Blau der Erdkrümmung.' },
            { id: 4, name: 'Tiefer Weltraum', desc: 'Umlaufbahn stummer Satelliten und zeitlose Leere. Die Schwerkraft hat kapituliert – die Leiter ist der einzige Weg nach oben.' },
            { id: 5, name: 'Milchstraße', desc: 'Spiralen ferner Galaxien, schimmernde Nebel und kosmischer Staub. Eine Million Meter über allen irdischen Sorgen.' },
            { id: 6, name: 'Die große Leere', desc: 'Der Ereignishorizont am Rande des bekannten Universums. Die ultimative Höhe, an der sich die Zeit in kosmischer Unendlichkeit auflöst.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Current zone names displayed below the main altitude counter:
            khrushchevka: 'Alter Hof',
            roofs: 'Dächer',
            storm_front: 'Sturmfront',
            stratosphere: 'Stratosphäre',
            open_space: 'Tiefer Weltraum',
            milky_way: 'Milchstraße',
            endless: 'Die große Leere',

            // Hover tooltips (title) on the 7 altitude tracker checkpoints:
            checkpoint_0: '0 m — Alter Hof',
            checkpoint_250: '250 m — Dächer',
            checkpoint_1000: '1.000 m — Sturmfront',
            checkpoint_10000: '10.000 m — Stratosphäre',
            checkpoint_100000: '100.000 m — Tiefer Weltraum',
            checkpoint_1000000: '1.000.000 m — Milchstraße',
            checkpoint_10000000: '10.000.000 m — Die große Leere',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'ERKUNDET', // Green badge when the stage has been reached
            signal_lost_badge: 'KEIN SIGNAL', // Red badge when the stage is still locked
            unknown_sector: 'Unbekannter Sektor', // Masked title for locked stages
            height_label: 'Höhe: {height} m', // Altitude label on unlocked stages
            target_label: 'Ziel: {target} m (noch {remaining} m)', // Progress required to unlock a stage
            locked_desc: 'Sensoren erfassen schwere Anomalien auf dieser Höhe. Klettere weiter, um die Signaldaten zu entschlüsseln.', // Sci-fi flavor text for locked stages
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Ausdauer-Prüfung', // Header of the 20-minute session timer modal
            challenge_desc: 'Bleib 20 Minuten im Spiel, um dir einen exklusiven Retro-Skin kostenlos zu sichern!', // Challenge rules
            skin_name: '"Retro"-Skin', // Name of the 8-bit arcade ladder skin
            ability_label: '<b style="color: #f1c40f;">Fähigkeit:</b> Fang die fliegende Münze (Beute: bis zu 125 <img src="assets/nut.webp" class="ui-ico-sm"> und 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).', // Perk description
            time_left: 'Verbleibende Zeit:', // Label before the countdown timer
            challenge_complete: 'PRÜFUNG BESTANDEN!', // Fullscreen celebration header after 20 minutes
            challenge_reward: 'Du hast 20 Minuten überstanden! Hier ist deine Belohnung:', // Celebration subtitle
            epic_skin: 'EPISCHER "RETRO"-SKIN', // Featured reward title
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS', // Badge on the home screen shortcut offer banner
            title: 'Spiel zum Startbildschirm hinzufügen & mit 1 Tap klettern!', // Main offer heading
            desc: 'Tippe im nächsten Fenster auf „Hinzufügen“ und die Belohnung gehört dir', // Instructions for the browser/platform prompt
            reward_label: 'Installations-Belohnung:', // Label inside the reward pill
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Reward amount
            add_btn: 'HINZUFÜGEN (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Primary accept button
            decline_title: 'Sicher, dass du die Belohnung nicht willst?', // Retention modal header (sad mascot) if player clicks "Later"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> warten auf dich. Die Verknüpfung dauert nur zwei Sekunden!', // Retention description
            decline_claim: '100 <img src="assets/golden_nut.webp" class="ui-ico-sm"> abholen', // Retention accept button
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'KLETTERER-LIGA', // Top badge in the Hall of Fame header
            title: 'RUHMESHALLE', // Main leaderboard title
            season_desc: 'Globale Rangliste der Weltraumeroberer', // Default subtitle
            tab_alltime: 'All-Time', // All-time ranking tab
            tab_week: 'Saison (Woche)', // Weekly tournament tab
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Lade Rangliste...</div>', // Loading state text
            desc_alltime: 'Globale Rangliste der Weltraumeroberer', // Subtitle when All Time tab is active
            desc_week: 'Reset jeden Montag um 00:00 Uhr', // Subtitle when Weekly tab is active
            anon: 'Anonymer Kletterer', // Fallback name for unauthorized players
            you_player: 'Du (Spieler)', // Player's entry name in local/fallback mode
            you_vip: '<span>Du (VIP)</span>', // Sticky bottom card label when player has VIP status
            you: '<span>Du</span>', // Sticky bottom card label without VIP status
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'HEISSER DEAL', // Top badge in the Daily Deal header
            title: 'DEAL DES TAGES', // Main header of the Daily Deal modal
            timer_label: 'Neuer Deal in', // Label before the midnight refresh countdown
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Neu ({left}/5)', // Button to reroll the deal via ad (up to 5 times/day)
            reroll_exhausted: 'Keine Rerolls mehr (0/5)', // Disabled button text when 0 rerolls remain
            in_collection: '✔ IN SAMMLUNG', // Button text when the featured item is already owned
            buy_btn: 'KAUF: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Purchase button with old and discounted prices
            not_enough: 'Noch {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> nötig → Bank', // Button when player lacks gold (redirects to Golden Bank)
            discount_badge: '{rarity} • -{percent}%', // Discount tag above the item name
            unique_ladder: 'Einzigartige Leiter', // Fallback description for ladder deals
            luck_desc: '+{luck} auf Gesamtglück', // Description when the deal features a Lucky Charm
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'EINSTELLUNGEN', // Settings modal header
            language: '🌐 Sprache',
            music: 'Musik & Atmosphäre', // Slider 1: background music and wind/space ambience volume
            tap_sounds: 'Tap-Sounds', // Slider 2: ladder tap sound effects volume
            speaker_bass: 'Subwoofer-Bass', // Slider 3: passive Subwoofer bass volume
            newton_hit: 'Pendel-Aufprall', // Slider 4: Newton Cradle clack volume
            rewards_sfx: 'Belohnungen & SFX', // Slider 5: UI, fanfare, and roulette sounds volume
            vibration: 'Haptisches Feedback', // Checkbox: mobile vibration on tap
            support_btn: 'Support / Community', // Footer button for player support
            support_alert: 'Spiel-Community & Support: t.me/your_game_group', // Alert text with community link
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Dein Glück', // Header of the Luck breakdown & Charms modal
            total_label: 'Gesamtwert', // Subtitle under the big green total luck number
            influence_title: 'Wie Glück das Spiel beeinflusst:', // Info box heading
            influence_cases: 'Erhöht die Drop-Rate von Kisten beim Tappen.', // Bullet 1
            influence_nuts: 'Erhöht die Anzahl an Muttern in Kisten.', // Bullet 2
            influence_rarity: 'Steigert Chancen auf epische und legendäre Skins.', // Bullet 3
            breakdown_title: 'Werte-Aufschlüsselung:', // Heading above the list of active luck sources
            talismans_title: 'Talisman-Sammlung:', // Heading above the horizontal charm shop strip
            buff_label: 'Glück', // Short luck label
            plus_luck: '+{value} Glück', // Luck bonus format
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">AUSGERÜSTET</div>', // Equipped tag on charm card
            equip_btn: 'Ausrüsten', // Equip button on owned charm card
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Gesperrt</div>', // Locked tag on future charms in the chain
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Leiter "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: active ladder perk luck
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Talisman "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: equipped charm luck
            cyber_item: '<div>🦾 Cyber-Slot "{name}": <b style="color:#00ffff;">+{luck}</b></div>', // Breakdown line: Cyberpunk slot charm luck
            ad_fortune: '<div>📺 Ad-Boost (Glückszeichen): <b style="color:#2ecc71;">+15</b></div>', // Breakdown line: temporary +15 Luck ad booster
            no_buffs: '<div>Keine aktiven Glücks-Booster.</div>', // Shown when total luck is 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'GOLD GUTGESCHRIEBEN!', // Default header in the mascot thank-you modal
            default_desc: 'Danke fürs Mitspielen!', // Default thank-you message
            vip_badge: 'VIP-STATUS AKTIVIERT', // Golden badge shown when a purchase grants VIP status
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'STARTER-PAKET!', // Header after purchasing the Starter Pack
                desc: 'Ein Berg an Kisten, Muttern, werbefreies Spielen und der "Cyber"-Skin gehören dir! Danke für deinen Support <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'GOLD ERHALTEN!', // Header after watching an ad for +15 Golden Nuts
                desc: 'Du hast <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> fürs Ansehen einer Ad erhalten!',
            },
            adfree: {
                title: 'KEINE WERBUNG!', // Header after purchasing No Ads
                desc: 'Zwangswerbung für immer entfernt! Danke für die Unterstützung unseres Spiels ❤️',
            },
            gold_credited: {
                title: 'GOLD GUTGESCHRIEBEN!', // Header after purchasing a Gold Pack
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> deinem Konto gutgeschrieben. Vielen Dank für deinen Support ❤️! Viel Spaß beim Klettern!',
            },
            shortcut_reward: {
                title: 'GOLD-BELOHNUNG!', // Header after installing the home screen shortcut
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> deinem Guthaben hinzugefügt!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Danke fürs Spielen! ❤️</span>',
            },
            deal: {
                buy_btn: 'KAUFEN: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Daily Deal purchase button
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        //  Keep these short and punchy — they float on the canvas and fade quickly!
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'STARTER-PAKET FREIGESCHALTET!', // Floating text when Starter Pack is bought
            sponsor: '📺 Sponsor: +{nuts} 🔩 & +{gold} 🟡!', // Bonus from Billboard ladder perk after watching any ad
            turbo_boost: 'TURBO-BOOST 3x ({seconds}s)!', // Floating text when Turbo Climb is activated
            luck_boost: 'GLÜCK +{value}!', // Floating text when Luck booster is activated
            frenzy: 'MUTTERN-REGEN!', // Floating text when Nut Rain is activated
            autotap: 'AUTOPILOT (15 Taps/s)!', // Floating text when Autopilot is activated
            turbo_income: 'TURBO-BOOST 3x!', // Floating text when buying Turbo with gold
            luck_15: 'GLÜCK +15!', // Floating text when buying Luck with gold
            ufo_case: '+1 KISTE!', // UFO loot pod reward: Wooden Crate
            ufo_safe: '+1 TRESOR!', // UFO loot pod reward: Iron Safe
            billiard_crit: '🎱 2.5x! +{nuts} 🔩', // Every 8th hit proc from the 8-Ball cradle skin
            planet_turbo: '🌍 TURBO 3x (20s)!', // 1% random buff proc from Mini Earth cradle: Turbo
            planet_luck: '🌍 GLÜCK +15 (60s)!', // 1% random buff proc from Mini Earth cradle: Luck
            planet_frenzy: '🌍 MUTTERN-REGEN (15s)!', // 1% random buff proc from Mini Earth cradle: Nut Rain
            hawking: '💥 HAWKING-STRAHLUNG: +100.000 m!', // Easter egg burst when unequipping Singularity ladder at max +1,000% charge
            storm_discharge: 'ENTLADUNG (10x)!', // 10 auto-tap burst from Plasma Globe after 5s of idle time
            absolute_unlocked: 'ABSOLUT FREIGESCHALTET!', // Floating text when unlocking 100% collection completion skin
            legendary_skin: '👑 LEGENDÄRER SKIN: {name}!', // Floating text when unlocking a milestone ladder skin
            retro_coin: '+{nuts} Muttern, +{gold}!', // Floating text when catching the flying Retro coin
            banana_double: '🍌 2x TAP!', // Every 5th tap proc from the Banana ladder
            combo: '🔥 {mult}x ({cps} CPS)', // High-speed tapping multiplier proc from the Scratcher ladder
            case_drop: '+1 KISTE!', // Random Wooden Crate drop while tapping
            golden_case_milky: 'GOLDENE KISTE (MILCHSTRASSE)!', // When Milky Way perk upgrades a dropped safe into a Golden Case
            golden_case: 'GOLDENE KISTE!', // Golden Case drop (e.g., from Marble Gold perk)
            safe_milky: 'TRESOR (MILCHSTRASSE)!', // When Milky Way perk upgrades a dropped crate into an Iron Safe
            safe_luck: 'TRESOR (GLÜCK)!', // When high Luck upgrades a random crate drop into an Iron Safe
            iron_safe: 'EISENTRESOR!', // Iron Safe awarded from tap meter (Golden ladder perk)
            rusty_nut: '+100', // Bonus 100 nuts from Holiday ladder gift
            rusty_box: '+1 KISTE!', // Bonus crate from Holiday ladder gift
            rusty_safe: '+1 TRESOR!', // Bonus safe from Holiday ladder gift
            marble_double: '+{value} (2x)', // Doubled tap value
            jackpot: 'JACKPOT: +1!', // Micro-jackpot (+1 Golden Nut) when opening a Wooden Crate with 30+ Luck
            timed_box: '+1 KISTE ABGEHOLT!', // Floating text when collecting the 3-minute free crate
            crystal_gold: '+{value} (Kristall)!', // +3 Golden Nuts bonus when opening any case with Crystal ladder perk
            shop_spent: '-{cost} m', // Red floating text when spending meters on shop upgrades
            streak_dupe: 'Duplikat: +{value}!', // Gold compensation if Billboard skin is already owned on Ad Streak step 10
            streak_billboard: '🎉 BILLBOARD-SKIN FREIGESCHALTET!', // Unlocking Billboard skin on Ad Streak step 10
            calendar_day: 'Tag {day} abgeholt!', // Floating text when claiming daily login reward
            calendar_skin: 'KALENDER-SKIN FREIGESCHALTET!', // Unlocking Calendar skin on Day 7
            calendar_bonus: '+{cases} Goldene Kisten!', // Claiming Week 2+ Day 7 grand reward
            timewarp_report: '+{meters} m', // Time Machine report part: meters gained
            timewarp_nuts: '+{nuts} Muttern', // Time Machine report part: nuts gained
            timewarp_gold: '+{gold} Gold', // Time Machine report part: gold gained
            magnet_ufo: 'UFO-MAGNET!', // Floating text when summoning a UFO pod
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Holz' }, // Default wooden stepladder
            banana: { name: 'Banane' }, // Ladder made of bananas and palm leaves
            beer: { name: 'Bierkiste' }, // Ladder stacked from beer cans/bottles
            fire: { name: 'Feuer' }, // Blazing fire ladder
            fireman: { name: 'Feuerleiter' }, // Red metal fireman ladder
            plastic: { name: 'Plastik' }, // Lightweight blue plastic ladder
            rusty: { name: 'Rostig' }, // Old corroded metal ladder that drops nuts
            tape: { name: 'Panzertape' }, // Ladder held together with blue duct/insulation tape
            // === RARE ===
            book: { name: 'Bücherstapel' }, // Ladder built from stacks of books
            cactus: { name: 'Kaktus' }, // Prickly green desert cactus ladder
            cement: { name: 'Beton' }, // Heavy-duty reinforced concrete ladder
            neon: { name: 'Neon' }, // Glowing pink/cyan neon tube ladder
            scratch: { name: 'Kratzbaum' }, // Rope-wrapped cat scratching post ladder
            new_year: { name: 'Festtag' }, // Festive ladder decorated with lights and ornaments
            // === EPIC ===
            add_stair: { name: 'Billboard' }, // High-tech advertising screens ladder
            bone: { name: 'Skelett' }, // Spooky bone and skull ladder
            crystal: { name: 'Kristall' }, // Shimmering blue crystal/diamond ladder
            cyber: { name: 'Cyberpunk' }, // Futuristic cybernetic ladder with circuit boards
            golden: { name: 'Gold' }, // Solid gleaming gold ladder
            goth: { name: 'Gothic' }, // Dark wrought-iron gothic gargoyle ladder
            ice: { name: 'Gletscher' }, // Slippery frozen icicle ladder
            vine: { name: 'Efeuranke' }, // Overgrown living jungle vine ladder
            calendar_stair: { name: 'Kalender' }, // Clockwork & calendar pages ladder (Day 7 login reward)
            // === LEGENDARY ===
            marble: { name: 'Marmor-Gold' }, // Classical white marble ladder with gold trim
            quant: { name: 'Quanten' }, // Glitching dimensional-shifting quantum ladder
            ufo: { name: 'UFO' }, // Alien saucer alloy ladder with green tractor beams
            mimic: { name: 'Mimik' }, // Monster chest-mimic ladder with teeth and eyes
            // === SPECIAL ===
            retro: { name: 'Retro' }, // 8-bit pixel arcade ladder (20-min trial reward)
            storm: { name: 'Sturmfront' }, // Thundercloud & lightning ladder (unlocked at 1,000 m)
            strato: { name: 'Stratosphäre' }, // High-altitude aero ladder (unlocked at 10,000 m)
            cosmo: { name: 'Tiefer Weltraum' }, // Orbital spacecraft ladder (unlocked at 100,000 m)
            milkyway: { name: 'Milchstraße' }, // Starry galactic nebula ladder (unlocked at 1,000,000 m)
            endless: { name: 'Singularität' }, // Black hole event horizon ladder (unlocked at 10,000,000 m)
            absolute: { name: 'ABSOLUT' }, // Ultimate divine ladder (unlocked at 100% game completion)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Der Klassiker zum Start. Riecht nach dem Beginn einer endlosen Reise.',
            banana: 'Verdoppelt jeden 5. Tap.',
            beer: '+5 auf Glück-Stat.',
            fire: '+7 m pro Tap, -10 Taps bis zur Kiste.',
            fireman: 'Newton-Pendel: +15 m pro Stoß',
            plastic: 'Newton-Pendel schwingt 0,15s schneller',
            rusty: '65% Chance auf <img src="assets/nut.webp" class="ui-ico"> bei jedem Tap.',
            tape: '10% Rabatt auf dem Schwarzmarkt.',
            book: '+7 auf Glück-Stat.',
            cactus: 'Subwoofer: +20 m/s. Newton-Pendel: +10 m pro Stoß',
            cement: 'Newton-Pendel: +50% Kraft, aber Stöße sind 0,3s langsamer.',
            neon: 'Kostenloser Reroll beim Öffnen jeder Kiste',
            scratch: 'Ab 5+ Taps/Sek. wird die Tap-Höhe mit 1,5x multipliziert',
            new_year: 'Bonus-Geschenk alle 150–250 Taps.',
            bone: 'Verdoppelt jeden Tap',
            crystal: 'Jede geöffnete Kiste bringt +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Schaltet einen zusätzlichen Zubehör-Slot frei.',
            golden: 'Volle Tap-Leiste verleiht einen Eisentresor statt einer Kiste',
            goth: '20% Rabatt auf Upgrades und mit Muttern gekaufte Kisten',
            ice: 'Glatter Aufstieg: Erlaubt Wisch-Taps über die Leiter',
            vine: 'Erhöht Tap-Kraft, Subwoofer und Pendel um +40%.',
            add_stair: 'Booster halten 50% länger; jede gesehene Ad bringt 20 <img src="assets/nut.webp" class="ui-ico"> und 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 auf Glück; erhöhte Chance auf legendäre Skins aus Tresoren.',
            marble: '25% Chance auf eine Goldene Kiste bei voller Tap-Leiste.',
            quant: 'Materiespaltung: 20% aller erhaltenen Muttern werden golden, -50 Taps zur Kiste.',
            ufo: 'Zieht alle 30 Sekunden eine Alien-Beutekapsel an',
            mimic: 'Mimikry: Kopiert die passiven Fähigkeiten von 2 gewählten Leitern.',
            retro: 'Fang die fliegende Münze (Beute: bis zu 125 <img src="assets/nut.webp" class="ui-ico"> und 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m pro Tap, aber 5% Fehlschlag-Chance beim Klick.',
            strato: 'Dünne Luft: Erhöht Tempo von Subwoofer und Pendel um 40%.',
            cosmo: 'Erhöht das Idle-Ressourcenlimit auf 3 Stunden.',
            milkyway: 'Trägheitsschub. 25% Chance, die Stufe jeder gedroppten Kiste um +1 zu erhöhen.',
            endless: 'Erhöht den Höhengewinn jede Minute um +50% (bis zu +1.000%). Leiterwechsel setzt Bonus zurück.',
            absolute: 'Höhepunkt der Evolution: Gewährt passive Perks aller Leitern gleichzeitig',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Vintage-Lautsprecher' }, // Default retro wooden speaker
            monster: { name: 'Monster-Stack' }, // Concert rock amplifier stack
            cyber: { name: 'Cyber-Subwoofer' }, // Futuristic neon cyberpunk subwoofer
            cool: { name: 'Supreme-Subwoofer' }, // Golden stadium-grade sound system
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Basis-Subwoofer-Beat (Kraft x1)',
            monster: '+20% Subwoofer-Kraft. -2 Minuten Abklingzeit für Gratis-Kiste.',
            cyber: '+40% Subwoofer-Kraft. Erhalte 25% mehr <img src="assets/nut.webp" class="ui-ico"> und <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: '2x Subwoofer-Kraft. Jeder 3. Beat bringt +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Bass: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Stahlkugeln' }, // Classic chrome pendulum balls
            billiard: { name: '8-Ball' }, // Black pool 8-balls
            plasma: { name: 'Plasmakugel' }, // High-voltage Tesla plasma spheres
            planet: { name: 'Mini-Erde' }, // Miniature planet Earth globes
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Basis-Pendel-Stoß (Schaden x1)',
            billiard: '+25% Pendel-Schaden. Jeder 8. Stoß gewährt 2,5x Höhe und 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% Pendel-Schaden. Elektrisiert: bei 6+ Taps/s verdoppelt sich Tap-Höhe. Nach 5s Inaktivität — 10 Auto-Taps.',
            planet: '2x Pendel-Schaden, +3 Taps zur Kiste pro Stoß. +100% aus allen Quellen pro aktivem Booster. 1% Chance pro Stoß auf Zufalls-Buff.',
            fallback: 'Stoß: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Vierblättriges Kleeblatt' }, // Tier 1 charm (+3 Luck)
            horseshoe: { name: 'Goldenes Hufeisen' }, // Tier 2 charm (+5 Luck)
            paw: { name: 'Hasenpfote' }, // Tier 3 charm (+8 Luck)
            coin: { name: 'Uralte Münze' }, // Tier 4 charm (+12 Luck)
            star: { name: 'Glücksstern' }, // Tier 5 charm (+18 Luck)
            key: { name: 'Dietrich' }, // Tier 6 charm (+25 Luck)
            sock: { name: 'Glückssocke' }, // Tier 7 secret completion charm (+50 Luck)
            sock_alert: '🎉 UNGLAUBLICH! Du hast alle Talismane gesammelt und die GEHEIME SOCKE freigeschaltet (+50 Glück)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'GEWÖHNLICH',
            rare: 'SELTEN',
            epic: 'EPISCH',
            legendary: 'LEGENDÄR',
            special: 'SPEZIELL',
        },
    },

    // हिन्दी (भारत) — Hindi (India) 10
    hi: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder', // Main game title shown in the browser tab and store catalog
            version: 'Space Stepladder v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} मी', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} मी', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} मी/टैप', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} मी/से.', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} मी/हिट', // Auto-clicker income from the swinging Newton Cradle (meters per ball impact)
            level: 'Lv. {level}', // Upgrade level indicator
            seconds_short: '{value}से.', // Compact seconds format for buff timers (no space, e.g., 45s)
            meters: '{value} मी', // Value in meters
            meters_plus: '+{value} मी', // Positive meter gain (used in the Offline Earnings summary)
            pieces: '{count} नग', // Quantity of items (e.g., crates found)
            min_sec: '{min}मि {sec}से.', // Duration format: minutes and seconds (e.g., time away)
            meters_per_click_short: 'मी/टैप', // Unit label for tap power in the shop
            meters_per_sec_short: 'मी/से.', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'मी/हिट', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Lv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'मी', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'सुनहरे नट्स पाएं', // Tooltip (title) when hovering over the Golden Nuts balance
            donate_btn: 'बैंक', // Compact button to open the Golden Bank (must be very short, 4-6 chars max)
            deal_btn: 'डील', // Compact button to open the Daily Deal modal with timer (must be short)
            top_btn_aria: 'हॉल ऑफ फेम', // Accessibility label (aria-label) for the Leaderboard button
            zen_title: 'ज़ेन मोड (UI छुपाएं)', // Tooltip for the eye icon button that hides all UI overlays
            rewards_btn: 'इनाम', // Button opening the Ad Streak reward track
            rewards_count: '{current}/10', // Ad watch progress counter on the Rewards button
            buffs_btn: 'बूस्ट', // Button opening the side drawer with temporary boosters (short, uppercase)

            // --- Bottom Navigation ---
            shop_btn: 'शॉप', // Main bottom-center button (upgrades bought with meters)
            skins_btn: 'स्किन्स', // Bottom-right button (opens Gear Inventory with skins and accessories)
            cases_btn_label: 'केस:', // Label on the bottom-left Case Vault button (followed by case count)
            free_box_label: 'मुफ़्त:', // Label on the 3-minute free crate timer button (strictly limited width!)

            // --- Action Buttons ---
            close_btn: '✕', // Close modal cross symbol (do not translate)
            close_aria: 'बंद करें', // Accessibility label for close buttons
            cancel_btn: 'रद्द करें', // Cancel action button in confirmation dialogs
            buy_btn: 'खरीदें', // Generic purchase button
            claim_btn: 'पाएं', // Button to collect a free reward or prize
            equip_btn: 'लगाएं', // Button to equip an owned skin or item
            equipped_badge: 'सक्रिय', // Status badge shown on currently active gear
            later_btn: 'बाद में', // Postpone button (e.g., on the home screen shortcut prompt)
            not_now_btn: 'अभी नहीं', // Decline button on the secondary retention prompt
            excellent_btn: 'शानदार!', // Button to close the mascot thank-you modal after receiving gold/purchases
            forward_btn: 'शिखर की ओर!', // Button to close the Retro Endurance Trial info modal
            claim_and_equip_btn: 'पाएं और लगाएं', // Button upon completing the 20-min trial (claims and equips both skin & perk)
            just_claim_btn: 'सिर्फ पाएं', // Secondary button upon completing the 20-min trial (claims skin without equipping)
            selected_btn: 'चुना गया', // Disabled button state in the customization modal when skin is already active
            buy_for: '{price} {currency} में खरीदें', // Purchase button in the customization modal ({currency} is nut icon)
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'ब्लैक मार्केट', // Header title of the meter-based upgrade shop
            buy_label: 'खरीदें', // Small sub-label above the cost inside green purchase buttons (uppercase, short)
            click_title: 'टैप पावर', // Upgrade 1: increases manual tap height gain
            speaker_title: 'सबवूफ़र', // Upgrade 2: increases passive meters per second
            newton_title: 'न्यूटन क्रैडल', // Upgrade 3: increases auto-swinging pendulum impact power
            cost_suffix: '{cost} मी', // Upgrade cost in meters
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ बूस्टर्स', // Header of the slide-out right drawer with temporary buffs
            ad_btn: 'विज्ञापन देखें', // Button text to activate a booster by watching a rewarded video

            fortune_name: 'किस्मत', // Booster 1 name (increases drop rates and rare loot chances)
            fortune_desc: 'किस्मत में +15 बढ़ोतरी', // Booster 1 description
            turbo_name: 'टर्बो चढ़ाई', // Booster 2 name (triples all height gains)
            turbo_desc: 'ऊंचाई की सभी कमाई 3x', // Booster 2 description (affects taps, speaker, and cradle)
            frenzy_name: 'नट की बारिश', // Booster 3 name (every tap guarantees regular nut drops)
            frenzy_desc: 'हर टैप पर आसमान से नट गिरेंगे', // Booster 3 description
            autotap_name: 'ऑटोपायलट', // Booster 4 name (high-speed auto-clicker)
            autotap_desc: 'सीढ़ी पर 15 टैप/से. ऑटो-टैप', // Booster 4 description
            timewarp_name: 'टाइम मशीन', // Booster 5 name (instant time jump)
            timewarp_desc: 'तुरंत 5 मिनट की निष्क्रिय कमाई पाएं', // Booster 5 description (grants 5 minutes of Speaker + Cradle farm)
            timewarp_instant: 'तुरंत', // Badge shown instead of a timer on the Time Machine tile
            ufo_name: 'UFO मैग्नेट', // Booster 6 name (summons a flying saucer with a supply pod)
            ufo_desc: 'संसाधनों से भरा लूट पॉड खींचता है', // Booster 6 description
            ufo_summon: 'बुलाएं', // Badge shown instead of a timer on the UFO Magnet tile
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'गियर इन्वेंट्री', // Header title of the equipment & skins modal
            tab_ladders: 'सीढ़ियां', // Tab 1: Stepladder skins
            tab_speakers: 'स्पीकर्स', // Tab 2: Subwoofer skins
            tab_newton: 'क्रैडल्स', // Tab 3: Newton Cradle ball skins
            tab_talismans: 'ताबीज़', // Tab 4: Lucky charms / talismans
            available_skins: 'उपलब्ध स्किन्स:', // Label above the horizontal skin selector in the customization modal
            no_effects: 'कोई बोनस प्रभाव नहीं', // Fallback text when an item has no passive perks
            default_ladder_desc: 'सीढ़ी के सामान्य पैरामीटर', // Default description for the basic ladder
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> स्किन', // Slot banner label: visual appearance only (transmog)
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> पर्क', // Slot banner label: active passive ability
            equipped_btn: 'सक्रिय', // Button text on an already equipped item
            unequip_btn: 'हटाएं', // Button text on an equipped charm allowing the player to unequip it
            equip_btn: 'लगाएं', // Button text to equip an owned item
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> क्रम से', // Locked charm button text (charms must be unlocked sequentially)
            fully_equipped: '✔ पूरी तरह लैस', // Status button in ladder preview when both Skin and Perk are active
            equip_all: 'दोनों लगाएं', // Main button in ladder preview to equip both visual Skin and passive Perk
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> स्किन चालू ✓', // Toggle button when visual appearance is active
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> सिर्फ स्किन', // Toggle button to equip visual appearance without changing active perk
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> पर्क चालू ✓', // Toggle button when passive ability is active
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> सिर्फ पर्क', // Toggle button to equip passive ability without changing visual skin
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> लॉक आइटम', // Notice shown in ladder preview when the skin is not yet owned
            mimic_setup: '⚙️ स्लॉट सेट करें ({slot0}, {slot1})', // Button to open the Mimic ability selector (shows 2 copied ladders)
            cyber_setup: '🦾 अतिरिक्त स्लॉट ट्यून करें', // Button to open the Cyberpunk extra accessory implant selector
            item_fallback: 'आइटम', // Generic fallback item name
            luck_plus: '+{luck} किस्मत', // Short luck bonus description on charm cards
            slot_empty: 'खाली', // Placeholder when a Mimic slot is empty
            slot_default: 'सामान्य आँकड़े', // Fallback perk description inside Mimic configuration
            slot_1_selected: '✔ स्लॉट 1', // Badge on a card assigned to Mimic Slot 1
            slot_2_selected: '✔ स्लॉट 2', // Badge on a card assigned to Mimic Slot 2
            select_action: '+ चुनें', // Prompt on unselected cards in Mimic/Cyberpunk modals
            cyber_installed: '✔ स्थापित', // Badge on the active accessory inside the Cyberpunk slot modal
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'कस्टमाइज़', // Default modal header
            base_level: 'मूल स्तर: {level}', // Current upgrade level of the accessory
            base_level_prefix: 'मूल स्तर:', // Label before the level number
            power: 'पावर: {value}', // Generic power output label
            power_mps: 'पावर: {value} मी/से.', // Subwoofer output in meters per second
            upgrade_btn: 'अपग्रेड', // Level-up button label
            speakers_title: '📻 सबवूफ़र', // Modal header when customizing Speakers
            newton_title: '⚪ न्यूटन क्रैडल', // Modal header when customizing Newton Cradle balls
            hit_power: 'हिट: {power} मी (हर {speed}से.)', // Cradle stats: meters per hit and swing interval in seconds
            upgrade_cost: 'अपग्रेड: {cost} मी', // Upgrade button text with meter cost
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 साइबरपंक स्लॉट', // Header of the Cyberpunk ladder's special modal
            desc: 'अनलॉक सामान (स्पीकर, क्रैडल या ताबीज़) से 1 अतिरिक्त पर्क चुनें:', // Instructions for selecting an extra passive effect
            tab_speakers: 'स्पीकर्स', // Tab for Speaker perks
            tab_newton: 'क्रैडल्स', // Tab for Newton Cradle perks
            tab_talismans: 'ताबीज़', // Tab for Lucky Charm perks
            install_btn: 'इम्प्लांट लगाएं', // Confirm button to save the selected extra perk
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 मिमिक क्षमताएं', // Header of the Mimic ladder's special modal
            desc: 'पर्क कॉपी करने के लिए किन्हीं 2 अनलॉक सीढ़ियों को चुनें:', // Instructions for copying 2 ladder abilities
            slot1: 'स्लॉट 1', // First copied ability slot header
            slot2: 'स्लॉट 2', // Second copied ability slot header
            apply_btn: 'क्षमताएं लागू करें', // Confirm button to save copied abilities
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'पुष्टि करें', // Header of the Golden Nuts spend confirmation dialog
            desc: 'सोना खर्च करें?', // Default confirmation question
            buy_btn: 'खरीदें ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Confirm button showing Golden Nut cost
            buy_label: 'खरीदें', // "Buy" word before the cost bracket
            buff_title: 'बूस्टर सक्रिय करें', // Header when buying a temporary booster with gold
            buff_desc: 'बूस्ट सक्रिय करने के लिए {cost} <img src="assets/golden_nut.webp" class="ui-ico"> खर्च करें?', // Description when buying a booster
            not_enough_gold: 'पर्याप्त सुनहरे नट्स नहीं हैं', // Alert message when player lacks Golden Nuts
            gear_title: 'गियर स्किन अनलॉक करें', // Header when buying a Speaker or Cradle skin with gold
            gear_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> में "{name}" खरीदें?', // Prompt when buying gear
            talisman_title: 'नया ताबीज़', // Header when buying a Lucky Charm
            talisman_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> में ताबीज़ "{name}" खरीदें?', // Prompt when buying a charm
            deal_title: 'दैनिक डील', // Header when buying the Daily Deal item
            deal_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> में "{name}" खरीदें?', // Prompt when buying the Daily Deal
            item_title: 'आइटम खरीदें', // Header when buying an item directly from the Inventory list
            item_desc: '{price} में "{name}" खरीदें?', // Prompt when buying an item from Inventory
            ufo_desc: 'UFO बुलाने के लिए 39 <img src="assets/golden_nut.webp" class="ui-ico"> खर्च करें?', // Prompt when summoning a UFO with gold
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'तिजोरी', // Small top badge in the Golden Bank header
            title: 'गोल्डन बैंक', // Main header of the premium currency & IAP store
            vip_note: 'किसी भी खरीदारी से लीडरबोर्ड पर हमेशा के लिए <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> अनलॉक होता है!', // Note about permanent VIP status perk
            free_gold_title: 'मुफ़्त सोना', // Title on the rewarded ad card inside the Bank
            free_gold_val: 'प्रति विज्ञापन +15 <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Reward amount for watching an ad in the Bank
            free_gold_btn: 'पाएं', // Button to watch an ad for +15 Golden Nuts
            hit_badge: '🔥 बेस्टसेलर', // Highlight tag on the No Ads bundle
            adfree_title: 'विज्ञापन-मुक्त + VIP', // Title of the permanent ad removal bundle
            adfree_desc: 'सभी ज़बरदस्ती के विज्ञापन हमेशा के लिए हटाएं!', // Description of the ad removal bundle
            pack_handful: 'मुट्ठी भर नट्स', // Gold Pack 1 (100 Golden Nuts)
            pack_pouch: 'नट्स की थैली', // Gold Pack 2 (300 Golden Nuts)
            pack_pouch_tag: '1 केस के लिए काफी', // Green hint tag: enough to buy 1 Golden Case (250 gold)
            pack_crate: 'नट्स की पेटी', // Gold Pack 3 (750 Golden Nuts)
            pack_safe: 'टाइकून तिजोरी', // Gold Pack 4 (2,000 Golden Nuts)
            pack_safe_tag: '+40% फ़ायदा', // Orange best-value tag on the largest gold pack
            purchased: 'खरीदा गया', // Button label once No Ads has been bought
            price_99: '99 यान्स', // Price button for 99 portal currency units (Yans)
            price_249: '249 यान्स', // Price button for 249 Yans
            price_590: '590 यान्स', // Price button for 590 Yans
            price_1390: '1,390 यान्स', // Price button for 1,390 Yans
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 50x फ़ायदा', // Discount badge in the Starter Pack header
            timer_text: 'ऑफ़र समाप्त होने में:', // Label before the 48-hour countdown timer
            golden_nuts: 'सुनहरे नट्स', // Label under "179" in the Starter Pack loot grid
            regular_nuts: 'साधारण नट्स', // Label under "1,799" in the loot grid
            wooden_boxes: 'लकड़ी के बक्से', // Label under "25" in the loot grid
            iron_safes: 'लोहे की तिजोरियां', // Label under "10" in the loot grid
            golden_cases: 'सुनहरे केस', // Label under "5" in the loot grid
            cyber_speaker: '"साइबर"', // Name of the exclusive Epic speaker skin included in the pack
            cyber_speaker_sub: 'स्पीकर (एपिक)', // Subtitle clarifying that "Cyber" is an Epic speaker skin
            no_ads: 'विज्ञापन-मुक्त', // Title of the ad-free tile in the loot grid
            no_ads_sub: 'ज़बरदस्ती के विज्ञापन हमेशा के लिए हटाएं', // Subtitle of the ad-free tile
            vip_status: 'VIP स्टेटस', // Title of the VIP status tile in the loot grid
            vip_status_sub: 'टॉप में स्थायी सुनहरा फ़्रेम', // Subtitle explaining the leaderboard VIP crown/frame
            claim_btn: 'सब पाएं सिर्फ <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2,099 यान्स</s> 39 यान्स में', // Main purchase button with crossed-out original price
            timer_badge: '39 यान्स', // Compact price label on the pulsing HUD Starter Pack button
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'नट्स',
            badge: 'कैश', // Small top badge in the Case Vault header
            title: 'केस वॉल्ट', // Main header of the cases & gacha modal
            safe_tile: 'तिजोरी', // Short label on the free Iron Safe ad tile
            bonus_label: 'वॉल्ट बोनस', // Top label on the wide +15 Golden Nuts ad tile
            bonus_gold: '+15 सुनहरे नट्स', // Reward text on the wide gold ad tile
            wooden_name: 'लकड़ी का बक्सा', // Tier 1 case (earned via tapping)
            iron_name: 'लोहे की तिजोरी', // Tier 2 case (bought with regular nuts)
            gold_name: 'सुनहरा केस', // Tier 3 featured case (bought with Golden Nuts)
            nut_loot_50: '50 नट्स', // Wooden Crate loot item: 50 regular nuts
            nut_loot_150: '150 नट्स', // Wooden Crate loot item: 150 regular nuts
            nut_loot_300: '300 नट्स', // Wooden Crate loot item: 300 regular nuts
            open_btn: 'खोलें', // Button to spin/open a single case
            buy_more_title: 'और खरीदें', // Tooltip on the "+" button
            open_all_title: 'सभी खोलें', // Tooltip on the "×10" batch open button
            in_game: 'खेल में पाएं', // Disabled button text when player has 0 Wooden Crates (earned by playing)
            buy_price: '{price} <img src="{icon}" class="ui-ico-sm"> में खरीदें', // Button text to buy a case when count is 0
            buy_multi_title: 'कई खरीदें', // Tooltip on the "+" multi-buy button
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> पाएं', // Button text on the free ad reward tiles
            ready: 'तैयार!', // Text on the bottom-left 3-min free crate button when ready to claim
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> केस मिला!', // Floating popup above the Cases button when filling the tap bar
            box_label: 'बक्सा: {box}/{needed}', // Progress bar text format for taps until next crate
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'मात्रा चुनें:', // Subtitle in the multi-buy popup (×1, ×5, ×10)
            total: 'कुल:', // Label before the total calculated cost
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count} केस खोले गए', // Header of the ×10 batch opening results modal
            claim_all: 'सब पाएं', // Primary button to close and collect batch rewards
            open_more: '×10 और खोलें', // Secondary button to immediately open another 10 cases
            open_more_count: '×{count} और खोलें', // Secondary button when 2 to 9 cases remain
            new_count: '<span style="color:#2ecc71;">नया: {count} 🪜</span>', // Summary counter of newly unlocked skins in the batch
            new_zero: '<span style="color:#7f8c8d;">नया: 0</span>', // Summary text when all skins in the batch were duplicates
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ नया!</span>', // Badge next to a newly unlocked skin in the batch list
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">डुप्लिकेट (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Badge next to a duplicate skin showing gold compensation
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'केस खुल रहा है...', // Default roulette title
            opening_title: 'खुल रहा है: {name}', // Header title while spinning a specific case
            again_btn: 'फिर से', // Button to spin another case of the same type
            again_count: 'फिर से ({count})', // Button to spin again showing remaining case count
            batch_btn: '×10', // Button inside roulette to batch-open 10 cases at once
            skip_btn: 'छोड़ें ⏩', // Button to skip the spinning animation
            close_btn: 'बंद करें', // Button to close the roulette and return to the Vault
            reroll_btn: '📺 ऐड देखकर रीरोल', // Button to re-spin the roulette by watching an ad
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> रीरोल (नियॉन)', // Free reroll button granted by the Neon ladder perk
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> ऐड देखकर रीरोल', // Ad reroll button with custom TV icon
            duplicate: 'डुप्लिकेट → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Result text when the spun skin is already owned
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'पर्क विवरण', // Default placeholder in the detailed ladder preview modal
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'दैनिक इनाम', // Header of the 7-day login calendar modal
            subtitle: 'हर रोज़ खेलें! 7वें दिन पाएं खास सीढ़ी स्किन।', // Subtitle explaining the 7-day streak
            missed_alert: '⚠️ आपका एक दिन छूट गया!', // Warning shown when the player breaks their daily login streak
            restore_streak: 'स्ट्रीक बचाएं', // Button to save the login streak by watching an ad
            reset_day1: 'दिन 1', // Button to reset the login streak back to Day 1
            day7_title: 'दिन 7: महा पुरस्कार', // Week 1 Day 7 banner title
            day7_desc: '"कैलेंडर" स्किन (एपिक)', // Week 1 Day 7 prize description
            double_ad: '▶ ऐड देखकर 2x करें', // Button to claim 2x daily reward via ad
            claim_normal: 'साधारण इनाम लें', // Button to claim 1x daily reward without ad
            day_badge: 'दिन {day}', // Day number header on calendar grid cards (Day 1 .. Day 6)
            day7_title_loop: 'दिन 7: शानदार इनाम', // Week 2+ Day 7 banner title (after skin is already owned)
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> सुनहरे केस', // Week 2+ Day 7 reward description
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">आज!</span>', // Badge on Day 7 card when ready to claim
            double_claim_loop: '▶ ऐड देखकर 2x करें (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to double Week 2+ Day 7 reward to 6 Golden Cases
            claim_normal_loop: 'साधारण इनाम लें (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to claim regular Week 2+ Day 7 reward (3 Golden Cases)
            claim_skin_btn: '"कैलेंडर" स्किन पाएं!', // Button to claim the exclusive skin on Week 1 Day 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ लिया गया</span>', // Badge when Day 7 is completed
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> दिन 7</span>', // Locked badge on Day 7 during Days 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'ऐड स्ट्रीक', // Header of the daily 1-10 ad watch reward track
            reset_timer: 'रीसेट में समय:', // Label before the midnight reset countdown
            footer: 'गेम में देखा गया हर विज्ञापन इसमें गिना जाता है।', // Footer note explaining how to advance the track
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ लिया गया</span>', // Status on already collected steps
            claim_btn: 'पाएं', // Button to claim an unlocked step reward
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} विज्ञापन</span>', // Requirement badge on locked steps
            popup_safe: '+1 तिजोरी!', // Floating feedback popup when claiming the free Iron Safe
            popup_nuts: '+600 नट्स!', // Floating feedback popup when claiming +600 free nuts
            popup_gold: '+{gold} सोना!', // Floating feedback popup when claiming +15 free gold
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> नट्स' }, // Step 1 reward
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15मि)' }, // Step 2 reward: +20 Luck for 15 minutes
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 3 reward: 5 Golden Nuts
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> नट्स' }, // Step 4 reward: 600 regular nuts
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> तिजोरी' }, // Step 5 reward: 1 Iron Safe
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> टर्बो 3x (3मि)' }, // Step 6 reward: 3x Turbo boost for 3 minutes
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 7 reward: 15 Golden Nuts
            { step: 8, title: '+1,000 <img src="assets/nut.webp" class="ui-ico"> नट्स' }, // Step 8 reward: 1,000 regular nuts
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 9 reward: 25 Golden Nuts
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> "बिलबोर्ड" स्किन' }, // Step 10 grand prize: Epic Billboard ladder skin
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Day 1: 500 regular nuts
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Day 2: 1 Iron Safe
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 3: 1 Golden Case
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 4: 75 Golden Nuts
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 5: 2 Golden Cases
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 6: 100 Golden Nuts
            { day: 7, text: '"कैलेंडर" स्किन' }, // Day 7: Exclusive Calendar ladder skin
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'वापसी पर स्वागत है!', // Header when returning to the game after >1 minute away
            away_time: 'आप दूर रहे: {time}', // Full time away line
            away_prefix: 'आप दूर रहे:', // Prefix before away duration
            limit_label: 'सीमा: {limit}', // Full offline accumulation limit text
            limit_prefix: 'सीमा:', // Prefix before max offline time cap
            speaker_earned: 'स्पीकर की कमाई:', // Meters generated passively by the Subwoofer while away
            newton_earned: 'क्रैडल की कमाई:', // Meters generated passively by the Newton Cradle while away
            cases_found: 'मिले बक्से: {count} नग', // Passive Wooden Crates found while away
            cases_found_prefix: 'मिले बक्से:', // Prefix before crates count
            total_earned: 'कुल हासिल ऊंचाई:', // Header above total offline meters earned
            double_ad: '▶ ऐड देखकर 2x करें', // Button to double offline earnings via ad
            claim_normal: 'साधारण इनाम लें', // Button to collect base offline earnings
            limit_3h: '3 घंटे', // Extended offline cap (with Deep Space ladder perk)
            limit_30m: '30 मिनट', // Base offline cap (30 minutes)
            double_btn: '▶ ऐड देखकर 2x करें (+{meters} मी, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Dynamic button text showing exact doubled amounts
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'पहुंचे', // Red stamp over the milestone postcard illustration
            double_ad: '▶ ऐड देखकर 2x करें (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to double milestone gold reward via ad
            claim_normal: 'साधारण इनाम लें (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to collect base milestone gold reward
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Fullscreen achievement postcards triggered upon reaching major altitudes:
            { height: 250, name: 'छतें', desc: 'ऊपर सिर्फ पक्षी और आसमान छूता किराया। पहले सौ मीटर पार!' },
            { height: 1000, name: 'तूफ़ानी मोर्चा', desc: 'गीले पायदानों को कसकर पकड़ें। आगे खुला आसमान और गर्जन है!' },
            { height: 10000, name: 'समताप मंडल', desc: 'क्रूज़िंग ऊंचाई। नीचे पृथ्वी का घुमाव साफ़ दिखाई दे रहा है।' },
            { height: 100000, name: 'अंतरिक्ष', desc: 'गुरुत्वाकर्षण ने हार मान ली। आप आधिकारिक तौर पर शून्य गुरुत्वाकर्षण में हैं!' },
            { height: 1000000, name: 'मंदाकिनी', desc: 'दस लाख मीटर। आप कल्पना से भी कहीं आगे निकल आए हैं।' },
            { height: 10000000, name: 'महा शून्य', desc: 'नक्शे का अंत? नहीं, बस पूर्ण शून्यता की शुरुआत।' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Lore entries shown in the Logbook popup card when clicking altitude checkpoints on the right rail:
            { id: 0, name: 'पुराना आँगन', desc: 'आपका अपना इलाका। कंक्रीट के जंगल और पुराने लकड़ी के पायदानों की चरमराहट। यहीं से शुरू होती है आपकी अनंत चढ़ाई।' },
            { id: 1, name: 'छतें', desc: 'टीवी एंटेना, कबूतरों और शहर के ट्रैफ़िक से भी ऊपर। पहले सौ मीटर पीछे छूट गए, और हवा ताज़ा हो रही है।' },
            { id: 2, name: 'तूफ़ानी मोर्चा', desc: 'ऊंचे घने बादल, अंधा कर देने वाली बिजली और ओज़ोन की तीखी महक। पायदानों पर फिसलन है—मजबूती से पकड़ें!' },
            { id: 3, name: 'समताप मंडल', desc: 'पृथ्वी के वायुमंडल का किनारा। आसमान गहरा नीला हो रहा है और धरती का गोला साफ़ दिख रहा है।' },
            { id: 4, name: 'गहरा अंतरिक्ष', desc: 'खामोश उपग्रहों की कक्षा और समयहीन शून्यता। गुरुत्वाकर्षण थम चुका है—सीढ़ी ही ऊपर जाने का एकमात्र रास्ता है।' },
            { id: 5, name: 'मंदाकिनी', desc: 'दूर की आकाशगंगाओं के भंवर, चमकती नीहारिकाएं और ब्रह्मांडीय धूल। सांसारिक चिंताओं से दस लाख मीटर ऊपर।' },
            { id: 6, name: 'महा शून्य', desc: 'ज्ञात ब्रह्मांड के छोर पर स्थित घटना क्षितिज। परम ऊंचाई जहां समय ब्रह्मांडीय अनंतता में विलीन हो जाता है।' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Current zone names displayed below the main altitude counter:
            khrushchevka: 'पुराना आँगन',
            roofs: 'छतें',
            storm_front: 'तूफ़ानी मोर्चा',
            stratosphere: 'समताप मंडल',
            open_space: 'गहरा अंतरिक्ष',
            milky_way: 'मंदाकिनी',
            endless: 'महा शून्य',

            // Hover tooltips (title) on the 7 altitude tracker checkpoints:
            checkpoint_0: '0 मी — पुराना आँगन',
            checkpoint_250: '250 मी — छतें',
            checkpoint_1000: '1,000 मी — तूफ़ानी मोर्चा',
            checkpoint_10000: '10,000 मी — समताप मंडल',
            checkpoint_100000: '100,000 मी — गहरा अंतरिक्ष',
            checkpoint_1000000: '1,000,000 मी — मंदाकिनी',
            checkpoint_10000000: '10,000,000 मी — महा शून्य',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'खोजा गया', // Green badge when the stage has been reached
            signal_lost_badge: 'सिग्नल टूटा', // Red badge when the stage is still locked
            unknown_sector: 'अज्ञात सेक्टर', // Masked title for locked stages
            height_label: 'ऊंचाई: {height} मी', // Altitude label on unlocked stages
            target_label: 'लक्ष्य: {target} मी ({remaining} मी बाकी)', // Progress required to unlock a stage
            locked_desc: 'सेंसर इस ऊंचाई पर गंभीर विसंगतियों का पता लगा रहे हैं। सिग्नल डेटा डिक्रिप्ट करने के लिए चढ़ाई जारी रखें।', // Sci-fi flavor text for locked stages
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'सहनशीलता परीक्षण', // Header of the 20-minute session timer modal
            challenge_desc: 'मुफ़्त में खास रेट्रो स्किन पाने के लिए गेम में 20 मिनट तक टिके रहें!', // Challenge rules
            skin_name: '"रेट्रो" स्किन', // Name of the 8-bit arcade ladder skin
            ability_label: '<b style="color: #f1c40f;">क्षमता:</b> उड़ता हुआ सिक्का पकड़ें (लूट: 125 <img src="assets/nut.webp" class="ui-ico-sm"> और 15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> तक)।', // Perk description
            time_left: 'बाकी समय:', // Label before the countdown timer
            challenge_complete: 'परीक्षण पूरा हुआ!', // Fullscreen celebration header after 20 minutes
            challenge_reward: 'आप 20 मिनट तक टिके रहे! यह रहा आपका इनाम:', // Celebration subtitle
            epic_skin: 'एपिक "रेट्रो" स्किन', // Featured reward title
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'बोनस', // Badge on the home screen shortcut offer banner
            title: 'गेम को होम स्क्रीन पर जोड़ें और बस एक टैप में चढ़ाई करें!', // Main offer heading
            desc: 'अगले प्रॉम्प्ट में "जोड़ें" पर टैप करें और इनाम आपका है', // Instructions for the browser/platform prompt
            reward_label: 'इंस्टॉल इनाम:', // Label inside the reward pill
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Reward amount
            add_btn: 'जोड़ें (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Primary accept button
            decline_title: 'क्या वाकई आपको इनाम नहीं चाहिए?', // Retention modal header (sad mascot) if player clicks "Later"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> आपका इंतज़ार कर रहे हैं। शॉर्टकट जोड़ने में सिर्फ दो सेकंड लगते हैं!', // Retention description
            decline_claim: '100 <img src="assets/golden_nut.webp" class="ui-ico-sm"> पाएं', // Retention accept button
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'क्लाइंबर्स लीग', // Top badge in the Hall of Fame header
            title: 'हॉल ऑफ फेम', // Main leaderboard title
            season_desc: 'अंतरिक्ष विजेताओं की वैश्विक रैंकिंग', // Default subtitle
            tab_alltime: 'ऑल टाइम', // All-time ranking tab
            tab_week: 'सीज़न (साप्ताहिक)', // Weekly tournament tab
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">रैंक लोड हो रहे हैं...</div>', // Loading state text
            desc_alltime: 'अंतरिक्ष विजेताओं की वैश्विक रैंकिंग', // Subtitle when All Time tab is active
            desc_week: 'हर सोमवार 00:00 बजे रीसेट होता है', // Subtitle when Weekly tab is active
            anon: 'अनाम क्लाइंबर', // Fallback name for unauthorized players
            you_player: 'आप (खिलाड़ी)', // Player's entry name in local/fallback mode
            you_vip: '<span>आप (VIP)</span>', // Sticky bottom card label when player has VIP status
            you: '<span>आप</span>', // Sticky bottom card label without VIP status
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'हॉट कॉन्ट्रैक्ट', // Top badge in the Daily Deal header
            title: 'आज की डील', // Main header of the Daily Deal modal
            timer_label: 'नया कॉन्ट्रैक्ट', // Label before the midnight refresh countdown
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> बदलें ({left}/5)', // Button to reroll the deal via ad (up to 5 times/day)
            reroll_exhausted: 'कोई मौका नहीं बचा (0/5)', // Disabled button text when 0 rerolls remain
            in_collection: '✔ संग्रह में है', // Button text when the featured item is already owned
            buy_btn: 'खरीदें: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Purchase button with old and discounted prices
            not_enough: '{need} और <img src="assets/golden_nut.webp" class="ui-ico-sm"> चाहिए → बैंक', // Button when player lacks gold (redirects to Golden Bank)
            discount_badge: '{rarity} • -{percent}% छूट', // Discount tag above the item name
            unique_ladder: 'अनोखी सीढ़ी', // Fallback description for ladder deals
            luck_desc: 'कुल किस्मत में +{luck}', // Description when the deal features a Lucky Charm
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'सेटिंग्स', // Settings modal header
            language: '🌐 भाषा',
            music: 'संगीत और परिवेश', // Slider 1: background music and wind/space ambience volume
            tap_sounds: 'टैप की आवाज़ें', // Slider 2: ladder tap sound effects volume
            speaker_bass: 'सबवूफ़र बास', // Slider 3: passive Subwoofer bass volume
            newton_hit: 'क्रैडल की टक्कर', // Slider 4: Newton Cradle clack volume
            rewards_sfx: 'इनाम और SFX', // Slider 5: UI, fanfare, and roulette sounds volume
            vibration: 'हैप्टिक फीडबैक', // Checkbox: mobile vibration on tap
            support_btn: 'सहायता / कम्युनिटी', // Footer button for player support
            support_alert: 'गेम कम्युनिटी और सहायता: t.me/your_game_group', // Alert text with community link
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'आपकी किस्मत', // Header of the Luck breakdown & Charms modal
            total_label: 'कुल आँकड़े', // Subtitle under the big green total luck number
            influence_title: 'किस्मत गेमप्ले को कैसे प्रभावित करती है:', // Info box heading
            influence_cases: 'टैप करते समय रैंडम बक्सा मिलने की संभावना बढ़ाती है।', // Bullet 1
            influence_nuts: 'बक्सों में मिलने वाले नट्स की मात्रा बढ़ाती है।', // Bullet 2
            influence_rarity: 'एपिक और लेजेंडरी स्किन्स मिलने के अवसर बढ़ाती है।', // Bullet 3
            breakdown_title: 'आँकड़ों का विवरण:', // Heading above the list of active luck sources
            talismans_title: 'ताबीज़ संग्रह:', // Heading above the horizontal charm shop strip
            buff_label: 'किस्मत', // Short luck label
            plus_luck: '+{value} किस्मत', // Luck bonus format
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">सक्रिय</div>', // Equipped tag on charm card
            equip_btn: 'लगाएं', // Equip button on owned charm card
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> लॉक</div>', // Locked tag on future charms in the chain
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> सीढ़ी "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: active ladder perk luck
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> ताबीज़ "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: equipped charm luck
            cyber_item: '<div>🦾 साइबर स्लॉट "{name}": <b style="color:#00ffff;">+{luck}</b></div>', // Breakdown line: Cyberpunk slot charm luck
            ad_fortune: '<div>📺 ऐड बूस्ट (फॉर्च्यून साइन): <b style="color:#2ecc71;">+15</b></div>', // Breakdown line: temporary +15 Luck ad booster
            no_buffs: '<div>कोई सक्रिय किस्मत बूस्टर नहीं है।</div>', // Shown when total luck is 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'सोना जुड़ गया!', // Default header in the mascot thank-you modal
            default_desc: 'हमारे साथ खेलने के लिए धन्यवाद!', // Default thank-you message
            vip_badge: 'VIP स्टेटस सक्रिय', // Golden badge shown when a purchase grants VIP status
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'स्टार्टर पैक!', // Header after purchasing the Starter Pack
                desc: 'ढेर सारे केस, नट्स, विज्ञापन-मुक्त एक्सेस और "साइबर" स्किन आपकी हुई! समर्थन के लिए धन्यवाद <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'सोना मिला!', // Header after watching an ad for +15 Golden Nuts
                desc: 'विज्ञापन देखने के लिए आपको <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> मिले!',
            },
            adfree: {
                title: 'विज्ञापन-मुक्त!', // Header after purchasing No Ads
                desc: 'ज़बरदस्ती के विज्ञापन हमेशा के लिए हटा दिए गए! गेम को सपोर्ट करने के लिए धन्यवाद ❤️',
            },
            gold_credited: {
                title: 'सोना जुड़ गया!', // Header after purchasing a Gold Pack
                desc: 'आपके बैलेंस में +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> जोड़े गए। समर्थन के लिए धन्यवाद ❤️! चढ़ाई का आनंद लें!',
            },
            shortcut_reward: {
                title: 'सोने का इनाम!', // Header after installing the home screen shortcut
                desc: 'आपके बैलेंस में +100 <img src="assets/golden_nut.webp" class="ui-ico"> जोड़े गए!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">खेलने के लिए धन्यवाद! ❤️</span>',
            },
            deal: {
                buy_btn: 'खरीदें: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Daily Deal purchase button
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'स्टार्टर पैक अनलॉक!', // Floating text when Starter Pack is bought
            sponsor: '📺 स्पॉन्सर: +{nuts} 🔩 और +{gold} 🟡!', // Bonus from Billboard ladder perk after watching any ad
            turbo_boost: 'टर्बो बूस्ट 3x ({seconds}से.)!', // Floating text when Turbo Climb is activated
            luck_boost: 'किस्मत +{value}!', // Floating text when Luck booster is activated
            frenzy: 'नट की बारिश!', // Floating text when Nut Rain is activated
            autotap: 'ऑटोपायलट (15 टैप/से.)!', // Floating text when Autopilot is activated
            turbo_income: 'टर्बो बूस्ट 3x!', // Floating text when buying Turbo with gold
            luck_15: 'किस्मत +15!', // Floating text when buying Luck with gold
            ufo_case: '+1 केस मिला!', // UFO loot pod reward: Wooden Crate
            ufo_safe: '+1 तिजोरी मिली!', // UFO loot pod reward: Iron Safe
            billiard_crit: '🎱 2.5x! +{nuts} 🔩', // Every 8th hit proc from the 8-Ball cradle skin
            planet_turbo: '🌍 टर्बो 3x (20से.)!', // 1% random buff proc from Mini Earth cradle: Turbo
            planet_luck: '🌍 किस्मत +15 (60से.)!', // 1% random buff proc from Mini Earth cradle: Luck
            planet_frenzy: '🌍 नट की बारिश (15से.)!', // 1% random buff proc from Mini Earth cradle: Nut Rain
            hawking: '💥 हॉकिंग विकिरण: +100,000 मी!', // Easter egg burst when unequipping Singularity ladder at max +1,000% charge
            storm_discharge: 'डिस्चार्ज (10x)!', // 10 auto-tap burst from Plasma Globe after 5s of idle time
            absolute_unlocked: 'परम सीढ़ी अनलॉक!', // Floating text when unlocking 100% collection completion skin
            legendary_skin: '👑 लेजेंडरी स्किन: {name}!', // Floating text when unlocking a milestone ladder skin
            retro_coin: '+{nuts} नट्स, +{gold}!', // Floating text when catching the flying Retro coin
            banana_double: '🍌 2x टैप!', // Every 5th tap proc from the Banana ladder
            combo: '🔥 {mult}x ({cps} CPS)', // High-speed tapping multiplier proc from the Scratcher ladder
            case_drop: '+1 बक्सा!', // Random Wooden Crate drop while tapping
            golden_case_milky: 'सुनहरा केस (मंदाकिनी)!', // When Milky Way perk upgrades a dropped safe into a Golden Case
            golden_case: 'सुनहरा केस!', // Golden Case drop (e.g., from Marble Gold perk)
            safe_milky: 'तिजोरी (मंदाकिनी)!', // When Milky Way perk upgrades a dropped crate into an Iron Safe
            safe_luck: 'तिजोरी (किस्मत)!', // When high Luck upgrades a random crate drop into an Iron Safe
            iron_safe: 'लोहे की तिजोरी!', // Iron Safe awarded from tap meter (Golden ladder perk)
            rusty_nut: '+100', // Bonus 100 nuts from Holiday ladder gift
            rusty_box: '+1 बक्सा!', // Bonus crate from Holiday ladder gift
            rusty_safe: '+1 तिजोरी!', // Bonus safe from Holiday ladder gift
            marble_double: '+{value} (2x)', // Doubled tap value
            jackpot: 'जैकपॉट: +1!', // Micro-jackpot (+1 Golden Nut) when opening a Wooden Crate with 30+ Luck
            timed_box: '+1 बक्सा मिला!', // Floating text when collecting the 3-minute free crate
            crystal_gold: '+{value} (क्रिस्टल)!', // +3 Golden Nuts bonus when opening any case with Crystal ladder perk
            shop_spent: '-{cost} मी', // Red floating text when spending meters on shop upgrades
            streak_dupe: 'डुप्लिकेट: +{value}!', // Gold compensation if Billboard skin is already owned on Ad Streak step 10
            streak_billboard: '🎉 बिलबोर्ड स्किन अनलॉक!', // Unlocking Billboard skin on Ad Streak step 10
            calendar_day: 'दिन {day} का इनाम मिला!', // Floating text when claiming daily login reward
            calendar_skin: 'कैलेंडर स्किन अनलॉक!', // Unlocking Calendar skin on Day 7
            calendar_bonus: '+{cases} सुनहरे केस!', // Claiming Week 2+ Day 7 grand reward
            timewarp_report: '+{meters} मी', // Time Machine report part: meters gained
            timewarp_nuts: '+{nuts} नट्स', // Time Machine report part: nuts gained
            timewarp_gold: '+{gold} सोना', // Time Machine report part: gold gained
            magnet_ufo: 'UFO मैग्नेट!', // Floating text when summoning a UFO pod
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'लकड़ी' }, // Default wooden stepladder
            banana: { name: 'केला' }, // Ladder made of bananas and palm leaves
            beer: { name: 'बीयर क्रेट' }, // Ladder stacked from beer cans/bottles
            fire: { name: 'अग्नि' }, // Blazing fire ladder
            fireman: { name: 'फायर एस्केप' }, // Red metal fireman ladder
            plastic: { name: 'प्लास्टिक' }, // Lightweight blue plastic ladder
            rusty: { name: 'जंग लगी' }, // Old corroded metal ladder that drops nuts
            tape: { name: 'डक्ट टेप' }, // Ladder held together with blue duct/insulation tape
            // === RARE ===
            book: { name: 'किताबों का ढेर' }, // Ladder built from stacks of books
            cactus: { name: 'कैक्टस' }, // Prickly green desert cactus ladder
            cement: { name: 'कंक्रीट' }, // Heavy-duty reinforced concrete ladder
            neon: { name: 'नियॉन' }, // Glowing pink/cyan neon tube ladder
            scratch: { name: 'स्क्रैचर' }, // Rope-wrapped cat scratching post ladder
            new_year: { name: 'उत्सव' }, // Festive ladder decorated with lights and ornaments
            // === EPIC ===
            add_stair: { name: 'बिलबोर्ड' }, // High-tech advertising screens ladder
            bone: { name: 'कंकाल' }, // Spooky bone and skull ladder
            crystal: { name: 'क्रिस्टल' }, // Shimmering blue crystal/diamond ladder
            cyber: { name: 'साइबरपंक' }, // Futuristic cybernetic ladder with circuit boards
            golden: { name: 'स्वर्ण' }, // Solid gleaming gold ladder
            goth: { name: 'गॉथिक' }, // Dark wrought-iron gothic gargoyle ladder
            ice: { name: 'बर्फ़ीली' }, // Slippery frozen icicle ladder
            vine: { name: 'आईवी बेल' }, // Overgrown living jungle vine ladder
            calendar_stair: { name: 'कैलेंडर' }, // Clockwork & calendar pages ladder (Day 7 login reward)
            // === LEGENDARY ===
            marble: { name: 'मार्बल गोल्ड' }, // Classical white marble ladder with gold trim
            quant: { name: 'क्वांटम' }, // Glitching dimensional-shifting quantum ladder
            ufo: { name: 'UFO' }, // Alien saucer alloy ladder with green tractor beams
            mimic: { name: 'मिमिक' }, // Monster chest-mimic ladder with teeth and eyes
            // === SPECIAL ===
            retro: { name: 'रेट्रो' }, // 8-bit pixel arcade ladder (20-min trial reward)
            storm: { name: 'तूफ़ानी मोर्चा' }, // Thundercloud & lightning ladder (unlocked at 1,000 m)
            strato: { name: 'समताप मंडल' }, // High-altitude aero ladder (unlocked at 10,000 m)
            cosmo: { name: 'गहरा अंतरिक्ष' }, // Orbital spacecraft ladder (unlocked at 100,000 m)
            milkyway: { name: 'मंदाकिनी' }, // Starry galactic nebula ladder (unlocked at 1,000,000 m)
            endless: { name: 'सिंगुलैरिटी' }, // Black hole event horizon ladder (unlocked at 10,000,000 m)
            absolute: { name: 'एब्सोल्यूट' }, // Ultimate divine ladder (unlocked at 100% game completion)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'शुरुआती क्लासिक। एक अंतहीन यात्रा की शुरुआत की महक।',
            banana: 'हर 5वें टैप को दोगुना करता है।',
            beer: 'किस्मत में +5 बढ़ोतरी।',
            fire: '+7 मी प्रति टैप, बक्से के लिए -10 टैप की ज़रूरत।',
            fireman: 'न्यूटन क्रैडल: +15 मी प्रति हिट',
            plastic: 'न्यूटन क्रैडल 0.15से. तेज़ी से झूलता है',
            rusty: 'हर टैप पर <img src="assets/nut.webp" class="ui-ico"> मिलने की 65% संभावना।',
            tape: 'ब्लैक मार्केट में 10% की छूट।',
            book: 'किस्मत में +7 बढ़ोतरी।',
            cactus: 'सबवूफ़र: +20 मी/से. न्यूटन क्रैडल: +10 मी प्रति हिट',
            cement: 'न्यूटन क्रैडल: +50% ताकत, लेकिन हिट्स 0.3से. धीमे हैं।',
            neon: 'बक्सा खोलने पर मुफ़्त रीरोल',
            scratch: '5+ टैप/सेकंड पर, टैप की ऊंचाई 1.5x बढ़ जाती है',
            new_year: 'हर 150-250 टैप पर बोनस उपहार।',
            bone: 'हर टैप को दोगुना करता है',
            crystal: 'खुला हुआ प्रत्येक बक्सा +3 <img src="assets/golden_nut.webp" class="ui-ico"> देता है।',
            cyber: 'एक अतिरिक्त एक्सेसरी स्लॉट अनलॉक करता है।',
            golden: 'टैप मीटर पूरा होने पर बक्से की जगह लोहे की तिजोरी मिलती है',
            goth: 'अपग्रेड और नट्स वाले केस पर 20% की छूट',
            ice: 'फिसलन भरी चढ़ाई: सीढ़ी पर स्वाइप करके टैप करने की सुविधा',
            vine: 'टैप पावर, सबवूफ़र और क्रैडल को +40% बढ़ाता है।',
            add_stair: 'बूस्टर 50% अधिक समय तक टिकते हैं; देखा गया प्रत्येक विज्ञापन 20 <img src="assets/nut.webp" class="ui-ico"> और 3 <img src="assets/golden_nut.webp" class="ui-ico"> देता है।',
            calendar_stair: 'किस्मत में +10; तिजोरियों से लेजेंडरी स्किन्स मिलने का बोनस अवसर।',
            marble: 'टैप मीटर पूरा होने पर सुनहरा केस मिलने की 25% संभावना।',
            quant: 'पदार्थ विखंडन: मिले नट्स का 20% सुनहरा बन जाता है, बक्से के लिए -50 टैप।',
            ufo: 'हर 30 सेकंड में एलियन लूट पॉड खींचता है',
            mimic: 'मिमिक्री: चुनी गई 2 सीढ़ियों की निष्क्रिय क्षमताओं को कॉपी करता है।',
            retro: 'उड़ता हुआ सिक्का पकड़ें (लूट: 125 <img src="assets/nut.webp" class="ui-ico"> और 15 <img src="assets/golden_nut.webp" class="ui-ico"> तक)।',
            storm: '+20 मी प्रति टैप, लेकिन क्लिक पर मिसफ़ायर की 5% संभावना।',
            strato: 'पतली हवा: सबवूफ़र और क्रैडल की गति 40% बढ़ाती है।',
            cosmo: 'निष्क्रिय संसाधन संचय सीमा को बढ़ाकर 3 घंटे करता है।',
            milkyway: 'जड़त्व बूस्ट: मिले किसी भी केस का टियर +1 अपग्रेड होने की 25% संभावना।',
            endless: 'हर मिनट ऊंचाई की कमाई +50% बढ़ती है (+1,000% तक)। सीढ़ी बदलने पर बोनस रीसेट हो जाता है।',
            absolute: 'विकास का शिखर: एक साथ सभी सीढ़ियों के निष्क्रिय पर्क देता है',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'विंटेज स्पीकर' }, // Default retro wooden speaker
            monster: { name: 'मॉन्स्टर स्टैक' }, // Concert rock amplifier stack
            cyber: { name: 'साइबर स्पीकर' }, // Futuristic neon cyberpunk subwoofer
            cool: { name: 'सुप्रीम सबवूफ़र' }, // Golden stadium-grade sound system
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'बेस सबवूफ़र बीट (पावर x1)',
            monster: '+20% सबवूफ़र पावर। मुफ़्त बक्से के कूलडाउन से -2 मिनट।',
            cyber: '+40% सबवूफ़र पावर। 25% अधिक <img src="assets/nut.webp" class="ui-ico"> और <img src="assets/golden_nut.webp" class="ui-ico"> पाएं!',
            cool: '2x सबवूफ़र पावर। हर तीसरी बीट पर +1 <img src="assets/golden_nut.webp" class="ui-ico"> मिलता है।',
            fallback: 'बास: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'स्टील के गोले' }, // Classic chrome pendulum balls
            billiard: { name: '8-बॉल' }, // Black pool 8-balls
            plasma: { name: 'प्लाज्मा ग्लोब' }, // High-voltage Tesla plasma spheres
            planet: { name: 'मिनी अर्थ' }, // Miniature planet Earth globes
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'बेस न्यूटन क्रैडल हिट (डैमेज x1)',
            billiard: '+25% क्रैडल डैमेज। हर 8वां हिट 2.5x ऊंचाई और 3–5 <img src="assets/nut.webp" class="ui-ico"> देता है।',
            plasma: '+50% क्रैडल डैमेज। विद्युतीकृत: 6+ टैप/से. पर टैप ऊंचाई दोगुनी। 5से. निष्क्रिय रहने पर — 10 ऑटो-टैप।',
            planet: '2x क्रैडल डैमेज, हर हिट पर बक्से के लिए +3 टैप। प्रति सक्रिय बूस्टर सभी स्रोतों में +100%। हिट पर रैंडम बफ़ का 1% अवसर।',
            fallback: 'हिट: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'चार पत्तियों वाला क्लोवर' }, // Tier 1 charm (+3 Luck)
            horseshoe: { name: 'सुनहरी नाल' }, // Tier 2 charm (+5 Luck)
            paw: { name: 'खरगोश का पैर' }, // Tier 3 charm (+8 Luck)
            coin: { name: 'प्राचीन सिक्का' }, // Tier 4 charm (+12 Luck)
            star: { name: 'भाग्यशाली सितारा' }, // Tier 5 charm (+18 Luck)
            key: { name: 'कंकाल चाबी' }, // Tier 6 charm (+25 Luck)
            sock: { name: 'लकी मोज़ा' }, // Tier 7 secret completion charm (+50 Luck)
            sock_alert: '🎉 अविश्वसनीय! आपने सभी ताबीज़ एकत्र कर लिए और सीक्रेट मोज़ा (+50 किस्मत) अनलॉक कर लिया!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'सामान्य',
            rare: 'दुर्लभ',
            epic: 'एपिक',
            legendary: 'लेजेंडरी',
            special: 'विशेष',
        },
    },

    // Вьетнамский (vi) 11
    vi: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder', // Tiêu đề game hiển thị trên tab trình duyệt và cửa hàng
            version: 'Space Stepladder v1.0.0', // Chuỗi phiên bản ở chân trang Cài đặt
            height_display: '{height} m', // Bộ đếm độ cao chính ở giữa phía trên HUD (m = mét)
            height_short: '{height} m', // Định dạng độ cao rút gọn
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Nút BXH "TOP" (dùng chung asset EN)
            starter_banner: 'assets/starter_pack_en.webp', // Banner Gói Khởi Đầu (dùng chung asset EN)
            bank_banner: 'assets/bank_window2_en.webp', // Banner Ngân Hàng Vàng (dùng chung asset EN)
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/chạm', // Độ cao nhận được khi chạm tay vào thang
            meters_per_sec: '{value} m/s', // Độ cao bị động từ Loa Siêu Trầm (mét/giây)
            meters_per_hit: '{value} m/đòn', // Độ cao từ Con Lắc Newton (mét/lần va chạm)
            level: 'Lv. {level}', // Chỉ số cấp độ nâng cấp
            seconds_short: '{value}s', // Định dạng giây rút gọn cho bộ đếm buff (ví dụ: 45s)
            meters: '{value} m', // Giá trị tính bằng mét
            meters_plus: '+{value} m', // Độ cao cộng thêm khi offline
            pieces: '{count} cái', // Số lượng vật phẩm
            min_sec: '{min}p {sec}s', // Định dạng thời gian: phút và giây
            meters_per_click_short: 'm/chạm', // Nhãn lực chạm trong cửa hàng
            meters_per_sec_short: 'm/s', // Nhãn tốc độ Loa Siêu Trầm trong cửa hàng
            meters_per_hit_short: 'm/đòn', // Nhãn lực va chạm Con Lắc Newton trong cửa hàng
            level_short: 'Lv.', // Nhãn viết tắt "Cấp" trên thẻ cửa hàng
            meters_unit: 'm', // Đơn vị "mét" trên nút giá
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Nhận Ốc Vàng', // Chú thích khi rê chuột vào số dư Ốc Vàng
            donate_btn: 'Bank', // Nút mở Ngân Hàng Vàng (giữ 'Bank' theo thuật ngữ game để đảm bảo UI không vỡ; hoặc 'Kho')
            deal_btn: 'Ưu Đãi', // Nút mở cửa sổ Ưu Đãi Hàng Ngày
            top_btn_aria: 'Bảng Vinh Danh', // Nhãn hỗ trợ tiếp cận (aria-label) cho nút BXH
            zen_title: 'Chế độ Zen (Ẩn giao diện)', // Chú thích nút biểu tượng mắt để ẩn UI
            rewards_btn: 'Thưởng', // Nút mở chuỗi xem quảng cáo nhận thưởng
            rewards_count: '{current}/10', // Tiến độ xem quảng cáo trên nút Thưởng
            buffs_btn: 'BUFF', // Nút mở ngăn kéo bổ trợ tạm thời (ngắn gọn, viết hoa)

            // --- Bottom Navigation ---
            shop_btn: 'SHOP', // Nút chính giữa dưới cùng (nâng cấp bằng mét; 'SHOP' hoặc 'CỬA HÀNG')
            skins_btn: 'Trang phục', // Nút mở Kho Trang Bị
            cases_btn_label: 'Rương:', // Nhãn trên nút Kho Rương góc dưới bên trái
            free_box_label: 'Miễn phí:', // Nhãn đếm ngược 3 phút nhận rương miễn phí (nếu hẹp có thể đổi sang 'Free:')

            // --- Action Buttons ---
            close_btn: '✕', // Ký hiệu đóng modal
            close_aria: 'Đóng', // Nhãn hỗ trợ tiếp cận cho nút đóng
            cancel_btn: 'Hủy', // Nút hủy trong hộp thoại xác nhận
            buy_btn: 'Mua', // Nút mua hàng chung
            claim_btn: 'Nhận', // Nút nhận phần thưởng
            equip_btn: 'Trang bị', // Nút trang bị vật phẩm sở hữu
            equipped_badge: 'ĐANG DÙNG', // Huy hiệu trạng thái trên trang bị đang kích hoạt
            later_btn: 'Để sau', // Nút hoãn (nhắc tạo lối tắt)
            not_now_btn: 'Lúc khác', // Nút từ chối lời nhắc giữ chân người chơi
            excellent_btn: 'TUYỆT VỜI!', // Nút đóng modal cảm ơn sau khi mua/nhận vàng
            forward_btn: 'LÊN ĐỈNH CAO!', // Nút đóng modal thông tin Thử Thách Sinh Tồn Retro
            claim_and_equip_btn: 'NHẬN & DÙNG', // Nút sau khi hoàn thành 20 phút thử thách (rút gọn để vừa nút)
            just_claim_btn: 'Chỉ nhận', // Nút nhận mà không trang bị ngay
            selected_btn: 'ĐÃ CHỌN', // Trạng thái nút bị vô hiệu hóa khi skin đã kích hoạt
            buy_for: 'MUA VỚI {price} {currency}', // Nút mua trong modal tùy chỉnh
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Chợ Đen', // Tiêu đề cửa hàng nâng cấp bằng mét
            buy_label: 'MUA', // Nhãn nhỏ phía trên giá tiền trong nút xanh lá
            click_title: 'LỰC CHẠM', // Nâng cấp 1: tăng độ cao khi chạm tay
            speaker_title: 'LOA SIÊU TRẦM', // Nâng cấp 2: tăng mét/giây bị động
            newton_title: 'CON LẮC NEWTON', // Nâng cấp 3: tăng lực va chạm của con lắc
            cost_suffix: '{cost} m', // Giá nâng cấp tính bằng mét
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ BỔ TRỢ', // Tiêu đề ngăn kéo bổ trợ tạm thời
            ad_btn: 'Xem QC', // Nút kích hoạt bổ trợ bằng cách xem video quảng cáo

            fortune_name: 'MAY MẮN', // Tên bổ trợ 1
            fortune_desc: '+15 chỉ số May mắn', // Mô tả bổ trợ 1
            turbo_name: 'LEO SIÊU TỐC', // Tên bổ trợ 2
            turbo_desc: 'Tăng 3x toàn bộ độ cao nhận được', // Mô tả bổ trợ 2
            frenzy_name: 'MƯA ỐC VÍT', // Tên bổ trợ 3
            frenzy_desc: 'Ốc rơi từ trời theo mỗi lần chạm', // Mô tả bổ trợ 3
            autotap_name: 'LÁI TỰ ĐỘNG', // Tên bổ trợ 4
            autotap_desc: 'Tự động chạm thang 15 lần/giây', // Mô tả bổ trợ 4
            timewarp_name: 'CỖ MÁY THỜI GIAN', // Tên bổ trợ 5
            timewarp_desc: 'Nhận ngay 5 phút thu nhập nhàn rỗi', // Mô tả bổ trợ 5
            timewarp_instant: 'Tức thì', // Huy hiệu thay cho bộ đếm giờ của Cỗ Máy Thời Gian
            ufo_name: 'NAM CHÂM UFO', // Tên bổ trợ 6
            ufo_desc: 'Hút một khoang tiếp tế chứa tài nguyên', // Mô tả bổ trợ 6
            ufo_summon: 'Triệu hồi', // Huy hiệu trên ô Nam Châm UFO
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Kho Trang Bị', // Tiêu đề modal trang bị & skin
            tab_ladders: 'Thang', // Tab 1: Ngoại hình thang
            tab_speakers: 'Loa', // Tab 2: Ngoại hình Loa Siêu Trầm
            tab_newton: 'Con lắc', // Tab 3: Ngoại hình Con Lắc Newton
            tab_talismans: 'Bùa', // Tab 4: Bùa may mắn
            available_skins: 'Trang phục hiện có:', // Nhãn trên thanh trượt chọn skin
            no_effects: 'Không có hiệu ứng bổ trợ', // Văn bản mặc định khi vật phẩm không có perk
            default_ladder_desc: 'Thông số thang tiêu chuẩn', // Mô tả thang mặc định
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Ngoại hình', // Nhãn ô: chỉ đổi hiển thị
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Kỹ năng', // Nhãn ô: kích hoạt kỹ năng bị động
            equipped_btn: 'ĐANG DÙNG', // Nút trên vật phẩm đã trang bị
            unequip_btn: 'GỠ BỎ', // Nút gỡ bỏ bùa đang dùng
            equip_btn: 'Trang bị', // Nút trang bị vật phẩm sở hữu
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Theo thứ tự', // Nút bùa bị khóa (mở khóa tuần tự)
            fully_equipped: '✔ ĐÃ DÙNG ĐỦ', // Nút khi cả Ngoại hình và Kỹ năng đều kích hoạt
            equip_all: 'DÙNG CẢ HAI', // Nút trang bị cả Ngoại hình lẫn Kỹ năng bị động
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Bật hình ✓', // Nút bật hiển thị ngoại hình
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Chỉ ngoại hình', // Nút chỉ áp dụng ngoại hình
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Bật kỹ năng ✓', // Nút bật kỹ năng bị động
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Chỉ kỹ năng', // Nút chỉ áp dụng kỹ năng
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Vật phẩm bị khóa', // Thông báo khi chưa sở hữu
            mimic_setup: '⚙️ Cài đặt ô ({slot0}, {slot1})', // Nút cài đặt kỹ năng Bắt Chước
            cyber_setup: '🦾 Chỉnh ô cấy ghép', // Nút mở ô cấy ghép phụ kiện Cyberpunk
            item_fallback: 'Vật phẩm', // Tên dự phòng cho vật phẩm
            luck_plus: '+{luck} May mắn', // Dòng chỉ số may mắn trên thẻ bùa
            slot_empty: 'Trống', // Chỗ trống khi ô Bắt Chước chưa chọn
            slot_default: 'Chỉ số cơ bản', // Mô tả kỹ năng mặc định trong Bắt Chước
            slot_1_selected: '✔ Ô 1', // Huy hiệu thẻ gán cho Ô 1
            slot_2_selected: '✔ Ô 2', // Huy hiệu thẻ gán cho Ô 2
            select_action: '+ Chọn', // Nhắc nhở trên thẻ chưa chọn
            cyber_installed: '✔ Đã cài', // Huy hiệu trên phụ kiện đang dùng trong ô Cyberpunk
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Tùy Chỉnh', // Tiêu đề mặc định
            base_level: 'Cấp cơ bản: {level}', // Cấp độ hiện tại của phụ kiện
            base_level_prefix: 'Cấp cơ bản:', // Tiền tố cấp độ
            power: 'Sức mạnh: {value}', // Nhãn công suất chung
            power_mps: 'Sức mạnh: {value} m/s', // Công suất Loa Siêu Trầm tính bằng mét/giây
            upgrade_btn: 'Nâng cấp', // Nút nâng cấp
            speakers_title: '📻 Loa Siêu Trầm', // Tiêu đề khi tùy chỉnh Loa
            newton_title: '⚪ Con Lắc Newton', // Tiêu đề khi tùy chỉnh Con Lắc Newton
            hit_power: 'Va chạm: {power} m (mỗi {speed}s)', // Chỉ số Con Lắc: mét mỗi đòn và thời gian vung
            upgrade_cost: 'Nâng cấp: {cost} m', // Giá nâng cấp tính bằng mét
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Ô Cyberpunk', // Tiêu đề modal thang Cyberpunk
            desc: 'Chọn 1 kỹ năng phụ từ trang bị đã mở khóa bất kỳ (Loa, Con lắc hoặc Bùa):', // Hướng dẫn
            tab_speakers: 'Loa', // Tab kỹ năng Loa
            tab_newton: 'Con lắc', // Tab kỹ năng Con Lắc Newton
            tab_talismans: 'Bùa', // Tab kỹ năng Bùa May Mắn
            install_btn: 'Cài Cấy Ghép', // Nút lưu kỹ năng phụ đã chọn
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Kỹ Năng Bắt Chước', // Tiêu đề modal thang Bắt Chước
            desc: 'Chọn 2 thang đã mở khóa bất kỳ để sao chép kỹ năng bị động:', // Hướng dẫn chọn thang
            slot1: 'Ô 1', // Tiêu đề ô kỹ năng sao chép 1
            slot2: 'Ô 2', // Tiêu đề ô kỹ năng sao chép 2
            apply_btn: 'Áp Dụng Kỹ Năng', // Nút lưu kỹ năng đã chọn
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Xác Nhận', // Tiêu đề hộp thoại xác nhận dùng vàng
            desc: 'Dùng vàng?', // Câu hỏi xác nhận mặc định
            buy_btn: 'Mua ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Nút mua hiển thị giá Ốc Vàng
            buy_label: 'Mua', // Từ "Mua" trước giá
            buff_title: 'Kích Hoạt Bổ Trợ', // Tiêu đề khi mua bổ trợ bằng vàng
            buff_desc: 'Dùng {cost} <img src="assets/golden_nut.webp" class="ui-ico"> để kích hoạt bổ trợ?', // Mô tả mua bổ trợ
            not_enough_gold: 'Không đủ Ốc Vàng', // Cảnh báo khi thiếu Ốc Vàng
            gear_title: 'Mở Khóa Trang Bị', // Tiêu đề khi mua skin Loa hoặc Con Lắc bằng vàng
            gear_desc: 'Mua "{name}" với giá {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Lời nhắc mua trang bị
            talisman_title: 'Bùa May Mắn Mới', // Tiêu đề khi mua Bùa
            talisman_desc: 'Mua bùa "{name}" với giá {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Lời nhắc mua bùa
            deal_title: 'Ưu Đãi Hôm Nay', // Tiêu đề khi mua vật phẩm Ưu Đãi Hôm Nay
            deal_desc: 'Mua "{name}" với giá {price} <img src="assets/golden_nut.webp" class="ui-ico">?', // Lời nhắc mua ưu đãi
            item_title: 'Mua Vật Phẩm', // Tiêu đề khi mua trực tiếp từ Kho
            item_desc: 'Mua "{name}" với giá {price}?', // Lời nhắc mua vật phẩm
            ufo_desc: 'Dùng 39 <img src="assets/golden_nut.webp" class="ui-ico"> để triệu hồi UFO?', // Lời nhắc triệu hồi UFO
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'KHO CHỨA', // Huy hiệu nhỏ trên đầu Ngân Hàng Vàng
            title: 'NGÂN HÀNG VÀNG', // Tiêu đề chính cửa hàng tiền tệ cao cấp
            vip_note: 'Mọi giao dịch sẽ mở khóa vĩnh viễn <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> trên bảng xếp hạng!', // Ghi chú đặc quyền VIP
            free_gold_title: 'Vàng Miễn Phí', // Tiêu đề thẻ xem quảng cáo nhận vàng
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> mỗi QC', // Lượng thưởng khi xem QC
            free_gold_btn: 'Nhận', // Nút xem quảng cáo nhận vàng
            hit_badge: '🔥 BÁN CHẠY', // Nhãn gói Không Quảng Cáo
            adfree_title: 'Không QC + VIP', // Tiêu đề gói xóa quảng cáo vĩnh viễn
            adfree_desc: 'Xóa bỏ mọi quảng cáo bắt buộc mãi mãi!', // Mô tả gói Không Quảng Cáo
            pack_handful: 'Nắm Ốc Vàng', // Gói 1 (100 Ốc Vàng)
            pack_pouch: 'Túi Ốc Vàng', // Gói 2 (300 Ốc Vàng)
            pack_pouch_tag: 'Đủ 1 Rương', // Thẻ gợi ý: đủ mua 1 Rương Vàng (250 vàng)
            pack_crate: 'Thùng Ốc Vàng', // Gói 3 (750 Ốc Vàng)
            pack_safe: 'Két Đại Gia', // Gói 4 (2.000 Ốc Vàng)
            pack_safe_tag: '+40% GIÁ TRỊ', // Thẻ cam siêu hời trên gói lớn nhất
            purchased: 'Đã Mua', // Trạng thái sau khi đã mua gói Không Quảng Cáo
            price_99: '99 Yan', // Nút giá 99 Yan
            price_249: '249 Yan', // Nút giá 249 Yan
            price_590: '590 Yan', // Nút giá 590 Yan
            price_1390: '1.390 Yan', // Nút giá 1.390 Yan
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 SIÊU HỜI x50', // Huy hiệu giảm giá trên Gói Khởi Đầu
            timer_text: 'Ưu đãi hết hạn sau:', // Nhãn trước đồng hồ đếm ngược 48 giờ
            golden_nuts: 'Ốc Vàng', // Nhãn dưới "179" trong lưới quà
            regular_nuts: 'Ốc Tiêu Chuẩn', // Nhãn dưới "1.799" trong lưới quà
            wooden_boxes: 'Rương Gỗ', // Nhãn dưới "25" trong lưới quà
            iron_safes: 'Két Sắt', // Nhãn dưới "10" trong lưới quà
            golden_cases: 'Rương Vàng', // Nhãn dưới "5" trong lưới quà
            cyber_speaker: '"Cyber"', // Tên skin loa Sử Thi độc quyền trong gói
            cyber_speaker_sub: 'Loa (Sử Thi)', // Phụ đề giải thích
            no_ads: 'KHÔNG QC', // Tiêu đề ô xóa quảng cáo
            no_ads_sub: 'Xóa vĩnh viễn quảng cáo bắt buộc', // Mô tả ô xóa quảng cáo
            vip_status: 'DANH HIỆU VIP', // Tiêu đề ô danh hiệu VIP
            vip_status_sub: 'Khung vàng vĩnh viễn trong TOP', // Mô tả khung VIP BXH
            claim_btn: 'NHẬN TẤT CẢ VỚI <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yan</s> 39 Yan', // Nút mua kèm giá gốc gạch ngang
            timer_badge: '39 Yan', // Nhãn giá ngắn trên nút Gói Khởi Đầu ngoài HUD
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Đai ốc',
            badge: 'KHO TÀNG', // Huy hiệu nhỏ trên đầu Kho Rương
            title: 'KHO RƯƠNG', // Tiêu đề chính modal quay hòm & gacha
            safe_tile: 'Két', // Nhãn ngắn trên ô nhận Két Sắt xem QC miễn phí
            bonus_label: 'Thưởng Kho', // Nhãn phía trên ô xem QC nhận +15 Ốc Vàng
            bonus_gold: '+15 Ốc Vàng', // Nội dung thưởng trên ô QC vàng
            wooden_name: 'Rương Gỗ', // Hòm bậc 1 (kiếm được khi chạm)
            iron_name: 'Két Sắt', // Hòm bậc 2 (mua bằng ốc thường)
            gold_name: 'Rương Vàng', // Hòm bậc 3 (mua bằng Ốc Vàng)
            nut_loot_50: '50 Ốc', // Quà Rương Gỗ: 50 ốc thường
            nut_loot_150: '150 Ốc', // Quà Rương Gỗ: 150 ốc thường
            nut_loot_300: '300 Ốc', // Quà Rương Gỗ: 300 ốc thường
            open_btn: 'Mở', // Nút mở 1 rương
            buy_more_title: 'Mua thêm', // Chú thích trên nút "+"
            open_all_title: 'Mở tất cả', // Chú thích trên nút mở hàng loạt "×10"
            in_game: 'Trong game', // Trạng thái vô hiệu hóa khi có 0 Rương Gỗ (kiếm qua cách chơi)
            buy_price: 'Mua {price} <img src="{icon}" class="ui-ico-sm">', // Nút mua rương khi số lượng là 0
            buy_multi_title: 'Mua nhiều', // Chú thích nút mua số lượng lớn "+"
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Nhận', // Nút nhận thưởng xem QC
            ready: 'SẴN SÀNG!', // Chữ hiển thị khi rương 3 phút đã sẵn sàng
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> RƯƠNG!', // Popup nổi khi đầy thanh chạm
            box_label: 'Rương: {box}/{needed}', // Định dạng thanh tiến trình chạm để lấy rương
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Chọn số lượng:', // Phụ đề trong popup mua nhiều (×1, ×5, ×10)
            total: 'Tổng:', // Nhãn trước tổng chi phí tính toán
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: 'ĐÃ MỞ {count} RƯƠNG', // Tiêu đề modal kết quả mở loạt ×10
            claim_all: 'Nhận Tất Cả', // Nút thu thập toàn bộ phần thưởng
            open_more: 'Mở thêm ×10', // Nút mở tiếp 10 rương
            open_more_count: 'Mở thêm ×{count}', // Nút mở tiếp khi còn 2 đến 9 rương
            new_count: '<span style="color:#2ecc71;">Mới: {count} 🪜</span>', // Tóm tắt số skin mới mở khóa
            new_zero: '<span style="color:#7f8c8d;">Mới: 0</span>', // Tóm tắt khi toàn bộ là skin trùng lặp
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ MỚI!</span>', // Huy hiệu cạnh skin mới
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Trùng lặp (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Huy hiệu trùng lặp kèm vàng đền bù
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Đang mở rương...', // Tiêu đề vòng quay mặc định
            opening_title: 'Đang mở: {name}', // Tiêu đề khi đang quay rương cụ thể
            again_btn: 'Lại', // Nút quay thêm rương cùng loại
            again_count: 'Lại ({count})', // Nút quay lại kèm số rương còn lại
            batch_btn: '×10', // Nút mở hàng loạt 10 rương cùng lúc
            skip_btn: 'Bỏ qua ⏩', // Nút bỏ qua hiệu ứng quay
            close_btn: 'Đóng', // Nút đóng vòng quay về lại Kho Rương
            reroll_btn: '📺 Quay lại bằng QC', // Nút quay lại bằng cách xem quảng cáo
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Quay lại (Neon)', // Nút quay lại miễn phí từ perk thang Neon
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Quay lại bằng QC', // Nút quay lại kèm biểu tượng TV
            duplicate: 'Trùng lặp → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Thông báo khi nhận skin đã sở hữu
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Mô tả kỹ năng', // Văn bản mẫu trong modal xem trước chi tiết thang
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Phần Thưởng Hàng Ngày', // Tiêu đề modal điểm danh 7 ngày
            subtitle: 'Đăng nhập mỗi ngày! Nhận ngoại hình thang độc quyền vào Ngày 7.', // Mô tả chuỗi đăng nhập
            missed_alert: '⚠️ Bạn đã bỏ lỡ một ngày!', // Cảnh báo khi đứt chuỗi đăng nhập
            restore_streak: 'Khôi Phục Chuỗi', // Nút xem QC để cứu chuỗi
            reset_day1: 'Ngày 1', // Nút đặt lại chuỗi về Ngày 1
            day7_title: 'Ngày 7: Siêu Phần Thưởng', // Tiêu đề banner Tuần 1 Ngày 7
            day7_desc: 'Ngoại hình "Lịch" (Sử Thi)', // Mô tả phần thưởng Tuần 1 Ngày 7
            double_ad: '▶ Nhân đôi bằng QC (x2)', // Nút nhân đôi thưởng bằng quảng cáo
            claim_normal: 'Nhận thường', // Nút nhận x1 không xem quảng cáo
            day_badge: 'Ngày {day}', // Nhãn số ngày trên các thẻ (Ngày 1 .. Ngày 6)
            day7_title_loop: 'Ngày 7: Thưởng Lớn', // Tiêu đề banner Ngày 7 từ Tuần 2 trở đi
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Rương Vàng', // Mô tả thưởng Ngày 7 Tuần 2+
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">HÔM NAY!</span>', // Huy hiệu thẻ Ngày 7 khi sẵn sàng nhận
            double_claim_loop: '▶ Nhân đôi bằng QC (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Nút nhân đôi thưởng Tuần 2+
            claim_normal_loop: 'Nhận thường (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Nút nhận thường Tuần 2+
            claim_skin_btn: 'Nhận ngoại hình "Lịch"!', // Nút nhận skin độc quyền Tuần 1 Ngày 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ ĐÃ NHẬN</span>', // Huy hiệu khi Ngày 7 hoàn thành
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Ngày 7</span>', // Huy hiệu Ngày 7 bị khóa trong các ngày 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Chuỗi Xem QC', // Tiêu đề thanh phần thưởng xem 1-10 quảng cáo mỗi ngày
            reset_timer: 'Làm mới sau:', // Đếm ngược đến nửa đêm
            footer: 'Mọi quảng cáo đã xem trong game đều được tính vào tiến trình.', // Ghi chú chân trang
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Đã nhận</span>', // Trạng thái mốc đã nhận
            claim_btn: 'Nhận', // Nút nhận mốc đã mở khóa
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} QC</span>', // Điều kiện mốc bị khóa
            popup_safe: '+1 Két Sắt!', // Popup nổi khi nhận Két Sắt miễn phí
            popup_nuts: '+600 Ốc!', // Popup nổi khi nhận 600 ốc thường
            popup_gold: '+{gold} Vàng!', // Popup nổi khi nhận vàng miễn phí
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Ốc' }, // Thưởng mốc 1
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15p)' }, // Thưởng mốc 2: +20 May mắn trong 15 phút
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Thưởng mốc 3: 5 Ốc Vàng
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Ốc' }, // Thưởng mốc 4: 600 ốc thường
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Két Sắt' }, // Thưởng mốc 5: 1 Két Sắt
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Siêu Tốc 3x (3p)' }, // Thưởng mốc 6: Tăng 3x Siêu Tốc trong 3 phút
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Thưởng mốc 7: 15 Ốc Vàng
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> Ốc' }, // Thưởng mốc 8: 1.000 ốc thường
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Thưởng mốc 9: 25 Ốc Vàng
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Ngoại hình "Biển Quảng Cáo"' }, // Thưởng lớn mốc 10: Thang Biển Quảng Cáo Sử Thi
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Ngày 1: 500 ốc thường
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Ngày 2: 1 Két Sắt
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Ngày 3: 1 Rương Vàng
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Ngày 4: 75 Ốc Vàng
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Ngày 5: 2 Rương Vàng
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Ngày 6: 100 Ốc Vàng
            { day: 7, text: 'Ngoại hình "Lịch"' }, // Ngày 7: Thang Lịch độc quyền
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Chào Mừng Trở Lại!', // Tiêu đề khi quay lại game sau >1 phút
            away_time: 'Bạn đã rời đi trong: {time}', // Dòng thời gian offline đầy đủ
            away_prefix: 'Bạn đã rời đi trong:', // Tiền tố thời gian vắng mặt
            limit_label: 'Giới hạn: {limit}', // Dòng giới hạn tích lũy offline
            limit_prefix: 'Giới hạn:', // Tiền tố giới hạn
            speaker_earned: 'Loa đã dập được:', // Độ cao Loa Siêu Trầm tạo ra khi vắng mặt
            newton_earned: 'Con lắc đã gõ được:', // Độ cao Con Lắc Newton tạo ra khi vắng mặt
            cases_found: 'Rương tìm thấy: {count} cái', // Số Rương Gỗ tìm được khi vắng mặt
            cases_found_prefix: 'Rương tìm thấy:', // Tiền tố số rương
            total_earned: 'Tổng Độ Cao Đạt Được:', // Tiêu đề phía trên tổng số mét kiếm được
            double_ad: '▶ Nhân đôi bằng QC', // Nút nhân đôi thu nhập offline bằng quảng cáo
            claim_normal: 'Nhận thường', // Nút nhận thu nhập gốc
            limit_3h: '3 giờ', // Giới hạn offline mở rộng (với kỹ năng thang Vũ Trụ Sâu)
            limit_30m: '30 phút', // Giới hạn offline cơ bản
            double_btn: '▶ Nhân đôi bằng QC (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Nút động hiển thị chi tiết lượng nhân đôi
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ĐÃ ĐẠT', // Con dấu đỏ trên bưu thiếp cột mốc
            double_ad: '▶ Nhân đôi bằng QC (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Nút nhân đôi thưởng vàng bằng QC
            claim_normal: 'Nhận thường (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Nút nhận thưởng vàng gốc
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Bưu thiếp thành tích toàn màn hình khi chạm các mốc độ cao lớn:
            { height: 250, name: 'Mái Nhà', desc: 'Chỉ có chim chóc và tiền thuê nhà đắt đỏ trên đầu bạn. Một trăm mét đầu tiên đã hoàn thành!' },
            { height: 1000, name: 'Tâm Bão', desc: 'Bám chặt vào các bậc thang ướt đẫm. Phía trước là bầu trời giông bão và sấm sét!' },
            { height: 10000, name: 'Tầng Bình Lưu', desc: 'Độ cao hành trình. Đường cong của Trái Đất đã hiện rõ mồn một bên dưới.' },
            { height: 100000, name: 'Vũ Trụ', desc: 'Trọng lực đầu hàng. Bạn chính thức bước vào trạng thái không trọng lực hoàn toàn!' },
            { height: 1000000, name: 'Ngân Hà', desc: 'Một triệu mét. Bạn đã vượt xa khỏi mọi giới hạn lý trí.' },
            { height: 10000000, name: 'Hư Vô Bất Tận', desc: 'Rìa của bản đồ ư? Không, đó chỉ là điểm khởi đầu của khoảng không tuyệt đối.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Ghi chép cốt truyện trong thẻ Nhật Ký khi bấm vào các điểm kiểm tra bên thanh phải:
            { id: 0, name: 'Khu Phố Cũ', desc: 'Địa bàn quen thuộc của bạn. Rừng bê tông và tiếng cọt kẹt của những bậc gỗ cũ kỹ. Nơi bắt đầu chuyến leo vô tận.' },
            { id: 1, name: 'Mái Nhà', desc: 'Cao hơn ăng-ten TV, bầy bồ câu và dòng xe cộ thành phố. Trăm mét đầu tiên đã ở lại phía sau, không khí bắt đầu trong lành hơn.' },
            { id: 2, name: 'Tâm Bão', desc: 'Những tầng mây dày đặc cuồn cuộn, tia sét lóa mắt và mùi ozone nồng nặc. Bậc thang rất trơn—hãy bám chắc!' },
            { id: 3, name: 'Tầng Bình Lưu', desc: 'Ranh giới bầu khí quyển Trái Đất. Bầu trời chuyển dần sang màu xanh thẫm, để lộ đường cong xanh biếc rực rỡ của địa cầu.' },
            { id: 4, name: 'Vũ Trụ Sâu', desc: 'Quỹ đạo của những vệ tinh thầm lặng và khoảng không vô tận. Trọng lực đã đầu hàng—chiếc thang là con đường duy nhất để đi lên.' },
            { id: 5, name: 'Ngân Hà', desc: 'Vòng xoắn của các thiên hà xa xôi, tinh vân lấp lánh và bụi vũ trụ. Một triệu mét cách xa những muộn phiền nơi trần thế.' },
            { id: 6, name: 'Hư Vô Bất Tận', desc: 'Chân trời sự kiện ở rìa vũ trụ đã biết. Độ cao tối thượng nơi thời gian tan biến vào cõi vô cực.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Tên khu vực hiện tại hiển thị dưới bộ đếm độ cao chính:
            khrushchevka: 'Khu Phố Cũ',
            roofs: 'Mái Nhà',
            storm_front: 'Tâm Bão',
            stratosphere: 'Tầng Bình Lưu',
            open_space: 'Vũ Trụ Sâu',
            milky_way: 'Ngân Hà',
            endless: 'Hư Vô Bất Tận',

            // Chú thích hover trên 7 điểm kiểm tra đo độ cao:
            checkpoint_0: '0 m — Khu Phố Cũ',
            checkpoint_250: '250 m — Mái Nhà',
            checkpoint_1000: '1.000 m — Tâm Bão',
            checkpoint_10000: '10.000 m — Tầng Bình Lưu',
            checkpoint_100000: '100.000 m — Vũ Trụ Sâu',
            checkpoint_1000000: '1.000.000 m — Ngân Hà',
            checkpoint_10000000: '10.000.000 m — Hư Vô Bất Tận',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'ĐÃ KHÁM PHÁ', // Huy hiệu xanh khi khu vực đã đạt tới
            signal_lost_badge: 'MẤT TÍN HIỆU', // Huy hiệu đỏ khi khu vực còn bị khóa
            unknown_sector: 'Khu Vực Chưa Rõ', // Tiêu đề bị che khuất của màn chơi bị khóa
            height_label: 'Độ cao: {height} m', // Nhãn độ cao ở màn chơi đã mở khóa
            target_label: 'Mục tiêu: {target} m (còn {remaining} m)', // Tiến độ cần để mở khóa màn chơi
            locked_desc: 'Cảm biến phát hiện dị thường nghiêm trọng ở độ cao này. Hãy tiếp tục leo để giải mã dữ liệu tín hiệu.', // Lời dẫn sci-fi cho màn chơi bị khóa
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Thử Thách Sinh Tồn', // Tiêu đề modal đếm ngược 20 phút
            challenge_desc: 'Duy trì trong game suốt 20 phút để nhận miễn phí ngoại hình Retro độc quyền!', // Thể lệ thử thách
            skin_name: 'Ngoại hình "Retro"', // Tên ngoại hình thang arcade pixel 8-bit
            ability_label: '<b style="color: #f1c40f;">Kỹ năng:</b> Bắt đồng xu bay (nhận: tối đa 125 <img src="assets/nut.webp" class="ui-ico-sm"> và 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).', // Mô tả perk
            time_left: 'Thời gian còn lại:', // Nhãn trước đồng hồ đếm ngược
            challenge_complete: 'HOÀN THÀNH THỬ THÁCH!', // Tiêu đề chúc mừng sau 20 phút
            challenge_reward: 'Bạn đã trụ vững 20 phút! Đây là phần thưởng của bạn:', // Lời chúc mừng
            epic_skin: 'NGOẠI HÌNH SỬ THI "RETRO"', // Tiêu đề phần thưởng nổi bật
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'THƯỞNG', // Huy hiệu trên banner ưu đãi thêm lối tắt màn hình chính
            title: 'Thêm game vào màn hình chính và leo chỉ với một chạm!', // Tiêu đề ưu đãi
            desc: 'Chạm "Thêm" ở thông báo tiếp theo và phần thưởng sẽ là của bạn', // Hướng dẫn
            reward_label: 'Thưởng cài đặt:', // Nhãn hộp phần thưởng
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Lượng thưởng
            add_btn: 'THÊM (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Nút đồng ý chính
            decline_title: 'Bạn chắc chắn không muốn nhận thưởng chứ?', // Modal giữ chân khi người chơi bấm "Để sau"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> đang chờ bạn. Thêm lối tắt chỉ mất đúng hai giây!', // Mô tả giữ chân
            decline_claim: 'Nhận 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Nút nhận thưởng giữ chân
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'GIẢI ĐẤU NGƯỜI LEO', // Huy hiệu đầu trang Bảng Vinh Danh
            title: 'BẢNG VINH DANH', // Tiêu đề bảng xếp hạng chính
            season_desc: 'Bảng xếp hạng những nhà chinh phục không gian toàn cầu', // Phụ đề mặc định
            tab_alltime: 'Mọi Thời Đại', // Tab xếp hạng tích lũy
            tab_week: 'Mùa Giải (Tuần)', // Tab giải đấu hàng tuần
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Đang tải thứ hạng...</div>', // Trạng thái đang tải
            desc_alltime: 'Bảng xếp hạng những nhà chinh phục không gian toàn cầu', // Phụ đề tab Mọi Thời Đại
            desc_week: 'Làm mới vào mỗi Thứ Hai lúc 00:00', // Phụ đề tab Tuần
            anon: 'Người Leo Ẩn Danh', // Tên mặc định cho người chơi chưa định danh
            you_player: 'Bạn (Người chơi)', // Tên mục người chơi ở chế độ cục bộ
            you_vip: '<span>Bạn (VIP)</span>', // Nhãn thẻ cố định dưới cùng khi có trạng thái VIP
            you: '<span>Bạn</span>', // Nhãn thẻ cố định khi chưa có VIP
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'HỢP ĐỒNG HOT', // Huy hiệu nhỏ trên đầu Ưu Đãi Hôm Nay
            title: 'ƯU ĐÃI TRONG NGÀY', // Tiêu đề modal Ưu Đãi Hôm Nay
            timer_label: 'Hợp đồng mới sau', // Nhãn trước đếm ngược làm mới vào nửa đêm
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Đổi mới ({left}/5)', // Nút đổi ưu đãi bằng quảng cáo
            reroll_exhausted: 'Hết lượt đổi mới (0/5)', // Trạng thái vô hiệu hóa khi hết lượt đổi
            in_collection: '✔ ĐÃ SỞ HỮU', // Nút khi vật phẩm nổi bật đã có trong kho
            buy_btn: 'MUA: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Nút mua kèm giá cũ và giá giảm
            not_enough: 'Cần thêm {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Bank', // Nút chuyển đến Ngân Hàng khi thiếu vàng
            discount_badge: '{rarity} • GIẢM -{percent}%', // Thẻ giảm giá phía trên tên vật phẩm
            unique_ladder: 'Thang Độc Nhất', // Mô tả dự phòng cho ưu đãi thang
            luck_desc: '+{luck} tổng May mắn', // Mô tả khi ưu đãi là Bùa May Mắn
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'CÀI ĐẶT', // Tiêu đề modal Cài đặt
            language: '🌐 Ngôn ngữ',
            music: 'Nhạc & Môi trường', // Thanh trượt 1: âm lượng nhạc nền và không gian
            tap_sounds: 'Âm thanh Chạm', // Thanh trượt 2: âm lượng chạm thang
            speaker_bass: 'Âm Bass của Loa', // Thanh trượt 3: âm lượng bass Loa Siêu Trầm
            newton_hit: 'Va chạm Con lắc', // Thanh trượt 4: âm thanh va đập Con Lắc Newton
            rewards_sfx: 'Phần thưởng & SFX', // Thanh trượt 5: âm lượng giao diện và hiệu ứng
            vibration: 'Rung phản hồi', // Hộp kiểm: rung phản hồi khi chạm
            support_btn: 'Hỗ trợ / Cộng đồng', // Nút hỗ trợ người chơi ở chân trang
            support_alert: 'Cộng đồng game & hỗ trợ: t.me/your_game_group', // Thông báo kèm link cộng đồng
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'May Mắn Của Bạn', // Tiêu đề modal May mắn & Bùa
            total_label: 'Tổng Chỉ Số', // Phụ đề bên dưới số may mắn màu xanh
            influence_title: 'May mắn ảnh hưởng thế nào đến trò chơi:', // Tiêu đề hộp thông tin
            influence_cases: 'Tăng tỷ lệ rơi rương ngẫu nhiên khi chạm.', // Gạch đầu dòng 1
            influence_nuts: 'Tăng lượng ốc nhặt được bên trong rương.', // Gạch đầu dòng 2
            influence_rarity: 'Tăng cơ hội nhận ngoại hình Sử Thi và Huyền Thoại.', // Gạch đầu dòng 3
            breakdown_title: 'Chi Tiết Chỉ Số:', // Tiêu đề danh sách nguồn cộng may mắn
            talismans_title: 'Bộ Sưu Tập Bùa:', // Tiêu đề dải cửa hàng bùa
            buff_label: 'May mắn', // Nhãn ngắn
            plus_luck: '+{value} May mắn', // Định dạng điểm thưởng may mắn
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">ĐÃ DÙNG</div>', // Thẻ đã trang bị trên bùa
            equip_btn: 'Trang bị', // Nút trang bị trên thẻ bùa đã sở hữu
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Khóa</div>', // Thẻ khóa bùa tiếp theo trong chuỗi
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Thang "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Dòng chi tiết: may mắn từ thang
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Bùa "{name}": <b style="color:#2ecc71;">+{luck}</b></div>', // Dòng chi tiết: may mắn từ bùa
            cyber_item: '<div>🦾 Ô Cyber "{name}": <b style="color:#00ffff;">+{luck}</b></div>', // Dòng chi tiết: may mắn từ ô Cyberpunk
            ad_fortune: '<div>📺 Tăng cường QC (Dấu Hiệu May Mắn): <b style="color:#2ecc71;">+15</b></div>', // Dòng chi tiết: bổ trợ may mắn tạm thời từ QC
            no_buffs: '<div>Không có bổ trợ may mắn nào đang hoạt động.</div>', // Hiển thị khi tổng may mắn bằng 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'ĐÃ CỘNG VÀNG!', // Tiêu đề mặc định trong modal cảm ơn
            default_desc: 'Cảm ơn bạn đã đồng hành cùng chúng tôi!', // Lời cảm ơn mặc định
            vip_badge: 'ĐÃ KÍCH HOẠT DANH HIỆU VIP', // Huy hiệu vàng khi giao dịch cấp quyền VIP
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'GÓI KHỞI ĐẦU!', // Tiêu đề sau khi mua Gói Khởi Đầu
                desc: 'Cả núi rương, ốc, xóa sạch quảng cáo và ngoại hình "Cyber" đã thuộc về bạn! Cảm ơn sự ủng hộ của bạn <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'NHẬN ĐƯỢC VÀNG!', // Tiêu đề sau khi xem QC nhận 15 Ốc Vàng
                desc: 'Bạn đã nhận <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> nhờ xem quảng cáo!',
            },
            adfree: {
                title: 'KHÔNG QUẢNG CÁO!', // Tiêu đề sau khi mua gói Không QC
                desc: 'Đã xóa bỏ quảng cáo bắt buộc mãi mãi! Cảm ơn bạn đã ủng hộ trò chơi ❤️',
            },
            gold_credited: {
                title: 'ĐÃ CỘNG VÀNG!', // Tiêu đề sau khi mua Gói Vàng
                desc: 'Đã cộng +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> vào số dư của bạn. Cảm ơn bạn đã ủng hộ ❤️! Chúc bạn leo thật vui!',
            },
            shortcut_reward: {
                title: 'PHẦN THƯỞNG VÀNG!', // Tiêu đề sau khi tạo lối tắt màn hình chính
                desc: 'Đã cộng +100 <img src="assets/golden_nut.webp" class="ui-ico"> vào số dư của bạn!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Cảm ơn bạn đã chơi! ❤️</span>',
            },
            deal: {
                buy_btn: 'MUA: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Nút mua Ưu Đãi Hôm Nay
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'MỞ KHÓA GÓI KHỞI ĐẦU!', // Chữ nổi khi mua Gói Khởi Đầu
            sponsor: '📺 Tài trợ: +{nuts} 🔩 & +{gold} 🟡!', // Thưởng từ perk thang Biển Quảng Cáo sau khi xem QC
            turbo_boost: 'SIÊU TỐC 3x ({seconds}s)!', // Chữ nổi khi kích hoạt Leo Siêu Tốc
            luck_boost: 'MAY MẮN +{value}!', // Chữ nổi khi kích hoạt bổ trợ May Mắn
            frenzy: 'MƯA ỐC VÍT!', // Chữ nổi khi kích hoạt Mưa Ốc Vít
            autotap: 'LÁI TỰ ĐỘNG (15 chạm/s)!', // Chữ nổi khi kích hoạt Lái Tự Động
            turbo_income: 'SIÊU TỐC 3x!', // Chữ nổi khi mua Siêu Tốc bằng vàng
            luck_15: 'MAY MẮN +15!', // Chữ nổi khi mua May Mắn bằng vàng
            ufo_case: '+1 RƯƠNG!', // Quà khoang UFO: Rương Gỗ
            ufo_safe: '+1 KÉT!', // Quà khoang UFO: Két Sắt
            billiard_crit: '🎱 2.5x! +{nuts} 🔩', // Hiệu ứng mỗi đòn thứ 8 của skin con lắc Bi Số 8
            planet_turbo: '🌍 SIÊU TỐC 3x (20s)!', // 1% buff ngẫu nhiên từ con lắc Trái Đất Thu Nhỏ: Siêu Tốc
            planet_luck: '🌍 MAY MẮN +15 (60s)!', // 1% buff ngẫu nhiên từ con lắc Trái Đất Thu Nhỏ: May Mắn
            planet_frenzy: '🌍 MƯA ỐC VÍT (15s)!', // 1% buff ngẫu nhiên từ con lắc Trái Đất Thu Nhỏ: Mưa Ốc
            hawking: '💥 BỨC XẠ HAWKING: +100.000 m!', // Nổ bất ngờ khi gỡ thang Điểm Kỳ Dị ở mức tích lũy tối đa +1.000%
            storm_discharge: 'PHÓNG ĐIỆN (10x)!', // Chuỗi 10 cú tự chạm từ Cầu Plasma sau 5 giây không chạm
            absolute_unlocked: 'ĐÃ MỞ KHÓA TUYỆT ĐỐI!', // Chữ nổi khi mở khóa thang hoàn thành 100% bộ sưu tập
            legendary_skin: '👑 NGOẠI HÌNH HUYỀN THOẠI: {name}!', // Chữ nổi khi mở khóa thang cột mốc
            retro_coin: '+{nuts} ốc, +{gold}!', // Chữ nổi khi bắt đồng xu bay Retro
            banana_double: '🍌 CHẠM 2x!', // Hiệu ứng mỗi lần chạm thứ 5 của thang Chuối
            combo: '🔥 {mult}x ({cps} CPS)', // Hiệu ứng bội số chạm nhanh từ thang Cào Móng
            case_drop: '+1 RƯƠNG!', // Rơi Rương Gỗ ngẫu nhiên khi chạm
            golden_case_milky: 'RƯƠNG VÀNG (NGÂN HÀ)!', // Perk Ngân Hà nâng cấp két rơi thành Rương Vàng
            golden_case: 'RƯƠNG VÀNG!', // Rơi Rương Vàng (từ perk Cẩm Thạch Vàng)
            safe_milky: 'KÉT SẮT (NGÂN HÀ)!', // Perk Ngân Hà nâng cấp rương rơi thành Két Sắt
            safe_luck: 'KÉT SẮT (MAY MẮN)!', // May mắn cao nâng cấp rương rơi thành Két Sắt
            iron_safe: 'KÉT SẮT!', // Thưởng Két Sắt từ thanh chạm (perk thang Vàng Ròng)
            rusty_nut: '+100', // Thưởng 100 ốc từ quà thang Lễ Hội
            rusty_box: '+1 RƯƠNG!', // Thưởng rương từ quà thang Lễ Hội
            rusty_safe: '+1 KÉT!', // Thưởng két từ quà thang Lễ Hội
            marble_double: '+{value} (2x)', // Nhân đôi giá trị chạm
            jackpot: 'JACKPOT: +1!', // Jackpot nhỏ (+1 Ốc Vàng) khi mở Rương Gỗ với 30+ May Mắn
            timed_box: '+1 RƯƠNG ĐÃ NHẬN!', // Chữ nổi khi nhận rương miễn phí 3 phút
            crystal_gold: '+{value} (Pha Lê)!', // Thưởng +3 Ốc Vàng khi mở bất kỳ hòm nào với thang Pha Lê
            shop_spent: '-{cost} m', // Chữ đỏ bay lên khi tiêu mét nâng cấp cửa hàng
            streak_dupe: 'Trùng lặp: +{value}!', // Vàng đền bù nếu đã sở hữu skin Biển Quảng Cáo ở mốc 10
            streak_billboard: '🎉 MỞ KHÓA SKIN BIỂN QUẢNG CÁO!', // Mở khóa skin Biển Quảng Cáo ở mốc 10
            calendar_day: 'Đã nhận Ngày {day}!', // Chữ nổi khi nhận thưởng điểm danh
            calendar_skin: 'MỞ KHÓA SKIN LỊCH!', // Mở khóa skin Lịch vào Ngày 7
            calendar_bonus: '+{cases} Rương Vàng!', // Nhận thưởng lớn Ngày 7 từ Tuần 2+
            timewarp_report: '+{meters} m', // Báo cáo Cỗ Máy Thời Gian: số mét nhận được
            timewarp_nuts: '+{nuts} ốc', // Báo cáo Cỗ Máy Thời Gian: số ốc nhận được
            timewarp_gold: '+{gold} vàng', // Báo cáo Cỗ Máy Thời Gian: số vàng nhận được
            magnet_ufo: 'NAM CHÂM UFO!', // Chữ nổi khi triệu hồi khoang UFO
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Gỗ' }, // Thang gấp gỗ mặc định
            banana: { name: 'Chuối' }, // Thang kết từ chuối và lá cọ
            beer: { name: 'Két Bia' }, // Thang xếp từ các lon/chai bia
            fire: { name: 'Rực Lửa' }, // Thang lửa rực cháy
            fireman: { name: 'Thoát Hiểm' }, // Thang cứu hỏa kim loại đỏ
            plastic: { name: 'Nhựa' }, // Thang nhựa xanh siêu nhẹ
            rusty: { name: 'Rỉ Sét' }, // Thang kim loại rỉ sét rơi ra ốc
            tape: { name: 'Băng Dính' }, // Thang dán chằng chịt băng keo cách điện
            // === RARE ===
            book: { name: 'Chồng Sách' }, // Thang dựng từ những chồng sách
            cactus: { name: 'Xương Rồng' }, // Thang xương rồng sa mạc đầy gai
            cement: { name: 'Bê Tông' }, // Thang bê tông cốt thép siêu chắc
            neon: { name: 'Neon' }, // Thang ống đèn neon phát sáng xanh/hồng
            scratch: { name: 'Cào Móng' }, // Thang quấn dây thừng cào móng cho mèo
            new_year: { name: 'Lễ Hội' }, // Thang lễ hội trang trí đèn và quả châu
            // === EPIC ===
            add_stair: { name: 'Biển Quảng Cáo' }, // Thang màn hình quảng cáo công nghệ cao
            bone: { name: 'Bộ Xương' }, // Thang xương và đầu lâu ma quái
            crystal: { name: 'Pha Lê' }, // Thang pha lê/kim cương xanh lấp lánh
            cyber: { name: 'Cyberpunk' }, // Thang công nghệ tương lai gắn bảng mạch
            golden: { name: 'Vàng Ròng' }, // Thang đúc bằng vàng khối nguyên chất
            goth: { name: 'Gothic' }, // Thang sắt rèn gothic tối màu kèm tượng quái thú
            ice: { name: 'Băng Giá' }, // Thang cột băng đóng băng trơn trượt
            vine: { name: 'Dây Leo' }, // Thang dây leo rừng rậm rậm rạp
            calendar_stair: { name: 'Lịch' }, // Thang bánh răng đồng hồ và trang lịch (thưởng Ngày 7)
            // === LEGENDARY ===
            marble: { name: 'Cẩm Thạch Vàng' }, // Thang đá cẩm thạch trắng viền vàng cổ điển
            quant: { name: 'Lượng Tử' }, // Thang lượng tử dịch chuyển không gian chập chờn
            ufo: { name: 'UFO' }, // Thang hợp kim đĩa bay phát chùm tia kéo màu xanh
            mimic: { name: 'Bắt Chước' }, // Thang rương quái vật có mắt và răng nanh
            // === SPECIAL ===
            retro: { name: 'Retro' }, // Thang arcade pixel 8-bit (thưởng thử thách 20 phút)
            storm: { name: 'Tâm Bão' }, // Thang mây giông và sấm sét (mở ở 1.000 m)
            strato: { name: 'Tầng Bình Lưu' }, // Thang khí động học trên cao (mở ở 10.000 m)
            cosmo: { name: 'Vũ Trụ Sâu' }, // Thang tàu vũ trụ quỹ đạo (mở ở 100.000 m)
            milkyway: { name: 'Ngân Hà' }, // Thang tinh vân dải ngân hà đầy sao (mở ở 1.000.000 m)
            endless: { name: 'Điểm Kỳ Dị' }, // Thang chân trời sự kiện hố đen (mở ở 10.000.000 m)
            absolute: { name: 'TUYỆT ĐỐI' }, // Thang thần thánh tối thượng (mở khi đạt 100% tiến độ game)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Khởi đầu kinh điển. Thoang thoảng mùi hương của hành trình bất tận.',
            banana: 'Nhân đôi mỗi lần chạm thứ 5.',
            beer: '+5 chỉ số May mắn.',
            fire: '+7 m mỗi lần chạm, giảm 10 lần chạm để nhận rương.',
            fireman: 'Con Lắc Newton: +15 m mỗi đòn',
            plastic: 'Con Lắc Newton vung nhanh hơn 0.15s',
            rusty: '65% cơ hội tìm thấy <img src="assets/nut.webp" class="ui-ico"> sau mỗi lần chạm.',
            tape: 'Giảm giá 10% trong Chợ Đen.',
            book: '+7 chỉ số May mắn.',
            cactus: 'Loa Siêu Trầm: +20 m/s. Con Lắc Newton: +10 m mỗi đòn',
            cement: 'Con Lắc Newton: +50% sức mạnh, nhưng đòn đánh chậm hơn 0.3s.',
            neon: 'Quay lại miễn phí mỗi khi mở rương',
            scratch: 'Khi đạt từ 5 chạm/giây trở lên, độ cao chạm nhân 1.5x',
            new_year: 'Quà tặng thưởng sau mỗi 150-250 lần chạm.',
            bone: 'Nhân đôi mọi lần chạm',
            crystal: 'Mỗi rương mở ra tặng thêm +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Mở khóa thêm một ô phụ kiện.',
            golden: 'Đầy thanh chạm nhận ngay Két Sắt thay vì rương thường',
            goth: 'Giảm giá 20% khi nâng cấp và mua rương bằng ốc',
            ice: 'Leo trơn trượt: cho phép vuốt chạm liên tục trên thang',
            vine: 'Tăng lực chạm, Loa Siêu Trầm và Con Lắc thêm +40%.',
            add_stair: 'Bổ trợ kéo dài hơn 50%; mỗi quảng cáo xem xong tặng 20 <img src="assets/nut.webp" class="ui-ico"> và 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 May mắn; thêm cơ hội nhận skin Huyền Thoại từ két sắt.',
            marble: '25% cơ hội nhận Rương Vàng khi hoàn thành thanh chạm.',
            quant: 'Phân hạch vật chất: 20% số ốc thu được hóa vàng, giảm 50 lần chạm để nhận rương.',
            ufo: 'Hút một khoang tiếp tế ngoài hành tinh mỗi 30 giây',
            mimic: 'Mô phỏng: sao chép kỹ năng bị động của 2 thang đã chọn.',
            retro: 'Bắt đồng xu bay (nhận: tối đa 125 <img src="assets/nut.webp" class="ui-ico"> và 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m mỗi lần chạm, nhưng có 5% cơ hội chạm trượt.',
            strato: 'Không khí loãng: tăng 40% tốc độ Loa Siêu Trầm và Con Lắc.',
            cosmo: 'Tăng giới hạn tích lũy tài nguyên nhàn rỗi lên 3 giờ.',
            milkyway: 'Lực quán tính: 25% cơ hội nâng phẩm cấp rương rơi lên +1 bậc.',
            endless: 'Tăng +50% độ cao mỗi phút (tối đa +1.000%). Đổi thang sẽ đặt lại thưởng.',
            absolute: 'Đỉnh cao tiến hóa: sở hữu kỹ năng bị động của mọi chiếc thang cùng lúc',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Loa Cổ Điển' }, // Loa gỗ retro mặc định (đã bản địa hóa từ Soviet Speaker)
            monster: { name: 'Dàn Loa Khủng' }, // Dàn ampli rock công suất lớn
            cyber: { name: 'Loa Cyber' }, // Loa subwoofer cyberpunk neon tương lai
            cool: { name: 'Loa Siêu Cấp' }, // Hệ thống âm thanh sân vận động dát vàng
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Nhịp Loa Siêu Trầm cơ bản (Sức mạnh x1)',
            monster: '+20% sức mạnh Loa Siêu Trầm. Giảm 2 phút hồi chiêu rương miễn phí.',
            cyber: '+40% sức mạnh Loa Siêu Trầm. Kiếm thêm 25% <img src="assets/nut.webp" class="ui-ico"> và <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: '2x sức mạnh Loa Siêu Trầm. Mỗi nhịp thứ 3 tặng thêm +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Bass: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Bi Thép' }, // Quả cầu mạ chrome cổ điển
            billiard: { name: 'Bi Số 8' }, // Bi bida số 8 màu đen
            plasma: { name: 'Cầu Plasma' }, // Quả cầu plasma điện áp cao Tesla
            planet: { name: 'Trái Đất Thu Nhỏ' }, // Quả địa cầu Trái Đất mini
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Đòn va chạm Con Lắc cơ bản (Sát thương x1)',
            billiard: '+25% sát thương Con Lắc. Mỗi đòn thứ 8 nhận 2.5x độ cao và 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% sát thương Con Lắc. Tích điện: khi đạt 6+ chạm/s sẽ nhân đôi độ cao mỗi chạm. Sau 5s nghỉ — tự chạm 10 lần.',
            planet: '2x sát thương Con Lắc, +3 chạm để nhận rương mỗi đòn. +100% mọi nguồn thu với mỗi bổ trợ đang chạy. 1% cơ hội khi va chạm kích hoạt bổ trợ ngẫu nhiên.',
            fallback: 'Va chạm: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Cỏ Bốn Lá' }, // Bùa bậc 1 (+3 May mắn)
            horseshoe: { name: 'Móng Ngựa Vàng' }, // Bùa bậc 2 (+5 May mắn)
            paw: { name: 'Chân Thỏ' }, // Bùa bậc 3 (+8 May mắn)
            coin: { name: 'Đồng Xu Cổ' }, // Bùa bậc 4 (+12 May mắn)
            star: { name: 'Ngôi Sao May Mắn' }, // Bùa bậc 5 (+18 May mắn)
            key: { name: 'Chìa Khóa Vạn Năng' }, // Bùa bậc 6 (+25 May mắn)
            sock: { name: 'Chiếc Tất May Mắn' }, // Bùa bí mật hoàn thành bộ sưu tập (+50 May mắn)
            sock_alert: '🎉 KHÔNG THỂ TIN ĐƯỢC! Bạn đã thu thập đủ tất cả bùa và mở khóa CHIẾC TẤT BÍ MẬT (+50 May mắn)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'PHỔ THÔNG',
            rare: 'HIẾM',
            epic: 'SỬ THI',
            legendary: 'HUYỀN THOẠI',
            special: 'ĐẶC BIỆT',
        },
    },

    // Français 12
    fr: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder', // Main game title shown in the browser tab and store catalog
            version: 'Space Stepladder v1.0.0', // Version string displayed in the Settings footer
            height_display: '{height} m', // Main altitude counter at the top center of the HUD (m = meters)
            height_short: '{height} m', // Compact altitude format in meters
        },
        assets: {
            top_btn: 'assets/top_en.webp', // Localized "TOP" leaderboard button image
            starter_banner: 'assets/starter_pack_en.webp', // Localized Starter Pack header banner
            bank_banner: 'assets/bank_window2_en.webp', // Localized Golden Bank header banner
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/tap', // Height gained per manual tap/click on the ladder
            meters_per_sec: '{value} m/s', // Passive height income from the hanging Subwoofer (meters per second)
            meters_per_hit: '{value} m/coup', // Auto-clicker income from the swinging Newton Cradle (meters per ball impact)
            level: 'Niv. {level}', // Upgrade level indicator
            seconds_short: '{value}s', // Compact seconds format for buff timers (no space, e.g., 45s)
            meters: '{value} m', // Value in meters
            meters_plus: '+{value} m', // Positive meter gain (used in the Offline Earnings summary)
            pieces: '{count} pcs', // Quantity of items (e.g., crates found)
            min_sec: '{min}m {sec}s', // Duration format: minutes and seconds (e.g., time away)
            meters_per_click_short: 'm/tap', // Unit label for tap power in the shop
            meters_per_sec_short: 'm/s', // Unit label for Subwoofer passive speed in the shop
            meters_per_hit_short: 'm/coup', // Unit label for Newton Cradle hit power in the shop
            level_short: 'Niv.', // Abbreviated "Level" label inside shop cards
            meters_unit: 'm', // Abbreviated "meters" unit on price buttons
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            // --- Currencies & Top Bar ---
            gold_tooltip: 'Obtenir des écrous dorés', // Tooltip (title) when hovering over the Golden Nuts balance
            donate_btn: 'Banque', // Compact button to open the Golden Bank (must be very short, 4-6 chars max)
            deal_btn: 'Offre', // Compact button to open the Daily Deal modal with timer (must be short)
            top_btn_aria: 'Panthéon', // Accessibility label (aria-label) for the Leaderboard button
            zen_title: 'Mode Zen (Masquer l\'UI)', // Tooltip for the eye icon button that hides all UI overlays
            rewards_btn: 'Cadeaux', // Button opening the Ad Streak reward track (shortened from Récompenses for UI fit)
            rewards_count: '{current}/10', // Ad watch progress counter on the Rewards button
            buffs_btn: 'BOOSTS', // Button opening the side drawer with temporary boosters (short, uppercase)

            // --- Bottom Navigation ---
            shop_btn: 'BOUTIQUE', // Main bottom-center button (upgrades bought with meters)
            skins_btn: 'Skins', // Bottom-right button (opens Gear Inventory with skins and accessories)
            cases_btn_label: 'Coffres :', // Label on the bottom-left Case Vault button (followed by case count)
            free_box_label: 'Gratuit :', // Label on the 3-minute free crate timer button (strictly limited width!)

            // --- Action Buttons ---
            close_btn: '✕', // Close modal cross symbol (do not translate)
            close_aria: 'Fermer', // Accessibility label for close buttons
            cancel_btn: 'Annuler', // Cancel action button in confirmation dialogs
            buy_btn: 'Acheter', // Generic purchase button
            claim_btn: 'Obtenir', // Button to collect a free reward or prize
            equip_btn: 'Équiper', // Button to equip an owned skin or item
            equipped_badge: 'ÉQUIPÉ', // Status badge shown on currently active gear
            later_btn: 'Plus tard', // Postpone button (e.g., on the home screen shortcut prompt)
            not_now_btn: 'Pas maintenant', // Decline button on the secondary retention prompt
            excellent_btn: 'GÉNIAL !', // Button to close the mascot thank-you modal after receiving gold/purchases
            forward_btn: 'AU SOMMET !', // Button to close the Retro Endurance Trial info modal
            claim_and_equip_btn: 'PRENDRE & ÉQUIPER', // Button upon completing the 20-min trial (claims and equips both skin & perk)
            just_claim_btn: 'Prendre seul', // Secondary button upon completing the 20-min trial (claims skin without equipping)
            selected_btn: 'ACTIF', // Disabled button state in the customization modal when skin is already active
            buy_for: 'ACHETER POUR {price} {currency}', // Purchase button in the customization modal ({currency} is nut icon)
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Marché noir', // Header title of the meter-based upgrade shop
            buy_label: 'ACHAT', // Small sub-label above the cost inside green purchase buttons (uppercase, short)
            click_title: 'FORCE DU TAP', // Upgrade 1: increases manual tap height gain
            speaker_title: 'SUBWOOFER', // Upgrade 2: increases passive meters per second
            newton_title: 'PENDULE DE NEWTON', // Upgrade 3: increases auto-swinging pendulum impact power
            cost_suffix: '{cost} m', // Upgrade cost in meters
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ BOOSTS', // Header of the slide-out right drawer with temporary buffs
            ad_btn: 'Voir la pub', // Button text to activate a booster by watching a rewarded video

            fortune_name: 'CHANCE', // Booster 1 name (increases drop rates and rare loot chances)
            fortune_desc: '+15 en stat de Chance', // Booster 1 description
            turbo_name: 'TURBO-ASCENSION', // Booster 2 name (triples all height gains)
            turbo_desc: 'Gains de hauteur x3 pour tout', // Booster 2 description (affects taps, speaker, and cradle)
            frenzy_name: 'PLUIE D\'ÉCROUS', // Booster 3 name (every tap guarantees regular nut drops)
            frenzy_desc: 'Des écrous tombent du ciel à chaque tap', // Booster 3 description
            autotap_name: 'PILOTE AUTO', // Booster 4 name (high-speed auto-clicker)
            autotap_desc: 'Tape l\'escabeau 15 fois/s', // Booster 4 description
            timewarp_name: 'SAUT TEMPOREL', // Booster 5 name (instant time jump)
            timewarp_desc: 'Donne 5 min de revenus passifs instantanés', // Booster 5 description (grants 5 minutes of Speaker + Cradle farm)
            timewarp_instant: 'Instantané', // Badge shown instead of a timer on the Time Machine tile
            ufo_name: 'AIMANT À OVNI', // Booster 6 name (summons a flying saucer with a supply pod)
            ufo_desc: 'Attire une capsule de ressources', // Booster 6 description
            ufo_summon: 'Invoquer', // Badge shown instead of a timer on the UFO Magnet tile
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Équipement', // Header title of the equipment & skins modal
            tab_ladders: 'Escabeaux', // Tab 1: Stepladder skins
            tab_speakers: 'Enceintes', // Tab 2: Subwoofer skins
            tab_newton: 'Pendules', // Tab 3: Newton Cradle ball skins
            tab_talismans: 'Amulettes', // Tab 4: Lucky charms / talismans
            available_skins: 'Skins disponibles :', // Label above the horizontal skin selector in the customization modal
            no_effects: 'Aucun effet bonus', // Fallback text when an item has no passive perks
            default_ladder_desc: 'Paramètres standards de l\'escabeau', // Default description for the basic ladder
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin', // Slot banner label: visual appearance only (transmog)
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Atout', // Slot banner label: active passive ability
            equipped_btn: 'ÉQUIPÉ', // Button text on an already equipped item
            unequip_btn: 'RETIRER', // Button text on an equipped charm allowing the player to unequip it
            equip_btn: 'Équiper', // Button text to equip an owned item
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> Dans l\'ordre', // Locked charm button text (charms must be unlocked sequentially)
            fully_equipped: '✔ TOUT ÉQUIPÉ', // Status button in ladder preview when both Skin and Perk are active
            equip_all: 'ÉQUIPER TOUT', // Main button in ladder preview to equip both visual Skin and passive Perk
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin actif ✓', // Toggle button when visual appearance is active
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin seul', // Toggle button to equip visual appearance without changing active perk
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Atout actif ✓', // Toggle button when passive ability is active
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Atout seul', // Toggle button to equip passive ability without changing visual skin
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Objet verrouillé', // Notice shown in ladder preview when the skin is not yet owned
            mimic_setup: '⚙️ Configurer les slots ({slot0}, {slot1})', // Button to open the Mimic ability selector (shows 2 copied ladders)
            cyber_setup: '🦾 Régler le slot bonus', // Button to open the Cyberpunk extra accessory implant selector
            item_fallback: 'Objet', // Generic fallback item name
            luck_plus: '+{luck} Chance', // Short luck bonus description on charm cards
            slot_empty: 'Vide', // Placeholder when a Mimic slot is empty
            slot_default: 'Stats standard', // Fallback perk description inside Mimic configuration
            slot_1_selected: '✔ Slot 1', // Badge on a card assigned to Mimic Slot 1
            slot_2_selected: '✔ Slot 2', // Badge on a card assigned to Mimic Slot 2
            select_action: '+ Choisir', // Prompt on unselected cards in Mimic/Cyberpunk modals
            cyber_installed: '✔ Installé', // Badge on the active accessory inside the Cyberpunk slot modal
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Personnaliser', // Default modal header
            base_level: 'Niveau de base : {level}', // Current upgrade level of the accessory
            base_level_prefix: 'Niveau de base :', // Label before the level number
            power: 'Puissance : {value}', // Generic power output label
            power_mps: 'Puissance : {value} m/s', // Subwoofer output in meters per second
            upgrade_btn: 'Améliorer', // Level-up button label
            speakers_title: '📻 Subwoofer', // Modal header when customizing Speakers
            newton_title: '⚪ Pendule de Newton', // Modal header when customizing Newton Cradle balls
            hit_power: 'Impact : {power} m (toutes les {speed}s)', // Cradle stats: meters per hit and swing interval in seconds
            upgrade_cost: 'Améliorer : {cost} m', // Upgrade button text with meter cost
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Slot Cyberpunk', // Header of the Cyberpunk ladder's special modal
            desc: 'Choisis 1 atout bonus parmi tes équipements débloqués (Enceinte, Pendule ou Amulette) :', // Instructions for selecting an extra passive effect
            tab_speakers: 'Enceintes', // Tab for Speaker perks
            tab_newton: 'Pendules', // Tab for Newton Cradle perks
            tab_talismans: 'Amulettes', // Tab for Lucky Charm perks
            install_btn: 'Installer l\'implant', // Confirm button to save the selected extra perk
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Pouvoirs du Mimique', // Header of the Mimic ladder's special modal
            desc: 'Choisis 2 escabeaux débloqués pour copier leurs atouts passifs :', // Instructions for copying 2 ladder abilities
            slot1: 'Slot 1', // First copied ability slot header
            slot2: 'Slot 2', // Second copied ability slot header
            apply_btn: 'Appliquer les pouvoirs', // Confirm button to save copied abilities
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Confirmation', // Header of the Golden Nuts spend confirmation dialog
            desc: 'Dépenser de l\'or ?', // Default confirmation question
            buy_btn: 'Acheter ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)', // Confirm button showing Golden Nut cost
            buy_label: 'Acheter', // "Buy" word before the cost bracket
            buff_title: 'Activer le boost', // Header when buying a temporary booster with gold
            buff_desc: 'Dépenser {cost} <img src="assets/golden_nut.webp" class="ui-ico"> pour activer le boost ?', // Description when buying a booster
            not_enough_gold: 'Pas assez d\'écrous dorés', // Alert message when player lacks Golden Nuts
            gear_title: 'Débloquer le skin', // Header when buying a Speaker or Cradle skin with gold
            gear_desc: 'Acheter « {name} » pour {price} <img src="assets/golden_nut.webp" class="ui-ico"> ?', // Prompt when buying gear
            talisman_title: 'Nouvelle amulette', // Header when buying a Lucky Charm
            talisman_desc: 'Acheter l\'amulette « {name} » pour {price} <img src="assets/golden_nut.webp" class="ui-ico"> ?', // Prompt when buying a charm
            deal_title: 'Offre du jour', // Header when buying the Daily Deal item
            deal_desc: 'Acheter « {name} » pour {price} <img src="assets/golden_nut.webp" class="ui-ico"> ?', // Prompt when buying the Daily Deal
            item_title: 'Acheter l\'objet', // Header when buying an item directly from the Inventory list
            item_desc: 'Acheter « {name} » pour {price} ?', // Prompt when buying an item from Inventory
            ufo_desc: 'Dépenser 39 <img src="assets/golden_nut.webp" class="ui-ico"> pour invoquer un OVNI ?', // Prompt when summoning a UFO with gold
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'COFFRE', // Small top badge in the Golden Bank header
            title: 'BANQUE D\'OR', // Main header of the premium currency & IAP store
            vip_note: 'Tout achat débloque définitivement le statut <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> au classement !', // Note about permanent VIP status perk
            free_gold_title: 'Or gratuit', // Title on the rewarded ad card inside the Bank
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> par pub', // Reward amount for watching an ad in the Bank
            free_gold_btn: 'Obtenir', // Button to watch an ad for +15 Golden Nuts
            hit_badge: '🔥 POPULAIRE', // Highlight tag on the No Ads bundle
            adfree_title: 'Sans pub + VIP', // Title of the permanent ad removal bundle
            adfree_desc: 'Supprime toutes les pubs forcées à vie !', // Description of the ad removal bundle
            pack_handful: 'Poignée d\'écrous', // Gold Pack 1 (100 Golden Nuts)
            pack_pouch: 'Bourse d\'écrous', // Gold Pack 2 (300 Golden Nuts)
            pack_pouch_tag: 'Vaut un coffre', // Green hint tag: enough to buy 1 Golden Case (250 gold)
            pack_crate: 'Caisse d\'écrous', // Gold Pack 3 (750 Golden Nuts)
            pack_safe: 'Coffre de magnat', // Gold Pack 4 (2,000 Golden Nuts)
            pack_safe_tag: '+40% DE VALEUR', // Orange best-value tag on the largest gold pack
            purchased: 'Acheté', // Button label once No Ads has been bought
            price_99: '99 Yans', // Price button for 99 portal currency units (Yans)
            price_249: '249 Yans', // Price button for 249 Yans
            price_590: '590 Yans', // Price button for 590 Yans
            price_1390: '1 390 Yans', // Price button for 1,390 Yans
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 VALEUR x50', // Discount badge in the Starter Pack header
            timer_text: 'L\'offre expire dans :', // Label before the 48-hour countdown timer
            golden_nuts: 'Écrous dorés', // Label under "179" in the Starter Pack loot grid
            regular_nuts: 'Écrous standards', // Label under "1,799" in the loot grid
            wooden_boxes: 'Caisses en bois', // Label under "25" in the loot grid
            iron_safes: 'Coffres en fer', // Label under "10" in the loot grid
            golden_cases: 'Coffres dorés', // Label under "5" in the loot grid
            cyber_speaker: '« Cyber »', // Name of the exclusive Epic speaker skin included in the pack
            cyber_speaker_sub: 'Enceinte (Épique)', // Subtitle clarifying that "Cyber" is an Epic speaker skin
            no_ads: 'SANS PUB', // Title of the ad-free tile in the loot grid
            no_ads_sub: 'Supprime les pubs forcées à vie', // Subtitle of the ad-free tile
            vip_status: 'STATUT VIP', // Title of the VIP status tile in the loot grid
            vip_status_sub: 'Cadre doré permanent dans le TOP', // Subtitle explaining the leaderboard VIP crown/frame
            claim_btn: 'TOUT PRENDRE POUR <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2 099 Yans</s> 39 Yans', // Main purchase button with crossed-out original price
            timer_badge: '39 Yans', // Compact price label on the pulsing HUD Starter Pack button
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Écrous',
            badge: 'CACHE', // Small top badge in the Case Vault header
            title: 'SALLE DES COFFRES', // Main header of the cases & gacha modal
            safe_tile: 'Coffre', // Short label on the free Iron Safe ad tile
            bonus_label: 'Bonus Réserve', // Top label on the wide +15 Golden Nuts ad tile
            bonus_gold: '+15 écrous dorés', // Reward text on the wide gold ad tile
            wooden_name: 'Caisse en bois', // Tier 1 case (earned via tapping)
            iron_name: 'Coffre en fer', // Tier 2 case (bought with regular nuts)
            gold_name: 'Coffre doré', // Tier 3 featured case (bought with Golden Nuts)
            nut_loot_50: '50 écrous', // Wooden Crate loot item: 50 regular nuts
            nut_loot_150: '150 écrous', // Wooden Crate loot item: 150 regular nuts
            nut_loot_300: '300 écrous', // Wooden Crate loot item: 300 regular nuts
            open_btn: 'Ouvrir', // Button to spin/open a single case
            buy_more_title: 'Acheter plus', // Tooltip on the "+" button
            open_all_title: 'Tout ouvrir', // Tooltip on the "×10" batch open button
            in_game: 'En jeu', // Disabled button text when player has 0 Wooden Crates (earned by playing)
            buy_price: 'Acheter {price} <img src="{icon}" class="ui-ico-sm">', // Button text to buy a case when count is 0
            buy_multi_title: 'Acheter en lot', // Tooltip on the "+" multi-buy button
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Obtenir', // Button text on the free ad reward tiles
            ready: 'PRÊT !', // Text on the bottom-left 3-min free crate button when ready to claim
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> COFFRE !', // Floating popup above the Cases button when filling the tap bar
            box_label: 'Caisse : {box}/{needed}', // Progress bar text format for taps until next crate
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Choisir la quantité :', // Subtitle in the multi-buy popup (×1, ×5, ×10)
            total: 'Total :', // Label before the total calculated cost
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count} COFFRES OUVERTS', // Header of the ×10 batch opening results modal
            claim_all: 'Tout récupérer', // Primary button to close and collect batch rewards
            open_more: 'Ouvrir 10 de plus', // Secondary button to immediately open another 10 cases
            open_more_count: 'Ouvrir {count} de plus', // Secondary button when 2 to 9 cases remain
            new_count: '<span style="color:#2ecc71;">Nouveau : {count} 🪜</span>', // Summary counter of newly unlocked skins in the batch
            new_zero: '<span style="color:#7f8c8d;">Nouveau : 0</span>', // Summary text when all skins in the batch were duplicates
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ NOUVEAU !</span>', // Badge next to a newly unlocked skin in the batch list
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Doublon (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>', // Badge next to a duplicate skin showing gold compensation
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Ouverture du coffre...', // Default roulette title
            opening_title: 'Ouverture : {name}', // Header title while spinning a specific case
            again_btn: 'Encore', // Button to spin another case of the same type
            again_count: 'Encore ({count})', // Button to spin again showing remaining case count
            batch_btn: '×10', // Button inside roulette to batch-open 10 cases at once
            skip_btn: 'Passer ⏩', // Button to skip the spinning animation
            close_btn: 'Fermer', // Button to close the roulette and return to the Vault
            reroll_btn: '📺 Relancer (Pub)', // Button to re-spin the roulette by watching an ad
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Relancer (Néon)', // Free reroll button granted by the Neon ladder perk
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Relancer avec pub', // Ad reroll button with custom TV icon
            duplicate: 'Doublon → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">', // Result text when the spun skin is already owned
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Description de l\'atout', // Default placeholder in the detailed ladder preview modal
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Récompenses du jour', // Header of the 7-day login calendar modal
            subtitle: 'Reviens chaque jour ! Récupère un skin exclusif au Jour 7.', // Subtitle explaining the 7-day streak
            missed_alert: '⚠️ Tu as manqué un jour !', // Warning shown when the player breaks their daily login streak
            restore_streak: 'Sauver la série', // Button to save the login streak by watching an ad
            reset_day1: 'Jour 1', // Button to reset the login streak back to Day 1
            day7_title: 'Jour 7 : Super Récompense', // Week 1 Day 7 banner title
            day7_desc: 'Skin « Calendrier » (Épique)', // Week 1 Day 7 prize description
            double_ad: '▶ Doubler avec pub (x2)', // Button to claim 2x daily reward via ad
            claim_normal: 'Récupérer', // Button to claim 1x daily reward without ad
            day_badge: 'Jour {day}', // Day number header on calendar grid cards (Day 1 .. Day 6)
            day7_title_loop: 'Jour 7 : Grand Prix', // Week 2+ Day 7 banner title (after skin is already owned)
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Coffres dorés', // Week 2+ Day 7 reward description
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">AUJOURD\'HUI !</span>', // Badge on Day 7 card when ready to claim
            double_claim_loop: '▶ Doubler avec pub (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to double Week 2+ Day 7 reward to 6 Golden Cases
            claim_normal_loop: 'Récupérer (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)', // Button to claim regular Week 2+ Day 7 reward (3 Golden Cases)
            claim_skin_btn: 'Obtenir le skin « Calendrier » !', // Button to claim the exclusive skin on Week 1 Day 7
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ RÉCUPÉRÉ</span>', // Badge when Day 7 is completed
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Jour 7</span>', // Locked badge on Day 7 during Days 1-6
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Série de pubs', // Header of the daily 1-10 ad watch reward track
            reset_timer: 'Réinitialisation dans :', // Label before the midnight reset countdown
            footer: 'Chaque pub regardée dans le jeu compte pour la série.', // Footer note explaining how to advance the track
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Récupéré</span>', // Status on already collected steps
            claim_btn: 'Obtenir', // Button to claim an unlocked step reward
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} pubs</span>', // Requirement badge on locked steps
            popup_safe: '+1 Coffre en fer !', // Floating feedback popup when claiming the free Iron Safe
            popup_nuts: '+600 Écrous !', // Floating feedback popup when claiming +600 free nuts
            popup_gold: '+{gold} Or !', // Floating feedback popup when claiming +15 free gold
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Écrous' }, // Step 1 reward
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' }, // Step 2 reward: +20 Luck for 15 minutes
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 3 reward: 5 Golden Nuts
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Écrous' }, // Step 4 reward: 600 regular nuts
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Coffre' }, // Step 5 reward: 1 Iron Safe
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3m)' }, // Step 6 reward: 3x Turbo boost for 3 minutes
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 7 reward: 15 Golden Nuts
            { step: 8, title: '+1 000 <img src="assets/nut.webp" class="ui-ico"> Écrous' }, // Step 8 reward: 1,000 regular nuts
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' }, // Step 9 reward: 25 Golden Nuts
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Skin « Panneau »' }, // Step 10 grand prize: Epic Billboard ladder skin
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' }, // Day 1: 500 regular nuts
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' }, // Day 2: 1 Iron Safe
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 3: 1 Golden Case
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 4: 75 Golden Nuts
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' }, // Day 5: 2 Golden Cases
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' }, // Day 6: 100 Golden Nuts
            { day: 7, text: 'Skin « Calendrier »' }, // Day 7: Exclusive Calendar ladder skin
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Bon retour !', // Header when returning to the game after >1 minute away
            away_time: 'Tu étais absent : {time}', // Full time away line
            away_prefix: 'Tu étais absent :', // Prefix before away duration
            limit_label: 'Limite : {limit}', // Full offline accumulation limit text
            limit_prefix: 'Limite :', // Prefix before max offline time cap
            speaker_earned: 'L\'enceinte a produit :', // Meters generated passively by the Subwoofer while away
            newton_earned: 'Le pendule a frappé :', // Meters generated passively by the Newton Cradle while away
            cases_found: 'Caisses trouvées : {count} pcs', // Passive Wooden Crates found while away
            cases_found_prefix: 'Caisses trouvées :', // Prefix before crates count
            total_earned: 'Hauteur totale gagnée :', // Header above total offline meters earned
            double_ad: '▶ Doubler avec une pub', // Button to double offline earnings via ad
            claim_normal: 'Récupérer', // Button to collect base offline earnings
            limit_3h: '3 heures', // Extended offline cap (with Deep Space ladder perk)
            limit_30m: '30 min', // Base offline cap (30 minutes)
            double_btn: '▶ Doubler avec pub (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)', // Dynamic button text showing exact doubled amounts
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'ATTEINT', // Red stamp over the milestone postcard illustration
            double_ad: '▶ Doubler avec pub (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to double milestone gold reward via ad
            claim_normal: 'Récupérer (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Button to collect base milestone gold reward
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            // Fullscreen achievement postcards triggered upon reaching major altitudes:
            { height: 250, name: 'Toits', desc: 'Seuls les oiseaux et les loyers exorbitants sont au-dessus de toi. Premiers cent mètres franchis !' },
            { height: 1000, name: 'Front orageux', desc: 'Accroche-toi bien aux barreaux mouillés. Ciel ouvert et tonnerre droit devant !' },
            { height: 10000, name: 'Stratosphère', desc: 'Altitude de croisière. La courbure de la Terre est nettement visible en dessous.' },
            { height: 100000, name: 'Espace', desc: 'La gravité abandonne. Te voilà officiellement en apesanteur totale !' },
            { height: 1000000, name: 'Voie lactée', desc: 'Un million de mètres. Tu as dépassé toutes les limites du raisonnable.' },
            { height: 10000000, name: 'Le Grand Vide', desc: 'Bord de la carte ? Non, juste le commencement du néant absolu.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            // Lore entries shown in the Logbook popup card when clicking altitude checkpoints on the right rail:
            { id: 0, name: 'Vieille cour', desc: 'Ton point de départ. Du béton et le grincement de vieilles marches en bois. C\'est ici que commence ton ascension infinie.' },
            { id: 1, name: 'Toits', desc: 'Plus haut que les antennes TV, les pigeons et le trafic urbain. Premiers cent mètres passés, et l\'air se rafraîchit.' },
            { id: 2, name: 'Front orageux', desc: 'Denses nuages colossaux, éclairs aveuglants et odeur d\'ozone. Les barreaux glissent : tiens bon !' },
            { id: 3, name: 'Stratosphère', desc: 'La frontière de l\'atmosphère terrestre. Le ciel vire à l\'outremer profond, révélant la courbe bleue du globe.' },
            { id: 4, name: 'Espace lointain', desc: 'L\'orbite des satellites silencieux et du vide intemporel. La gravité s\'est rendue : l\'escabeau est ta seule issue vers le haut.' },
            { id: 5, name: 'Voie lactée', desc: 'Spirales de galaxies lointaines, nébuleuses scintillantes et poussière cosmique. À un million de mètres des soucis terrestres.' },
            { id: 6, name: 'Le Grand Vide', desc: 'L\'horizon des événements aux confins de l\'univers connu. L\'altitude ultime où le temps se dissout dans l\'infini cosmique.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            // Current zone names displayed below the main altitude counter:
            khrushchevka: 'Vieille cour',
            roofs: 'Toits',
            storm_front: 'Front orageux',
            stratosphere: 'Stratosphère',
            open_space: 'Espace lointain',
            milky_way: 'Voie lactée',
            endless: 'Le Grand Vide',

            // Hover tooltips (title) on the 7 altitude tracker checkpoints:
            checkpoint_0: '0 m — Vieille cour',
            checkpoint_250: '250 m — Toits',
            checkpoint_1000: '1 000 m — Front orageux',
            checkpoint_10000: '10 000 m — Stratosphère',
            checkpoint_100000: '100 000 m — Espace lointain',
            checkpoint_1000000: '1 000 000 m — Voie lactée',
            checkpoint_10000000: '10 000 000 m — Le Grand Vide',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'EXPLORÉ', // Green badge when the stage has been reached
            signal_lost_badge: 'SIGNAL PERDU', // Red badge when the stage is still locked
            unknown_sector: 'Secteur inconnu', // Masked title for locked stages
            height_label: 'Altitude : {height} m', // Altitude label on unlocked stages
            target_label: 'Objectif : {target} m (reste {remaining} m)', // Progress required to unlock a stage
            locked_desc: 'Les capteurs détectent de fortes anomalies à cette altitude. Continue de grimper pour décrypter le signal.', // Sci-fi flavor text for locked stages
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Épreuve d\'endurance', // Header of the 20-minute session timer modal
            challenge_desc: 'Reste en jeu pendant 20 minutes pour remporter un skin Rétro exclusif !', // Challenge rules
            skin_name: 'Skin « Rétro »', // Name of the 8-bit arcade ladder skin
            ability_label: '<b style="color: #f1c40f;">Pouvoir :</b> Attrape la pièce volante (butin : jusqu\'à 125 <img src="assets/nut.webp" class="ui-ico-sm"> et 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).', // Perk description
            time_left: 'Temps restant :', // Label before the countdown timer
            challenge_complete: 'ÉPREUVE RÉUSSIE !', // Fullscreen celebration header after 20 minutes
            challenge_reward: 'Tu as survécu 20 minutes ! Voici ta récompense :', // Celebration subtitle
            epic_skin: 'SKIN ÉPIQUE « RÉTRO »', // Featured reward title
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS', // Badge on the home screen shortcut offer banner
            title: 'Ajoute le jeu à l\'écran d\'accueil et grimpe en un seul tap !', // Main offer heading
            desc: 'Touche « Ajouter » dans le menu suivant et le cadeau est à toi', // Instructions for the browser/platform prompt
            reward_label: 'Cadeau d\'installation :', // Label inside the reward pill
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">', // Reward amount
            add_btn: 'AJOUTER (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)', // Primary accept button
            decline_title: 'Tu refuses vraiment la récompense ?', // Retention modal header (sad mascot) if player clicks "Later"
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> t\'attendent. Créer le raccourci ne prend que deux secondes !', // Retention description
            decline_claim: 'Prendre 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Retention accept button
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'LIGUE DES GRIMPEURS', // Top badge in the Hall of Fame header
            title: 'PANTHÉON', // Main leaderboard title
            season_desc: 'Classement mondial des conquérants de l\'espace', // Default subtitle
            tab_alltime: 'Général', // All-time ranking tab
            tab_week: 'Saison (Hebdo)', // Weekly tournament tab
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Chargement des rangs...</div>', // Loading state text
            desc_alltime: 'Classement mondial des conquérants de l\'espace', // Subtitle when All Time tab is active
            desc_week: 'Réinitialisation chaque lundi à 00:00', // Subtitle when Weekly tab is active
            anon: 'Grimpeur anonyme', // Fallback name for unauthorized players
            you_player: 'Toi (Joueur)', // Player's entry name in local/fallback mode
            you_vip: '<span>Toi (VIP)</span>', // Sticky bottom card label when player has VIP status
            you: '<span>Toi</span>', // Sticky bottom card label without VIP status
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'CONTRAT BRÛLANT', // Top badge in the Daily Deal header
            title: 'OFFRE DU JOUR', // Main header of the Daily Deal modal
            timer_label: 'Nouveau contrat dans', // Label before the midnight refresh countdown
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Changer ({left}/5)', // Button to reroll the deal via ad (up to 5 times/day)
            reroll_exhausted: 'Plus de tirages (0/5)', // Disabled button text when 0 rerolls remain
            in_collection: '✔ POSSÉDÉ', // Button text when the featured item is already owned
            buy_btn: 'ACHETER : <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Purchase button with old and discounted prices
            not_enough: 'Manque {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Banque', // Button when player lacks gold (redirects to Golden Bank)
            discount_badge: '{rarity} • -{percent}%', // Discount tag above the item name
            unique_ladder: 'Escabeau unique', // Fallback description for ladder deals
            luck_desc: '+{luck} à la Chance globale', // Description when the deal features a Lucky Charm
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'PARAMÈTRES', // Settings modal header
            language: '🌐 Langue',
            music: 'Musique & Ambiance', // Slider 1: background music and wind/space ambience volume
            tap_sounds: 'Sons de tap', // Slider 2: ladder tap sound effects volume
            speaker_bass: 'Basses du Subwoofer', // Slider 3: passive Subwoofer bass volume
            newton_hit: 'Impacts du pendule', // Slider 4: Newton Cradle clack volume
            rewards_sfx: 'Récompenses & Effets', // Slider 5: UI, fanfare, and roulette sounds volume
            vibration: 'Vibrations', // Checkbox: mobile vibration on tap
            support_btn: 'Support / Communauté', // Footer button for player support
            support_alert: 'Communauté & support du jeu : t.me/your_game_group', // Alert text with community link
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'Ta Chance', // Header of the Luck breakdown & Charms modal
            total_label: 'Stat globale', // Subtitle under the big green total luck number
            influence_title: 'Effets de la Chance :', // Info box heading
            influence_cases: 'Augmente le taux d\'apparition des caisses en tapant.', // Bullet 1
            influence_nuts: 'Augmente la quantité d\'écrous dans les coffres.', // Bullet 2
            influence_rarity: 'Booste les chances de skins Épiques et Légendaires.', // Bullet 3
            breakdown_title: 'Détail des bonus :', // Heading above the list of active luck sources
            talismans_title: 'Collection d\'amulettes :', // Heading above the horizontal charm shop strip
            buff_label: 'Chance', // Short luck label
            plus_luck: '+{value} Chance', // Luck bonus format
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">ÉQUIPÉ</div>', // Equipped tag on charm card
            equip_btn: 'Équiper', // Equip button on owned charm card
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Verrouillé</div>', // Locked tag on future charms in the chain
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Escabeau « {name} » : <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: active ladder perk luck
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Amulette « {name} » : <b style="color:#2ecc71;">+{luck}</b></div>', // Breakdown line: equipped charm luck
            cyber_item: '<div>🦾 Slot Cyber « {name} » : <b style="color:#00ffff;">+{luck}</b></div>', // Breakdown line: Cyberpunk slot charm luck
            ad_fortune: '<div>📺 Boost pub (Signe de chance) : <b style="color:#2ecc71;">+15</b></div>', // Breakdown line: temporary +15 Luck ad booster
            no_buffs: '<div>Aucun boost de chance actif.</div>', // Shown when total luck is 0
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'OR CRÉDITÉ !', // Default header in the mascot thank-you modal
            default_desc: 'Merci de jouer avec nous !', // Default thank-you message
            vip_badge: 'STATUT VIP ACTIVÉ', // Golden badge shown when a purchase grants VIP status
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'PACK DE DÉPART !', // Header after purchasing the Starter Pack
                desc: 'Une montagne de coffres, d\'écrous, le mode sans pub et le skin « Cyber » sont à toi ! Merci pour ton soutien <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'OR GAGNÉ !', // Header after watching an ad for +15 Golden Nuts
                desc: 'Tu as reçu <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> en regardant une pub !',
            },
            adfree: {
                title: 'SANS PUB !', // Header after purchasing No Ads
                desc: 'Pubs forcées supprimées à vie ! Merci de soutenir notre jeu ❤️',
            },
            gold_credited: {
                title: 'OR CRÉDITÉ !', // Header after purchasing a Gold Pack
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> ajoutés à ton solde. Merci pour ton soutien ❤️ ! Bonne ascension !',
            },
            shortcut_reward: {
                title: 'RÉCOMPENSE EN OR !', // Header after installing the home screen shortcut
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> ajoutés à ton solde !<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Merci d\'avoir joué ! ❤️</span>',
            },
            deal: {
                buy_btn: 'ACHETER : <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">', // Daily Deal purchase button
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        //  Keep these short and punchy — they float on the canvas and fade quickly!
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'PACK DE DÉPART DÉBLOQUÉ !', // Floating text when Starter Pack is bought
            sponsor: '📺 Sponsor : +{nuts} 🔩 & +{gold} 🟡 !', // Bonus from Billboard ladder perk after watching any ad
            turbo_boost: 'TURBO BOOST 3x ({seconds}s) !', // Floating text when Turbo Climb is activated
            luck_boost: 'CHANCE +{value} !', // Floating text when Luck booster is activated
            frenzy: 'PLUIE D\'ÉCROUS !', // Floating text when Nut Rain is activated
            autotap: 'PILOTE AUTO (15 taps/s) !', // Floating text when Autopilot is activated
            turbo_income: 'TURBO BOOST 3x !', // Floating text when buying Turbo with gold
            luck_15: 'CHANCE +15 !', // Floating text when buying Luck with gold
            ufo_case: '+1 CAISSE !', // UFO loot pod reward: Wooden Crate
            ufo_safe: '+1 COFFRE !', // UFO loot pod reward: Iron Safe
            billiard_crit: '🎱 2,5x ! +{nuts} 🔩', // Every 8th hit proc from the 8-Ball cradle skin
            planet_turbo: '🌍 TURBO 3x (20s) !', // 1% random buff proc from Mini Earth cradle: Turbo
            planet_luck: '🌍 CHANCE +15 (60s) !', // 1% random buff proc from Mini Earth cradle: Luck
            planet_frenzy: '🌍 PLUIE D\'ÉCROUS (15s) !', // 1% random buff proc from Mini Earth cradle: Nut Rain
            hawking: '💥 RAYONNEMENT DE HAWKING : +100 000 m !', // Easter egg burst when unequipping Singularity ladder at max +1,000% charge
            storm_discharge: 'DÉCHARGE (10x) !', // 10 auto-tap burst from Plasma Globe after 5s of idle time
            absolute_unlocked: 'ABSOLU DÉBLOQUÉ !', // Floating text when unlocking 100% collection completion skin
            legendary_skin: '👑 SKIN LÉGENDAIRE : {name} !', // Floating text when unlocking a milestone ladder skin
            retro_coin: '+{nuts} écrous, +{gold} !', // Floating text when catching the flying Retro coin
            banana_double: '🍌 TAP x2 !', // Every 5th tap proc from the Banana ladder
            combo: '🔥 {mult}x ({cps} CPS)', // High-speed tapping multiplier proc from the Scratcher ladder
            case_drop: '+1 CAISSE !', // Random Wooden Crate drop while tapping
            golden_case_milky: 'COFFRE DORÉ (VOIE LACTÉE) !', // When Milky Way perk upgrades a dropped safe into a Golden Case
            golden_case: 'COFFRE DORÉ !', // Golden Case drop (e.g., from Marble Gold perk)
            safe_milky: 'COFFRE (VOIE LACTÉE) !', // When Milky Way perk upgrades a dropped crate into an Iron Safe
            safe_luck: 'COFFRE (CHANCE) !', // When high Luck upgrades a random crate drop into an Iron Safe
            iron_safe: 'COFFRE EN FER !', // Iron Safe awarded from tap meter (Golden ladder perk)
            rusty_nut: '+100', // Bonus 100 nuts from Holiday ladder gift
            rusty_box: '+1 CAISSE !', // Bonus crate from Holiday ladder gift
            rusty_safe: '+1 COFFRE !', // Bonus safe from Holiday ladder gift
            marble_double: '+{value} (2x)', // Doubled tap value
            jackpot: 'JACKPOT : +1 !', // Micro-jackpot (+1 Golden Nut) when opening a Wooden Crate with 30+ Luck
            timed_box: '+1 CAISSE OBTENUE !', // Floating text when collecting the 3-minute free crate
            crystal_gold: '+{value} (Cristal) !', // +3 Golden Nuts bonus when opening any case with Crystal ladder perk
            shop_spent: '-{cost} m', // Red floating text when spending meters on shop upgrades
            streak_dupe: 'Doublon : +{value} !', // Gold compensation if Billboard skin is already owned on Ad Streak step 10
            streak_billboard: '🎉 SKIN PANNEAU DÉBLOQUÉ !', // Unlocking Billboard skin on Ad Streak step 10
            calendar_day: 'Jour {day} récupéré !', // Floating text when claiming daily login reward
            calendar_skin: 'SKIN CALENDRIER DÉBLOQUÉ !', // Unlocking Calendar skin on Day 7
            calendar_bonus: '+{cases} coffres dorés !', // Claiming Week 2+ Day 7 grand reward
            timewarp_report: '+{meters} m', // Time Machine report part: meters gained
            timewarp_nuts: '+{nuts} écrous', // Time Machine report part: nuts gained
            timewarp_gold: '+{gold} or', // Time Machine report part: gold gained
            magnet_ufo: 'AIMANT À OVNI !', // Floating text when summoning a UFO pod
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            // === COMMON ===
            wood: { name: 'Bois' }, // Default wooden stepladder
            banana: { name: 'Banane' }, // Ladder made of bananas and palm leaves
            beer: { name: 'Caisse de bière' }, // Ladder stacked from beer cans/bottles
            fire: { name: 'Enflammé' }, // Blazing fire ladder
            fireman: { name: 'Secours' }, // Red metal fireman ladder (shortened for HUD tabs)
            plastic: { name: 'Plastique' }, // Lightweight blue plastic ladder
            rusty: { name: 'Rouillé' }, // Old corroded metal ladder that drops nuts
            tape: { name: 'Adhésif' }, // Ladder held together with blue duct/insulation tape
            // === RARE ===
            book: { name: 'Pile de livres' }, // Ladder built from stacks of books
            cactus: { name: 'Cactus' }, // Prickly green desert cactus ladder
            cement: { name: 'Béton' }, // Heavy-duty reinforced concrete ladder
            neon: { name: 'Néon' }, // Glowing pink/cyan neon tube ladder
            scratch: { name: 'Arbre à chat' }, // Rope-wrapped cat scratching post ladder
            new_year: { name: 'Fêtes' }, // Festive ladder decorated with lights and ornaments
            // === EPIC ===
            add_stair: { name: 'Panneau' }, // High-tech advertising screens ladder
            bone: { name: 'Squelettique' }, // Spooky bone and skull ladder
            crystal: { name: 'Cristal' }, // Shimmering blue crystal/diamond ladder
            cyber: { name: 'Cyberpunk' }, // Futuristic cybernetic ladder with circuit boards
            golden: { name: 'Doré' }, // Solid gleaming gold ladder
            goth: { name: 'Gothique' }, // Dark wrought-iron gothic gargoyle ladder
            ice: { name: 'Glacial' }, // Slippery frozen icicle ladder
            vine: { name: 'Liane' }, // Overgrown living jungle vine ladder
            calendar_stair: { name: 'Calendrier' }, // Clockwork & calendar pages ladder (Day 7 login reward)
            // === LEGENDARY ===
            marble: { name: 'Marbre doré' }, // Classical white marble ladder with gold trim
            quant: { name: 'Quantique' }, // Glitching dimensional-shifting quantum ladder
            ufo: { name: 'OVNI' }, // Alien saucer alloy ladder with green tractor beams
            mimic: { name: 'Mimique' }, // Monster chest-mimic ladder with teeth and eyes
            // === SPECIAL ===
            retro: { name: 'Rétro' }, // 8-bit pixel arcade ladder (20-min trial reward)
            storm: { name: 'Front orageux' }, // Thundercloud & lightning ladder (unlocked at 1,000 m)
            strato: { name: 'Stratosphère' }, // High-altitude aero ladder (unlocked at 10,000 m)
            cosmo: { name: 'Espace lointain' }, // Orbital spacecraft ladder (unlocked at 100,000 m)
            milkyway: { name: 'Voie lactée' }, // Starry galactic nebula ladder (unlocked at 1,000,000 m)
            endless: { name: 'Singularité' }, // Black hole event horizon ladder (unlocked at 10,000,000 m)
            absolute: { name: 'ABSOLU' }, // Ultimate divine ladder (unlocked at 100% game completion)
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Le classique des débuts. Ça sent le départ d\'une longue ascension.',
            banana: 'Double chaque 5e tap.',
            beer: '+5 en stat de Chance.',
            fire: '+7 m par tap, -10 taps requis pour une caisse.',
            fireman: 'Pendule de Newton : +15 m par coup',
            plastic: 'Le pendule oscille 0,15s plus vite',
            rusty: '65% de chances de trouver <img src="assets/nut.webp" class="ui-ico"> à chaque tap.',
            tape: '-10% de réduction au Marché noir.',
            book: '+7 en stat de Chance.',
            cactus: 'Subwoofer : +20 m/s. Pendule de Newton : +10 m par coup',
            cement: 'Pendule de Newton : +50% de puissance, mais coups 0,3s plus lents.',
            neon: 'Relance gratuite à l\'ouverture d\'une caisse',
            scratch: 'À 5+ taps/s, la hauteur par tap est multipliée par 1,5x',
            new_year: 'Cadeau bonus tous les 150-250 taps.',
            bone: 'Double chaque tap',
            crystal: 'Chaque caisse ouverte rapporte +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Débloque un slot d\'accessoire supplémentaire.',
            golden: 'Remplir la jauge de tap donne un coffre en fer au lieu d\'une caisse',
            goth: '-20% sur les améliorations et coffres achetés en écrous',
            ice: 'Montée fluide : permet de glisser le doigt pour taper',
            vine: 'Augmente la force du tap, du Subwoofer et du Pendule de +40%.',
            add_stair: 'Les boosts durent 50% plus longtemps ; chaque pub vue donne 20 <img src="assets/nut.webp" class="ui-ico"> et 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 en Chance ; chance bonus d\'avoir des skins Légendaires dans les coffres.',
            marble: '25% de chances d\'obtenir un coffre doré en complétant la jauge de tap.',
            quant: 'Fission : 20% des écrous gagnés deviennent dorés, -50 taps pour une caisse.',
            ufo: 'Attire une capsule de ressources toutes les 30 secondes',
            mimic: 'Mimétisme : copie les atouts passifs de 2 escabeaux choisis.',
            retro: 'Attrape la pièce volante (butin : jusqu\'à 125 <img src="assets/nut.webp" class="ui-ico"> et 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m par tap, mais 5% de risques de raté au clic.',
            strato: 'Air raréfié : vitesse du Subwoofer et du Pendule accrue de 40%.',
            cosmo: 'Augmente la limite de gain hors-ligne à 3 heures.',
            milkyway: 'Élan cosmique : 25% de chances d\'améliorer le rang d\'une caisse trouvée de +1.',
            endless: 'Gains de hauteur +50% chaque minute (jusqu\'à +1 000%). Changer d\'escabeau réinitialise le bonus.',
            absolute: 'Sommet de l\'évolution : confère les atouts de tous les escabeaux en même temps',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Enceinte vintage' }, // Default retro wooden speaker
            monster: { name: 'Mur de son' }, // Concert rock amplifier stack
            cyber: { name: 'Cyber Subwoofer' }, // Futuristic neon cyberpunk subwoofer
            cool: { name: 'Subwoofer Suprême' }, // Golden stadium-grade sound system
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Basse de base du Subwoofer (Puissance x1)',
            monster: '+20% de puissance du Subwoofer. -2 min sur la caisse gratuite.',
            cyber: '+40% de puissance du Subwoofer. Gagne 25% de <img src="assets/nut.webp" class="ui-ico"> et <img src="assets/golden_nut.webp" class="ui-ico"> en plus !',
            cool: 'Puissance du Subwoofer x2. Chaque 3e beat donne +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Basses : x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Sphères d\'acier' }, // Classic chrome pendulum balls
            billiard: { name: 'Bille n°8' }, // Black pool 8-balls
            plasma: { name: 'Globe plasma' }, // High-voltage Tesla plasma spheres
            planet: { name: 'Mini-Terre' }, // Miniature planet Earth globes
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Impact de base du Pendule (Dégâts x1)',
            billiard: '+25% de dégâts du Pendule. Chaque 8e coup donne 2,5x de hauteur et 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% de dégâts du Pendule. Électrifié : à 6+ taps/s, double la hauteur. Après 5s d\'inactivité — 10 taps auto.',
            planet: 'Dégâts du Pendule x2, +3 taps pour la caisse par coup. +100% à toutes les sources par boost actif. 1% de chance par coup de déclencher un boost aléatoire.',
            fallback: 'Coup : x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Trèfle à 4 feuilles' }, // Tier 1 charm (+3 Luck)
            horseshoe: { name: 'Fer doré' }, // Tier 2 charm (+5 Luck)
            paw: { name: 'Patte de lapin' }, // Tier 3 charm (+8 Luck)
            coin: { name: 'Pièce antique' }, // Tier 4 charm (+12 Luck)
            star: { name: 'Étoile de chance' }, // Tier 5 charm (+18 Luck)
            key: { name: 'Passe-partout' }, // Tier 6 charm (+25 Luck)
            sock: { name: 'Chaussette fétiche' }, // Tier 7 secret completion charm (+50 Luck)
            sock_alert: '🎉 INCROYABLE ! Tu as réuni toutes les amulettes et débloqué la CHAUSSETTE SECRÈTE (+50 Chance) !',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'COMMUN',
            rare: 'RARE',
            epic: 'ÉPIQUE',
            legendary: 'LÉGENDAIRE',
            special: 'SPÉCIAL',
        },
    },

    // Italiano 13
    it: {

        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: 'Space Stepladder',
            version: 'Space Stepladder v1.0.0',
            height_display: '{height} m',
            height_short: '{height} m',
        },
        assets: {
            top_btn: 'assets/top_en.webp',
            starter_banner: 'assets/starter_pack_en.webp',
            bank_banner: 'assets/bank_window2_en.webp',
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/tap',
            meters_per_sec: '{value} m/s',
            meters_per_hit: '{value} m/colpo',
            level: 'Liv. {level}',
            seconds_short: '{value}s',
            meters: '{value} m',
            meters_plus: '+{value} m',
            pieces: '{count} pz',
            min_sec: '{min}m {sec}s',
            meters_per_click_short: 'm/tap',
            meters_per_sec_short: 'm/s',
            meters_per_hit_short: 'm/colpo',
            level_short: 'Liv.',
            meters_unit: 'm',
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            gold_tooltip: 'Ottieni Bulloni d\'Oro',
            donate_btn: 'Banca',
            deal_btn: 'Affare',
            top_btn_aria: 'Hall of Fame',
            zen_title: 'Modalità Zen (Nascondi UI)',
            rewards_btn: 'Premi',
            rewards_count: '{current}/10',
            buffs_btn: 'BOOST',

            shop_btn: 'NEGOZIO',
            skins_btn: 'Skin',
            cases_btn_label: 'Casse:',
            free_box_label: 'Gratis:',

            close_btn: '✕',
            close_aria: 'Chiudi',
            cancel_btn: 'Annulla',
            buy_btn: 'Compra',
            claim_btn: 'Riscatta',
            equip_btn: 'Equipaggia',
            equipped_badge: 'IN USO',
            later_btn: 'Più tardi',
            not_now_btn: 'Non ora',
            excellent_btn: 'FANTASTICO!',
            forward_btn: 'IN CIMA!',
            claim_and_equip_btn: 'RISCATTA E USA',
            just_claim_btn: 'Solo riscatta',
            selected_btn: 'SELEZIONATO',
            buy_for: 'COMPRA A {price} {currency}',
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: 'Mercato Nero',
            buy_label: 'COMPRA',
            click_title: 'POTENZA TAP',
            speaker_title: 'SUBWOOFER',
            newton_title: 'PENDOLO DI NEWTON',
            cost_suffix: '{cost} m',
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ POTENZIAMENTI',
            ad_btn: 'Guarda spot',

            fortune_name: 'FORTUNA',
            fortune_desc: '+15 alla statistica Fortuna',
            turbo_name: 'SCALATA TURBO',
            turbo_desc: 'x3 a tutti i guadagni di quota',
            frenzy_name: 'PIOGGIA DI BULLONI',
            frenzy_desc: 'Piovono bulloni a ogni tap',
            autotap_name: 'PILOTA AUTOMATICO',
            autotap_desc: 'Tap automatici sulla scala: 15/s',
            timewarp_name: 'MACCHINA DEL TEMPO',
            timewarp_desc: 'Ottieni subito 5 min di guadagni idle',
            timewarp_instant: 'Istantaneo',
            ufo_name: 'MAGNETE UFO',
            ufo_desc: 'Attira una capsula con risorse',
            ufo_summon: 'Evoca',
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: 'Inventario',
            tab_ladders: 'Scale',
            tab_speakers: 'Casse',
            tab_newton: 'Pendoli',
            tab_talismans: 'Amuleti',
            available_skins: 'Skin disponibili:',
            no_effects: 'Nessun effetto bonus',
            default_ladder_desc: 'Parametri standard della scala',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk',
            equipped_btn: 'IN USO',
            unequip_btn: 'RIMUOVI',
            equip_btn: 'Equipaggia',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> In ordine',
            fully_equipped: '✔ TUTTO EQUIPAGGIATO',
            equip_all: 'EQUIPAGGIA ENTRAMBI',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> Skin attiva ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> Solo skin',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> Perk attivo ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> Solo perk',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> Oggetto bloccato',
            mimic_setup: '⚙️ Configura slot ({slot0}, {slot1})',
            cyber_setup: '🦾 Modifica slot extra',
            item_fallback: 'Oggetto',
            luck_plus: '+{luck} Fortuna',
            slot_empty: 'Vuoto',
            slot_default: 'Statistiche standard',
            slot_1_selected: '✔ Slot 1',
            slot_2_selected: '✔ Slot 2',
            select_action: '+ Seleziona',
            cyber_installed: '✔ Installato',
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: 'Personalizza',
            base_level: 'Livello base: {level}',
            base_level_prefix: 'Livello base:',
            power: 'Potenza: {value}',
            power_mps: 'Potenza: {value} m/s',
            upgrade_btn: 'Potenzia',
            speakers_title: '📻 Subwoofer',
            newton_title: '⚪ Pendolo di Newton',
            hit_power: 'Colpo: {power} m (ogni {speed}s)',
            upgrade_cost: 'Potenzia: {cost} m',
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 Slot Cyberpunk',
            desc: 'Scegli 1 perk extra da qualsiasi oggetto sbloccato (Cassa, Pendolo o Amuleto):',
            tab_speakers: 'Casse',
            tab_newton: 'Pendoli',
            tab_talismans: 'Amuleti',
            install_btn: 'Installa impianto',
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 Abilità Mimic',
            desc: 'Scegli 2 scale sbloccate per copiare i loro perk passivi:',
            slot1: 'Slot 1',
            slot2: 'Slot 2',
            apply_btn: 'Applica abilità',
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: 'Conferma',
            desc: 'Spendere oro?',
            buy_btn: 'Compra ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: 'Compra',
            buff_title: 'Attiva booster',
            buff_desc: 'Spendere {cost} <img src="assets/golden_nut.webp" class="ui-ico"> per attivare il boost?',
            not_enough_gold: 'Bulloni d\'Oro insufficienti',
            gear_title: 'Sblocca skin oggetto',
            gear_desc: 'Comprare "{name}" per {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            talisman_title: 'Nuovo amuleto fortunato',
            talisman_desc: 'Comprare l\'amuleto "{name}" per {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            deal_title: 'Offerta del giorno',
            deal_desc: 'Comprare "{name}" per {price} <img src="assets/golden_nut.webp" class="ui-ico">?',
            item_title: 'Compra oggetto',
            item_desc: 'Comprare "{name}" per {price}?',
            ufo_desc: 'Spendere 39 <img src="assets/golden_nut.webp" class="ui-ico"> per evocare l\'UFO?',
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: 'CAVEAU',
            title: 'BANCA D\'ORO',
            vip_note: 'Qualsiasi acquisto sblocca permanentemente il <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> in classifica!',
            free_gold_title: 'Oro gratis',
            free_gold_val: '+15 <img src="assets/golden_nut.webp" class="ui-ico-sm"> per spot',
            free_gold_btn: 'Riscatta',
            hit_badge: '🔥 PIÙ VENDUTO',
            adfree_title: 'No Ads + VIP',
            adfree_desc: 'Rimuove tutte le pubblicità forzate per sempre!',
            pack_handful: 'Manciata di bulloni',
            pack_pouch: 'Sacchetto di bulloni',
            pack_pouch_tag: 'Basta per 1 cassa',
            pack_crate: 'Cassa di bulloni',
            pack_safe: 'Cassaforte del Magnate',
            pack_safe_tag: '+40% DI VALORE',
            purchased: 'Acquistato',
            price_99: '99 Yan',
            price_249: '249 Yan',
            price_590: '590 Yan',
            price_1390: '1.390 Yan',
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 VALORE x50',
            timer_text: 'L\'offerta scade tra:',
            golden_nuts: 'Bulloni d\'Oro',
            regular_nuts: 'Bulloni standard',
            wooden_boxes: 'Casse di legno',
            iron_safes: 'Casseforti di ferro',
            golden_cases: 'Casse d\'oro',
            cyber_speaker: '"Cyber"',
            cyber_speaker_sub: 'Cassa (Epica)',
            no_ads: 'NO ADS',
            no_ads_sub: 'Rimuove la pubblicità forzata per sempre',
            vip_status: 'STATUS VIP',
            vip_status_sub: 'Cornice d\'oro permanente nella TOP',
            claim_btn: 'RISCATTA TUTTO A <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2.099 Yan</s> 39 Yan',
            timer_badge: '39 Yan',
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: 'Dadi',
            badge: 'CAVEAU',
            title: 'CAVEAU CASSE',
            safe_tile: 'Cassaforte',
            bonus_label: 'Bonus Caveau',
            bonus_gold: '+15 Bulloni d\'Oro',
            wooden_name: 'Cassa di legno',
            iron_name: 'Cassaforte di ferro',
            gold_name: 'Cassa d\'oro',
            nut_loot_50: '50 Bulloni',
            nut_loot_150: '150 Bulloni',
            nut_loot_300: '300 Bulloni',
            open_btn: 'Apri',
            buy_more_title: 'Compra altri',
            open_all_title: 'Apri tutto',
            in_game: 'In gioco',
            buy_price: 'Compra {price} <img src="{icon}" class="ui-ico-sm">',
            buy_multi_title: 'Acquisto multiplo',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Riscatta',
            ready: 'PRONTO!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> CASSA!',
            box_label: 'Cassa: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: 'Scegli quantità:',
            total: 'Totale:',
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: 'APERTE {count} CASSE',
            claim_all: 'Prendi tutto',
            open_more: 'Aprine altre ×10',
            open_more_count: 'Aprine altre ×{count}',
            new_count: '<span style="color:#2ecc71;">Nuovi: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">Nuovi: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ NUOVO!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">Doppione (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: 'Apertura cassa...',
            opening_title: 'Apertura: {name}',
            again_btn: 'Ancora',
            again_count: 'Ancora ({count})',
            batch_btn: '×10',
            skip_btn: 'Salta ⏩',
            close_btn: 'Chiudi',
            reroll_btn: '📺 Rilancia con spot',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> Rilancia (Neon)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> Rilancia con spot',
            duplicate: 'Doppione → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: 'Descrizione perk',
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: 'Premi giornalieri',
            subtitle: 'Accedi ogni giorno! Riscatta una skin esclusiva al Giorno 7.',
            missed_alert: '⚠️ Hai saltato un giorno!',
            restore_streak: 'Recupera serie',
            reset_day1: 'Giorno 1',
            day7_title: 'Giorno 7: Super Premio',
            day7_desc: 'Skin "Calendario" (Epica)',
            double_ad: '▶ Raddoppia con spot (x2)',
            claim_normal: 'Riscatta normale',
            day_badge: 'Giorno {day}',
            day7_title_loop: 'Giorno 7: Gran Ricompensa',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> Casse d\'oro',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">OGGI!</span>',
            double_claim_loop: '▶ Raddoppia con spot (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: 'Riscatta normale (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: 'Riscatta la skin "Calendario"!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ RISCATTATO</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Giorno 7</span>',
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: 'Serie di spot',
            reset_timer: 'Si azzera tra:',
            footer: 'Ogni pubblicità guardata nel gioco conta per i progressi.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ Riscattato</span>',
            claim_btn: 'Riscatta',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step} video</span>',
            popup_safe: '+1 Cassaforte!',
            popup_nuts: '+600 Bulloni!',
            popup_gold: '+{gold} Oro!',
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> Bulloni' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15m)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> Bulloni' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> Cassaforte' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> Turbo 3x (3m)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1.000 <img src="assets/nut.webp" class="ui-ico"> Bulloni' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> Skin "Cartellone"' },
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: 'Skin "Calendario"' },
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: 'Bentornato!',
            away_time: 'Sei stato via per: {time}',
            away_prefix: 'Sei stato via per:',
            limit_label: 'Limite: {limit}',
            limit_prefix: 'Limite:',
            speaker_earned: 'Quota dal subwoofer:',
            newton_earned: 'Quota dal pendolo:',
            cases_found: 'Casse trovate: {count} pz',
            cases_found_prefix: 'Casse trovate:',
            total_earned: 'Altezza totale scalata:',
            double_ad: '▶ Raddoppia con spot',
            claim_normal: 'Riscatta normale',
            limit_3h: '3 ore',
            limit_30m: '30 min',
            double_btn: '▶ Raddoppia con spot (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: 'RAGGIUNTO',
            double_ad: '▶ Raddoppia con spot (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: 'Riscatta normale (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: 'Tetti', desc: 'Sopra di te ci sono solo uccelli e affitti alle stelle. Primi cento metri superati!' },
            { height: 1000, name: 'Fronte Temporalesco', desc: 'Tieniti forte ai pioli bagnati. Cieli aperti e fulmini ti aspettano!' },
            { height: 10000, name: 'Stratosfera', desc: 'Quota di crociera. La curvatura della Terra è chiaramente visibile sotto di te.' },
            { height: 100000, name: 'Spazio', desc: 'La gravità si arrende. Sei ufficialmente in assenza di peso totale!' },
            { height: 1000000, name: 'Via Lattea', desc: 'Un milione di metri. Ti sei spinto ben oltre il buonsenso.' },
            { height: 10000000, name: 'Il Grande Vuoto', desc: 'Confine della mappa? No, solo l\'inizio del nulla assoluto.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: 'Vecchio Cortile', desc: 'Il tuo territorio. Giungla di cemento e lo scricchiolio di scalini consumati. È qui che inizia la tua ascesa infinita.' },
            { id: 1, name: 'Tetti', desc: 'Più in alto delle antenne TV, dei piccioni e del traffico cittadino. Primi cento metri alle spalle e l\'aria si fa più pungente.' },
            { id: 2, name: 'Fronte Temporalesco', desc: 'Nuvole dense e imponenti, fulmini accecanti e l\'odore pungente dell\'ozono. I pioli sono scivolosi: reggiti forte!' },
            { id: 3, name: 'Stratosfera', desc: 'Il limite dell\'atmosfera terrestre. Il cielo sfuma in un oltremare profondo, svelando la nitida curva blu del pianeta.' },
            { id: 4, name: 'Spazio Profondo', desc: 'L\'orbita dei satelliti silenziosi e il vuoto senza tempo. La gravità si è arresa: la scala è l\'unica via per salire.' },
            { id: 5, name: 'Via Lattea', desc: 'Spirali di galassie lontane, nebulose luccicanti e polvere cosmica. A un milione di metri dai problemi terreni.' },
            { id: 6, name: 'Il Grande Vuoto', desc: 'L\'orizzonte degli eventi ai margini dell\'universo conosciuto. La quota definitiva dove il tempo si dissolve nell\'infinito cosmico.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: 'Vecchio Cortile',
            roofs: 'Tetti',
            storm_front: 'Fronte Temporalesco',
            stratosphere: 'Stratosfera',
            open_space: 'Spazio Profondo',
            milky_way: 'Via Lattea',
            endless: 'Il Grande Vuoto',

            checkpoint_0: '0 m — Vecchio Cortile',
            checkpoint_250: '250 m — Tetti',
            checkpoint_1000: '1.000 m — Fronte Temporalesco',
            checkpoint_10000: '10.000 m — Stratosfera',
            checkpoint_100000: '100.000 m — Spazio Profondo',
            checkpoint_1000000: '1.000.000 m — Via Lattea',
            checkpoint_10000000: '10.000.000 m — Il Grande Vuoto',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: 'ESPLORATO',
            signal_lost_badge: 'SEGNALE PERSO',
            unknown_sector: 'Settore sconosciuto',
            height_label: 'Quota: {height} m',
            target_label: 'Obiettivo: {target} m (mancano {remaining} m)',
            locked_desc: 'I sensori rilevano gravi anomalie a questa quota. Continua a salire per decifrare i dati del segnale.',
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: 'Sfida di Resistenza',
            challenge_desc: 'Resta in gioco per 20 minuti per riscattare gratis un\'esclusiva skin Retro!',
            skin_name: 'Skin "Retro"',
            ability_label: '<b style="color: #f1c40f;">Abilità:</b> Prendi la moneta volante (bottino: fino a 125 <img src="assets/nut.webp" class="ui-ico-sm"> e 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: 'Tempo rimanente:',
            challenge_complete: 'SFIDA COMPLETATA!',
            challenge_reward: 'Sei sopravvissuto per 20 minuti! Ecco la tua ricompensa:',
            epic_skin: 'SKIN EPICA "RETRO"',
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: 'BONUS',
            title: 'Aggiungi il gioco alla home e scala con un solo tap!',
            desc: 'Tocca "Aggiungi" nella finestra successiva e la ricompensa sarà tua',
            reward_label: 'Premio installazione:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: 'AGGIUNGI (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            decline_title: 'Sicuro di non volere il premio?',
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> ti aspettano. Aggiungere il collegamento richiede solo due secondi!',
            decline_claim: 'Riscatta 100 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: 'LEGA CLIMBER',
            title: 'HALL OF FAME',
            season_desc: 'Classifica globale dei conquistatori dello spazio',
            tab_alltime: 'Di sempre',
            tab_week: 'Stagione (Settimanale)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">Caricamento classifica...</div>',
            desc_alltime: 'Classifica globale dei conquistatori dello spazio',
            desc_week: 'Si azzera ogni lunedì alle 00:00',
            anon: 'Scalatore Anonimo',
            you_player: 'Tu (Giocatore)',
            you_vip: '<span>Tu (VIP)</span>',
            you: '<span>Tu</span>',
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: 'CONTRATTO TOP',
            title: 'AFFARE DEL GIORNO',
            timer_label: 'Nuovo contratto tra',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> Cambia ({left}/5)',
            reroll_exhausted: 'Cambi esauriti (0/5)',
            in_collection: '✔ IN COLLEZIONE',
            buy_btn: 'COMPRA: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: 'Mancano {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> → Banca',
            discount_badge: '{rarity} • -{percent}%',
            unique_ladder: 'Scala Unica',
            luck_desc: '+{luck} alla Fortuna totale',
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: 'IMPOSTAZIONI',
            language: '🌐 Lingua',
            music: 'Musica & Atmosfera',
            tap_sounds: 'Suoni del Tap',
            speaker_bass: 'Bassi Subwoofer',
            newton_hit: 'Impatto Pendolo',
            rewards_sfx: 'Premi & Effetti',
            vibration: 'Feedback aptico',
            support_btn: 'Supporto / Community',
            support_alert: 'Community del gioco e supporto: t.me/your_game_group',
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: 'La tua Fortuna',
            total_label: 'Statistica Totale',
            influence_title: 'Come influisce la Fortuna:',
            influence_cases: 'Aumenta la probabilità di trovare casse mentre fai tap.',
            influence_nuts: 'Aumenta la quantità di bulloni trovati nelle casse.',
            influence_rarity: 'Aumenta le probabilità di skin Epiche e Leggendarie.',
            breakdown_title: 'Dettaglio statistiche:',
            talismans_title: 'Collezione Amuleti:',
            buff_label: 'Fortuna',
            plus_luck: '+{value} Fortuna',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">IN USO</div>',
            equip_btn: 'Equipaggia',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> Bloccato</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> Scala "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> Amuleto "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 Slot Cyber "{name}": <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 Boost spot (Segno Fortuna): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>Nessun booster di fortuna attivo.</div>',
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: 'ORO ACCREDITATO!',
            default_desc: 'Grazie per aver giocato con noi!',
            vip_badge: 'STATUS VIP ATTIVATO',
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: 'PACCHETTO INIZIALE!',
                desc: 'Una valanga di casse, bulloni, zero pubblicità e la skin "Cyber" sono tuoi! Grazie per il supporto <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: 'ORO OTTENUTO!',
                desc: 'Hai ricevuto <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> per aver guardato un video!',
            },
            adfree: {
                title: 'ZERO PUBBLICITÀ!',
                desc: 'Pubblicità forzate rimosse per sempre! Grazie per il supporto al nostro gioco ❤️',
            },
            gold_credited: {
                title: 'ORO ACCREDITATO!',
                desc: '+{amount} <img src="assets/golden_nut.webp" class="ui-ico"> aggiunti al tuo saldo. Grazie per il supporto ❤️! Buona scalata!',
            },
            shortcut_reward: {
                title: 'RICOMPENSA IN ORO!',
                desc: '+100 <img src="assets/golden_nut.webp" class="ui-ico"> aggiunti al tuo saldo!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">Grazie per aver giocato! ❤️</span>',
            },
            deal: {
                buy_btn: 'COMPRA: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: 'PACCHETTO INIZIALE SBLOCCATO!',
            sponsor: '📺 Sponsor: +{nuts} 🔩 & +{gold} 🟡!',
            turbo_boost: 'TURBO BOOST 3x ({seconds}s)!',
            luck_boost: 'FORTUNA +{value}!',
            frenzy: 'PIOGGIA DI BULLONI!',
            autotap: 'PILOTA AUTOMATICO (15 tap/s)!',
            turbo_income: 'TURBO BOOST 3x!',
            luck_15: 'FORTUNA +15!',
            ufo_case: '+1 CASSA!',
            ufo_safe: '+1 CASSAFORTE!',
            billiard_crit: '🎱 2.5x! +{nuts} 🔩',
            planet_turbo: '🌍 TURBO 3x (20s)!',
            planet_luck: '🌍 FORTUNA +15 (60s)!',
            planet_frenzy: '🌍 PIOGGIA DI BULLONI (15s)!',
            hawking: '💥 RADIAZIONE DI HAWKING: +100.000 m!',
            storm_discharge: 'SCARICA (10x)!',
            absolute_unlocked: 'ASSOLUTO SBLOCCATO!',
            legendary_skin: '👑 SKIN LEGGENDARIA: {name}!',
            retro_coin: '+{nuts} bulloni, +{gold}!',
            banana_double: '🍌 TAP 2x!',
            combo: '🔥 {mult}x ({cps} CPS)',
            case_drop: '+1 CASSA!',
            golden_case_milky: 'CASSA D\'ORO (VIA LATTEA)!',
            golden_case: 'CASSA D\'ORO!',
            safe_milky: 'CASSAFORTE (VIA LATTEA)!',
            safe_luck: 'CASSAFORTE (FORTUNA)!',
            iron_safe: 'CASSAFORTE DI FERRO!',
            rusty_nut: '+100',
            rusty_box: '+1 CASSA!',
            rusty_safe: '+1 CASSAFORTE!',
            marble_double: '+{value} (2x)',
            jackpot: 'JACKPOT: +1!',
            timed_box: '+1 CASSA RISCATTATA!',
            crystal_gold: '+{value} (Cristallo)!',
            shop_spent: '-{cost} m',
            streak_dupe: 'Doppione: +{value}!',
            streak_billboard: '🎉 SKIN CARTELLONE SBLOCCATA!',
            calendar_day: 'Giorno {day} riscattato!',
            calendar_skin: 'SKIN CALENDARIO SBLOCCATA!',
            calendar_bonus: '+{cases} Casse d\'oro!',
            timewarp_report: '+{meters} m',
            timewarp_nuts: '+{nuts} bulloni',
            timewarp_gold: '+{gold} oro',
            magnet_ufo: 'MAGNETE UFO!',
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            wood: { name: 'Legno' },
            banana: { name: 'Banana' },
            beer: { name: 'Cassa di Birra' },
            fire: { name: 'Infuocata' },
            fireman: { name: 'Antincendio' },
            plastic: { name: 'Plastica' },
            rusty: { name: 'Arrugginita' },
            tape: { name: 'Nastro Adesivo' },
            book: { name: 'Pila di Libri' },
            cactus: { name: 'Cactus' },
            cement: { name: 'Cemento' },
            neon: { name: 'Neon' },
            scratch: { name: 'Tiragraffi' },
            new_year: { name: 'Festiva' },
            add_stair: { name: 'Cartellone' },
            bone: { name: 'Scheletrica' },
            crystal: { name: 'Cristallo' },
            cyber: { name: 'Cyberpunk' },
            golden: { name: 'Dorata' },
            goth: { name: 'Gotica' },
            ice: { name: 'Glaciale' },
            vine: { name: 'Edera' },
            calendar_stair: { name: 'Calendario' },
            marble: { name: 'Marmo e Oro' },
            quant: { name: 'Quantistica' },
            ufo: { name: 'UFO' },
            mimic: { name: 'Mimic' },
            retro: { name: 'Retro' },
            storm: { name: 'Fronte Temporalesco' },
            strato: { name: 'Stratosfera' },
            cosmo: { name: 'Spazio Profondo' },
            milkyway: { name: 'Via Lattea' },
            endless: { name: 'Singolarità' },
            absolute: { name: 'ASSOLUTA' },
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: 'Il classico punto di partenza. Ha il profumo di un viaggio infinito.',
            banana: 'Raddoppia ogni 5º tap.',
            beer: '+5 alla statistica Fortuna.',
            fire: '+7 m per tap, -10 tap necessari per la cassa.',
            fireman: 'Pendolo di Newton: +15 m per colpo',
            plastic: 'Il Pendolo di Newton oscilla 0,15s più veloce',
            rusty: '65% di probabilità di trovare <img src="assets/nut.webp" class="ui-ico"> a ogni tap.',
            tape: '10% di sconto nel Mercato Nero.',
            book: '+7 alla statistica Fortuna.',
            cactus: 'Subwoofer: +20 m/s. Pendolo di Newton: +10 m per colpo',
            cement: 'Pendolo di Newton: +50% potenza, ma colpi più lenti di 0,3s.',
            neon: 'Rilancio gratuito ogni volta che apri una cassa',
            scratch: 'A 5+ tap/sec, l\'altezza per tap è moltiplicata per 1,5x',
            new_year: 'Regalo bonus ogni 150-250 tap.',
            bone: 'Raddoppia ogni tap',
            crystal: 'Ogni cassa aperta assegna +3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            cyber: 'Sblocca uno slot accessorio extra.',
            golden: 'Completare la barra tap assegna una Cassaforte di ferro invece di una cassa',
            goth: '20% di sconto su potenziamenti e casse comprate con bulloni',
            ice: 'Scalata fluida: permette di fare tap scorrendo il dito sulla scala',
            vine: 'Aumenta la potenza di tap, Subwoofer e Pendolo del +40%.',
            add_stair: 'I booster durano il 50% in più; ogni spot visto assegna 20 <img src="assets/nut.webp" class="ui-ico"> e 3 <img src="assets/golden_nut.webp" class="ui-ico">.',
            calendar_stair: '+10 alla Fortuna; probabilità bonus di skin Leggendarie dalle casseforti.',
            marble: '25% di probabilità di Cassa d\'oro al completamento della barra tap.',
            quant: 'Fissione della materia: il 20% dei bulloni ottenuti diventa d\'oro, -50 tap alla cassa.',
            ufo: 'Attira una capsula aliena con risorse ogni 30 secondi',
            mimic: 'Mimetismo: copia le abilità passive di 2 scale a scelta.',
            retro: 'Prendi la moneta volante (bottino: fino a 125 <img src="assets/nut.webp" class="ui-ico"> e 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '+20 m per tap, ma 5% di probabilità di colpo a vuoto al click.',
            strato: 'Aria rarefatta: aumenta la velocità di Subwoofer e Pendolo del 40%.',
            cosmo: 'Aumenta il limite di accumulo risorse offline a 3 ore.',
            milkyway: 'Spinta d\'inerzia: 25% di probabilità di aumentare di +1 il livello di qualsiasi cassa trovata.',
            endless: 'Aumenta i guadagni di altezza del +50% ogni minuto (fino a +1.000%). Cambiare scala azzera il bonus.',
            absolute: 'Il culmine dell\'evoluzione: conferisce le abilità passive di tutte le scale contemporaneamente',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: 'Cassa Vintage' },
            monster: { name: 'Stack Monster' },
            cyber: { name: 'Cassa Cyber' },
            cool: { name: 'Subwoofer Supremo' },
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: 'Ritmo base del Subwoofer (Potenza x1)',
            monster: '+20% potenza Subwoofer. -2 minuti di attesa per la cassa gratis.',
            cyber: '+40% potenza Subwoofer. Ottieni il 25% in più di <img src="assets/nut.webp" class="ui-ico"> e <img src="assets/golden_nut.webp" class="ui-ico">!',
            cool: 'Potenza Subwoofer 2x. Ogni 3 battute assegna +1 <img src="assets/golden_nut.webp" class="ui-ico">.',
            fallback: 'Bassi: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: 'Sfere d\'Acciaio' },
            billiard: { name: 'Palla 8' },
            plasma: { name: 'Sfera al Plasma' },
            planet: { name: 'Mini Terra' },
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: 'Colpo base del Pendolo di Newton (Danno x1)',
            billiard: '+25% danno del Pendolo. Ogni 8 colpi conferisce altezza 2,5x e 3–5 <img src="assets/nut.webp" class="ui-ico">.',
            plasma: '+50% danno del Pendolo. Elettrificato: a 6+ tap/s raddoppia l\'altezza del tap. Dopo 5s di inattività — 10 tap automatici.',
            planet: 'Danno del Pendolo 2x, +3 tap per cassa a ogni colpo. +100% a tutte le fonti per ogni booster attivo. 1% di probabilità di attivare un buff casuale al colpo.',
            fallback: 'Colpo: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: 'Quadrifoglio' },
            horseshoe: { name: 'Ferro Dorato' },
            paw: { name: 'Zampa di Coniglio' },
            coin: { name: 'Moneta Antica' },
            star: { name: 'Stella Portafortuna' },
            key: { name: 'Passepartout' },
            sock: { name: 'Calzino Fortunato' },
            sock_alert: '🎉 INCREDIBILE! Hai raccolto tutti gli amuleti e sbloccato il CALZINO SEGRETO (+50 Fortuna)!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: 'COMUNE',
            rare: 'RARO',
            epic: 'EPICO',
            legendary: 'LEGGENDARIO',
            special: 'SPECIALE',
        },
    },

    // Японский 14
    ja: {
    // ═══════════════════════════════════════
    //  GENERAL / GLOBAL
    // ═══════════════════════════════════════
    game: {
        title: 'スペースラダー',
        version: 'スペースラダー v1.0.0',
        height_display: '{height} m',
        height_short: '{height} m',
    },
    assets: {
        top_btn: 'assets/top_ja.webp',
        starter_banner: 'assets/starter_pack_ja.webp',
        bank_banner: 'assets/bank_window2_ja.webp',
    },

    // ═══════════════════════════════════════
    //  UNITS
    // ═══════════════════════════════════════
    units: {
        meters_per_click: '{value} m/タップ',
        meters_per_sec: '{value} m/秒',
        meters_per_hit: '{value} m/ヒット',
        level: 'Lv. {level}',
        seconds_short: '{value}秒',
        meters: '{value} m',
        meters_plus: '+{value} m',
        pieces: '{count}個',
        min_sec: '{min}分{sec}秒',
        meters_per_click_short: 'm/タップ',
        meters_per_sec_short: 'm/秒',
        meters_per_hit_short: 'm/ヒット',
        level_short: 'Lv.',
        meters_unit: 'm',
    },

    // ═══════════════════════════════════════
    //  TOP HUD & MAIN UI
    // ═══════════════════════════════════════
    ui: {
        gold_tooltip: 'ゴールデンナッツを獲得',
        donate_btn: 'バンク',
        deal_btn: 'お得',
        top_btn_aria: '殿堂入り',
        zen_title: 'Zenモード (UI非表示)',
        rewards_btn: '報酬',
        rewards_count: '{current}/10',
        buffs_btn: 'バフ',

        shop_btn: 'ショップ',
        skins_btn: 'スキン',
        cases_btn_label: 'ケース:',
        free_box_label: '無料:',

        close_btn: '✕',
        close_aria: '閉じる',
        cancel_btn: 'キャンセル',
        buy_btn: '購入',
        claim_btn: '受取',
        equip_btn: '装備',
        equipped_badge: '装備中',
        later_btn: '後で',
        not_now_btn: '今はしない',
        excellent_btn: '最高！',
        forward_btn: '頂へ！',
        claim_and_equip_btn: '受取＆装備',
        just_claim_btn: '受取のみ',
        selected_btn: '選択済',
        buy_for: '{price} {currency} で購入',
    },

    // ═══════════════════════════════════════
    //  UPGRADES SHOP (Black Market)
    // ═══════════════════════════════════════
    shop: {
        title: '闇市場',
        buy_label: '購入',
        click_title: 'タップ力',
        speaker_title: 'サブウーファー',
        newton_title: 'ニュートン',
        cost_suffix: '{cost} m',
    },

    // ═══════════════════════════════════════
    //  BUFFS DRAWER
    // ═══════════════════════════════════════
    buffs: {
        drawer_title: '⚡ ブースター',
        ad_btn: '広告を見る',

        fortune_name: '幸運',
        fortune_desc: '幸運ステータス +15',
        turbo_name: 'ターボ上昇',
        turbo_desc: '全高度収入 3倍',
        frenzy_name: 'ナッツの雨',
        frenzy_desc: 'タップごとにナッツが降る',
        autotap_name: 'オートパイロット',
        autotap_desc: '毎秒15回自動タップ',
        timewarp_name: 'タイムマシン',
        timewarp_desc: '5分間の放置収入を即座に獲得',
        timewarp_instant: '即座',
        ufo_name: 'UFOマグネット',
        ufo_desc: '資源入りポッドを引き寄せる',
        ufo_summon: '召喚',
    },

    // ═══════════════════════════════════════
    //  INVENTORY
    // ═══════════════════════════════════════
    inventory: {
        title: 'ギアインベントリ',
        tab_ladders: 'はしご',
        tab_speakers: 'スピーカー',
        tab_newton: 'クレードル',
        tab_talismans: 'お守り',
        available_skins: '利用可能なスキン:',
        no_effects: 'ボーナス効果なし',
        default_ladder_desc: '標準のはしごパラメータ',
        tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> スキン',
        tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> パーク',
        equipped_btn: '装備中',
        unequip_btn: '解除',
        equip_btn: '装備',
        in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> 順番通り',
        fully_equipped: '✔ 完全装備',
        equip_all: '両方装備',
        visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> スキンON ✓',
        visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> スキンのみ',
        effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> パークON ✓',
        effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> パークのみ',
        item_locked: '<img src="assets/locker.webp" class="ui-ico"> ロック済み',
        mimic_setup: '⚙️ スロット設定 ({slot0}, {slot1})',
        cyber_setup: '🦾 追加スロット調整',
        item_fallback: 'アイテム',
        luck_plus: '幸運 +{luck}',
        slot_empty: '空',
        slot_default: '標準ステータス',
        slot_1_selected: '✔ スロット1',
        slot_2_selected: '✔ スロット2',
        select_action: '+ 選択',
        cyber_installed: '✔ インストール済',
    },

    // ═══════════════════════════════════════
    //  CUSTOMIZATION (Speakers/Newton)
    // ═══════════════════════════════════════
    customization: {
        title: 'カスタマイズ',
        base_level: '基本レベル: {level}',
        base_level_prefix: '基本レベル:',
        power: '出力: {value}',
        power_mps: '出力: {value} m/秒',
        upgrade_btn: 'アップグレード',
        speakers_title: '📻 サブウーファー',
        newton_title: '⚪ ニュートンクレードル',
        hit_power: 'ヒット: {power} m (毎 {speed}秒)',
        upgrade_cost: 'アップグレード: {cost} m',
    },

    // ═══════════════════════════════════════
    //  CYBERPUNK SLOT
    // ═══════════════════════════════════════
    cyber: {
        title: '🦾 サイバーパンクスロット',
        desc: 'ロック解除済みのギア（スピーカー、クレードル、お守り）から追加パークを1つ選択:',
        tab_speakers: 'スピーカー',
        tab_newton: 'クレードル',
        tab_talismans: 'お守り',
        install_btn: 'インプラントインストール',
    },

    // ═══════════════════════════════════════
    //  MIMIC
    // ═══════════════════════════════════════
    mimic: {
        title: '🎭 ミミック能力',
        desc: 'ロック解除済みの任意のはしご2つを選び、そのパッシブパークをコピー:',
        slot1: 'スロット1',
        slot2: 'スロット2',
        apply_btn: '能力を適用',
    },

    // ═══════════════════════════════════════
    //  CONFIRMATION MODAL
    // ═══════════════════════════════════════
    confirm: {
        title: '確認',
        desc: 'ゴールドを使いますか？',
        buy_btn: '購入 ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
        buy_label: '購入',
        buff_title: 'ブースター発動',
        buff_desc: '{cost} <img src="assets/golden_nut.webp" class="ui-ico"> を使ってブースターを発動しますか？',
        not_enough_gold: 'ゴールデンナッツが不足しています',
        gear_title: 'ギアスキンをアンロック',
        gear_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> で「{name}」を購入しますか？',
        talisman_title: '新しい幸運のお守り',
        talisman_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> でお守り「{name}」を購入しますか？',
        deal_title: '本日の特売',
        deal_desc: '{price} <img src="assets/golden_nut.webp" class="ui-ico"> で「{name}」を購入しますか？',
        item_title: 'アイテム購入',
        item_desc: '{price} で「{name}」を購入しますか？',
        ufo_desc: '39 <img src="assets/golden_nut.webp" class="ui-ico"> を使ってUFOを召喚しますか？',
    },

    // ═══════════════════════════════════════
    //  DONATE / GOLDEN BANK
    // ═══════════════════════════════════════
    donate: {
        badge: '金庫',
        title: 'ゴールデンバンク',
        vip_note: '購入するとリーダーボードで <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b> が永久にアンロックされます！',
        free_gold_title: '無料ゴールド',
        free_gold_val: '広告1回につき +15 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        free_gold_btn: '受取',
        hit_badge: '🔥 ベストセラー',
        adfree_title: '広告なし + VIP',
        adfree_desc: '強制広告を永久に削除！',
        pack_handful: 'ひと握りのナッツ',
        pack_pouch: 'ナッツの袋',
        pack_pouch_tag: 'ケース1つ分',
        pack_crate: 'ナッツの箱',
        pack_safe: '実業家の金庫',
        pack_safe_tag: '+40% お得',
        purchased: '購入済',
        price_99: '99 ヤン',
        price_249: '249 ヤン',
        price_590: '590 ヤン',
        price_1390: '1,390 ヤン',
    },

    // ═══════════════════════════════════════
    //  STARTER PACK
    // ═══════════════════════════════════════
    starter: {
        badge: '🔥 50倍のお得',
        timer_text: 'オファー有効期限:',
        golden_nuts: 'ゴールデンナッツ',
        regular_nuts: '通常ナッツ',
        wooden_boxes: '木箱',
        iron_safes: '鉄の金庫',
        golden_cases: 'ゴールデンケース',
        cyber_speaker: '「サイバー」',
        cyber_speaker_sub: 'スピーカー (エピック)',
        no_ads: '広告なし',
        no_ads_sub: '強制広告を永久に削除',
        vip_status: 'VIPステータス',
        vip_status_sub: 'TOPの永久ゴールドフレーム',
        claim_btn: '全て受取 <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2,099 ヤン</s> 39 ヤン',
        timer_badge: '39 ヤン',
    },

    // ═══════════════════════════════════════
    //  CASE VAULT
    // ═══════════════════════════════════════
    cases: {
        odds_nuts: 'ナット',
        badge: '隠し場所',
        title: 'ケース金庫',
        safe_tile: '金庫',
        bonus_label: '金庫ボーナス',
        bonus_gold: '+15 ゴールデンナッツ',
        wooden_name: '木箱',
        iron_name: '鉄の金庫',
        gold_name: 'ゴールデンケース',
        nut_loot_50: '50 ナッツ',
        nut_loot_150: '150 ナッツ',
        nut_loot_300: '300 ナッツ',
        open_btn: '開ける',
        buy_more_title: 'もっと購入',
        open_all_title: '全て開ける',
        in_game: 'ゲーム内',
        buy_price: '{price} <img src="{icon}" class="ui-ico-sm"> で購入',
        buy_multi_title: 'まとめ買い',
        ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 受取',
        ready: '準備完了！',
        popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> ケース！',
        box_label: '箱: {box}/{needed}',
    },

    // ═══════════════════════════════════════
    //  MULTI BUY
    // ═══════════════════════════════════════
    multi_buy: {
        choose_amount: '数量を選択:',
        total: '合計:',
    },

    // ═══════════════════════════════════════
    //  BATCH RESULTS
    // ═══════════════════════════════════════
    batch_result: {
        title: '{count} ケースをオープン',
        claim_all: '全て受取',
        open_more: 'さらに×10開ける',
        open_more_count: 'さらに×{count}開ける',
        new_count: '<span style="color:#2ecc71;">新規: {count} 🪜</span>',
        new_zero: '<span style="color:#7f8c8d;">新規: 0</span>',
        new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ 新規！</span>',
        duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">重複 (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
    },

    // ═══════════════════════════════════════
    //  GACHA (ROULETTE)
    // ═══════════════════════════════════════
    gacha: {
        title: 'ケースオープン中...',
        opening_title: 'オープン中: {name}',
        again_btn: 'もう一度',
        again_count: 'もう一度 ({count})',
        batch_btn: '×10',
        skip_btn: 'スキップ ⏩',
        close_btn: '閉じる',
        reroll_btn: '📺 広告でリロール',
        reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> リロール (ネオン)',
        reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 広告でリロール',
        duplicate: '重複 → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
    },

    // ═══════════════════════════════════════
    //  LADDER PREVIEW
    // ═══════════════════════════════════════
    ladder_preview: {
        effect_desc: 'パークの説明',
    },

    // ═══════════════════════════════════════
    //  DAILY CALENDAR
    // ═══════════════════════════════════════
    calendar: {
        title: 'デイリー報酬',
        subtitle: '毎日ログイン！7日目に限定はしごスキンを受取。',
        missed_alert: '⚠️ 1日欠席しました！',
        restore_streak: '連続記録を回復',
        reset_day1: '1日目',
        day7_title: '7日目: 超豪華賞品',
        day7_desc: '「カレンダー」スキン (エピック)',
        double_ad: '▶ 広告で2倍 (x2)',
        claim_normal: '通常受取',
        day_badge: '{day}日目',
        day7_title_loop: '7日目: グランド報酬',
        day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> ゴールデンケース',
        today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">今日！</span>',
        double_claim_loop: '▶ 広告で2倍 (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_normal_loop: '通常受取 (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
        claim_skin_btn: '「カレンダー」スキンを受取！',
        claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ 受取済</span>',
        day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 7日目</span>',
    },

    // ═══════════════════════════════════════
    //  AD STREAK
    // ═══════════════════════════════════════
    ad_streak: {
        title: '広告連続',
        reset_timer: 'リセットまで:',
        footer: 'ゲーム内で見た広告はすべて進捗にカウントされます。',
        claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ 受取済</span>',
        claim_btn: '受取',
        locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 広告 {step} 回</span>',
        popup_safe: '+1 金庫！',
        popup_nuts: '+600 ナッツ！',
        popup_gold: '+{gold} ゴールド！',
    },

    // ═══════════════════════════════════════
    //  AD STREAK REWARDS
    // ═══════════════════════════════════════
    ad_streak_rewards: [
        { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> ナッツ' },
        { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15分)' },
        { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> ナッツ' },
        { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> 金庫' },
        { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> ターボ3倍 (3分)' },
        { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 8, title: '+1,000 <img src="assets/nut.webp" class="ui-ico"> ナッツ' },
        { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
        { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> 「ビルボード」スキン' },
    ],

    // ═══════════════════════════════════════
    //  DAILY CALENDAR REWARDS
    // ═══════════════════════════════════════
    calendar_rewards: [
        { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
        { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
        { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
        { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
        { day: 7, text: '「カレンダー」スキン' },
    ],

    // ═══════════════════════════════════════
    //  OFFLINE EARNINGS MODAL
    // ═══════════════════════════════════════
    offline: {
        title: 'おかえりなさい！',
        away_time: '不在時間: {time}',
        away_prefix: '不在時間:',
        limit_label: '上限: {limit}',
        limit_prefix: '上限:',
        speaker_earned: 'スピーカー獲得:',
        newton_earned: 'クレードル獲得:',
        cases_found: '見つかった箱: {count}個',
        cases_found_prefix: '見つかった箱:',
        total_earned: '獲得高度合計:',
        double_ad: '▶ 広告で2倍',
        claim_normal: '通常受取',
        limit_3h: '3時間',
        limit_30m: '30分',
        double_btn: '▶ 広告で2倍 (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
    },

    // ═══════════════════════════════════════
    //  MILESTONES
    // ═══════════════════════════════════════
    milestones: {
        stamp: '到達',
        double_ad: '▶ 広告で2倍 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        claim_normal: '通常受取 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
    },

    // ═══════════════════════════════════════
    //  HEIGHT MILESTONES DATA
    // ═══════════════════════════════════════
    height_milestones: [
        { height: 250, name: '屋上', desc: '頭上には鳥と法外な家賃だけ。最初の100メートルをクリア！' },
        { height: 1000, name: '暴風雨の前線', desc: '濡れた段にしっかりつかまって。前方には青空と雷が待っている！' },
        { height: 10000, name: '成層圏', desc: '巡航高度。眼下に地球の丸みがはっきりと見える。' },
        { height: 100000, name: '宇宙', desc: '重力が降参。あなたは正式に完全な無重力状態に突入！' },
        { height: 1000000, name: '天の川', desc: '100万メートル。常識を超えた旅へようこそ。' },
        { height: 10000000, name: '大虚無', desc: 'マップの端？いいえ、これは絶対的な無の始まりに過ぎない。' },
    ],

    // ═══════════════════════════════════════
    //  STAGE LORE (LOGBOOK)
    // ═══════════════════════════════════════
    stages_lore: [
        { id: 0, name: '古い中庭', desc: 'あなたのホームグラウンド。コンクリートジャングルと擦り切れた木の階段のきしみ音。ここからあなたの果てしない上昇が始まります。' },
        { id: 1, name: '屋上', desc: 'テレビアンテナ、ハト、街の交通よりも高い場所。最初の100メートルを背後にし、空気が澄んできました。' },
        { id: 2, name: '暴風雨の前線', desc: 'そびえ立つ厚い雲、目くらましのような稲妻、そしてオゾンの鋭い香り。段は滑りやすいのでしっかりつかまって！' },
        { id: 3, name: '成層圏', desc: '地球の大気の端。空は深い群青色に褪せ、地球の鮮やかな青い曲線が姿を現します。' },
        { id: 4, name: '深宇宙', desc: '静かな衛星と時間を超えた虚無の軌道。重力は降伏し、はしごだけが上への道です。' },
        { id: 5, name: '天の川', desc: '遠くの銀河の渦、きらめく星雲、そして宇宙塵。地上の悩みから100万メートル上空。' },
        { id: 6, name: '大虚無', desc: '既知の宇宙の端にある事象の地平線。時間が宇宙的な無限に溶け込む究極の高度。' },
    ],

    // ═══════════════════════════════════════
    //  LOCATIONS (HUD Names & Checkpoints)
    // ═══════════════════════════════════════
    locations: {
        khrushchevka: '古い中庭',
        roofs: '屋上',
        storm_front: '暴風雨の前線',
        stratosphere: '成層圏',
        open_space: '深宇宙',
        milky_way: '天の川',
        endless: '大虚無',

        checkpoint_0: '0 m — 古い中庭',
        checkpoint_250: '250 m — 屋上',
        checkpoint_1000: '1,000 m — 暴風雨の前線',
        checkpoint_10000: '10,000 m — 成層圏',
        checkpoint_100000: '100,000 m — 深宇宙',
        checkpoint_1000000: '1,000,000 m — 天の川',
        checkpoint_10000000: '10,000,000 m — 大虚無',
    },

    // ═══════════════════════════════════════
    //  LOCATION CARD (LOGBOOK)
    // ═══════════════════════════════════════
    location_card: {
        explored_badge: '探索済',
        signal_lost_badge: '信号喪失',
        unknown_sector: '未知のセクター',
        height_label: '高度: {height} m',
        target_label: '目標: {target} m (残り {remaining} m)',
        locked_desc: 'センサーがこの高度で深刻な異常を検出。信号データを解読するために登り続けてください。',
    },

    // ═══════════════════════════════════════
    //  RETRO CHALLENGE
    // ═══════════════════════════════════════
    retro: {
        challenge_title: '耐久トライアル',
        challenge_desc: 'ゲームに20分間滞在して、限定レトロスキンを無料で手に入れよう！',
        skin_name: '「レトロ」スキン',
        ability_label: '<b style="color: #f1c40f;">能力:</b> 飛んでいるコインをキャッチ (戦利品: 最大 125 <img src="assets/nut.webp" class="ui-ico-sm"> と 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">)。',
        time_left: '残り時間:',
        challenge_complete: 'トライアル完了！',
        challenge_reward: '20分間生き残りました！こちらがあなたの報酬です:',
        epic_skin: 'エピック「レトロ」スキン',
    },

    // ═══════════════════════════════════════
    //  SHORTCUT
    // ═══════════════════════════════════════
    shortcut: {
        bonus_badge: 'ボーナス',
        title: 'ゲームをホーム画面に追加して、ワンタップで登ろう！',
        desc: '次のプロンプトで「追加」をタップすると報酬が手に入ります',
        reward_label: 'インストール報酬:',
        reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
        add_btn: '追加 (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        decline_title: '本当に報酬はいりませんか？',
        decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico"> があなたを待っています。ショートカットの追加は2秒で完了！',
        decline_claim: '100 <img src="assets/golden_nut.webp" class="ui-ico-sm"> を受取',
    },

    // ═══════════════════════════════════════
    //  LEADERBOARD
    // ═══════════════════════════════════════
    leaderboard: {
        league_badge: 'クライマーズリーグ',
        title: '殿堂入り',
        season_desc: 'グローバル宇宙征服者ランキング',
        tab_alltime: '全期間',
        tab_week: 'シーズン (週間)',
        loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">ランキング読み込み中...</div>',
        desc_alltime: 'グローバル宇宙征服者ランキング',
        desc_week: '毎週月曜日 00:00 にリセット',
        anon: '匿名のクライマー',
        you_player: 'あなた (プレイヤー)',
        you_vip: '<span>あなた (VIP)</span>',
        you: '<span>あなた</span>',
    },

    // ═══════════════════════════════════════
    //  DAILY DEAL
    // ═══════════════════════════════════════
    daily_deal: {
        badge: 'ホット契約',
        title: '本日の特売',
        timer_label: '新契約まで',
        reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> 更新 ({left}/5)',
        reroll_exhausted: '更新回数残り0回 (0/5)',
        in_collection: '✔ コレクション済',
        buy_btn: '購入: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        not_enough: 'あと {need} <img src="assets/golden_nut.webp" class="ui-ico-sm"> 必要 → バンク',
        discount_badge: '{rarity} • -{percent}% オフ',
        unique_ladder: 'ユニークなはしご',
        luck_desc: '全体的な幸運 +{luck}',
    },

    // ═══════════════════════════════════════
    //  SETTINGS
    // ═══════════════════════════════════════
    settings: {
        title: '設定',
        language: '🌐 言語',
        music: '音楽と環境音',
        tap_sounds: 'タップ音',
        speaker_bass: 'サブウーファー低音',
        newton_hit: 'クレードル衝突音',
        rewards_sfx: '報酬と効果音',
        vibration: 'バイブレーション',
        support_btn: 'サポート / コミュニティ',
        support_alert: 'ゲームコミュニティとサポート: t.me/your_game_group',
    },

    // ═══════════════════════════════════════
    //  LUCK
    // ═══════════════════════════════════════
    luck: {
        title: 'あなたの幸運',
        total_label: '総合ステータス',
        influence_title: '幸運がゲームプレイに与える影響:',
        influence_cases: 'タップ中のランダムな箱のドロップ率を上昇させます。',
        influence_nuts: '箱の中に見つかるナッツの量を増加させます。',
        influence_rarity: 'エピックおよびレジェンダリースキンの出現確率を上昇させます。',
        breakdown_title: 'ステータス内訳:',
        talismans_title: 'お守りコレクション:',
        buff_label: '幸運',
        plus_luck: '幸運 +{value}',
        equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">装備中</div>',
        equip_btn: '装備',
        locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> ロック済</div>',
        ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> はしご「{name}」: <b style="color:#2ecc71;">+{luck}</b></div>',
        talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> お守り「{name}」: <b style="color:#2ecc71;">+{luck}</b></div>',
        cyber_item: '<div>🦾 サイバースロット「{name}」: <b style="color:#00ffff;">+{luck}</b></div>',
        ad_fortune: '<div>📺 広告ブースト (幸運の印): <b style="color:#2ecc71;">+15</b></div>',
        no_buffs: '<div>アクティブな幸運ブースターはありません。</div>',
    },

    // ═══════════════════════════════════════
    //  THANK YOU MODAL
    // ═══════════════════════════════════════
    thank_you: {
        default_title: 'ゴールド付与完了！',
        default_desc: '一緒に遊んでくれてありがとう！',
        vip_badge: 'VIPステータス有効化',
    },

    // ═══════════════════════════════════════
    //  MODALS (showThankYouModal)
    // ═══════════════════════════════════════
    modal: {
        starter: {
            title: 'スターターパック！',
            desc: '大量のケース、ナッツ、広告なしアクセス、そして「サイバー」スキンがあなたのものに！ご支援ありがとうございます <img src="assets/crown.webp" class="ui-ico-sm">',
        },
        bank_gold: {
            title: 'ゴールド獲得！',
            desc: '広告を見て <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b> を獲得しました！',
        },
        adfree: {
            title: '広告なし！',
            desc: '強制広告が永久に削除されました！ゲームをサポートしてくれてありがとう ❤️',
        },
        gold_credited: {
            title: 'ゴールド付与完了！',
            desc: '残高に +{amount} <img src="assets/golden_nut.webp" class="ui-ico"> が追加されました。ご支援ありがとうございます ❤️！登るのを楽しんでください！',
        },
        shortcut_reward: {
            title: 'ゴールド報酬！',
            desc: '残高に +100 <img src="assets/golden_nut.webp" class="ui-ico"> が追加されました！<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">遊んでくれてありがとう！ ❤️</span>',
        },
        deal: {
            buy_btn: '購入: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
        },
    },

    // ═══════════════════════════════════════
    //  PARTICLES & FLOATING TEXTS
    // ═══════════════════════════════════════
    particle: {
        starter_obtained: 'スターターパックアンロック！',
        sponsor: '📺 スポンサー: +{nuts} 🔩 & +{gold} 🟡！',
        turbo_boost: 'ターボブースト 3倍 ({seconds}秒)！',
        luck_boost: '幸運 +{value}！',
        frenzy: 'ナッツの雨！',
        autotap: 'オートパイロット (15タップ/秒)！',
        turbo_income: 'ターボブースト 3倍！',
        luck_15: '幸運 +15！',
        ufo_case: '+1 ケース！',
        ufo_safe: '+1 金庫！',
        billiard_crit: '🎱 2.5倍！ +{nuts} 🔩',
        planet_turbo: '🌍 ターボ 3倍 (20秒)！',
        planet_luck: '🌍 幸運 +15 (60秒)！',
        planet_frenzy: '🌍 ナッツの雨 (15秒)！',
        hawking: '💥 ホーキング放射: +100,000 m！',
        storm_discharge: '放電 (10倍)！',
        absolute_unlocked: 'アブソリュートアンロック！',
        legendary_skin: '👑 レジェンダリースキン: {name}！',
        retro_coin: '+{nuts} ナッツ, +{gold}！',
        banana_double: '🍌 2倍タップ！',
        combo: '🔥 {mult}倍 ({cps} CPS)',
        case_drop: '+1 箱！',
        golden_case_milky: 'ゴールデンケース (天の川)！',
        golden_case: 'ゴールデンケース！',
        safe_milky: '金庫 (天の川)！',
        safe_luck: '金庫 (幸運)！',
        iron_safe: '鉄の金庫！',
        rusty_nut: '+100',
        rusty_box: '+1 箱！',
        rusty_safe: '+1 金庫！',
        marble_double: '+{value} (2倍)',
        jackpot: 'ジャックポット: +1！',
        timed_box: '+1 箱受取完了！',
        crystal_gold: '+{value} (クリスタル)！',
        shop_spent: '-{cost} m',
        streak_dupe: '重複: +{value}！',
        streak_billboard: '🎉 ビルボードスキンアンロック！',
        calendar_day: '{day}日目 受取完了！',
        calendar_skin: 'カレンダー スキンアンロック！',
        calendar_bonus: '+{cases} ゴールデンケース！',
        timewarp_report: '+{meters} m',
        timewarp_nuts: '+{nuts} ナッツ',
        timewarp_gold: '+{gold} ゴールド',
        magnet_ufo: 'UFOマグネット！',
    },

    // ═══════════════════════════════════════
    //  LADDER SKINS — NAMES
    // ═══════════════════════════════════════
    ladder: {
        wood: { name: '木製' },
        banana: { name: 'バナナ' },
        beer: { name: 'ビール箱' },
        fire: { name: '炎' },
        fireman: { name: '非常階段' },
        plastic: { name: 'プラスチック' },
        rusty: { name: '錆びた' },
        tape: { name: 'ダクトテープ' },
        book: { name: '本の山' },
        cactus: { name: 'サボテン' },
        cement: { name: 'コンクリート' },
        neon: { name: 'ネオン' },
        scratch: { name: '爪とぎ' },
        new_year: { name: 'ホリデー' },
        add_stair: { name: 'ビルボード' },
        bone: { name: 'スケルトン' },
        crystal: { name: 'クリスタル' },
        cyber: { name: 'サイバーパンク' },
        golden: { name: '黄金' },
        goth: { name: 'ゴシック' },
        ice: { name: '氷河' },
        vine: { name: 'アイビー' },
        calendar_stair: { name: 'カレンダー' },
        marble: { name: '大理石ゴールド' },
        quant: { name: '量子' },
        ufo: { name: 'UFO' },
        mimic: { name: 'ミミック' },
        retro: { name: 'レトロ' },
        storm: { name: '暴風雨の前線' },
        strato: { name: '成層圏' },
        cosmo: { name: '深宇宙' },
        milkyway: { name: '天の川' },
        endless: { name: '特異点' },
        absolute: { name: 'アブソリュート' },
    },

    // ═══════════════════════════════════════
    //  LADDER BUFFS — DESCRIPTIONS
    // ═══════════════════════════════════════
    ladder_desc: {
        wood: '始まりのクラシック。果てしない旅の始まりの匂いがする。',
        banana: '5タップごとに2倍。',
        beer: '幸運ステータス +5。',
        fire: 'タップごとに +7 m、箱に必要なタップ数 -10。',
        fireman: 'ニュートンクレードル: ヒットごとに +15 m',
        plastic: 'ニュートンクレードルの振りが 0.15秒 速くなる',
        rusty: 'タップごとに 65% の確率で <img src="assets/nut.webp" class="ui-ico"> を発見。',
        tape: '闇市場で 10% オフ。',
        book: '幸運ステータス +7。',
        cactus: 'サブウーファー: +20 m/秒。ニュートンクレードル: ヒットごとに +10 m',
        cement: 'ニュートンクレードル: 威力 +50%、ただしヒットが 0.3秒 遅くなる。',
        neon: '箱を開けるたびに無料リロール',
        scratch: '毎秒5タップ以上で、タップ高度が 1.5倍 になる',
        new_year: '150〜250タップごとにボーナスギフト。',
        bone: 'すべてのタップが2倍',
        crystal: '開けた箱ごとに +3 <img src="assets/golden_nut.webp" class="ui-ico"> を獲得。',
        cyber: '追加アクセサリー スロットをアンロック。',
        golden: 'タップメーターを最大にすると、箱の代わりに鉄の金庫を獲得',
        goth: 'アップグレードとナッツ購入のケースが 20% オフ',
        ice: '滑らかな登り: はしご全体をスワイプタップ可能',
        vine: 'タップ力、サブウーファー、クレードルが +40% 増加。',
        add_stair: 'ブースターの持続時間が 50% 延長; 広告を見るたびに 20 <img src="assets/nut.webp" class="ui-ico"> と 3 <img src="assets/golden_nut.webp" class="ui-ico"> を獲得。',
        calendar_stair: '幸運 +10; 金庫からレジェンダリースキンが出るボーナス確率。',
        marble: 'タップメーター完了時に 25% の確率でゴールデンケースを獲得。',
        quant: '物質分裂: 獲得したナッツの 20% がゴールデン化、箱に必要なタップ数 -50。',
        ufo: '30秒ごとにエイリアンの戦利品ポッドを引き寄せる',
        mimic: '擬態: 選択した2つのはしごのパッシブ能力をコピー。',
        retro: '飛んでいるコインをキャッチ (戦利品: 最大 125 <img src="assets/nut.webp" class="ui-ico"> と 15 <img src="assets/golden_nut.webp" class="ui-ico">)。',
        storm: 'タップごとに +20 m、ただしクリック時に 5% の確率で誤射。',
        strato: '薄い空気: サブウーファーとクレードルの速度が 40% 増加。',
        cosmo: '放置時の資源蓄積上限を3時間に増加。',
        milkyway: '慣性ブースト。ドロップしたケースのティアを +1 アップグレードする確率が 25%。',
        endless: '毎分、高度獲得量が +50% 増加 (最大 +1,000%)。はしごを変更するとボーナスがリセットされる。',
        absolute: '進化の頂点: すべてののはしごのパッシブパークを同時に付与',
    },

    // ═══════════════════════════════════════
    //  SPEAKERS — NAMES
    // ═══════════════════════════════════════
    speaker: {
        old: { name: 'ヴィンテージスピーカー' },
        monster: { name: 'モンスター スタック' },
        cyber: { name: 'サイバースピーカー' },
        cool: { name: '究極サブウーファー' },
    },

    // ═══════════════════════════════════════
    //  SPEAKERS — DESCRIPTIONS
    // ═══════════════════════════════════════
    speaker_desc: {
        old: '基本サブウーファービート (威力 x1)',
        monster: 'サブウーファー威力 +20%。無料箱のクールダウン -2分。',
        cyber: 'サブウーファー威力 +40%。<img src="assets/nut.webp" class="ui-ico"> と <img src="assets/golden_nut.webp" class="ui-ico"> の獲得量が 25% 増加！',
        cool: 'サブウーファー威力 2倍。3ビートごとに +1 <img src="assets/golden_nut.webp" class="ui-ico"> を獲得。',
        fallback: '低音: x{mult}',
    },

    // ═══════════════════════════════════════
    //  NEWTON CRADLES — NAMES
    // ═══════════════════════════════════════
    newton: {
        steel: { name: '鋼球' },
        billiard: { name: '8ボール' },
        plasma: { name: 'プラズマグローブ' },
        planet: { name: 'ミニ地球' },
    },

    // ═══════════════════════════════════════
    //  NEWTON CRADLES — DESCRIPTIONS
    // ═══════════════════════════════════════
    newton_desc: {
        steel: '基本ニュートンクレードルヒット (ダメージ x1)',
        billiard: 'クレードルダメージ +25%。8ヒットごとに高度 2.5倍 と 3〜5 <img src="assets/nut.webp" class="ui-ico"> を獲得。',
        plasma: 'クレードルダメージ +50%。帯電: 毎秒6タップ以上でタップ高度が2倍。5秒間アイドル状態後 — 10回自動タップ。',
        planet: 'クレードルダメージ 2倍、ヒットごとに箱に必要なタップ数 +3。アクティブなブースター1つにつき全ソース +100%。ヒット時に 1% の確率でランダムバフを発動。',
        fallback: 'ヒット: x{mult}',
    },

    // ═══════════════════════════════════════
    //  TALISMANS (CHARMS)
    // ═══════════════════════════════════════
    talisman: {
        clover: { name: '四葉のクローバー' },
        horseshoe: { name: '黄金の馬蹄' },
        paw: { name: 'ウサギの足' },
        coin: { name: '古代のコイン' },
        star: { name: 'ラッキースター' },
        key: { name: 'スケルトンキー' },
        sock: { name: 'ラッキーソックス' },
        sock_alert: '🎉 信じられない！すべてのお守りを集め、SECRET SOCK (幸運 +50) をアンロックしました！',
    },

    // ═══════════════════════════════════════
    //  RARITIES
    // ═══════════════════════════════════════
    rarity: {
        common: 'コモン',
        rare: 'レア',
        epic: 'エピック',
        legendary: 'レジェンダリー',
        special: 'スペシャル',
    },
}, 

    // Корейский 15
    ko: {
        // ═══════════════════════════════════════
        //  GENERAL / GLOBAL
        // ═══════════════════════════════════════
        game: {
            title: '스페이스 사다리',
            version: '스페이스 사다리 v1.0.0',
            height_display: '{height} m',
            height_short: '{height} m',
        },
        assets: {
            top_btn: 'assets/top_kr.webp',
            starter_banner: 'assets/starter_pack_kr.webp',
            bank_banner: 'assets/bank_window2_kr.webp',
        },

        // ═══════════════════════════════════════
        //  UNITS
        // ═══════════════════════════════════════
        units: {
            meters_per_click: '{value} m/탭',
            meters_per_sec: '{value} m/s',
            meters_per_hit: '{value} m/타격',
            level: 'Lv. {level}',
            seconds_short: '{value}초',
            meters: '{value} m',
            meters_plus: '+{value} m',
            pieces: '{count}개',
            min_sec: '{min}분 {sec}초',
            meters_per_click_short: 'm/탭',
            meters_per_sec_short: 'm/s',
            meters_per_hit_short: 'm/타격',
            level_short: 'Lv.',
            meters_unit: 'm',
        },

        // ═══════════════════════════════════════
        //  TOP HUD & MAIN UI
        // ═══════════════════════════════════════
        ui: {
            gold_tooltip: '황금 도토리 얻기',
            donate_btn: '은행',
            deal_btn: '특가',
            top_btn_aria: '명예의 전당',
            zen_title: '젠 모드 (UI 숨김)',
            rewards_btn: '보상',
            rewards_count: '{current}/10',
            buffs_btn: '버프',

            shop_btn: '상점',
            skins_btn: '스킨',
            cases_btn_label: '상자:',
            free_box_label: '무료:',

            close_btn: '✕',
            close_aria: '닫기',
            cancel_btn: '취소',
            buy_btn: '구매',
            claim_btn: '받기',
            equip_btn: '장착',
            equipped_badge: '장착됨',
            later_btn: '나중에',
            not_now_btn: '괜찮아요',
            excellent_btn: '최고야!',
            forward_btn: '정상 정복!',
            claim_and_equip_btn: '받기 및 장착',
            just_claim_btn: '받기만 하기',
            selected_btn: '선택됨',
            buy_for: '{price} {currency}에 구매',
        },

        // ═══════════════════════════════════════
        //  UPGRADES SHOP (Black Market)
        // ═══════════════════════════════════════
        shop: {
            title: '블랙 마켓',
            buy_label: '구매',
            click_title: '탭 파워',
            speaker_title: '서브우퍼',
            newton_title: '뉴턴 크래들',
            cost_suffix: '{cost} m',
        },

        // ═══════════════════════════════════════
        //  BUFFS DRAWER
        // ═══════════════════════════════════════
        buffs: {
            drawer_title: '⚡ 부스터',
            ad_btn: '광고 시청',

            fortune_name: '행운',
            fortune_desc: '행운 스탯 +15',
            turbo_name: '터보 등반',
            turbo_desc: '모든 높이 획득량 3배',
            frenzy_name: '도토리 비',
            frenzy_desc: '탭할 때마다 도토리가 하늘에서 떨어짐',
            autotap_name: '오토파일럿',
            autotap_desc: '초당 15회 자동 탭',
            timewarp_name: '타임 머신',
            timewarp_desc: '5분치 유휴 수익 즉시 획득',
            timewarp_instant: '즉시',
            ufo_name: 'UFO 자석',
            ufo_desc: '자원이 든 전리품 포드를 끌어당김',
            ufo_summon: '소환',
        },

        // ═══════════════════════════════════════
        //  INVENTORY
        // ═══════════════════════════════════════
        inventory: {
            title: '장비 인벤토리',
            tab_ladders: '사다리',
            tab_speakers: '스피커',
            tab_newton: '크래들',
            tab_talismans: '부적',
            available_skins: '사용 가능한 스킨:',
            no_effects: '보너스 효과 없음',
            default_ladder_desc: '표준 사다리 능력치',
            tab_visual: '<img src="assets/roller.webp" class="ui-ico-sm"> 스킨',
            tab_effect: '<img src="assets/perk.webp" class="ui-ico-sm"> 특성',
            equipped_btn: '장착됨',
            unequip_btn: '제거',
            equip_btn: '장착',
            in_order: '<img src="assets/locker.webp" class="ui-ico-sm"> 순서대로',
            fully_equipped: '✔ 완전 장착',
            equip_all: '모두 장착',
            visual_equipped: '<img src="assets/roller.webp" class="ui-ico-sm"> 스킨 적용 ✓',
            visual_only: '<img src="assets/roller.webp" class="ui-ico-sm"> 스킨만',
            effect_equipped: '<img src="assets/perk.webp" class="ui-ico-sm"> 특성 적용 ✓',
            effect_only: '<img src="assets/perk.webp" class="ui-ico-sm"> 특성만',
            item_locked: '<img src="assets/locker.webp" class="ui-ico"> 잠긴 아이템',
            mimic_setup: '⚙️ 슬롯 구성 ({slot0}, {slot1})',
            cyber_setup: '🦾 추가 슬롯 튜닝',
            item_fallback: '아이템',
            luck_plus: '행운 +{luck}',
            slot_empty: '비어 있음',
            slot_default: '표준 능력치',
            slot_1_selected: '✔ 슬롯 1',
            slot_2_selected: '✔ 슬롯 2',
            select_action: '+ 선택',
            cyber_installed: '✔ 설치됨',
        },

        // ═══════════════════════════════════════
        //  CUSTOMIZATION (Speakers/Newton)
        // ═══════════════════════════════════════
        customization: {
            title: '커스터마이징',
            base_level: '기본 레벨: {level}',
            base_level_prefix: '기본 레벨:',
            power: '파워: {value}',
            power_mps: '파워: {value} m/s',
            upgrade_btn: '업그레이드',
            speakers_title: '📻 서브우퍼',
            newton_title: '⚪ 뉴턴 크래들',
            hit_power: '타격: {power} m ({speed}초마다)',
            upgrade_cost: '업그레이드: {cost} m',
        },

        // ═══════════════════════════════════════
        //  CYBERPUNK SLOT
        // ═══════════════════════════════════════
        cyber: {
            title: '🦾 사이버펑크 슬롯',
            desc: '잠금 해제된 장비(스피커, 크래들, 부적)에서 추가 특성 1개를 선택하세요:',
            tab_speakers: '스피커',
            tab_newton: '크래들',
            tab_talismans: '부적',
            install_btn: '임플란트 설치',
        },

        // ═══════════════════════════════════════
        //  MIMIC
        // ═══════════════════════════════════════
        mimic: {
            title: '🎭 미믹 능력',
            desc: '잠금 해제된 사다리 2개를 선택하여 수동 특성을 복사하세요:',
            slot1: '슬롯 1',
            slot2: '슬롯 2',
            apply_btn: '능력 적용',
        },

        // ═══════════════════════════════════════
        //  CONFIRMATION MODAL
        // ═══════════════════════════════════════
        confirm: {
            title: '확인',
            desc: '골드를 사용하시겠습니까?',
            buy_btn: '구매 ({cost} <img src="assets/golden_nut.webp" class="ui-ico">)',
            buy_label: '구매',
            buff_title: '부스터 활성화',
            buff_desc: '부스터를 활성화하기 위해 {cost} <img src="assets/golden_nut.webp" class="ui-ico">를 사용하시겠습니까?',
            not_enough_gold: '황금 도토리가 부족합니다',
            gear_title: '장비 스킨 잠금 해제',
            gear_desc: '"{name}"을(를) {price} <img src="assets/golden_nut.webp" class="ui-ico">에 구매하시겠습니까?',
            talisman_title: '새로운 행운 부적',
            talisman_desc: '"{name}" 부적을 {price} <img src="assets/golden_nut.webp" class="ui-ico">에 구매하시겠습니까?',
            deal_title: '일일 특가',
            deal_desc: '"{name}"을(를) {price} <img src="assets/golden_nut.webp" class="ui-ico">에 구매하시겠습니까?',
            item_title: '아이템 구매',
            item_desc: '"{name}"을(를) {price}에 구매하시겠습니까?',
            ufo_desc: 'UFO를 소환하기 위해 39 <img src="assets/golden_nut.webp" class="ui-ico">를 사용하시겠습니까?',
        },

        // ═══════════════════════════════════════
        //  DONATE / GOLDEN BANK
        // ═══════════════════════════════════════
        donate: {
            badge: '금고',
            title: '황금 은행',
            vip_note: '모든 구매는 리더보드에서 <b>VIP <img src="assets/crown.webp" class="ui-ico-sm"></b>를 영구적으로 잠금 해제합니다!',
            free_gold_title: '무료 골드',
            free_gold_val: '광고당 +15 <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            free_gold_btn: '받기',
            hit_badge: '🔥 베스트셀러',
            adfree_title: '광고 제거 + VIP',
            adfree_desc: '모든 강제 광고를 영원히 제거합니다!',
            pack_handful: '도토리 한 줌',
            pack_pouch: '도토리 주머니',
            pack_pouch_tag: '상자 1개 구매 가능',
            pack_crate: '도토리 상자',
            pack_safe: '사업가 금고',
            pack_safe_tag: '+40% 가성비',
            purchased: '구매 완료',
            price_99: '99 얀',
            price_249: '249 얀',
            price_590: '590 얀',
            price_1390: '1,390 얀',
        },

        // ═══════════════════════════════════════
        //  STARTER PACK
        // ═══════════════════════════════════════
        starter: {
            badge: '🔥 50배 가치',
            timer_text: '제공 종료까지:',
            golden_nuts: '황금 도토리',
            regular_nuts: '일반 도토리',
            wooden_boxes: '나무 상자',
            iron_safes: '철제 금고',
            golden_cases: '황금 상자',
            cyber_speaker: '"사이버"',
            cyber_speaker_sub: '스피커 (에픽)',
            no_ads: '광고 제거',
            no_ads_sub: '강제 광고를 영원히 제거',
            vip_status: 'VIP 상태',
            vip_status_sub: 'TOP에서 영구적인 황금 테두리',
            claim_btn: '모두 받기 <s style="color: rgba(0,0,0,0.65); font-size: 13px; margin: 0 5px;">2,099 얀</s> 39 얀',
            timer_badge: '39 얀',
        },

        // ═══════════════════════════════════════
        //  CASE VAULT
        // ═══════════════════════════════════════
        cases: {
            odds_nuts: '너트',
            badge: '보관소',
            title: '상자 보관소',
            safe_tile: '금고',
            bonus_label: '보관소 보너스',
            bonus_gold: '+15 황금 도토리',
            wooden_name: '나무 상자',
            iron_name: '철제 금고',
            gold_name: '황금 상자',
            nut_loot_50: '도토리 50개',
            nut_loot_150: '도토리 150개',
            nut_loot_300: '도토리 300개',
            open_btn: '열기',
            buy_more_title: '더 구매',
            open_all_title: '전부 열기',
            in_game: '게임 내 획득',
            buy_price: '{price} <img src="{icon}" class="ui-ico-sm"> 구매',
            buy_multi_title: '일괄 구매',
            ad_claim: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 받기',
            ready: '준비 완료!',
            popup_case: '+<img src="assets/wooden_box.webp" style="width: 17px; height: 17px; vertical-align: -3px; margin: 0 2px;"> 상자!',
            box_label: '상자: {box}/{needed}',
        },

        // ═══════════════════════════════════════
        //  MULTI BUY
        // ═══════════════════════════════════════
        multi_buy: {
            choose_amount: '수량 선택:',
            total: '합계:',
        },

        // ═══════════════════════════════════════
        //  BATCH RESULTS
        // ═══════════════════════════════════════
        batch_result: {
            title: '{count}개 상자 개봉',
            claim_all: '모두 받기',
            open_more: '10개 더 열기',
            open_more_count: '{count}개 더 열기',
            new_count: '<span style="color:#2ecc71;">새로 획득: {count} 🪜</span>',
            new_zero: '<span style="color:#7f8c8d;">새로 획득: 0</span>',
            new_item_badge: '<span style="color:#2ecc71; font-size:11.5px; font-weight:900;">★ 신규!</span>',
            duplicate_badge: '<span style="color:#e67e22; font-size:11.5px; font-weight:800;">중복 (+{gold} <img src="assets/golden_nut.webp" class="ui-ico-sm">)</span>',
        },

        // ═══════════════════════════════════════
        //  GACHA (ROULETTE)
        // ═══════════════════════════════════════
        gacha: {
            title: '상자 여는 중...',
            opening_title: '개봉 중: {name}',
            again_btn: '다시',
            again_count: '다시 ({count})',
            batch_btn: '×10',
            skip_btn: '건너뛰기 ⏩',
            close_btn: '닫기',
            reroll_btn: '📺 광고로 다시 돌리기',
            reroll_neon: '<img src="assets/perk.webp" class="ui-ico-sm"> 다시 돌리기 (네온)',
            reroll_ad: '<img src="assets/ico_ad_tv.webp" class="ui-ico-sm"> 광고로 다시 돌리기',
            duplicate: '중복 → +{gold} <img src="assets/golden_nut.webp" class="ui-ico">',
        },

        // ═══════════════════════════════════════
        //  LADDER PREVIEW
        // ═══════════════════════════════════════
        ladder_preview: {
            effect_desc: '특성 설명',
        },

        // ═══════════════════════════════════════
        //  DAILY CALENDAR
        // ═══════════════════════════════════════
        calendar: {
            title: '일일 보상',
            subtitle: '매일 로그인하세요! 7일차에 독점 사다리 스킨을 받으세요.',
            missed_alert: '⚠️ 출석을 놓쳤습니다!',
            restore_streak: '연속 로그인 복구',
            reset_day1: '1일차로 초기화',
            day7_title: '7일차: 슈퍼 프라이즈',
            day7_desc: '"캘린더" 스킨 (에픽)',
            double_ad: '▶ 광고로 2배 (x2)',
            claim_normal: '일반 받기',
            day_badge: '{day}일차',
            day7_title_loop: '7일차: 최고 보상',
            day7_desc_loop: '3 <img src="assets/golden_box.webp" class="ui-ico-sm"> 황금 상자',
            today_badge: '<span style="color: #f1c40f; font-weight: bold; font-size: 12px;">오늘!</span>',
            double_claim_loop: '▶ 광고로 2배 (6 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_normal_loop: '일반 받기 (3 <img src="assets/golden_box.webp" class="ui-ico-sm">)',
            claim_skin_btn: '"캘린더" 스킨 받기!',
            claimed_badge: '<span style="color: #2ecc71; font-weight: bold; font-size: 12px;">✔ 받음</span>',
            day7_locked_badge: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 7일차</span>',
        },

        // ═══════════════════════════════════════
        //  AD STREAK
        // ═══════════════════════════════════════
        ad_streak: {
            title: '광고 연속 시청',
            reset_timer: '초기화까지:',
            footer: '게임 내 시청한 모든 광고가 진행도에 반영됩니다.',
            claimed: '<span style="color: #27ae60; font-weight: bold; font-size: 12px;">✔ 받음</span>',
            claim_btn: '받기',
            locked_label: '<span style="color: #7f8c8d; font-size: 11px; display: inline-flex; align-items: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> {step}회 광고</span>',
            popup_safe: '+1 금고!',
            popup_nuts: '+600 도토리!',
            popup_gold: '+{gold} 골드!',
        },

        // ═══════════════════════════════════════
        //  AD STREAK REWARDS
        // ═══════════════════════════════════════
        ad_streak_rewards: [
            { step: 1, title: '+300 <img src="assets/nut.webp" class="ui-ico"> 도토리' },
            { step: 2, title: '+20 <img src="assets/clover_lucky.webp" class="ui-ico"> (15분)' },
            { step: 3, title: '+5 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 4, title: '+600 <img src="assets/nut.webp" class="ui-ico"> 도토리' },
            { step: 5, title: '1 <img src="assets/iron_box.webp" class="ui-ico"> 금고' },
            { step: 6, title: '<img src="assets/x3_bust.webp" class="ui-ico"> 터보 3배 (3분)' },
            { step: 7, title: '+15 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 8, title: '+1,000 <img src="assets/nut.webp" class="ui-ico"> 도토리' },
            { step: 9, title: '+25 <img src="assets/golden_nut.webp" class="ui-ico">' },
            { step: 10, title: '<img src="assets/add_stair.webp" class="ui-ico"> "빌보드" 스킨' },
        ],

        // ═══════════════════════════════════════
        //  DAILY CALENDAR REWARDS
        // ═══════════════════════════════════════
        calendar_rewards: [
            { day: 1, text: '+500 <img src="assets/nut.webp" class="ui-ico-sm">' },
            { day: 2, text: '1 <img src="assets/iron_box.webp" class="ui-ico-sm">' },
            { day: 3, text: '1 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 4, text: '+75 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 5, text: '2 <img src="assets/golden_box.webp" class="ui-ico-sm">' },
            { day: 6, text: '+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">' },
            { day: 7, text: '"캘린더" 스킨' },
        ],

        // ═══════════════════════════════════════
        //  OFFLINE EARNINGS MODAL
        // ═══════════════════════════════════════
        offline: {
            title: '돌아오신 것을 환영합니다!',
            away_time: '부재 시간: {time}',
            away_prefix: '부재 시간:',
            limit_label: '한도: {limit}',
            limit_prefix: '한도:',
            speaker_earned: '서브우퍼 획득:',
            newton_earned: '크래들 획득:',
            cases_found: '발견된 상자: {count}개',
            cases_found_prefix: '발견된 상자:',
            total_earned: '총 획득 높이:',
            double_ad: '▶ 광고로 2배',
            claim_normal: '일반 받기',
            limit_3h: '3시간',
            limit_30m: '30분',
            double_btn: '▶ 광고로 2배 (+{meters} m, {cases} <img src="assets/wooden_box.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  MILESTONES
        // ═══════════════════════════════════════
        milestones: {
            stamp: '도달',
            double_ad: '▶ 광고로 2배 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            claim_normal: '일반 받기 (+{reward} <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
        },

        // ═══════════════════════════════════════
        //  HEIGHT MILESTONES DATA
        // ═══════════════════════════════════════
        height_milestones: [
            { height: 250, name: '옥상', desc: '새와 높은 집세만이 당신 위에 있습니다. 첫 100미터를 돌파했습니다!' },
            { height: 1000, name: '폭풍 전선', desc: '젖은 발판에 꽉 잡으세요. 열린 하늘과 천둥이 기다립니다!' },
            { height: 10000, name: '성층권', desc: '순항 고도입니다. 아래로 지구의 곡선이 선명하게 보입니다.' },
            { height: 100000, name: '우주', desc: '중력이 포기합니다. 당신은 공식적으로 완전한 무중력 상태입니다!' },
            { height: 1000000, name: '은하수', desc: '100만 미터. 당신은 이성을 훨씬 넘어선 여정을 떠났습니다.' },
            { height: 10000000, name: '대공허', desc: '지도의 끝인가요? 아닙니다. 이것은 절대적 무의 시작일 뿐입니다.' },
        ],

        // ═══════════════════════════════════════
        //  STAGE LORE (LOGBOOK)
        // ═══════════════════════════════════════
        stages_lore: [
            { id: 0, name: '낡은 아파트 단지', desc: '당신의 터전입니다. 콘크리트 정글과 낡은 나무 계단의 삐걱거리는 소리. 당신의 끝없는 상승이 시작되는 곳입니다.' },
            { id: 1, name: '옥상', desc: 'TV 안테나, 비둘기, 도시 교통보다 높습니다. 첫 100미터가 뒤로 물러나고 공기가 더 맑아집니다.' },
            { id: 2, name: '폭풍 전선', desc: '높게 솟은 짙은 구름, 눈부신 번개, 그리고 오존의 날카로운 냄새. 발판이 미끄럽습니다. 꽉 잡으세요!' },
            { id: 3, name: '성층권', desc: '지구 대기의 가장자리입니다. 하늘이 짙은 울트라마린으로 변하며 지구의 선명한 푸른 곡선을 드러냅니다.' },
            { id: 4, name: '심우주', desc: '조용한 위성과 시간 없는 공허의 궤도입니다. 중력이 항복했습니다. 사다리가 유일한 상승 경로입니다.' },
            { id: 5, name: '은하수', desc: '먼 은하의 나선, 반짝이는 성운, 그리고 우주 먼지. 지구의 번거로움에서 100만 미터 위에 있습니다.' },
            { id: 6, name: '대공허', desc: '알려진 우주 가장자리의 사건의 지평선입니다. 시간이 우주적 무한으로 녹아드는 궁극의 고도입니다.' },
        ],

        // ═══════════════════════════════════════
        //  LOCATIONS (HUD Names & Checkpoints)
        // ═══════════════════════════════════════
        locations: {
            khrushchevka: '낡은 아파트 단지',
            roofs: '옥상',
            storm_front: '폭풍 전선',
            stratosphere: '성층권',
            open_space: '심우주',
            milky_way: '은하수',
            endless: '대공허',

            checkpoint_0: '0 m — 낡은 아파트 단지',
            checkpoint_250: '250 m — 옥상',
            checkpoint_1000: '1,000 m — 폭풍 전선',
            checkpoint_10000: '10,000 m — 성층권',
            checkpoint_100000: '100,000 m — 심우주',
            checkpoint_1000000: '1,000,000 m — 은하수',
            checkpoint_10000000: '10,000,000 m — 대공허',
        },

        // ═══════════════════════════════════════
        //  LOCATION CARD (LOGBOOK)
        // ═══════════════════════════════════════
        location_card: {
            explored_badge: '탐험 완료',
            signal_lost_badge: '신호 손실',
            unknown_sector: '알 수 없는 구역',
            height_label: '고도: {height} m',
            target_label: '목표: {target} m (남은 거리: {remaining} m)',
            locked_desc: '센서가 이 고도에서 심각한 이상을 감지했습니다. 신호 데이터를 해독하려면 계속 등반하세요.',
        },

        // ═══════════════════════════════════════
        //  RETRO CHALLENGE
        // ═══════════════════════════════════════
        retro: {
            challenge_title: '지구력 테스트',
            challenge_desc: '게임에 20분 동안 머물면 독점 레트로 스킨을 무료로 획득하세요!',
            skin_name: '"레트로" 스킨',
            ability_label: '<b style="color: #f1c40f;">능력:</b> 날아다니는 동전을 잡으세요 (전리품: 최대 125 <img src="assets/nut.webp" class="ui-ico-sm"> 및 15 <img src="assets/golden_nut.webp" class="ui-ico-sm">).',
            time_left: '남은 시간:',
            challenge_complete: '테스트 완료!',
            challenge_reward: '20분을 버텼습니다! 여기 당신의 보상이 있습니다:',
            epic_skin: '에픽 "레트로" 스킨',
        },

        // ═══════════════════════════════════════
        //  SHORTCUT
        // ═══════════════════════════════════════
        shortcut: {
            bonus_badge: '보너스',
            title: '홈 화면에 게임을 추가하고 단 한 번의 탭으로 등반하세요!',
            desc: '다음 프롬프트에서 "추가"를 탭하면 보상이 당신의 것입니다',
            reward_label: '설치 보상:',
            reward_value: '+100 <img src="assets/golden_nut.webp" class="ui-ico-lg">',
            add_btn: '추가 (+100 <img src="assets/golden_nut.webp" class="ui-ico-sm">)',
            decline_title: '정말 보상을 원하지 않으시나요?',
            decline_desc: '100 <img src="assets/golden_nut.webp" class="ui-ico">가 당신을 기다리고 있습니다. 바로가기를 추가하는 데 2초면 충분합니다!',
            decline_claim: '100 <img src="assets/golden_nut.webp" class="ui-ico-sm"> 받기',
        },

        // ═══════════════════════════════════════
        //  LEADERBOARD
        // ═══════════════════════════════════════
        leaderboard: {
            league_badge: '등반가 리그',
            title: '명예의 전당',
            season_desc: '글로벌 우주 정복자 순위',
            tab_alltime: '전체 기간',
            tab_week: '시즌 (주간)',
            loading: '<div style="text-align:center;color:#bdc3c7;padding:20px;">순위 로딩 중...</div>',
            desc_alltime: '글로벌 우주 정복자 순위',
            desc_week: '매주 월요일 00:00에 초기화',
            anon: '익명 등반가',
            you_player: '당신 (플레이어)',
            you_vip: '<span>당신 (VIP)</span>',
            you: '<span>당신</span>',
        },

        // ═══════════════════════════════════════
        //  DAILY DEAL
        // ═══════════════════════════════════════
        daily_deal: {
            badge: '핫 계약',
            title: '오늘의 특가',
            timer_label: '새 계약까지',
            reroll_btn: '<img src="assets/ico_ad_tv.webp" class="ui-ico"> 새로고침 ({left}/5)',
            reroll_exhausted: '새로고침 횟수 소진 (0/5)',
            in_collection: '✔ 소장 중',
            buy_btn: '구매: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {sale} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            not_enough: '골드 {need}개 더 필요 <img src="assets/golden_nut.webp" class="ui-ico-sm"> → 은행',
            discount_badge: '{rarity} • -{percent}% 할인',
            unique_ladder: '독점 사다리',
            luck_desc: '전체 행운 +{luck}',
        },

        // ═══════════════════════════════════════
        //  SETTINGS
        // ═══════════════════════════════════════
        settings: {
            title: '설정',
            language: '🌐 언어',
            music: '음악 및 분위기',
            tap_sounds: '탭 사운드',
            speaker_bass: '서브우퍼 베이스',
            newton_hit: '크래들 타격음',
            rewards_sfx: '보상 및 효과음',
            vibration: '진동 피드백',
            support_btn: '지원 / 커뮤니티',
            support_alert: '게임 커뮤니티 및 지원: t.me/your_game_group',
        },

        // ═══════════════════════════════════════
        //  LUCK
        // ═══════════════════════════════════════
        luck: {
            title: '당신의 행운',
            total_label: '종합 스탯',
            influence_title: '행운이 게임 플레이에 미치는 영향:',
            influence_cases: '탭하는 동안 무작위 상자 드롭률을 증가시킵니다.',
            influence_nuts: '상자 안에서 발견되는 도토리 양을 증가시킵니다.',
            influence_rarity: '에픽 및 전설 스킨 획득 확률을 높입니다.',
            breakdown_title: '스탯 세부 정보:',
            talismans_title: '부적 컬렉션:',
            buff_label: '행운',
            plus_luck: '행운 +{value}',
            equipped_badge: '<div style="font-size: 9px; color: #f1c40f; margin-top: 4px;">장착됨</div>',
            equip_btn: '장착',
            locked_badge: '<div style="font-size: 9px; color: #7f8c8d; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 3px;"><img src="assets/locker.webp" class="ui-ico-sm"> 잠김</div>',
            ladder_item: '<div><img src="assets/icon_stair.webp" class="ui-ico-sm"> 사다리 "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            talisman_item: '<div><img src="assets/talismans.webp" class="ui-ico-sm"> 부적 "{name}": <b style="color:#2ecc71;">+{luck}</b></div>',
            cyber_item: '<div>🦾 사이버 슬롯 "{name}": <b style="color:#00ffff;">+{luck}</b></div>',
            ad_fortune: '<div>📺 광고 부스트 (행운의 징조): <b style="color:#2ecc71;">+15</b></div>',
            no_buffs: '<div>활성화된 행운 부스터가 없습니다.</div>',
        },

        // ═══════════════════════════════════════
        //  THANK YOU MODAL
        // ═══════════════════════════════════════
        thank_you: {
            default_title: '골드 지급 완료!',
            default_desc: '함께 플레이해 주셔서 감사합니다!',
            vip_badge: 'VIP 상태 활성화',
        },

        // ═══════════════════════════════════════
        //  MODALS (showThankYouModal)
        // ═══════════════════════════════════════
        modal: {
            starter: {
                title: '스타터 팩!',
                desc: '산더미 같은 상자, 도토리, 광고 제거 접근 권한, 그리고 "사이버" 스킨이 당신의 것입니다! 지원해 주셔서 감사합니다 <img src="assets/crown.webp" class="ui-ico-sm">',
            },
            bank_gold: {
                title: '골드 획득!',
                desc: '광고를 시청하여 <b style="color:#f1c40f;">+{amount} <img src="assets/golden_nut.webp" class="ui-ico"></b>를 획득했습니다!',
            },
            adfree: {
                title: '광고 제거!',
                desc: '강제 광고가 영원히 제거되었습니다! 게임을 지원해 주셔서 감사합니다 ❤️',
            },
            gold_credited: {
                title: '골드 지급 완료!',
                desc: '밸런스에 +{amount} <img src="assets/golden_nut.webp" class="ui-ico">가 추가되었습니다. 지원해 주셔서 감사합니다 ❤️! 등반을 즐기세요!',
            },
            shortcut_reward: {
                title: '골드 보상!',
                desc: '밸런스에 +100 <img src="assets/golden_nut.webp" class="ui-ico">가 추가되었습니다!<br><span style="color: #f1c40f; font-weight: bold; font-size: 13px; display: inline-block; margin-top: 6px;">플레이해 주셔서 감사합니다! ❤️</span>',
            },
            deal: {
                buy_btn: '구매: <s style="color: rgba(0,0,0,0.55); font-size: 12px;">{base}</s> {price} <img src="assets/golden_nut.webp" class="ui-ico-sm">',
            },
        },

        // ═══════════════════════════════════════
        //  PARTICLES & FLOATING TEXTS
        // ═══════════════════════════════════════
        particle: {
            starter_obtained: '스타터 팩 잠금 해제!',
            sponsor: '📺 스폰서: +{nuts} 🔩 & +{gold} 🟡!',
            turbo_boost: '터보 부스트 3배 ({seconds}초)!',
            luck_boost: '행운 +{value}!',
            frenzy: '도토리 비!',
            autotap: '오토파일럿 (초당 15탭)!',
            turbo_income: '터보 부스트 3배!',
            luck_15: '행운 +15!',
            ufo_case: '+1 상자!',
            ufo_safe: '+1 금고!',
            billiard_crit: '🎱 2.5배! +{nuts} 🔩',
            planet_turbo: '🌍 터보 3배 (20초)!',
            planet_luck: '🌍 행운 +15 (60초)!',
            planet_frenzy: '🌍 도토리 비 (15초)!',
            hawking: '💥 호킹 복사: +100,000 m!',
            storm_discharge: '방전 (10배)!',
            absolute_unlocked: '절대 잠금 해제!',
            legendary_skin: '👑 전설 스킨: {name}!',
            retro_coin: '+{nuts} 도토리, +{gold}!',
            banana_double: '🍌 2배 탭!',
            combo: '🔥 {mult}배 ({cps} CPS)',
            case_drop: '+1 상자!',
            golden_case_milky: '황금 상자 (은하수)!',
            golden_case: '황금 상자!',
            safe_milky: '금고 (은하수)!',
            safe_luck: '금고 (행운)!',
            iron_safe: '철제 금고!',
            rusty_nut: '+100',
            rusty_box: '+1 상자!',
            rusty_safe: '+1 금고!',
            marble_double: '+{value} (2배)',
            jackpot: '잭팟: +1!',
            timed_box: '+1 상자 획득!',
            crystal_gold: '+{value} (크리스탈)!',
            shop_spent: '-{cost} m',
            streak_dupe: '중복: +{value}!',
            streak_billboard: '🎉 빌보드 스킨 잠금 해제!',
            calendar_day: '{day}일차 보상 획득!',
            calendar_skin: '캘린더 스킨 잠금 해제!',
            calendar_bonus: '+{cases} 황금 상자!',
            timewarp_report: '+{meters} m',
            timewarp_nuts: '+{nuts} 도토리',
            timewarp_gold: '+{gold} 골드',
            magnet_ufo: 'UFO 자석!',
        },

        // ═══════════════════════════════════════
        //  LADDER SKINS — NAMES
        // ═══════════════════════════════════════
        ladder: {
            wood: { name: '나무' },
            banana: { name: '바나나' },
            beer: { name: '맥주 상자' },
            fire: { name: '불타는' },
            fireman: { name: '비상구' },
            plastic: { name: '플라스틱' },
            rusty: { name: '녹슨' },
            tape: { name: '덕트 테이프' },
            book: { name: '책 쌓기' },
            cactus: { name: '선인장' },
            cement: { name: '콘크리트' },
            neon: { name: '네온' },
            scratch: { name: '스크래쳐' },
            new_year: { name: '홀리데이' },
            add_stair: { name: '빌보드' },
            bone: { name: '해골' },
            crystal: { name: '크리스탈' },
            cyber: { name: '사이버펑크' },
            golden: { name: '황금' },
            goth: { name: '고딕' },
            ice: { name: '빙하' },
            vine: { name: '담쟁이덩굴' },
            calendar_stair: { name: '캘린더' },
            marble: { name: '대리석 황금' },
            quant: { name: '양자' },
            ufo: { name: 'UFO' },
            mimic: { name: '미믹' },
            retro: { name: '레트로' },
            storm: { name: '폭풍 전선' },
            strato: { name: '성층권' },
            cosmo: { name: '심우주' },
            milkyway: { name: '은하수' },
            endless: { name: '특이점' },
            absolute: { name: '절대' },
        },

        // ═══════════════════════════════════════
        //  LADDER BUFFS — DESCRIPTIONS
        // ═══════════════════════════════════════
        ladder_desc: {
            wood: '시작 클래식. 끝없는 여정의 시작 냄새가 납니다.',
            banana: '5번째 탭마다 2배.',
            beer: '행운 스탯 +5.',
            fire: '탭당 +7 m, 상자 획득에 필요한 탭 수 -10.',
            fireman: '뉴턴 크래들: 타격당 +15 m',
            plastic: '뉴턴 크래들 스윙 속도 0.15초 단축',
            rusty: '탭할 때마다 <img src="assets/nut.webp" class="ui-ico">를 찾을 확률 65%.',
            tape: '블랙 마켓에서 10% 할인.',
            book: '행운 스탯 +7.',
            cactus: '서브우퍼: +20 m/s. 뉴턴 크래들: 타격당 +10 m',
            cement: '뉴턴 크래들: 파워 +50%, 하지만 타격 속도가 0.3초 느려집니다.',
            neon: '상자를 열 때마다 무료 다시 돌리기',
            scratch: '초당 5회 이상 탭 시, 탭 높이가 1.5배가 됩니다.',
            new_year: '150-250탭마다 보너스 선물.',
            bone: '모든 탭 2배',
            crystal: '상자를 열 때마다 +3 <img src="assets/golden_nut.webp" class="ui-ico"> 획득.',
            cyber: '추가 액세서리 슬롯을 잠금 해제합니다.',
            golden: '탭 미터를 최대치로 채우면 상자 대신 철제 금고가 보상됩니다.',
            goth: '업그레이드 및 도토리 구매 상자에 20% 할인',
            ice: '미끄러운 등반: 사다리 전체를 스와이프 탭할 수 있습니다.',
            vine: '탭 파워, 서브우퍼, 크래들을 +40% 증가시킵니다.',
            add_stair: '부스터 지속 시간 50% 증가; 광고를 시청할 때마다 20 <img src="assets/nut.webp" class="ui-ico"> 및 3 <img src="assets/golden_nut.webp" class="ui-ico">를 획득합니다.',
            calendar_stair: '행운 +10; 금고에서 전설 스킨 획득 확률 증가.',
            marble: '탭 미터 완료 시 25% 확률로 황금 상자 획득.',
            quant: '물질 분열: 획득한 도토리의 20%가 황금 도토리로 변하며, 상자까지의 탭 수 -50.',
            ufo: '30초마다 외계인 전리품 포드를 끌어당깁니다.',
            mimic: '모방: 선택한 사다리 2개의 수동 능력을 복사합니다.',
            retro: '날아다니는 동전을 잡으세요 (전리품: 최대 125 <img src="assets/nut.webp" class="ui-ico"> 및 15 <img src="assets/golden_nut.webp" class="ui-ico">).',
            storm: '탭당 +20 m, 하지만 클릭 시 5% 확률로 오발생.',
            strato: '얇은 공기: 서브우퍼 및 크래들 속도 40% 증가.',
            cosmo: '유휴 자원 축적 한도를 3시간으로 증가시킵니다.',
            milkyway: '관성 부스트. 드롭된 상자 등급을 +1 업그레이드할 확률 25%.',
            endless: '매분 높이 획득량 +50% 증가 (최대 +1,000%). 사다리를 변경하면 보너스가 초기화됩니다.',
            absolute: '진화의 정점: 모든 사다리의 수동 특성을 동시에 부여합니다.',
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — NAMES
        // ═══════════════════════════════════════
        speaker: {
            old: { name: '빈티지 스피커' },
            monster: { name: '몬스터 스택' },
            cyber: { name: '사이버 스피커' },
            cool: { name: '슈프림 서브우퍼' },
        },

        // ═══════════════════════════════════════
        //  SPEAKERS — DESCRIPTIONS
        // ═══════════════════════════════════════
        speaker_desc: {
            old: '기본 서브우퍼 비트 (파워 x1)',
            monster: '서브우퍼 파워 +20%. 무료 상자 쿨다운 -2분.',
            cyber: '서브우퍼 파워 +40%. <img src="assets/nut.webp" class="ui-ico"> 및 <img src="assets/golden_nut.webp" class="ui-ico"> 25% 더 획득!',
            cool: '서브우퍼 파워 2배. 3번째 비트마다 +1 <img src="assets/golden_nut.webp" class="ui-ico"> 획득.',
            fallback: '베이스: x{mult}',
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — NAMES
        // ═══════════════════════════════════════
        newton: {
            steel: { name: '강철 구슬' },
            billiard: { name: '8번 공' },
            plasma: { name: '플라즈마 글로브' },
            planet: { name: '미니 지구' },
        },

        // ═══════════════════════════════════════
        //  NEWTON CRADLES — DESCRIPTIONS
        // ═══════════════════════════════════════
        newton_desc: {
            steel: '기본 뉴턴 크래들 타격 (데미지 x1)',
            billiard: '크래들 데미지 +25%. 8번째 타격마다 높이 2.5배 및 3–5 <img src="assets/nut.webp" class="ui-ico"> 획득.',
            plasma: '크래들 데미지 +50%. 전기화: 초당 6회 이상 탭 시 탭 높이 2배. 5초 유휴 후 — 자동 탭 10회.',
            planet: '크래들 데미지 2배, 타격당 상자까지의 탭 수 +3. 활성화된 부스터당 모든 소스 +100%. 타격 시 1% 확률로 무작위 부스트 발동.',
            fallback: '타격: x{mult}',
        },

        // ═══════════════════════════════════════
        //  TALISMANS (CHARMS)
        // ═══════════════════════════════════════
        talisman: {
            clover: { name: '네잎 클로버' },
            horseshoe: { name: '황금 말발굽' },
            paw: { name: '토끼 발' },
            coin: { name: '고대 동전' },
            star: { name: '행운의 별' },
            key: { name: '스켈레톤 키' },
            sock: { name: '행운의 양말' },
            sock_alert: '🎉 놀라워요! 모든 부적을 수집하고 SECRET SOCK (행운 +50)을 잠금 해제했습니다!',
        },

        // ═══════════════════════════════════════
        //  RARITIES
        // ═══════════════════════════════════════
        rarity: {
            common: '일반',
            rare: '희귀',
            epic: '에픽',
            legendary: '전설',
            special: '스페셜',
        },
    }
};

Object.keys(TRANSLATIONS).forEach(lang => {
    if (TRANSLATIONS[lang].particle) {
        TRANSLATIONS[lang].particles = TRANSLATIONS[lang].particle;
    }
});

// ═══════════════════════════════════════════════════════════════
//  i18n ВСПОМОГАТЕЛЬНАЯ ЛОГИКА
// ═══════════════════════════════════════════════════════════════

function determineCurrentLang() {
    let lang = 'ru';
    try {
        let urlLang = null;
        if (typeof window !== 'undefined' && window.location && window.location.search) {
            urlLang = new URLSearchParams(window.location.search).get('lang');
        }
        if (urlLang) {
            lang = urlLang.slice(0, 2).toLowerCase();
        } else if (typeof window !== 'undefined' && window.ysdk && window.ysdk.environment && window.ysdk.environment.i18n && window.ysdk.environment.i18n.lang) {
            lang = window.ysdk.environment.i18n.lang.slice(0, 2).toLowerCase();
        } else if (typeof navigator !== 'undefined' && navigator.language) {
            lang = navigator.language.slice(0, 2).toLowerCase();
        }
    } catch (e) {
        lang = 'ru';
    }
    if (!TRANSLATIONS[lang]) {
      lang = 'en';
    }
    return lang;
}

let currentLang = determineCurrentLang();

function t(key, params = {}) {
    if (!key || typeof key !== 'string') return key;

    function getByPath(obj, path) {
        if (!obj) return undefined;
        if (obj[path] !== undefined) return obj[path];
        const parts = path.split('.');
        let curr = obj;
        for (let i = 0; i < parts.length; i++) {
            if (curr && typeof curr === 'object' && parts[i] in curr) {
                curr = curr[parts[i]];
            } else {
                return undefined;
            }
        }
        return curr;
    }

    let val = getByPath(TRANSLATIONS[currentLang], key);
    if (val === undefined && currentLang !== 'ru') {
        val = getByPath(TRANSLATIONS['ru'], key);
    }
    if (val === undefined || val === null) {
        return key;
    }

    if (typeof val === 'string') {
        return val.replace(/\{([^{}]+)\}/g, (match, paramName) => {
            return (params && params[paramName] !== undefined) ? params[paramName] : match;
        });
    }

    return val;
}

function applyHtmlTranslations() {
    if (typeof document !== 'undefined') {
        document.title = t('game.title');
    }
    document.querySelectorAll('[data-i18n-src]').forEach(el => {
        const key = el.getAttribute('data-i18n-src');
        if (key) el.setAttribute('src', t(key));
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (key) el.setAttribute('title', t(key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (key) el.setAttribute('aria-label', t(key));
    });
}

if (typeof window !== 'undefined') {
    window.TRANSLATIONS = TRANSLATIONS;
    window.currentLang = currentLang;
    window.determineCurrentLang = determineCurrentLang;
    window.t = t;
    window.applyHtmlTranslations = applyHtmlTranslations;
}

function setGameLanguage(newLang) {
    if (!TRANSLATIONS[newLang]) newLang = 'en';
    window.currentLang = newLang;

    // 1. Обновляем все HTML-элементы (data-i18n, картинки data-i18n-src и подсказки)
    if (typeof applyHtmlTranslations === 'function') {
        applyHtmlTranslations();
    }

    // 2. Синхронизируем выпадающий список в настройках
    const langSelect = document.getElementById('settings-lang-select');
    if (langSelect && langSelect.value !== newLang) {
        langSelect.value = newLang;
    }

    // 3. Обновляем тексты внутри массивов Календаря, Локаций и Рубежей
    if (typeof CALENDAR_REWARDS !== 'undefined') {
        CALENDAR_REWARDS.forEach((item, idx) => {
            item.text = t(`calendar_rewards.${idx}.text`);
        });
    }
    if (typeof STAGES_LORE !== 'undefined') {
        STAGES_LORE.forEach((item, idx) => {
            item.name = t(`stages_lore.${idx}.name`);
            item.desc = t(`stages_lore.${idx}.desc`);
        });
    }
    if (typeof HEIGHT_MILESTONES !== 'undefined') {
        HEIGHT_MILESTONES.forEach((item, idx) => {
            item.name = t(`height_milestones.${idx}.name`);
            item.desc = t(`height_milestones.${idx}.desc`);
        });
    }

    // 4. Перерисовываем динамические панели игры
    if (typeof updateUI === 'function') updateUI();
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (typeof updateBuffsDrawerUI === 'function') updateBuffsDrawerUI();
    if (typeof renderCasesShop === 'function') renderCasesShop();
    if (typeof renderInventory === 'function') renderInventory();
    if (typeof renderCalendarUI === 'function') renderCalendarUI();
}

// Привязываем смену языка к селектору в Настройках
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('settings-lang-select');
    if (langSelect) {
        langSelect.value = window.currentLang || 'ru';
        langSelect.addEventListener('change', (e) => {
            setGameLanguage(e.target.value);
            if (typeof AudioEngine !== 'undefined') AudioEngine.play('click', 0.5);
        });
    }
});