<template>
  <div>
    <div class="modal" tabindex="-1" style="display: block">
      <div @click="$emit('close')"></div>
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://dummyimage.com/600x400/ebebeb/000000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://dummyimage.com/600x400/ebebeb/000000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://dummyimage.com/600x400/ebebeb/000000"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryModal',
}
</script>

<style scoped>
.modal-background {
  background-color: rgba(101, 108, 133, 0.8);
}
.modal {
  background-color: rgba(101, 108, 133, 0.8);
  justify-content: flex-start;
}
.modal-card-body {
  background-color: #f5f6f7;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card:hover {
  background-color: #f2f6fc;
}
.card:hover .card-header p {
  color: #3273dc;
}
.modal-card-foot {
  background-color: #fff;
  box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}
</style>
