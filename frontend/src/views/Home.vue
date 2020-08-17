<template>
<v-app>
  <Navigation/>
  <Hello/>
  <Footer/>
</v-app>
</template>

<script>

import Navigation from "../components/Navigation";
import Hello from "../components/Hello";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Navigation,
    Hello,
    Footer
  } ,
  // data: function() {
  //   return { message: "Page d'accueil" };
  // }
};
</script>

