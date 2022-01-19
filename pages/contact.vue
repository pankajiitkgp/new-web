<template>
  <div>
    <nav-bar />
    <section class="pt-5 about-services" data-scroll-index="2">
      <div class="container">
        <div class="row">
          <div class="section-head text-center col-sm-12 mb-4">
            <h4>Connect with Us</h4>
            <title-bar />
          </div>
        </div>
        <div class="row py-4 justify-content-md-center">
          <div class="col-md-4">
            <div class="about-services-inner">
              <div class="item-inner">
                <div class="features-box-image icon">
                  <mobile-icon class="svg-icon" />
                </div>
                <div class="features-box-content">
                  <h3 class="title">Phone number</h3>
                  <div class="description">
                    <a href="tel:+9187635-22530">(+91) 87635 22530</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="about-services-inner">
              <div class="item-inner mid-cl">
                <div class="features-box-image icon">
                  <email-icon class="svg-icon" />
                </div>
                <div class="features-box-content">
                  <h3 class="title">Email Address</h3>
                  <div class="description">
                    <a href="mailto:mail2novus@gmail.com" target="_top"
                      >mail2novus@gmail.com</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="about-services-inner">
              <div class="item-inner">
                <div class="features-box-image icon">
                  <location-icon class="svg-icon" />
                </div>
                <div class="features-box-content">
                  <h3 class="title">Address Info</h3>
                  <div class="description">
                    C-6, Netaji Subhash Enclave, Bhubaneswar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services py-5">
      <div class="container">
        <div class="row justify-content-md-center py-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14965.252029449077!2d85.831009!3d20.328684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5616587e7dcfff65!2sNovus%20Arc%20Design%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1609261952179!5m2!1sen!2sin"
            width="600"
            height="460"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '~/components/global/FooterBar.vue'
import TitleBar from '~/components/global/TitleBar.vue'
import EmailIcon from '~/components/svg/contact/EmailIcon.vue'
import LocationIcon from '~/components/svg/contact/LocationIcon.vue'
import MobileIcon from '~/components/svg/contact/MobileIcon.vue'
export default {
  name: 'ContactPage',
  components: {
    TitleBar,
    FooterBar,
    MobileIcon,
    LocationIcon,
    EmailIcon,
  },
}
</script>
<style scoped>
.about-services .about-services-inner .item-inner {
  text-align: center;
  margin-bottom: 30px;
  background-color: #fff;
  padding: 30px 15px;
}

@media only screen and (min-width: 1168px) {
  .about-services .about-services-inner .item-inner {
    padding: 50px 30px;
  }
}
.about-services
  .about-services-inner
  .item-inner:hover
  .features-box-image.icon
  .svg-icon {
  -webkit-animation: none;
  -o-animation: none;
  animation: none;
}

@media only screen and (min-width: 1168px) {
  .about-services
    .about-services-inner
    .item-inner:hover
    .features-box-image.icon
    .svg-icon {
    -webkit-animation: toTopFromBottom 0.3s forwards;
    -o-animation: toTopFromBottom 0.3s forwards;
    animation: toTopFromBottom 0.3s forwards;
  }
}

@-webkit-keyframes toTopFromBottom {
  49% {
    -webkit-transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(100%);
  }
  51% {
    opacity: 1;
  }
}

@keyframes toTopFromBottom {
  49% {
    -webkit-transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(100%);
  }
  51% {
    opacity: 1;
  }
}

.about-services .read-more-btn {
  margin: 15px 0 0 0;
}

.about-services .features-box-image.icon {
  color: #50aab2;
  cursor: pointer;
  overflow: hidden;
}

.about-services .features-box-image.icon .svg-icon {
  font-size: 0.8rem;
  color: #4a4a4a;
  line-height: 1;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.about-services .features-box-image.icon .svg-icon:before {
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
}

.about-services .mid-cl {
  -webkit-box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.16);
  box-shadow: 0 10px 30px 0 rgba(50, 50, 50, 0.16);
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
}
.about-services .features-box-content .title {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 25px 0 15px 0;
  text-transform: capitalize;
  line-height: 1.625;
}
.about-services .features-box-content .description a {
  color: #576566;
  font-size: 1rem;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  .about-services .features-box-content .title {
    font-size: 18px;
    line-height: 1.55556;
  }
}

@media only screen and (min-width: 1168px) {
  .about-services .features-box-content .title {
    margin: 30px 0 20px 0;
  }
}
</style>
