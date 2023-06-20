import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationChange = (event) => {
    setRegistration(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Container">
      <div
        style={{ backgroundColor: "#044569", padding: "20px", width: "300px" }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label className="Button">Matrícula:</label>
              <input
                type="text"
                value={registration}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div>
              <label className="Button">Senha:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="SubmitButton">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
