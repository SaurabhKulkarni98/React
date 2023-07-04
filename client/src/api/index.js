import axios from "axios"

const API = axios.create({ baseURL:'http://localhost:4000'})
export const login = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signUp", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData)

  export const getAllQuestions = () => API.get("/questions/get");

  export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`,noOfAnswers, answerBody, userAnswered)