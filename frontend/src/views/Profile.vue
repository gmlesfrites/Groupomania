<template>
<v-container  fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              <img width="24" height="24" src="../assets/monochrome-black.png" class="mr-2">
              Mon compte
            </v-toolbar-title>                
          </v-toolbar>
          <v-card-text class="text-justify">
            <h3><strong>Identité : </strong> </h3>
            <v-divider></v-divider>
            
            <v-card-text>

            <p><strong>Prénom : </strong><span  style="text-transform: uppercase"> {{currentUser.firstname}} </span></p>
            <p><strong>Nom : </strong><span  style="text-transform: uppercase"> {{currentUser.lastname}} </span> </p>
            <p><strong>Privilège : </strong>{{currentUser.privilege}}</p>
            <p><strong>Email : </strong>{{currentUser.email}}</p>
            <p><strong>Biographie :</strong> {{currentUser.bio}} </p>
            <p><strong>Identifiant :</strong> {{currentUser.id}} </p>
            

          </v-card-text>
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" class="mr-2 mb-2"  @click="confirmDelete"> Supprimer mon compte </v-btn>
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
      if (window.confirm("Cette action n'est pas modifiable après confirmation !")) {
        this.deleteMyProfile()
      }
    },
    deleteMyProfile() {
      let payload = this.$store.state.auth.user.id;
      console.log(payload);
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