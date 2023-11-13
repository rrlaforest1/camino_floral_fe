import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { appRoutes } from "../../const/app-routes";
import axios from "axios";

function SurveyFinalPage({ form, formResults }) {
  const [extraInfo, setExtraInfo] = useState("");

  useEffect(() => {
    document.body.classList.add(`survey-final`);
    return () => {
      document.body.classList.remove(`survey-final`);
    };
  }, []);

  const navigate = useNavigate();

  function handleGoBack() {
    console.log("handleGoBack");
    navigate(`${appRoutes.Survey}/${form[form.length - 1]}`);
  }

  function handleChange(event) {
    setExtraInfo(event.target.value);
  }

  function handleSubmit() {
    console.log("submit");
  }

  return (
    <>
      <div className="survey-final-page">
        <div onClick={handleGoBack}>Anterior</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="extrainfo">
            ¿Hay algo más que nos quieres comentar sobre tu estado emocional o
            las cosas que te afectan?
          </label>
          <textarea
            name=""
            id="extrainfo"
            cols="30"
            rows="10"
            value={extraInfo}
            onChange={handleChange}
          ></textarea>

          <button className="sendform">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default SurveyFinalPage;
