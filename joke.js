fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    // different joke types that are auto generated 
    if (data.type === "single") {
      console.log(data.joke);
      random.textContent = data.joke;
    } else if (data.type === "twopart") {
      console.log(data.setup);  
      console.log(data.delivery); 
      random.textContent = data.setup + ".." + data.delivery;
    } 
  })
  //Button Ids
  const Programming = document.getElementById("Programming");
  const Pun = document.getElementById("Pun");
  const Misc = document.getElementById("Misc");
  const Spooky = document.getElementById("Spooky");
  const Christmas = document.getElementById("Christmas");
  
  fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Programming.addEventListener('click', function(){
        if (data.type === "single") {
            console.log(data.joke);
            random.textContent = data.joke;
        } else if (data.type === "twopart") {
            console.log(data.setup);
            console.log(data.delivery);
            random.textContent = data.setup + ".." + data.delivery;
        }
    })
  })