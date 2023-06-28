let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let minV;
let maxV;


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

function retry(){
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}

document.getElementById('btnRetry').addEventListener('click', function() {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    retry();
                
   })


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 2) ? 
                `Что-то пошло не так\n\u{1F631}`:
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const answerRandom = Math.round( Math.random()*2);
            answerField.innerText = (answerRandom === 1) ?
            `Вы загадали число ${answerNumber }?`: (answerRandom === 2) ?
            `Дай-ка подумать. Задагано ${answerNumber}?`:
            `Ну сейчас точно загадали ${answerNumber}?`;
        }
    }

})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 2) ? 
            `Так так так!!!\n\u{1F62D}`:
            `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const answerRandom = Math.round( Math.random()*2);
            answerField.innerText = (answerRandom === 1) ?
            `Вы загадали число ${answerNumber }?`: (answerRandom === 2) ?
            `Дай-ка подумать. Задагано ${answerNumber}?`:
            `Ну сейчас точно загадали ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`

        const answerRandom = Math.round( Math.random()*2);
            answerField.innerText = (answerRandom === 1) ?
            `Я всегда угадываю\n\u{1F60E}`: (answerRandom === 2) ?
            `Я-да молодец же я!\n\u{1F61C}`:
            `Это должно было случиться!\n\u{1F608}`;
        gameRun = false;
    }
})



