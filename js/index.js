import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplayed,
    secondsDisplayed
} from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplayed,
    secondsDisplayed,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})


