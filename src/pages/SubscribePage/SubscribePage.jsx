import { useRef, useState } from "react";
// import axios from "axios"
import myApi from "./../../service/service";
import { useNavigate } from "react-router-dom";

import "./SubscribePage.css";

function SubscribePage() {
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  // const pictureInput = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    // const picture = pictureInput.current.files[0]

    // const fd = new FormData();
    // fd.append("username", username);
    // fd.append("password", password);
    // fd.append("picture", picture)

    try {
      const response = await myApi.signup({
        username,
        email,
        password,
      });
      console.log("success", response);
      navigate("/signin");
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
      <div className="subscribe-page">
        <div className="subscribe-page__wrapper">
          <h2>Suscribirse</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Nombre de usuario: </label>
              <input
                type="text"
                ref={usernameInput}
                id="username"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                ref={emailInput}
                id="email"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña: </label>
              <input type="password" ref={passwordInput} id="username" />
            </div>
            {/* <div>
        <label htmlFor="picture">Picture</label>
        <input ref={pictureInput} type="file" name="" id="picture" />
      </div> */}
            <button>Unirme</button>
            <p className="error">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubscribePage;
