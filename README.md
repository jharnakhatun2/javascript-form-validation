# Registration Form with JavaScript Validation (Debounce Technique)
## 🔗 Live Link: 
Preview Live : https://javascript-form-validation-pied.vercel.app/

## Project Overview
This project is a simple registration form with client-side validation using JavaScript. The form validation uses the **debounce technique** to optimize performance by reducing the number of validation function calls as the user types.

## Features
- **Real-time form validation**: The form fields are validated as the user inputs data.
- **Debounce technique**: Optimizes the validation process by delaying the execution of the validation function until the user has stopped typing for a specified duration.
- **Responsive design**: The form layout adjusts based on screen size for a seamless experience across devices.
- **User-friendly messages**: Error messages are displayed to guide the user in correcting input errors.

## Technologies Used
- **HTML5**: For the form structure.
- **CSS3**: For styling the form and error messages.
- **JavaScript (ES6+)**: For client-side validation and debounce functionality.

## Form Fields
- **Full Name**: Requires at least 3 characters.
- **Email Address**: Validates email format.
- **Password**: Must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.
- **Confirm Password**: Ensures that the password matches.

## Validation Rules
- Username cannot be blank and has at least 3 characters and cannot be longer than 25 characters.
- Email is mandatory and valid.
- Password has eight characters or longer. And it must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (`!@#$%^&*`).
- The confirm password must be the same as the password.

