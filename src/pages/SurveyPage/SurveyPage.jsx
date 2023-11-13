import React from "react";
import { form_es } from "../../const/forms-data";
import { useEffect, useState } from "react";
import { appRoutes } from "../../const/app-routes";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import "./SurveyPage.css";

function SurveyPage({ setForm }) {
  const [checkedInputs, setCheckedInputs] = useState(
    new Array(form_es.length).fill(false)
  );

  const navigate = useNavigate();

  const form = form_es;

  function handleChange(position) {
    const updatedCheckedInputs = checkedInputs.map((inputCheck, index) =>
      index === position ? !inputCheck : inputCheck
    );
    setCheckedInputs(updatedCheckedInputs);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let selectedSections = checkedInputs
      .map((item, index) => {
        if (item) {
          return index;
        }
      })
      .filter((element) => element !== undefined);

    console.log("selectedSections", selectedSections);

    setForm(selectedSections);

    navigate("/survey/pre");
  }

  useEffect(() => {
    document.body.classList.add("survey-page");
    return () => {
      document.body.classList.remove("survey-page");
    };
  }, []);

  return (
    <>
      <div className="survey-page">
        <div className="survey-page__wrapper">
          <h1>
            Estamos casi listos para elaborar un tratamiento hecho a tu medida
          </h1>

          <p>
            Las Flores de Bach permiten armonizar la personalidad del individuo
            a través de un método simple y natural de acción muy suave, sin
            provocar reacciones desagradables ni efectos adversos, sin crear
            interferencias con otras formas de tratamiento ni dependencia.
          </p>

          <p>
            Esta forma de tratamiento no se usa para las dolencias físicas sino
            para tratar los estados emocionales negativos que puede sufrir una
            persona en un determinado momento y que puede agotar la vitalidad
            del individuo haciendo que el cuerpo pierda su sistema natural y se
            vuelva mas vulnerable a las enfermedades.
          </p>

          <h2>
            Pero primero, selecciona cual de las siguiente secciones te está
            causando más problemas actualmente (puedes selecionar más de una):
          </h2>

          <form className="survey-page__form" onSubmit={handleSubmit}>
            {form.map((section, i) => {
              return (
                <div key={`preform-section${i}`}>
                  <label htmlFor={`section${i + 1}`}>
                    <input
                      id={`section${i + 1}`}
                      type="checkbox"
                      value={i}
                      checked={checkedInputs[i]}
                      onChange={() => handleChange(i)}
                    />
                    <span className="checkmark"></span>
                    {section.name}
                  </label>
                </div>
              );
            })}
            <button className="survey-btn__form">Confirmar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
