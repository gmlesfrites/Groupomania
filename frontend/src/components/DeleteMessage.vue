<template >
  <v-btn color="rgb(209,81,90)" class="ma-3 "  @click="confirmDelete" id="DeleteMessage" >
    Supprimer
  </v-btn>
</template>

<script>
// import Message from '../models/message'


export default {
  name : 'DeleteMessage',
  props: {
    id: Number,
    userId: Number,
    currentId : Number
  },
  data() {
    return {
      feedbacks: [], // informations de suppression
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.userId;
    },
    isAdmin() {
      if (this.$store.state.auth.user.privilege === 'Modérateur') {
        return true
      } return false
    },
  },
  methods: {
    confirmDelete() {
      if (window.confirm("Cette action n'est pas modifiable après confirmation ! Votre message (ainsi que les éventuelles réponses) va être supprimé.")) {

        if (this.$store.state.auth.user.privilege === 'Modérateur') {
          this.deleteAdminMessage()
        } else {
          this.deleteMessage()
        }
        
      }
    },
    deleteMessage() {
      const userId = this.$store.getters["auth/userState"].userId
     
      this.$store.dispatch("message/deleteMessage", {userId, id:this.id}).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          window.alert('Votre message a bien été supprimé !')
        },
        error => {
          console.log(error);
          this.feedbacks.push(error.response && error.response.data) ||
            error.message ||
            error.toString();
          window.alert("Vous ne pouvez pas supprimer un message dont vous n'êtes pas le rédacteur ! ")
        }
      );
    },
    deleteAdminMessage() {
      const userId = this.$store.getters["auth/userState"].userId

      this.$store.dispatch("message/deleteAdminMessage", {userId, id:this.id}).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit(data.message);
          window.alert('Le message sélectionné a bien été supprimé !')
        },
        error => {
          console.log(error)
        }
      );
    }
  },

}
</script>