import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/api/auth/'
// const API_URL_ADMIN = 'http://localhost:3000/api/auth/admin'

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('groupomaniaUser', JSON.stringify(response.data))

        }
        return response.data
      })
  }

  logout() {
    localStorage.removeItem('groupomaniaUser')
  }

  signup(user) {
    return axios.post(API_URL + 'signup', {
      lastname : user.lastname,
      firstname: user.firstname,
      bio: user.bio,
      email: user.email,
      password: user.password,
      userId: user.userId,
      isAdmin: user.isAdmin
    })
  }

  delete(payload) {
    const id = payload

    return axios
      .delete(API_URL + id, { headers: authHeader() })
      .then(() => localStorage.removeItem('groupomaniaUser'))
  }
}

export default new AuthService()