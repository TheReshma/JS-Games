const computer = document.getElementById("computer");
const user = document.getElementById("user");
const result = document.getElementById("result");

const possibility = document.querySelectorAll("button");
let userChoice, computerChoice, results ;

possibility.forEach(choice => choice.addEventListener('click', function(event){
    userChoice = event.target.id ;
    user.innerHTML = userChoice ;
    computersChoice();
    resultS();
}));

function computersChoice() {
    const cChoice = Math.floor(Math.random()*3) + 1 ;
    switch (cChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissor";
            break;
        default:
            break;
    }
    computer.innerHTML = computerChoice;
}

function resultS() {
    if ( computerChoice === userChoice ) {
        results = "Draw";
    }
    if ( computerChoice === "rock" && userChoice === "scissor" ) {
        results = "You lose";
    }
    if ( computerChoice === "paper" && userChoice === "scissor" ) {
        results = "You win";
    }
    if ( computerChoice === "scissor" && userChoice === "paper" ) {
        results = "You lose";
    }
    if ( computerChoice === "rock" && userChoice === "paper" ) {
        results = "You win";
    }
    if ( computerChoice === "paper" && userChoice === "rock" ) {
        results = "You lose";
    }
    if ( computerChoice === "scissor" && userChoice === "rock" ) {
        results = "You win";
    }
    
    result.innerHTML = results ;
}