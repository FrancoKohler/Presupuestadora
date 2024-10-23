const modeloImg = {
  Agora: [{ img: "assets/MODELOS/AGORA/AgoraReferencia.jpg" }],
  Alpha: [{ img: "assets/MODELOS/ALPHA/AlphaReferencia.png" }],
  Altano: [{ img: "assets/MODELOS/ALTANO/AltanoReferencia.jpg" }],
  Ares: [{ img: "assets/BUTACAS/ARES/AresReferencia.jpg" }],
  Barine: [{ img: "assets/MODELOS/BARINE/BarineReferencia.png" }],
  Bassa: [{ img: "assets/MODELOS/BASSA/BassaReferencia.jpg" }],
  Bertina: [{ img: "assets/MODELOS/BERTINA/BertinaReferencia.png" }],
  "Bertina Little": [
    { img: "assets/MODELOS/BERTINALITTLE/BertinaLittleReferencia.jpg" },
  ],
  Bruma: [{ img: "assets/BUTACAS/BRUMA/BrumaReferencia.jpg" }],
  Coral: [{ img: "assets/MODELOS/CORAL/CoralReferencia.jpg" }],
  Coralina: [{ img: "assets/BUTACAS/CORALINA/CoralinaReferencia.jpg" }],
  Crono: [{ img: "assets/BUTACAS/CRONO/CronoReferencia.jpg" }],
  Dana: [{ img: "assets/MODELOS/DANA/DanaReferencia.jpg" }],
  Dino: [{ img: "assets/BUTACAS/DINO/DinoReferencia.jpg" }],
  Gamma: [{ img: "assets/MODELOS/GAMMA/GammaReferencia.png" }],
  Giant: [{ img: "assets/MODELOS/GIANT/GiantReferencia.jpg" }],
  "Giant Little": [{ img: "assets/MODELOS/GIANT/GiantReferencia.jpg" }],
  Eros: [{ img: "assets/BUTACAS/EROS/ErosReferencia.jpg" }],
  Kappa: [{ img: "assets/MODELOS/KAPPA/KappaReferencia.jpg" }],
  Lino: [{ img: "assets/MODELOS/LINO/LinoReferencia.jpg" }],
  Memphis: [{ img: "assets/MODELOS/MEMPHIS/MemphisReferencia.jpg" }],
  Mistral: [{ img: "assets/MODELOS/MISTRAL/MistralReferencia.jpg" }],
  Nadir: [{ img: "assets/MODELOS/NADIR/NadirReferencia.jpg" }],
  Omega: [{ img: "assets/BUTACAS/OMEGA/OmegaReferencia.jpg" }],
  "Platea Alta": [
    { img: "assets/MODELOS/PLATEAALTA/Platea_PataAlta_Referencia.jpg" },
  ],
  "Platea Baja": [
    { img: "assets/MODELOS/PLATEABAJA/Platea_PataBaja_Referencia.jpg" },
  ],
  Sigma: [{ img: "assets/MODELOS/SIGMA/SigmaReferencia.jpg" }],
  "Sirocco Eco": [{ img: "assets/MODELOS/SIROCO/SiroccoEcoReferencia.jpg" }],
  Sisal: [{ img: "assets/MODELOS/SISAL/SisalReferencia.jpg" }],
  Tassos: [{ img: "assets/BUTACAS/TASSOS/TassosReferencia.jpg" }],
  Tita: [{ img: "assets/BUTACAS/TITA/TitaReferencia.jpg" }],
  Tucson: [{ img: "assets/MODELOS/TUCSON/TucsonReferencia.jpg" }],
  Tundra: [{ img: "assets/MODELOS/TUNDRA/TundraReferencia.jpg" }],
  Yute: [{ img: "assets/MODELOS/YUTE/YuteReferencia.png" }],
  Zenith: [{ img: "assets/MODELOS/ZENITH/ZenithReferencia.jpg" }],
  Zonda: [{ img: "assets/MODELOS/ZONDA/ZondaReferencia.jpg" }],
};

document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");
  const divReferencia = document.getElementById("imgReferencia");

  function actualizarImgSegunModelo() {
    const modeloSeleccionado = modeloSelect.value;

    divReferencia.innerHTML = "";

    const newImg = document.createElement("img");

    if (modeloImg[modeloSeleccionado]) {
      newImg.src = modeloImg[modeloSeleccionado][0].img;
      newImg.alt = modeloSeleccionado;
      newImg.classList.add("referencia-img");
      divReferencia.appendChild(newImg);
    }
  }

  modeloSelect.addEventListener("change", actualizarImgSegunModelo);

  actualizarImgSegunModelo();
});
