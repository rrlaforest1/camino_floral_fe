import React, { useEffect, useState } from "react";
import myApi from "./../../service/service";
import { useAuth } from "./../../context/AuthContext";
import "./UserPage.css";

import UserResults from "../../components/UserResults/UserResults";

function UserPage() {
  const [surveyAnswers, setSurveyAnswers] = useState([]);

  const { user } = useAuth();

  async function fetchSurveyAnswers() {
    try {
      const response = await myApi.getSurveyAnswers();
      console.log("SURVEY ANSWERS", response);
      setSurveyAnswers(response);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  useEffect(() => {
    fetchSurveyAnswers();
  }, []);

  // if (!surveyAnswers.length) {
  //   return <p>Loading...</p>;
  // }
  console.log("========================");
  console.log(surveyAnswers);
  return (
    <>
      <div className="user-page">
        <div className="user-page__wrapper">
          <div className="user-page__Title">Espacio Personal</div>

          <div className="user-page__infos">
            <div className="user-page__general-infos">
              <h2>Datos Personales</h2>
              <div className="user-page__infos-wrapper">
                <h4>Nombre:</h4>
                <p>{user.username}</p>
                <h4>E-mail:</h4>
                <p>{user.email}</p>
                <h4>Miembro desde:</h4>
                <p>
                  {new Intl.DateTimeFormat(undefined, {
                    dateStyle: "long",
                  }).format(new Date(user.createdAt))}
                </p>
              </div>
            </div>
            <div className="user-page__infos-surveys">
              <h2>Mis Fomularios</h2>
              {surveyAnswers.length > 0 && (
                <UserResults
                  surveyAnswers={surveyAnswers}
                  setSurveyAnswers={setSurveyAnswers}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
