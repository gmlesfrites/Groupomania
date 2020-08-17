<template>
  <v-app>    
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