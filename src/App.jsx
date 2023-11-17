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
import AfterSurveyPage from "./pages/AfterSurveyPage/AfterSurveyPage";

import LoggedOutUser from "./navigation/LoggedOutUser";
import LoggedInUser from "./navigation/LoggedInUser";
import UserPage from "./pages/UserPage/UserPage";
import EditUserInfo from "./pages/EditUserInfo/EditUserInfo";
import AdminRoute from "./navigation/AdminRoute";
import AdminPage from "./pages/AdminPage/AdminPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import Layout from "./layouts/Layout";

import SubscribePage from "./pages/SubscribePage/SubscribePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import "./App.css";

function App() {
  const [form, setForm] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [formData, setFormData] = useState([]);
  const [formResults, setFormResults] = useState({});

  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={appRoutes.About} element={<AboutPage />} />
            <Route path={appRoutes.Contact} element={<ContactPage />} />

            <Route path={appRoutes.Survey}>
              <Route
                index
                element={
                  <SurveyPage setFormData={setFormData} setForm={setForm} />
                }
              />
              <Route
                path={appRoutes.PreSurvey}
                element={<PreSurveyPage form={form} />}
              />
              <Route
                path={`:sectionId`}
                element={
                  <SurveySectionPage
                    form={form}
                    formData={formData}
                    setFormData={setFormData}
                    formResults={formResults}
                    setFormResults={setFormResults}
                  />
                }
              />
              <Route
                path={appRoutes.SurveyFinal}
                element={
                  <SurveyFinalPage
                    form={form}
                    formData={formData}
                    formResults={formResults}
                  />
                }
              />
              <Route
                path={appRoutes.AfterSurvey}
                element={
                  <AfterSurveyPage form={form} formResults={formResults} />
                }
              />
            </Route>

            <Route element={<LoggedInUser />}>
              <Route path={appRoutes.User} element={<UserPage />} />
              <Route path={appRoutes.EditUser} element={<EditUserInfo />} />
            </Route>

            <Route element={<LoggedOutUser />}>
              <Route path={appRoutes.Subscribe} element={<SubscribePage />} />
              <Route path={appRoutes.SignIn} element={<SignInPage />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="/adminpage" element={<AdminPage />} />
            </Route>
            <Route path={appRoutes.NotFound} element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
