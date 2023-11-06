let loginCard = document.getElementById("contact-card")
let loginButton = document.getElementById("contact-button")

loginButton.onclick = readForm

let shaker = 0

function readForm() {
    const el = document.getElementById("contact-form")
    let formUsername = el.elements[0].value
    let formMessage = el.elements[1].value

    console.log(formUsername)
    console.log(formMessage)

    if (formUsername === '' || formMessage === '') {
        console.log('Fill all the inputs.')
        disclaimer.innerHTML = "Please fill in all the inputs or"
        disclaimer.style.color = 'red'

        if (shaker === 5) {
            startShakerAnimation()
        }
        else {
            shaker++
            startShakeAnimation()
        }
    } else {
        //saving username
        console.log('Successfully sent mail')
        registerDOC.innerHTML = "Successfully sent mail"
        disclaimer.innerHTML = ""
    }
}

// EXTRA 1
const registerDOC = document.getElementById("register")
const easterEggDOC = document.getElementById("easterEgg")
registerDOC.onclick = registerAccount

function registerAccount() {
    easterEggDOC.style.display = 'flex'
}

//EXTRA 2
const disclaimer = document.getElementById("disclaimer")

// Made this with the help of ChatGbt
function startShakeAnimation() {
    loginCard.classList.add('shaking')

    loginCard.addEventListener('animationend', function() {
        loginCard.classList.remove('shaking')
    }, { once: true })
}

function startShakerAnimation() {
    loginCard.classList.add('shakering')

    loginCard.addEventListener('animationend', function() {
        loginCard.classList.remove('shakering')
    }, { once: true })
}

