<template>
  <v-container>
    <v-dialog v-model="dialog" width="auto" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#ffd7d7" v-bind="attrs" v-on="on" class="ma-3 ">
          Nouveau Message
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Votre publication
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field label="Titre de votre message *" name="title" prepend-icon="mdi-message-text-outline" type="text" id="title" ></v-text-field>
            <v-text-field label="Votre message *" name="content" prepend-icon="mdi-message-text-outline" type="text" id="content" ></v-text-field>
          </v-form>
          <small>* Ces indications sont requises.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="dialog = false">Publier</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>



