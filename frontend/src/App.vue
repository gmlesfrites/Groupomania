<template>
  <v-app id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer";
  import Navigation from './components/Navigation'  

  export default {
    name: 'app',
    components: {
      Navigation,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>