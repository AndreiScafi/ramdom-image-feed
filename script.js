// My Solution on how to insert random images into the DOM. 
const container = document.querySelector('.container');

console.log()

randomImage();

function randomImage() {
    for (let i = 0; i < 50; i++) {
        container.innerHTML += `<img src="https://source.unsplash.com/random/300x${randomNumber()}" alt="">`
    }
}

function randomNumber() {
    return Math.floor((Math.random() * 100) + 300);
}