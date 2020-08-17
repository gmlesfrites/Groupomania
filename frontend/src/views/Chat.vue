<template>
  
  <v-container>
    <Modal/>
    <ChatComponent/>
  </v-container>
</template>

<script>
  import ChatComponent from "../components/ChatComponent";
  import Modal from "../components/ModalMessage";

  export default {
    name: 'app',
    components: {
      ChatComponent,
      Modal
    }
  }
</script>