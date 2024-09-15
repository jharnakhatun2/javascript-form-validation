

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