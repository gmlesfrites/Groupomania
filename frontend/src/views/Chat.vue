<template>
  <v-container>
    <Moderator/>
    <ModalMessage/>
    <!-- <ChatMain/> -->
    <v-col align="center" justify="center">
      <v-card class="elevation-12 pb-7">
        <v-toolbar color="rgb(209,81,90)">
          <v-toolbar-title>
            Les dernières publications
          </v-toolbar-title>
        </v-toolbar>

        <v-card>
          <ChatComponent v-for="(content, mess) in contents" :key="mess" :title="content.title" :content="content.content" :id="content.id" :userId="currentUser.id" :createdAt="content.date" :currentUser="currentUser.id"  :messageId="content.messageId" />
            <v-card v-for="(answer, reply) in answers" :key="reply">  
              <ChatComponent v-if="answer.MessageId === content.id" :title="content.title" :content="content.content" :id="content.id" :userId="currentUser.id" :createdAt="content.date" :messageId="answer.id" />    
            </v-card>
        </v-card>

      </v-card>
    </v-col>
  </v-container>
</template>

<script>
  import Moderator from '../components/Moderator'
  import ModalMessage from "../components/ModalMessage"
  import ChatComponent from '../components/ChatComponent'

  
  export default {
    name:  'Chat',
    components: {
      Moderator,
      ModalMessage,
      // FormMessage,
      ChatComponent,
    },
    data() {
      return {
        showForm: false,
      };
    },
    computed: {
      currentUser() {
        return this.$store.getters["auth/userState"];
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
            contents.push(content);
          }
        }
        return contents;
      },
      user() {
        const user = this.$store.state.auth.user;
        return user
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
    },
    
  }
</script>