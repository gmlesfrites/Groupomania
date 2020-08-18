<template>
<v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Mon compte
            </v-toolbar-title>                
          </v-toolbar>
          <v-card-text>
            
            <!-- A modifier en v-for avec les informations qui tombent de l'api -->
            <v-row class="ml-2">
              <p class="text-justify h3">Nom</p>
            </v-row>
            <v-row class="ml-2">
              <p class="text-justify h3">Prénom</p>
            </v-row>
            <v-row class="ml-2">
              <p class="text-justify h3">Biographie</p>
            </v-row>
            <v-row class="ml-2">
              <p class="text-justify h3">Email</p>
            </v-row>
            <v-row class="ml-2">
              <p class="text-justify h3">Rôle</p>
            </v-row>
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning"> Supprimer mon compte </v-btn>

            <v-spacer></v-spacer>
            <v-btn color="info"> Mettre à jour </v-btn>
            <v-spacer></v-spacer>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProfileComponent'
}
</script>