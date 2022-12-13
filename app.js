let chronoPrincipalTimer = document.getElementById('chronoPrincipalTimer');
let resetBtnPrincipalTimer = document.getElementById('resetPrincipalTimer');
let stopBtnPrincipalTimer = document.getElementById('stopPrincipalTimer');
let startBtnPrincipalTimer = document.getElementById('startPrincipalTimer');

let minutesPrincipalTimer = 0; 
let secondesPrincipalTimer = 0; 

let timeoutPrincipalTimer; 

let estArretePrincipalTimer = true; 

const demarrerPrincipalTimer = () => {
    if(estArretePrincipalTimer){
        estArretePrincipalTimer = false; 
        defilerTempsPrincipalTimer(); 
    }
}; 

const arreterPrincipalTimer = () => {
    if(!estArretePrincipalTimer){
        estArretePrincipalTimer = true; 
        clearTimeout(timeoutPrincipalTimer)
    }
}

const defilerTempsPrincipalTimer = () => {
    if(estArretePrincipalTimer) return; 

    secondesPrincipalTimer = parseInt(secondesPrincipalTimer); 
    minutesPrincipalTimer = parseInt(minutesPrincipalTimer); 

    secondesPrincipalTimer++;

    if (secondesPrincipalTimer == 60) {
        minutesPrincipalTimer++; 
        secondesPrincipalTimer = 0; 
    }

    // Affichage 
    if (secondesPrincipalTimer < 10) {
        secondesPrincipalTimer = "0" + secondesPrincipalTimer; 
    }
    if (minutesPrincipalTimer < 10) {
        minutesPrincipalTimer = "0" + minutesPrincipalTimer; 
    }

    chronoPrincipalTimer.textContent = `${minutesPrincipalTimer}:${secondesPrincipalTimer}`; 

    timeoutPrincipalTimer = setTimeout(defilerTempsPrincipalTimer, 1000); 
}

const resetPrincipalTimer = () => {
    chronoPrincipalTimer.textContent = "00:00"; 
    estArretePrincipalTimer = true; 
    minutesPrincipalTimer = 0;
    secondesPrincipalTimer = 0;
    clearTimeout(timeoutPrincipalTimer)
}

startBtnPrincipalTimer.addEventListener('click', demarrerPrincipalTimer);
stopBtnPrincipalTimer.addEventListener('click', arreterPrincipalTimer);
resetBtnPrincipalTimer.addEventListener('click', resetPrincipalTimer);

let chronoHalfTimeTimer = document.getElementById('chronoHalfTimeTimer');
let resetBtnHalfTimeTimer = document.getElementById('resetHalfTimeTimer');
let stopBtnHalfTimeTimer = document.getElementById('stopHalfTimeTimer');
let startBtnHalfTimeTimer = document.getElementById('startHalfTimeTimer');

let minutesHalfTimeTimer = 0; 
let secondesHalfTimeTimer = 0; 

let timeoutHalfTimeTimer; 

let estArreteHalfTimeTimer = true; 

const demarrerHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = false; 
        defilerTempsHalfTimeTimer(); 
    }
}; 

const arreterHalfTimeTimer = () => {
    if(!estArreteHalfTimeTimer){
        estArreteHalfTimeTimer = true; 
        clearTimeout(timeoutHalfTimeTimer)
    }
}

const defilerTempsHalfTimeTimer = () => {
    if(estArreteHalfTimeTimer) return; 

    secondesHalfTimeTimer = parseInt(secondesHalfTimeTimer); 
    minutesHalfTimeTimer = parseInt(minutesHalfTimeTimer); 

    secondesHalfTimeTimer++;

    if (secondesHalfTimeTimer == 60) {
        minutesHalfTimeTimer++; 
        secondesHalfTimeTimer = 0; 
    }

    // Affichage 
    if (secondesHalfTimeTimer < 10) {
        secondesHalfTimeTimer = "0" + secondesHalfTimeTimer; 
    }
    if (minutesHalfTimeTimer < 10) {
        minutesHalfTimeTimer = "0" + minutesHalfTimeTimer; 
    }

    chronoHalfTimeTimer.textContent = `${minutesHalfTimeTimer}:${secondesHalfTimeTimer}`; 

    timeoutHalfTimeTimer = setTimeout(defilerTempsHalfTimeTimer, 1000); 
}

const resetHalfTimeTimer = () => {
    chronoHalfTimeTimer.textContent = "00:00"; 
    estArreteHalfTimeTimer = true; 
    minutesHalfTimeTimer = 0;
    secondesHalfTimeTimer = 0;
    clearTimeout(timeoutHalfTimeTimer)
}

startBtnHalfTimeTimer.addEventListener('click', demarrerHalfTimeTimer);
stopBtnHalfTimeTimer.addEventListener('click', arreterHalfTimeTimer);
resetBtnHalfTimeTimer.addEventListener('click', resetHalfTimeTimer);

let chronoTimeoutTimer = document.getElementById('chronoTimeoutTimer');
let resetBtnTimeoutTimer = document.getElementById('resetTimeoutTimer');
let stopBtnTimeoutTimer = document.getElementById('stopTimeoutTimer');
let startBtnTimeoutTimer = document.getElementById('startTimeoutTimer');

let minutesTimeoutTimer = 0; 
let secondesTimeoutTimer = 0; 

let timeoutTimeoutTimer; 

let estArreteTimeoutTimer = true; 

const demarrerTimeoutTimer = () => {
    if(estArreteTimeoutTimer){
        estArreteTimeoutTimer = false; 
        defilerTempsTimeoutTimer(); 
    }
}; 

const arreterTimeoutTimer = () => {
    if(!estArreteTimeoutTimer){
        estArreteTimeoutTimer = true; 
        clearTimeout(timeoutTimeoutTimer)
    }
}

const defilerTempsTimeoutTimer = () => {
    if(estArreteTimeoutTimer) return; 

    secondesTimeoutTimer = parseInt(secondesTimeoutTimer); 
    minutesTimeoutTimer = parseInt(minutesTimeoutTimer); 

    secondesTimeoutTimer++;

    if (secondesTimeoutTimer == 60) {
        minutesTimeoutTimer++; 
        secondesTimeoutTimer = 0; 
    }

    // Affichage 
    if (secondesTimeoutTimer < 10) {
        secondesTimeoutTimer = "0" + secondesTimeoutTimer; 
    }
    if (minutesTimeoutTimer < 10) {
        minutesTimeoutTimer = "0" + minutesTimeoutTimer; 
    }

    chronoTimeoutTimer.textContent = `${minutesTimeoutTimer}:${secondesTimeoutTimer}`; 

    timeoutTimeoutTimer = setTimeout(defilerTempsTimeoutTimer, 1000); 
}

const resetTimeoutTimer = () => {
    chronoTimeoutTimer.textContent = "00:00"; 
    estArreteTimeoutTimer = true; 
    minutesTimeoutTimer = 0;
    secondesTimeoutTimer = 0;
    clearTimeout(timeoutTimeoutTimer)
}

startBtnTimeoutTimer.addEventListener('click', demarrerTimeoutTimer);
stopBtnTimeoutTimer.addEventListener('click', arreterTimeoutTimer);
resetBtnTimeoutTimer.addEventListener('click', resetTimeoutTimer);