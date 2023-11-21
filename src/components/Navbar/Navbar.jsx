import { Link, NavLink } from "react-router-dom";
import { appRoutes } from "./../../const/app-routes";

// import SpanifiedTitle from "../SpanifiedTitle/SpanifiedTitle"
// import Avatar from "../Avatar/Avatar"
import "./Navbar.css";
import { useAuth } from "./../../context/AuthContext";

function Navbar() {
  const { isLoggedIn, authenticateUser, user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  const userName = user ? user.username : "";

  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <NavLink className="nav-logo" to={appRoutes.Home}>
              <img src="/images/flower_white.png" alt="Logo" />
              <span>Camino Floral</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-home" to={appRoutes.Home}>
              Inicio
            </NavLink>
          </li>
          {/* {isLoggedIn && user && (
            <>
              <Avatar size="m" url={user.picture} />
            </>
          )} */}
          <li>
            <NavLink className="nav-about" to={appRoutes.About}>
              Acerca
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-contact" to={appRoutes.Contact}>
              Contacto
            </NavLink>
          </li>
          {isLoggedIn && user && user.role == "admin" && (
            <li>
              <NavLink className="nav-contact" to="/adminpage">
                Editar Formulario
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div>
        <ul>
          <>
            <li>
              <NavLink className="nav-gotoform-btn" to={appRoutes.Survey}>
                Obtener un tratamiento personalizado
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <NavLink className="nav-username" to="/user">
                    <span>¡Hola {userName}!</span>
                    <span className="my-profile-btn">
                      Mi espacio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <div className="nav-logout-btn" onClick={handleLogout}>
                    Desconectar
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="nav-signin" to="/signin">
                    Conectarse
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-subscribe-btn" to="/subscribe">
                    Subscribirse
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink className="nav-cart-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
