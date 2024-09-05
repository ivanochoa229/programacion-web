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

  cargarAlumnos();

  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";

  window.location.href = "tabla.html"; // Redirigir a tabla.html
};

let limite = 5;
let desde = 0;
let paginas = students.length / limite;
let paginaActiva = 1;

let arreglo = students.slice(desde, limite);

console.log(students);

const cargarAlumnos = () => {
  const tbody = document.getElementById("student_table");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (arreglo.length != 0) {
    arreglo.map(({ name, lastName }) => {
      const fila = document.createElement("tr");
      const contenido = `<td>${name}</td><td>${lastName}</td>`;
      fila.innerHTML = contenido;
      tbody.append(fila);
    });
    if (arreglo.length % 5 != 0) {
      for (let i = 0; i < 5 - arreglo.length; i++) {
        const fila = document.createElement("tr");
        const contenido = `<td>${"-"}</td><td>${"-"}</td>`;
        fila.innerHTML = contenido;
        tbody.append(fila);
      }
    }
  }else{
    const head = document.querySelector("thead");
    const ul = document.querySelector("ul");
    head.style.display = "none";
    ul.style.display = "none";
    const fila = document.createElement("h4");
    const contenido = "No hay alumnos cargados en memoria";
    fila.innerHTML = contenido;
    tbody.append(fila);
    return ;
  }
  cargarAlumnosPaginacion();
};

const cargarAlumnosPaginacion = () => {
  document.querySelector("#items").innerHTML = "";
  let index = paginaActiva > 4 ? paginaActiva - 4 : 0;
  let limite = index + 5;
  if (paginaActiva > Math.round(paginas)) {
    limite = Math.round(paginas) + 1;
    index = paginaActiva > 5 ? paginaActiva - 5 : 0;
  }
  if (paginaActiva == paginas) {
    limite = paginas;
    index = paginaActiva > 5 ? paginaActiva - 5 : 0;
  }
  for (index; index < limite; index++) {
    const item = document.createElement("li");
    item.classList = `page-item ${paginaActiva == index + 1 ? "active" : ""}`;
    const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</button>`;
    item.innerHTML = enlace;
    document.querySelector("#items").append(item);
  }
};

const modificarArregloProductos = () => {
  arreglo = students.slice(desde, limite * paginaActiva);
  cargarAlumnos();
};

window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina; //5
  if (desde <= students.length) {
    modificarArregloProductos();
  }
};

window.nextPage = () => {
  if (paginaActiva < paginas) {
    desde += 5;
    paginaActiva++;
    modificarArregloProductos();
  }
};

window.previousPage = () => {
  if (desde > 0) {
    paginaActiva--;
    desde -= 5;
    modificarArregloProductos();
  }
};

cargarAlumnos();
