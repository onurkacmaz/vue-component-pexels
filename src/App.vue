<template>
  <div id="app">
    <div class="container-fluid mt-4">
      <input type="text" class="form-control" placeholder="Bir şeyler yaz.." v-model="keyword">
      <Photos :keyword="keyword" :perPage="80" :page="1"></Photos>
    </div>
  </div>
</template>

<script>
import Photos from '@/components/Photos.vue'
export default {
  name: 'App',
  components: {
    Photos
  },
  data() {
    return {
      keyword: null
    }
  },
}
</script>
