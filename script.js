const arrival =  document.querySelector('#arrival')
const  departure =  document.querySelector('#departure')
const buttonsearch = document.querySelector('#buttonsearch')
const calandar = document.querySelector('#calandar')


buttonsearch.addEventListener('click', 
    function(){
        console.log(`calandar: ${calandar.value}`)

        fetch("http://localhost:3000/trips/search/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                arrival: arrival.value,
                departure: departure.value,
                date: calandar.value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
               console.log('donées recus chitos')
               console.log(data)
            })
        // document.querySelector('#departure')
        // console.log(departure.value)
        // console.log(arrival.value)
        // console.log(calandar.value)
        // console.log(buttonsearch.value)

//     fetch("http://localhost:3000/trips/search/")
//     .then((Response) => Response.json())
//     .then((data) => console.log(data))
// console.log('click')
    }
  );
// buttonsearch.addEventListener("click", function () {
//     console.log("test"); // logs the className of my_element
  
//   });