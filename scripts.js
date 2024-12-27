document.addEventListener("DOMContentLoaded", () => {
    initializeListeners()
})

const contactForm = document.getElementById("contact-form")
const contactName = document.getElementById("contact-name")
const contactEmail = document.getElementById("contact-email")
const contactMessage = document.getElementById("contact-message")
const contactSubmit = document.getElementById("contact-submit")
const submitValidationMessage = document.getElementById("submit-validation-message")


function initializeListeners() {
    contactForm.addEventListener("submit", submitContactForm)
    contactName.addEventListener("input", validateContact)
    contactEmail.addEventListener("input", validateContact)
    contactMessage.addEventListener("input", validateContact)
}

function submitContactForm(event) {
    event.preventDefault()

    if (validateContact()) {
        console.log("Form submitted")
        showToast("toast")
        clearContactForm()
    }
}

function validateContact() {
    const isValid = contactForm.checkValidity()

    if (isValid) {
        contactSubmit.disabled = false
        submitValidationMessage.textContent = " El formulario se puede enviar"

    } else contactSubmit.disabled = true

    return isValid
}

function clearContactForm() {
    contactName.value = ""
    contactEmail.value = ""
    contactMessage.value = ""
    submitValidationMessage.textContent = " El formulario debe haber sido rellenado correctamente para poder enviarse"
    contactSubmit.disabled = true
}

function showToast(id) {
    const toast = document.getElementById(id)
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)

    toastBootstrap.show()
}