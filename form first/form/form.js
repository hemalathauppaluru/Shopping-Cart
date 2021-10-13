const loginButton = document.getElementById('login')
loginButton.addEventListener('click', function () {

    const userForm = document.forms['userForm']
    const userNameElement = userForm.username
    const passwordElement = userForm.password
    const isValidUserName = validateUsername(userNameElement.value)
    const isValidPassword = validatePassword(passwordElement.value)
    if (isValidUserName && isValidPassword) {
        alert('Form is valid')
    }
})

function validateUsername(userName) {
    if (userName) {
        if (userName.search(/[^a-zA-Z]+/) === -1) {
            document.getElementById('invalidUsername').style.display = 'none'
            document.getElementById('emptyUsername').style.display = 'none'
            return true
        } else {
            document.getElementById('invalidUsername').style.display = 'block'
            document.getElementById('emptyUsername').style.display = 'none'
        }
    }else {
        document.getElementById('emptyUsername').style.display = 'block'
        document.getElementById('invalidUsername').style.display = 'none'
    }
    return false
}
function validatePassword(passwordValue) {
        if (passwordValue) {
            if((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(passwordValue)) {
                document.getElementById('invalidPassword').style.display = 'none'
                document.getElementById('emptyPassword').style.display = 'none'
                return true
            } else {
                document.getElementById('invalidPassword').style.display = 'block'
            document.getElementById('emptyPassword').style.display = 'none'
            }
        } else {
            document.getElementById('emptyPassword').style.display = 'block'
            document.getElementById('invalidPassword').style.display = 'none'
        }
        return false
}
