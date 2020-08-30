import axios from 'axios'
import authHeader from './auth-header'
import store from '../store'

const API_URL = 'http://localhost:3000/api/message/'

class LikeService {
    addLike(payload) {
        const id = payload
        return axios.post(
          API_URL + id + '/like',
          { userId: store.state.auth.user.userId, id: payload },
        )
      }
}
