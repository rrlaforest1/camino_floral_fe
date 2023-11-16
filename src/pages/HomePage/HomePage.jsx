import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

function HomePage() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-page__wrapper">
          <div className="home-page__sec hp-section-1">
            <div className="home-page__section-wrapper">
              <p>
                Este es <span>nuestro propio formulario</span> elaborado tras
                años de experiencia para poder identificar precisamente las
                dificultades emocionales que te limitan. Prubeba y consigue un{" "}
                <span>tratamiento personalisado</span> para tus necesidades.
              </p>

              <Link className="home-page__to-form" to="/survey">
                Consigue tu terapia personalizada
              </Link>
            </div>
          </div>
          <div className="home-page__sec hp-section-2">
            <div className="home-page__section-wrapper">
              <div>
                <h3>¿Qué es la terapia de Flores de Bach</h3>
                <p>
                  Las enfermedades tienen que ver con lo que no podemos procesar
                  en nuestra vida Si lo procesamos el cuerpo no necesariamente
                  va ha tener que sufrir, pero si no, el cuerpo va a ser la
                  pantalla final donde se depositan las emiciones que no hemos
                  podido gestionar Y no se depositan algún lugar por azar.
                </p>

                <p>
                  La enfermedad es la consolidacion de una actutud mental y se
                  hace ese síntoma en el cuerpo.{" "}
                </p>

                <p>
                  BACH decía que los sintomas son correcciones, no son un mal a
                  erradicar, sino que vienes a comprender, son correctores que
                  nos ayudan a entender que es lo que estamos haciendo
                  inadecuadamente en la vida Y no se trata de no equivocarnos
                  porque Bach planteaba que lo s errores forman parte del
                  proceso de evolución, se trata de que una vez que uno perciba
                  ese camino equivocado poder corregir ese error y volver a la
                  senda correcta, que es la senda de escuchar lo que el alma nos
                  plantea como lección para aprender, vocación para realizar y
                  camino para recorrer La personalidad es una estructura que se
                  nos da para ayudarnos a realizar ese plan.
                </p>
              </div>
            </div>
          </div>
          <div className="home-page__sec hp-section-3">
            <div className="home-page__section-wrapper">
              <div>
                <h3>Productos</h3>
                <ul className="home-page__market">
                  <li>
                    <div>
                      <img src="/images/1.png" alt="dropper" />
                    </div>
                    <h4>Rescate (Rescue)</h4>{" "}
                    <div className="home-page__market-actions">
                      <p className="home-page__market-price">14 €</p>
                      <div className="home-page__market-basket">
                        Agregar a la cesta
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </div>{" "}
                    <p className="home-page__market-desc">
                      Para situaciones de corta duración emocionalmente fuertes.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src="/images/2.png" alt="dropper" />
                    </div>
                    <h4>Anti-estrés</h4>{" "}
                    <div className="home-page__market-actions">
                      <p className="home-page__market-price">12 €</p>
                      <div className="home-page__market-basket">
                        Agregar a la cesta
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </div>{" "}
                    <p className="home-page__market-desc">
                      Para las fuentes de estrés más comunes.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src="/images/3.png" alt="dropper" />
                    </div>
                    <h4>Insomnio</h4>{" "}
                    <div className="home-page__market-actions">
                      <p className="home-page__market-price">12 €</p>
                      <div className="home-page__market-basket">
                        Agregar a la cesta
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </div>{" "}
                    <p className="home-page__market-desc">
                      Para evitar los pensamientos repetitivos en la noche.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src="/images/4.png" alt="dropper" />
                    </div>
                    <h4>Depresión</h4>{" "}
                    <div className="home-page__market-actions">
                      <p className="home-page__market-price">12 €</p>
                      <div className="home-page__market-basket">
                        Agregar a la cesta
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </div>{" "}
                    <p className="home-page__market-desc">
                      Para apoyar alternativamente un tratamiento médico y/o
                      psicológico.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-page__sec hp-section-4">
            <div className="home-page__section-wrapper">
              <div>
                <img src="/images/yasmin2.jpeg" alt="" />
                <div className="home-page__intro-text">
                  <p className="home-page__intro-quote">
                    “He presenciado como mis clientes mejoran y se sientes más
                    alividados mejor capacitados para manejar sus emociones y
                    enfrentar el mundo”
                  </p>
                  <p className="home-page__intro-signature">
                    Yasmin Clavel - Terapeuta Floral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
