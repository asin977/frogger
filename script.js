const timeLeft = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
console.log(squares);

let currentIndex = 76;
const width = 9;
function moveFrog(e) {
    
     squares[currentIndex].classList.remove('frog')
    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move Left');

            if (currentIndex % width !==0) currentIndex-= 1;
            break
        case 'ArrowRight' :
            console.log('move right');
            if (currentIndex % width < width -1) currentIndex+= 1;
            break
        case 'ArrowUp' :
            console.log('move up');
            if (currentIndex-width >=0 ) currentIndex-= width;
            break  
        case 'ArrowDown' :
            console.log('move down');
            if (currentIndex + width < width * width) currentIndex+= width
            break          
    }
    squares[currentIndex].classList.add('frog');
}
document.addEventListener('keyup',moveFrog);

function autoMoveElements() {
    logsLeft.forEach(logleft => moveLogLeft(logleft))
    logsRight.forEach(logright=>moveLogRight(logright));
    carsLeft.forEach(carsleft=>moveCarLeft(carsleft));
    carsRight.forEach(carsright => movecarRight(carsright));
}

function moveLogLeft(logleft) {
    switch(true) {
        case logleft.classList.contains('l1') :
            logleft.classList.remove('l1')
            logleft.classList.add('l2');
            break;
        case logleft.classList.contains('l2') :
            logleft.classList.remove('l2')
            logleft.classList.add('l3');
            break;
        case logleft.classList.contains('l3') :
            logleft.classList.remove('l3')
            logleft.classList.add('l4');
            break;  
        case logleft.classList.contains('l4') :
            logleft.classList.remove('l4')
            logleft.classList.add('l5');
            break;
        case logleft.classList.contains('l5') :
            logleft.classList.remove('l5')
            logleft.classList.add('l1');
            break;
             
    }
}

function moveLogRight(logright) {
    switch(true) {
        case logright.classList.contains('l1') :
            logright.classList.remove('l1')
            logright.classList.add('l5');
            break;
        case logright.classList.contains('l2') :
            logright.classList.remove('l2')
            logright.classList.add('l1');
            break;
        case logright.classList.contains('l3') :
            logright.classList.remove('l3')
            logright.classList.add('l2');
            break;  
        case logright.classList.contains('l4') :
            logright.classList.remove('l4')
            logright.classList.add('l3');
            break;
        case logright.classList.contains('l5') :
            logright.classList.remove('l5')
            logright.classList.add('l4');
            break;
             
    }
}


function moveCarLeft(carsleft) {
    switch(true) {
        case carsleft.classList.contains('c1') :
            carsleft.classList.remove('c1')
            carsleft.classList.add('c2');
            break;
        case carsleft.classList.contains('c2') :
            carsleft.classList.remove('c2')
            carsleft.classList.add('c3');
            break;
        case carsleft.classList.contains('c3') :
            carsleft.classList.remove('c3')
            carsleft.classList.add('c4');
            break;  
        case carsleft.classList.contains('c4') :
            carsleft.classList.remove('c4')
            carsleft.classList.add('c5');
            break;
        case carsleft.classList.contains('c5') :
             carsleft.classList.remove('c5')
             carsleft.classList.add('c1');
            break;
             
    }
}
function lose() {
    if (squares[currentIndex].classList.contains('c1')) {
        resultDisplay.textContent = 'You Lose!'
    }
     
}

setInterval(autoMoveElements,1000);