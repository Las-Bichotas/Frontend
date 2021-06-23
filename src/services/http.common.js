import axios from 'axios'


export default axios.create({
    //baseURL: 'https://ilenguageapi.azurewebsites.net',
    baseURL: 'https://60c2e09f917002001739da47.mockapi.io',
    headers: { 'Content-type': 'application/json' }
});