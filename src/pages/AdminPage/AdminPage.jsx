import React, { useEffect, useState } from "react";
import myApi from "./../../service/service";
import "./AdminPage.css";

function AdminPage() {
  const [formData, setFormData] = useState(null);
  const [editForm, setEditForm] = useState(false);

  async function fetchForm() {
    try {
      const formFromDB = await myApi.getFormES();
      setFormData(formFromDB[0]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(type, indCat, indSubcat, indQuest, event) {
    const key = event.target.id;

    let copyForm = { ...formData };

    switch (type) {
      case "cat":
        copyForm.categories[indCat].name = event.target.value;
        break;
      case "subcat":
        copyForm.categories[indCat].subsections[indSubcat].name =
          event.target.value;
        break;
      case "quest":
        copyForm.categories[indCat].subsections[indSubcat].questions[indQuest] =
          event.target.value;
        break;
    }

    setFormData(copyForm);
  }

  // {...person1, backpack: {...person1.backpack, color: 'Red' }}

  // {categories: [0]: {name: }}

  async function handleSubmit(event) {
    event.preventDefault();

    await myApi.put(`/admin/${formData._id}`, formData);
    setEditForm(false);
  }

  useEffect(() => {
    fetchForm();
  }, []);

  if (!formData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="admin-page">
        <div className="admin-page__wrapper">
          <h2>AdminPage</h2>

          <div
            onClick={() => {
              setEditForm(!editForm);
            }}
            className="admin-page__edit-form-btn"
          >
            Editar Formulario
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>

          <div className="admin-page__form">
            <ul>
              {formData.categories.map((cat, catInd) => {
                return (
                  <React.Fragment key={`init${catInd}`}>
                    {!editForm ? (
                      <li
                        key={`li-cat${catInd}`}
                        className={`admin-page__form-cat admin-cat${catInd}`}
                      >
                        <h3>{cat.name}</h3>
                        <ul key={`ul-cat${catInd}`}>
                          {cat.subsections.map((subcat, subcatInd) => {
                            return (
                              <li
                                key={`li-cat${catInd}subcat${subcatInd}`}
                                className={`admin-page__form-subcat admin-subcat${subcatInd}`}
                              >
                                <h4>{subcat.name}</h4>
                                <div>
                                  <h5>Preguntas</h5>
                                  <p>{subcat.questions[0]}</p>
                                  <p>{subcat.questions[1]}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <form onSubmit={handleSubmit} action="">
                        <li
                          key={`li-form-cat${catInd}`}
                          className={`admin-page__form-cat-edit admin-cat${catInd}`}
                        >
                          {/* <h3>{cat.name}</h3> */}
                          <label htmlFor={`catefory${catInd}`}>
                            Categoria {catInd}: Titulo{" "}
                          </label>
                          <input
                            onChange={() =>
                              handleChange("cat", catInd, "0", "0", event)
                            }
                            value={formData.categories[catInd].name}
                            id={`catefory${catInd}`}
                            type="text"
                          />
                          <ul key={`ul-form-cat${catInd}`}>
                            {cat.subsections.map((subcat, subcatInd) => {
                              return (
                                <li
                                  key={`li-form-cat${catInd}subcat${subcatInd}`}
                                  className={`admin-page__form-subcat-edit admin-subcat${subcatInd}`}
                                >
                                  <label htmlFor={`subcategoría${catInd}`}>
                                    Subcategoria {subcatInd}: Titulo{" "}
                                  </label>
                                  <input
                                    onChange={() =>
                                      handleChange(
                                        "subcat",
                                        catInd,
                                        subcatInd,
                                        "0",
                                        event
                                      )
                                    }
                                    value={
                                      formData.categories[catInd].subsections[
                                        subcatInd
                                      ].name
                                    }
                                    id={`subcategoría${catInd}`}
                                    type="text"
                                  />
                                  <div className="admin-page__form-questions-edit">
                                    <div>
                                      <label htmlFor="pregunta0">
                                        Pregunta 0:{" "}
                                      </label>
                                      <input
                                        onChange={() =>
                                          handleChange(
                                            "quest",
                                            catInd,
                                            subcatInd,
                                            "0",
                                            event
                                          )
                                        }
                                        value={
                                          formData.categories[catInd]
                                            .subsections[subcatInd].questions[0]
                                        }
                                        id="pregunta0"
                                        type="text"
                                      />
                                    </div>
                                    <div>
                                      <label htmlFor="pregunta1">
                                        Pregunta 1:{" "}
                                      </label>
                                      <input
                                        onChange={() =>
                                          handleChange(
                                            "quest",
                                            catInd,
                                            subcatInd,
                                            "0",
                                            event
                                          )
                                        }
                                        value={
                                          formData.categories[catInd]
                                            .subsections[subcatInd].questions[1]
                                        }
                                        id="pregunta1"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                        <button>Actualizar</button>
                      </form>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
