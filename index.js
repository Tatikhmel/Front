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

    fetch("http://127.0.0.1:8080/registration", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    firstName: inputSignUpFirstName.value,
    lastName: inputSignUpLastName.value,
    telephoneNumber: inputSignUpPhoneNumber.value,
    password: inputSignUpPassword.value}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
}