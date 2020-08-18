<template>
  <v-container>

      <Modal/>
    <ChatComponent/>

  </v-container>
</template>

<script>
  import UserService from '../services/user.service';
  import Modal from "../components/ModalMessage";
  import ChatComponent from "../components/ChatComponent";

 export default {
    name: 'User',
    components : { Modal, ChatComponent },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>