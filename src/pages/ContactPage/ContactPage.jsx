import React, { useEffect } from "react";
import Email from "../../components/Emails/surveyResults";
import "./ContactPage.css";

function ContactPage() {
  useEffect(() => {
    document.body.classList.add("contact-page");
    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);
  return (
    <>
      <div className="contact-page">
        <div className="contat-page__wrapper">
          <h3>Contacto</h3>
          <Email />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
