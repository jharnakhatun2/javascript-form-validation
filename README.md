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
- Input fields are validated as the user types with a **300ms debounce delay**.
- If a field is invalid, an error message is shown under the respective field.
- Form submission is prevented until all inputs are valid.

