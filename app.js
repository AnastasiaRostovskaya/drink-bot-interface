// Получаем объект Telegram Web App
let tg = window.Telegram.WebApp;

// Расширяем окно на весь экран
tg.expand();

// Настраиваем главную кнопку
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#6F4E37";

// Переменная для хранения выбранного напитка
let selectedDrink = "";

// Получаем наши кнопки из HTML
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

// Функция для обработки нажатия на кнопку напитка
function handleDrinkClick(button, drinkId, drinkName) {
    button.addEventListener("click", function () {
        // Скрываем главную кнопку если она уже отображается
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            // Устанавливаем текст главной кнопки и запоминаем выбор
            tg.MainButton.setText(`Узнать о ${drinkName.toLowerCase()}`);
            selectedDrink = drinkId;
            tg.MainButton.show();
        }
    });
}

// Назначаем обработчики для всех кнопок
handleDrinkClick(btn1, "1", "кофе");
handleDrinkClick(btn2, "2", "чае");
handleDrinkClick(btn3, "3", "соке");
handleDrinkClick(btn4, "4", "лимонаде");

// Обработчик нажатия на главную кнопку Telegram
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    console.log("Отправляем данные:", selectedDrink);
    // Отправляем данные (ID напитка) обратно в бота
    tg.sendData(selectedDrink);
});