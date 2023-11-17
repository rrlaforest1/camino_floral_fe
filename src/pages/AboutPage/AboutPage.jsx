import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);
  return (
    <>
      <div className="about-page">
        <div className="about-page__wrapper">
          <img
            className="about-page__logo-image"
            src="/images/flower_black.png"
            alt=""
          />
          <h3>Acerca de mí y Bach</h3>

          <div className="about-page__me">
            <div>
              <p>
                Hola me llamo Yasmín y tengo ya más de una década de experiencia
                como terapista floral.
              </p>
              <p>
                Me encanta ayudar a la gente y he evidenciado el poder de las
                flores de Bach para mejorar las dificultades e incluso
                enfermedades que mis clientes enfrentan a causa de las
                emociones.
              </p>

              <p>
                Espero poder ayudarte. Si estás interesa@ acá puedes hacer un
                formulario que me permitirá identificar mejor cual terapia se
                adecua a tus retos actuales:
              </p>

              <Link className="about-page__to-form" to="/survey">
                Consigue tu terapia personalizada
              </Link>
            </div>

            <img src="/images/yasmin1.jpeg" alt="yasmin" />
          </div>
          <div className="about-page__bach">
            <h4>¿Qué son y para qué sirven las flores de Bach?</h4>
            <p>
              Hoy en día, ha ido en aumento la tendencia de usar terapias
              alternativas o naturales. Se trata de un conjunto de métodos y
              técnicas que son utilizadas para ayudar al individuo a tratar
              problemas físicos o emocionales, pero que no forman parte de la
              denominada medicina tradicional.
            </p>
            <p>
              Dentro de ese grupo de terapias, se encuentran las flores de Bach.
              Son esencias naturales que se usan para tratar situaciones
              emocionales como estrés, ansiedad, depresión, miedo, y
              frustración, las cuales se somatizan y se reflejan como
              enfermedades físicas.
            </p>
            <h4>Beneficios de la terapia floral</h4>
            <p>
              El Dr. Edward Bach desarrolló una teoría en la que señalaba que
              los problemas emocionales son la causa de toda dolencia física.
              Utilizó 38 flores para crear la llamada terapia floral o terapia
              alternativa, la cual ha se ha vuelto cada vez más popular, hasta
              el punto de convertirse en materia de estudio compartida.
            </p>
            <p>
              Una de las ventajas de este tipo de terapia es que las flores de
              Bach, por ser remedios completamente naturales, no tienen efectos
              secundarios ni contraindicaciones. En consecuencia son aptas para
              personas de cualquier edad, desde recién nacidos hasta ancianos, y
              también para embarazadas. Estas sustancias contienen ciertas
              cualidades energéticas de determinada flor que ayudan a equilibrar
              el cuerpo del paciente.
            </p>
            <p>
              No son sustancias adictivas por su origen natural, Sus efectos
              desaparecen cuando el paciente ha superado el problema. Al
              producir un estado anímico positivo en el individuo, éste puede
              llevar a cabo cualquier actividad cotidiana de su vida sin ningún
              inconveniente.
            </p>
            <p>
              Son perfectas como un coadyuvante en el tratamiento de
              enfermedades de origen emocional, ya que es allí donde los
              conflictos emocionales comienzan a subsistir durante mucho tiempo
              y la enfermedad física aparece. Este tipo de terapia rescata el
              equilibrio emocional y, en consecuencia, los 38 remedios naturales
              actúan para solucionar la enfermedad física. Cada remedio tiene
              propiedades para los diferentes problemas existentes.
            </p>
            <div>
              <img
                src="/images/dropper-in-garden.jpeg"
                alt="dropper in garden"
              />
            </div>
            <h4>¿Cómo tomar este remedio natural?</h4>
            <p>
              Hay muchas formas de tomar estas flores, los métodos más
              recomendados se describen a continuación: Directamente del frasco
              Este método se puede usar cuando se trate de una urgencia o que no
              haya líquido disponible en ese momento. Consiste en colocar debajo
              de la lengua 4 gotas, aproximadamente, unas 4 veces al día. Si el
              paciente no puede ingerirlas, éstas pueden ser aplicadas en la
              frente o en los labios. A los bebés se les pueden aplicar sobre
              las muñecas y a los niños, en la bebida. En un vaso de agua Se
              recomienda este método para los estados negativos temporales. Se
              colocan entre 1 a 3 gotas en un vaso de agua mineral. Después de
              que se disuelva la sustancia, se mantiene tapado el vaso y el
              líquido se bebe a sorbos durante todo el día. Este proceso se
              repite hasta que haya desaparecido el estado de ánimo negativo. En
              el agua de baño Es aconsejable este método sólo para los
              tratamientos a largo plazo, es decir, como complemento a la
              administración oral de las flores de Bach. En una bañera con agua
              tibia, se agregan 5 gotas, se sumerge el cuerpo durante varios
              minutos y al salir de la bañera, secarse con toques suaves sin
              frotar.
            </p>
            <h4>Clasificación de las flores de Bach</h4>
            <p>
              La clasificación básica creada por el Dr. Bach está conformada por
              38 tipos de flores, según sus propiedades terapéuticas. Ésta
              incluye 12 esencias llamadas curadoras, que son las primarias, 19
              últimas flores y 7 ayudantes. También hay una clasificación
              emocional que se divide en 7 grupos.
            </p>
            <p>
              Aparte, también existe un preparado de primeros auxilios para
              tomar en situaciones de emergencia. Se llama Rescue Remedy o
              también conocido como Remedio de Rescate, el cual es una
              combinación de 5 esencias florales de Bach y es el único remedio
              del sistema pre-combinado que puede ser tomado por cualquier
              persona. Es muy eficaz y útil para el tratamiento de angustias
              profundas y crisis nerviosas, ya que proporciona un rápido alivio.
              Éste ayuda a encontrar calma en situaciones de alguna agitación
              emocional, como por ejemplo una entrevista de trabajo, hacer un
              examen o hablar en público.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
