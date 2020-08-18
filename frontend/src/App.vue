<template>
  <v-app>
    <v-container>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <v-app-bar>
          
            <router-link to="/home" class="nav-link"><font-awesome-icon icon="home" class="mr-2" />Page d'accueil</router-link>
         
            <router-link  v-if="showModeratorBoard" to="/mod" class="nav-link">Vue Modérateur</router-link>
 
            <router-link v-if="currentUser" to="/user" class="nav-link">Vue Membre</router-link>
    
        </v-app-bar>

        <v-container v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">
              <font-awesome-icon icon="user-plus" />Sign Up
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" />Login
            </router-link>
          </li>
        </v-container>

        <v-container v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.username }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" />LogOut
            </a>
          </li>
        </v-container>
  
        <v-main>
          <Navigation/> 
          <router-view/>
          <Footer/>
        </v-main>
      </nav>
    </v-container>

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