<template>
 <v-app>
  <Navigation/>
  <LoginComponent/>
  <Footer/>
</v-app>

</template>


<script>
import Navigation from '../components/Navigation'
import LoginComponent from '../components/LoginComponent'
import Footer from "../components/Footer";

export default {
    name: 'app',
    components: {
      Navigation,
      LoginComponent,
      Footer
    }
  }
</script>