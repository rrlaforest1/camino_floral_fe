import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./const/app-routes";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PreSurveyPage from "./pages/PreSurveyPage/PreSurveyPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import SurveySectionPage from "./pages/SurveySectionPage/SurveySectionPage";
import SurveyFinalPage from "./pages/SurveyFinalPage/SurveyFinalPage";
// import LoggedOutUser from "./navigation/LoggedOutUser";
// import LoggedInUser from "./navigation/LoggedInUser";
// import AdminRoute from "./navigation/AdminRoute";

import Layout from "./layouts/Layout";
// import ConversationLayout from "./layouts/ConversationLayout"

import SubscribePage from "./pages/SubscribePage/SubscribePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import "./App.css";

function App() {
  const [form, setForm] = useState([]);
  const [formResults, setFormResults] = useState({});
  console.log("from App formResults", formResults);

  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={appRoutes.About} element={<AboutPage />} />
            <Route path={appRoutes.Contact} element={<ContactPage />} />

            <Route path={appRoutes.Survey}>
              <Route index element={<SurveyPage setForm={setForm} />} />
              <Route
                path={appRoutes.PreSurvey}
                element={<PreSurveyPage form={form} />}
              />
              <Route
                path={`:sectionId`}
                element={
                  <SurveySectionPage
                    form={form}
                    formResults={formResults}
                    setFormResults={setFormResults}
                  />
                }
              />
              <Route
                path={appRoutes.SurveyFinal}
                element={
                  <SurveyFinalPage form={form} formResults={formResults} />
                }
              />
            </Route>
            {/* The conversations routes should be accessible only if a user */}
            {/* is Logged in */}
            {/* <Route element={<LoggedInUser />}>
              <Route path="/conversations" element={<ConversationLayout />}>
                <Route path=":id" element={<OneConversationPage />} />
              </Route>
            </Route> */}
            {/* Login / Signup routes should be accessible to Logged out users */}

            {/* <Route element={<LoggedOutUser />}> */}
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/signin" element={<SignInPage />} />
            {/* </Route> */}
            {/* <Route element={<AdminRoute />}>
              <Route path="/secret" element={<h1>Shhhhhh.....</h1>} />
            </Route> */}
            <Route path={appRoutes.NotFound} element={<h2>Error page</h2>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
