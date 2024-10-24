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
    const respaldoSelect = document.getElementById(`outputR${i}`);

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
function obtenerPosapiesSeleccionados() {
  const posapiesSeleccionados = [];
  for (let i = 1; i <= 8; i++) {
    const posapieSelect = document.getElementById(`posapies${i}`);

    if (posapieSelect.selectedIndex !== -1) {
      const posapiesSeleccionado = {
        id: posapieSelect.value,
        nombre: posapieSelect.options[posapieSelect.selectedIndex].text,
      };
      if (posapiesSeleccionado.id !== "None") {
        posapiesSeleccionados.push(posapiesSeleccionado);
      }
    }
  }
  return posapiesSeleccionados;
}

function obtenerPrecioRespaldo(idRespaldo, tela) {
  const colecciones = [respaldosAgora, respaldosPlateaBaja];
  let precioMaterial;

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
/*----------PRECIOS POSAPIES--------*/
function obtenerPrecioPosapies(idPosapie, tela) {
  const colecciones = [
    posapiesAgora,
    posapiesAlpha,
    posapiesBarine,
    posapiesTucson,
    posapiesBertinas,
    posapiesGamma,
    posapiesGiant,
    posapiesNadir,
    posapiesMemphis,
    posapiesPA,
    posapiesPB,
  ];
  let precioMaterial;

  // Iterar sobre cada colección
  for (const coleccion of colecciones) {
    // Buscar el posapie en la colección correspondiente
    const posapie = coleccion.find((p) => p && p.id === idPosapie);

    // Comprobar si se encontró el posapie y si su precio es un array
    if (posapie && Array.isArray(posapie.price)) {
      // Buscar el precio correspondiente al material
      precioMaterial = posapie.price.find((p) => p.material === tela);

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
    piezasAres,
    piezasBarine,
    piezasBertina,
    piezasBertinaLit,
    piezasBruma,
    piezasCoral,
    piezasCoralina,
    piezasCronos,
    piezasDana,
    piezasDino,
    piezasEros,
    piezasGamma,
    piezasGiant,
    piezasGiantLit,
    piezasKappa,
    piezasLino,
    piezasMemphis,
    piezasMistral,
    piezasNadir,
    piezasOmega,
    piezasPlateaAlta,
    piezasPlateaBaja,
    piezasSiroco,
    piezasSigma,
    piezasSisal,
    piezasTassos,
    piezasTita,
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

  // Si la pieza no se encuentra en las colecciones anteriores, verificar si es un cojín
  const cojinesCollection = [
    cojinesSup.supGAMCUA60,
    cojinesSup.supGAMCUA45,
    cojinesSup.supGAMCUAR,
  ];
  for (const cojines of cojinesCollection) {
    precioMaterial = cojines.find((p) => p.material === tela);
    if (precioMaterial) {
      return parseFloat(precioMaterial.precio) || 0;
    }
  }
  const suplementosCollection = [
    cojinesSup.supGAMCUA60,
    cojinesSup.supGAMCUA45,
    cojinesSup.supGAMCUAR,
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

document.addEventListener("DOMContentLoaded", function () {
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach((select) => {
    select.addEventListener("change", function () {
      generarResumen();
      mostrarImagenes();
    });
  });
  // MOTOR INPUT
  const motorInput = document.getElementById("motor");
  motorInput.addEventListener("input", function () {
    const motorValue = parseInt(motorInput.value, 10);
    const motorTotal = motorValue * 179;
    document.getElementById(
      "output"
    ).textContent = `Total Motor: ${motorTotal}€`;
    generarResumen();
  });
  const bateriaInput = document.getElementById("bateria");
  bateriaInput.addEventListener("input", function () {
    const bateriaValue = parseInt(bateriaInput.value, 10);
    const bateriaTotal = bateriaValue * 211;
    document.getElementById(
      "outputBateria"
    ).textContent = `Total Batería: ${bateriaTotal}€`;
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

  console.log("Cojín Seleccionado:", cojinSeleccionado); // Ver qué cojín se ha encontrado

  if (!cojinSeleccionado || !cojinSeleccionado.price) {
    return 0; // Si no hay cojín seleccionado o no se encuentra el precio, retorna 0
  }

  const precioMaterial = cojinSeleccionado.price.find(
    (p) => p.material === tela
  );

  console.log("Precio Material:", precioMaterial); // Ver qué precio se ha encontrado

  if (!precioMaterial) {
    return 0; // Si no se encuentra el material, retorna 0
  }

  return precioMaterial.precio;
}

function generarResumen() {
  const modelo = document.getElementById("modelo").value;
  const respaldosSeleccionados = obtenerRespaldosSeleccionados();
  const posapiesSeleccionados = obtenerPosapiesSeleccionados();
  const piezasSeleccionadas = obtenerPiezasSeleccionadas();
  const cojinesSeleccionados = obtenerCojinesSeleccionados();
  const tela = document.getElementById("tela").value;
  const telaIngreso = document.getElementById("telaNombre").value;
  const pata = document.getElementById("patas").value;
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
  const precioPosapies = posapiesSeleccionados.reduce((total, posapie) => {
    const precioPosapie = obtenerPrecioPosapies(posapie.id, tela);
    return total + precioPosapie;
  }, 0);

  const motorValue = parseInt(document.getElementById("motor").value, 10) || 0;
  const motorTotal = motorValue * 179;
  const bateriaValue =
    parseInt(document.getElementById("bateria").value, 10) || 0;
  const bateriaTotal = bateriaValue * 179;
  const precioTotal =
    precioPiezas +
    precioCojines +
    motorTotal +
    precioRespaldos +
    motorTotal +
    bateriaTotal +
    precioPosapies;

  const suplementosTotal = precioCojines + motorTotal + bateriaTotal;
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
                `<li class="itemsResumen">${
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
                `<li class="itemsResumen">${
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
      modeloSeleccionado === "Altano" ||
      modeloSeleccionado === "Alpha" ||
      modeloSeleccionado === "Bertina" ||
      modeloSeleccionado === "Bertina Little" ||
      modeloSeleccionado === "Dino" ||
      modeloSeleccionado === "Eros" ||
      modeloSeleccionado === "Giant" ||
      modeloSeleccionado === "Giant Little" ||
      modeloSeleccionado === "Kappa" ||
      modeloSeleccionado === "Memphis" ||
      modeloSeleccionado === "Mistral" ||
      modeloSeleccionado === "Omega" ||
      modeloSeleccionado === "Sigma" ||
      modeloSeleccionado === "Tucson" ||
      modeloSeleccionado === "Tita" ||
      modeloSeleccionado === "Tassos"
        ? `<li>Pata seleccionada: ${pata}</li>`
        : ""
    }
    ${
      [
        "Agora",
        "Altano",
        "Alpha",
        "Barine",
        "Bertina",
        "Bertina Little",
        "Gamma",
        "Giant",
        "Giant Little",
        "Memphis",
        "Nadir",
        "Platea Baja",
        "Platea Alta",
        "Tucson",
      ].includes(modelo) && posapiesSeleccionados.length > 0
        ? `<li>Posapies seleccionados:</li><ul>` +
          // Mapear directamente los elementos seleccionados
          posapiesSeleccionados
            .map((posapie) => {
              return `
              <li class="itemsResumen">
                ${posapie.nombre} &nbsp; 
                <span id="preciosPosapies">${obtenerPrecioPosapies(
                  posapie.id,
                  tela
                ).toFixed(2)}€</span>
              </li>`;
            })
            .join("") +
          `</ul>`
        : ""
    }
    
    ${
      respaldosSeleccionados.length > 0
        ? `<li>Respaldo seleccionadas:</li><ul>` +
          respaldosSeleccionados
            .map(
              (respaldo) =>
                `<li class="itemsResumen">${
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
    <li>Tela seleccionada: <span id="telaSeleccion"> ${telaIngreso} </span></li> 
    ${
      motorTotal > 1
        ? `<li>Precio Motor: <span id="motorTotal"> &nbsp${motorTotal.toFixed(
            2
          )}€</span></li>`
        : ""
    }
    ${
      bateriaTotal > 1
        ? `<li>Precio Batería: <span id="bateriaTotal"> &nbsp${bateriaTotal.toFixed(
            2
          )}€</span></li>`
        : ""
    }
     ${
       suplementosTotal > 1
         ? `<li>Precio Suplementos: <span id="precioMotor"> &nbsp${suplementosTotal.toFixed(
             2
           )}€</span></li>`
         : ""
     }
    <li class="precioResumen">Precio Total: <span id="precioTotal"> &nbsp ${precioTotal.toFixed(
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
