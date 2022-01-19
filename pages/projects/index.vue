<template>
  <div>
    <nav-bar />
    <section class="py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Projects</h4>
            <title-bar />
          </div>
        </div>
        <div class="row py-4">
          <div class="col-sm-3 mb-3">
            <div class="panel">
              <div class="panel-title">Filter Projects</div>
              <div class="panel-group">
                <div>
                  <div class="mb-3">
                    <select v-model="selectedCategory" class="form-select">
                      <option disabled value="">Select Category</option>
                      <option value="architectural">Architectural</option>
                      <option value="interior">Interior</option>
                      <option value="diverse">Diverse</option>
                    </select>
                  </div>
                  <div>
                    <select v-model="selectedSubCategory" class="form-select">
                      <option disabled value="">Select Sub-category</option>
                      <option value="res">Residential</option>
                      <option value="edu">Educational</option>
                      <option value="com">Commercial</option>
                      <option value="hos">Hospitality</option>
                      <option value="hou">Housing</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-9 row justify-content-center">
            <div
              v-for="item in computed_items"
              :key="item.id"
              class="col-md-4 col-sm-6 mb-3 text-center"
            >
              <div class="card">
                <img
                  :src="
                    require('/static/projects/' +
                      item.category +
                      '/' +
                      item.subcategory +
                      '/' +
                      item.folder +
                      '/r-(1).jpg')
                  "
                  class="card-img-top image"
                  :alt="item.client"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ item.client }}</h5>
                  <NuxtLink :to="/projects/ + item.id" class="link">
                    Quick Look
                  </NuxtLink>
                </div>
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
import FooterBar from '~/components/global/FooterBar.vue'
import TitleBar from '~/components/global/TitleBar.vue'

import imageDataList from '~/static/imageData.json'

export default {
  name: 'AboutPage',
  components: {
    TitleBar,
    FooterBar,
  },
  data() {
    return {
      imageList: imageDataList.imagesList,
      selectedCategory: '',
      selectedSubCategory: '',
    }
  },
  computed: {
    computed_items() {
      const filterType = this.selectedCategory
      const filterSize = this.selectedSubCategory
      return this.imageList.filter(function (item) {
        let filtered = true
        if (filterType && filterType.length > 0) {
          filtered = item.category === filterType
        }
        if (filtered) {
          if (filterSize && filterSize.length > 0) {
            filtered = item.subcategory === filterSize
          }
        }
        return filtered
      })
    },
  },
}
</script>

<style scoped>
.about-text {
  text-align: justify;
}
.about-text p span {
  font-weight: 500;
  color: #378208;
}
.card {
  transition: all 0.3s ease-out;
}
.card:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -1px;
  background-color: white;
}
.card .card-body h5 {
  font-size: 1rem;
  font-weight: 400;
  margin: 3px;
}
.card .card-body .card-text {
  color: #a4a4a4;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 8px;
}
.card .card-body .link {
  position: relative;
  color: #378208;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
}
.card .card-body .link:hover {
  color: #222;
}
.card .card-body .link:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
}
.card .card-body .link:after {
  height: 2px;
  background-color: #378208;
  content: '';
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  -webkit-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
}
.card .card-body .link:hover:after {
  opacity: 1;
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}
.card .image {
  height: 140px;
  object-fit: cover;
}
</style>
<style>
.panel {
  position: sticky;
  top: 100px;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  font-size: 1rem;
}
.panel-title {
  background-color: #4a4a4a;
  border-radius: 6px 6px 0 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 0.75em 1em;
}
.form-select {
  font-size: 0.8rem;
}
.panel-group {
  color: #4a515b;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.75em 1em;
}
</style>
