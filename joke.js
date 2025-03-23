fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    random.textContent = data.joke;
}
)

const Programming = document.getElementById("Programming");
const Misc = document.getElementById("Misc");
const Pun = document.getElementById("Pun");
const Spooky = document.getElementById("Spooky");
const Christmas = document.getElementById("Christmas");

fetch(" https://v2.jokeapi.dev/joke/Programming?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if (Programming.addEventListener('click', funciton(){

    })) {
        
    }
})