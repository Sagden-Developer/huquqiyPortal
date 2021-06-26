<template>
  <div id="video">
    <div class="container">
      <div class="video-header">
        <h1 class="v-head-text title-text">{{ $t("videos") }}</h1>
        <button
          type="submit"
          class="video-button"
          v-text="videoText[`${$i18n.locale}`]"
        ></button>
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
            <p class="video-footer-text" v-text="footText"></p>
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
            <p class="video-footer-text" v-text="footText"></p>
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
            <p class="video-footer-text" v-text="footText"></p>
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
            <p class="video-footer-text" v-text="footText"></p>
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
            <p class="video-footer-text" v-text="footText"></p>
          </div>
        </Carousel>
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
      videoText: {
        uz: "Barcha videolar",
        kr: "Барча видеолар",
        ru: "Все видео"
      },
      slImg: require("~/assets/img/course/bogcha.svg"),
      footText: "Qanday ishlar maqbul kelmaydigan ish hisoblanadi",
      slickOptions: {
        dots: true,
        infinite: true,
        slidesToShow: 2.3,
        centerMode: true,
        focusOnSelect: true,
        draggable: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              speed: 1500,
              touchThreshold: 1000,
              autoplay: false,
              autoplaySpeed: 2000,
              slidesToShow: 2,
              infinite: true,
              slidesToScroll: 1,
              dots: false,
              draggable: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              focusOnSelect: true,
              arrows: false,
              dots: false,
              slidesToShow: 1,
              speed: 1500,
              centerMode: true,
              touchThreshold: 1000,
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
#video {
  .slick-slide {
    transition: 1s;
    width: 515px !important;
  }
  .slick-center {
    iframe {
      pointer-events: none !important;
    }
  }

  .slick-list {
    overflow: show;
  }
  .slick-current {
    transform: scale(1.5) !important;
    pointer-events: all !important;
    iframe {
      // pointer-events: all !important;
      pointer-events: auto !important;
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
    padding: 30px 0;
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

    // DOTS CHANGE
    .slick-dots {
      margin-top: 40px !important;
      position: absolute !important;
      bottom: -50px !important;
      display: flex !important;
      justify-content: center;
      align-items: center;
      li {
        display: flex !important;
        align-items: center;
        justify-content: center;
        button {
          background-color: transparent !important;
          content: "";
          width: 15px !important;
          height: 15px !important;
          background: #597ba3 !important;
          border-radius: 50% !important;
          opacity: 0.5;
          border: 0 !important;
        }
      }
      button::before {
        content: "" !important;
      }
      .slick-active {
        button {
          border-radius: 50% !important;
          opacity: 1;
          background: #597ba3 !important;
          width: 20px !important;
          height: 20px !important;
        }
      }
    }
  }
  .video-footer-text {
    // margin-top: 30px;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;

      /* dark gray */

      color: #333333;
    }
  }
}
@media (min-width: 576px) and (max-width: 950px) {
  .video-footer-text {
    p {
      font-size: 12px !important;
    }
  }
  #video {
    height: auto;
    padding: 10px;
    padding-bottom: 45px !important;
    #carusel-video-box {
      .card-video {
        width: 300px !important;
        height: auto !important;
        padding: 0 10px !important;
      }
    }

    .slick-list {
      // padding: 0 40px !important;
    }
    .v-head-text {
      font-size: 20px !important;
    }

    .slick-slide {
      width: auto !important;
    }
    .slick-current {
      transform: scale(1) !important;
      pointer-events: all !important;
      iframe {
        // pointer-events: all !important;
        pointer-events: auto !important;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .video-footer-text {
    p {
      font-size: 12px !important;
    }
  }
  #video {
    height: auto;
    padding: 10px;
    // padding-bottom: 45px !important;
    #carusel-video-box {
      .card-video {
        width: 294px !important;
        height: auto !important;
        padding: 0 10px !important;
      }
    }

    .slick-list {
      // padding: 0 40px !important;
    }
    .v-head-text {
      font-size: 20px !important;
    }

    .slick-slide {
      width: auto !important;
    }
    .slick-current {
      transform: scale(1) !important;
      pointer-events: all !important;
      iframe {
        // pointer-events: all !important;
        pointer-events: auto !important;
      }
    }
  }
}
</style>
