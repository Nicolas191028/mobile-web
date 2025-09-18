const imagens = ["../../img/img-1.jpg", "../../img/img-2.jpg", "../../img/img-3.jpg", "../../img/img-4.jpg", "../../img/img-5.jpg", "../../img/img-6.jpg", "../../img/img-7.jpg", "../../img/img-8.jpg", "../../img/img-9.jpg", "../../img/img-0.jpg"];
//                         0                      1                  2                      3                          4                  5                      6                      7                      8                          9

let index = 0; // começa na primeira imagem
const banner = document.getElementById("banner");

function trocarImagem() {
    index++; // Vai para próxima imagem

    if (index >= imagens.length) {
        index = 0; // Se passou do ultimo, volta para o primeiro
    }

    banner.src = imagens[index]
}

// chamar a função
// trocarImagem();
setInterval(trocarImagem, 3000 );