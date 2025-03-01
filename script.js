//menu hamburguer
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburguer = document.getElementById("hamburguer");

  menu.classList.toggle("active");
  hamburguer.classList.toggle("active");
}
//fim do menu hamburguer

//mudando o personagem
function mudarPersonagem(
    nome,
    imgSrc,
    descricao,
    pecado,
    simbolo,
    forca,
    statusClass,
    corFundo,
    fundoImagem
  ) {
    document.getElementById("personagem-nome").textContent = nome;
    document.getElementById("imagem").src = `assets/personagens/${imgSrc}`;
    document.getElementById("descricao").textContent = descricao;
    document.getElementById("pecado").textContent = pecado;
    document.getElementById("simbolo").src = simbolo;
    document.getElementById(
      "status-text"
    ).textContent = `Força: ${forca} / 100`;

    // Atualiza a classe, se você precisar definir estilos adicionais via classes
    document.getElementById(
      "status-bar"
    ).className = `status-bar ${statusClass}`;
    // Atualiza a largura da barra de poder proporcional à força
    document.getElementById("status-bar").style.width = `${forca}%`;

    // Atualiza o fundo da section-1 (elemento com id "background") sem cor de fundo
    document.getElementById(
      "personagens"
    ).style.background = `url("assets/fundo/${fundoImagem}") no-repeat center center / cover`;
  }
//fim

// GALERIA DE IMAGENS
const images = document.querySelectorAll(".image");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

showImage(currentIndex);

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});


// Download
function baixarImagem() {
  const link = document.createElement('a');
  link.href = 'assets/download/download.jpg'; // Caminho da sua imagem
  link.download = 'download.jpg'; // Nome do arquivo ao baixar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
