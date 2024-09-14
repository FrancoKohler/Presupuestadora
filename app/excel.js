document.getElementById("generateBtn").addEventListener("click", function () {
  // Captura los datos de los inputs
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const cifEmpresa = document.getElementById("cifEmpresa").value;
  const telefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const emailEmpresa = document.getElementById("emailEmpresa").value;

  const nombreCliente = document.getElementById("nombreCliente").value;
  const cifCliente = document.getElementById("cifCliente").value;
  const emailCliente = document.getElementById("emailCliente").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;

  const pais = document.getElementById("pais").value;
  const ciudad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const calle = document.getElementById("calle").value;
  const puertaPiso = document.getElementById("puertaPiso").value;

  const modelo = document.getElementById("modelo").value;

  // Crear un objeto con los datos capturados
  const formData = {
    nombreEmpresa,
    cifEmpresa,
    telefonoEmpresa,
    emailEmpresa,
    nombreCliente,
    cifCliente,
    emailCliente,
    telefonoCliente,
    pais,
    ciudad,
    codigoPostal,
    calle,
    puertaPiso,
    modelo,
  };

  // Ahora pasamos al siguiente paso: generar el archivo Excel
  generarExcel(formData);
});

function generarExcel(data) {
  // Crear un libro de trabajo
  const wb = XLSX.utils.book_new();

  // Crear una hoja de trabajo con los datos
  const ws = XLSX.utils.json_to_sheet([data]);

  // Agregar la hoja de trabajo al libro de trabajo
  XLSX.utils.book_append_sheet(wb, ws, "Presupuesto");

  // Generar el archivo Excel
  XLSX.writeFile(wb, "presupuesto.xlsx");
}
