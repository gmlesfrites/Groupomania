<template>
  <v-container>
    <v-dialog width="auto" transition="fab-transition" id="ModalMessage">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="rgb(209,81,90)" v-bind="attrs" v-on="on" class="ma-3 ">
          Nouveau Message
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Votre publication
        </v-card-title>

        <v-card-text>
          
          <v-form name="form" v-model="valid" ref="modalForm">
            <v-text-field label="Titre de votre message *" name="title" prepend-icon="mdi-message-text-outline" type="text" id="title" v-model="message.title" :rules="titleRules"></v-text-field>
            <v-row class="caption ml-2">Exemple : Détente et gourmandise ! </v-row>

            <v-text-field label="Votre message *" name="content" prepend-icon="mdi-message-text-outline" type="text" id="content" v-model="message.content" :rules="contentRules" />
            <v-row class="caption ml-2">Exemple : J'adore les vacances et j'ai un faible pour le chocolat !</v-row>


          </v-form>
        
        </v-card-text>

        <v-row class="ml-2 " h6>
              <small class="ml-2 mr-2 text-justify" >* Ces indications sont requises.</small>
            </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>


          <v-row color="warning" v-if="feedbacks.length" class="ml-1">
                <v-alert close-delay="1000" type="error" dismissible v-for="feedback in feedbacks" :key="feedback.message">{{ feedback.message }}</v-alert>
              </v-row> 


          <v-btn class="mr-2 mb-2" color="info" :disabled="!valid"  @click="sendMe" transition="fab-transition">Publier</v-btn>

        </v-card-actions>

      </v-card>
      
    </v-dialog>
  </v-container>
</template>

<script>
  import Message from '../models/message'

export default {
  name: 'ModalMessage',
  data () {
    return {
      message: new Message("", ""),
      feedbacks: [], // informations sur la création du message
      show: true,
      valid: false,
      titleRules: [v => !!v || "Indiquez un titre", v =>
        /(?=.*[A-Za-z0-9])/.test(v) || "Uniquement du texte et/ou des chiffres"],
      contentRules: [v => !!v || "Indiquez le contenu de votre message", v =>
        /(?=.*[A-Za-z0-9])/.test(v) || "Uniquement du texte et/ou des chiffres"],
      user: this.$store.getters["auth/userState"],
    }
  },
    props: {
      title: String,
      content: String,
      id: Number,
      userId: Number,
      createdAt: String,
  },
  methods : {
    sendMe() {   
      this.$store.dispatch("message/createMessage", this.message)
      .then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          this.$refs.modalForm.reset();
          window.alert('Votre message a bien été enregistré !')
        },

        error => {
          console.log(error);
        }
      )
    }
  }
}
</script>