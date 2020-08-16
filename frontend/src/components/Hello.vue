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
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
