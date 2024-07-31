document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");

  // Llamar a la función de actualización al cargar la página por primera vez
  actualizarPiezasSegunModelo();

  // Escuchar el cambio en el selector de modelo
  modeloSelect.addEventListener("change", actualizarPiezasSegunModelo);
  function actualizarPiezasSegunModelo() {
    const modeloSeleccionado = document.getElementById("modelo").value;
    let piezasAMostrar;

    /*CAMBIO SEGUN EL INPUT*/
    switch (modeloSeleccionado) {
      case "Yute":
        piezasAMostrar = piezas; // `piezas` es el conjunto de piezas para Yute
        break;
      case "Lino":
        piezasAMostrar = piezasLino; // `piezasLino` es el conjunto de piezas para Lino
        break;
      case "Agora":
        piezasAMostrar = piezasAgora; // `piezasAgora` es el conjunto de piezas para Agora
        break;
      default:
        piezasAMostrar = [];
    }
    for (let i = 1; i <= 8; i++) {
      const dropdown = document.getElementById(`pieza${i}`);
      dropdown.innerHTML = ""; // Limpiar las opciones existentes

      // Agregar las nuevas opciones
      piezasAMostrar.forEach((pieza) => {
        const option = document.createElement("option");
        option.value = pieza.id;
        option.textContent = `${pieza.title}`;
        option.dataset.price = JSON.stringify(pieza.price);
        option.dataset.imageUrl = pieza.imageUrl;
        dropdown.appendChild(option);
      });
    }

    // Actualizar las imágenes y el resumen después de cambiar el modelo
    mostrarImagenes();
    generarResumen();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const materialesSet = new Set();

  // TOMA CADA PIEZA Y COGE EL MATERIAL
  piezas.forEach((pieza) => {
    if (pieza.price) {
      pieza.price.forEach((precio) => {
        materialesSet.add(precio.material);
      });
    }
  });

  const dropdown = document.getElementById("tela");
  dropdown.innerHTML = "";

  // AGREGAR OPCIONES DROPDOWN
  materialesSet.forEach((material) => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = material;
    dropdown.appendChild(option);
  });
  generarResumen();
});

// SCRIPT PARA LLENAR LAS PIEZAS
document.addEventListener("DOMContentLoaded", function () {
  // COGE LOS ID DE PIEZAS DEL 1-8
  for (let i = 1; i <= 8; i++) {
    const dropdown = document.getElementById(`pieza${i}`);

    if (dropdown) {
      piezas.forEach((pieza) => {
        const option = document.createElement("option");
        option.value = pieza.id;
        option.textContent = `${pieza.title}`;
        option.dataset.price = JSON.stringify(pieza.price);
        option.dataset.imageUrl = pieza.imageUrl;
        dropdown.appendChild(option);
      });
    }
  }
});

/*-----------------GRABADO DE LA IMAGEN DE LA MUESTRA SELECCIONADA----------*/
let resumen = { nombre: "" };
let categoriaSeleccionada = "";

// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Configuración inicial
  document
    .getElementById("category-select")
    .addEventListener("change", seleccionarCategoria);
  document.getElementById("search-input").addEventListener("input", buscarTela);
});

function seleccionarCategoria() {
  categoriaSeleccionada = document.getElementById("category-select").value;
  document.getElementById("search-input").value = "";
  document.getElementById("dropdown-content").innerHTML = "";
  document.getElementById("dropdown-content").style.display = "none";
}

function buscarTela() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.innerHTML = "";

  if (categoriaSeleccionada === "") {
    alert("Por favor, selecciona una categoría primero.");
    return;
  }

  const muestrasArray = muestras[categoriaSeleccionada];
  muestrasArray.forEach((item) => {
    if (item.nombre.toLowerCase().includes(input)) {
      const div = document.createElement("div");
      div.classList.add("dropdown-item");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.nombre;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.marginRight = "10px";

      const span = document.createElement("span");
      span.innerText = item.nombre;

      div.appendChild(img);
      div.appendChild(span);
      div.classList.add("tela-span");
      div.onclick = () => seleccionarMuestra(item.nombre);
      dropdownContent.appendChild(div);
    }
  });

  if (dropdownContent.children.length > 0) {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

function seleccionarMuestra(nombre) {
  resumen.nombre = nombre;
  const selectedOption = document.getElementById("selected-option");
  if (selectedOption) {
    selectedOption.innerText = nombre;
    selectedOption.dataset.nombre = nombre; // Almacenar el nombre en el dataset
  }
  console.log("Muestra seleccionada:", resumen.nombre);
  document.getElementById("dropdown-content").style.display = "none"; // Cerrar el dropdown después de la selección
  generarResumen(); // Actualizar el resumen cuando se seleccione una muestra
}
function seleccionarMuestra(nombre) {
  resumen.nombre = nombre;
  const selectedOption = document.getElementById("selected-option");
  if (selectedOption) {
    selectedOption.innerText = nombre;
    selectedOption.dataset.nombre = nombre; // Almacenar el nombre en el dataset
  }
  console.log("Muestra seleccionada:", resumen.nombre);
  document.getElementById("dropdown-content").style.display = "none"; // Cerrar el dropdown después de la selección
}
function cerrarOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

/*---------------------DESCUENTO INPUT-----------------*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("descuento")
    .addEventListener("input", generarResumen);
});

function obtenerPiezasSeleccionadas() {
  const piezasSeleccionadas = [];
  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);

    if (piezaSelect.selectedIndex !== -1) {
      const piezaSeleccionada = {
        id: piezaSelect.value,
        nombre: piezaSelect.options[piezaSelect.selectedIndex].text,
      };
      if (piezaSeleccionada.id !== "None") {
        piezasSeleccionadas.push(piezaSeleccionada);
      }
    }
  }
  return piezasSeleccionadas;
}

function obtenerPrecioPorMaterial(idPieza, tela) {
  // Verifica que las colecciones están definidas y son arrays
  const colecciones = [piezas, piezasLino, piezasAgora];

  for (const coleccion of colecciones) {
    if (!Array.isArray(coleccion)) {
      console.error("Error: Colección no es un array");
      continue;
    }

    // Verifica que `p` no sea undefined y que `id` esté definido
    const pieza = coleccion.find((p) => p && p.id === idPieza);
    if (pieza && Array.isArray(pieza.price)) {
      const precioMaterial = pieza.price.find((p) => p.material === tela);
      if (precioMaterial) {
        return parseFloat(precioMaterial.precio) || 0;
      }
    }
  }

  // Retorna 0 si no se encuentra el precio
  return 0;
}

function cambiarPreciosPorModelo(modelo) {
  let nuevosPrecios;

  switch (modelo) {
    case "Yute":
      nuevosPrecios = precios; // Asegúrate de que esto sea un array
      break;
    case "Lino":
      nuevosPrecios = preciosLino; // Asegúrate de que esto sea un array
      break;
    case "Agora":
      nuevosPrecios = preciosAgora; // Asegúrate de que esto sea un array
      break;
    default:
      nuevosPrecios = precios; // Por defecto, usa el array de precios inicial
  }

  // Verificar si nuevosPrecios es un array
  if (!Array.isArray(nuevosPrecios)) {
    console.error("Error: nuevosPrecios no es un array");
    return;
  }

  piezas.forEach((pieza) => {
    // Asegúrate de que pieza.price sea un array antes de usar filter
    pieza.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precio) => precio.id === pieza.id)
      : [];
  });
  piezasAgora.forEach((piezaAgora) => {
    // Asegúrate de que pieza.price sea un array antes de usar filter
    piezaAgora.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAgora) => precioAgora.id === piezaAgora.id)
      : [];
  });
  piezasLino.forEach((piezaLino) => {
    // Asegúrate de que pieza.price sea un array antes de usar filter
    piezaLino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioLino) => precioLino.id === piezaLino.id)
      : [];
  });

  actualizarUI();
}

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar las imágenes anteriores
  let yutraPosition = null;
  let currentY = 0;
  let currentX = 0; // Acumulador de la posición Y para las siguientes imágenes
  let rotateAfterYutra = false; // Indica si se debe rotar la imagen después de YUTRA
  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);

    if (piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;

      const containerHeight =
        parseInt(selectedOption.dataset.height, 10) || 350; // Valor predeterminado si no se especifica

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;
        imgElement.style.margin = "0px";
        imgElement.style.verticalAlign = "top";
        imgElement.style.position = "absolute";
        imgElement.classList.add("img-config");
        imagenesDiv.appendChild(imgElement);

        if (piezaId === "YUTRA") {
          // Guardar la posición de YUTRA después de que se haya renderizado en el DOM
          const rect = imgElement.getBoundingClientRect();
          yutraPosition = {
            left: rect.left - imagenesDiv.getBoundingClientRect().left,
            top: rect.top - imagenesDiv.getBoundingClientRect().top,
            width: rect.width,
            height: rect.height,
          };
          currentY = yutraPosition.top + yutraPosition.height;
          currentX = yutraPosition.left + yutraPosition.width; // Establecer la posición inicial para las siguientes imágenes
          rotateAfterYutra = true; // Indicar que las siguientes imágenes deben rotarse
        } else if (rotateAfterYutra) {
          // Rotar y posicionar la imagen debajo de la última imagen añadida
          imgElement.style.transform = "rotate(90deg)";
          imgElement.style.position = "absolute"; // Asegurar que la imagen se posiciona de forma absoluta
          imgElement.style.left = `${currentX}px`;
          imgElement.style.top = `${currentY}px`;

          // Actualizar las coordenadas para la siguiente imagen
          const imgRect = imgElement.getBoundingClientRect();
          currentY += imgRect.height;
        } else {
          // Posicionar la imagen normalmente
          imgElement.style.position = "relative";
          imgElement.style.display = "inline-block";
          imgElement.style.left = "0"; // Resetear el left para imágenes normales
          imgElement.style.top = "0"; // Resetear el top para imágenes normales
        }
      }
    }
  }
}

generarResumen();
mostrarImagenes();
// RESUMEN
document.addEventListener("DOMContentLoaded", function () {
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      generarResumen();
      mostrarImagenes();
    });
  });

  const motorInput = document.getElementById("motor");
  motorInput.addEventListener("input", function () {
    const motorValue = parseInt(motorInput.value, 10);
    const motorTotal = motorValue * 179;
    document.getElementById(
      "output"
    ).textContent = `Total Motor: ${motorTotal}€`;
    generarResumen();
  });

  generarResumen();
});

function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const tela = document.getElementById("tela").value;
  const categoriaSeleccionada = resumen.nombre; // Usar el valor almacenado en resumen
  const piezasFiltradas = piezasSeleccionadas.filter(
    (pieza) => pieza.id !== "None"
  );

  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    console.log(`Precio de ${pieza.id} para tela ${tela}: ${precioPieza}`);
    return total + precioPieza;
  }, 0);

  const motorValue = parseInt(document.getElementById("motor").value, 10) || 0;
  const motorTotal = motorValue * 179;

  const precioTotal = precioPiezas + motorTotal;

  /*---------CODIGOS DE DESCUENTOS CONST----------*/
  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);
  /*------FUNCION DE DESCUENTOS Y CODIGOS-------*/
  function obtenerDescuento(codigo) {
    /*GET DEL 1-50*/
    const match = codigo.match(/^GET(\d{1,2})$/);
    if (match) {
      const descuento = parseInt(match[1], 10); // Extrae el número del código
      if (descuento >= 1 && descuento <= 50) {
        return descuento / 100; // Convierte el número en un porcentaje de descuento
      }
    }
    return 0.0; // Si no coincide, retorna 0
  }
  const resumenElement = document.getElementById("resumen");
  resumenElement.innerHTML = `
    <li>Modelo: ${modelo}</li>
   ${
     piezasFiltradas.length > 0
       ? `<li>Piezas seleccionadas:</li><ul>` +
         piezasFiltradas
           .map(
             (pieza) =>
               `<li>${
                 pieza.nombre
               } - <span id="preciosMaterial"> ${obtenerPrecioPorMaterial(
                 pieza.id,
                 tela
               ).toFixed(2)}€</span></li>`
           )
           .join("") +
         "</ul>"
       : ""
   }
    <li>Serie seleccionada: ${tela}</li>
    <li>Tela seleccionada: ${categoriaSeleccionada}</li>
    <li>Precio Motor: <span id="precioMotor">${motorTotal.toFixed(
      2
    )}€</span></li>
    <li>Precio Total: <span id="precioTotal">${precioTotal.toFixed(
      2
    )}€</span></li>
    <li>Descuento aplicado: <span id="descuentoAplicado">${(
      descuento * 100
    ).toFixed(0)}%</span></li>
    <li>Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(
      2
    )}€</span></li>
  `;
}
