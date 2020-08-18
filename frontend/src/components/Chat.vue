<template>
  
  <v-container>
    <Modal/>
    <ChatComponent/>
  </v-container>

    

</template>

<script>
  import Modal from "../components/ModalMessage";
  import ChatComponent from "../components/ChatComponent";

  export default {
    name: 'app',
    components: {
      Modal, ChatComponent
    }
  }
</script>