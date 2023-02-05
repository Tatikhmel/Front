"use strict";

/////////////////////////////////////////////////
// Data

let inputSignUpFirstName = document.querySelector(".signUp__input--firstName");
let inputSignUpLastName = document.querySelector(".signUp__input--lastName");
let inputSignUpPhoneNumber = document.querySelector(".signUp__input--phoneNumber");
let inputSignUpPin = document.querySelector(".signUp__input--pin");

const btnSignUp = document.querySelector(".signUp__btn");
const formSignUp = document.querySelector(".signUp");

/////////////////////////////////////////////////
// EventListeners

formSignUp.addEventListener("submit", addUser);

/////////////////////////////////////////////////
// Functions

function addUser(e){
    e.preventDefault();

    fetch("http://localhost:8080/registration", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
            firstName: inputSignUpFirstName.value,
            lastName: inputSignUpLastName.value,
            telephoneNumber: inputSignUpPhoneNumber.value,
            password: inputSignUpPin.value,
        }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)
        );
}



// {

//     "firstName": "test",
//     "lastName": "test",
//     "telephoneNumber": "890",
//     "password" : "234sd"

// }