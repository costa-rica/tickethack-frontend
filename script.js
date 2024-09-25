const arrival =  document.querySelector('#arrival')
const  departure =  document.querySelector('#departure')
const buttonsearch = document.querySelector('#buttonsearch')
const calandar = document.querySelector('#calandar')
const buttonbook= document.querySelectorAll(".buttonbook")

buttonsearch.addEventListener('click', 
    function(){
        console.log(calandar.value)
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
              for( let trips of data.tripsArray) {
               
  document.querySelector("#inputtrips").innerHTML += `
            <div class="rowstrips">
            <div>${trips.arrivalDeparture}</div>
            <div>${trips.time}</div>
            <div>${trips.price}</div>
            <button id=${trips.tripId} type="button">book</button>
            </div>
  `
                document.querySelector(`#${trips.tripsId}`).addEventListener('click',
                    function(){ 
                        console.log(chitos)
                    }
                )
}
              })
            })
    

buttonbook.addEventListener('click',

    function () {
     console.log('Click detected!');
   }
  );
                    