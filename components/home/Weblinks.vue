<template>
  <div>
    <div class="weblinks">
      <Carousel v-bind="slickOptions">
        <div
          class="link"
          v-for="(site, index) in $store.state.home.sites"
          :key="index"
        >
          <img :src="`http://ass.tujjor.org/${site.image}`" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/bolahuquq.png" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/advice.png" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/huquq.png" alt="" />
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              speed: 1500,
              touchThreshold: 1000,
              autoplay: true,
              autoplaySpeed: 2000,
              slidesToShow: 3,
              infinite: true,
              slidesToScroll: 1,
              dots: true,
              draggable: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              focusOnSelect: true,
              loop: false,
              arrows: false,
              dots: true,
              slidesToShow: 2,
              speed: 1500,
              touchThreshold: 1000,
              autoplay: true,
              autoplaySpeed: 3000,
              infinite: true,
              slidesToScroll: 1,
              draggable: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.weblinks {
  // background: #E5E5E5;
  // display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  div.link {
    cursor: pointer;
    padding: 0 20px;
    width: 20%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 200px;
    img {
      pointer-events: none;
      width: 70%;
      height: auto;
    }
  }
}
</style>
