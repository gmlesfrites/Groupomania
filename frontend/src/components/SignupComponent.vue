<template>

<v-app>
        <v-container class="fill-height mt-12" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#ffd7d7">
                <v-toolbar-title>Connexion</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Prénom" name="lastname" prepend-icon="mdi-account-cog" type="text" id="name" ></v-text-field>
                  <v-text-field label="Nom" name="firstname" prepend-icon="mdi-account-cog" type="text" id="firstname" ></v-text-field>
                  <v-text-field label="Email" name="email" prepend-icon="mdi-email" type="text" id="email" ></v-text-field>
                  <v-text-field label="Mot de passe" name="password" prepend-icon="mdi-lock" type="password" id="password" ></v-text-field>
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
</v-app>

</template>


<script>
// @ is an alias to /src
//import Header from "@/components/Header.vue";
export default {
  name: "Signup",
  
};
</script>