const memeImage = document.querySelector(".meme-image img");
const Title = document.querySelector(".title");
const GeneratorBtn = document.querySelector(".btn");

window.onload = () => {
  geteratormemes();
};

GeneratorBtn.onclick = () => {
  geteratormemes();
};

const memesImage = (url, Autor, title) => {
  memeImage.setAttribute("src", url);
  Title.innerHTML = title;
};

const geteratormemes = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      memesImage(data.url, data.autor, data.title);
    });
};
