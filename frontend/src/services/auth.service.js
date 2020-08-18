//Authentication service
import axios from 'axios';

// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

class AuthService {
  login(user) {
    return axios
      .post(process.env.AUTH + 'login', {
        username: user.username,
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
    return axios.post(process.env.AUTH + 'signup', {
      firstname: user.firstname,
      lastname: user.lastname,
      bio: user.bio,
      email: user.email,
      password: user.password, 
    });
  }
}

export default new AuthService();