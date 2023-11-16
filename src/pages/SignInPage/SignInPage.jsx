import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
import myApi from "../../service/service";
import "./SignInPage.css";

function SignInPage() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { authenticateUser } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    try {
      const response = await myApi.login({
        email,
        password,
      });

      localStorage.setItem("authToken", response.data.token);
      await authenticateUser();
      navigate("/");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }
  return (
    <>
      <div className="signin-page">
        <div className="signin-page__wrapper">
          <h2>Conectarse</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                type="text"
                ref={emailInput}
                id="email"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña: </label>
              <input type="password" ref={passwordInput} id="username" />
            </div>
            <button>Entrar</button>
            <p className="error">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
