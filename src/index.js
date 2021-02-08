console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const dogs = document.getElementById('dog-image-container')
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breeds = document.getElementById('dog-breeds')

function getDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json['message'].forEach(element => addDogs(element)))
} 

function addDogs(img) {
    let dogPic = document.createElement('img')
    dogPic.src = img
    dogs.append(dogPic)
}

function getBreeds() {
    fetch(breedUrl)
    .then(r => r.json())
    .then(addBreeds)
}

function addBreeds(obj) {
    for (let key in obj['message']) {
        const li = document.createElement('li')
        li.innerText = `${key} ${obj['message'][key]}`
        li.addEventListener('click', changeColor)
        breeds.append(li)
    }
    }


function changeColor() {
 this.style.color = 'blue'   
}

document.onload=getDogs(), getBreeds()
