<template>
  <v-app-bar dark color="rgb(19,37,66)" id="Navigation">
    <a to="/" class="text-decoration-none white--text"  @click.prevent><img src="../assets/monochrome-white.png" width="18" height="18" alt="logo Groupomania"> Groupomania </a>

      <v-col  v-if="!currentUser" class="ml-auto" justify-end>
        <router-link  to="/signup" class="text-decoration-none ml-5 mr-5 white--text" >Inscription </router-link> 

        <router-link to="/login" class="text-decoration-none mr-5 ml-5 white--text">Connexion </router-link>
      </v-col>

      <v-col v-if="currentUser" class="ml-auto">
        <router-link to="/chat" class="text-decoration-none mr-5 ml-5 white--text">
        Discussion </router-link> 
        <router-link v-if="currentUser" to="/profile" class="text-decoration-none mr-5 white--text"><font-awesome-icon icon="user" class="mr-2 ml-5"/><strong style="text-transform: uppercase"> {{currentUser.firstname}}</strong> </router-link> 
        <a  to="/logout" @click="logOut" class="text-decoration-none white--text"><font-awesome-icon icon="sign-out-alt" class="ml-5 mr-2"/> Déconnexion </a>
      </v-col>
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
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        window.alert('Vous êtes maintenant déconnecté(e)')
        this.$router.push('/');
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
