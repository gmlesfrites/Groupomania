  <v-dialog v-model="dialog" persistent max-width="600px">
  <v-col cols="12" sm="8" md="4" class="ml-1">
    <v-card class="elevation-12 modal" v-show="value">
    <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
                      Une nouvelle publication à transmettre ?
          </v-btn>
        </template>
      <v-toolbar color="#ffd7d7">
        <v-toolbar-title>Votre publication</v-toolbar-title>
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
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
    </v-card>
  </v-col>
  </v-dialog>