let minLengthEmail = 5;
let minLengthPass = 6;
let email = prompt('Enter your e-mail', '');
if (email === '' || email === null) {
    alert('Canceled')
} else if (email.length < minLengthEmail) {
    alert("I don't know any emails having name length less than 6 symbols")
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
    alert('I do not know you')
} else {
    let password = prompt('Enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled')
    } else if (email.toLowerCase() === 'user@gmail.com' && password !== 'UserPass' || 
                email.toLowerCase() === 'admin@gmail.com' && password !== 'RootPass') {
        alert('Wrong password')
    } else {
        let change = confirm('Do you want to change your password?');
        if (!change) {
            alert('You have failed the change')
        } else {
            let oldPass = prompt('Old password', '');
            if (oldPass === '' || oldPass === null) {
                alert('Canceled')
            } else if (email.toLowerCase() === 'user@gmail.com' && oldPass !== 'UserPass' || 
                        email.toLowerCase() === 'admin@gmail.com' && oldPass !== 'RootPass') {
                alert('Wrong password')
            } else {
                let newPass = prompt('Enter new password', '');
                if (newPass.length < minLengthPass) {
                    alert('It’s too short password. Sorry.')
                } else {
                    let newPassConfirm = prompt('Confirm new password', '');
                    if (newPass === newPassConfirm) {
                        alert('You have successfully changed your password')
                    } else {
                        alert('You wrote the wrong password')
                    }
                }
            }
        }
    }
}