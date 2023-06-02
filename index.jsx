import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";

const RegistrationForm = () => {
  return (
    <article>
      <nav>
        <SignUpForm />
        <SignInForm />
      </nav>
    </article>
  );
};

const SignUpForm = () => {
  return (
    <form className="signUp">
      <label htmlFor="text">First name:</label>
      <input
        type="text"
        placeholder="First Name"
        className="signUp__input signUp__input--firstName"
      />
      <label htmlFor="text">Last name:</label>
      <input
        type="text"
        placeholder="Last Name"
        className="signUp__input signUp__input--lastName"
      />
      <label htmlFor="phone">Phone number:</label>
      <select name="countrycode" id="countrycode">
        <option value="+7">+7</option>
      </select>
      <input
        type="number"
        placeholder="Telephone Number"
        maxLength="10"
        className="signUp__input signUp__input--telephoneNumber"
      />
      <label htmlFor="phone">Password:</label>
      <input
        type="text"
        placeholder="Password"
        maxLength="16"
        className="signUp__input signUp__input--password"
      />
      <input
        type="button"
        className="signUp__input signUp__input--submit"
        onClick={addUser}
        value="Submit"
      />
    </form>
  );
};

const SignInForm = () => {
  return (
    <form className="signIn">
      <label htmlFor="phone">Phone number:</label>
      <select name="countrycode" id="countrycode">
        <option value="+7">+7</option>
      </select>
      <input
        type="number"
        placeholder="Telephone Number"
        maxLength="11"
        className="signIn__input signIn__input--telephoneNumber"
      />
      <label htmlFor="phone">Password:</label>
      <input
        type="text"
        placeholder="Password"
        maxLength="16"
        className="signIn__input signIn__input--password"
      />
      <input
        type="button"
        className="signIn__input signIn__input--submit"
        onClick={checkSignInUser}
        value="Submit"
      />
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RegistrationForm />);

function checkSignInUser() {
  console.log("Checking sign in input values");
}

function addUser() {
  console.log("Adding user");
}
