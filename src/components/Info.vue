<template>
  <div style="max-height=300px;overflow-y:scroll;overflow-x:hidden;">
    <form action="#" class="form-row align-item-center">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInput">Name</label>
        <input
          type="text"
          v-on:input="search()"
          v-model="searchTerm"
          class="form-control mb-2"
          id="inlineFormInput"
          placeholder="Search for"
        />
      </div>
    </form>
    <code>
      <b-table :items="filtered">
        <template v-slot:cell(url)="data">
          <a target="_blank" v-bind:href="data.item.url">{{data.item.url}}</a>
        </template>
      </b-table>
    </code>
  </div>
</template>
<script>

export default {
  name: 'Info',
  data () {
    return {
      filtered: [],
      searchTerm: ''
    }
  },
  computed: {
    alllinks () {
      return this.$store.state.links
    }
  },
  mounted: function () {
    this.filtered = this.alllinks
  },
  methods: {
    search: function () {
      const searchTerm = this.searchTerm.toLowerCase()

      if (searchTerm === '') {
        this.filtered = this.alllinks
        return
      }

      this.filtered = this.alllinks.filter(function (link) {
        if ((link.name.toLowerCase().match(searchTerm)) ||
          (link.description.toLowerCase().match(searchTerm))
        ) {
          return link
        }
      })
      if (this.filtered === []) {
        this.filtered = this.alllinks
      }
    }
  }
}
</script>
