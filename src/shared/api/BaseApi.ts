const axios = require('axios')
import {config} from 'dotenv'
config()


const api = axios.create({
    baseURL: process.env.BASE_URL,
  });
  
  export default api;