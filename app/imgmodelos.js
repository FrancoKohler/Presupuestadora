const modeloImg = {
  Agora: [{ img: "assets/MODELOS/AGORA/AgoraReferencia.jpg" }],
  Alpha: [{ img: "assets/MODELOS/ALPHA/AlphaReferencia.png" }],
  Altano: [{ img: "assets/MODELOS/BARINE/BarineReferencia.png" }],
  Barine: [{ img: "assets/TELAS/OSAKA/OSAKA-01.jpg" }],
  Bassa: [{ img: "assets/TELAS/TERRANOVA/TERRANOVA-01.jpg" }],
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
