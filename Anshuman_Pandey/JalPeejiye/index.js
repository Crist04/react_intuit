const smallGlassesEl = document.querySelectorAll('.small-glass')
const remainingEl = document.querySelector('.remaining')
const litersEl = document.querySelector('.liters')
const percentageEl = document.querySelector('.percentage')

function updateBigGlass() {
    const totalGlasses = smallGlassesEl.length;
    const fullGlassesEl = document.querySelectorAll('.small-glass.full').length;

    if(fullGlassesEl === 0) {
        percentageEl.style.visibility = 'hidden'
        percentageEl.style.height = 0
    } else {
        percentageEl.style.visibility = 'visible'
        percentageEl.style.height = `${fullGlassesEl / totalGlasses * 350}px`
        percentageEl.innerText = `${fullGlassesEl / totalGlasses * 100}%`
    }

    if(fullGlassesEl === totalGlasses) {
        remainingEl.style.visibility = 'hidden'
        remainingEl.style.height = 0
    } else {
        remainingEl.style.visibility = 'visible'
        litersEl.innerText = `${2 - (250 * fullGlassesEl / 1000)}L`
    }
}

smallGlassesEl.forEach((glass, id) => {
    glass.addEventListener('click', () => {
            glass.classList.toggle('full')
        updateBigGlass();
    })
})


