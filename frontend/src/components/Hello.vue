<template>
  <v-container class="d-flex-col mt-12">
    <h1>Bienvenue sur l'application Groupomania, <br/> votre réseau social d'entreprise</h1>

    <v-container class="d-flex-col mt-12">
      <v-row>
        <p class="text-justify">Profitez dès à présent de cette application  dans un environnement sécurisé.</p>   
      </v-row>
      <v-row>
        <p class="text-justify">Écrivez, partagez vos informations, des contenus d'actualité avec vos collègues de travail, que ce soit en lien avec votre métier, votre équipe ou même notre entreprise.</p>
      </v-row>

      <v-row>
        <p class="text-justify">Prenez garde à la facilité d'écrire ! </p>
      </v-row>

      <v-row>
        <p class="text-justify"> Quand on est "caché derrière son clavier", c'est plus facile de se "lâcher" !</p>
      </v-row>

      <v-row>
        <p class="text-justify">Retrouvez toutes les conditions d'utilisation de cette application ici : 
          <br/>
          <router-link to="/terms"> Conditions d'utilisation </router-link> </p> 
      </v-row>
    </v-container>
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
  }
}
</script>