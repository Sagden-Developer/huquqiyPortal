<template>
  <div>
    <div id="news-section">
      <div class="news-header">
        <h2 class="title-text">{{ title[`${$i18n.locale}`] }}</h2>
        <button class="btn" type="submit">{{ $t("allnews") }}</button>
      </div>
      <Carousel v-bind="settings" v-if="$store.state.home.news.length">
        <div
          class="news-slide"
          v-for="(mainNews, index) in $store.state.home.news"
          :key="index"
        >
          <div class="news-box">
            <div class="news-img">
              <img
                class="swiper-img"
                :src="`http://ass.tujjor.org/${mainNews.image}`"
                width="505"
                height="380"
              />
            </div>
            <div class="news-text">
              <div class="text-head">
                <h3>
                  {{ mainNews.title[$i18n.locale] }}
                </h3>
              </div>
              <div class="text-info">
                <h6 v-html="mainNews.article[$i18n.locale]"></h6>
                <nuxt-link to="/">Batafsil >></nuxt-link>
              </div>
              <div class="news-data">
                <div class="info">
                  <div class="data">
                    <img :src="icons.dataIcon" alt="" />
                    <div>{{dateFormat(mainNews.createdAt)}}</div>
                  </div>
                  <div class="views">
                    <img :src="icons.viewIcon" alt="" />
                    <div>{{mainNews.views}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
import dateformat from "dateformat";
export default {
  data() {
    return {
      title: {
        uz: "Yangiliklar",
        kr: "Янгиликлар",
        ru: "Новости",
      },
      newsImg: require("@/assets/images/news.jpg"),
      icons: {
        dataIcon: require("@/assets/images/calendar.svg"),
        viewIcon: require("@/assets/images/eye.svg"),
      },
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        // dotsClass: "pages",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 1,
              dots: false,
              draggable: true,
            },
          },
        ],
      },
    };
  },
  methods: {
    dateFormat(date) {
      let date1 = dateformat(date, "isoDate");
      date1 = date1.split("-").reverse();
      date1 = date1.join(".");
      return date1;
    },
  },
};
</script>

<style lang="scss">
.slick-prev,
.slick-next {
  top: 92%;
  z-index: 11111111;
  width: 50px;
  height: 50px;
  background: #597ba3 !important;
  color: #fff;
  border-radius: 50%;
  font-family: "Montserrat" !important;
  &:hover {
    background: #597ba3;
  }
}
.slick-next {
  right: 50px;
  background: #597ba3 !important;
  &::before {
    content: " \276F" !important;
    font-family: "Montserrat" !important;
  }
}
.slick-prev {
  background: #597ba3;
  left: 79%;
  &::before {
    content: " \276E" !important;
    font-family: "Montserrat" !important;
  }
}

#news-section {
  position: relative;
  width: 1300px;
  /* margin: 65px auto; */
  padding: 60px 30px;
  .news-header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 35px;
      color: #333333;
    }
    button[type="submit"] {
      height: 47px;
      background: #597ba3;
      color: #fff;
      border: 1px solid;
      border-radius: 50px;
      padding: 10px 25px;
      margin-bottom: 18px;
      cursor: pointer;
      // font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      /* identical to box height, or 27px */

      /* white */

      color: #ffffff;
    }
  }
  .news-slide {
    width: 100%;
    .news-box {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      .news-img {
        // width: 505px;
        height: 380px;
        img {
          border-radius: 12px;
        }
      }
      .news-text {
        position: relative;
        // width: 715px;
        height: 380px;
        padding: 0 20px;
        .text-head {
          // position: absolute;
          width: 695px;
          // height: 62px;
          // font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 130%;
          color: #333333;
          margin: 0 0 10px 0;
        }
        .text-info {
          height: 216px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          a {
            color: #597ba3;
            font-size: 18px;
            height: 195px;
            overflow: hidden;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
          }
          h6 {
            color: #333333;
            font-size: 18px;
            height: 195px;
            overflow: hidden;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
          }
        }
        .news-data {
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          align-content: center;
          align-items: center;
          justify-content: space-between;
          .info {
            width: 245px;
            display: flex;
            justify-content: space-between;
            .data {
              width: 117px;
              height: 44px;
              padding: 10px 0px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .views {
              width: 63px;
              height: 44px;
              padding: 10px 0px;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
          }
        }
      }
    }
  }

  // Slider components

  // DOTS change
  .slick-dots {
    width: 20%;
    text-align: center;
    bottom: 16px;
    right: 16px;
    // .slick-active {
    //   width: 20px;
    //   height: 20px;
    //   border-radius: 50%;
    //   background: #597ba3 !important;
    //   opacity: 1 !important;
    // }
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

  // ARROW change
  // .slick-arrow {
  //   z-index: 1111111;
  //   width: 50px;
  //   height: 50px;
  //   background: #597ba3;
  //   color: #fff;
  //   border: 1px solid;
  //   border-radius: 50%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 30px;
  //   font-weight: 500;
  // }
}

@media (min-width: 1500px) {
  #news-section {
    position: relative;
    width: 1430px;
    height: 462px;
    margin: auto;
    box-sizing: border-box;
    /* margin: 65px auto; */
    padding: 60px 60px;
    .news-header {
      display: flex;
      justify-content: space-between;
      h2 {
        font-family: Oxygen;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
        color: #333333;
      }
      button[type="submit"] {
        background: #597ba3;
        color: #fff;
        border: 1px solid;
        border-radius: 50px;
        padding: 10px 25px;
        margin-bottom: 18px;
        cursor: pointer;
      }
    }
    .news-slide {
      width: 100%;
      .news-box {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        .news-img {
          img {
            height: 380px;

            width: 570px;
            border-radius: 12px;
          }
        }
        .news-text {
          position: relative;
          // width: 715px;
          height: 380px;
          padding: 20px;
          .text-head {
            // position: absolute;
            width: 695px;
            // height: 62px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 130%;
            color: #333333;
            margin: 0 0 10px 0;
          }
          .text-info {
            height: 216px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            /* or 27px */
            /* dark gray */
            color: #333333;
            h6 {
              height: 195px;
              overflow: hidden;
            }
          }
          .news-data {
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
            justify-content: space-between;
            .info {
              width: 245px;
              display: flex;
              justify-content: space-between;
              .data {
                width: 117px;
                height: 44px;
                padding: 10px 0px;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
              .views {
                width: 63px;
                height: 44px;
                padding: 10px 0px;
                display: flex;
                align-items: center;
                justify-content: space-around;
              }
            }
            .arrows {
              width: 210px;
              height: 50px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .left-arrow,
              .right-arrow {
                width: 50px;
                height: 50px;
                background: #597ba3;
                color: #fff;
                border: 1px solid;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                font-weight: 500;
              }
              .pages {
                width: 15px;
                height: 15px;
                background: #597ba3;
                opacity: 0.5;
                border-radius: 50%;
                border: 0;
              }
              // .active {
              //   width: 20px;
              //   height: 20px;
              //   background: #597ba3;
              // }
            }
          }
        }
      }
    }

    // Slider components

    // DOTS change
    .slick-dots {
      width: 20%;
      text-align: center;
      bottom: 16px;
      right: 16px;
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
}

@media (min-width: 576px) and (max-width: 950px) {
  .slick-prev,
  .slick-next {
    top: 83%;
    z-index: 11111111;
    width: 45px;
    height: 45px;
    background: #597ba3 !important;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    &:hover {
      background: #597ba3;
    }
  }
  .slick-next {
    right: 10px !important;
    background: #597ba3 !important;
    &::before {
      content: " \276F" !important;
    }
  }
  .slick-prev {
    background: #597ba3;
    left: 84% !important;
    &::before {
      content: " \276E" !important;
    }
  }
  #news-section {
    position: relative;
    width: 700px;
    margin: 65px auto;
    padding: 0 !important;
  }
  .news-text {
    width: 340px !important;
    padding: 0 20px !important;
    height: auto !important;
    h3 {
      font-size: 20px !important;
    }
  }
  .news-img {
    width: 300px !important;
    height: auto !important;
    img {
      border-radius: 12px;
    }
  }
  .text-head {
    margin-bottom: 0;
    width: 340px !important;
  }
  .text-info {
    margin-top: 5px !important;
    font-size: 16px;
    height: 72px !important;
    h6 {
      height: 60px !important;
      overflow: hidden !important;
    }
  }
  .news-img {
    width: 340px !important;
    height: 380px;
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
  .news-box {
    height: 275px !important;
    justify-content: flex-start !important;
  }
  .info {
    margin-top: 15px;
    width: 200px !important;
  }
}
.news-data {
  margin-top: 0 !important;
}
@media (min-width: 350px) and (max-width: 576px) {
  .slick-prev,
  .slick-next {
    top: 95%;
    z-index: 11111111;
    width: 45px;
    height: 45px;
    background: #597ba3 !important;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    &:hover {
      background: #597ba3;
    }
  }
  .slick-next {
    right: 10px !important;
    background: #597ba3 !important;
    &::before {
      content: " \276F" !important;
    }
  }
  .slick-prev {
    background: #597ba3;
    left: 70% !important;
    &::before {
      content: " \276E" !important;
    }
  }
  #news-section {
    position: relative;
    width: 400px !important;
    margin: 0px auto;
    padding: 65px 10px;
  }
  .news-text {
    width: 340px !important;
    // padding: 0 20px !important;
    padding: 0 !important;
    margin-top: 10px;
    height: auto !important;
    h3 {
      font-size: 20px !important;
    }
  }
  .news-img {
    width: 100% !important;
    height: auto !important;
    img {
      width: 100%;
      border-radius: 12px;
    }
  }
  .text-head {
    margin-bottom: 0;
    width: 340px !important;
  }
  .text-info {
    margin-top: 5px !important;
    font-size: 16px;
    height: 72px !important;
    h6 {
      height: 60px !important;
      overflow: hidden !important;
    }
  }
  .news-img {
    width: 100% !important;
    height: 380px;
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
  .news-box {
    height: 275px !important;
    // flex-direction:  column;
    display: block !important;
  }
  .info {
    width: 200px !important;
    margin-top: 15px;
  }
}
</style>
