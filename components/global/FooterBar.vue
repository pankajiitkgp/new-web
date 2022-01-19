<template>
  <footer>
    <section class="footer-section-top py-3">
      <div class="container">
        <div class="row justify-content-md-center pt-5 pb-4 novus-footer-mid">
          <div class="col-md-4 text-center">
            <div class="widget">
              <h4 class="widget-title mb-4">Get in touch</h4>
              <div class="widget-content">
                <ul class="list-unstyled">
                  <li>
                    <a href="mailto:mail2novus@gmail.com" target="_top"
                      >mail2novus@gmail.com</a
                    >
                  </li>
                  <li><a href="tel:+9187635-22530">(+91) 87635 22530</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="widget">
              <h4 class="widget-title mb-4">Address</h4>
              <div class="widget-content">
                <p class="margin-bottom-0">
                  C-6, Netaji Subhash Enclave, Bhubaneswar, India, 751017
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="widget widget-nav-menu widget_custom_text">
              <h4 class="widget-title mb-4">Quick Links</h4>
              <div class="widget-content">
                <div class="menu-footer-menu-2-container">
                  <ul class="list-unstyled">
                    <li>
                      <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-md-center py-2 text-center">
          <div class="widget-social">
            <ul class="social">
              <li>
                <a
                  href="https://www.facebook.com/NovusArcDesignPvtLtd"
                  target="_blank"
                >
                  <div class="social-inner">
                    <facebook-icon />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/novus_arc_design/"
                  target="_blank"
                >
                  <div class="social-inner">
                    <instagram-icon />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/novus-arc-design-pvt.-ltd."
                  target="_blank"
                >
                  <div class="social-inner"><linkedin-icon /></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="novus-footer-bottom p-2">
      <div class="container">
        <div class="copyright">
          © 2022 Novus Arc Design Pvt. Ltd. Designed By
          <a href="https://pankajiitkgp.github.io/" target="_blank"
            >Pankaj Sarkar</a
          >
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
import FacebookIcon from '../svg/FacebookIcon.vue'
import InstagramIcon from '../svg/InstagramIcon.vue'
import LinkedinIcon from '../svg/LinkedinIcon.vue'

export default {
  name: 'FooterBar',
  components: {
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
  },
}
</script>
<style scoped>
footer {
  background: #f0f0f3;
}
.widget a {
  color: #4a4a4a;
  text-decoration: none;
}
.widget a:hover {
  color: #378208;
}
.widget .widget-title {
  font-size: 1.25rem;
  font-weight: 400;
}
.widget .widget-content {
  font-size: 0.9rem;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-unstyled li {
  margin: 5px 0;
}
.widget-social .social {
  padding: 0;
  margin: 0;
  list-style: none;
}
.widget-social .social > li {
  padding: 0;
  margin: 0 5px 0 0;
  display: inline-block;
  vertical-align: middle;
}
.widget-social .social > li > a {
  position: relative;
  cursor: pointer;
  color: #378208;
  margin: 0 5px;
  background-color: #fff;
  width: 36px;
  height: 36px;
  float: left;
  fill: #4a4a4a;
  font-size: 0.9rem;
}
.widget-social .social > li > a:nth-of-type(1):before,
.widget-social .social > li > a:nth-of-type(1):after,
.widget-social .social > li > a:nth-of-type(2):before,
.widget-social .social > li > a:nth-of-type(2):after,
.widget-social .social > li > a:nth-of-type(3):before,
.widget-social .social > li > a:nth-of-type(3):after {
  background-color: #4a4a4a;
}
.widget-social .social > li > a > .social-inner {
  top: 0;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
}
.widget-social .social > li > a > .social-inner:before,
.widget-social .social > li > a > .social-inner:after {
  position: absolute;
  content: '';
  display: block;
  top: 0;
  -webkit-transition: transform 0.3s;
  -o-transition: transform 0.3s;
  transition: transform 0.3s;
  width: 2px;
  height: 100%;
  -webkit-transform: scaleY(0);
  -ms-transform: scaleY(0);
  -o-transform: scaleY(0);
  transform: scaleY(0);
}

.widget-social .social > li > a > .social-inner:before {
  left: 0;
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.widget-social .social > li > a > .social-inner:hover:before,
.widget-social .social > li > a > .social-inner:hover:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}

.widget-social .social > li > a > .social-inner:nth-of-type(1):before,
.widget-social .social > li > a > .social-inner:nth-of-type(1):after,
.widget-social .social > li > a > .social-inner:nth-of-type(2):before,
.widget-social .social > li > a > .social-inner:nth-of-type(2):after,
.widget-social .social > li > a > .social-inner:nth-of-type(3):before,
.widget-social .social > li > a > .social-inner:nth-of-type(3):after {
  background-color: #4a4a4a;
}
.widget-social .social > li > a > .social-inner:after {
  right: 0;
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}

.widget-social .social > li > a > .social-inner:hover:before,
.widget-social .social > li > a > .social-inner:hover:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}
.widget-social .social > li > a:hover {
  color: #203334;
  fill: rgba(0, 0, 0, 0.9);
}

.widget-social .social > li > a:hover:before,
.widget-social .social > li > a:hover:after {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.widget-social .social > li > a:hover:before {
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}

.widget-social .social > li > a:hover:after {
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

.widget-social .social > li > a:hover > .social-inner:before,
.widget-social .social > li > a:hover > .social-inner:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}

.widget-social .social > li > a:hover > .social-inner:before {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}

.widget-social .social > li > a:hover > .social-inner:after {
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.widget-social .social > li > a:focus {
  color: #203334;
}

.widget-social .social > li > a:focus:before,
.widget-social .social > li > a:focus:after {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.widget-social .social > li > a:focus:before {
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}

.widget-social .social > li > a:focus:after {
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

.widget-social .social > li > a:focus > .social-inner:before,
.widget-social .social > li > a:focus > .social-inner:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}

.widget-social .social > li > a:focus > .social-inner:before {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}

.widget-social .social > li > a:focus > .social-inner:after {
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.widget-social .social > li > a:focus-within {
  color: #203334;
}

.widget-social .social > li > a:focus-within:before,
.widget-social .social > li > a:focus-within:after {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.widget-social .social > li > a:focus-within:before {
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}

.widget-social .social > li > a:focus-within:after {
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

.widget-social .social > li > a:focus-within > .social-inner:before,
.widget-social .social > li > a:focus-within > .social-inner:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}

.widget-social .social > li > a:focus-within > .social-inner:before {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}

.widget-social .social > li > a:focus-within > .social-inner:after {
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.widget-social .social > li > a:active {
  color: rgba(0, 0, 0, 0.9);
}

.widget-social .social > li > a:active:before,
.widget-social .social > li > a:active:after {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}

.widget-social .social > li > a:active:before {
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}

.widget-social .social > li > a:active:after {
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

.widget-social .social > li > a:active > .social-inner:before,
.widget-social .social > li > a:active > .social-inner:after {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  -o-transform: scaleY(1);
  transform: scaleY(1);
}

.widget-social .social > li > a:active > .social-inner:before {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}

.widget-social .social > li > a:active > .social-inner:after {
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.widget-social .social > li > a:before,
.widget-social .social > li > a:after {
  position: absolute;
  content: '';
  display: block;
  -webkit-transition: transform 0.3s;
  -o-transition: transform 0.3s;
  transition: transform 0.3s;
  left: 0;
  width: 100%;
  height: 2px;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
}

.widget-social .social > li > a:before {
  top: 0;
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

.widget-social .social > li > a:after {
  bottom: 0;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}
.novus-footer-bottom {
  background: #e6e6e6;
}
.novus-footer-bottom .copyright {
  text-align: center;
  font-size: 0.9rem;
}
.novus-footer-bottom .copyright a {
  color: #378208;
  text-decoration: none;
}
.novus-footer-bottom .copyright a:hover {
  color: rgba(0, 0, 0, 0.9);
}
</style>
