// Accès aux données d'utilisateur
//Authentication service
const axios = require('axios')
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/message/'
const API_URL_ADMIN = 'http://localhost:3000/api/message/admin/'

class MessageService {
  getAllMessages() {
    return axios.get(API_URL + '', { headers: authHeader() })
  }

  updateMessage() {
    return axios.put(API_URL + 'member, admin', { headers: authHeader() })
  }

  deleteMessage() {
    return axios.delete(API_URL + 'member, admin', { headers: authHeader() })
  }

  deleteMessageAdmin() {
    return axios.delete(API_URL_ADMIN + 'admin', { headers: authHeader() })
  }
}

export default new UserService();