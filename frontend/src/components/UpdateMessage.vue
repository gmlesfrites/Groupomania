<template>
  <v-dialog width="auto" transition="fab-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="rgb(209,81,90)" v-bind="attrs" v-on="on" class="ma-3 ">
        Modifier
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Votre modification
      </v-card-title>

      <v-card-text>  
        <v-form name="form" ref="updateForm" >
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

        <v-btn class="mr-2 mb-2" color="info" :disabled="!valid"   @click="updateMe">Valider</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import Message from '../models/message'

export default {
  name: 'UpdateMessage',
  data() {
    return {
      message: Message,
      // fromMessage: this.id,
      feedbacks: [],
      show: true,
      valid: false,
      titleRules: [v => !!v || "Indiquez un titre", v =>
        /(?=.*[A-Za-z0-9])/.test(v) || "Uniquement du texte et/ou des chiffres"],
      contentRules: [v => !!v || "Indiquez le contenu de votre message", v =>
        /(?=.*[A-Za-z0-9])/.test(v) || "Uniquement du texte et/ou des chiffres"],
    }
  },
  methods: {
    updateMe() {
      let user = this.$store.getters['auth/userState']
      let payload = {
        id: this.currentId,
        message: this.message,
        userId: user.userId
      };
      console.log(payload)
      this.$store.dispatch("message/updateMessage", payload).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          this.$emit("changeView", "onDisplay");
          this.$refs.updateForm.reset();
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
    typeOfMessage() {
      if (this.onSubmit === "updateMe") {
        this.message = { title: this.title, content: this.content };
      }
    },
    onSubmitMethod(event) {
      if (this.onSubmit === "updateMe") {
        this.updateMe(event);
      }
    },
  },
  mounted() {
    this.typeOfMessage();
  }
};
</script>