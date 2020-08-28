<template>
  <v-card class="mt-10 mb-5" id="ChatComponent">
    <!-- v-show="view === 'onDisplay' || view === 'onAnswer'" -->
    <!-- :options="$store.state.message" :value="$store.state.activeMessage" -->
    <v-card-title>
      <h3 class="text-justify" style="overflow-wrap: normal"> {{title}} </h3>
    </v-card-title>
    
    <p class="text-justify ml-4" ><small> {{ createdAt }} </small></p>
    <p>message identifiant {{id}}</p>

    <v-divider></v-divider>

    <v-card-text>
      <p class="text-justify">{{ content }}</p>
    </v-card-text>

    <v-card-actions>
      <v-col>
        <AnswerMessage :id="id"/>
        <UpdateMessage :id="id"/>
        <DeleteMessage :id="id"/>
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
    currentUser: Number,
    firstname: String,
    lastname : String,
    messageId: Number,
    onUpdateTitle: String,
    onUpdateContent: String,
  },
  data() {
    return {
      // view: "onDisplay",
      // message: {
      //   title: this.title,
      //   content: this.content
      // },
      // formMethod: { update: "updateMessage", answer: "answerMessage" }
    };
  },
  methods: {
    isAnswer() {
      if (this.messageId === null || this.id === undefined) {
        return false;
      } else {
        return true;
      }
    },
    // changeView(View) {
    //   this.view = View;
    // },
    // answerMessage() {
    //   this.view = "onAnswer";
    //   this.currentId = this.id;
    // },
    // updateMessage() {
    //   this.view = "onUpdate";
    //   this.currentId = this.id;
    // },
    // setActiveMessage(id) {
    //   this.$store.commit('setActiveMessage', id)
    // },
  },
  // mutations: {
  //   setActiveMessage(state, message) {
  //     state.activeMessage = message
  //   }
  // },
}
</script>
