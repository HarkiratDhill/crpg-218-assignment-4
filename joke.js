  fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    // different joke types that are auto generated 
    if (data.type === "single") {
      console.log(data.joke);
      joke.textContent = data.joke;
    } else if (data.type === "twopart") {
      console.log(data.setup);  
      console.log(data.delivery); 
      joke.textContent = data.setup + " ... " + data.delivery;
    } 
  })
  
    function fetchJoke(category = "Any") {
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.type === "single") {
        joke.textContent = data.joke;
      } else if (data.type === "twopart") {
        console.log(data.setup);
        console.log(data.delivery);
        joke.textContent = `${data.setup} ... ${data.delivery}`;
      }

      if (category === "Pun") {
          title.textContent = "Random Pun";
      }
      else {
        title.textContent = `Random ${category} Joke`;
      }
    })
  }