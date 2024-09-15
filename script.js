//Utility Functions
// A field is required
const isRequired = value => value === '' ? false : true ;

// The length of a field is between min and max
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// email is valid form
const emailRegEx = (email) =>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.text(email);
}

// password strong pattern
const isPasswordStrong = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

// Selected all elements
const form = document.querySelector('form');
const usernameEl = form.elements['username'];
const emailEl = form.elements['email'];
const passwordEl = form.elements['password'];
const confirmPasswordEl = form.elements['confirm-password'];
// console.log();

// add submit eventListener with form element
form.addEventListener('submit', function(e){
    e.preventDefault();
})