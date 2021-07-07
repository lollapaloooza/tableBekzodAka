const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "cube",
    grabCursor: true,
    speed: 1500,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 40,
        shadowScale: 0.94,
    },
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    }

});

function todaysDate() {

    const todayDate = new Date();
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    const date = todayDate.getDate();
    const year = todayDate.getFullYear();
    const seconds = todayDate.getSeconds();
    let weekDay = '';

    const allMonths = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];

    let months = allMonths[todayDate.getMonth()];


    switch (todayDate.getDay()) {
        case 0:
            {
                weekDay = 'Воскресенье';
                break;
            }
        case 1:
            {
                weekDay = 'Понедельник';
                break;
            }
        case 2:
            {
                weekDay = 'Вторник';
                break;
            }
        case 3:
            {
                weekDay = 'Среда';
                break;
            }
        case 4:
            {
                weekDay = 'Четверг';
                break;
            }
        case 5:
            {
                weekDay = 'Пятница';
                break;
            }
        case 6:
            {
                weekDay = 'Суббота';
                break;
            }
        default:
            {
                throw new Error('Ошибка с днями недели');
            }
    }




    const hoursId = document.querySelector('#hours');
    const dateId = document.querySelector('#date');
    const weekDayId = document.querySelector('#weekDay');

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    hoursId.textContent = `${hours}:${minutes}:${seconds}`;
    dateId.textContent = `${date} ${months} ${year}.г`
    weekDayId.textContent = weekDay;

}

todaysDate();

setInterval(todaysDate, 1000);