import React from "react";
import { useEffect } from "react";
import Email from "../../components/Emails/surveyResults";

function HomePage() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <>
      <div>HomePage</div>
    </>
  );
}

export default HomePage;
