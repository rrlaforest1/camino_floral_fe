import React from "react";
import SurveySectionPage from "../../pages/SurveySectionPage/SurveySectionPage";
import { Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Route
      location={location}
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
  );
}

export default AnimatedRoutes;
