const arrival = document.querySelector('#arrival')
const departure = document.querySelector('#departure')
const buttonsearch = document.querySelector('#buttonsearch')
const calandar = document.querySelector('#calandar')
const buttonbook = document.querySelectorAll(".buttonbook")

buttonsearch.addEventListener('click',
    function () {
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
                console.log("data: ", data)
                for (let trips of data.tripsArray) {
                    const newRow = makeSearchRowStripElement(
                        trips.arrivalDeparture, trips.time, trips.price, trips.tripId)
                    document.querySelector("#inputtrips").innerHTML += newRow

                }
            }).then(() => {
                const buttons = document.querySelectorAll(".buttonsearch")
                for (const button of buttons) {
                    button.addEventListener("click", function () {
                        const tripId = this.id
                        console.log(tripId);
                        

                        fetch("http://localhost:3000/trips/cart", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                tripId: tripId,
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('donées recus chitos')
                            console.log("---> trip added")
                            console.log(data)
                
     
                
                        })
                        
                    })
                }
                    
            })
    })




function makeSearchRowStripElement(trip, time, price, tripId) {
    const rowStripElement = `
            <div class="rowstrips">
            <div>${trip}</div>
            <div>${time}</div>
            <div>${price}</div>
            <button id="${tripId}" class="buttonsearch" type="button">book</button>
            </div>
  `

    return rowStripElement
}


