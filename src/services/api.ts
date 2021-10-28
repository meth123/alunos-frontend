import axios from 'axios'
 
const api = axios.create({
    baseURL: 'alunos-backend-meth123.herokuapp.com'
})
 
export default api;
