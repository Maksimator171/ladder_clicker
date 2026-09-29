const RARITY = {
    COMMON: { name: 'Обычная', color: '#B0BEC5', chance: 75 },
    RARE: { name: 'Редкая', color: '#42A5F5', chance: 20 },
    EPIC: { name: 'Эпическая', color: '#AB47BC', chance: 4 },
    LEGENDARY: { name: 'Легенда', color: '#FFCA28', chance: 1 }
};

const SKINS = [
    {
        id: 'wood_base',
        name: 'Советская деревянная',
        rarity: RARITY.COMMON,
        // color - это временная заглушка-квадрат, пока мы не нарисуем PNG спрайты
        color: '#8D6E63', 
        bonusMultiplier: 1.0, // Множитель клика, когда скин НАДЕТ
        unlocked: true
    },
    {
        id: 'aluminum',
        name: 'Алюминиевая (Леруа)',
        rarity: RARITY.COMMON,
        color: '#CFD8DC',
        bonusMultiplier: 1.2,
        unlocked: false
    },
    {
        id: 'neon_cyber',
        name: 'Кибер-Стремянка',
        rarity: RARITY.LEGENDARY,
        color: '#00E5FF',
        bonusMultiplier: 5.0,
        unlocked: false
    }
];

// Глобальный инвентарь игрока
let playerInventory = {
    activeSkinId: 'wood_base',
    goldenNuts: 0 // Валюта за повторки
};