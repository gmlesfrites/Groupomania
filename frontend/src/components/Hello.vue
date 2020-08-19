<template>
  <v-container class="d-flex-col mt-12">
    <h1>Bienvenue sur l'application Groupomania, votre réseau social d'entreprise</h1>

    <v-container class="d-flex-col mt-12">
      <v-row>
        <p class="text-justify h4">Profitez dès à présent de cette application  dans un environnement sécurisé.</p>   
      </v-row>
      <v-row>
        <p class="text-justify h4">Écrivez, partagez vos informations, des contenus d'actualité avec vos collègues de travail, que ce soit en lien avec votre métier, votre équipe ou même notre entreprise.</p>
      </v-row>

      <v-row>
        <p class="text-justify h4">Prenez garde à la facilité d'écrire ! </p>
          
        <p class="text-justify h4">Quand on est "caché derrière son clavier", c'est plus facile de se 'lâcher' !</p>
          
        <p class="text-justify h4">Retrouvez toutes les conditions d'utilisation de cette application ici : 
          <br/>
          <router-link to="/terms"> Conditions d'utilisation </router-link> </p>
      </v-row>
    </v-container>

    <!-- <v-row justify="space-around">
      <router-link to="/signup">
        <v-btn color="info">Inscription</v-btn>
      </router-link>

      <router-link to="/login">
        <v-btn color="info">Connexion</v-btn>
      </router-link>
    </v-row> -->
   </v-container>
</template>

<script>
// import UserService from '../services/user.service';

export default {
  name: 'Hello',
  data() {
    return {
      content: ''
    };
  },
  // mounted() {
  //   UserService.getPublicContent().then(
  //     response => {
  //       this.content = response.data;
  //     },
  //     error => {
  //       this.content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // }
}
</script>