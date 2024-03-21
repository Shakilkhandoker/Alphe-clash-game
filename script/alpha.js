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

document.getElementById('home-screen-btn').addEventListener('click',function(){
  hideScreen('home-screen');
  showScreen('play-ground');
  continueGame();
})

function continueGame(){
  const alphabet=getRandomAlphabet()
  const currentAlphabet=document.getElementById('current-alphabet')
  currentAlphabet.innerText=alphabet.toUpperCase()
  setRandomButtonColor(alphabet)
}