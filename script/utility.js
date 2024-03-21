// todo- hide the screen
function hideScreen(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('hidden')
}

// todo-show the screen
function showScreen(elementId){
  const element=document.getElementById(elementId)
  element.classList.remove('hidden')
}


// todo-random alphabet
function getRandomAlphabet(){
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// todo-set the random button color
function setRandomButtonColor(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('bg-orange-500')
}