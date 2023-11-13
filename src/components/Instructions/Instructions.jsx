import React from "react";
import "./Instructions.css";

function Instructions() {
  return (
    <>
      <h2>Importante:</h2>
      <p>
        Este cuestionario es confidencial y su único propósito es recolectar
        información personal pertinente para adaptar la formulación del
        preparado de Flores de Bach a sus necesidades personales actuales para
        mejores resultados.
      </p>

      <h2>Instrucciones</h2>

      <ol>
        <li>
          1. Marque la frases que mejor describa cómo se siente y que mas lo(a)
          afecten de cada uno los 38 grupos siguientes
        </li>
        <li>
          2. Si en algún grupo ninguna frase le identifica siga con la
          siguiente.
        </li>
        <li>
          3. Sea sincero(a) pero no demasiado severo(a) o exigente consigo
          mismo(a) al evaluarse.
        </li>
      </ol>

      <p>
        Este cuestionario le puede tomar entre 5 y 10 minutos completarse, si no
        cuenta con el tiempo ahora puede realizarlo en otro momento
      </p>

      {/* <button className="survey-page__start">¡Vamos!</button> */}
    </>
  );
}

export default Instructions;
