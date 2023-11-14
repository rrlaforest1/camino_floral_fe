import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myApi from "./../../service/service";
import { appRoutes } from "../../const/app-routes";
// import axios from "axios";

function SurveyFinalPage({ form, formResults, setFormResults }) {
  console.log("formResults", formResults);
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

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    console.log("formResults handlesubmit", formResults);

    // const resultExemple = {
    //   1: {
    //     1: [true, false],
    //     2: [false, false],
    //     3: [true, false],
    //   },
    //   4: {
    //     1: [true, false],
    //     2: [false, false],
    //     3: [true, false],
    //   },
    // };

    for (const categoryIndex in formResults) {
      for (const subcategoryIndex in formResults[categoryIndex]) {
        const results = {
          categoryIndex,
          subcategoryIndex,
          answers: formResults[categoryIndex][subcategoryIndex],
        };
        // UserResponse.create(myObject);
        try {
          const response = await myApi.formResults(results);
        } catch (error) {
          console.log(error.response);
          setError(error.response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      }
    }
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
