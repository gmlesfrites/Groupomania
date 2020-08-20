<template>
  
  <v-container>
    <Modal/>
    <ChatMain/>
      <v-col align="center" justify="center">
        <v-card class="elevation-12 pb-7">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              Les dernières publications
            </v-toolbar-title>
          </v-toolbar>

          <v-container >
            <!-- Message initial -->
            <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
                message initial
              <!-- si réponse -->
              <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
                message réponse
              </v-card>
            </v-card>
          </v-container>
        
        </v-card>
      </v-col>

  </v-container>

    

</template>

<script>
  import Modal from "../components/ModalMessage";
  // import ChatMain from "../components/ChatMain";

  export default {
    name: 'app',
    components: {
      Modal, 
      // ChatMain
    }
  }
</script>