<template>
  <div>
    <nav-bar />
    <section class="py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Career with Us!</h4>
            <title-bar />
          </div>
          <div class="col-sm-6 mx-auto">
            <div class="about-text">
              <p class="text-center">
                If you love designing and exploring, you are most welcome to be
                a part of us. If you would like to join our family, drop in your
                CV and portfolio, we will get back to you when required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services py-5">
      <div class="container">
        <div class="row justify-content-md-center py-2">
          <div class="col-sm-8">
            <div class="image-wrapper">
              <img
                src="@/static/images/team-image.jpg"
                class="img-fluid rounded mx-auto d-block"
                alt="Team Image"
              />
              <div class="team-image-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>
<script>
export default {
  name: 'CareerPage',
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
}
.team-image-opacity {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  -webkit-transition: all 0.6s ease 0s;
  -o-transition: all 0.6s ease 0s;
  -moz-transition: all 0.6s ease 0s;
  transition: all 0.6s ease 0s;
  top: 0;
  left: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 100;
  text-align: center;
  overflow: hidden;
}
</style>
