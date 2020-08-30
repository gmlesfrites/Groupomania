<template>
  <v-card class="mt-10 mb-5" id="ChatComponent">
    <v-card-title>
      <h3 class="text-justify" style="overflow-wrap: normal"> {{title}} </h3>
    </v-card-title>
    
    <p class="text-justify ml-4" ><small> {{ createdAt }} </small></p>

    <v-divider></v-divider>

    <v-card-text>
      <p class="text-justify">{{ content }}</p>
    </v-card-text>

    <v-card-actions>
      <v-col>
        <AnswerMessage :id="id"/>
        <UpdateMessage :id="id"/>
        <DeleteMessage :id="id" :userId="userId"/>
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
    firstname: String,
    lastname : String,
    messageId: Number, 
    privilege: String
  }
}
</script>
