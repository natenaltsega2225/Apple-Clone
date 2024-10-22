import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3001' // this is for the local host
    baseURL: 'https://apple-clone-backend-luwq.onrender.com/iphones:1' 
});

export default instance;