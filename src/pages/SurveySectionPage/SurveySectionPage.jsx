import React, { useEffect, useState } from "react";
import { form_es } from "../../const/forms-data";
import { Link, useParams, useNavigate } from "react-router-dom";
import { appRoutes } from "../../const/app-routes";

import "./SurveySectionPage.css";

function SurveySectionPage({ form, formData, formResults, setFormResults }) {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(`survey-section-${sectionId}`);
    return () => {
      document.body.classList.remove(`survey-section-${sectionId}`);
    };
  }, [sectionId]);

  let formChecks = {};
  if (formResults[sectionId]) {
    //if there are result for this section apply thme
    formChecks = formResults[sectionId];
  } else {
    //else the fill set it all to false
    formData.categories[sectionId].subsections.forEach((subsection, i) => {
      formChecks[i] = [false, false];
    });
  }

  const [checkedInputs, setCheckedInputs] = useState({});

  function handleChange(i1, i2) {
    const updatedCheckedInputs = { ...checkedInputs };
    const check = checkedInputs[i1][i2];
    checkedInputs[i1][i2] = !check;
    setCheckedInputs(updatedCheckedInputs);
  }

  /**
   * Slider for horizontal navigation of each subsection
   * @param {String} side
   */
  function handleSlider(side, event) {
    const slidesQty = formData.categories[sectionId].subsections.length;
    const horizontalSliderHolder = event.target
      .closest(".form__sections")
      .querySelector(".form__subsections-slider");

    const slideWidth = horizontalSliderHolder.offsetWidth;
    const horizontalSliderPosition = parseFloat(
      horizontalSliderHolder.style.left
    )
      ? parseFloat(horizontalSliderHolder.style.left)
      : 0;

    const current = horizontalSliderHolder.querySelector(".current");

    if (side === "next") {
      //if there are more slides, go to next subsection
      if (horizontalSliderPosition > -(slideWidth * (slidesQty - 1))) {
        horizontalSliderHolder.style.left =
          horizontalSliderPosition - slideWidth + "px";
        current.classList.remove("current");
        if (current.nextSibling) {
          current.nextSibling.classList.add("current");
        }
      } else {
        //else if there is a next section to to the next section else got to the final page
        if (current.getAttribute("data-index") == slidesQty - 1) {
          for (let i = 0; i < form.length; i++) {
            if (form[i] == sectionId && form[i + 1]) {
              setFormResults({
                ...formResults,
                [sectionId]: checkedInputs,
              });
              setCheckedInputs({});
              navigate(`${appRoutes.Survey}/${form[i + 1]}`);
              horizontalSliderHolder.style.left = 0;
            } else if (form[i] == sectionId && i == form.length - 1) {
              setFormResults({
                ...formResults,
                [sectionId]: checkedInputs,
              });
              setCheckedInputs({});
              navigate(`${appRoutes.Survey}/${appRoutes.SurveyFinal}`);
            }
          }
        }
      }
    } else if (side === "prev") {
      //if there are previous slides, go to the prev subsection
      if (horizontalSliderPosition < 0) {
        horizontalSliderHolder.style.left =
          horizontalSliderPosition + slideWidth + "px";
        current.classList.remove("current");
        if (current.previousSibling) {
          current.previousSibling.classList.add("current");
        }
      } else {
        //else  if there no more prev slide got to the prev section and if no more go to the
        // section choises page
        if (current.getAttribute("data-index") == 0) {
          for (let i = 0; i < form.length; i++) {
            if (form[i] == sectionId && form[i - 1]) {
              setFormResults({
                ...formResults,
                [sectionId]: checkedInputs,
              });
              setCheckedInputs({});
              navigate(`${appRoutes.Survey}/${form[i - 1]}`);
              horizontalSliderHolder.style.left = 0;
            } else if (form[i] == sectionId && i == 0) {
              setCheckedInputs({});
              setFormResults({});
              navigate(`${appRoutes.Survey}`);
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    setCheckedInputs(formChecks);
    localStorage.setItem("surveyResults", JSON.stringify(formResults));
  }, [formResults]);

  if (!Object.keys(checkedInputs).length) {
    return <div>Loading...</div>;
  } else {
    console.log(
      "done loading",
      Object.keys(checkedInputs).length,
      checkedInputs
    );
  }
  return (
    <>
      <div className="form-component">
        <form>
          <div className="form__sections">
            <div className="form__section-top">
              <h3 className="form__section-title">
                {formData.categories[sectionId].name}
              </h3>
              <p>
                Selecciona todas las opciones que más se adapten a tu realidad
                actual si ninguna se no pasa nada :) no selecciona ningun.
                Cuando estés listo presiona <span>Siguiente</span>{" "}
              </p>
            </div>
            <div className="form__section-subsections">
              <div className="form__subsections-slider">
                {formData.categories[sectionId].subsections.map(
                  (subsection, ind) => {
                    return (
                      <div
                        key={`${sectionId}section${ind}`}
                        className={`form__subsection ${
                          ind == "0" ? "current" : ""
                        }`}
                        data-index={ind}
                      >
                        <h2>{subsection.name}</h2>
                        <div className="form_subsection-questions">
                          {subsection.questions.map((question, i) => {
                            return (
                              <label
                                key={`${sectionId}section${ind}-question${i}`}
                                htmlFor={`section${sectionId}subsection${ind}-question${i}`}
                              >
                                <input
                                  type="checkbox"
                                  value={`${ind}_${i}`}
                                  id={`section${sectionId}subsection${ind}-question${i}`}
                                  checked={checkedInputs[ind][i]}
                                  onChange={() => handleChange(ind, i)}
                                />
                                <span className="checkmark"></span>
                                {question}
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="form__subsection-slider-nav">
              <div onClick={() => handleSlider("prev", event)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Anterior</span>
              </div>
              <div onClick={() => handleSlider("next", event)}>
                <span>Siguiente</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>

        <div className="progress">
          <ul>
            {form.map((section, index) => {
              return (
                <li
                  key={`progress-section${index}`}
                  className="progress-item"
                  data-index={section}
                  data-state={
                    Number(section) < Number(sectionId)
                      ? "passed"
                      : Number(section) == Number(sectionId)
                      ? "current"
                      : ""
                  }
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SurveySectionPage;
