console.log("- c'est parti! cartStcritps.js -")


// const arrival =  document.querySelector('#arrival')
// const departure =  document.querySelector('#departure')
// const buttonsearch = document.querySelector('#buttonsearch')
const btnPurchase = document.querySelector('#btnMyCartDivTotalSub')
const myCartDivRowStrip = document.querySelector('.myCartDivRowStrip')
getCartTrips()


function makeRowStripElement(trip, time, cost, cartTripId) {
    const rowStripElement = `                    
                        <div class="rowstrips">
                            <div>${trip}</div>
                            <div>${time}</div>
                            <div>${cost}</div>
                            <button id="${cartTripId}" class="buttoncart" type="button">x</button>
                        </div>
                        `
    
    return rowStripElement
}


function getCartTrips() {
    fetch("http://localhost:3000/trips/cart-purchase")
        .then((response) => response.json())
        .then((data) => {
            console.log('donées recus chitos')
            // console.log(data)

            for (let tripObject of data.tripsArray) {
                const newRow = makeRowStripElement(
                    tripObject.arrivalDeparture,
                    tripObject.time,
                    tripObject.price,
                    tripObject.tripCartId)
                myCartDivRowStrip.innerHTML += newRow
            }

        })
        .then(() => {
            const buttons = document.querySelectorAll(".buttoncart")
            for (const button of buttons) {
                button.addEventListener("click", function () {
                    const tripId = this.id
                    console.log(tripId);
                    
                })
            }
                
        })
}


btnPurchase.addEventListener('click',
    function () {
        console.log(`btnPurchase ---`)

        // fetch("http://localhost:3000/trips/cart", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         arrival: arrival.value,
        //         departure: departure.value,
        //         date: calandar.value,
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //        console.log('donées recus chitos')
        //        console.log(data)
        //     })

    }
);