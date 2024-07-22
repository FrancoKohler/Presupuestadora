/*----------------------eliminar si no funciona desde este punto--------*/
/*-----------IMAGEN MUESTRA------------*/
// Función para cargar imagen
async function cargarImagen(imgPath) {
  try {
    const res = await fetch(imgPath);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return res.arrayBuffer();
  } catch (error) {
    console.error("Error cargando la imagen:", error);
    return null;
  }
}

// Función para añadir la imagen de muestra
async function añadirImagenDeMuestra() {
  const imgPath = encontrarImagen(resumen.nombre);
  if (imgPath) {
    const imgBytes = await cargarImagen(imgPath);
    if (imgBytes) {
      const img =
        imgPath.endsWith(".jpg") || imgPath.endsWith(".jpeg")
          ? await pdfDoc.embedJpg(imgBytes)
          : await pdfDoc.embedPng(imgBytes);
      page.drawImage(img, {
        x: 50,
        y: 50,
        width: 500,
        height: 300,
      });
    } else {
      console.error("No se pudo cargar la imagen.");
    }
  } else {
    console.error("No se encontró la imagen para la muestra seleccionada.");
  }
}
// Función para añadir imagen de muestra
async function añadirImagenDeMuestraElement() {
  if (muestraImg) {
    const muestraImageBytes = await fetch(muestraImg.src).then((res) =>
      res.arrayBuffer()
    );
    const muestraImage = await pdfDoc.embedPng(muestraImageBytes);
    page.drawImage(muestraImage, {
      x: 430,
      y: 260,
      width: 60,
      height: 40,
    });
  }
}
await añadirImagenDeMuestra();
await añadirImagenDeMuestraElement();
/*----------------------eliminar si no funciona hasta este punto--------*/
