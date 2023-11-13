import React, { useState, useEffect } from "react";
// import "./Form.css";

function Form({ form }) {
  console.log("form", form);
  const formChecks = {};
  form.forEach((section) => {
    formChecks[section.index] = {};
    section.subsections.forEach((subsection) => {
      formChecks[section.index][subsection.index] = [false, false];
    });
  });
  const [checkedInputs, setCheckedInputs] = useState(formChecks);

  function handleChange(i1, i2, i3) {
    console.log("handleChange", i1, i2, i3);
    const updatedCheckedInputs = { ...checkedInputs };
    console.log("updatedCheckedInputs", updatedCheckedInputs);
    const check = checkedInputs[i1][i2][i3];
    console.log("check", check);
    checkedInputs[i1][i2][i3] = !check;
    setCheckedInputs(updatedCheckedInputs);
  }

  function handleSlider(side, event, slidesQty) {
    const horizontalSliderHolder = event.target
      .closest(".form__section-slider")
      .querySelector(".form__subsections-slider");

    const slideHeight = event.target.closest(
      ".form__section-slider"
    ).offsetHeight;

    const verticalSliderHolder = event.target.closest(".form__sections_holder");
    event.target.closest(".form__sections").style.height = slideHeight + "px";

    console.log("verticalSliderHolder", verticalSliderHolder.style.top);

    const verticalSliderPosition = parseFloat(verticalSliderHolder.style.top)
      ? parseFloat(verticalSliderHolder.style.top)
      : 0;

    const slideWidth = horizontalSliderHolder.offsetWidth;
    const horizontalSliderPosition = parseFloat(
      horizontalSliderHolder.style.left
    )
      ? parseFloat(horizontalSliderHolder.style.left)
      : 0;

    console.log("verticalSliderPosition", verticalSliderPosition);

    if (side === "top") {
      verticalSliderHolder.style.top = 0;
      document
        .querySelectorAll(".form__subsections-slider")
        .forEach((item, index) => {
          item.style.left = 0;
        });
    }

    if (side === "next") {
      console.log("next");
      if (horizontalSliderPosition > -(slideWidth * (slidesQty - 1))) {
        console.log("XXX");
        horizontalSliderHolder.style.left =
          horizontalSliderPosition - slideWidth + "px";
      } else if (verticalSliderPosition > -(slideHeight * form.length)) {
        console.log("ZZZ");
        verticalSliderHolder.style.top =
          verticalSliderPosition - slideHeight + "px";
      }
    } else if (side === "prev") {
      console.log("prev");
      if (horizontalSliderPosition < 0) {
        console.log("HHH");
        horizontalSliderHolder.style.left =
          horizontalSliderPosition + slideWidth + "px";
      } else if (verticalSliderPosition < 0) {
        console.log("JJJ");
        verticalSliderHolder.style.top =
          verticalSliderPosition + slideHeight + "px";
      }
    }
  }

  function setHeight() {
    const sectionSliderHeght = document.querySelector(
      ".form__section-slider"
    ).offsetHeight;

    const verticalSliderHolder = document.querySelector(".form__sections");
    verticalSliderHolder.style.height = sectionSliderHeght + "px";
  }

  useEffect(() => {
    setHeight();
  }, [checkedInputs]);

  return (
    <>
      <div className="form-component">
        <form>
          <div className="form__sections">
            <div className="form__sections_holder">
              {form.map((section) => {
                return (
                  <div className="form__section-slider">
                    <div className="form__section-top">
                      <h3 className="form__section-title">{section.name}</h3>
                      <p>
                        Selecciona todas las opciones que más se adapten a tu
                        realidad actual si ninguna se no pasa nada :) no
                        selecciona ningun. Cuando estés listo presiona Siguiente{" "}
                      </p>
                    </div>
                    <div className="form__section-subsections">
                      <div className="form__subsections-slider">
                        {section.subsections.map((subsection, ind) => {
                          return (
                            <div
                              key={`${section.index}section${ind}`}
                              className="form__subsection"
                            >
                              <h2>{subsection.name}</h2>
                              <div className="form_subsection-questions">
                                {subsection.questions.map((question, i) => {
                                  return (
                                    <label
                                      key={`${section.index}section${ind}-question${i}`}
                                      htmlFor={`section${section.index}subsection${ind}-question${i}`}
                                    >
                                      <input
                                        type="checkbox"
                                        value={`${ind}_${i}`}
                                        id={`section${section.index}subsection${ind}-question${i}`}
                                        checked={
                                          checkedInputs[section.index][ind + 1][
                                            i
                                          ]
                                        }
                                        onChange={() =>
                                          handleChange(
                                            section.index,
                                            ind + 1,
                                            i
                                          )
                                        }
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
                      <div
                        onClick={() =>
                          handleSlider(
                            "prev",
                            event,
                            section.subsections.length
                          )
                        }
                      >
                        Anterior
                      </div>
                      <div
                        onClick={() =>
                          handleSlider(
                            "next",
                            event,
                            section.subsections.length
                          )
                        }
                      >
                        Siguiente
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="hide form_send">
                <div onClick={() => handleSlider("top", event, "0")}>
                  Back-to-the-top
                </div>
                <p>
                  Has terminado, Gracias por tu timepo si crees que todo está
                  correcto haz click en enviar si no, siempre puedes regresar.
                </p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
