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
  const visible = true;
  students.push({ name, lastName, visible });
  localStorage.setItem("students", JSON.stringify(students));

  cargarAlumnos();

  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";

  window.location.href = "tabla.html"; // Redirigir a tabla.html
};

let limite = 5;
let desde = 0;
let paginas = 0;
let paginaActiva = 1;

const arregloInt = () => {
  let arregloIntermedio = [];
  students.forEach((st) => {
    if (st.visible) {
      arregloIntermedio.push(st);
    }
  });
  return arregloIntermedio;
};

let arregloIntermedio = arregloInt();
let arreglo = arregloIntermedio.slice(desde, limite);

paginas = arregloIntermedio.length / limite;

arregloIntermedio.forEach((al) => console.log(al));

const cargarAlumnos = () => {
  alumnosVisibles = 0;
  //students.forEach((st) => (st.visible = true));
  students.forEach((st) => {
    if (st.visible) {
      alumnosVisibles += 1;
    }
  });
  const tbody = document.getElementById("student_table");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (arreglo.length != 0) {
    arreglo.map(({ name, lastName, visible }) => {
      if (visible) {
        const fila = document.createElement("tr");
        const contenido = `<td>${name}</td><td>${lastName}</td>`;
        fila.innerHTML = contenido;
        tbody.append(fila);
      } else {
        const fila = document.createElement("tr");
        const contenido = `<td>${""}</td><td>${""}</td>`;
        fila.innerHTML = contenido;
        tbody.append(fila);
      }
    });
    if (arreglo.length % 5 != 0) {
      for (let i = 0; i < 5 - arreglo.length; i++) {
        const fila = document.createElement("tr");
        const contenido = `<td>${""}</td><td>${""}</td>`;
        fila.innerHTML = contenido;
        tbody.append(fila);
      }
    }
  } else {
    const head = document.querySelector("thead");
    const ul = document.querySelector("ul");
    head.style.display = "none";
    ul.style.display = "none";
    const fila = document.createElement("h4");
    const contenido = "No hay alumnos cargados";
    fila.innerHTML = contenido;
    tbody.append(fila);
    return;
  }
  cargarAlumnosPaginacion();
};

const cargarAlumnosPaginacion = () => {
  document.querySelector("#items").innerHTML = "";
  console.log(alumnosVisibles);
  let index = paginaActiva > 4 ? paginaActiva - 4 : 0;
  let limite = index + 5;
  console.log(paginas);
  paginas = alumnosVisibles / limite;
  switch (true) {
    case Math.ceil(paginas) < 5:
      console.log("Dentro del caso 1");
      index = 0;
      limite = Math.ceil(paginas);
      break;
  
    case paginaActiva > Math.round(paginas):
      console.log("Dentro del caso 2");
      limite = Math.round(paginas) + 1;
      index = paginaActiva > 5 ? paginaActiva - 5 : 0;
      break;
  
    case paginaActiva == paginas:
      console.log("Dentro del caso 3");
      limite = paginas;
      index = paginaActiva > 5 ? paginaActiva - 5 : 0;
      break;
  
    case limite > Math.ceil(paginas):
      console.log(`Limite ${limite}, pagina: ${paginas}`);
      console.log("Dentro del caso 4");
      index -= 1;
      limite -= 1;
      break;
  
    default:
      console.log("No se cumple ninguna condición");
      break;
  }
  console.log(`Index: ${index}, Limite: ${limite}`);
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


window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina; //5
  if (desde <= arregloIntermedio.length) {
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

//buscador
document.addEventListener("keyup", (event) => {
  // Si el campo de búsqueda está vacío, restauramos el arreglo original
  students.forEach(st => st.visible = true);
  if (event.target.matches("#buscador")) {
    if (event.target.value.trim() === "") {
      arregloIntermedio = arregloInt(); // Restauramos el arreglo original
      arreglo = arregloIntermedio.slice(desde, limite); // Actualizamos el array con la paginación original
    } else {
      // Buscamos las coincidencias
      students.forEach((st) => {
        st.visible = true; // Todos visibles por defecto
        if (
          !st.name.toLowerCase().includes(event.target.value.toLowerCase()) &&
          !st.lastName.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          st.visible = false;
        }
      });
      // Ordenamos el arreglo visible
      arregloIntermedio.sort((a, b) => b.visible - a.visible);
      arreglo = arregloIntermedio.slice(desde, limite); // Asignamos los elementos al arreglo paginado
    }
  }
  arregloIntermedio.forEach(al => console.log(al));
  arreglo.forEach(al => console.log(al));
  cargarAlumnos();
});


const modificarArregloProductos = () => {
  arreglo = arregloIntermedio.slice(desde, limite  * paginaActiva);
  cargarAlumnos();
};

