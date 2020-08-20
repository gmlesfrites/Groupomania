<template>
  <v-container>
    
      <v-col align="center" justify="center">
        <v-card class="elevation-12 pb-7">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              Les dernières publications
            </v-toolbar-title>
          </v-toolbar>
          
          <!-- <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
            <v-card-text >
              <h3 class="text-justify">{{message.title}} </h3> 
              <p class="text-justify"> {{message.userId}}</p>
              <v-divider></v-divider>
              <v-row class="ml-1 mt-4">
                <p class="text-justify"> {{message.createdAt}}</p>
                <p class="text-justify"> {{message.content}}</p>
              </v-row>
            </v-card-text>       
          </v-card> -->
          
<!-- A supprimer quand il y aura la boucle -->
          <!-- <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
            <v-card-text>
              <h3 class="text-justify">Trop forte</h3>
              <v-divider></v-divider>
              <v-row class="ml-1 mt-4">
                <p class="text-justify"> Il claque ce réseau social ! vachement bien pour une première !</p>
              </v-row>
            </v-card-text>       
          </v-card> -->
          <!--  -->
          
        </v-card>
      </v-col>
  </v-container>
</template>

<script>
// import ModalMessage from "../components/ModalMessage";

export default {
name: "ChatComponent",
  components: {
    // ModalMessage
  },
  data() {
    return {

  }
  }
}
</script>
