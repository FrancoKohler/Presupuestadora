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
              currentY += imgRect.height;
              rotateAfterYutra = true; // Esto rota luego de las PIEZAS ESPC
            } else if (rotateAfterYutra) {
              // Las piezas después de YUTRA deben rotarse y estar pegadas a YUTRA

              // Aplicar la rotación de 90 grados
              imgElement.style.transform = "rotate(90deg)";

              // Colocar la imagen al lado derecho de YUTRA (eje x)
              imgElement.style.left = `${
                yutraPosition.x + yutraPosition.width
              }px`;

              // Colocar la imagen rotada alineada con la parte inferior de YUTRA (eje y)
              imgElement.style.top = `${yutraPosition.y}px`;

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
