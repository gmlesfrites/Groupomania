<template>
  
  <v-container>
    <Modal/>
    <ChatMain/>
  </v-container>

    

</template>

<script>
  import Modal from "../components/ModalMessage";
  import ChatMain from "../components/ChatMain";

  export default {
    name: 'app',
    components: {
      Modal, ChatMain
    }
  }
</script>