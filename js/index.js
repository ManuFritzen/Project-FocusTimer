 import Controls from "./controls.js"
 import Timer from "./timer.js"

 const buttonPause = document.querySelector('.pause')
 const buttonStop = document.querySelector('.stop')
 const buttonSet = document.querySelector('.set')
 const buttonPlay = document.querySelector('.play')
 const buttonSoundOn = document.querySelector('.sound-on')
 const buttonSoundOff = document.querySelector('.sound-off')
 const minutesDisplay = document.querySelector('.minutes')
 const secondDisplay = document.querySelector('.seconds')
 let minutes = Number(minutesDisplay.textContent)


 const controls = Controls(
  {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
  }
 )

 const timer = Timer({
  minutesDisplay,
  secondDisplay,
  resetControls: controls.reset,
  minutes
 })


 buttonPlay.addEventListener('click', function() {
 
  controls.play()
  timer.countdown()

 })

 buttonPause.addEventListener('click', function() {
  
  controls.pause()
  timer.hold()
  
})

buttonStop.addEventListener('click', function () {

  controls.reset()
  timer.reset()
  
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
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
  timer.updateMinutes(minutes)
})