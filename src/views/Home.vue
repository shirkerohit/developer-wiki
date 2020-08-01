<template>
  <div class="home">
    <Header></Header>
    <Navigation></Navigation>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
export default {
  name: 'Home',
  components: {
    Header, Footer, Navigation
  }
}
</script>
