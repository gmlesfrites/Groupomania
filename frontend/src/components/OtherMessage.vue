<template>

    <v-form ref="form" v-model="valid">
      <v-container>


        
      </v-container>
    </v-form>

</template>

<script>
import Message from "../models/message";

export default {
  name: "OtherMessage",
  
  props: {
    onSubmit: String,
    title: String,
    content: String,
    userId: Number,
    id: Number,
    messageId: Number,
    currentId: Number
  },
  data() {
    return {
      message: "",
      fromMessage: this.messageId,
      valid: false,
      contentRules: [v => !!v || "Votre message est vide !"]
    };
  },
  computed: {
    isAnswer() {
      if (this.messageId === null || this.messageId === undefined) {
        return false;
      } else {
        return true;
      }
    },
    titleRules() {
      if (
        this.onSubmit != "AnswerMessage" &&
        this.isAnswer === false &&
        this.messageId === undefined
      ) {
        return [v => !!v || "Il manque un titre"];
      } else {
        return [];
      }
    }
  },
  methods: {
    typeOfMessage() {
      if (this.onSubmit === "updateMessage") {
        this.message = { title: this.title, content: this.content };
      }

      if (this.onSubmit === "answerMessage") {
        this.message = new Message("");
      }
    },
    onSubmitMethod(event) {
      if (this.onSubmit === "updateMessage") {
        this.updateMessage(event);
      }

      if (this.onSubmit === "answerMessage") {
        this.answerMessage(event);
      }
    },
    UpdateMessage() {
      let payload = {
        id: this.currentId,
        message: this.message
      };
      this.$store.dispatch("message/updateMessage", payload).then(
        data => {
          this.$store.dispatch("message/getAllMessages");
        //   this.$emit("modifyFeedback", data.message);
        //   this.$emit("changeView", "onDisplay");
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
    AnswerMessage() {
      let payload = {
        id: this.currentId,
        message: this.message
      };
      this.$store.dispatch("message/answerMessage", payload).then(
        data => {
          this.$store.dispatch("message/getAllMessage");
          this.$emit("changeView", "onDisplay");
          this.$emit("replyFeedback", data.message);
          this.$refs.form.reset();
          this.message = new Message("");
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
    onCancelMethod () {
      if (this.onSubmit === "sendMe") {
        this.$refs.form.reset()
        this.$emit("toggleForm")
      }
      if (this.onSubmit === "updateMessage") {
        this.message = { title: this.title, content: this.content }
        this.$emit("changeView", "onDisplay")
      }
      if (this.onSubmit === "answerMessage") {
        this.$refs.form.reset()
        this.$emit("changeView", "onDisplay")
      }
    }
  },
  mounted() {
    this.typeOfMessage();
  }
};
</script>