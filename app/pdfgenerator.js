/*------VARIABLES UNIVERSALES-------*/

/*------RECONOCIMIENTO DE FECHA ACTUAL-----*/
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()}`;
/*--------GENERADOR DE CODIGO ALEATORIO--------*/
function generateRandomReferenceNumber() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 9; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const numeroReferencia = generateRandomReferenceNumber();

async function createPDF() {
  await new Promise((resolve) => setTimeout(resolve, 1500)); /*-Esperar 1500ms*/
  const modelo = document.getElementById("modelo").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const cifEmpresa = document.getElementById("cifEmpresa").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const cifCliente = document.getElementById("cifCliente").value;
  const emailCliente = document.getElementById("emailCliente").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;
  const telefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const emailEmpresa = document.getElementById("emailEmpresa").value;
  const pais = document.getElementById("pais").value;
  const calle = document.getElementById("calle").value;
  const ciudad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const puertaPiso = document.getElementById("puertaPiso").value;
  const tela = document.getElementById("tela").value;
  /* const telaNumero = document.getElementById("dropdown-content").value; */
  const precioTotalElement = document.getElementById("precioTotal");
  const precioMotorElement = document.getElementById("precioMotor");
  const descuentoAplicadoElement = document.getElementById("descuentoAplicado");
  const precioTotalDescElement = document.getElementById("precioTotalDesc");

  const selectIds = [
    "pieza1",
    "pieza2",
    "pieza3",
    "pieza4",
    "pieza5",
    "pieza6",
    "pieza7",
    "pieza8",
  ];
  const piezasSelect = [
    ...piezasAgora,
    ...piezasAltano,
    ...piezasAlpha,
    ...piezasBarine,
    ...piezasBertina,
    ...piezasBertinaLit,
    ...piezasCoral,
    ...piezasDana,
    ...piezasGamma,
    ...piezasGiant,
    ...piezasGiantLit,
    ...piezasKappa,
    ...piezasLino,
    ...piezasMemphis,
    ...piezasMistral,
    ...piezasNadir,
    ...piezasPlateaAlta,
    ...piezasPlateaBaja,
    ...piezasSiroco,
    ...piezasSigma,
    ...piezasSisal,
    ...piezasTucson,
    ...piezasTundra,
    ...piezasYute,
    ...piezasZenith,
    ...piezasZonda,
    ...suplementos,
    ...cojines,
  ];
  /*--------------------------------IMG TELA--------------------------*/

  /*-------------------------------IMAGENES DE REFERENCIA-------------------------------*/

  /*------FUNCION PARA SELECCION DE TAB DE TELAS---------*/

  // Crear nuevo documento PDF
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([550, 750]);

  // Cargar la fuente Helvetica
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  /*-------COLOR ------*/
  const color838383 = rgb(0.4, 0.4, 0.4);
  const colorLine = rgb(0.7, 0.7, 0.7);
  const colorPrice = rgb(0.3, 0.3, 0.3);

  /*----AÑADIR TEXTO AL PDF-----*/

  function drawText(page, text, x, y, size, font, color) {
    page.drawText(text, {
      x: x,
      y: y,
      size: size,
      font: font,
      color: color,
    });
  }

  drawText(page, "Presupuesto", 52, 720, 15, helveticaFont);
  /*------------LINEA PRESUPUESTO--------------*/
  page.drawRectangle({
    x: 48,
    y: 710,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });

  page.drawRectangle({
    x: 430,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });

  /*-------------------INFO CLIENTE------------------- */
  drawText(page, "INFORMACIÓN CLIENTE", 74, 690, 10, helveticaFont);
  drawText(page, `Nombre: ${nombreCliente}`, 74, 670, 8, helveticaFont);
  drawText(page, `CIF Cliente: ${cifCliente}`, 74, 650, 8, helveticaFont);
  drawText(page, `País: ${pais}`, 74, 630, 8, helveticaFont);
  drawText(
    page,
    `Direccion: ${calle},${puertaPiso},${ciudad},${codigoPostal}`,
    74,
    610,
    8,
    helveticaFont
  );
  drawText(page, `Teléfono: ${telefonoCliente}`, 74, 590, 8, helveticaFont);
  drawText(page, `Email: ${emailCliente}`, 74, 570, 8, helveticaFont);

  // -------------------INFO EMPRESA-------------------
  drawText(page, "INFORMACIÓN EMPRESA", 364, 690, 10, helveticaFont);
  drawText(
    page,
    `Nombre Empresa: ${nombreEmpresa}`,
    364,
    670,
    8,
    helveticaFont
  );
  drawText(page, `Teléfono: ${telefonoEmpresa}`, 364, 650, 8, helveticaFont);
  drawText(page, `CIF Empresa: ${cifEmpresa}`, 364, 630, 8, helveticaFont);
  drawText(page, `Email Empresa: ${emailEmpresa}`, 364, 610, 8, helveticaFont);
  /*---------MODELO Y CONFIGURACION-----------*/

  drawText(page, `Modelo: ${modelo}`, 52, 530, 15, helveticaFont);
  /*------------LINEA MODELO--------------*/
  page.drawRectangle({
    x: 48,
    y: 520,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  drawText(page, "REFERENCIA", 74, 500, 10, helveticaFont);

  drawText(
    page,
    "*imagen de referencia de otra configuración",
    74,
    390,
    5,
    helveticaFont,
    color838383
  );
  /*--------------------IMAGEN TELA MUESTRA---------------*/

  drawText(page, "PRESUPUESTO", 364, 500, 10, helveticaFont);
  /*Fecha Emision*/
  drawText(page, `Fecha Emisión: ${formattedDate}`, 364, 480, 8, helveticaFont);
  // Número de Referencia
  drawText(
    page,
    `N° Referencia: ${numeroReferencia}`,
    364,
    460,
    8,
    helveticaFont
  );
  /*Leyenda de presupuesto*/
  drawText(
    page,
    "*La fecha de emisión definirá la validez del presupuesto,",
    364,
    445,
    5,
    helveticaFont,
    color838383
  );

  drawText(
    page,
    "más info en pie de página.",
    364,
    440,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*El número de referencia servirá para localizar el",
    364,
    435,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "presupuesto ya realizado.",
    364,
    430,
    5,
    helveticaFont,
    color838383
  );
  /*----------------------DIMENSIONES------------------------------*/
  drawText(page, "DIMENSIONES", 74, 350, 10, helveticaFont);
  if (typeof html2canvas === "function") {
    const imagenesDiv = document.getElementById("imagenPiezas");

    // Forzar un reflujo para asegurarse de que el DOM esté actualizado
    imagenesDiv.style.display = "none";
    imagenesDiv.offsetHeight; // Trigger reflow
    imagenesDiv.style.display = "block";
    // Espera a que todas las imágenes se hayan cargado completamente
    await waitForImagesToLoad(document.getElementById("imagenPiezas"));
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Genera el canvas a partir del contenido de #imagenPiezas
    const canvas = await html2canvas(imagenesDiv, {
      useCORS: true, // Permite el uso de imágenes desde otros dominios
      scrollY: -window.scrollY, // Ajusta el scroll para capturar la posición correcta
      scrollX: -window.scrollX,
      allowTaint: true, // Permite capturar imágenes tainted (potencialmente de otros orígenes)
    });
    const imgData = canvas.toDataURL("image/png");
    // Inserta la imagen en el PDF
    const pdfImage = await pdfDoc.embedPng(imgData);
    page.drawImage(pdfImage, { x: 74, y: 240, width: 170, height: 100 });

    // Guarda el documento PDF y descarga el archivo
  }

  // Espera a que todas las imágenes se hayan cargado completamente
  function waitForImagesToLoad(container) {
    const images = container.getElementsByTagName("img");
    const promises = Array.from(images).map(
      (img) =>
        new Promise((resolve, reject) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = reject;
          }
        })
    );
    return Promise.all(promises);
  }

  /*----------------------TEJIDO-----------------------------------*/
  drawText(page, "TEJIDO", 364, 350, 10, helveticaFont);
  /* drawText(page, `Articulo: ${tela}`, 430, 315, 8, helveticaFont);
  drawText(page, `Tela: ${telaNumero}`, 430, 300, 8, helveticaFont); */
  /*-------------------------IMG TELA-----------------------------*/
  /* page.drawImage(TelaBytes, { x: 364, y: 285, width: 50, height: 50 }); */
  /*-------------------------TARIFA-------------------------------*/
  drawText(page, "Tarifa", 52, 220, 15, helveticaFont);
  /*------------LINEA TARIFA--------------*/
  page.drawRectangle({
    x: 48,
    y: 210,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  drawText(page, "PIEZA", 76, 190, 8, helveticaFont);
  /* drawText(page, "CANT.", 320, 190, 8, helveticaFont); */
  drawText(page, "VALOR U.", 362, 190, 8, helveticaFont);
  /* drawText(page, "VALOR TOT.", 441, 190, 8, helveticaFont); */

  /*-----------------------ACLARACIONES PRECIOS-----------------*/
  drawText(
    page,
    "*Presupuesto con validez de 90 días a partir de la fecha de emisión.",
    52,
    65,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*Los pedidos tendrán un plazo general de entrega de 6 semanas laborables.",
    52,
    60,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "No obstante, dicho plazo puede variar en función de la llegada a fábrica del tejido seleccionado, ",
    52,
    55,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "el aumento de la demanda temporal o la rotura de stock de otros componentes. ",
    52,
    50,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "En ese caso Temasdos informará debidamente de los posibles contratiempos ",
    52,
    45,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "indicando la fecha estimada en la confirmación del pedido. Se cobrarán 12€ ",
    52,
    40,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs, ",
    52,
    35,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos. ",
    52,
    30,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "*Los pedidos se realizarán a través del email pedidos@temasdos.com. Una vez enviada la confirmación del pedido, se considerará conforme si no se recibe una respuesta en el plazo de 2 días.  ",
    52,
    15,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "Transcurridos 5 días del envío de dicha confirmación, el pedido no se podrá cambiar ni cancelar. Se cobrarán 12€ de portes en envíos de mercancía con importe inferior a 300€+ IVA (poufs,   ",
    52,
    10,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page,
    "metrajes, etc.) A partir de 300€, los portes serán gratuitos.   ",
    52,
    5,
    5,
    helveticaFont,
    color838383
  );
  /*------------RECUADRO MOTOR--------------*/
  drawText(page, "SUPLEMENTO", 350, 67, 8, helveticaFont);
  page.drawRectangle({
    x: 350,
    y: 50,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });

  /*-----------PRECIO SUPLEMENTO----------*/
  if (precioMotorElement) {
    const precioMotor =
      precioMotorElement.textContent || precioMotorElement.innerText;
    drawText(page, `${precioMotor}`, 350, 54, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioMotor' no encontrado");
  }
  /*------------RECUADRO PRECIOS TOTAL--------------*/
  drawText(page, "TOTAL", 430, 67, 8, helveticaFont);
  page.drawRectangle({
    x: 430,
    y: 50,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*TEXTO PRECIO TOTAL*/
  if (precioTotalElement) {
    const precioTotal =
      precioTotalElement.textContent || precioTotalElement.innerText;
    drawText(page, `${precioTotal}`, 430, 54, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioTotal' no encontrado");
  }
  /*------------RECUADRO PRECIOS DESCUENTO APLICADO--------------*/
  drawText(page, "TOTAL C. DESC", 430, 40, 8, helveticaFont);
  page.drawRectangle({
    x: 430,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*TEXTO PRECIO TOTAL C.DESC*/
  if (precioTotalDescElement) {
    const precioTotalDesc =
      precioTotalDescElement.textContent || precioTotalDescElement.innerText;
    drawText(page, `${precioTotalDesc}`, 432, 27, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioTotalDesc' no encontrado");
  }
  /*------------RECUADRO PRECIOS CODIGO DESCUENTO-------------*/
  drawText(page, "DESC", 350, 40, 8, helveticaFont);
  page.drawRectangle({
    x: 350,
    y: 23,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });

  /*TEXTO DESCUENTO QUE APLICA*/
  if (descuentoAplicadoElement) {
    const descuentoAplicado =
      descuentoAplicadoElement.textContent ||
      descuentoAplicadoElement.innerText;
    drawText(
      page,
      `${descuentoAplicado}`,
      352,
      27,
      8,
      helveticaFont,
      colorPrice
    );
  } else {
    console.error("Elemento 'descuentoAplicado' no encontrado");
  }
  /*------------RECUADRO PRECIOS--------------*/
  page.drawRectangle({
    x: 48,
    y: 77,
    width: 450,
    height: 105,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*-------------------------PRECIOS Y CODIGOS---------------------*/
  const validSelectIds = selectIds.filter((selectId) => {
    const selectElement = document.getElementById(selectId);
    return selectElement && selectElement.value !== "None";
  });
  function procesarSelects() {
    const validSelectIds = selectIds.filter((selectId) => {
      const selectElement = document.getElementById(selectId);
      return selectElement && selectElement.value !== "None";
    });

    validSelectIds.forEach((selectId, index) => {
      const selectElement = document.getElementById(selectId);
      const selectedValue = selectElement.value;

      const piezaData = piezasSelect.find(
        (pieza) => pieza.id === selectedValue
      );
      const title = piezaData ? String(piezaData.title) : "";

      const yPos = 170 - index * 12;
      drawText(page, title, 52, yPos, 8, helveticaFont, colorPrice);
    });
  }
  /*-------PRECIOS--------- */
  const preciosMaterial = document.querySelectorAll("#preciosMaterial");
  if (preciosMaterial.length > 0) {
    preciosMaterial.forEach((precio, index) => {
      const yPos = 170 - index * 12;
      const textContent = precio.textContent.trim(); // Obtener el texto del elemento, asegurando que esté limpio

      drawText(page, textContent, 362, yPos, 8, helveticaFont, colorPrice);
    });
  } else {
    console.error(
      "No se encontraron precios de materiales en el almacenamiento local."
    );
  }
  procesarSelects();

  // Descargar el PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Presupuesto_${numeroReferencia}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/*-----SEGUNDO PDF-------*/
async function createPDF2() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  /*-----------VARIABLES DEL DOC------------------*/
  const modelo = document.getElementById("modelo").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const cifEmpresa = document.getElementById("cifEmpresa").value;
  const telefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const emailEmpresa = document.getElementById("emailEmpresa").value;
  const tela = document.getElementById("tela").value;
  const telaNumero = document.getElementById("telaSeleccion").textContent;
  const precioTotalElement = document.getElementById("precioTotal");
  const precioMotorElement = document.getElementById("precioMotor");
  const descuentoAplicadoElement = document.getElementById("descuentoAplicado");
  const precioTotalDescElement = document.getElementById("precioTotalDesc");

  const selectIds = [
    "pieza1",
    "pieza2",
    "pieza3",
    "pieza4",
    "pieza5",
    "pieza6",
    "pieza7",
    "pieza8",
  ];
  const piezasSelect = [
    ...piezasAgora,
    ...piezasAltano,
    ...piezasAlpha,
    ...piezasBarine,
    ...piezasBertina,
    ...piezasBertinaLit,
    ...piezasCoral,
    ...piezasDana,
    ...piezasGamma,
    ...piezasGiant,
    ...piezasGiantLit,
    ...piezasKappa,
    ...piezasLino,
    ...piezasMemphis,
    ...piezasMistral,
    ...piezasNadir,
    ...piezasPlateaAlta,
    ...piezasPlateaBaja,
    ...piezasSiroco,
    ...piezasSigma,
    ...piezasSisal,
    ...piezasTucson,
    ...piezasTundra,
    ...piezasYute,
    ...piezasZenith,
    ...piezasZonda,
    ...suplementos,
    ...cojines,
  ];
  // Crear nuevo documento PDF
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  // Crear el segundo PDF
  const pdfDoc2 = await PDFDocument.create();
  const page2 = pdfDoc2.addPage([550, 750]);
  // Cargar la fuente Helvetica
  const helveticaFont = await pdfDoc2.embedFont(StandardFonts.Helvetica);
  /*-------COLOR ------*/
  const color838383 = rgb(0.4, 0.4, 0.4);
  const colorLine = rgb(0.7, 0.7, 0.7);
  const colorPrice = rgb(0.3, 0.3, 0.3);

  /*TELA*/
  const base64Tela =
    "data:image/png;base64,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";

  const imageTela = await fetch(base64Tela).then((res) => res.arrayBuffer());
  const TelaBytes = await pdfDoc2.embedPng(imageTela);
  /*----AÑADIR TEXTO AL PDF-----*/

  function drawText(page2, text, x, y, size, font, color) {
    page2.drawText(text, {
      x: x,
      y: y,
      size: size,
      font: font,
      color: color,
    });
  }
  drawText(page2, "Pedido", 52, 720, 15, helveticaFont);
  /*-------------LINEA-----------*/
  page2.drawRectangle({
    x: 48,
    y: 710,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  /*-------------------INFO EMPRESA-------------------*/
  drawText(page2, "INFORMACIÓN EMPRESA", 74, 690, 10, helveticaFont);
  drawText(
    page2,
    `Nombre Empresa: ${nombreEmpresa}`,
    74,
    670,
    8,
    helveticaFont
  );
  drawText(page2, `Teléfono: ${telefonoEmpresa}`, 74, 650, 8, helveticaFont);
  drawText(page2, `CIF Empresa: ${cifEmpresa}`, 364, 670, 8, helveticaFont);
  drawText(page2, `Email Empresa: ${emailEmpresa}`, 364, 650, 8, helveticaFont);

  /*---------MODELO Y CONFIGURACION-----------*/
  drawText(page2, `Modelo: ${modelo}`, 52, 610, 15, helveticaFont);
  /*-------------LINEA-----------*/
  page2.drawRectangle({
    x: 48,
    y: 600,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  /*Fecha Emision*/
  drawText(page2, `Fecha Emisión: ${formattedDate}`, 74, 580, 8, helveticaFont);
  // Número de Referencia
  drawText(
    page2,
    `N° Referencia: ${numeroReferencia}`,
    74,
    560,
    8,
    helveticaFont
  );
  /*Leyenda de presupuesto*/
  drawText(
    page2,
    "*La fecha de emisión definirá la validez del presupuesto.",
    74,
    545,
    5,
    helveticaFont,
    color838383
  );

  drawText(
    page2,
    "*El número de referencia servirá para localizar el",
    74,
    540,
    5,
    helveticaFont,
    color838383
  );
  drawText(
    page2,
    "presupuesto ya realizado.",
    74,
    535,
    5,
    helveticaFont,
    color838383
  );
  /*----------------------TEJIDO-----------------------------------*/
  drawText(page2, "TEJIDO", 364, 580, 10, helveticaFont);
  drawText(page2, `Articulo: ${tela}`, 430, 565, 8, helveticaFont);
  drawText(page2, `Tela: ${telaNumero}`, 430, 550, 8, helveticaFont);
  /*-------------------------IMG TELA-----------------------------*/
  page2.drawImage(TelaBytes, { x: 364, y: 520, width: 50, height: 50 });
  /*-------------------------HTML2CANVAS DE CONFIGURACION------------------*/
  drawText(page2, "DIMENSIONES", 74, 500, 10, helveticaFont);
  if (typeof html2canvas === "function") {
    const imagenesDiv = document.getElementById("imagenPiezas");

    // Forzar un reflujo para asegurarse de que el DOM esté actualizado
    imagenesDiv.style.display = "none";
    imagenesDiv.offsetHeight; // Trigger reflow
    imagenesDiv.style.display = "block";
    // Espera a que todas las imágenes se hayan cargado completamente
    await waitForImagesToLoad(document.getElementById("imagenPiezas"));
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Genera el canvas a partir del contenido de #imagenPiezas
    const canvas = await html2canvas(imagenesDiv, {
      useCORS: true, // Permite el uso de imágenes desde otros dominios
      scrollY: -window.scrollY, // Ajusta el scroll para capturar la posición correcta
      scrollX: -window.scrollX,
      allowTaint: true, // Permite capturar imágenes tainted (potencialmente de otros orígenes)
    });
    const imgData = canvas.toDataURL("image/png");
    // Inserta la imagen en el PDF
    const pdfImage = await pdfDoc2.embedPng(imgData);
    page2.drawImage(pdfImage, { x: 74, y: 390, width: 170, height: 100 });

    // Guarda el documento PDF y descarga el archivo
  }

  // Espera a que todas las imágenes se hayan cargado completamente
  function waitForImagesToLoad(container) {
    const images = container.getElementsByTagName("img");
    const promises = Array.from(images).map(
      (img) =>
        new Promise((resolve, reject) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = reject;
          }
        })
    );
    return Promise.all(promises);
  }
  /*-------------------------DESGLOCE-------------------------------*/
  drawText(page2, "Desgloce", 52, 370, 15, helveticaFont);
  /*------------LINEA DESGLOCE--------------*/
  page2.drawRectangle({
    x: 48,
    y: 360,
    width: 450,
    height: 0.5,
    borderColor: colorLine,
    borderWidth: 0.2,
  });
  drawText(page2, "PIEZA", 76, 340, 8, helveticaFont);
  /* drawText(page, "CANT.", 320, 190, 8, helveticaFont); */
  drawText(page2, "VALOR U.", 362, 340, 8, helveticaFont);
  /* drawText(page, "VALOR TOT.", 441, 190, 8, helveticaFont); */

  /*------------RECUADRO PRECIOS--------------*/
  page2.drawRectangle({
    x: 48,
    y: 227,
    width: 450,
    height: 105,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*------------RECUADRO MOTOR--------------*/
  drawText(page2, "SUPLEMENTO", 76, 215, 8, helveticaFont);
  page2.drawRectangle({
    x: 76,
    y: 195,
    width: 60,
    height: 15,
    borderColor: rgb(0.7, 0.7, 0.7),
    borderWidth: 0.2,
  });
  /*-------------------------PRECIOS Y CODIGOS---------------------*/
  const validSelectIds = selectIds.filter((selectId) => {
    const selectElement = document.getElementById(selectId);
    return selectElement && selectElement.value !== "None";
  });
  function procesarSelects() {
    const validSelectIds = selectIds.filter((selectId) => {
      const selectElement = document.getElementById(selectId);
      return selectElement && selectElement.value !== "None";
    });

    validSelectIds.forEach((selectId, index) => {
      const selectElement = document.getElementById(selectId);
      const selectedValue = selectElement.value;

      const piezaData = piezasSelect.find(
        (pieza) => pieza.id === selectedValue
      );
      const title = piezaData ? String(piezaData.title) : "";

      const yPos = 320 - index * 12;
      drawText(page2, title, 52, yPos, 8, helveticaFont, colorPrice);
    });
  }
  procesarSelects();
  /*-----------PRECIO SUPLEMENTO----------*/
  if (precioMotorElement) {
    const precioMotor =
      precioMotorElement.textContent || precioMotorElement.innerText;
    drawText(page2, `${precioMotor}`, 78, 199, 8, helveticaFont, colorPrice);
  } else {
    console.error("Elemento 'precioMotor' no encontrado");
  }
  // Descargar el segundo PDF
  const pdfBytes = await pdfDoc2.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Pedido${numeroReferencia}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Función para generar ambos PDFs
async function generateBothPDFs() {
  await createPDF();
  await createPDF2();
}

// Añadir event listener al botón
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateBothPDFs);
});
