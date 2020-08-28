<template>
  <v-container id="Chat">
    <Moderator v-if="isAdmin"/>
    <!-- <Moderator/> -->
    <ModalMessage/>
    <v-col align="center" justify="center">
      <v-card class="elevation-12 pb-7" >
        <v-toolbar color="rgb(209,81,90)">
          <v-toolbar-title>
            Les dernières publications
          </v-toolbar-title>
        </v-toolbar>
        
        <v-card class="px-2 py-2 mx-2 my-2" width="95%" v-for="(content, index) in contents" :key="index" style="border: 1px grey dotted">
          <ChatComponent  :title="content.title" :content="content.content" :createdAt="content.date" :userId="content.userId"  :id="content.id" :messageId="content.messageId"/>
            <v-card  width="90%" v-for="(answer, index) in answers" :key="index" >  
              <ChatComponent  v-if="answer.messageId === content.id" :title="answer.title" :content="answer.content" :id="answer.id" :userId="answer.userId" :messageId="answer.messageId" />    
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
      ChatComponent,
    },
    data() {
      return {
        showForm: false,
        message: {id:'id'}
      };
    },
    computed: {
      currentUser() {
        return this.$store.getters["auth/userState"];
      },

      isAdmin() {
        if (this.$store.state.auth.user.privilege == 'Modérateur') {
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
          const content = allMessages[i];
          if (content.messageId != null) {
            answers.push(content);
          }
        }
        answers.reverse();
        return answers;
      }
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push("/login");
      }
      this.$store.dispatch("message/getAllMessages");
    },
    
  }
</script>