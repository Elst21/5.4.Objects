let health = 100; // Начальное здоровье персонажа
const maxHealth = 100; // Максимальное здоровье
const characterName = "Персонаж"; // Имя персонажа
document.getElementById('characterName').innerText = characterName; // Установить имя персонажа

// Функция для обновления состояния карточки
function updateCharacterCard() {
    const healthElement = document.getElementById('characterHealth');
    const statusMessage = document.getElementById('statusMessage');
    const characterCard = document.getElementById('characterCard');

    healthElement.innerText = health;

    // Условие для изменения положения карточки в зависимости от здоровья
    if (health <= 0) {
        statusMessage.innerText = "Персонаж погиб!";
        healthElement.innerText = 0;  // Обновляем здоровье до 0
        characterCard.style.backgroundColor = '#ffcccc'; // Цвет карточки при погибели
        document.getElementById('damageButton').disabled = true; // Отключаем кнопку
        document.getElementById('healButton').disabled = true; // Отключаем кнопку
    } else {
        statusMessage.innerText = ""; // Сбрасываем сообщение
        const healthPercentage = (health / maxHealth);
        
        // Изменение цвета в зависимости от уровня здоровья
        if (healthPercentage > 0.5) {
            characterCard.style.backgroundColor = '#ccffcc'; // Здоровье больше 50%
        } else if (healthPercentage > 0.2) {
            characterCard.style.backgroundColor = '#ffffcc'; // Здоровье между 20% и 50%
        } else {
            characterCard.style.backgroundColor = '#ffcccc'; // Здоровье меньше 20%
        }
    }
}

// Обработчик кнопки "Получить урон"
document.getElementById('damageButton').addEventListener('click', function() {
    const damage = Math.floor(Math.random() * 20) + 1; // Случайный урон от 1 до 20
    health -= damage;
    updateCharacterCard();
});

// Обработчик кнопки "Лечиться"
document.getElementById('healButton').addEventListener('click', function() {
    const healAmount = Math.floor(Math.random() * 20) + 1; // Случайное лечение от 1 до 20
    health = Math.min(maxHealth, health + healAmount); // Обновляем здоровье, не превышая максимум
    updateCharacterCard();
});

// Первоначальное обновление карточки
updateCharacterCard();