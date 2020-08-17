<template>
  <v-app>
      <Navigation/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation.vue";
export default {
  name: 'app',
  components: {
  Navigation
  
  }
};
</script>