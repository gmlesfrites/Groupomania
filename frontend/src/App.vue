<template>
  <v-app>
    <v-main>
      <Navigation/>
      <router-view/>
      <Footer/>
    </v-main>  
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
    },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
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