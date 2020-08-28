<template >
  <v-btn color="rgb(209,81,90)" class="ma-3 " @click="deleteMessage" id="DeleteMessage" >
    Supprimer
  </v-btn>
</template>

<script>
// import Message from '../models/message'


export default {
  name : 'DeleteMessage',
  data() {
    return {
      // message: new Message("", "")
    }
  },
  methods: {
    deleteMessage(id) {
      const userId = this.$store.getters["auth/userState"].userId
      
      this.$store.dispatch("message/deleteMessage", {userId, id}).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          window.alert('Votre message a bien été supprimé !')
        },
        error => {
          console.log(error);
        }
      );
    },
    deleteAdminMessage() {
      let payload = this.id;
      this.$store.dispatch("message/deleteAdminMessage", payload).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit("deleteFeedback", data.message);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  },

}
</script>