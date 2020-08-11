<template>
  <div class="pagination mt-4 col-12">
    <template v-if="Math.ceil(total / perPage) > 50">
      <a @click="getPage(page-1)" class="pagination-item border p-2 mb-4" :key="page-1">Önceki</a>
      <a @click="getPage(page+1)" class="pagination-item border p-2 mb-4" :key="page+1">Sonraki</a>
    </template>
    <template v-else>
      <a @click="getPage(pageItem)" :class="page === pageItem ? 'active' : null" class="pagination-item border p-2 mb-4"
         v-for="pageItem in Math.ceil(total / perPage)" :key="pageItem">{{ pageItem }}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      isLoading: 0,
      errors: null,
    }
  },
  props: {
    perPage: Number,
    page: Number,
    total: Number,
  },
  methods: {
    getPage: function (page) {
      this.isLoading = true;
      let query = "/v1/search?query=" + this.$parent.keyword + "&per_page=" + 80 + "&page=" + page;
      this.$http.get(query)
          .then(response => (this.$parent.photos = response.data))
          .catch(error => {
            this.errors.push(error);
          });
    },
  }
}
</script>

<style scoped>
.active {
  background: #ccc;
}
</style>