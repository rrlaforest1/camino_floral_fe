import React from "react";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);
  return <div>AboutPage</div>;
}

export default AboutPage;
