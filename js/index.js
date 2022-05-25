 import Controls from "./controls.js"
 import Timer from "./timer.js"
 import Sound from "./sound.js"
 import Events from "./events.js"
 import { buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondDisplay } from "./element.js"


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
 })

 const sound = Sound()

 Events({controls, timer, sound})



 