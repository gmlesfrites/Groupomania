<template>
  
  <v-container>
    <ModalMessage/>
    <!-- <ChatMain/> -->
      <v-col align="center" justify="center">
        <v-card class="elevation-12 pb-7">
          <v-toolbar color="#ffd7d7">
            <v-toolbar-title>
              Les dernières publications
            </v-toolbar-title>
          </v-toolbar>

          <v-container >
            <!-- Message initial -->
            <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
              
              <!-- si réponse -->
              <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
                message réponse
              </v-card>
            </v-card>
          </v-container>
        
        </v-card>
      </v-col>

  </v-container>

    

</template>

<script>
  import ModalMessage from "../components/ModalMessage"

  export default {
    name:  'app',
    components: {
      ModalMessage,
    },
    // data() {
    //     return {
    //       showForm: false,
    //       feedbacks: null,
    //       wallSize: 10,
    //       overlay: false
    //     },
    // },
    // computed: {
    //   currentUser() {
    //     return this.$store.state.auth.user;
    //   },
    //   isAdmin() {
    //     if (this.$store.state.auth.user.privilege === 'admin') {
    //       return true
    //     } else {
    //       return false
    //     }
    //   },
    //   posts() {
    //     const allMessages = this.$store.state.message.messages;
    //     const posts = [];
    //     for (let i = 0; i < allMessages.length; i++) {
    //       const post = allMessages[i];
    //       if (post.messageId == null) {
    //         posts.push(post);
    //       }
    //     }
    //     return posts;
    //   },
    //   paginedPosts() {
    //     return this.posts.slice(0, this.wallSize);
    //   },
    //   hasNextPosts() {
    //     return this.wallSize < this.posts.length;
    //   },
    //   // replies() {
    //   //   const allMessages = this.$store.state.message.messages;
    //   //   const replies = [];
    //   //   for (let i = 0; i <script allMessages.length; i++) {
    //   //     const post = allMessages[i];
    //   //     if (post.messageId != null) {
    //   //       replies.push(post);
    //   //     }
    //   //   }
    //   //   replies.reverse();
    //   //   return replies;
    //   // }
    // },
    // methods: {
    //   scrollUp() {
    //     window.scrollTo(0, 0);
    //   },
    //   setFeedback(postFeedback) {
    //     this.feedbacks = postFeedback;
    //     this.showForm = false;
    //     this.overlay = true;
    //   },
    //   nextPosts() {
    //     setTimeout(() => {
    //       this.wallSize += 5;
    //     }, 1000);
    //   }
    // },
    // mounted() {
    //   if (!this.currentUser) {
    //     this.$router.push("/login");
    //   }
    //   this.$store.dispatch("message/getAllMessages");
    }
    
  </script>