import axios from 'axios'
import authHeader from './auth-header'
import store from '../store'

const API_URL = 'http://localhost:3000/api/message/'
const API_URL_ADMIN = 'http://localhost:3000/api/message/admin/'

class MessageService {
  createMessage(message) {
    return axios.post(
      API_URL + '',
      {
        title: message.title,
        content: message.content,
        userId: store.state.auth.user.userId,
        firstname: store.state.auth.user.firstname,
        lastname: store.state.auth.user.lastname
      },
      { headers: authHeader() }
    )
  }

  answerMessage(payload) {
    const id = payload.id
    return axios.post(
      API_URL + id,
      {
        title: payload.message.title,
        content: payload.message.content,
        userId: store.state.auth.user.userId,
        message_parent: payload.id,
        firstname: store.state.auth.user.firstname,
        lastname : store.state.auth.user.lastname
      },
      { headers: authHeader() }
    )
  }

  deleteMessage(payload) {
    const id = payload
    return axios.delete(API_URL + id, { headers: authHeader() })
  }

  deleteAdminMessage(payload) {
    const id = payload
    return axios.delete(API_URL_ADMIN + id, { headers: authHeader() })
  }

  updateMessage(payload) {
    const id = payload.id
    return axios.put(
      API_URL + id,
      {
        title: payload.message.title,
        content: payload.message.content
      },
      { headers: authHeader() }
    )
  }

  getAllMessages() {
    return axios.get(API_URL + '', { headers: authHeader() })
  }
}

export default new MessageService()