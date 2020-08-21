<template>
  <v-container>  



balise post
 
 v-for="(paginedPost, index) in paginedPosts"
          :key="index"
          :title="paginedPost.title"
          :content="paginedPost.content"
          :messageId="paginedPost.idMESSAGES"
          :userId="paginedPost.idUSERS"
          :createdAt="paginedPost.created_at"
          :likes=" paginedPost.likes"
          :currentUser="currentUser.userId"
          :messageParent="paginedPost.message_parent"
          :username="paginedPost.username"
          @deleteFeedback="setFeedback"
          @modifyFeedback="setFeedback"
          @replyFeedback="setFeedback"


balise réponse    v-for="(reply, index) in replies" :key="index"

v-if="reply.message_parent === paginedPost.idMESSAGES"
              :title="reply.title"
              :content="reply.content"
              :messageId="reply.idMESSAGES"
              :userId="reply.idUSERS"
              :createdAt="reply.created_at"
              :likes="reply.likes"
              :myLikes="reply.myLikes"
              :currentUser="currentUser.userId"
              :messageParent="reply.messageId"
              :username="reply.username"
              @deleteFeedback="setFeedback"
              @modifyFeedback="setFeedback"

    

        <!-- <button @click="nextPosts" v-if="hasNextPosts">Next</button> -->

          
  </v-container>
</template>

<script>
// import ModalMessage from "../components/ModalMessage";

export default {
name: "ChatMain",
  components: {

  },
  data() {
    return {
      showForm: false,
      feedbacks: null,
      formMethod: "postMyMessage",
      wallSize: 10,
      overlay: false
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
    posts() {
      const allMessages = this.$store.state.message.messages;
      const posts = [];
      for (let i = 0; i < allMessages.length; i++) {
        const post = allMessages[i];
        if (post.messageId == null) {
          posts.push(post);
        }
      }
      return posts;
    },
    paginedPosts() {
      return this.posts.slice(0, this.wallSize);
    },
    hasNextPosts() {
      return this.wallSize < this.posts.length;
    },
    replies() {
      const allMessages = this.$store.state.message.messages;
      const replies = [];
      for (let i = 0; i < allMessages.length; i++) {
        const post = allMessages[i];
        if (post.messageId != null) {
          replies.push(post);
        }
      }
      replies.reverse();
      return replies;
    }
  },
  methods: {
    scrollUp() {
      window.scrollTo(0, 0);
    },
    toggleForm() {
      if (this.showForm === false) {
        this.showForm = true;
      } else {
        this.showForm = false;
      }
    },
    setFeedback(postFeedback) {
      this.feedbacks = postFeedback;
      this.showForm = false;
      this.overlay = true;
    },
    nextPosts() {
      setTimeout(() => {
        this.wallSize += 5;
      }, 1000);
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    this.$store.dispatch("message/getAllMessages");
  }
};
</script>
