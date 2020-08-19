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
          <v-container >
            <v-form name="form" v-model="valid">

              <v-container class="mb-4" v-if="!successful">
                
                <v-text-field label="Nom *" name="lastname" prepend-icon="mdi-account-cog" type="text" id="lastname" v-model="user.lastname" :rules="lastnameRules"/>
                <v-row class="caption ml-2">* Entre 2 et 15 lettres </v-row>
              
                <v-text-field label="Prénom *" name="firstname" prepend-icon="mdi-account-cog" type="text" id="firstname" v-model="user.firstname" :rules="firstnameRules"/>
                <v-row class="caption ml-2">* Entre 2 et 15 lettres </v-row>

                <v-text-field label="Biographie" name="bio" prepend-icon="mdi-pencil" type="text" id="bio" />

                <v-text-field label="Email *" name="email" prepend-icon="mdi-email" type="text" id="email" v-model="user.email" :rules="emailRules" />
                <v-row class="caption ml-2">* Exemple : prenom.nom@groupomania.fr </v-row>

                <v-text-field label="Mot de passe *" name="password" prepend-icon="mdi-lock" type="password" id="password" v-model="user.password" :rules="passwordRules"/>
                <v-row class="caption ml-2">* Entre 8 et 15 caractères (minimum 1 majuscule, 1 minuscule et 1 chiffre) </v-row>

              <v-row color="warning" v-if="feedbacks.length" class="ml-1">
                <v-alert close-delay="1000" type="error" dismissible v-for="feedback in feedbacks" :key="feedback.message">{{ feedback.message }}</v-alert>
              </v-row>

              </v-container>

              <v-row class="ml-2">
              Si vous avez déjà un compte,  
                <router-link to="/login" class="ml-1">
                c'est par ici !
              </router-link>
              </v-row>
              <v-row class="ml-2" h6>
              <small>* Ces indications sont requises. </small>
              </v-row>
            
            
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
             <v-btn class="mr-2 mb-2" color="info" :disabled="!valid"  @click="signupMe">Enregistrer</v-btn>
            
          </v-card-actions>          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import User from '../models/user'

export default {
  name : 'Signup',
  data () {
    {
      return {
        title: "Créer mon compte",
        user: new User("", ""),
        feedbacks: [],
        valid: false,
        show : true,

        successful: false,
        lastnameRules: [ v => !!v || "Indiquez votre nom" ],
        firstnameRules: [ v => !!v || "Indiquez votre prénom" ],
        emailRules: [ v => !!v || "Un e-mail est obligatoire", v => /.+@+groupomania.fr/.test(v) || "Indiquez un e-mail valide"],
        passwordRules: [v => (v && v.length >= 8 && v.length <= 15) || "entre 8 et 15 caractères", v =>
          /(?=.*[A-Z])/.test(v) || "au moins une lettre majuscule", v => /(?=.*\d)/.test(v) || "au moins un chiffre"]
      }
    }
  },
  methods: {
    signupMe() {
      this.$store.dispatch("auth/signup", this.user).then(
        () => {
          this.successful = true;
          window.alert("La création de votre compte a réussi. Veuillez maintenant vous connecter.")
          this.$router.push("/login");
        },
        error => {
          this.feedbacks.push(error.response && error.response.data) ||
            error.message ||
            error.toString();
          }
      );
    }
  }
}
</script>