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
          <v-card-text>
            <h3><strong>{{currentUser.firstname}}</strong> <strong>{{currentUser.lastname}}</strong></h3>
            <p><strong>Token : </strong>{{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}</p>
            <p><strong>Identifiant : </strong>{{currentUser.id}}</p>
            <p><strong>Email : </strong>{{currentUser.email}}</p>
            
            <strong>Authorities:</strong>
            <ul>
              <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
            </ul>
           
              
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning"> Supprimer mon compte </v-btn>

            <v-spacer></v-spacer>
            <v-btn color="info"> Mettre à jour </v-btn>
            <v-spacer></v-spacer>

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
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>