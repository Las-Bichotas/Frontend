import axios from "axios";

export default axios.create({
  //baseURL: "https://localhost:5001",
  //baseURL: "https://localhost:44341",
  //baseURL: 'https://ilenguageapi.azurewebsites.net',
  //baseURL: 'https://60c2e09f917002001739da47.mockapi.io', //mockito
  baseURL: 'https://ilanguageweb.azurewebsites.net',//LASThOUR
  headers: { "Content-type": "application/json" },

});

