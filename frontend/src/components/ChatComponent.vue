<template>
  <v-container> 
    <!-- :outlined="outlinedPost" :class="classPost"  -->
    <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5" :id="id" v-show="view === 'onDisplay' || view === 'onAnswer'">
      <v-card-title>
        <h3 class="text-justify"> {{title}} </h3>
        <span class="text-justify" v-if="isAnswer()"> {{ date }} </span>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <p class="text-justify">{{ content }}</p>
        <p class="text-justify"> {{firstname}} {{lastname}} </p>
      </v-card-text>


      <v-card-actions>
        <v-col>
          <AnswerMessage/>
          <UpdateMessage/>
          <DeleteMessage/>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
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
    onUpdateContent: String
  },
  data() {
    return {
      view: "onDisplay",
      currentId: null,
      message: {
        title: this.title,
        content: this.content
      },
      formMethod: { update: "updateMessage", answer: "answerMessage" }
    };
  },
  computed: {
   
  },
  methods: {
    isAnswer() {
      if (this.messageId === null || this.id === undefined) {
        return false;
      } else {
        return true;
      }
    },
    changeView(View) {
      this.view = View;
    },
    answerMessage() {
      this.view = "onAnswer";
      this.currentId = this.id;
    },
    updateMessage() {
      this.view = "onUpdate";
      this.currentId = this.id;
    },
  }
}
</script>
