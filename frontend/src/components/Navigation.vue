<template>

  <v-menu offset-y absolute>
    <template v-slot:activator="{ on: menu, attrs }" prepend>
      <v-tooltip right>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn color="#ffd7d7" v-bind="attrs"
                v-on="{ ...tooltip, ...menu }" class="text-uppercase">          
            <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
            Groupomania 
          </v-btn>
        </template>
      </v-tooltip>
    </template>
      
    <nav id="nav">
      <router-link class="d-flex liens" v-for="routes in links" :key="routes.id" :to="`${routes.page}`" >{{routes.text}}</router-link>
    </nav>
  </v-menu>

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
            text: "Conditions d'utilisation",
            page:'/terms'
          }
        ]
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
