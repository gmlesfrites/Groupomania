<template>
  <v-container>
    
      <v-col align="center" justify="center">
        <v-card class="elevation-12 pb-7">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              Les dernières publications
            </v-toolbar-title>
          </v-toolbar>
          
          <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
            <v-card-text>
              <h3 class="text-justify">Titre de ma publication</h3>
              <v-divider></v-divider>
              <v-row class="ml-1 mt-4">
                <p class="text-justify"> Ma super contribution à ce magnifique réseau social. C'est trop chouette, ce travail en si peu de jours (mais en fait des jours de 18h donc bon...)</p>
              </v-row>
            </v-card-text>       
          </v-card>
          
          <!-- A supprimer quand il y aura la boucle -->
          <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
            <v-card-text>
              <h3 class="text-justify">Trop forte</h3>
              <v-divider></v-divider>
              <v-row class="ml-1 mt-4">
                <p class="text-justify"> Il claque ce réseau social ! vachement bien pour une première !</p>
              </v-row>
            </v-card-text>       
          </v-card>
          <!--  -->

        </v-card>
      </v-col>
  </v-container>
</template>

<script>
export default {
  name: "ChatComponent"
}
</script>