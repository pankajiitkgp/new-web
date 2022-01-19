<template>
  <div>
    <nav-bar />
    <section class="py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Who We Are!</h4>
            <title-bar />
          </div>
          <div class="col-sm-10 mx-auto">
            <div class="about-text">
              <p>
                Novus Arc Design was established on July 05, 2012, as an
                architectural and interior design studio, specializing in green,
                sustainable and vernacular architecture. Based in Bhubaneswar,
                Odisha. With a lot of clients across the land of temples,
                especially in the western and southern parts, we have back
                offices in Bargarh and Rayagada as well.
              </p>
              <p>
                The studio is shepherd by two young and seasoned architects of
                Birla Institute of Technology, Mesra –<span>
                  Ar. Abhinav Kaushal</span
                >
                and<span> Ar. Siddhartha Gautam</span>. The studio comprises of
                people from varied interest like 5 different fingers of a hand;
                and the trio proficiently leads the team like a fist. We take
                work as our passion, studio as our home and employees as our
                family.
              </p>
              <p>
                <span>"We love to think. We live to create"</span> – is the
                motto of our firm. Challenging the orthodox methods and adapting
                the sustainable process with the application of basic sciences
                has been the driving force of the studio. We stand out for our
                practices in exposed brickwork, filler slabs, sustainable
                architecture and bamboo construction. We ensure sound,
                sustainable and cost–effective designs throughout a building's
                lifespan – from birth to rebirth. We prefer to spend our grey
                matter on design than our pocket on materials. The studio is
                absorbed in an architectural gamut in India. From residences to
                townships, educational institutes to commercial spaces, from
                recreational buildings to meditation centers, the studio is
                gradually getting magnified in the Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services py-5" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Meet Our Experts!</h4>
            <title-bar />
          </div>
        </div>
        <div class="row my-4">
          <div class="row justify-content-evenly">
            <div class="col-sm-3">
              <profile-card
                :picture="require(`@/static/images/profile-pic1.jpg`)"
                :name="`Abhinav Kaushal`"
                :phone="`(+91) 87635 22530`"
              />
            </div>
            <div class="col-sm-3">
              <profile-card
                :picture="require(`@/static/images/profile-pic2.jpg`)"
                :name="`Siddhartha Gautam`"
                :phone="`(+91) 97951 30766`"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>

<script>
import ProfileCard from '~/components/cards/ProfileCard.vue'
import FooterBar from '~/components/global/FooterBar.vue'
import TitleBar from '~/components/global/TitleBar.vue'
export default {
  name: 'AboutPage',
  components: {
    TitleBar,
    FooterBar,
    ProfileCard,
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
</style>
