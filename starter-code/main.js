var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
var Wins = document.getElementById('Wins');
var Losses = document.getElementById('Losses');

var winScore = document.createElement('h3');
var lossesScore = document.createElement('h3');

var winCount = 0;
var lossCount = 0;


var createBoard = function(){
  for(var i =0; i< cards.length; i++){
    var card = document.createElement('div');
    card.className = 'card';
    card.id = 'card';
    card.setAttribute('data-card', cards[i]);
    card.addEventListener('click', isTwoCards);
    gameBoard.appendChild(card);
  }
}
var isMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    console.log('winner');
    setTimeout(restart, 2000);
    winCount += 1;
    winScore.innerHTML = winCount;
    Wins.appendChild(winScore);
  }else{
    setTimeout(restart, 2000);
    lossCount += 1;
    lossesScore.innerHTML = lossCount;
    Losses.appendChild(lossesScore);
  }
}
var isTwoCards = function(){
  var getCard = this.getAttribute('data-card');
  this.removeEventListener('click', isTwoCards);
  if(getCard === "king"){
    this.innerHTML = '<img src="king.png" />'
  }else {
    this.innerHTML = '<img src="queen.jpeg" />'
  }
  cardsInPlay.push(getCard);

  if(cardsInPlay.length === 2){
    var card = document.getElementsByClassName('card');
    for(var i=0; i < card.length; i ++){
      card[i].removeEventListener('click', isTwoCards);
    }
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
var restart = function() {
    var card = document.getElementsByClassName('card');
    for(var i=0; i < card.length; i ++){
      card[i].innerHTML = '';
      card[i].addEventListener('click', isTwoCards);
    }
}

createBoard();
