import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      errors["uname"] = "Username cannot be empty";
    }

    if (!password) {
      formIsValid = false;
      errors["pass"] = "Password cannot be empty";
    }

    setErrorMessages(errors);
    return formIsValid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errorMessages["uname"] && <p>{errorMessages["uname"]}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessages["pass"] && <p>{errorMessages["pass"]}</p>}
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>User is successfully logged in</p>}
    </div>
  );
}

export default LoginForm;