import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
import { appRoutes } from "../../const/app-routes";
import { form_es } from "../../const/forms-data";
import myApi from "./../../service/service";

import "./SurveyPage.css";

function SurveyPage({ setForm, setFormData }) {
  const { isLoggedIn, authenticateUser, user } = useAuth();
  const [checkedInputs, setCheckedInputs] = useState(
    new Array(form_es.length).fill(false)
  );

  const navigate = useNavigate();

  async function fetchForm() {
    try {
      const formFromDB = await myApi.getFormES();
      setFormData(formFromDB[0]);
      localStorage.setItem("formInLocal", JSON.stringify(formFromDB[0]));
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  function handleChange(position) {
    const updatedCheckedInputs = checkedInputs.map((inputCheck, index) =>
      index === position ? !inputCheck : inputCheck
    );
    setCheckedInputs(updatedCheckedInputs);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // let selectedSections = [3, 4];

    // setForm(selectedSections);

    navigate("/survey/pre");
  }

  useEffect(() => {
    document.body.classList.add("survey-page");
    return () => {
      document.body.classList.remove("survey-page");
    };
  }, []);

  useEffect(() => {
    fetchForm();
  }, []);

  return (
    <>
      <div className="survey-page">
        <div className="survey-page__wrapper">
          <h1>¿Estás listo para elaborar un tratamiento hecho a tu medida?</h1>

          <p>
            Para poder elaborar este formulario es necesario estar conectad@ ya
            que los resultados son personales y confidenciales. Porfavor
            conéctate y vuelve para iniciar con el formulario.
          </p>

          {/* <p>
            Esta forma de tratamiento no se usa para las dolencias físicas sino
            para tratar los estados emocionales negativos que puede sufrir una
            persona en un determinado momento y que puede agotar la vitalidad
            del individuo haciendo que el cuerpo pierda su sistema natural y se
            vuelva mas vulnerable a las enfermedades.
          </p> */}

          {/* <h2>
            Pero primero, selecciona cual de las siguiente secciones te está
            causando más problemas actualmente (puedes selecionar más de una):
          </h2> */}

          <form className="survey-page__form" onSubmit={handleSubmit}>
            {/* {form.map((section, i) => {
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
            })} */}
            {isLoggedIn ? (
              <button className="survey-btn__form">Confirmar</button>
            ) : (
              <Link to={appRoutes.SignIn} className="survey-btn__form">
                Conectarse
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
