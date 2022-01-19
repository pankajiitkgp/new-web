<template>
  <div class="title-bar"></div>
</template>
<script>
export default {
  name: 'TitleBar',
}
</script>

<style scoped>
.title-bar {
  position: relative;
  max-width: 100px;
  border-top: 1px solid #378208;
  margin: 0 auto;
}
.title-bar:after {
  position: absolute;
  top: -3px;
  left: 35%;
  right: 35%;
  content: '';
  border-top: 5px solid #378208;
}
</style>
