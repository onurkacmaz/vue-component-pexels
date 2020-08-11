<template>
  <div>
    <Pagination :perPage="photos.per_page" :page="photos.page" :total="photos.total_results"></Pagination>
    <div class="row">
      <Photo v-for="photo in photos.photos" :key="photo.id" :photo="photo"></Photo>
    </div>
  </div>
</template>

<script>
import Photo from "@/components/Photo";
import Pagination from "@/components/Pagination";
export default {
  name: "Photos",
  props:{
    keyword: String,
    perPage: Number,
    page: Number
  },
  components: {
    Photo,
    Pagination
  },
  data(){
    return {
      photos: {}
    }
  },
  methods: {
    getPhotos: function (keyword, perPage = 15, page = 1) {
      let query = "/v1/search?query=" + keyword + "&per_page=" + perPage + "&page=" + page;
      this.$http.get(query)
          .then(response => (this.photos = response.data))
          .catch(error => {
            this.errors.push(error);
          });
    },
  },
  mounted() {
    if (this.$props.keyword != null) {
      this.getPhotos(this.$props.keyword, 80, 1)
    }
  },
  watch: {
    keyword: function (val) {
      this.getPhotos(val, 80, 1);
    }
  }
}
</script>