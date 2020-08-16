<template>
  <v-app>
    <div>
      <v-toolbar src="../../src/assets/background1.jpg">
        <img :src="require('../../src/assets/monochrome-white.png')" height="60%" />
        <v-spacer>
          <v-toolbar-title class="text-uppercase white--text" > &nbsp; groupomania</v-toolbar-title>
        </v-spacer>
      </v-toolbar>
    </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#FCE4EC" v-bind="attrs" v-on="on"> MENU </v-btn>
      </template>
      
      <nav id="nav">
                <router-link class="d-flex liens" v-for="routes in links" :key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
              </nav>
    </v-menu>


          
 

  </v-app>
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
  .spacing {
    margin-right: 10px;
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
      color: #fce4ec;
      text-decoration: none;
  }


 
</style>
