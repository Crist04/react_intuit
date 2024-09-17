const progressBar = document.getElementById("pBar2");
const circularBar = document.querySelectorAll(".progress-bar");
const pBar1 = document.getElementById("pBar1");

let currentProgress = 0;
let currentStep = 0;
circularBar[currentStep].style.zIndex = 3;
currentStep++;

function next(){
    if(currentStep < circularBar.length){
        const pBarWidth = parseFloat(getComputedStyle(pBar1).width);

        const increment = pBarWidth/3;

        currentProgress = currentProgress + increment;

        progressBar.style.width = currentProgress + 'px';

        circularBar[currentStep].style.zIndex = 3;

        currentStep++;

        console.log(currentStep);
    }
}

function prev(){
    if(currentStep > 1){
        const pBarWidth = parseFloat(getComputedStyle(pBar1).width);

        const decrement = pBarWidth/3;

        currentProgress = currentProgress - decrement;

        progressBar.style.width = currentProgress + 'px';

        currentStep--;
    }
}

