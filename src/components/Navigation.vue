<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <router-link
              v-on:click.native="linkClick"
              data-name="home"
              to="/"
              class="nav-link"
              v-bind:class="selectedLink =='home' ? 'active' :''"
            >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-on:click.native="linkClick"
              data-name="contribute"
              to="/contribute"
              v-bind:class="selectedLink =='contribute' ? 'active' :''"
              class="nav-link"
            >Contribute Links</router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-on:click.native="linkClick"
              data-name="about"
              to="/about"
              v-bind:class="selectedLink =='about' ? 'active' :''"
              class="nav-link"
            >About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      selectedLink: 'home'
    }
  },
  methods: {
    linkClick: function (event) {
      this.selectedLink = event.target.getAttribute('data-name')
    }
  }
}
</script>
