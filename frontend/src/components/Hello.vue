<template>
  <v-container class="d-flex-col mt-12">
    <v-row justify="space-around">
      <router-link to="/signup">
        <v-btn color="info">Inscription</v-btn>
      </router-link>

      <router-link to="/login">
        <v-btn color="info">Connexion</v-btn>
      </router-link>
    </v-row>
   </v-container>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Hello',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
}
</script>