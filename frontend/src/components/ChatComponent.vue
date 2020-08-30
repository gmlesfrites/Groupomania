<template>
  <v-card class="mt-10 mb-5" id="ChatComponent">
    <v-card-title>
      <h3 class="text-justify" style="overflow-wrap: normal"> {{title}} </h3>
    </v-card-title>
    
    <p class="text-justify ml-4" ><small> {{ createdAt }} </small></p>

    <!-- TODO virer tout ça -->
    <!-- <p>utilisateur créateur {{userId}} // utilisateur maintenant {{currentUser}} // modérateur ?{{isAdmin}}</p> -->

    <v-divider></v-divider>

    <v-card-text>
      <p class="text-justify">{{ content }}</p>
    </v-card-text>

    <v-card-actions>
      <v-col>
        <AnswerMessage :id="id" />
        <UpdateMessage :id="id" :userId="userId" :currentUser="currentUser" />
        <DeleteMessage :id="id" :userId="userId" :currentUser="currentUser" :isAdmin="isAdmin"/>
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
  methods : {
    
  }
}
</script>
