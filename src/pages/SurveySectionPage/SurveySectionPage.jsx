import React, { useEffect, useState } from "react";
import { form_es } from "../../const/forms-data";
import { Link, useParams, useNavigate } from "react-router-dom";
import { appRoutes } from "../../const/app-routes";

import "./SurveySectionPage.css";

function SurveySectionPage({ form, formResults, setFormResults }) {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  const formChecks = {};
  form_es[sectionId].subsections.forEach((subsection) => {
    formChecks[subsection.index] = [false, false];
  });
  const [checkedInputs, setCheckedInputs] = useState(formChecks);
  console.log("checkedInputs", checkedInputs);

  function handleChange(i1, i2) {
    const updatedCheckedInputs = { ...checkedInputs };
    const check = checkedInputs[i1][i2];
    checkedInputs[i1][i2] = !check;
    setCheckedInputs(updatedCheckedInputs);
  }

  function handleSlider(side, event) {
    console.log("form on slider", form);

    const slidesQty = form_es[sectionId].subsections.length;
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
      console.log("next");
      if (horizontalSliderPosition > -(slideWidth * (slidesQty - 1))) {
        horizontalSliderHolder.style.left =
          horizontalSliderPosition - slideWidth + "px";
        current.classList.remove("current");
        if (current.nextSibling) {
          current.nextSibling.classList.add("current");
        }
      } else {
        console.log("XXX");
        if (current.getAttribute("data-index") == slidesQty - 1) {
          console.log("next Section!!!");
          for (let i = 0; i < form.length; i++) {
            console.log("form[i]", form[i], sectionId, form[i + 1]);
            if (form[i] == sectionId && form[i + 1]) {
              console.log("YYYY");
              setFormResults({
                ...formResults,
                [sectionId]: checkedInputs,
              });
              navigate(`${appRoutes.Survey}/${form[i + 1]}`);
              horizontalSliderHolder.style.left = 0;
            } else if (form[i] == sectionId && i == form.length - 1) {
              console.log("go to final page");
              navigate(`${appRoutes.SurveyFinal}`);
            }
          }
        }
      }
    } else if (side === "prev") {
      console.log("prev");
      if (horizontalSliderPosition < 0) {
        horizontalSliderHolder.style.left =
          horizontalSliderPosition + slideWidth + "px";
        current.classList.remove("current");
        if (current.previousSibling) {
          current.previousSibling.classList.add("current");
        }
      }
    }
  }

  useEffect(() => {}, [formResults]);

  return (
    <>
      <div>SurveySectionPage</div>

      <div className="form-component">
        <form>
          <div className="form__sections">
            <div className="form__section-top">
              <h3 className="form__section-title">{form_es[sectionId].name}</h3>
              <p>
                Selecciona todas las opciones que más se adapten a tu realidad
                actual si ninguna se no pasa nada :) no selecciona ningun.
                Cuando estés listo presiona Siguiente{" "}
              </p>
            </div>
            <div className="form__section-subsections">
              <div className="form__subsections-slider">
                {form_es[sectionId].subsections.map((subsection, ind) => {
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
                                checked={checkedInputs[ind + 1][i]}
                                onChange={() => handleChange(ind + 1, i)}
                              />
                              <span className="checkmark"></span>
                              {question}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="form__subsection-slider-nav">
              <div onClick={() => handleSlider("prev", event)}>Anterior</div>
              <div onClick={() => handleSlider("next", event)}>Siguiente</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SurveySectionPage;
