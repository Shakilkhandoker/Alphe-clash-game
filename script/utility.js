// todo- hide the home screen
function hideScreen(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('hidden')
}

// todo-show the screen
function showScreen(elementId){
  const element=document.getElementById(elementId)
  element.classList.remove('hidden')
}

// todo-get random alphabet

function getRandomAlphabet(){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// todo-set the random alphabet button color
function setRandomAlphabetButton(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('bg-orange-500')
}

// todo-remove the random alphabet button color

function removeRandomAlphabetButton(elementId){
  const element=document.getElementById(elementId)
  element.classList.remove('bg-orange-500')
}

