<template>

  <v-container  fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="rgb(209,81,90)">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Connexion
            </v-toolbar-title>                
          </v-toolbar>
          <v-card-text>
            <v-form name="form" v-model="valid">
              
              <ValidationProvider v-slot="email">
              <v-text-field label="Email *" name="email" prepend-icon="mdi-email" type="text" id="email" v-model="user.email" required :rules="emailRules"/>
              <span>{{ email.errors[0] }}</span>
              </ValidationProvider>
              
              <ValidationProvider v-slot="password">
              <v-text-field label="Mot de passe *" name="password" prepend-icon="mdi-lock" type="password" id="password" v-model="user.password" required :rules="passwordRules"/>
              <span>{{password.errors[0] }}</span>
              </ValidationProvider>

              <v-row color="warning" v-if="feedbacks.length" class="ml-1">
                <v-alert close-delay="1000" type="error" dismissible v-for="feedback in feedbacks" :key="feedback.message">{{ feedback.message }}</v-alert>
              </v-row>


            </v-form>

            <v-row class="ml-2 mr-2 text-justify">
              <strong>Si vous n'avez pas encore créé votre compte,  
                <router-link to="/signup" class="ml-1">
                c'est par ici !
              </router-link>
              </strong>
              </v-row>
              <v-row class="ml-2 " h6>
              <small class="" >* Ces indications sont requises.</small>
            </v-row>
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2 mb-2" :disabled="!valid" color="success" @click="loginMe">Connexion</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import User from '../models/user'

  export default {
    name: 'Login',
    data() {
      return {
        title: "Se connecter à mon compte",
        user: new User("", ""),
        feedbacks: [], // informations de connexion
        show: true,
        valid: false,
        emailRules: [v => !!v || "Indiquez votre email"],
        passwordRules: [v => !!v || "Indiquez votre mot de passe"]
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/chat');
      }
    },
    methods: {
      loginMe() {
        this.$store.dispatch("auth/login", this.user).then(
        () => {
          this.$router.push("/chat");
        },
        error => {
          this.feedbacks.push(error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  }
};
</script>