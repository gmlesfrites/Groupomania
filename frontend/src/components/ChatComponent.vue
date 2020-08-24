<template>
  <v-container> 
    <!-- Message initial -->
    <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
      <v-card-text v-for="message in messages" :key="message">
        <!-- {{message.title}} -->
        <h3 class="text-justify"> </h3> 

        <!-- {{message.userId}}  -->
        <p class="text-justify">  </p>

        <v-divider></v-divider>

        <v-row class="ml-1 mt-4">

          <!-- {{message.createdAt}} -->
          <p class="text-justify">  </p>

          <!-- {{message.content}} -->
          <p class="text-justify">   </p>
        </v-row>
      </v-card-text>  
      <!-- si réponse -->
      <v-card style="border: 1px grey dotted" width="90%" class="mt-10 mb-5">
        <v-card-text >
          <!-- {{message.title}} -->
          <h3 class="text-justify">  </h3> 

          <!-- {{message.userId}}  -->
          <p class="text-justify">   </p>

          <v-divider></v-divider>

          <v-row class="ml-1 mt-4">

            <!-- {{message.createdAt}} -->
            <p class="text-justify">   </p>

            <!-- {{message.content}} -->
            <p class="text-justify">   </p>
          </v-row>
        </v-card-text> 
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
// import OtherMessage from '../components/OtherMessage'

export default {
  name: 'ChatComponent',

  components: {
    // OtherMessage,
  }, 

}
</script>
