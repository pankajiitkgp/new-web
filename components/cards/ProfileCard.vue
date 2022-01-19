<template>
  <div class="card">
    <img :src="picture" class="card-img-top" :alt="name" />
    <div class="card-body text-center">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">Chief Architect</p>
      <p class="card-text-phone">
        <phone-icon />
        <a :href="`tel:` + phone" class="ms-2"> {{ phone }}</a>
      </p>
    </div>
  </div>
</template>
<script>
import PhoneIcon from '../svg/PhoneIcon.vue'
export default {
  name: 'ProfileCard',
  components: { PhoneIcon },
  props: {
    picture: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
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
  font-size: 1.125rem;
  font-weight: 400;
  margin: 3px;
}
.card .card-body .card-text {
  color: #666;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 8px;
}
.card .card-body .card-text-phone {
  margin: 0px;
}
.card .card-body .card-text-phone a {
  color: #4a4a4a;
  text-decoration: none;
  font-size: 0.9rem;
}
</style>
