// Create Values for cards
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
// Create and name suit values
const cardSuits = [
  { symbol: "♣", name: "club" },
  { symbol: "♦", name: "diamond" },
  { symbol: "♥", name: "heart" },
  { symbol: "♠", name: "spade" }
];
// Object defines card attributes that will be stored in the deck
function createCard(value, symbol, name) {
  return {
    value: value,
    symbol: symbol,
    name: name,
    
  };
}
let deck = []
let count = 0
// Create the deck of cards which is made of createCard objects
for (let i = 0; i < cardSuits.length; i++){

    for(let j = 0; j < values.length; j++){
       
        deck[count] = createCard(values[j], cardSuits[i].symbol, cardSuits[i].name )
        count++
        
    }
}

// Shuffle cards
function randomSort() {
  return Math.random() - 0.5;
}
deck.sort(randomSort);

//populate cards to use for
let playerOneCardOne = deck.pop()
let playerOneCardTwo = deck.pop()
let tableCardOne = deck.pop()
let tableCardTwo = deck.pop()
let tableCardThree = deck.pop()
let tableCardFour = deck.pop()
let tableCardFive = deck.pop()
let playerTwoCardOne = deck.pop()
let playerTwoCardTwo = deck.pop()

//check if card is diamond or heart and if so set it to red
function suit_color(card,style){
  if(card.name == "heart" || card.name == "diamond"){
    style.style.color = "red";
  }
}

// Player ones Hand
let player_one_card_one = document.getElementById("player-one-card-1");
player_one_card_one.innerHTML = playerOneCardOne.value + playerOneCardOne.symbol;
suit_color(playerOneCardOne, player_one_card_one)
let player_one_card_two = document.getElementById("player-one-card-2");
player_one_card_two.innerHTML = playerOneCardTwo.value + playerOneCardTwo.symbol;
suit_color(playerOneCardTwo, player_one_card_two);
/*
// First card in players twos hand
let player_two_card_one = document.getElementById("player-two-card-1");
player_two_card_one.innerHTML = playerTwoCardOne.value + playerTwoCardOne.symbol;
suit_color(playerTwoCardOne, player_two_card_one);

// Second card in player twos hand
let player_two_card_two = document.getElementById("player-two-card-2");
player_two_card_two.innerHTML = playerTwoCardTwo.value + playerTwoCardTwo.symbol;
suit_color(playerTwoCardTwo, player_two_card_two); */

// Table card the river
// Table card one
let table_card_one = document.getElementById("table-card-1");
table_card_one.innerHTML = tableCardOne.value + tableCardOne.symbol;
suit_color(tableCardOne, table_card_one);
// Table card two
let table_card_two = document.getElementById("table-card-2");
table_card_two.innerHTML = tableCardTwo.value + tableCardTwo.symbol;
suit_color(tableCardTwo, table_card_two);
// Table card three
let table_card_three = document.getElementById("table-card-3");
table_card_three.innerHTML = tableCardThree.value + tableCardThree.symbol
suit_color(tableCardThree, table_card_three)














