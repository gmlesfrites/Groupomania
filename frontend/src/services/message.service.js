import axios from 'axios'
import authHeader from './auth-header'
import store from '../store'

const API_URL = 'http://localhost:3000/api/message/'
const API_URL_CREATE = 'http://localhost:3000/api/message/create/'
const API_URL_LINK = 'http://localhost:3000/api/message/link/'
const API_URL_ADMIN = 'http://localhost:3000/api/message/admin/'

class MessageService {  

  createMessage(message) {
    return axios.post(
      API_URL_CREATE ,
      {
        title: message.title,
        content: message.content,
        userId: store.state.auth.user.userId
      },
      { headers: authHeader() }
    )
  }

  answerMessage(payload) {
    const id = payload.id
    return axios.post(
      API_URL_LINK + id, {
        title: payload.message.title,
        content: payload.message.content,
        userId: store.state.auth.user.userId,
        id: payload.message.id,
        messageId: payload.message.messageId
      },
      { headers: authHeader() }
    )
  }

  deleteMessage(payload) {
    const id = payload.id
    // const userId = store.state.auth.user.userId
    console.log(payload);
    
    return axios.delete(API_URL + id, {
      userId: store.state.auth.user.userId,
      id: payload.id,
    },
    { headers: authHeader() },
    )
  }

  deleteAdminMessage(payload) {
    const id = payload.message.id

    return axios.delete(API_URL_ADMIN + id, { 
      id: payload.message.id,
      userId: store.state.auth.user.userId
    },
    {  headers: authHeader() })
  }

  updateMessage(payload) {
    const id = payload.id
    const userId = store.state.auth.user.userId
    console.log(payload)
    console.log(userId, id);
    
    return axios.put(
      API_URL + id,
      {
        title: payload.message.title,
        content: payload.message.content,
        userId: store.state.auth.user.userId,
        // id: payload.message.id
      },
      { headers: authHeader() }
    )
  }

  getAllMessages() {
    return axios.get(API_URL + '', { headers: authHeader() })
  }
}

export default new MessageService()