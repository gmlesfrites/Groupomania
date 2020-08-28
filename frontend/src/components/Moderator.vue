<template>
<v-container>
  <v-toolbar color="rgb(209,81,90)">
    <v-toolbar-title> Modération </v-toolbar-title>
  </v-toolbar>

  <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>

  <v-list v-if="show">
    <v-card v-for="(content, index) in contents" :key="index">
      <v-list-item :key="content.userId"> {{content.userId}}</v-list-item>
      <v-list-item-content>
        <v-list-item-title >{{content.title}}</v-list-item-title>
        <v-list-item-message>{{content.content}}</v-list-item-message>
      </v-list-item-content>
    </v-card>
  </v-list>
</v-container>


</template>

<script>
  export default {
    name: 'Moderator',
    data() {
        show: false
    },
    computed: {
      messages() {
        const allMessages = this.$store.state.message.messages;
        const messages = [];
        for (let i = 0; i < allMessages.length; i++) {
         const message = allMessages[i];
          if (allMessages[i].messageId === true) {
            allMessages[i].title = "Remarque";
          }
        messages.push(message);
      }
      return messages;
      }
    }, 
    contents() {
      return this.messages
    },
    methods: {
      toggle() {
        if (this.show === false) {
          this.show = true;
        } else {
          this.show = false
        }
      }
    }
  }
</script>