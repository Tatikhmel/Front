"use strict";

/////////////////////////////////////////////////
// Data

let inputSignUpFirstName = document.querySelector(".signUp__input--firstName");
let inputSignUpLastName = document.querySelector(".signUp__input--lastName");
let inputSignUpPhoneNumber = document.querySelector(
  ".signUp__input--telephoneNumber"
);
let inputSignUpPassword = document.querySelector(".signUp__input--password");

let inputSignInPhoneNumber = document.querySelector(
  ".signIn__input--telephoneNumber"
);
let inputSignInPassword = document.querySelector(".signIn__input--password");

const btnSignUp = document.querySelector(".signUp__btn");
const formSignUp = document.querySelector(".signUp");
const btnSignIn = document.querySelector(".signIn__btn");

/////////////////////////////////////////////////
// EventListeners

/////////////////////////////////////////////////
// Functions

const getJson = function (url, errorMsg = "Something went wrong") {
  return (
    fetch(url).then |
    ((response) => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    })
  );
};

const addUser = async function () {
  if (
    inputSignUpFirstName &&
    inputSignUpLastName &&
    inputSignUpPhoneNumber &&
    inputSignUpPassword &&
    inputSignUpPhoneNumber.length === 10 &&
    inputSignUpPassword.length > 6 &&
    inputSignUpPassword.length < 12
  ) {
    const response = await fetch("http://127.0.0.1:8080/registration", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: inputSignUpFirstName.value,
        lastName: inputSignUpLastName.value,
        telephoneNumber: `+7${inputSignUpPhoneNumber.value}`,
        password: inputSignUpPassword.value,
      }),
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  } else {
    console.log("wrong phone");
  }
};

const checkSignInUser = async function () {
  if (inputSignInPhoneNumber && inputSignInPassword) {
    const response = await fetch("http://127.0.0.1:8080/registration", {
      method: "POST",
      body: JSON.stringify({
        telephoneNumber: `+7${inputSignUpPhoneNumber.value}`,
        password: inputSignInPassword.value,
      }),
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};
