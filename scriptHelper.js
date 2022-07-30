// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

   
    // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {


    //     response.json().then(json => {
    //         console.log(json);
            

            missionTarget.innerHTML += `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name:${name} </li>
                <li>Diameter:${diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth:${distance} </li>
                <li>Number of Moons:${moons} </li>
            </ol>
            <img src="${imageUrl}">
            `


 
        }
//         )
//   })
// }

function validateInput(testInput) {
    if (testInput = null) {
        alert("Input is empty")
    } else if (isNaN(testInput) = true) {
        alert("Input is not a Number")
    } else if (isNaN(testInput) = false) {
        alert("Input is a Number")
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener("load", function () {
        let form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            pilot = pilot.document.querySelector("input[name = pilot]")
            copilot = copilot.document.querySelector("input[name = copilot]")
            fuelLevel = fuelLevel.document.querySelector("input[name = fuelLevel]")
            cargoLevel = cargoLevel.document.querySelector("input[name = cargoLevel]")
            validateInput(pilot) || validateInput(copilot) || validateInput(fuelLevel) || validateInput(cargoLevel)
        })
    })
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        
        return response.json()
      
    });

    return planetsReturned
}

function pickPlanet(planets) {
  
  
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
