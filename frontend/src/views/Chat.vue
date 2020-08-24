<template>
  <v-container>
    <ModalMessage/>
    <!-- <ChatMain/> -->
    <v-col align="center" justify="center">
      <v-card class="elevation-12 pb-7">
        <v-toolbar color="rgb(209,81,90)">
          <v-toolbar-title>
            Les dernières publications
          </v-toolbar-title>
        </v-toolbar>

        <v-container>
           
           
          <ChatComponent v-for="(paginedPost, index) in paginedPosts" :key="index" :title="paginedPost.title" :content="paginedPost.content" :id="paginedPost.id" :userId="paginedPost.userId" :createdAt="paginedPost.createAt" :currentUser="currentUser.id"  :messageId="paginedPost.messageId" />
            <v-card v-for="(answer, index) in answers" :key="index">
              <chatComponent v-if="answer.messageId === paginedPost.id" :title="answer.title" :content="answer.content" :id="answer.id" :userId="answer.userId" :createdAt="answer.createdAt" :currentUser="currentUser.id" :messageId="answer.messageId" />    
          </v-card>
        </v-container>

        <OtherMessage/>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
  import ModalMessage from "../components/ModalMessage"
  import ChatComponent from '../components/ChatComponent'
  import OtherMessage from '../components/OtherMessage'
  
  export default {
    name:  'Chat',
    components: {
      ModalMessage,
      OtherMessage,
      ChatComponent,
    },
    data() {
      return {
        showForm: false,
        // formMethod: "postMyMessage",
      };
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      isAdmin() {
        if (this.$store.state.auth.user.privilege === 'admin') {
          return true
        } else {
          return false
        }
      },
      contents() {
        const allMessages = this.$store.state.message.messages;
        const contents = [];
        for (let i = 0; i < allMessages.length; i++) {
          const content = allMessages[i];
          if (content.messageId == null) {
            content.push(content);
          }
        }
        return contents;
      },
      answers() {
        const allMessages = this.$store.state.message.messages;
        const answers = [];
        for (let i = 0; i < allMessages.length; i++) {
          const answer = allMessages[i];
          if (answer.messageId != null) {
            answers.push(answer);
          }
        }
        answers.reverse();
        return answers;
      }
    },
    methods: {

    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push("/login");
      }
      this.$store.dispatch("message/getAllMessages");
    }
  }
</script>