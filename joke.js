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
  