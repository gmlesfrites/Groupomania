<template>

  <v-app-bar color="#Ffd7d7" >

    <router-link to="/home" class="text-decoration-none"><font-awesome-icon icon="home" class="navbar mr-2" /> Page d'accueil </router-link>
    <router-link  v-if="showModeratorBoard" to="/mod" class="text-decoration-none"> Vue Modérateur </router-link>
    <router-link v-if="currentUser" to="/user" class="text-decoration-none"> Vue Membre  </router-link>
      
      <v-container v-if="!currentUser" class="ml-auto" justify-end>
        <router-link to="/signup" class="text-decoration-none ml-5" >Inscription </router-link> 
        ||
        <router-link to="/login" class="text-decoration-none mr-5">Connexion </router-link>
      </v-container>

      <v-container v-if="currentUser" class="ml-auto">
        <router-link to="/profile" class="text-decoration-none"><font-awesome-icon icon="user" class="mr-2"/><strong>{{currentUser.firstname}}</strong> <strong>{{currentUser.lastname}}</strong></router-link> 

        <router-link  href @click.prevent="logOut" class="text-decoration-none"><font-awesome-icon icon="sign-out-alt" class="mr-2"/> Déconnexion </router-link>
      </v-container>
  </v-app-bar>
      



</template>

<script>
  export default {
    name: 'Navigation',
    data() {

      return {
        links: [
          {
            id: 0,
            text: "Page d'accueil",
            page:'/home'
          },
          {
            id: 1,
            text: 'Inscription',
            page:'/signup'
          },
          {
            id: 2,
            text: 'Connexion',
            page:'/login'
          },
          {
            id: 3,
            text: 'Discussion',
            page:'/chat'
          },
          {
            id: 4,
            text: 'Mon compte',
            page:'/profile'
          },
          {
            id: 5,
            text: "Conditions d'utilisation",
            page:'/terms'
          }
        ]
      }
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
  }
</script>

<style>
  .border {
    min-height: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
  }

  #nav {
    padding: 30px;
    width: 100%;   
  }

  a {
      text-decoration: none;
  }


 
</style>
