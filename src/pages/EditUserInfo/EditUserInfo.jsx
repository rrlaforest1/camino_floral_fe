import { useState } from "react";
// import axios from "axios"
import myApi from "./../../service/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
import { appRoutes } from "../../const/app-routes";
import "./EditUserInfo.css";

function EditUserInfo() {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

  const navigate = useNavigate();

  console.log("USER BBBBB", user);

  const handleChange = (event) => {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // const username = usernameInput.current.value;
    // const email = emailInput.current.value;
    // const password = passwordInput.current.value;

    try {
      await myApi.put(`/user/${user._id}`, formData);
      setUpdate(!update);
      navigate(appRoutes.User);
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
      <div className="edituser-page">
        <div className="edituser-page__wrapper">
          <h2>Editar Infomacion Personal</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Nombre de usuario: </label>
              <input
                type="text"
                value={formData.username}
                onChange={handleChange}
                id="username"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                autoComplete="off"
              />
            </div>
            {/* <div>
              <label htmlFor="password">Contraseña: </label>
              <input type="password" ref={passwordInput} id="username" />
            </div> */}
            <button>Actualizar</button>
            <p className="error">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUserInfo;
