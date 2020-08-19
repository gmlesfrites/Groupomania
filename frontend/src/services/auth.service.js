//Authentication service
import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/api/auth/'
axios.defaults.headers.common['Authorization'] = process.env.VUE_APP_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  signup(user) {
    return axios.post(API_URL + 'signup', {
      firstname: user.firstname,
      lastname: user.lastname,
      bio: user.bio,
      email: user.email,
      password: user.password, 
    });
  }

  delete(payload) {
    const id = payload
    return axios
      .delete(process.env.AUTH + id, { headers: authHeader() })
      .then(() => localStorage.removeItem('user'))
  }
}

export default new AuthService();