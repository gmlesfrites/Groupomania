// Accès aux données d'utilisateur
//Authentication service
const axios = require('axios')
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/auth/'

class UserService {
  getAllUser() {
    return axios.get(API_URL + '', { headers: authHeader() })
  }

  getPublicContent() {
    return axios.get(API_URL + 'all')
  }

  getMemberBoard() {
    return axios.get(API_URL + 'member', { headers: authHeader() })
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
  }
}

export default new UserService();