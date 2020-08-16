  
<template>
  <v-app class="home" v-bind:title="message">

    <router-link :to="{ name: 'Login' }">
      <v-btn>Connexion</v-btn>
    </router-link>

    <router-link :to="{ name: 'Signup' }">
      <v-btn>Inscription</v-btn>
    </router-link>


  </v-app>
</template>

<script>

export default {
  name: "Home",

  data: function() {
    return { message: "Page d'accueil" };
  }
};
</script>

