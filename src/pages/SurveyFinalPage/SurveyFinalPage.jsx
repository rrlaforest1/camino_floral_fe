import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myApi from "./../../service/service";
import { appRoutes } from "../../const/app-routes";
import { useAuth } from "./../../context/AuthContext";
import emailjs from "@emailjs/browser";

import "./SurveyFinalPage.css";

function SurveyFinalPage({ form, formData, formResults, setFormResults }) {
  const { isLoggedIn, authenticateUser, user } = useAuth();
  const [extraInfo, setExtraInfo] = useState("");
  const { username, email } = user;

  useEffect(() => {
    document.body.classList.add(`survey-final`);
    return () => {
      document.body.classList.remove(`survey-final`);
    };
  }, []);

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(`${appRoutes.Survey}/${form[form.length - 1]}`);
  }

  function handleChange(event) {
    setExtraInfo(event.target.value);
  }

  function sendEmail(data) {
    emailjs
      .send("service_caorvdv", "template_eeogsks", data, "MBVoUNAsoGmdV0Dpt")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Results email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function resultsToHTML() {
    let emailText = document.createElement("div");
    Object.keys(formResults).forEach((key) => {
      const sec = document.createElement("div");
      sec.innerHTML = `<h2>${formData.categories[key].name}</h2>`;

      Object.keys(formResults[key]).forEach((k) => {
        const subSec = document.createElement("div");
        subSec.innerHTML = `<h3>${
          formData.categories[key].subsections[k].name
        } : ${formData.categories[key].subsections[k].flower}</h3>
        <p>${
          formData.categories[key].subsections[k].questions[0]
        } : <strong style="color:${
          formResults[key][k][0] ? "green" : "red"
        };">${formResults[key][k][0]}</strong></p>
        <p>${
          formData.categories[key].subsections[k].questions[1]
        } : <strong style="color:${
          formResults[key][k][1] ? "green" : "red"
        };">${formResults[key][k][1]}</strong></p>`;

        sec.append(subSec);
      });
      emailText.append(sec);
    });

    emailText = emailText.innerHTML + "";

    const emailHTML = {
      user_name: username,
      user_email: email,
      html_results: emailText,
      extra_info: extraInfo,
    };
    return emailHTML;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await myApi.put("/user");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }

    try {
      const response = await myApi.extraInfo({ info: extraInfo });
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }

    for (const categoryIndex in formResults) {
      for (const subcategoryIndex in formResults[categoryIndex]) {
        const results = {
          categoryIndex,
          subcategoryIndex,
          answers: formResults[categoryIndex][subcategoryIndex],
          finished: true,
        };
        try {
          const response = await myApi.formResults(results);
          navigate(`${appRoutes.Survey}/${appRoutes.AfterSurvey}`);
        } catch (error) {
          console.log(error.response);
          setError(error.response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      }
    }

    const emailContent = resultsToHTML();
    sendEmail(emailContent);
  }

  return (
    <>
      <div className="survey-final-page">
        <div className="survey-final-page__wrapper">
          <div className="back-to-survey-btn" onClick={handleGoBack}>
            Regresar al Formulario
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="extrainfo">
              Esta es tu oportunidad! No ¿Hay algo más que nos quieres comentar
              sobre tu estado emocional o las cosas que te afectan?
            </label>
            <textarea
              placeholder="Estoy muy estresado ultimamente, no puedo dormir y tengo mucho trabajo..."
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
      </div>
    </>
  );
}

export default SurveyFinalPage;
