<template>
  <v-container id="Footer"> 
    <v-row class="d-flex-col mt-12">
        <v-spacer><img src="../assets/icon-above-font.png" alt="logo de l'entreprise" width="50%"></v-spacer>
      </v-row>   
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