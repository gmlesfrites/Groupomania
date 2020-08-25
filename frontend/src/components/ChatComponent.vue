<template>
  <v-container> 
    <!-- :outlined="outlinedPost" :class="classPost"  -->
    <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5" :id="messageId" v-show="view === 'onDisplay' || view === 'onAnswer'">
      <v-card-title>
        <h3 class="text-justify"> {{title}} </h3>
        <span class="text-justify" v-if="isAnswer()"> {{ date }} </span>
      </v-card-title>

      <v-menu >
          <v-btn v-for="(menuItem, menu) in menuItems" :key="menu">
            <v-btn-title>{{ menuItem.title }}</v-btn-title>
          </v-btn>
      </v-menu>

      <v-divider></v-divider>

      <v-card-text>
        <p class="text-justify">{{ content }}</p>
        <p class="text-justify"> {{firstname}} {{lastname}} </p>
      </v-card-text>



      <OtherMessage v-if="view ==='onAnswer'" :title="title" :content="content" 
        :id="id" :userId="userId" :onSubmit="formMethod.answer"
        :messageId="messageId" :currentId="currentId" @changeView="changeView" />
    </v-card>

      <OtherMessage v-if="view ==='onUpdate'" :title="title" :content="content"       :id="id" :userId="userId" :onSubmit="formMethod.update" 
        :messageId="messageId" :currentId="currentId" @changeView="changeView" />



  </v-container>
</template>

<script>
import OtherMessage from '../components/OtherMessage'

export default {
  name: 'ChatComponent',

  components: {
    OtherMessage,
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
    menuItems() {
      return [
        {
          title: "Modifier",
          click: this.updateMessage,
          show:
            this.userId === this.currentUser 
        },
        {
          title: "Répondre",
          click: this.answerMessage,
          show: this.isAnswer() === false
        },
        {
          title: "Supprimer",
          click: this.deleteMessage,
          show:
            this.userId === this.currentUser
        },
        {
          title: "Supprimer (Mod)",
          click: this.deleteAdminMessage,
          show:
            this.$store.state.auth.user.privilege === "admin"
        }
      ];
    },
  },
  // outlinedPost() {
  //   if (this.isAnswer()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },
  // classPost() {
  //   if (this.isAnswer()) {
  //     return "post post__answer";
  //   } else {
  //     return "post post__origin";
  //   }
  // },
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
    deleteMessage() {
      let payload = this.id;
      this.$store.dispatch("message/deleteMessage", payload).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
          this.$emit("deleteFeedback", data.message);
          console.log(data);
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
