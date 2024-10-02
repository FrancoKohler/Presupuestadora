//CAMBIO DE PIEZAS E INPUTS SEGUN MODELOS
document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");

  // Llamar a la función de actualización al cargar la página por primera vez
  actualizarPiezasSegunModelo();

  // Escuchar el cambio en el selector de modelo
  modeloSelect.addEventListener("change", actualizarPiezasSegunModelo);

  function actualizarPiezasSegunModelo() {
    const modeloSeleccionado = modeloSelect.value;
    let piezasAMostrar;
    let materialesAgora = new Set();
    let materialesBarine = new Set();
    let materialesCoral = new Set();
    let materialesGamma = new Set();
    let materialesLino = new Set();
    let materialesNadir = new Set();
    let materialesSiroco = new Set();
    let materialesAltano = new Set();
    let materialesYute = new Set();

    switch (modeloSeleccionado) {
      case "Yute":
        piezasAMostrar = piezasYute;
        piezasYute.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesYute.add(precio.material);
            });
          }
        });
        break;
      case "Lino":
        piezasAMostrar = piezasLino;
        piezasLino.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesLino.add(precio.material);
            });
          }
        });
        break;
      case "Agora":
        piezasAMostrar = piezasAgora;
        // Poblar materiales específicos de "Agora"
        piezasAgora.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });
        console.log("Materiales para Agora:", Array.from(materialesAgora)); // Depuración
        break;
      case "Altano":
        piezasAMostrar = piezasAltano;
        // Poblar materiales específicos de "Altano"
        piezasAltano.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAltano.add(precio.material); // <- Usamos "materialesAltano"
            });
          }
        });
        console.log("Materiales para Altano:", Array.from(materialesAltano)); // <- Depuración
        break;
      case "Barine":
        piezasAMostrar = piezasBarine;
        // Poblar materiales específicos de "Barine"
        piezasBarine.forEach((piezaBarine) => {
          if (piezaBarine.price) {
            piezaBarine.price.forEach((precio) => {
              materialesBarine.add(precio.material);
            });
          }
        });
        console.log("Materiales para Barine:", Array.from(materialesBarine)); // Depuración
        break;
      case "Coral":
        piezasAMostrar = piezasCoral;
        // Poblar materiales específicos de "Coral"
        piezasCoral.forEach((piezaCoral) => {
          if (piezaCoral.price) {
            piezaCoral.price.forEach((precio) => {
              materialesCoral.add(precio.material);
            });
          }
        });
        console.log("Materiales para Coral:", Array.from(materialesCoral)); // Depuración
        break;
      case "Gamma":
        piezasAMostrar = piezasGamma;
        // Poblar materiales específicos de "Gamma"
        piezasGamma.forEach((piezaGamma) => {
          if (piezaGamma.price) {
            piezaGamma.price.forEach((precio) => {
              materialesGamma.add(precio.material);
            });
          }
        });
        console.log("Materiales para Gamma:", Array.from(materialesGamma)); // Depuración
        break;
      case "Nadir":
        piezasAMostrar = piezasNadir;
        // Poblar materiales específicos de "Nadir"
        piezasNadir.forEach((piezaNadir) => {
          if (piezaNadir.price) {
            piezaNadir.price.forEach((precio) => {
              materialesNadir.add(precio.material);
            });
          }
        });
        console.log("Materiales para Nadir:", Array.from(materialesNadir)); // Depuración
        break;
      case "Sirocco Eco":
        piezasAMostrar = piezasSiroco;
        // Poblar materiales específicos de "Siroco"
        piezasSiroco.forEach((piezaSiroco) => {
          if (piezaSiroco.price) {
            piezaSiroco.price.forEach((precio) => {
              materialesSiroco.add(precio.material);
            });
          }
        });
        console.log(
          "Materiales para Sirocco Eco:",
          Array.from(materialesSiroco)
        ); // Depuración
        break;
      default:
        piezasAMostrar = [];
    }

    // Actualizar los dropdowns de piezas
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

    // Actualizar el dropdown de tela según el modelo
    const telaDropdown = document.getElementById("tela");
    telaDropdown.innerHTML = ""; // Limpiar las opciones existentes

    if (modeloSeleccionado === "Agora") {
      // Agregar materiales del modelo Agora
      materialesAgora.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Altano") {
      // Agregar materiales del modelo Altano
      materialesAltano.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        // Establecer display flex para el elemento con id suplementoPatas
        const suplementoPatas = document.getElementById("suplementoPatas");
        suplementoPatas.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Barine") {
      // Agregar materiales del modelo Barine
      materialesBarine.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Coral") {
      // Agregar materiales del modelo Coral
      materialesCoral.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Gamma") {
      // Agregar materiales del modelo Gamma
      materialesGamma.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Lino") {
      // Agregar materiales del modelo Lino
      materialesLino.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Nadir") {
      // Agregar materiales del modelo Nadir
      materialesNadir.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Sirocco Eco") {
      // Agregar materiales del modelo Siroco
      materialesSiroco.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Yute") {
      // Agregar materiales del modelo Yute
      materialesYute.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    }

    // Actualizar las imágenes y el resumen después de cambiar el modelo
    mostrarImagenes();
    generarResumen();
  }

  /*--------------COJINES-------------*/

  const dropdownCjs = ["cojin1", "cojin2", "cojin3", "cojin4"];

  function populateDropdownsCojines(options) {
    dropdownCjs.forEach((selectId) => {
      const select = document.getElementById(selectId);
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.textContent = option.title;
        select.appendChild(optionElement);
      });
    });
  }

  populateDropdownsCojines(cojines);
  /*--------------SUPLEMENTOS AGORA-------------*/
  const dropdownIds = [
    "output1",
    "output2",
    "output3",
    "output4",
    "output5",
    "output6",
    "output7",
    "output8",
  ];
  function populateDropdowns(options) {
    dropdownIds.forEach((selectId) => {
      const select = document.getElementById(selectId);
      options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.textContent = option.title;
        select.appendChild(optionElement);
      });
    });
  }

  // Contador para rastrear cuál es el siguiente elemento a mostrar
  let nextIndex = 5;
  for (let i = 5; i <= 8; i++) {
    document.getElementById("output" + i).style.display = "none";
  }
  // Llenar todos los selects con todas las opciones
  populateDropdowns(suplementos);
  /*--------------BOTON AGREGAR OUTPUTS PARA----------------*/
  document.getElementById("showMore").addEventListener("click", function () {
    // Verificar si hay más elementos para mostrar
    if (nextIndex <= 8) {
      // Mostrar el siguiente elemento
      document.getElementById("output" + nextIndex).style.display = "flex";
      // Incrementar el contador para el siguiente elemento
      nextIndex++;
    }
  });
  // POBLAR LAS TELAS
  const materialesSet = new Set();

  piezas.forEach((pieza) => {
    if (pieza.price) {
      pieza.price.forEach((precio) => {
        materialesSet.add(precio.material);
      });
    }
  });

  const dropdown = document.getElementById("tela");
  dropdown.innerHTML = "";

  materialesSet.forEach((material) => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = material;
    dropdown.appendChild(option);
  });

  generarResumen();
});

/*-----------------NO SE USA PARTE DE ESTE SCRIPT ACTUALMENTE PARA FACILITAR UX----------*/
let resumen = { nombre: "" };
let categoriaSeleccionada = "";

document.addEventListener("DOMContentLoaded", () => {
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

  if (!categoriaSeleccionada) {
    alert("Por favor, selecciona una categoría primero.");
    return;
  }

  const muestrasArray = muestras[categoriaSeleccionada];

  if (!muestrasArray) {
    console.error(
      `La categoría seleccionada (${categoriaSeleccionada}) no existe en el objeto muestras.`
    );
    return;
  }

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

  dropdownContent.style.display =
    dropdownContent.children.length > 0 ? "block" : "none";
}

function seleccionarMuestra(nombre) {
  resumen.nombre = nombre;
  const selectedOption = document.getElementById("selected-option");
  if (selectedOption) {
    selectedOption.innerText = nombre;
    selectedOption.dataset.nombre = nombre;
  }
  console.log("Muestra seleccionada:", resumen.nombre);
  document.getElementById("dropdown-content").style.display = "none";
  generarResumen();
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
/*--------------------PRECIOS DE LAS PEIZAS SEGUN MODELO------------*/
function obtenerPrecioPorMaterial(idPieza, tela) {
  const colecciones = [
    piezasYute,
    piezasAgora,
    piezasAltano,
    piezasBarine,
    piezasCoral,
    piezasGamma,
    piezasLino,
    piezasNadir,
    piezasSiroco,
  ];
  let precioMaterial;

  for (const coleccion of colecciones) {
    const pieza = coleccion.find((p) => p && p.id === idPieza);
    if (pieza && Array.isArray(pieza.price)) {
      precioMaterial = pieza.price.find((p) => p.material === tela);
      if (precioMaterial) {
        return parseFloat(precioMaterial.precio) || 0;
      }
    }
  }

  // Si la pieza no se encuentra en las colecciones anteriores, verificar si es un cojín
  const cojinesCollection = [
    supAgora.supGAMCUA60,
    supAgora.supGAMCUA45,
    supAgora.supGAMCUAR,
  ];
  for (const cojines of cojinesCollection) {
    precioMaterial = cojines.find((p) => p.material === tela);
    if (precioMaterial) {
      return parseFloat(precioMaterial.precio) || 0;
    }
  }
  const suplementosCollection = [
    supAgora.supGAMCUA60,
    supAgora.supGAMCUA45,
    supAgora.supGAMCUAR,
    supAgora.supAGOPT,
    supAgora.supAGOCUA60,
    supAgora.supAGORA90,
    supAgora.supAGORA80,
    supAgora.supAGORA70,
    supAgora.supAGORR100,
    supAgora.supAGORR90,
    supAgora.supAGORR80,
    supAgora.supAGORR70,
  ];
  for (const suplementos of suplementosCollection) {
    precioMaterial = suplementos.find((p) => p.material === tela);
    if (precioMaterial) {
      return parseFloat(precioMaterial.precio) || 0;
    }
  }
  // Retorna 0 si no se encuentra el precio
  return 0;
}
/*-----------SWITCH DE PRECIOS SEGUN MODELO----------*/
function cambiarPreciosPorModelo(modelo) {
  let nuevosPrecios;

  switch (modelo) {
    case "Agora":
      nuevosPrecios = preciosAgora;
      break;
    case "Altano":
      nuevosPrecios = preciosAltano;
      break;
    case "Barine":
      nuevosPrecios = preciosBarine;
      break;
    case "Coral":
      nuevosPrecios = preciosCoral;
      break;
    case "Gamma":
      nuevosPrecios = preciosGamma;
      break;
    case "Lino":
      nuevosPrecios = preciosLino;
      break;
    case "Nadir":
      nuevosPrecios = preciosNadir;
      break;
    case "Sirocco Eco":
      nuevosPrecios = preciosSiroco;
      break;
    case "Yute":
      nuevosPrecios = precios;
      break;
    default:
      nuevosPrecios = precios; // Por defecto, usa el array de precios inicial
  }

  // Verificar si nuevosPrecios es un array
  if (!Array.isArray(nuevosPrecios)) {
    console.error("Error: nuevosPrecios no es un array");
    return;
  }
  /*-----------PRECIO POR PIEZA------*/
  piezasYute.forEach((piezaYute) => {
    //YUTE PIEZAS

    piezaYute.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precio) => precio.id === piezaYute.id)
      : [];
  });
  piezasAgora.forEach((piezaAgora) => {
    piezaAgora.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAgora) => precioAgora.id === piezaAgora.id)
      : [];
  });
  piezasAltano.forEach((piezaAltano) => {
    piezaAltano.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioAltano) => precioAltano.id === piezaAltano.id
        )
      : [];
  });
  piezasBarine.forEach((piezaBarine) => {
    piezaBarine.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBarine) => precioBarine.id === piezaBarine.id
        )
      : [];
  });
  piezasCoral.forEach((piezaCoral) => {
    piezaCoral.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaCoral) => piezaCoral.id === piezaCoral.id)
      : [];
  });
  piezasLino.forEach((piezaLino) => {
    piezaLino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioLino) => precioLino.id === piezaLino.id)
      : [];
  });
  piezasNadir.forEach((piezaNadir) => {
    piezaNadir.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioNadir) => precioNadir.id === piezaNadir.id)
      : [];
  });
  piezasSiroco.forEach((piezaSiroco) => {
    piezaSiroco.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioSiroco) => precioSiroco.id === piezaSiroco.id
        )
      : [];
  });

  actualizarUI();
}

function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar las imágenes anteriores
  let yutraPosition = null;
  let currentY = 0;
  let currentX = 0;
  let rotateAfterYutra = false;

  const promises = [];

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;
      const containerHeight =
        parseInt(selectedOption.dataset.height, 10) || 350;

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;
        imgElement.style.margin = "0px";
        imgElement.style.verticalAlign = "top";
        imgElement.style.position = "absolute";
        imgElement.classList.add("img-config");
        imagenesDiv.appendChild(imgElement);

        // Asegúrate de que la imagen esté cargada antes de posicionarla
        const imageLoadPromise = new Promise((resolve) => {
          imgElement.onload = () => {
            if (selectedOption.textContent.toLowerCase().includes("sofa")) {
              imgElement.style.paddingLeft = "15px";
              imgElement.style.borderTop = "none";
            }
            if (
              piezaId === "YUTRA" ||
              piezaId === "AGOR" ||
              piezaId === "LINRA" ||
              piezaId === "ALTR" ||
              piezaId === "BARR" ||
              piezaId === "NADRA" ||
              piezaId === "SIRRC"
            ) {
              const rect = imgElement.getBoundingClientRect();
              yutraPosition = {
                left: rect.left - imagenesDiv.getBoundingClientRect().left,
                top: rect.top - imagenesDiv.getBoundingClientRect().top,
                width: rect.width,
                height: rect.height,
              };
              currentY = yutraPosition.top + yutraPosition.height;
              currentX = yutraPosition.left + yutraPosition.width;
              rotateAfterYutra = true;
            } else if (rotateAfterYutra) {
              imgElement.style.transform = "rotate(90deg)";
              imgElement.style.left = `${currentX}px`;
              imgElement.style.top = `${currentY}px`;

              const imgRect = imgElement.getBoundingClientRect();
              currentY += imgRect.height;
            } else {
              imgElement.style.position = "relative";
              imgElement.style.display = "inline-block";
              imgElement.style.left = "0";
              imgElement.style.top = "0";
            }
            resolve();
          };
        });

        promises.push(imageLoadPromise);
      }
    }
  }

  // Una vez que todas las imágenes hayan terminado de cargarse, podemos continuar
  Promise.all(promises).then(() => {
    console.log("Todas las imágenes están cargadas y posicionadas.");
    // Aquí puedes proceder con el siguiente paso, como llamar a html2canvas.
  });
}
function renderResults(results) {
  const resultsContainer = document.getElementById(`pieza${i}`);
  resultsContainer.innerHTML = ""; // Limpiamos los resultados previos

  results.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.titulo;
    div.id = item.id;

    // Si el título contiene la palabra "sofa", aplicamos el padding
    if (item.titulo.toLowerCase().includes("sofa")) {
      div.style.paddingLeft = "5px";
    }

    resultsContainer.appendChild(div);
  });
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
/*-------------------COJINES Y PRECIOS---------------------*/
function obtenerCojinesSeleccionados() {
  const cojinesSeleccionados = [];
  for (let i = 1; i <= 4; i++) {
    const cojinSelect = document.getElementById(`cojin${i}`);
    if (cojinSelect.selectedIndex !== -1) {
      const cojinSeleccionado = {
        id: cojinSelect.value,
        nombre: cojinSelect.options[cojinSelect.selectedIndex].text,
      };
      if (cojinSeleccionado.id !== "None") {
        cojinesSeleccionados.push(cojinSeleccionado);
      }
    }
  }
  return cojinesSeleccionados;
}

function obtenerPrecioCojin(id, tela) {
  const cojinSeleccionado = cojines.find((cojin) => cojin.id === id);

  if (!cojinSeleccionado || !cojinSeleccionado.price) {
    return 0; // Si no hay cojín seleccionado o no se encuentra el precio, retorna 0
  }

  const precioMaterial = cojinSeleccionado.price.find(
    (p) => p.material === tela
  );

  if (!precioMaterial) {
    return 0; // Si no se encuentra el material, retorna 0
  }

  return precioMaterial.precio;
}
/*-------------------AGREGAR COJINES---------------------------*/
let nextCojinIndex = 2;

// Inicialmente, ocultar los elementos cojin1 a cojin4
for (let i = 2; i <= 4; i++) {
  document.getElementById("cojin" + i).style.display = "none";
}

// Agregar el evento de clic al botón showCojin
document.getElementById("showCojin").addEventListener("click", function () {
  // Verificar si hay más elementos para mostrar
  if (nextCojinIndex <= 4) {
    // Mostrar el siguiente elemento
    document.getElementById("cojin" + nextCojinIndex).style.display = "flex";
    // Incrementar el contador para el siguiente elemento
    nextCojinIndex++;
  }
});
/*-------------------SUPLEMENTOS Y PRECIOS---------------------*/
function obtenerSuplementosSeleccionados() {
  const suplementoSeleccionados = [];
  for (let i = 1; i <= 4; i++) {
    const supSelect = document.getElementById(`output${i}`);
    if (supSelect.selectedIndex !== -1) {
      const suplementoSeleccionado = {
        id: supSelect.value,
        nombre: supSelect.options[supSelect.selectedIndex].text,
      };
      if (suplementoSeleccionado.id !== "None") {
        suplementoSeleccionados.push(suplementoSeleccionado);
      }
    }
  }
  return suplementoSeleccionados;
}
function obtenerPrecioSuplemento(id, tela) {
  const suplementoSeleccionado = suplementos.find((sup) => sup.id === id);
  if (!suplementoSeleccionado || !suplementoSeleccionado.price) {
    return 0;
  }
  const precioMaterial = suplementoSeleccionado.price.find(
    (p) => p.material === tela
  );
  return precioMaterial ? parseFloat(precioMaterial.precio) || 0 : 0;
}

function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const cojinesSeleccionados = obtenerCojinesSeleccionados();
  const suplementoSeleccionados = obtenerSuplementosSeleccionados();
  const tela = document.getElementById("tela").value;
  const pata = document.getElementById("patas").value;
  const categoriaSeleccionada = resumen.nombre;
  const modeloSeleccionado = document.getElementById("modelo").value;
  const piezasFiltradas = piezasSeleccionadas.filter(
    (pieza) => pieza.id !== "None"
  );
  const precioPiezas = piezasFiltradas.reduce((total, pieza) => {
    const precioPieza = obtenerPrecioPorMaterial(pieza.id, tela);
    return total + precioPieza;
  }, 0);
  const precioCojines = cojinesSeleccionados.reduce((total, cojin) => {
    const precioCojin = obtenerPrecioCojin(cojin.id, tela);
    return total + precioCojin;
  }, 0);
  const precioSuplementos = suplementoSeleccionados.reduce(
    (total, suplemento) => {
      const precioSuplemento = obtenerPrecioSuplemento(suplemento.id, tela);
      return total + precioSuplemento;
    },
    0
  );
  const motorValue = parseInt(document.getElementById("motor").value, 10) || 0;
  const motorTotal = motorValue * 179;
  const precioTotal =
    precioPiezas + precioCojines + motorTotal + precioSuplementos;
  const suplementosTotal = precioCojines + motorTotal + precioSuplementos;
  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);

  function obtenerDescuento(codigo) {
    /*GET DEL 1-50*/
    const match = codigo.match(/^GET(\d{1,2})$/);
    if (match) {
      const descuento = parseInt(match[1], 10); // Extrae el número del código
      if (descuento >= 1 && descuento <= 50) {
        return descuento / 100; // Convierte el número en un porcentaje de descuento
      }
    }
    return 0.0;
  }

  const resumenElement = document.getElementById("resumen");
  //Resumen y cada item tiene una condicio nde aparicion segun el input y su existencia en cada modelo
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
                } &nbsp <span id="preciosMaterial"> ${obtenerPrecioPorMaterial(
                  pieza.id,
                  tela
                ).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
  
    ${
      cojinesSeleccionados.length > 0
        ? `<li>Cojines seleccionados:</li><ul>` +
          cojinesSeleccionados
            .map(
              (cojin) =>
                `<li>${
                  cojin.nombre
                } &nbsp <span id="preciosMaterialCojin"> ${obtenerPrecioCojin(
                  cojin.id,
                  tela
                ).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
    ${
      suplementoSeleccionados.length > 0
        ? `<li>Suplementos seleccionados:</li><ul>` +
          suplementoSeleccionados
            .map(
              (suplemento) =>
                `<li>${
                  suplemento.nombre
                } &nbsp <span id="preciosMaterialSuplemento"> ${obtenerPrecioSuplemento(
                  suplemento.id,
                  tela
                ).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
    <li>Serie seleccionada: ${tela}</li>
  
    ${
      modeloSeleccionado === "Altano"
        ? `<li>Pata seleccionada: ${pata}</li>`
        : ""
    }<!-- Comentario: FILTRO EN RESUMEN SI ES PIEZA ALTANO -->
    <li>Tela seleccionada: <span id="telaSeleccion"> ${categoriaSeleccionada} </span></li>
     ${
       suplementosTotal > 1
         ? `<li>Precio Suplemento: <span id="precioMotor"> &nbsp${suplementosTotal.toFixed(
             2
           )}€</span></li>`
         : ""
     }
    <li>Precio Total: <span id="precioTotal"> &nbsp ${precioTotal.toFixed(
      2
    )}€</span></li>
     ${
       descuento > 0
         ? `<li>Descuento aplicado: <span id="descuentoAplicado">${(
             descuento * 100
           ).toFixed(0)}%</span></li>
         <li>Precio Total con descuento: <span id="precioTotalDesc"> ${precioConDescuento.toFixed(
           2
         )}€</span></li>`
         : ""
     }
  `;
}

generarResumen();

//ALERTA SI EL INPUT DE TELAS TIENE VALOR NULO
const telaInput = document.getElementById("telaInput");
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function () {
  // Verificar si el valor del input es nulo o vacío
  if (!telaInput.value.trim()) {
    // Mostrar una alerta si está vacío
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Asegurate de ingresar una tela para tu configuración",
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Volver
  `,
      customClass: {
        popup: "my-popup",
        title: "my-title",
        text: "my-text",
        confirmButton: "my-confirm-button",
      },
    });
  }
});
