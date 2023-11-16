import axios from "axios";

const myApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

myApi.getUserInfos = function () {
  return myApi
    .get("/auth/verify")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

myApi.getFormES = function () {
  return myApi
    .get("/survey")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

myApi.signup = function (userInfos) {
  return myApi
    .post("/auth/signup", userInfos)
    .then((response) => response)
    .catch((error) => error);
};

myApi.login = function (userInfos) {
  return myApi
    .post("/auth/login", userInfos)
    .then((response) => response)
    .catch((error) => error);
};

myApi.formResults = function (formAnswers) {
  return myApi
    .post("/answers", formAnswers)
    .then((response) => response)
    .catch((error) => error);
};

myApi.extraInfo = function (info) {
  return myApi
    .post("/answers/extrainfo", info)
    .then((response) => response)
    .catch((error) => error);
};

myApi.interceptors.request.use((request) => {
  const token = localStorage.getItem("authToken");
  if (!token) return request;
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

myApi.getSurveyAnswers = function () {
  return myApi
    .get("/user")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export default myApi;
