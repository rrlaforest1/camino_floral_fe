import React from "react";
import { useEffect } from "react";

function ContactPage() {
  useEffect(() => {
    document.body.classList.add("contact-page");
    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);
  return (
    <>
      <div>ContactPage</div>
      <Email />
    </>
  );
}

export default ContactPage;
