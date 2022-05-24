 //DOM
 //DOCUNEBT OBJECT MODEL

 const buttonPause = document.querySelector('.pause')
 const buttonStop = document.querySelector('.stop')
 const buttonSet = document.querySelector('.set')
 const buttonPlay = document.querySelector('.play')
 const buttonSoundOn = document.querySelector('.sound-on')
 const buttonSoundOff = document.querySelector('.sound-off')
 let minutes
 const minutesDisplay = document.querySelector('.minutes')
 const secondDisplay = document.querySelector('.seconds')
 
 //Event-driven
 //programação impertiva
 //callback

 function countdown() {
 setTimeout(function() {
   let seconds = Number(secondDisplay.textContent)
   let minutes = Number(minutesDisplay.textContent)

   secondDisplay.textContent = String(seconds -1).padStart(2, "0")
   
   if (minutes <= 0) {

    buttonPlay.classList.add('hide') 
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')


     return
   }

   if(seconds <= 0) {
     seconds = 2

     minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
   }

   secondDisplay.textContent = String(seconds -1).padStart(2, "0")

  
   

   countdown()
 }, 1000)
}


 buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide') 
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()

 })

 buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})