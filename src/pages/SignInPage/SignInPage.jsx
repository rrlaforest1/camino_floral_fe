import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
import myApi from "../../service/service";
// import { AuthContext } from "./../../context/AuthContext.jsx";

/**
 * To have access to the values store in a context we neee:
 * - the Context (AuthContext here)
 * - useContext to well.. Use the context.?
 */

function SignInPage() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { authenticateUser } = useAuth();

  // const something = useContext(AuthContext)

  // console.log(context)
  async function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    try {
      // const response = await axios.post("http://localhost:5005/auth/login", {
      //   username,
      //   password,
      // });
      const response = await myApi.login({
        username,
        password,
      });
      console.log("success", response);
      console.log("success", response.data);
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
      <div>SignInPage</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            ref={usernameInput}
            id="username"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" ref={passwordInput} id="username" />
        </div>
        <button>Login</button>
        <p className="error">{error}</p>
      </form>
    </>
  );
}

export default SignInPage;
