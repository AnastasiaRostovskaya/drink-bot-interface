// Получаем объект Telegram Web App
let tg = window.Telegram.WebApp;

// Инициализируем WebApp
tg.expand();
tg.enableClosingConfirmation();

// Настраиваем главную кнопку
tg.MainButton.setText("Узнать о выбранном напитке");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#6F4E37";

// Переменная для хранения выбранного напитка
let selectedDrink = "";

// Функция для обновления состояния главной кнопки
function updateMainButton() {
    if (selectedDrink) {
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

// Функция для выбора напитка
function selectDrink(drinkId, drinkName) {
    selectedDrink = drinkId;

    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Добавляем активный класс к выбранной кнопке
    event.target.classList.add('active');

    // Обновляем текст главной кнопки
    tg.MainButton.setText(`Узнать о ${drinkName}`);

    // Показываем главную кнопку
    updateMainButton();

    console.log("Выбран напиток:", drinkId, drinkName);
}

// Назначаем обработчики для кнопок
document.getElementById("btn1").addEventListener("click", function() {
    selectDrink("1", "кофе");
});

document.getElementById("btn2").addEventListener("click", function() {
    selectDrink("2", "чае");
});

document.getElementById("btn3").addEventListener("click", function() {
    selectDrink("3", "соке");
});

document.getElementById("btn4").addEventListener("click", function() {
    selectDrink("4", "лимонаде");
});

// Обработчик нажатия на главную кнопку Telegram
tg.MainButton.onClick(function() {
    if (selectedDrink) {
        console.log("Отправляем данные в бота:", selectedDrink);

        // Отправляем данные обратно в бота
        tg.sendData(selectedDrink);

        // Можно закрыть веб-приложение после отправки
        // tg.close();
    } else {
        console.log("Напиток не выбран");
    }
});

// Инициализация - скрываем кнопку при загрузке
updateMainButton();
console.log("WebApp инициализирован");