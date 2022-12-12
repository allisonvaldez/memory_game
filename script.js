/**
 Questions:
 1. Help walking through code so that I understand it
 */
const gameContainer = document.getElementById("game");

/* 
no cards created start by initializing the cards to play with
set starting point of game
*/
let cardOne = null;
let cardTwo = null;
let flippedCards = 0;
let noClicks = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

/* 
here is a helper function to shuffle an array
it returns the same array with values shuffled
it is based on an algorithm called Fisher Yates if you want ot research more
*/

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

/* 
this function loops over the array of colors
it creates a new div and gives it a class with the value of the color
it also adds an event listener for a click for each card 
*/

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  // simply return if there is no clicking by user
  if (noClicks) return;

  // if the target that is clicked has the class of flipped return it??
  if (event.target.classList.contains("flipped")) return;

  // initialize current card to the one that was clicked
  let currentCard = event.target;

  // set the currentCard's background color to the first index of the class?
  currentCard.style.backgroundColor = currentCard.classList[0];

  /* 
  if not cardOne or cardTwo add the class of flipped to the currentCard
  set cardOne to be cardOne or the current card
  set cardTwo value's if currentCard is equal to cardOne then set the value to null else set it to the currentCard
  */
  if (!cardOne || !cardTwo) {
    currentCard.classList.add("flipped");
    cardOne = cardOne || currentCard;
    cardTwo = currentCard === cardOne ? null : currentCard;
  }



}

// when the DOM loads
createDivsForColors(shuffledColors);