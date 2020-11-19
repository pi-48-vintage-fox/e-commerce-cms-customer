<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
