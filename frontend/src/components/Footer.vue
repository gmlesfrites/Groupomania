<template>
  <v-app> 
    <v-row class="d-flex-col mt-12">
        <v-spacer><img src="../assets/icon-above-font.png" alt="logo de l'entreprise" width="50%"></v-spacer>
      </v-row>   
    <v-footer class="row" app color="#Ffd7d7"> 
      <v-col align="center" justify="center">
        <p class="black--text ">Groupomania &copy; {{ new Date().getFullYear() }}</p>
        <v-spacer></v-spacer>
        <router-link to="/terms">Conditions d'utilisation</router-link>
      </v-col>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Footer'
}
</script>