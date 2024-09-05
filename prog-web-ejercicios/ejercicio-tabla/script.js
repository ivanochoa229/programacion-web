document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  if (form) {
    form.addEventListener("submit", function (event) {
      let isValid = true;

      const firstNameInput = document.getElementById("name");
      const firstNameError = document.getElementById("nameError");
      if (!firstNameInput.value.trim()) {
        firstNameError.textContent = "Este campo es obligatorio";
        firstNameInput.classList.add("error-border");
        isValid = false;
      } else {
        firstNameError.textContent = "";
        firstNameInput.classList.remove("error-border");
      }

      const lastNameInput = document.getElementById("lastName");
      const lastNameError = document.getElementById("lastNameError");
      if (!lastNameInput.value.trim()) {
        lastNameError.textContent = "Este campo es obligatorio";
        lastNameInput.classList.add("error-border");
        isValid = false;
      } else {
        lastNameError.textContent = "";
        lastNameInput.classList.remove("error-border");
      }

      if (!isValid) {
        event.preventDefault();
      } else {
        addStudent(event);
      }
    });

    // Eliminar la clase de error cuando el campo recibe foco
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        const errorInputs = form.querySelectorAll(".error-border");
        errorInputs.forEach((errorInput) => {
          errorInput.classList.remove("error-border");
          const errorElement = document.getElementById(`${errorInput.id}Error`);
          if (errorElement) {
            errorElement.textContent = "";
          }
        });
      });
    });
  }
});

let students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  students.push({ name, lastName });
  localStorage.setItem("students", JSON.stringify(students));

  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";

  window.location.href = "tabla.html"; // Redirigir a tabla.html
};

const renderTable = () => {
  const tbody = document.getElementById("student_table");
  if (!tbody) return;
  tbody.innerHTML = "";

  students.forEach((student) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${student.name}</td><td>${student.lastName}</td>`;

    tbody.appendChild(row);
  });
};


// Cargar la tabla si ya hay datos en localStorage
renderTable();
