//Exemplo de funcção chamada "Factory" onde retornamos um array de funções para exportação de funções

import Sounds from './sounds.js'


export default function Timer({
    minutesDisplayed,
    secondsDisplayed,
    resetControls,
}){

    let timerTimeOut
    let minutes = Number(minutesDisplayed.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds 
        minutesDisplayed.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplayed.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset(){
        updateDisplay(minutes,0)
        clearTimeout(timerTimeOut)
    }
    
    function countdown() {
    
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplayed.textContent)
            let minutes = Number(minutesDisplayed.textContent)
    
            updateDisplay(minutes,0)
    
            if (minutes <= 0 && seconds <= 0) {
                Sounds().timerEnd()
                resetControls()
                updateDisplay()  
                return                
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
               
            updateDisplay(minutes, String(seconds -1))
    
            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes){
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




