function EventListeners() {
    document.addEventListener('submit', (event) => {
        event.preventDefault()
        if(event.target.matches("#comment-form")){
            // console.log("event")
            const list = document.querySelector("#list")
            const p = document.createElement('p')
            p.textContent = event.target[0].value
            list.append(p)
            event.target.reset()
        }
    })
}

document.addEventListener("click", event => {
    event.preventDefault()
    if(event.target.matches('button#plus')) {
        plusButton()
    }
    if(event.target.matches('button#minus')){
        minusButton()
    }
    if(event.target.matchces('button#pause')){
        pauseButton()
    }
})


function plusButton() {
    const plus = document.getElementById('plus')
    const counter = document.getElementById('counter')
    counter.textContent = parseInt(counter.textContent, 10) + 1
}


function minusButton() {
    // const minus = document.getElementById('plus')
    const counter = document.getElementById('counter')
    counter.textContent = parseInt(counter.textContent, 10) - 1
}

function heartButton() {

}

function pauseButton(event) {
    let isDisabled = false
    if(!isDisabled) {
        isDisabled = !isDisabled
        event.target.textContent = 'Resume'
    } else {
        event.target.textContent = 'Pause'
    }
    const minus = document.getElementById('minus')
    minus.disabled = isDisabled
    const plus = document.getElementById('plus')
    plus.disabled = isDisabled
    const heart = document.getElementById('heart')
    heart.disabled = isDisabled
    const pause = document.getElementById('pause')
}


EventListeners()
