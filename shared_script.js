document.addEventListener("DOMContentLoaded", () => {
    initializeListeners()
})

const subscriptionForm = document.getElementById("subscription-form")
const btnSuscription = document.getElementById("btn-suscription")
const subscriptionEmail = document.getElementById("subscription-email")


function initializeListeners() {
    subscriptionForm.addEventListener("submit", subscribe)
}

function subscribe(event) {
    event.preventDefault()

    if (validateEmail()) {
        console.log("Email subscribed")
        showToast("toast")
        clearSubscriptionForm()
    }
}

function validateEmail() {
    return subscriptionForm.checkValidity()
}

function showToast(id) {
    const toast = document.getElementById(id)
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)

    toastBootstrap.show()
}

function clearSubscriptionForm() {
    subscriptionEmail.value = ""
}