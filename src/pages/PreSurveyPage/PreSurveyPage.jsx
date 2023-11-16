import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../const/app-routes";
import Form from "../../components/Form/Form";
import Instructions from "../../components/Instructions/Instructions";

import "./PreSurveyPage.css";

function PreSurveyPage({ form }) {
  console.log("form PreSurveyPage", form);

  useEffect(() => {
    document.body.classList.add("presurvey-page");
    return () => {
      document.body.classList.remove("presurvey-page");
    };
  }, []);

  return (
    <>
      <div className="presurvey-page">
        <div className="presurvey-page__wrapper">
          {/* {showForm ? (
            <Form form={form} />
          ) : ( */}
          <Instructions />
          {/* )} */}

          <Link to={`${appRoutes.Survey}/${form[0]}`}>Vamos!</Link>
        </div>
      </div>
    </>
  );
}

export default PreSurveyPage;
