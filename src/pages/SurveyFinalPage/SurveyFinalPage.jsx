import React, { useState } from "react";
import axios from "axios";

function SurveyFinalPage({ form, formResults }) {
  const [extraInfo, setExtraInfo] = useState("");

  function handleChange(event) {
    setExtraInfo(event.target.value);
  }

  function handleSubmit() {
    console.log("submit");
  }

  return (
    <>
      <div className="survey-final-page">
        <div onClick={() => handleSlider("prev", event)}>Anterior</div>
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
