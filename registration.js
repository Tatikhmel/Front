"use strict";

/////////////////////////////////////////////////
// Data

const addUser = async function () {
  if (
    inputSignUpFirstName &&
    inputSignUpLastName &&
    inputPhoneNumber &&
    inputSignUpPassword &&
    inputSignUpPhoneNumber.value.length === 10 &&
    inputSignUpPassword.value.length > 6 &&
    inputSignUpPassword.value.length < 12
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
    alert("Please enter valid input");
  }
};

const checkSignInUser = async function () {
  if (inputSignInPhoneNumber && inputSignInPassword) {
    const response = await fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      body: JSON.stringify({
        telephoneNumber: `+7${inputSignInPhoneNumber.value}`,
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
