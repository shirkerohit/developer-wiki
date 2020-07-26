<template>
  <div style="max-height=300px;overflow-y:scroll;overflow-x:hidden;">
    <controls v-on:bindCategory="bindCategory" v-on:search="search"></controls>
    <code>
      <b-table v-if="filtered.length > 0" :items="filtered">
        <template v-slot:cell(url)="data">
          <a target="_blank" v-bind:href="data.item.url">{{data.item.url}}</a>
        </template>
      </b-table>
      <div
        v-if="filtered.length === 0 && searchTerm === ''"
      >Choose Your category & Lets begin the search!</div>
      <div
        v-if="filtered.length === 0 && searchTerm !== ''"
      >Woops! Seems like we need to update our resource list!</div>
    </code>
  </div>
</template>
<script>
import controls from '../components/Controls'
export default {
  name: 'Info',
  components: {
    controls
  },
  data () {
    return {
      filtered: [],
      searchTerm: ''
    }
  },
  methods: {
    bindCategory: function (category) {
      this.filtered = category ? this.getLinksbyCategory(category) : []
    },
    search: function (payload) {
      this.searchTerm = payload[1].toLowerCase()
      const links = this.getLinksbyCategory(payload[0])
      this.filtered = links.filter((link) => {
        if ((link.name.toLowerCase().match(this.searchTerm)) ||
          (link.description.toLowerCase().match(this.searchTerm))
        ) {
          return link
        }
      })
      if (this.filtered.length === 0) {
        this.filtered = []
      }
    },
    getLinksbyCategory: function (category) {
      category = category.toLowerCase()
      const cat = this.$store.state[category] ?? []
      return JSON.parse(JSON.stringify(cat))
    }
  }
}
</script>
