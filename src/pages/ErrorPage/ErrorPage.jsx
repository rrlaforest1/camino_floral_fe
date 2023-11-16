import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <div className="error-page">
        <div className="error-page__wrapper">
          <h3>Camino equivocado T-T</h3>
          <Link to="/">Ir a la página de Inicio</Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
