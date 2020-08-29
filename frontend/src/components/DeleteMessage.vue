<template >
  <v-btn color="rgb(209,81,90)" class="ma-3 " @click="deleteMessage" id="DeleteMessage" >
    Supprimer
  </v-btn>
</template>

<script>
// import Message from '../models/message'


export default {
  name : 'DeleteMessage',

  methods: {
    deleteMessage() {
      const userId = this.$store.getters["auth/userState"].userId
      const id= this.id
      console.log(id);
      
      this.$store.dispatch("message/deleteMessage", {userId, message:{ id:this.id}}).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          window.alert('Votre message a bien été supprimé !')
        },
        error => {
          console.log(error);
          window.alert("Vous ne pouvez pas supprimer un message dont vous n'êtes pas le rédacteur ! ")
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