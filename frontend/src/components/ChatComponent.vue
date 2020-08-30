<template>
  <v-card class="mt-10 mb-5" id="ChatComponent">
    <v-card-title>
      <h3 class="text-justify" style="overflow-wrap: normal"> {{title}} </h3>
    </v-card-title>
    
    <p class="text-justify ml-4" ><small> {{ createdAt }} </small></p>

    <!-- TODO virer tout ça -->
    <p>utilisateur créateur {{userId}}</p>
    <p>utilisateur maintenant {{this.$store.getters["auth/userState"].userId}}</p>
    <p>modérateur ?{{this.$store.getters["auth/userState"].privilege}}</p>

    <v-divider></v-divider>

    <v-card-text>
      <p class="text-justify">{{ content }}</p>
    </v-card-text>

    <v-card-actions>
      <v-col>
        <AnswerMessage :id="id"/>
        <UpdateMessage :id="id" v-if="show"/>
        <DeleteMessage :id="id" v-if="show"/>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import AnswerMessage from '../components/AnswerMessage'
import UpdateMessage from '../components/UpdateMessage'
import DeleteMessage from '../components/DeleteMessage'

export default {
  name: 'ChatComponent',

  components: {
    AnswerMessage,
    UpdateMessage,
    DeleteMessage
  }, 
  props: {
    title: String,
    content: String,
    id: Number,
    userId: Number,
    createdAt: String,
    firstname: String,
    lastname : String,
    messageId: Number, 
    privilege: String
  },
  data() {
    return {
      show:false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isAdmin() {
      if (this.$store.state.auth.user.privilege === 'modérateur') {
        return true
      } return false
    },
  },
  methods : {
    showModal(userInit, currentUser, isAdmin) {
      if (userInit != currentUser || isAdmin ) {
        this.show = false
      } else {
        this.show = true 
      }
    }
  }
}
</script>
