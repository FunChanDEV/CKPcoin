// Устанавливаем целевое время (в миллисекундах)
const targetTime = new Date().getTime() + (10 * 60 * 1000); // 10 минут

// Функция для обновления таймера
function updateTimer() {
    // Текущее время
    const currentTime = new Date().getTime();

    // Оставшееся время в миллисекундах
    let remainingTime = targetTime - currentTime;

    // Преобразуем миллисекунды в часы, минуты и секунды
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Форматируем результат
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Выводим таймер на страницу
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

    // Обновляем таймер каждую секунду
    setTimeout(updateTimer, 1000);
}

// Запускаем таймер
updateTimer();