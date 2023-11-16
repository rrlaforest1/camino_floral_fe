import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myApi from "./../../service/service";
import { useAuth } from "./../../context/AuthContext";
import { appRoutes } from "../../const/app-routes";
import "./UserPage.css";

import UserResults from "../../components/UserResults/UserResults";

function UserPage() {
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const navigate = useNavigate();

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
                <div
                  onClick={() => navigate(appRoutes.EditUser)}
                  className="infos-edit-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                </div>
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
