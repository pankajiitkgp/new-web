<template>
  <div>
    <nav-bar />
    <header class="header valign" data-overlay-dark="5">
      <div class="container-fluid">
        <div class="row">
          <div class="full-width text-center caption">
            <h4>We Are Creative</h4>
            <h1>Novus Arc Design</h1>
            <p>"We love to think. We live to create"</p>
          </div>
        </div>
      </div>
    </header>
    <section class="services py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Our Services</h4>
            <title-bar />
          </div>
          <services-card>
            <template #icon> <architect-icon /> </template>
            <template #title> Architecture </template>
            <template #description>
              In pure architecture the smallest detail should have a meaning or
              serve a purpose.
            </template>
          </services-card>
          <services-card class="mid-services-border">
            <template #icon> <interior-icon /> </template>
            <template #title> Interior Design </template>
            <template #description>
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it.
            </template>
          </services-card>
          <services-card>
            <template #icon> <diverse-icon /> </template>
            <template #title> Diverse </template>
            <template #description>
              Architecture is basically a container of something. I hope they
              will enjoy not so much the teacup, but the tea.
            </template>
          </services-card>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '~/components/global/FooterBar.vue'
import TitleBar from '~/components/global/TitleBar.vue'
import ServicesCard from '~/components/cards/ServicesCard.vue'
import ArchitectIcon from '~/components/svg/home/ArchitectIcon.vue'
import InteriorIcon from '~/components/svg/home/InteriorIcon.vue'
import DiverseIcon from '~/components/svg/home/DiverseIcon.vue'
export default {
  name: 'IndexPage',
  components: {
    TitleBar,
    FooterBar,
    ServicesCard,
    ArchitectIcon,
    InteriorIcon,
    DiverseIcon,
  },
}
</script>

<style scoped>
.header {
  background-image: url(../static/images/bg-index.jpg);
  min-height: calc(100vh + 80px);
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 80px;
  overflow: hidden;
  top: -0.3rem;
}
.valign {
  display: flex;
  align-items: center;
}
[data-overlay-dark] {
  position: relative;
}
[data-overlay-dark]:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
[data-overlay-dark]:before {
  background: #000;
}
[data-overlay-dark='5']:before {
  opacity: 0.5;
}
[data-overlay-dark] h1,
[data-overlay-dark] h2,
[data-overlay-dark] h3,
[data-overlay-dark] h4,
[data-overlay-dark] h5,
[data-overlay-dark] h6,
[data-overlay-dark] span {
  color: #fff;
}
.header .full-width {
  z-index: 1;
}
.header .caption h4 {
  font-weight: 300;
  letter-spacing: 4px;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.header .caption h1 {
  margin: 10px 0;
  font-size: 60px;
  font-weight: 500;
  font-family: inherit;
  word-spacing: 2px;
  letter-spacing: 2px;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.header .caption p {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
</style>
