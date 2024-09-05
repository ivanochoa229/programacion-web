document.getElementById('formulario').addEventListener('submit', function(event) {
    let isValid = true;

    const firstNameInput = document.getElementById('firstname');
    const firstNameError = document.getElementById('firstNameError');
    if (!firstNameInput.value.trim()) {
        firstNameError.textContent = 'This field is required';
        firstNameInput.classList.add('error-border');
        isValid = false;
    } else {
        firstNameError.textContent = '';
        firstNameInput.classList.remove('error-border');
    }

    const lastNameInput = document.getElementById('lastname');
    const lastNameError = document.getElementById('lastnameError');
    if (!lastNameInput.value.trim()) {
        lastNameError.textContent = 'This field is required';
        lastNameInput.classList.add('error-border');
        isValid = false;
    } else {
        lastNameError.textContent = '';
        lastNameInput.classList.remove('error-border');
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        emailError.textContent = 'This field is required';
        emailInput.classList.add('error-border');
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error-border');
        isValid = false;
    }else {
        emailError.textContent = '';
        emailInput.classList.remove('error-border');
    }

    const queryTypeInputs = document.querySelectorAll('input[name="queryType"]');
    let queryTypeSelected = false;
    queryTypeInputs.forEach(input => {
        if (input.checked) {
            queryTypeSelected = true;
            input.parentElement.classList.remove('error-border');
        } else {
            input.parentElement.classList.add('error-border');
        }
    });

    const queryTypeError = document.getElementById('queryTypeError');
    if (!queryTypeSelected) {
        queryTypeError.textContent = 'Please select a query type.';
        isValid = false;
    } else {
        queryTypeError.textContent = '';
    }

    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if(!messageInput.value.trim()){
        messageError.textContent= "This field is required";
        messageInput.classList.add('error-border');
        isValid = false;
    } else {
        messageError.textContent = "";
        messageInput.classList.remove('error-border');
    }


    const consentInput = document.getElementById("consent");
    const consentError = document.getElementById("consentError");
    if(!consentInput.checked){
        consentError.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    } else {
        consentError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        // Limpiar los campos del formulario
        document.getElementById('formulario').reset();

        // Remover todas las clases de error-border y los mensajes de error
        document.querySelectorAll('.error-border').forEach(element => {
            element.classList.remove('error-border');
        });

        document.querySelectorAll('.error').forEach(errorElement => {
            errorElement.textContent = '';
        });
        
        document.querySelectorAll('.query-border').forEach((border) => {
            border.classList.remove('selected');
          });
        // Mostrar la alerta personalizada
        const alertBox = document.getElementById('successAlert');
        alertBox.classList.remove('hidden');

        // Hide the success alert after 2.5 seconds
        setTimeout(() => {
            alertBox.classList.add('hidden');
        }, 2500); 

        event.preventDefault();
    }

});


document.querySelectorAll('input[name="queryType"]').forEach((input) => {
    input.addEventListener('change', function() {
      document.querySelectorAll('.query-border').forEach((border) => {
        border.classList.remove('selected');
      });
      this.closest('.query-border').classList.add('selected');
    });
  });