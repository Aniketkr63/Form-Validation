document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    validateForm(); 
});

function validateForm() {
    let isValid = true;


    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    
    clearErrors();

    
    if (fullName.length < 5) {
        showError("nameError", "Name must be at least 5 characters long");
        isValid = false;
    }

    
    if (!email.includes("@")) {
        showError("emailError", "Enter a valid email with @");
        isValid = false;
    }

    
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone) || phone === "1234567890") {
        showError("phoneError", "Enter a valid 10-digit phone number");
        isValid = false;
    }

    
    if (password.length < 8 || password.toLowerCase() === "password" || password === fullName) {
        showError("passwordError", "Password must be at least 8 characters and not 'password' or your name");
        isValid = false;
    }

    
    if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match");
        isValid = false;
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
        
    }
}


function clearErrors() {
    const errorFields = document.querySelectorAll("small");
    errorFields.forEach((field) => {
        field.style.display = "none";
    });
}


function showError(id, message) {
    const errorField = document.getElementById(id);
    errorField.innerText = message;
    errorField.style.display = "block";
}


document.getElementById("fullName").addEventListener("change", validateForm);
document.getElementById("email").addEventListener("change", validateForm);
document.getElementById("phone").addEventListener("change", validateForm);
document.getElementById("password").addEventListener("change", validateForm);
document.getElementById("confirmPassword").addEventListener("change", validateForm);
