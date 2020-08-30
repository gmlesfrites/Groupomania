<template>
  <v-container id="Footer"> 

    <img src="../assets/icon-above-font.png" alt="logo de l'entreprise" height="80px">
 
    <v-footer dark class="row" app color="rgb(19,37,66)"> 
      <v-col>
        <p class="white--text ">Groupomania &copy; {{ new Date().getFullYear() }}</p>
        <v-spacer></v-spacer>
        <router-link class="white--text " to="/terms">Conditions d'utilisation</router-link>
      </v-col>

    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'Footer'
}
</script>