 <template>
 <v-app>
    <Navigation/>
    <Hello/>
    <Footer/>
 </v-app>

</template>


<script>
  import Navigation from '../components/Navigation'
  import Hello from '../components/Hello'
  import Footer from "../components/Footer";

  export default {
      name: 'app',
      components: {
        Navigation,
        Hello,
        Footer
      }
    }
</script>