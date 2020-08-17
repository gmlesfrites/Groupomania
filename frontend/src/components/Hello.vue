<template>
   <v-app class="home">
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <h1>Bienvenue sur l'application Groupomania, votre réseau social d'entreprise</h1>
      </v-row>
      <v-row justify="space-around">
        <router-link :to="{ name: 'Signup' }">
          <v-btn color="info">Inscription</v-btn>
        </router-link>

        <router-link :to="{ name: 'Login' }">
          <v-btn color="info">Connexion</v-btn>
        </router-link>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Hello'
}
</script>