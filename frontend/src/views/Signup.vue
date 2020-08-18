<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Inscription
            </v-toolbar-title>           
          </v-toolbar>
          <v-card-text>
            <v-form name="form" @submit.prevent="handleRegister">

              <ValidationProvider rules="minmax:2,15" v-slot="{ errors }">
              <v-text-field label="Prénom *" name="lastname" prepend-icon="mdi-account-cog" type="text" id="name" v-model="user.firstname"/>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider rules="minmax:2,15" v-slot="{ errors }">
              <v-text-field label="Nom *" name="firstname" prepend-icon="mdi-account-cog" type="text" id="firstname" v-model="user.lastname"/>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <v-text-field label="Biographie" name="bio" prepend-icon="mdi-pencil" type="text" id="bio" />

              <ValidationProvider rules="minmax:2,15" v-slot="{ errors }">
              <v-text-field label="Email *" name="email" prepend-icon="mdi-email" type="text" id="email" v-model="user.mail"/>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider rules="minmax:8,15" v-slot="{ errors }">
              <v-text-field label="Mot de passe *" name="password" prepend-icon="mdi-lock" type="password" id="password" v-model="user.password"/>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <v-row class="ml-2">
              Si vous avez déjà un compte,  
                <router-link to="/login" class="ml-1">
                c'est par ici !
              </router-link>
              </v-row>
              <v-row class="ml-2" h6>
              <small>* Ces indications sont requises.</small>
              </v-row>
            
            
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"> CONNEXION </v-btn>
          </v-card-actions>          
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
  name: 'Signup',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/signup', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
    
  }
};
</script>