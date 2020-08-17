<template>
  <v-app> 
    <v-row class="d-flex-col mt-12">
        <v-spacer><img src="../assets/icon-above-font.png" alt="logo de l'entreprise" width="50%"></v-spacer>
      </v-row>   
    <v-footer class="row" app color="#Ffd7d7"> 
      <v-spacer></v-spacer>
      <span class="black--text">Groupomania &copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Footer'
}
</script>