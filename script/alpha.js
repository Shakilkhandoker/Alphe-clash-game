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

document.getElementById("home-screen-btn").addEventListener("click", () => {
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

document.addEventListener("keyup", (event) => {
  const playerPress = event.key;
  const currentAlphabet = document.getElementById("current-alphabet");
  const targetKey = currentAlphabet.innerText.toLowerCase();
  if (playerPress === targetKey) {
    // !update score:
    // !1.get the current score
    // !2.increase the c=score by 1
    // !3.show the updated score
    const currentScore = document.getElementById("current-score");
    currentScore.innerText = parseInt(currentScore.innerText) + 1;

    // !continue the game again
    removeRandomAlphabetButton(targetKey);
    continueGame();
  } else {
    // !1.get the current life number
    // !2.reduce the life count when press the wrong key
    // !3.display the updated life count
    const currentLife = document.getElementById("current-life");
    currentLife.innerText = parseInt(currentLife.innerText) - 1;

    // !when life is 0,hide the play ground and show the score board
    if (parseInt(currentLife.innerText) === 0) {
      hideScreen("play-ground");
      showScreen("score-board");
    }
  }
});

document.getElementById("play-again").addEventListener("click", () => {
  // !hide everything and show the playground
  hideScreen("score-board");
  showScreen("play-ground");
  continueGame();

  // !update final score
  // !get the final score
  // !set the score in the final score board
});
