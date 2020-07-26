<template>
  <div>
    <b-form inline class="mt-4 mb-4">
      <b-form-select
        v-model="selected"
        size="sm"
        :options="categories"
        class="form-control mb-2 pull-right"
        v-on:change="bindCategory()"
      ></b-form-select>
      <div v-if="selected != null " class="col-auto">
        <b-form-input
          size="sm"
          v-on:input="search()"
          v-model="searchTerm"
          class="form-control mb-2"
          id="searchTerm"
          placeholder="Search for"
        />
      </div>
      <div class="mb-1 mt-1" v-if="searchTerm">
        Looking for
        <b>"{{this.searchTerm}}"</b>
      </div>
    </b-form>
  </div>
</template>
<script>
import categories from '../../src/data/categories.json'
export default {
  name: 'controls',
  store: {
    categories
  },
  data () {
    return {
      selected: null,
      searchTerm: ''
    }
  },
  computed: {
    categories: function () {
      const cat = this.$store.categories.map((val) => {
        return { value: val.name, text: val.name }
      })
      cat.unshift({ value: null, text: 'Please select Category' })
      return cat
    }
  },
  methods: {
    search: function () {
      //   if (this.searchTerm.length > 2) {
      this.$emit('search', [this.selected, this.searchTerm])
      //   }
    },
    bindCategory: function () {
      this.$emit('bindCategory', this.selected)
    }
  }
}
</script>
