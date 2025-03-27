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
      random.textContent = data.setup + " ... " + data.delivery;
    } 
  })
  
  //Button Ids
  const Programming = document.getElementById("Programming");
  const Pun = document.getElementById("Pun");
  const Misc = document.getElementById("Misc");
  const Spooky = document.getElementById("Spooky");
  const Christmas = document.getElementById("Christmas");
  
  //h1 title
  const title = document.getElementById("title");
  
  //Programming Joke JS
  fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Programming.addEventListener('click', function(){
        if (data.type === "single") {
            console.log(data.joke);
            random.textContent = data.joke;
            title.innerText = "Random Programming Joke";
        } else if (data.type === "twopart") {
            console.log(data.setup);
            console.log(data.delivery);
            random.textContent = data.setup + " ... " + data.delivery;
            title.innerText = "Random Programming Joke";
        }
    })
  })
  
  //Misc Joke
  fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Misc.addEventListener('click', function(){
        if (data.type === "single") {
            console.log(data.joke);
            random.textContent = data.joke;
            title.innerText = "Random Misc Joke";
        } else if (data.type === "twopart") {
            console.log(data.setup);
            console.log(data.delivery);
            random.textContent = data.setup + " ... " + data.delivery;
            title.innerText = "Random Misc Joke";
        }
    })
  })

  //Pun
  fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Pun.addEventListener('click', function(){
        if (data.type === "single") {
            console.log(data.joke);
            random.textContent = data.joke;
            title.innerText = "Random Pun";
        } else if (data.type === "twopart") {
            console.log(data.setup);
            console.log(data.delivery);
            random.textContent = data.setup + " ... " + data.delivery;
            title.innerText = "Random Pun";
        }
    })
  })

  //Spooky Joke
  fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Spooky.addEventListener('click', function(){
        if (data.type === "single") {
            console.log(data.joke);
            random.textContent = data.joke;
            title.innerText = "Random Spooky Joke";
        } else if (data.type === "twopart") {
            console.log(data.setup);
            console.log(data.delivery);
            random.textContent = data.setup + " ... " + data.delivery;
            title.innerText = "Random Spooky Joke";
        }
    })
  })

    //Christmas Joke
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Christmas.addEventListener('click', function(){
          if (data.type === "single") {
              console.log(data.joke);
              random.textContent = data.joke;
              title.innerText = "Random Christmas Joke";
          } else if (data.type === "twopart") {
              console.log(data.setup);
              console.log(data.delivery);
              random.textContent = data.setup + " ... " + data.delivery;
              title.innerText = "Random Christmas Joke";
          }
      })
    })