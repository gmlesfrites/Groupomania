// Accès aux données d'utilisateur
//Authentication service
const axios = require('axios').default;
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/auth/'

class UserService {
  getPublicContent() {
    return axios.get(API_URL)
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
}

export default new UserService();