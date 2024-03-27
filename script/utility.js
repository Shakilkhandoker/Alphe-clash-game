// todo- hide the home screen
function hideScreen(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// todo-show the screen
function showScreen(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// todo-get random alphabet

function getRandomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// todo-set the random alphabet button color
function setRandomAlphabetButton(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}

// todo-remove the random alphabet button color

function removeRandomAlphabetButton(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

// todo-current life
function setCurrentLife(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// todo-current score
function setCurrentScore(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
