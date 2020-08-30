<template>
  <v-container  fluid id="Profile">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="rgb(209,81,90)">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Mon compte
            </v-toolbar-title>                
          </v-toolbar>
          <v-card-text class="text-justify">
            <h3><strong>Identité : </strong> </h3>
            <v-divider></v-divider>
            
            <v-card-text>
              <p v-if="currentUser"><strong>Prénom : </strong><span  style="text-transform: uppercase"> {{currentUser.firstname}} </span></p>
              <p v-if="currentUser"><strong>Nom : </strong><span  style="text-transform: uppercase"> {{currentUser.lastname}} </span> </p>
              <p v-if="currentUser"><strong>Privilège : </strong>{{currentUser.privilege}}</p>
              <p v-if="currentUser"><strong>Email : </strong>{{currentUser.email}}</p>
              <p v-if="currentUser"><strong>Biographie :</strong> {{currentUser.bio}} </p>
              <p v-if="currentUser"><strong>Identifiant :</strong> {{currentUser.userId}} </p>      
            </v-card-text>
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="rgb(209,81,90)" class="mr-2 mb-2"  @click="confirmDelete"> Supprimer mon compte </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    confirmDelete() {
      if (window.confirm("Cette action n'est pas modifiable après confirmation ! A la suite de cette opération vous serez déconnecté(e).")) {
        this.deleteMyProfile()
      }
    },
    deleteMyProfile() {
      let payload = this.$store.state.auth.user.userId;

      this.$store.dispatch("auth/deleteProfile", payload)
      .then(
        data => {
          console.log(data);
          window.alert(data.message)
        },
        error => {
          console.log(error);
        }
      );
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/");
    }
  },
    updated() {
    if (!this.currentUser) {
      this.$router.push("/");
    }
  }
};
</script>