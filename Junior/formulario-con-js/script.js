document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validación del nombre
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!nameInput.value) {
        nameError.textContent = 'El nombre es requerido.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validación del email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value) {
        emailError.textContent = 'El email es requerido.';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'El formato del email no es válido.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});