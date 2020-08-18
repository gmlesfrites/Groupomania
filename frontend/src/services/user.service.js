// Accès aux données d'utilisateur
import axios from 'axios';
import authHeader from './auth-header';

// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

class UserService {
  getPublicContent() {
    return axios.get(process.env.VUE_APP_SERVICE_URL + 'all');
  }

  getUserBoard() {
    return axios.get(process.env.VUE_APP_SERVICE_URL+ 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(process.env.VUE_APP_SERVICE_URL + 'mod', { headers: authHeader() });
  }
}

export default new UserService();