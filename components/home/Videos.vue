<template>
  <div id="video">
    <div class="video-header">
      <h1 class="v-head-text" v-text="'Videoroliklar'"></h1>
      <button type="submit" class="video-button" v-text="videoText"></button>
    </div>
    <div id="carusel-video-box">
      <Carousel v-bind="slickOptions">
        <div  class="video-box-item">
          <!-- {{ index }} -->
        </div>
      </Carousel>
      <div class="video-footer-text" v-text="footText"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoText: "Barcha videolar",
      footText: "Qanday ishlar maqbul kelmaydigan ish hisoblanadi",
      slickOptions: {
        dots: true,
        // speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 2,
        // draggable: true,
        // infinite: true,
        // arrows: false,
        // autoplay: true
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true
      },
    };
  }
};
</script>

<style lang="scss" scoped>
.slick-current {
  // background: red !important;
  // height: 10000px !important;
  // display: none !important;
  .video-box-item {
    border: 1px solid red !important;
    padding: 10px;
    height: 100px;
    margin: 15px;
  }
}
#video {
  max-width: 1300px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid;
  background: rgba(95, 146, 211, 0.1);
  .video-header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    button[type="submit"] {
      max-width: 193px;
      max-height: 47px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 25px;
      border-radius: 50px;
      background: #07a287;
      color: #fff;
    }
  }
  #carusel-video-box {
    border: 1px solid blue;
    height: 450x;
    .card-video {
      width: 478;
      height: 254;
      border: 1px solid;
      // margin: 10px 50px;
      padding: 20px;
    }
    .video-box-item {
      border: 1px solid;
      padding: 10px;
      margin: 15px;
    }
  }
  .video-footer-text {
    margin-top: 30px;
    text-align: center;
  }
}
</style>