var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');


var createCards = function() {
  for (var i=0; i< 4; i++){
    var card = document.createElement('div');
    card.className = 'card';
    gameBoard.appendChild(card);
  }
}
createCards();
