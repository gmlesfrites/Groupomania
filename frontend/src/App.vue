<template>
  <v-app id="app">
    <Navigation/>
    <Hello/>
    <Footer/>
  </v-app>
</template>

<script>
  import Navigation from './components/Navigation'
  import Hello from './components/Hello'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      'Navigation': Navigation, 
      'Hello': Hello,
      'Footer' : Footer
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