export default function Timer({
  minutesDisplay,
  secondDisplay,
  resetControls,
  minutes
}) {
  let timerTimeOut

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondDisplay.textContent = String(seconds).padStart(2, "0")
   }
  
   function reset() {
     updateDisplay(minutes, 0)
     clearTimeout(timerTimeOut)
   }
   
  
   function countdown() {
   timerTimeOut = setTimeout(function() {
     let seconds = Number(secondDisplay.textContent)
     let minutes = Number(minutesDisplay.textContent)
  
     updateDisplay(minutes, 0)
     
     if (minutes <= 0) {
  
      resetControls()
       return
     }
  
     if(seconds <= 0) {
       seconds = 60
       --minutes
     }
  
     updateDisplay(minutes, String(seconds - 1))
  
    
     
  
     countdown()
   }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }
  
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }

}  


