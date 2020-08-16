<template>
  <div id="app">
    <div id="toolbar">
      <v-toolbar dark src="../src/assets/background1.jpg">
          <img class="mr-3" :src="require('../src/assets/monochrome-white.png')" height="40"/>
          <v-spacer></v-spacer>
          <v-toolbar-title> &nbsp; GROUPOMANIA</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
    </div>

    <v-nav id="nav" display="4">
      <router-link to="/">Home</router-link> | 
      <router-link to="/TermsOfUse">Conditions d'utilisation</router-link> |
      <router-link to="/Signup">Inscription</router-link> |
      <router-link to="/Login">Connexion</router-link>
    </v-nav>

    <router-view />
  
      <v-footer class="row" app> 
        <v-spacer></v-spacer>
        <p class="white--text">Groupomania - &copy; {{ new Date().getFullYear() }}</p>
        <v-spacer></v-spacer>
      </v-footer>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffd7d7;
    }
  }
}
</style>