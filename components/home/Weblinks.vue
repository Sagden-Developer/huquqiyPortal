<template>
  <div>
    <div class="container">
      <Carousel v-bind="slickOptions">
        <div class="link">
          <img src="@/assets/image/adliya.png" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/bolahuquq.png" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/huquq.png" alt="" />
        </div>
        <div class="link">
          <img src="@/assets/image/advice.png" alt="" />
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
              draggable: true
            }
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
              draggable: true
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  div.link {
    padding: 0 20px;
    width: 20%;
    img{
      width: 100%;
    }
  }
}
</style>
