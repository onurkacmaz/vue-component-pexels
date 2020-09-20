<template>
  <div class="col-sm-12 col-md-2">
    <div class="card mb-4">
      <img class="card-img-top img-fluid" :src="photo.src.tiny" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ photo.photographer }}</h5>
        <a target="_blank" :href="photo.url" class="btn btn-outline-primary col-12 mb-2">Fotoğrafa Git</a>
        <a target="_blank" :href="photo.photographer_url" class="btn btn-outline-secondary col-12">Fotoğrafçıya Git</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: Object
  }
}
</script>