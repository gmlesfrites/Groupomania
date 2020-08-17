<template>
<v-app>
        <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#ffd7d7">
                <v-toolbar-title>Connexion</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  
                  <v-text-field label="Email" name="email" prepend-icon="mdi-email" type="text" id="email" ></v-text-field>
                  <v-text-field label="Mot de passe" name="password" prepend-icon="mdi-lock" type="password" id="password" ></v-text-field>

                </v-form>
  
                <v-row class="ml-2">
                  * Si vous n'avez pas encore créé votre compte,  
                    <router-link :to="{ name: 'Signup' }" class="ml-1">
                   c'est par ici !
                  </router-link>
                </v-row>

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
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  }
}
</script>