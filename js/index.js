 import resetControls from "./controls"
 import {Timer} from "./timer"

 const buttonPause = document.querySelector('.pause')
 const buttonStop = document.querySelector('.stop')
 const buttonSet = document.querySelector('.set')
 const buttonPlay = document.querySelector('.play')
 const buttonSoundOn = document.querySelector('.sound-on')
 const buttonSoundOff = document.querySelector('.sound-off')
 const minutesDisplay = document.querySelector('.minutes')
 const secondDisplay = document.querySelector('.seconds')
 let minutes = Number(minutesDisplay.textContent)
 let timerTimeOut

 const timer = Timer({
  minutesDisplay,
  secondDisplay,
  timerTimeOut,
  resetControls,
 })


 buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide') 
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countdown()

 })

 buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
  
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
  newMinutes = prompt('Quantos minutos?') 
  if (!newMinutes) {
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
  
})