<template>
 <v-app>
  <Navigation/>
  <SignupComponent/>
  <Footer/>
</v-app>

</template>


<script>
import Navigation from '../components/Navigation'
import SignupComponent from '../components/SignupComponent'
import Footer from "../components/Footer";

export default {
    name: 'app',
    components: {
      Navigation,
      SignupComponent,
      Footer
    }
  }
</script>