//GET DOM ELEMENTS
const likeDiv = document.getElementById("like-section");
const searchInput = document.getElementById("search-input-id");
const searchH2 = document.getElementById("searchResultH2");
const imgDiv = document.getElementById("searchPic");
const choiceDiv = document.getElementById("choice-div");
const dropDown = document.getElementById("drop-down");
const addMeme = document.querySelector("#add-meme");
const removeMeme = document.querySelector("#remove-form");
const createMemeForm = document.querySelector("#create-meme");
const myMemes = document.querySelector("#my-memes");
const likeCount = document.getElementById("like-count");
const memeApiUrl = "https://api.imgflip.com/get_memes";
const memeOftheDay = document.getElementById("meme-of-the-day-img");
const generateButton = document.getElementById("generate-meme");
const searchForm = document.getElementById("comment-section");
const form = document.getElementById("comment-form");
const searchBtn = document.getElementById("comment-button");

let memeDataVar;

fetch(memeApiUrl)
  .then((res) => res.json())
  .then(renderMeme);

fetch("http://localhost:3000/memes")
  .then((response) => response.json())
  .then(renderMeme);

function renderMeme(memeDataObj) {
  if (memeDataObj.length > 0) {
    renderMineDrop(memeDataObj);
    memeDataObj.forEach(renderMyMemes);
  } else {
    memeDataVar = memeDataObj;
    randomizer300(memeDataVar);
    renderDrop(memeDataVar);
  }
}

generateButton.addEventListener("click", randomizer300);

//Event Listener to display form
addMeme.addEventListener("click", () => {
  createMemeForm.style.display = "inline-block";
  addMeme.style.display = "none";
});

//likes button
document.getElementById("like-button").addEventListener("click", likeDisplay);

function likeDisplay() {
  likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`;
}

//Event Listener to remove form
removeMeme.addEventListener("click", () => {
  createMemeForm.style.display = "none";
  addMeme.style.display = "inline-block";
});

//Event Listener to submit form
//Add meme to random generator function
createMemeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMemes = {
    name: e.target.name.value,
    url: e.target.image.value,
    likes: 0,
  };
  fetch("http://localhost:3000/memes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMemes),
  })
    .then((response) => response.json())
    .then(renderMyMemes);

  createMemeForm.reset();
});

//fetch data from db.json file
// fetch("http://localhost:3000/memes")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach(renderMyMemes);
//   });

//display our memes
function renderMyMemes(object) {
  const li = document.createElement("li");
  const myMemesImage = document.createElement("img");
  myMemesImage.src = object.url;
  myMemes.className = "meme-pics";
  li.textContent = myMemesImage;
  myMemes.append(myMemesImage);
}

function randomizer300() {
  let memesArr = memeDataVar.data.memes;
  let rando = Math.floor(Math.random() * memesArr.length);
  memeOftheDay.src = memesArr[rando].url;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let img = document.createElement("img");
  let memeArr = memeDataVar.data.memes;
  let searchString = searchInput.value.toLowerCase();
  let foundMemes = memeArr.find((element) => {
    let firstWord = element.name.split(" ")[0].toLowerCase();
    if (firstWord === searchString) {
      return element;
    }
  });
  img.className = "meme_pics";
  img.src = foundMemes.url;
  img.id = "imgID";
  img.addEventListener("click", removeImage);
  imgDiv.append(img);
  form.reset();
});

function removeImage() {
  document.getElementById("imgID").remove();
}

function renderDrop(memes) {
  let memesArr = memes.data.memes;
  memesArr.forEach(addDropOpt);
}

function renderMineDrop(meme) {
  meme.forEach(addDropOpt);
}

function addDropOpt(meme) {
  let opt = document.createElement("option");
  opt.textContent = meme.name;
  opt.value = meme.url;
  dropDown.add(opt);
}

dropDown.addEventListener("change", renderDropChoice);
function renderDropChoice(e) {
  if (!document.getElementById("drop-image")) {
    let dropImg = document.createElement("img");
    dropImg.id = "drop-image";
    dropImg.src = e.target.value;
    choiceDiv.append(dropImg);
  }
  document.getElementById("drop-image").remove();
  let dropImg = document.createElement("img");
  dropImg.id = "drop-image";
  dropImg.src = e.target.value;
  choiceDiv.append(dropImg);
}
