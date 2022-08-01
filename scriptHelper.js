// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(planetChoosen, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.





    missionTarget.innerHTML += `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name:${planetChoosen.name} </li>
                <li>Diameter:${planetChoosen.diameter} </li>
                <li>Star: ${planetChoosen.star}</li>
                <li>Distance from Earth:${planetChoosen.distance} </li>
                <li>Number of Moons:${planetChoosen.moons} </li>
            </ol>
            <img src="${planetChoosen.image}">
            `



}
function launchStatus() {

}


function validateInput(testInput) {
    if (testInput[0].length == 0 || testInput[1].length == 0 || testInput[2].length == 0 || testInput[3].length == 0) {
        console.log('err')
        alert('empty')
    }
    if (isNaN(testInput[0]) == false || isNaN(testInput[1]) == false) {
        console.log('01err')
        alert("please enter a valid Name")
    }
    if (isNaN(testInput[2]) === true || isNaN(testInput[3]) == true) {
        console.log('02err')
        alert('please enter a valid Number')
    }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log('func')

    window.addEventListener('submit', function (e) {
        e.preventDefault(true)
        console.log("submit")
        const array = [];
        document.getElementById('formField')

        pilot = document.querySelector("input[name = pilotName]").value
        copilot = document.querySelector("input[name = copilotName]").value
        fuelLevel = document.querySelector("input[name = fuelLevel]").value
        cargoLevel = document.querySelector("input[name = cargoMass]").value
        array.push(pilot);
        array.push(copilot);
        array.push(parseInt(fuelLevel));
        array.push(parseInt(cargoLevel));
        validateInput(array)
        console.log(array)
        document.getElementById("pilotStatus").innerHTML=array[0]
        document.getElementById("copilotStatus").innerHTML=array[1]
        if (parseInt(array[2]) <= 9999) {
            faultyItems.style.visibility = "visible"
            document.getElementById("launchStatus").style.color = "red"
            console.log('red')
            fuelStatus.innerHTML =`Too little fuel  to launch`
            document.getElementById("launchStatus").innerHTML =`
            Shuttle not ready for launch
            `
        } else {
            document.getElementById("launchStatus").style.color = "green"
            document.getElementById("launchStatus").innerHTML =`
            Shuttle is ready for launch `
            console.log('fail')
        }
        if (parseInt(array[3]) >= 9999 ) {
            faultyItems.style.visibility = "visible"
            document.getElementById("launchStatus").style.color = "red"
            console.log('red')
            
            cargoStatus.innerHTML =`Too much cargo mass to launch`
            document.getElementById("launchStatus").innerHTML =`
            Shuttle not ready for launch
            `
        } else {
            
            console.log('fail')
        }
        // validateInput(pilot)
        // validateInput(copilot)
        // validateInput(fuelLevel)
        // validateInput(cargoLevel)
    })
    // .getElementById('pilotName').value
    // .getElementById('copilotName').value
    // .getElementById('fuelLevel').value
    // .getElementById('cargoMass').value

    // querySelector("input[name = pilotName]")
    // querySelector("input[name = copilotName]")
    // querySelector("input[name = fuelLevel]")
    // querySelector("input[name = cargoMass]")





    // console.log('func')
    // window.addEventListener("load", function () {
    //     console.log('load')
    //     document.form.getElementById("testForm");
    //     form.addEventListener("submit", function (e) {
    //        e.preventDefault()
    //         pilot = document.pilot.querySelector("input[name = pilot]")
    //         copilot = document.copilot.querySelector("input[name = copilot]")
    //         fuelLevel = document.fuelLevel.querySelector("input[name = fuelLevel]")
    //         cargoLevel = document.cargoLevel.querySelector("input[name = cargoLevel]")
    //         validateInput(pilot) || validateInput(copilot) || validateInput(fuelLevel) || validateInput(cargoLevel)
    //        console.log('submit')
    //     })
    // })

}









async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

        return response.json()

    });

    return planetsReturned
}

function pickPlanet(planets) {
    let pickedPlanet = { "name": "", "diameter": "", "star": "", "distance": "", "image": "", "moon": "" }
    let i = Math.floor(Math.random() * 6)

    pickedPlanet = planets[i]
    return pickedPlanet
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
