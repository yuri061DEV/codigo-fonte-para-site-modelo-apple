

function trocaCor(cor){
    let circulo = document.querySelector(".circulo")
    console.log(circulo)
    circulo.style.background = cor
}

function trocaImagem(imagem){
    let imgIphone =document.querySelector(".fotoiphone")
    imgIphone.src = imagem
}

$(document).on("click", "li", function() {
    window.location = $(this).find("a").attr("href");
  });
