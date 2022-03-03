const cardArray = [
    {
        name : "circle" ,
        img : "images/circle.png"
    },
    {
        name : "square",
        img : "images/square.png"
    },
    {
        name : "rectangle",
        img : "images/rectangle.png"
    },
    {
        name : "diamond",
        img : "images/diamond.png"
    },
    {
        name : "triangle",
        img : "images/triangle.png"
    },
    {
        name : "star",
        img : "images/star.png"
    },
    {
        name : "circle" ,
        img : "images/circle.png"
    },
    {
        name : "square",
        img : "images/square.png"
    },
    {
        name : "rectangle",
        img : "images/rectangle.png"
    },
    {
        name : "diamond",
        img : "images/diamond.png"
    },
    {
        name : "triangle",
        img : "images/triangle.png"
    },
    {
        name : "star",
        img : "images/star.png"
    }
];

cardArray.sort( ()=> 0.5 - Math.random());
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

const cardGrid = document.getElementById("grid");
const score = document.getElementById("score");
const play = document.querySelector('button');

function cardBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('width', '100');
        card.setAttribute('data-id', i);  
        card.addEventListener('click', showCard ); 
        cardGrid.appendChild(card); 
    }   
}
cardBoard();


const cards = document.querySelectorAll('img');
console.log(cards);

function checkMatch(){
    
    if ( cardsChosen[0] === cardsChosen[1] ) {
        if ( cardsChosenId[0]===cardsChosenId[1]){
            console.log();
            cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png');
            cardsChosen = [];
            cardsChosenId = [];
        }else{
            console.log('Match');
            cards[cardsChosenId[0]].setAttribute('src', 'images/white.png');
            cards[cardsChosenId[1]].setAttribute('src', 'images/white.png');
            cards[cardsChosenId[0]].removeEventListener('click', showCard);
            cards[cardsChosenId[1]].removeEventListener('click', showCard);
            cardsWon.push([ cardsChosen[0] , cardsChosen[1] ]);
            cardsChosen = [];
            cardsChosenId = [];
            score.innerHTML = cardsWon.length;
        }
    }else {
        console.log();
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png');
        cardsChosen = [];
        cardsChosenId = [];
    }

    if( cardsWon.length == 6){
        result = "You won !";
        score.innerHTML = result ;
        play.style.visibility = 'visible' ;

    }
}

function showCard(){
    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen.length);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }   
}

