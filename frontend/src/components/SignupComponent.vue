<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Inscription
            </v-toolbar-title>           
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Prénom *" name="lastname" prepend-icon="mdi-account-cog" type="text" id="name" ></v-text-field>
              <v-text-field label="Nom *" name="firstname" prepend-icon="mdi-account-cog" type="text" id="firstname" ></v-text-field>
              <v-text-field label="Biographie" name="bio" prepend-icon="mdi-pencil" type="text" id="bio" ></v-text-field>
              <v-text-field label="Email *" name="email" prepend-icon="mdi-email" type="text" id="email" ></v-text-field>
              <v-text-field label="Mot de passe *" name="password" prepend-icon="mdi-lock" type="password" id="password" ></v-text-field>
            
              <v-row class="ml-2" h6>
              Si vous avez déjà un compte,  
                <router-link :to="{ name: 'Login' }" class="ml-1">
                c'est par ici !
              </router-link>
              </v-row>
              <v-row class="ml-2" h6>
              <small>* Ces indications sont requises.</small>
              </v-row>
            
            
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"> CONNEXION </v-btn>
          </v-card-actions>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// @ is an alias to /src
//import Header from "@/components/Header.vue";
export default {
  name: "Signup",
  
};
</script>