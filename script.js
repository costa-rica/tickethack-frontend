console.log("chitos")
document.querySelector('#buttonsearch').addEventListener('click', 
    fetch("http://localhost:3000/trips/search/")
    .then((Response => Response.json))
    .then((trips) => console.log(trips))

  
  );