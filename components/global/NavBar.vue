<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light nav-scroll">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand"
        >Novus
        <span
          class="typewrite"
          data-period="2000"
          data-type='[ "Arc.", "Design."]'
        >
          <span class="wrap"></span> </span
      ></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        @click="isShow = !isShow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        :class="{ collapse: true, 'navbar-collapse': true, show: isShow }"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink to="/" exact class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/career" class="nav-link">Career</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtType.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length
      const fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      const that = this
      let delta = 200 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick()
      }, delta)
    }
    /* eslint-disable no-new */
    const elements = document.getElementsByClassName('typewrite')
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type')
      const period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    const css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.typewrite > .wrap { border-right: 2px solid #378208}'
    document.body.appendChild(css)
  },
}
</script>
<style>
body {
  font-family: 'Rubik', sans-serif;
  padding-top: 4rem;
}
.services {
  background-image: url(@/static/images/services-ptn-1.png);
  background-position: center center;
  background-repeat: repeat;
}
</style>
<style scoped>
.nav-scroll {
  background: #fff;
  border-bottom: 1px solid rgba(12, 12, 12, 0.04);
}
.navbar-brand {
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  color: #4a4a4a;
  text-transform: lowercase;
  padding: 0;
}
.navbar-brand::first-letter {
  color: #378208;
}
.navbar .navbar-nav .nav-link {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 5px 5px;
  transition: all 0.5s;
  color: #222;
}
.navbar .navbar-nav .nav-link:hover {
  color: #378208;
}
.typewrite {
  color: #378208;
}
.navbar .navbar-nav .nuxt-link-active {
  color: #378208;
  border-bottom: 2px solid;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.collapse {
  transition: height 0.35s ease;
}
</style>
