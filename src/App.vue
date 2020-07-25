<template>
  <div id="app">
    <div class="container-fluid">
      <Header></Header>
      <div class="row">
        <div class="col-12">
          <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </div>
          <router-view />-->
          <Info></Info>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'
import Info from '../src/components/Info.vue'
export default {
  components: { Header, Footer, Info }
}
</script>
<style scoped>
html,
body {
  height: 100%;
}
</style>
