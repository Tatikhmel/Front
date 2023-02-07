"use strict";

/////////////////////////////////////////////////
// Data

let inputSignUpFirstName = document.querySelector(".signUp__input--firstName");
let inputSignUpLastName = document.querySelector(".signUp__input--lastName");
let inputSignUpPhoneNumber = document.querySelector(
  ".signUp__input--telephoneNumber");
let inputSignUpPassword = document.querySelector(".signUp__input--password");

const btnSignUp = document.querySelector(".signUp__btn");
const formSignUp = document.querySelector(".signUp");

/////////////////////////////////////////////////
// EventListeners

/////////////////////////////////////////////////
// Functions

function addUser(){

  let jsonObject = {
      "firstName": "",
      "lastName": "",
      "telephoneNumber": "",
      "password": "",
    };
    jsonObject.firstName = inputSignUpFirstName.value;
    jsonObject.lastName = inputSignUpLastName.value;
    jsonObject.telephoneNumber = inputSignUpPhoneNumber.value;
    jsonObject.password = inputSignUpPassword.value;

    console.log(JSON.stringify(jsonObject));

    fetch("http://127.0.0.1:8080/registration", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(jsonObject),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
}



// {

//     "firstName": "test",
//     "lastName": "test",
//     "telephoneNumber": "890",
//     "password" : "234sd"

// }