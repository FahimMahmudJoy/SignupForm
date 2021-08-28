let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let submit = document.querySelector('.submit')
var fname = ''
var lname = ''
var mail = ''
var pass = ''
var mailcheck = /^[a-zA-Z]+\.*\w*\.*@[a-zA-Z]+\.[a-zA-Z]+\.*[a-zA-Z]+$/


firstName.addEventListener('change', e => {
    fname = e.target.value
})

lastName.addEventListener('change', e => {
    lname = e.target.value
})

email.addEventListener('change', e => {
    mail = e.target.value
})

password.addEventListener('change', e => {
    pass = e.target.value
})

submit.addEventListener('click', e => {

    if (fname === '') {
        e.preventDefault()
        setTimeout(() => {
            document.querySelector('.first-name').textContent = ''
            firstName.setAttribute('style', 'border: auto')
            firstName.setAttribute('placeholder', 'First Name')
        }, 1500);
        document.querySelector('.first-name').textContent = 'First Name cannot be empty'
        document.querySelector('.first-name').setAttribute('style', 'color:red; font-size: 12px; text-align: right; font-style: italic')
        firstName.setAttribute('style', 'border: 2px solid red')
    }

    if (lname === '') {
        e.preventDefault()
        setTimeout(() => {
            document.querySelector('.last-name').textContent = ''
            lastName.setAttribute('style', 'border: auto')
        }, 1500);
        document.querySelector('.last-name').textContent = 'Last Name cannot be empty'
        document.querySelector('.last-name').setAttribute('style', 'color:red; font-size: 12px; text-align: right; font-style: italic')
        lastName.setAttribute('style', 'border: 2px solid red')
    }

    if (pass === '') {
        e.preventDefault()
        setTimeout(() => {
            document.querySelector('.pass').textContent = ''
            password.setAttribute('style', 'border: auto')
        }, 1500);
        document.querySelector('.pass').textContent = 'Password cannot be empty'
        document.querySelector('.pass').setAttribute('style', 'color:red; font-size: 12px; text-align: right; font-style: italic')
        password.setAttribute('style', 'border: 2px solid red')
    }

    if (!mailcheck.test(mail)) {
        e.preventDefault()
        setTimeout(() => {
            document.querySelector('.email').textContent = ''
            email.setAttribute('style', 'border: auto')
        }, 1500);
        document.querySelector('.email').textContent = 'Looks like this is not an email'
        document.querySelector('.email').setAttribute('style', 'color:red; font-size: 12px; text-align: right; font-style: italic')
        email.setAttribute('style', 'border: 2px solid red; color:red')
    }
})

