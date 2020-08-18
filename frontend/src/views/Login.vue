<template>

  <v-container  fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Connexion
            </v-toolbar-title>                
          </v-toolbar>
          <v-card-text>
            <v-form name="form" @submit.prevent="handleLogin">
              
              <ValidationProvider v-slot="email">
              <v-text-field label="Email *" name="email" prepend-icon="mdi-email" type="text" id="email" v-model="user.email"/>
              <span>{{ email.errors[0] }}</span>
              </ValidationProvider>
              

              <ValidationProvider v-slot="password">
              <v-text-field :value="password" label="Mot de passe *" name="password" prepend-icon="mdi-lock" type="password" id="password" v-model="user.password"/>
              <span>{{ password.errors[0] }}</span>
              </ValidationProvider>

            </v-form>

            <v-row class="ml-2">
              Si vous n'avez pas encore créé votre compte,  
                <router-link to="/signup" class="ml-1">
                c'est par ici !
              </router-link>
              </v-row>
              <v-row class="ml-2" h6>
              <small>* Ces indications sont requises.</small>
            </v-row>
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"> CONNEXION </v-btn>
          </v-card-actions>
          <v-card-text>
            <v-row v-if="message" class="alert alert-danger" role="alert">{{message}}</v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import User from '../models/user'
  import { ValidationProvider } from 'vee-validate';

  export default {
    components: {
      ValidationProvider
    },
    name: 'Login',
    props: {
      msg: String
    },
    data() {
      return {
        user: new User('', ''),
        loading: false,
        message: ''
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.$validator.validateAll().then(isValid => {
          if (!isValid) {
            this.loading = false;
            return;
          }

          if (this.user.email && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
              () => {
                // TODO voir si je garde ce chemin ou si je vais directement vers les discussions
                this.$router.push('/profile');
              },
              error => {
                this.loading = false;
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
              }
            );
          }
        });
      }
    }
  };
</script>