<template>
  <div>
    <div class="col-sm-3 mb-3 mx-auto text-center">
      <div class="card">
        <img
          src="http://develop.novusarcdesign.com/static/media/thumb1.8bd21c48.jpg"
          class="card-img-top"
          alt="Abhishek Dhanuka"
        />
        <div class="card-body">
          <h5 class="card-title">Abhishek Dhanuka</h5>
          <a class="link">Quick Look</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
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
  color: #a4a4a4;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 8px;
}
.card .card-body .link {
  position: relative;
  color: #222;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
}
.card .card-body .link:hover {
  color: #378208;
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
  background-color: #b5b5b5;
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
</style>
