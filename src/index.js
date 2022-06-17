const memeApiUrl = "https://api.imgflip.com/get_memes";
let memeData;
const memeOftheDay = document.getElementById("meme-of-the-day-img");

// makes the fethc request to the api
fetch(memeApiUrl)
  .then((res) => res.json())
  .then(renderMeme);

function renderMeme(memeDataObj) {
  // decalre memesArr to the array of memes returned
  let memesArr = memeDataObj.data.memes;
  let rando = Math.floor(Math.random() * memesArr.length);
  console.log(rando);
  memeOftheDay.src = memesArr[rando].url;
  console.log(memeDataObj);
}

console.log(memeApiUrl)