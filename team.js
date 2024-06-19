document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded and DOM fully loaded and parsed');
    
    const cards = document.querySelectorAll('.employee-card');
    let currentIndex = 0;
    const intervalTime = 10000; // 10 секунд
    let interval;

    function showCard(index) {
        console.log('Showing card:', index);
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        console.log('Next button clicked');
        nextCard();
        resetInterval();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        console.log('Previous button clicked');
        prevCard();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextCard, intervalTime);
    }

    // Инициализация
    showCard(currentIndex);
    interval = setInterval(nextCard, intervalTime);
});
