<template>

 
          <v-col cols="12" sm="8" md="4" class="ml-1">
            <v-card class="elevation-12">
              <v-toolbar color="#ffd7d7">
                <v-toolbar-title>Ecrire une nouvelle publication</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  
                  <v-text-field label="Titre de votre message" name="title" prepend-icon="mdi-message-text-outline" type="text" id="title" ></v-text-field>
                  <v-text-field label="Votre message" name="content" prepend-icon="mdi-message-text-outline" type="text" id="content" ></v-text-field>

                </v-form>
  

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success"> Envoyer </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>


</template>

<script>

export default {
  name: 
    'ChatComponent',
  data() {
    return {
      
    };
  }
}
</script>