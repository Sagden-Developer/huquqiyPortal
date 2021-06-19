<template>
  <div id="video">
    <div class="video-header">
      <h1 class="v-head-text" v-text="'Videoroliklar'"></h1>
      <button type="submit" class="video-button" v-text="videoText"></button>
    </div>
    <div id="carusel-video-box">
      <Carousel v-bind="slickOptions">
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
        <div class="card-video"></div>
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
        infinite: true,
        slidesToShow: 3,
        centerPadding: "10px",
        centerMode: true,
        focusOnSelect: true,
        arrows: false
      }
    };
  }
};
</script>

<style lang="scss">
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
      background: #597ba3;
      color: #fff;
      border: 1px solid;
    }
  }
  #carusel-video-box {
    height: 450x;
    .card-video {
      width: 427px;
      height: 235px;
      border: 1px solid;
      // margin: 10px 50px;
      padding: 20px;
      border: 1px solid red;
    }

    .active {
      width: 667px;
      height: 367px;
      border: 1px solid blue;
    }

    // Slider settings
    .slick-track {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slick-slide {
      height: 235px !important;
      position: relative !important;
      margin: 0px 40px !important;
      div {
        height: 100%;
        width: 100%;
      }
    }
    .slick-current {
      width: 667,27px !important;
      height: 367px !important;
    }

    // DOTS CHANGE
    .slick-dots {
      button::before {
        color: #000 !important; /* color of dots */
        background-color: transparent !important;
        content: "";
        font-size: 10px !important;
        width: 15px !important;
        height: 15px !important;
        background: #597ba3 !important;
        opacity: 0.5 !important;
        border-radius: 50% !important;
        border: 0 !important;
      }
      .slick-active button::before {
        background: #597ba3 !important;
        opacity: 1 !important;
      }
    }
  }
  .video-footer-text {
    margin-top: 30px;
    text-align: center;
  }
  .navigation {
    padding: 5px;
    margin: 10px;
    .btns {
      margin: 10px;
      display: flex;
      justify-content: center;
      .pages {
        width: 15px;
        height: 15px;
        background: #597ba3;
        opacity: 0.5;
        border-radius: 50%;
        border: 0;
        margin: 5px;
        .current-page {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>