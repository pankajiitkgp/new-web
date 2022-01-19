<template>
  <div class="col-lg-4 col-md-6">
    <div class="item mb-md50">
      <div class="my-3">
        <slot name="icon"></slot>
      </div>
      <h6 class="my-2">
        <slot name="title"></slot>
      </h6>
      <p class="my-3">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServicesCard',
}
</script>

<style>
/* Sercies */
.services .item {
  text-align: center;
  padding: 30px 15px;
}
.services .item .icon {
  font-size: 40px;
  color: #2aafc0;
  margin-bottom: 15px;
}
.services .item h6 {
  margin-bottom: 10px;
  font-weight: 500;
}
.services hr {
  height: 1px;
  width: 100%;
  border: 0;
  display: block;
  background: #eee;
}
.services .item h4 {
  font-size: 1.6rem;
  font-weight: 500;
}
.services .item p {
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}
.mid-services-border {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
/* SVG */
svg:not(:root).svg-inline--fa {
  overflow: visible;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.fa-2x {
  font-size: 2em;
}
</style>
