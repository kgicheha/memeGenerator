const memeApiUrl = "https://api.imgflip.com/get_memes";
const memeOftheDay = document.getElementById("meme-of-the-day-img");
const generateButton = document.getElementById("generate-meme");
const searchForm = document.getElementById("comment-section");

let memeDataVar;

fetch(memeApiUrl)
  .then((res) => res.json())
  .then(renderMeme);

function renderMeme(memeDataObj) {
  memeDataVar = memeDataObj;
  randomizer300(memeDataVar);
}

generateButton.addEventListener("click", randomizer300);

function randomizer300() {
  let memesArr = memeDataVar.data.memes;
  let rando = Math.floor(Math.random() * memesArr.length);
  memeOftheDay.src = memesArr[rando].url;
  // console.log(rando);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
