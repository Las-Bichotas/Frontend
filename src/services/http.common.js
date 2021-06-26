import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  //baseURL: 'https://ilenguageapi.azurewebsites.net',
  //baseURL: 'https://60c2e09f917002001739da47.mockapi.io', //mockito
  headers: { "Content-type": "application/json" },
});

