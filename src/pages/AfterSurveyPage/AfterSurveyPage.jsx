import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./AfterSurveyPage.css";

function AfterSurveyPage() {
  useEffect(() => {
    document.body.classList.add(`after-survey`);
    return () => {
      document.body.classList.remove(`after-survey`);
    };
  }, []);

  return (
    <>
      <div className="after-survey-page">
        <div className="after-survey-page__wrapper">
          <p>
            Gracias por llenar el formulario. Todas las respuestas serán tomadas
            en cuenta y como terapeuta elaboraré el mejor tratamiento para
            iniciar una recuperación.
          </p>
          <p>
            <Link className="back-to-home-btn" to="/">
              Volver a la página de inicio
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default AfterSurveyPage;
