import React from "react";
import "./Modal.css";

function Modal({ handleDelete, setOpenModal }) {
  return (
    <>
      <div className="modal-box__wrapper">
        <div className="modal-box">
          <button
            onClick={() => setOpenModal(false)}
            className="modal-box__close"
          >
            X
          </button>
          <h2>¡Atención!</h2>
          <p>¿Estás segur@ que quieres borrar tu formulario?</p>
          <p>No podrás recuperar la información tras haberlo eliminado.</p>
          <div className="modal-box__buttons">
            <button
              onClick={() => setOpenModal(false)}
              className="modal-box__cancel"
            >
              Cancelar
            </button>{" "}
            <button onClick={handleDelete} className="modal-box__continue">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
