const score = document.getElementById('score');
const time = document.getElementById('time');
const square = document.querySelectorAll('.square');
let randomNo;
let results = 0;
let currentTime = 10;
let timerId = null;
let timeOutId = null;


function noMole(){
    square.forEach( squares =>{
        squares.addEventListener('click', matchMole);
    })
}
noMole();


function mole(){   
    square.forEach( squares =>{
        squares.classList.remove('mole');
    })  
    randomNo = (Math.floor(Math.random()*8));
    square[randomNo].classList.add('mole');
}

function timer(){  
    timerId = setInterval(mole , 900);
    timeOutId = setInterval( timeOut, 1000);
}
timer();

function matchMole(){
    if (this.id == randomNo + 1){
        results +=1 ;
        console.log(results);
        score.textContent = results;
    }
}

function timeOut(){
    currentTime--;
    time.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(timeOutId);
        clearInterval(timerId);
        alert('Game over! Your score is ' + results);
    }
}

