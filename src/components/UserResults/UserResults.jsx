import React, { useEffect, useState } from "react";
import myApi from "./../../service/service";
import Modal from "../Modal/Modal";

function UserResults({ surveyAnswers, setSurveyAnswers }) {
  const [ediForm, setEditForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  async function handleClick(id, catInd, subcatInd, qInd) {
    const newAnswers = [...surveyAnswers];
    const updatedQ = newAnswers.find((element) => {
      return element.response[0].catIndex === catInd;
    });
    const currentAnswer = updatedQ.response[subcatInd].answers[qInd];
    updatedQ.response[subcatInd].answers[qInd] = !currentAnswer;
    const updatedUserResponse = updatedQ.response[subcatInd];

    try {
      await myApi.put(`/user/answers/${id}`, updatedUserResponse);
      setSurveyAnswers(newAnswers);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function handleDelete() {
    try {
      await myApi.delete(`/user`);
      setSurveyAnswers([]);
    } catch (error) {
      console.log(error.response);
    }
  }

  if (!surveyAnswers.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div data-edit={ediForm} className="user-page__last-survey">
        <h3>
          Último formulario:{" "}
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "long",
          }).format(new Date(surveyAnswers[0].response[0].createdAt))}
        </h3>
        <div className="last-survey__actions">
          <div
            onClick={() => setEditForm(!ediForm)}
            className="last-survey__edit"
          >
            Editar
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
          <div
            onClick={() => setOpenModal(!openModal)}
            className="last-survey__delete"
          >
            Suprimir
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {openModal && (
            <Modal setOpenModal={setOpenModal} handleDelete={handleDelete} />
          )}
        </div>

        <div>
          {surveyAnswers.map((answer, index) => {
            return (
              <div
                key={index}
                className={`last-survey__category cat${answer.response[0].catIndex}`}
              >
                <h4>{answer.category}</h4>
                <div>
                  {answer.subCategory.map((subcat, subInd) => {
                    return (
                      <React.Fragment key={subcat._id}>
                        <h5>{subcat.name}</h5>
                        <p>
                          <span
                            onClick={() =>
                              handleClick(
                                answer.response[subInd]._id,
                                answer.response[subInd].catIndex,
                                answer.response[subInd].subcatIndex,
                                0
                              )
                            }
                            className="answer-edit answer-actions"
                          >
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </span>
                          {/* <span
                                      data-id={answer.response[subInd]._id}
                                      className="answer-delete answer-actions"
                                    >
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
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </span> */}
                          <span
                            className={`user-page__answer ${answer.response[subInd].answers[0]}`}
                          >
                            {answer.response[subInd].answers[0] ? "Si" : "No"}
                          </span>
                          {subcat.questions[0]}
                        </p>
                        <p>
                          <span
                            onClick={() =>
                              handleClick(
                                answer.response[subInd]._id,
                                answer.response[subInd].catIndex,
                                answer.response[subInd].subcatIndex,
                                1
                              )
                            }
                            data-id={answer.response[subInd]._id}
                            className="answer-edit answer-actions"
                          >
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </span>
                          {/* <span
                                      data-id={answer.response[subInd]._id}
                                      className="answer-delete answer-actions"
                                    >
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
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </span> */}
                          <span
                            className={`user-page__answer ${answer.response[subInd].answers[1]}`}
                          >
                            {answer.response[subInd].answers[1] ? "Si" : "No"}
                          </span>
                          {subcat.questions[1]}
                        </p>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserResults;
