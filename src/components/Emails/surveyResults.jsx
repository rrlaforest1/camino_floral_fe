import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [sentMessage, setSentMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caorvdv",
        "template_ybkphqc",
        form.current,
        "MBVoUNAsoGmdV0Dpt"
      )
      .then(
        (result) => {
          console.log(result.text, "message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleSentMessage();
    form.current.reset();
  };

  function handleSentMessage() {
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
    }, 1000 * 3);
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre y apellido</label>
        <input autoComplete="off" type="text" name="user_name" />
        <label>E-mail</label>
        <input autoComplete="off" type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <button>Enviar</button>
        {sentMessage && (
          <div className="contact-page__sent-message">
            ¡Gracias! Tu mensaje a sido enviado.
          </div>
        )}
      </form>
    </>
  );
};

export default Email;
