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
    }
};

Object.keys(TRANSLATIONS).forEach(lang => {
    TRANSLATIONS[lang].particles = TRANSLATIONS[lang].particle;
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
        lang = 'ru';
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

