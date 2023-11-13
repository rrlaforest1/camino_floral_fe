import { Link, NavLink } from "react-router-dom";
import { appRoutes } from "./../../const/app-routes";
// import SpanifiedTitle from "../SpanifiedTitle/SpanifiedTitle"
// import Avatar from "../Avatar/Avatar"
import "./Navbar.css";
// import { useAuth } from "./../../context/AuthContext"

function Navbar() {
  //   const { isLoggedIn, authenticateUser, user } = useAuth();

  //   const handleLogout = () => {
  //     localStorage.removeItem("authToken");
  //     authenticateUser();
  //   };

  // const title = user ? `Hello ${user.username}` : "conversationalist"
  //   console.log(user);
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <NavLink className="nav-logo" to={appRoutes.Home}>
              <img src="/images/flor-geometria.png" alt="Logo" />
              <span>Camino Floral</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-home" to={appRoutes.Home}>
              Home
            </NavLink>
          </li>
          {/* {isLoggedIn && user && (
            <>
              <Avatar size="m" url={user.picture} />
            </>
          )} */}
          <li>
            <NavLink className="nav-about" to={appRoutes.About}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-contact" to={appRoutes.Contact}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          {/* {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : ( */}
          <>
            <li>
              <NavLink className="nav-gotoform-btn" to={appRoutes.Survey}>
                Get my personal treatement
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-signin" to="/signin">
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-subscribe-btn" to="/subscribe">
                Subscribe
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
