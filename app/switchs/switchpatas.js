const patasModelos = {
  Alpha: [
    { nombre: "Pata tacón grafito (15 cms. altura)" },
    { nombre: "Pata tacón níquel satinada (16 cms. altura)" },
  ],
  Altano: [
    { nombre: "Pata níquel negro (16 cms. altura)" },
    { nombre: "Pata metálica mate (15 cms. altura)" },
    { nombre: "Pata metálica mate (13,5 cms. altura)" },
  ],
  Bertina: [
    { nombre: "Pata metálica cromada" },
    { nombre: "Pata metálica negra" },
  ],
  "Bertina Little": [
    { nombre: "Pata metálica cromada" },
    { nombre: "Pata metálica negra" },
  ],
  Dino: [
    { nombre: "Base metálica cromada" },
    { nombre: "Base metálica negra" },
  ],
  Eros: [
    { nombre: "Base metálica cromada" },
    { nombre: "Base metálica negra" },
    { nombre: "Base metálica pulida" },
    { nombre: "Base estrella de madera" },
    { nombre: "Base redonda de madera" },
  ],
  Giant: [
    { nombre: "Pata metálica cromada" },
    { nombre: "Pata metálica negra" },
  ],
  "Giant Little": [
    { nombre: "Pata metálica cromada" },
    { nombre: "Pata metálica negra" },
  ],
  Memphis: [
    { nombre: "Pata de madera natural 13 cms." },
    { nombre: "Pata de madera nogal 13 cms." },
    { nombre: "Pata de madera wengué 13 cms." },
    { nombre: "Pata de tacón grafito 15 cms." },
    { nombre: "Pata de tacón pulido 15 cms." },
    { nombre: "Pata de escuadra cromada 13 cms." },
  ],
  Mistral: [
    { nombre: "Pata de madera natural" },
    { nombre: "Pata de madera nogal" },
    { nombre: "Pata de madera wengué" },
    { nombre: "Pata de niquel satinado" },
    { nombre: "Pata de metal cromado" },
    { nombre: "Pata de metal grafito" },
    { nombre: "Pata de niquel negro" },
  ],
  Sigma: [
    { nombre: "Pata de madera natural" },
    { nombre: "Pata de madera nogal" },
    { nombre: "Pata de madera wengué" },
    { nombre: "Pata de niquel satinado" },
    { nombre: "Pata de metal cromado" },
    { nombre: "Pata de metal grafito" },
    { nombre: "Pata de niquel negro" },
  ],
  Kappa: [
    { nombre: "Pata de madera natural" },
    { nombre: "Pata de madera nogal" },
    { nombre: "Pata de madera wengué" },
    { nombre: "Pata de niquel satinado" },
    { nombre: "Pata de metal cromado" },
    { nombre: "Pata de metal grafito" },
    { nombre: "Pata de niquel negro" },
  ],
  Omega: [
    { nombre: "Base estrella negra" },
    { nombre: "Base estrella cromada" },
    { nombre: "Base estrella pulida" },
    { nombre: "Base estrella madera" },
    { nombre: "Base redonda madera" },
  ],
  Tassos: [
    { nombre: "Base estrella negra" },
    { nombre: "Base estrella cromada" },
    { nombre: "Base estrella pulida" },
    { nombre: "Base estrella madera" },
    { nombre: "Base redonda madera" },
  ],
  Tita: [
    { nombre: "Pata estrella negra" },
    { nombre: "Pata estrella cromada" },
  ],
  Tucson: [
    { nombre: "Pata de madera natural" },
    { nombre: "Pata de madera nogal" },
    { nombre: "Pata de madera wengué" },
    { nombre: "Pata de niquel satinado" },
    { nombre: "Pata de metal cromado" },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");
  const patasInput = document.getElementById("patas");

  function actualizarPatasSegunModelo() {
    const modeloSeleccionado = modeloSelect.value;
    patasInput.innerHTML = "";
    if (patasModelos[modeloSeleccionado]) {
      patasModelos[modeloSeleccionado].forEach((pata) => {
        const optionPata = document.createElement("option");
        optionPata.textContent = pata.nombre;
        optionPata.value = pata.nombre;
        patasInput.appendChild(optionPata);
      });
    }
  }
  modeloSelect.addEventListener("change", actualizarPatasSegunModelo);
  actualizarPatasSegunModelo();
});
