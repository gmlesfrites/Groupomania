<template>
  <v-app>
      <Navigation/>
      <ChatComponent/>
      <Footer/>
  </v-app>
</template>

<script>
  import Navigation from "../components/Navigation";
  import ChatComponent from "../components/ChatComponent";
  import Footer from "../components/Footer";

export default {
    name: 'app',
    components: {
      Navigation,
      ChatComponent,
      Footer
    }
  }
</script>