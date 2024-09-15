// Message show functions
const showMsg = (input,message,type) => {
const smallEl = input.parentElement.querySelector('small');
smallEl.innerText = message;
smallEl.className = type ? 'success' : 'error';
return type;
}

// Error message show function
const showError = (input, message) => showMsg(input, message, false);
// set the error message to blank
const showSuccess = (input) => showMsg(input, '', true);


//Utility Functions
// A field is required
const isRequired = value => value === '' ? false : true ;

// The length of a field is between min and max
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// email is valid form
const emailRegEx = (value) =>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.text(value);
}

// password strong pattern
const isPasswordStrong = (value) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(value);
}


// Selected all elements
const form = document.querySelector('form');
const usernameEl = form.elements['username'];
const emailEl = form.elements['email'];
const passwordEl = form.elements['password'];
const confirmPasswordEl = form.elements['confirm-password'];
// console.log();

// add submit eventListener with form element
form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

// input field validating functions
// Validate the username field
const checkUsername = () =>{
    let valid = false;
    const min = 3;
    const max = 25;
    const username = usernameEl.value.trim();
    if(!isRequired(username)){
        showError(usernameEl, "Username cannot be blank");
    }else if(!isBetween(username.length, min, max)){
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
    }else{
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

// Validate the email field
const checkEmail = () =>{
    let valid = false;
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl, "Email cannot be blank.");
    }else if(!emailRegEx(email)){
        showError(emailEl, "Email is not valid.");
    }else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

// Validate the password field
const checkPassword = () =>{
    let valid = false;
    const password = passwordEl.value.trim();
    if(!isRequired(password)){
        showError(passwordEl, "Password cannot be blank.");
    }else if(!isPasswordStrong(password)){
        showError(passwordEl, `Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)`);
    }else{
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

// Validate the email field
const checkConfirmPassword = () =>{
    let valid = false;
    const password = passwordEl.value.trim();
    const confirmPassword = confirmPasswordEl.value.trim();
    if(!isRequired(confirmPassword)){
        showError(confirmPasswordEl, "Please enter the password again");
    }else if(password !== confirmPassword){
        showError(confirmPasswordEl, "Confirm password does not match.");
    }else{
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
}