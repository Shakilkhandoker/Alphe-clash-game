/**
 * !step-1:hide the home screen.to hide the screen add the class hidden to the home section
 * !step-2:show the home screen.to show the screen add the class
 */

// document.getElementById('home-screen-btn').addEventListener('click',function(){
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');
// })
// document.getElementById('home-screen-btn').addEventListener('click',function(){
//   const playScreen = document.getElementById('play-ground')
//   playScreen.classList.remove('hidden');
// })

document
  .getElementById("home-screen-btn")
  .addEventListener("click", function () {
    hideScreen("home-screen");
    showScreen("play-ground");
    continueGame();
  });

// todo-alphabet functionality
function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentALphabet = document.getElementById("current-alphabet");
  currentALphabet.innerText = alphabet.toUpperCase();
  setRandomAlphabetButton(alphabet);
}

document.addEventListener("keyup", function (event) {
  const playerPress = event.key;
  const currentAlphabet = document.getElementById("current-alphabet");
  const targetKey = currentAlphabet.innerText.toLowerCase();
  if (playerPress === targetKey) {
    // !update score:
    // !1.get the current score
    // !2.increase the c=score by 1
    // !3.show the updated score
    

    // !continue the game again
    removeRandomAlphabetButton(targetKey);
    continueGame();
  }
});
