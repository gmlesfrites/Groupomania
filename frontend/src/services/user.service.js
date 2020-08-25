// Accès aux données d'utilisateur
//Authentication service
const axios = require('axios')
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/auth/'

class UserService {
  getAllUsers() {
    return axios.get(API_URL + '', { headers: authHeader() })
  }
}

export default new UserService();