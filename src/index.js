//GET DOM ELEMENTS
const addMeme = document.querySelector('#add-meme')
const removeMeme = document.querySelector('#remove-form')
const createMemeForm = document.querySelector('#create-meme')
const myMemes = document.querySelector('#my-memes')

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


//Event Listener to display form
addMeme.addEventListener('click', e=> {

    createMemeForm.style.display = "inline-block"
    addMeme.style.display = "none"
})

//Event Listener to remove form
removeMeme.addEventListener('click', e=> {
    createMemeForm.style.display = "none"
    addMeme.style.display = "inline-block"
})

//Event Listener to submit form
//Add meme to random generator function
createMemeForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const newMemes = {
        memeName: e.target.name.value,
        memeImage: e.target.image.value,
        likes: 0
    }

    fetch('http://localhost:3000/memes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            newMemes
        )
    })
    .then(response => response.json())
    .then(renderMyMemes)

    createMemeForm.reset()
})


//fetch data from db.json file
fetch('http://localhost:3000/memes')
.then(response => response.json())
.then(data => {
    data.forEach(renderMyMemes)

})

//display our memes
function renderMyMemes(object) {

   // create DOM Element
    const li = document.createElement('li')
    const myMemesImage = document.createElement('img')

    //edit content in DOM element
    myMemesImage.src = object.memeImage

    myMemes.className = "meme-pics"

    //append
    li.textContent = myMemesImage

    myMemes.append(myMemesImage)



function randomizer300() {
  let memesArr = memeDataVar.data.memes;
  let rando = Math.floor(Math.random() * memesArr.length);
  memeOftheDay.src = memesArr[rando].url;
  // console.log(rando);

}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
})}
