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
    let respaldosAMostrar;
    const suplementoRespaldos = document.querySelector(".suplemento-respaldos");
    let materialesAgora = new Set();
    let materialesAlpha = new Set();
    let materialesBarine = new Set();
    let materialesBertina = new Set();
    let materialesBertinaLit = new Set();
    let materialesCoral = new Set();
    let materialesDana = new Set();
    let materialesGamma = new Set();
    let materialesGiant = new Set();
    let materialesGiantLit = new Set();
    let materialesKappa = new Set();
    let materialesLino = new Set();
    let materialesMemphis = new Set();
    let materialesMistral = new Set();
    let materialesNadir = new Set();
    let materialesPA = new Set();
    let materialesPB = new Set();
    let materialesSigma = new Set();
    let materialesSiroco = new Set();
    let materialesSisal = new Set();
    let materialesTundra = new Set();
    let materialesTucson = new Set();
    let materialesZenith = new Set();
    let materialesZonda = new Set();
    let materialesAltano = new Set();
    let materialesYute = new Set();

    switch (modeloSeleccionado) {
      case "Yute":
        piezasAMostrar = piezasYute;
        suplementoRespaldos.style.display = "none";
        piezasYute.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesYute.add(precio.material);
            });
          }
        });
        break;

      case "Agora":
        piezasAMostrar = piezasAgora;
        respaldosAMostrar = respaldosAgora;
        suplementoRespaldos.style.display = "flex";
        // Poblar materiales específicos de "Agora"
        piezasAgora.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });
        respaldosAgora.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesAgora.add(precio.material);
            });
          }
        });

        break;
      case "Alpha":
        piezasAMostrar = piezasAlpha;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Alpha"
        piezasAlpha.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAlpha.add(precio.material); // <- Usamos "materialesAlpha"
            });
          }
        });

        break;
      case "Altano":
        piezasAMostrar = piezasAltano;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Altano"
        piezasAltano.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesAltano.add(precio.material); // <- Usamos "materialesAltano"
            });
          }
        });

        break;
      case "Barine":
        piezasAMostrar = piezasBarine;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Barine"
        piezasBarine.forEach((piezaBarine) => {
          if (piezaBarine.price) {
            piezaBarine.price.forEach((precio) => {
              materialesBarine.add(precio.material);
            });
          }
        });

        break;
      case "Bertina":
        piezasAMostrar = piezasBertina;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Bertina"
        piezasBertina.forEach((piezaBertina) => {
          if (piezaBertina.price) {
            piezaBertina.price.forEach((precio) => {
              materialesBertina.add(precio.material);
            });
          }
        });

        break;
      case "Bertina Little":
        piezasAMostrar = piezasBertinaLit;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Bertina Lt"
        piezasBertinaLit.forEach((piezaBertinaLit) => {
          if (piezaBertinaLit.price) {
            piezaBertinaLit.price.forEach((precio) => {
              materialesBertinaLit.add(precio.material);
            });
          }
        });

        break;
      case "Coral":
        piezasAMostrar = piezasCoral;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Coral"
        piezasCoral.forEach((piezaCoral) => {
          if (piezaCoral.price) {
            piezaCoral.price.forEach((precio) => {
              materialesCoral.add(precio.material);
            });
          }
        });

        break;
      case "Dana":
        piezasAMostrar = piezasDana;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Dana"
        piezasDana.forEach((piezaDana) => {
          if (piezaDana.price) {
            piezaDana.price.forEach((precio) => {
              materialesDana.add(precio.material);
            });
          }
        });

        break;
      case "Gamma":
        piezasAMostrar = piezasGamma;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Gamma"
        piezasGamma.forEach((piezaGamma) => {
          if (piezaGamma.price) {
            piezaGamma.price.forEach((precio) => {
              materialesGamma.add(precio.material);
            });
          }
        });

        break;
      case "Giant":
        piezasAMostrar = piezasGiant;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Giant"
        piezasGiant.forEach((piezaGiant) => {
          if (piezaGiant.price) {
            piezaGiant.price.forEach((precio) => {
              materialesGiant.add(precio.material);
            });
          }
        });

        break;
      case "Giant Little":
        piezasAMostrar = piezasGiantLit;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Giant Little"
        piezasGiantLit.forEach((piezaGiantLit) => {
          if (piezaGiantLit.price) {
            piezaGiantLit.price.forEach((precio) => {
              materialesGiantLit.add(precio.material);
            });
          }
        });

        break;
      case "Kappa":
        piezasAMostrar = piezasKappa;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Kappa"
        piezasKappa.forEach((piezaKappa) => {
          if (piezaKappa.price) {
            piezaKappa.price.forEach((precio) => {
              materialesKappa.add(precio.material);
            });
          }
        });

        break;
      case "Lino":
        piezasAMostrar = piezasLino;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Lino"
        piezasLino.forEach((pieza) => {
          if (pieza.price) {
            pieza.price.forEach((precio) => {
              materialesLino.add(precio.material);
            });
          }
        });

        break;
      case "Memphis":
        piezasAMostrar = piezasMemphis;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Memphis"
        piezasMemphis.forEach((piezaMemphis) => {
          if (piezaMemphis.price) {
            piezaMemphis.price.forEach((precio) => {
              materialesMemphis.add(precio.material);
            });
          }
        });

        break;
      case "Mistral":
        piezasAMostrar = piezasMistral;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Mistral"
        piezasMistral.forEach((piezaMistral) => {
          if (piezaMistral.price) {
            piezaMistral.price.forEach((precio) => {
              materialesMistral.add(precio.material);
            });
          }
        });

        break;
      case "Nadir":
        piezasAMostrar = piezasNadir;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Nadir"
        piezasNadir.forEach((piezaNadir) => {
          if (piezaNadir.price) {
            piezaNadir.price.forEach((precio) => {
              materialesNadir.add(precio.material);
            });
          }
        });

        break;
      case "Platea Alta":
        piezasAMostrar = piezasPlateaAlta;
        respaldosAMostrar = respaldosPlateaBaja;
        suplementoRespaldos.style.display = "flex";
        // Poblar materiales específicos de "Platea Alta"
        piezasPlateaAlta.forEach((piezaPlateaAlta) => {
          if (piezaPlateaAlta.price) {
            piezaPlateaAlta.price.forEach((precio) => {
              materialesPA.add(precio.material);
            });
          }
        });
        respaldosPlateaBaja.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });

        break;
      case "Platea Baja":
        piezasAMostrar = piezasPlateaBaja;
        respaldosAMostrar = respaldosPlateaBaja;
        suplementoRespaldos.style.display = "flex";
        // Poblar materiales específicos de "Platea Baja"
        piezasPlateaBaja.forEach((piezaPlateaBaja) => {
          if (piezaPlateaBaja.price) {
            piezaPlateaBaja.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        respaldosPlateaBaja.forEach((respaldo) => {
          if (respaldo.price) {
            respaldo.price.forEach((precio) => {
              materialesPB.add(precio.material);
            });
          }
        });
        break;
      case "Sigma":
        piezasAMostrar = piezasSigma;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Sigma"
        piezasSigma.forEach((piezaSigma) => {
          if (piezaSigma.price) {
            piezaSigma.price.forEach((precio) => {
              materialesSigma.add(precio.material);
            });
          }
        });

        break;
      case "Sirocco Eco":
        piezasAMostrar = piezasSiroco;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Siroco"
        piezasSiroco.forEach((piezaSiroco) => {
          if (piezaSiroco.price) {
            piezaSiroco.price.forEach((precio) => {
              materialesSiroco.add(precio.material);
            });
          }
        });

        break;

      case "Sisal":
        piezasAMostrar = piezasSisal;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Sisal"
        piezasSisal.forEach((piezaSisal) => {
          if (piezaSisal.price) {
            piezaSisal.price.forEach((precio) => {
              materialesSisal.add(precio.material);
            });
          }
        });

        break;
      case "Tundra":
        piezasAMostrar = piezasTundra;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Tundra"
        piezasTundra.forEach((piezaTundra) => {
          if (piezaTundra.price) {
            piezaTundra.price.forEach((precio) => {
              materialesTundra.add(precio.material);
            });
          }
        });

        break;
      case "Tucson":
        piezasAMostrar = piezasTucson;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Tucson"
        piezasTucson.forEach((piezaTucson) => {
          if (piezaTucson.price) {
            piezaTucson.price.forEach((precio) => {
              materialesTucson.add(precio.material);
            });
          }
        });

        break;
      case "Zenith":
        piezasAMostrar = piezasZenith;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Zenith"
        piezasZenith.forEach((piezaZenith) => {
          if (piezaZenith.price) {
            piezaZenith.price.forEach((precio) => {
              materialesZenith.add(precio.material);
            });
          }
        });

        break;
      case "Zonda":
        piezasAMostrar = piezasZonda;
        suplementoRespaldos.style.display = "none";
        // Poblar materiales específicos de "Zonda"
        piezasZonda.forEach((piezaZonda) => {
          if (piezaZonda.price) {
            piezaZonda.price.forEach((precio) => {
              materialesZonda.add(precio.material);
            });
          }
        });

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
    let nextIndex = 3;
    // Actualizar los dropdowns de piezas
    for (let i = 1; i <= 8; i++) {
      const dropdown = document.getElementById(`output${i}`);
      dropdown.innerHTML = "";

      // Agregar las nuevas opciones
      respaldosAMostrar.forEach((respaldo) => {
        const option = document.createElement("option");
        option.value = respaldo.id;
        option.textContent = `${respaldo.title}`;
        option.dataset.price = JSON.stringify(respaldo.price);
        dropdown.appendChild(option);
      });
    }

    // Función para ocultar los dropdowns que no están poblados
    function hideUnpopulatedDropdowns() {
      for (let i = 3; i <= 8; i++) {
        const dropdown = document.getElementById(`output${i}`);
        dropdown.style.display = "none"; // Ocultar los dropdowns adicionales
      }
    }

    // Llamar a la función para ocultar dropdowns al inicio
    hideUnpopulatedDropdowns();

    /*--------------BOTON AGREGAR OUTPUTS PARA----------------*/
    document.getElementById("showMore").addEventListener("click", function () {
      // Verificar si hay más elementos para mostrar (en este caso, de 1 a 8)
      if (nextIndex <= 8) {
        // Mostrar el siguiente elemento
        const nextDropdown = document.getElementById("output" + nextIndex);
        if (nextDropdown) {
          nextDropdown.style.display = "flex"; // Mostrar el dropdown
        }
        // Incrementar el contador para el siguiente elemento
        nextIndex++;
      }
    });

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
    } else if (modeloSeleccionado === "Alpha") {
      // Agregar materiales del modelo Alpha
      materialesAlpha.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Barine") {
      // Agregar materiales del modelo Barine
      materialesBarine.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Bertina") {
      // Agregar materiales del modelo Bertina
      materialesBertina.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Bertina Little") {
      // Agregar materiales del modelo Bertina Lt
      materialesBertinaLit.forEach((material) => {
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
    } else if (modeloSeleccionado === "Dana") {
      // Agregar materiales del modelo Dana
      materialesDana.forEach((material) => {
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
    } else if (modeloSeleccionado === "Giant") {
      // Agregar materiales del modelo Giant
      materialesGiant.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Giant Little") {
      // Agregar materiales del modelo Giant Lt
      materialesGiantLit.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Kappa") {
      // Agregar materiales del modelo Kappa
      materialesKappa.forEach((material) => {
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
    } else if (modeloSeleccionado === "Memphis") {
      // Agregar materiales del modelo Memphis
      materialesMemphis.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Mistral") {
      // Agregar materiales del modelo Mistral
      materialesMistral.forEach((material) => {
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
    } else if (modeloSeleccionado === "Platea Alta") {
      // Agregar materiales del modelo Nadir
      materialesPA.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Platea Baja") {
      // Agregar materiales del modelo Nadir
      materialesPB.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
        // Establecer display flex para el elemento con id suplementoPatas
        const suplementoRespaldo = document.getElementById(
          "suplementoRespaldos"
        );
        suplementoRespaldo.style.display = "flex";
      });
    } else if (modeloSeleccionado === "Sirocco Eco") {
      // Agregar materiales del modelo Siroco
      materialesSiroco.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Sigma") {
      // Agregar materiales del modelo Sigma
      materialesSigma.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Sisal") {
      // Agregar materiales del modelo Sisal
      materialesSisal.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Tucson") {
      materialesTucson.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Tundra") {
      // Agregar materiales del modelo Tundra
      materialesTundra.forEach((material) => {
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
    } else if (modeloSeleccionado === "Zonda") {
      // Agregar materiales del modelo Zonda
      materialesZonda.forEach((material) => {
        const option = document.createElement("option");
        option.value = material;
        option.textContent = material;
        telaDropdown.appendChild(option);
      });
    } else if (modeloSeleccionado === "Zenith") {
      // Agregar materiales del modelo Zenith
      materialesZenith.forEach((material) => {
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
});

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

function obtenerRespaldosSeleccionados() {
  const respaldosSeleccionados = [];
  for (let i = 1; i <= 8; i++) {
    const respaldoSelect = document.getElementById(`output${i}`);

    if (respaldoSelect.selectedIndex !== -1) {
      const respaldoSeleccionada = {
        id: respaldoSelect.value,
        nombre: respaldoSelect.options[respaldoSelect.selectedIndex].text,
      };
      if (respaldoSeleccionada.id !== "None") {
        respaldosSeleccionados.push(respaldoSeleccionada);
      }
    }
  }
  return respaldosSeleccionados;
}

const piezas = document.querySelectorAll(".dropdown");
const button = document.getElementById("showPiezas");

for (let i = 0; i < 6 && i < piezas.length; i++) {
  piezas[i].classList.remove("hidden");
}
visibleCount = 4; // Actualiza el contador de piezas visibles

// Agregar evento al botón
button.addEventListener("click", () => {
  if (visibleCount < piezas.length) {
    piezas[visibleCount].classList.remove("hidden"); // Muestra la siguiente pieza
    visibleCount++; // Incrementa el contador de visibles
  }

  // Si ya están visibles todas, deshabilitar el botón
  if (visibleCount === piezas.length) {
    button.disabled = true;
    button.textContent = "No hay más piezas para agregar";
  }
});

/*-------------------MISMO QUE EN PIEZAS---------------------------*/
let nextCojinIndex = 3;
for (let i = 3; i <= 4; i++) {
  document.getElementById("cojin" + i).style.display = "none";
}

// Agregar el evento de clic al botón showCojin
document.getElementById("showCojin").addEventListener("click", function () {
  if (nextCojinIndex <= 4) {
    document.getElementById("cojin" + nextCojinIndex).style.display = "flex";
    nextCojinIndex++;
  }
});
function obtenerPrecioRespaldo(idRespaldo, tela) {
  const colecciones = [respaldosAgora, respaldosPlateaBaja];
  let precioMaterial;
  console.log(
    `Buscando precio para Respaldo ID: ${idRespaldo}, Material: ${tela}`
  );

  // Iterar sobre cada colección
  for (const coleccion of colecciones) {
    // Buscar el respaldo en la colección correspondiente
    const respaldo = coleccion.find((p) => p && p.id === idRespaldo);

    // Comprobar si se encontró el respaldo y si su precio es un array
    if (respaldo && Array.isArray(respaldo.price)) {
      // Buscar el precio correspondiente al material
      precioMaterial = respaldo.price.find((p) => p.material === tela);

      // Si se encuentra el precio, devolverlo como un número
      if (precioMaterial) {
        return parseFloat(precioMaterial.precio) || 0; // Retornar precio convertido
      }
    }
  }

  // Si no se encuentra ningún precio, retornar 0 o un valor por defecto
  return 0;
}
/*--------------------PRECIOS DE LAS PEIZAS SEGUN MODELO------------*/
function obtenerPrecioPorMaterial(idPieza, tela) {
  const colecciones = [
    piezasAgora,
    piezasAltano,
    piezasAlpha,
    piezasBarine,
    piezasBertina,
    piezasBertinaLit,
    piezasCoral,
    piezasDana,
    piezasGamma,
    piezasGiant,
    piezasGiantLit,
    piezasKappa,
    piezasLino,
    piezasMemphis,
    piezasMistral,
    piezasNadir,
    piezasPlateaAlta,
    piezasPlateaBaja,
    piezasSiroco,
    piezasSigma,
    piezasSisal,
    piezasTucson,
    piezasTundra,
    piezasYute,
    piezasZenith,
    piezasZonda,
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
  /*--------------------PRECIOS DE LAS PEIZAS SEGUN MODELO------------*/

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
    case "Alpha":
      nuevosPrecios = preciosAlpha;
      break;
    case "Barine":
      nuevosPrecios = preciosBarine;
      break;
    case "Bertina":
      nuevosPrecios = preciosBertina;
      break;
    case "Bertina Little":
      nuevosPrecios = preciosBertinaLit;
      break;
    case "Coral":
      nuevosPrecios = preciosCoral;
      break;
    case "Dana":
      nuevosPrecios = preciosDana;
      break;
    case "Gamma":
      nuevosPrecios = preciosGamma;
      break;
    case "Giant":
      nuevosPrecios = preciosGiant;
      break;
    case "Giant Little":
      nuevosPrecios = preciosGiantLit;
      break;
    case "Kappa":
      nuevosPrecios = preciosKappa;
      break;
    case "Lino":
      nuevosPrecios = preciosLino;
      break;
    case "Memphis":
      nuevosPrecios = preciosMemphis;
      break;
    case "Mistral":
      nuevosPrecios = preciosMistral;
      break;
    case "Lino":
      nuevosPrecios = preciosLino;
      break;
    case "Nadir":
      nuevosPrecios = preciosNadir;
      break;
    case "Platea Alta":
      nuevosPrecios = preciosPlateaAlta;
      break;
    case "Platea Baja":
      nuevosPrecios = preciosPlateaBaja;
      break;
    case "Sigma":
      nuevosPrecios = preciosSigma;
      break;
    case "Sisal":
      nuevosPrecios = preciosSisal;
      break;
    case "Sirocco Eco":
      nuevosPrecios = preciosSiroco;
      break;
    case "Tundra":
      nuevosPrecios = preciosTundra;
      break;
    case "Tucson":
      nuevosPrecios = preciosTucson;
      break;
    case "Yute":
      nuevosPrecios = precios;
      break;
    case "Zenith":
      nuevosPrecios = preciosZenith;
      break;
    case "Zonda":
      nuevosPrecios = preciosZonda;
      break;
    default:
      nuevosPrecios = precios;
  }

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
  piezasAlpha.forEach((piezaAlpha) => {
    piezaAlpha.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioAlpha) => precioAlpha.id === piezaAlpha.id)
      : [];
  });
  piezasBarine.forEach((piezaBarine) => {
    piezaBarine.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBarine) => precioBarine.id === piezaBarine.id
        )
      : [];
  });
  piezasBertina.forEach((piezaBertina) => {
    piezaBertina.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBertina) => precioBertina.id === piezaBertina.id
        )
      : [];
  });
  piezasBertinaLit.forEach((piezaBertinaLit) => {
    piezaBertinaLit.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioBertinaLit) => precioBertinaLit.id === piezaBertinaLit.id
        )
      : [];
  });
  piezasCoral.forEach((piezaCoral) => {
    piezaCoral.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaCoral) => precioCoral.id === piezaCoral.id)
      : [];
  });
  piezasDana.forEach((piezaDana) => {
    piezaDana.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaDana) => precioDana.id === piezaDana.id)
      : [];
  });
  piezasGiant.forEach((piezaGiant) => {
    piezaGiant.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaGiant) => precioGiant.id === piezaGiant.id)
      : [];
  });
  piezasGiantLit.forEach((piezaGiantLit) => {
    piezaGiantLit.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (piezaGiantLit) => precioGiantLit.id === piezaGiantLit.id
        )
      : [];
  });
  piezasKappa.forEach((piezaKappa) => {
    piezaKappa.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((piezaKappa) => precioKappa.id === piezaKappa.id)
      : [];
  });
  piezasLino.forEach((piezaLino) => {
    piezaLino.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioLino) => precioLino.id === piezaLino.id)
      : [];
  });
  piezasMemphis.forEach((piezaMemphis) => {
    piezaMemphis.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioMemphis) => precioMemphis.id === piezaMemphis.id
        )
      : [];
  });
  piezasMistral.forEach((piezaMistral) => {
    piezaMistral.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioMistral) => precioMistral.id === piezaMistral.id
        )
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
  piezasPlateaAlta.forEach((piezaPlateaAlta) => {
    piezaPlateaAlta.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioPlateaAlta) => precioPlateaAlta.id === piezaPlateaAlta.id
        )
      : [];
  });
  piezasPlateaBaja.forEach((piezaPlateaBaja) => {
    piezaPlateaBaja.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioPlateaBaja) => precioPlateaBaja.id === piezaPlateaBaja.id
        )
      : [];
  });
  piezasSigma.forEach((piezaSigma) => {
    piezaSigma.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioSigma) => precioSigma.id === piezaSigma.id)
      : [];
  });
  piezasSiroco.forEach((piezaSiroco) => {
    piezaSiroco.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioSiroco) => precioSiroco.id === piezaSiroco.id
        )
      : [];
  });
  piezasSisal.forEach((piezaSisal) => {
    piezaSisal.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioSisal) => precioSisal.id === piezaSisal.id)
      : [];
  });
  piezasTucson.forEach((piezaTucson) => {
    piezaTucson.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioTucson) => precioTucson.id === piezaTucson.id
        )
      : [];
  });
  piezasZenith.forEach((piezaZenith) => {
    piezaZenith.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter(
          (precioZenith) => precioZenith.id === piezaZenith.id
        )
      : [];
  });
  piezasZonda.forEach((piezaZonda) => {
    piezaZenith.price = Array.isArray(nuevosPrecios)
      ? nuevosPrecios.filter((precioZonda) => precioZonda.id === piezaZonda.id)
      : [];
  });

  actualizarUI();
}
function mostrarImagenes() {
  const imagenesDiv = document.getElementById("imagenPiezas");
  imagenesDiv.innerHTML = ""; // Limpiar las imágenes anteriores
  imagenesDiv.style.position = "relative"; // Asegurarse de que el contenedor sea relativo

  let currentY = 0;
  let currentX = 0;
  let rotateAfterYutra = false; // Bandera para saber si rotamos después de YUTRA
  let yutraPosition = { x: 0, y: 0, width: 0, height: 0 }; // Posición y tamaño de YUTRA calculada dinámicamente

  const promises = [];

  for (let i = 1; i <= 8; i++) {
    const piezaSelect = document.getElementById(`pieza${i}`);
    if (piezaSelect.selectedIndex !== -1) {
      const selectedOption = piezaSelect.options[piezaSelect.selectedIndex];
      const imageUrl = selectedOption.dataset.imageUrl;
      const piezaId = selectedOption.value;

      if (imageUrl && piezaId !== "None") {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = selectedOption.textContent;
        imgElement.style.position = "absolute"; // Las imágenes deben ser absolutas para poder posicionarlas libremente
        imgElement.classList.add("img-config");
        imagenesDiv.appendChild(imgElement);

        const imageLoadPromise = new Promise((resolve) => {
          imgElement.onload = () => {
            const imgRect = imgElement.getBoundingClientRect(); // Tamaño de la imagen cargada

            // Verificar si es YUTRA o piezas especiales similares
            if (
              [
                "YUTRA",
                "AGOR",
                "ALTR",
                "ALPRA",
                "BERLR",
                "BERR",
                "BARR",
                "GIAR",
                "NADRA",
                "MEMRA",
                "PLAAR",
                "PLAR",
                "LINRA",
                "SIGRA",
                "SIRRC",
                "TUNRA",
                "ZENRA",
              ].includes(piezaId)
            ) {
              // Colocar la pieza "YUTRA" o similares en la posición actual
              imgElement.style.left = `${currentX}px`;
              imgElement.style.top = `${currentY}px`;

              // Actualizar la posición y tamaño de YUTRA basado en su tamaño dinámico
              yutraPosition.x = currentX;
              yutraPosition.y = currentY;
              yutraPosition.width = imgRect.width;
              yutraPosition.height = imgRect.height;

              // Actualizar las posiciones actuales para las siguientes imágenes
              currentX += imgRect.width; // Mover el siguiente elemento a la derecha
              rotateAfterYutra = true; // Bandera para empezar a rotar después
            } else if (rotateAfterYutra) {
              // Las piezas después de YUTRA deben rotarse y estar pegadas a YUTRA

              // Aplicar la rotación de 90 grados
              imgElement.style.transform = "rotate(90deg)";

              // Colocar la imagen al lado derecho de YUTRA (eje x)
              imgElement.style.left = `${
                yutraPosition.x + yutraPosition.width
              }px`;

              // Colocar la imagen rotada alineada con la parte inferior de YUTRA (eje y)
              // Restamos la altura de la imagen rotada (que es el ancho original antes de la rotación) para alinearla correctamente
              imgElement.style.top = `${
                yutraPosition.y + (yutraPosition.height - imgRect.width)
              }px`;

              // Ajustar la posición en X sumando la **altura** de la imagen rotada
              yutraPosition.x += imgRect.height; // Actualizamos la posición en X tomando en cuenta el alto de la imagen rotada
            } else {
              // Para las piezas que no son "YUTRA" y no están rotadas
              imgElement.style.left = `${currentX}px`;
              imgElement.style.top = `${currentY}px`;

              currentX += imgRect.width; // Mover a la derecha para la siguiente pieza
            }

            resolve();
          };
        });

        promises.push(imageLoadPromise);
      }
    }
  }

  // Esperar a que todas las imágenes se carguen
  Promise.all(promises).then(() => {
    console.log("Todas las imágenes están cargadas y posicionadas.");
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
  for (let i = 1; i <= 3; i++) {
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
function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const respaldosSeleccionados = obtenerRespaldosSeleccionados();
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const cojinesSeleccionados = obtenerCojinesSeleccionados();
  const tela = document.getElementById("tela").value;
  const telaIngreso = document.getElementById("telaNombre").value; // Captura el valor de tela ingresada
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

  const precioRespaldos = respaldosSeleccionados.reduce((total, respaldo) => {
    const precioRespaldo = obtenerPrecioRespaldo(respaldo.id, tela);
    return total + precioRespaldo;
  }, 0);

  const motorValue = parseInt(document.getElementById("motor").value, 10) || 0;
  const motorTotal = motorValue * 179;
  const precioTotal =
    precioPiezas + precioCojines + motorTotal + precioRespaldos;

  const suplementosTotal = precioCojines + motorTotal;
  const codigoDescuento = document.getElementById("descuento").value;
  const descuento = obtenerDescuento(codigoDescuento);
  const precioConDescuento = precioTotal * (1 - descuento);

  function obtenerDescuento(codigo) {
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
  resumenElement.innerHTML = `
    <li>Modelo: ${modelo}</li> 
    
    ${
      piezasFiltradas.length > 0
        ? `<li >Piezas seleccionadas:</li><ul>` +
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
    
    <li>Serie seleccionada: ${tela}</li>
  
    ${
      modeloSeleccionado === "Altano"
        ? `<li>Pata seleccionada: ${pata}</li>`
        : ""
    }
    ${
      respaldosSeleccionados.length > 0
        ? `<li>Respaldo seleccionadas:</li><ul>` +
          respaldosSeleccionados
            .map(
              (respaldo) =>
                `<li>${
                  respaldo.nombre
                } &nbsp <span id="preciosRespaldo"> ${obtenerPrecioRespaldo(
                  respaldo.id,
                  tela
                ).toFixed(2)}€</span></li>`
            )
            .join("") +
          "</ul>"
        : ""
    }
    <li>Tela seleccionada: <span id="telaSeleccion"> ${telaIngreso} </span></li>  <!-- Aquí se refleja el valor de la tela ingresada -->
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

/*----------------OVERLAY------------------*/
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

/*-----------ABRIR EL MODAL AL APRETAREL BOTON----------*/
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

/*-----------CIERRE DEL MODAL AL APRETAR "X"----------*/
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

/*-----------CIERRE DEL MODAL AL APRETAR FUERA----------*/
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
