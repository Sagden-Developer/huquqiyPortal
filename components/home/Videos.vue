<template>
  <div id="video">
    <div class="container">
      <div class="video-header">
      <h1 class="v-head-text" v-text="'Videoroliklar'"></h1>
      <button type="submit" class="video-button" v-text="videoText"></button>
    </div>
    <div id="carusel-video-box">
      <Carousel v-bind="slickOptions">
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" width="400" height="250" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
        <div class="card-video">
          <img :src="slImg" alt="" />
        </div>
      </Carousel>
      <div class="video-footer-text" v-text="footText"></div>
      <CoolLightBox :items="items" :index="index" @close="index = null">
      </CoolLightBox>

      <div class="images-wrapper">
        <div
          class="image"
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
export default {
  data() {
    return {
      videoText: "Barcha videolar",
      slImg: require("~/assets/img/course/bogcha.svg"),
      footText: "Qanday ishlar maqbul kelmaydigan ish hisoblanadi",
      slickOptions: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        centerPadding: "10px",
        centerMode: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
      },
      items: [
        "https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
      ],
      index: null
    };
  },
  components: {
    CoolLightBox
  }
};
</script>

<style lang="scss">
.slick-current {
  // background: red !important;
  // height: 10000px !important;
  // display: none !important;
  .video-box-item {
    // border: 1px solid red !important;
    padding: 10px;
    height: 100px;
    margin: 15px;
  }
}
#video {
  // max-width: 1300px;
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
      border: 1px solid #597ba3;
    }
  }
  #carusel-video-box {
    height: 450x;
    .card-video {
      width: 427px;
      height: 235px;
      // margin: 10px 50px;
      padding: 20px;
      // border: 1px solid red;
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
      width: 667, 27px !important;
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