// Получаем объект Telegram Web App
let tg = window.Telegram.WebApp;

// Расширяем окно на весь экран
tg.expand();

// Настраиваем главную кнопку (она внизу экрана)
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#6F4E37"; // Цвет "кофе с молоком"

// Переменная для хранения выбранного напитка
let selectedDrink = "";

// Получаем наши кнопки из HTML
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

// Обработчик для кнопки "Кофе"
btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        // Устанавливаем текст главной кнопки и запоминаем выбор
        tg.MainButton.setText("Узнать о кофе");
        selectedDrink = "1"; // ID для кофе
        tg.MainButton.show();
    }
});

// Обработчик для кнопки "Чай"
btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Узнать о чае");
        selectedDrink = "2"; // ID для чая
        tg.MainButton.show();
    }
});

// Обработчик для кнопки "Сок"
btn3.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Узнать о соке");
        selectedDrink = "3"; // ID для сока
        tg.MainButton.show();
    }
});

// Обработчик для кнопки "Лимонад"
btn4.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Узнать о лимонаде");
        selectedDrink = "4"; // ID для лимонада
        tg.MainButton.show();
    }
});

// Самое главное: обработчик нажатия на главную кнопку Telegram
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    // Отправляем данные (ID напитка) обратно в бота
    tg.sendData(selectedDrink);
    // Закрываем веб-приложение после отправки
    tg.close();
});