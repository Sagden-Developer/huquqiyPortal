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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PiaxdSTGl5c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Carousel>
        <div class="video-footer-text" v-text="footText"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import SwiperCore, { coverflowEffect } from "swiper";
export default {
  data() {
    return {
      videoText: "Barcha videolar",
      slImg: require("~/assets/img/course/bogcha.svg"),
      footText: "Qanday ishlar maqbul kelmaydigan ish hisoblanadi",
      slickOptions: {
        dots: true,
        infinite: true,
        slidesToShow: 2.3,
        centerMode: true,
        focusOnSelect: true,
        draggable: true,
        arrows: false
      }
    };
  }
};
</script>

<style lang="scss">
#video {
  .slick-slide {
    transition: 1s;
  }

  .slick-list {
    overflow: show;
  }
  .slick-current {
    transform: scale(1.5) !important;
    iframe {
      pointer-events: all;
      pointer-events: auto;
    }
  }
  .slick-current {
    .video-box-item {
      padding: 10px;
      margin: 15px;
    }
  }
  height: 600px;
  margin: 0 auto;
  background: rgba(95, 146, 211, 0.1);
  .video-header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    button[type="submit"] {
      width: 193px;
      height: 47px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 25px;
      border-radius: 50px;
      background: #597ba3;
      color: #fff;
      border: 1px solid #597ba3;
      cursor: pointer;
      left: 25px;
      top: 10px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #ffffff;
      transition: 0.3s linear;
      &:hover {
        box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
        -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
      }
    }
  }
  #carusel-video-box {
    .card-video {
      width: 427px;
      height: 400px !important;
      padding: 90px 60px;

      iframe {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .active {
      border: 1px solid blue;
    }
    .slick-slide {
      div {
        height: 100%;
        width: 100%;
      }
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
@media (min-width: 350px) and (max-width: 575px) {
}
</style>