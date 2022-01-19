<template>
  <div>
    <nav-bar />
    <section class="py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Client: {{ item.client }}</h4>
            <title-bar />
          </div>
        </div>
        <div class="row py-4 justify-content-center">
          <div
            id="lightgallery"
            class="row col-sm-12 col-md-9 justify-content-center"
          >
            <div
              v-for="number in item.image_num"
              :key="number"
              class="col-md-4 col-sm-6 mb-3"
            >
              <div id="lightgallery" class="img-thumbnail">
                <a
                  :href="
                    require('/static/projects/' +
                      item.category +
                      '/' +
                      item.subcategory +
                      '/' +
                      item.folder +
                      '/r-(' +
                      number +
                      ').jpg')
                  "
                >
                  <img
                    :src="
                      require('static/projects/' +
                        item.category +
                        '/' +
                        item.subcategory +
                        '/' +
                        item.folder +
                        '/r-(' +
                        number +
                        ').jpg')
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>
<script>
import imageDataList from '~/static/projects/imageData.json'
export default {
  name: 'ImageView',
  data() {
    return {
      item: imageDataList.imagesList[parseInt(this.$route.params.slug)],
      id: parseInt(this.$route.params.slug),
    }
  },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el, {
      selector: 'a',
    })
  },
}
</script>
<style scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>
