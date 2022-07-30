// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

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
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
