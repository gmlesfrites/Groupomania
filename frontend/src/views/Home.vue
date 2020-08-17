<template>
  <div class="home" v-bind:title="message">
    <router-link :to="{ name: 'Login' }">
      <v-btn>Connexion</v-btn>
    </router-link>
    <router-link :to="{ name: 'Signup' }">
      <v-btn>Inscription</v-btn>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
//import Header from "@/components/Header.vue";
export default {
  name: "Home",
  /* components: {
    Header
  } */
  data: function() {
    return { message: "Page d'accueil" };
  }
};
</script>

