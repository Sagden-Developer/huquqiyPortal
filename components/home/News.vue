
<template>
  <div class="news-section">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(mainNews, index) in $store.state.home.news" :key="index">
        <div>
          <img
            class="swiper-img"
            :src="`http://ass.tujjor.org/${mainNews.image}`"
          />
        </div>
        <div>
          <div class="swiper-title-text">
            {{mainNews.title}}
          </div>
          <div class="swiper-body-description" v-html="mainNews.article">
            
          </div>
          <button>
            Batafsil
            <span
              ><svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14.5L20 9.5L15 4.5"
                  stroke="#07A287"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 20.5V13.5C4 12.4391 4.42143 11.4217 5.17157 10.6716C5.92172 9.92143 6.93913 9.5 8 9.5H20"
                  stroke="#07A287"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div></div></div
      ></swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-slider-buttons first-slider-btn"></div>
    <div class="swiper-button-next swiper-slider-buttons last-slider-btn"></div>
    <div class="swiper-pagination" slot="pagination"></div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.news-section{
  position:relative;
}
.first-slider-btn{
  left: -5%;
  z-index: 1000;
}

.last-slider-btn{
  right: -5%;
  z-index: 1000;
}
.swiper-slider-buttons {
  width: 60px;
  height: 60px; 
  border-radius: 50%;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 60%;
  transform: translate(0, -50%);
/* rating green */

  background: #07a287;
}
.swiper-img {
  width: 570px;
  height: 400px;
  border-radius: 12px;
  box-sizing: border-box;
}
.swiper-body-description {
  width: 810px;
  box-sizing: border-box;
  height: 189px;
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 0 30px;
  line-height: 150%;
  margin-top: 30px;
  color: #333333;
}
.swiper-title-text {
  width: 731px;
  height: 31px;
  left: 855px;
  top: 1025px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #333333;
}
.swiper {
  height: 300px;
  width: 100%;
  position: relative;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    // font-size: $font-size-huge * 2;
    background-color: white;
  }
}
</style>