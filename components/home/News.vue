
<template>
  <div id="news-section">
    <div class="news-header">
      <h2>{{ title }}</h2>
      <button type="submit">Barcha Yangiliklar</button>
    </div>
    <Carousel v-bind="settings">
      <div class="news-slide">
        <div class="news-box">
          <div class="news-img">
            <img class="swiper-img" :src="newsImg" width="505" height="380" />
          </div>
          <div class="news-text">
            <div class="text-head">
              <h3>
                Sud-huquq islohotida advokatura instituti markaziy o‘rinda
              </h3>
            </div>
            <div class="text-info">
              <h6>
                2019 yilning 25—27 aprel' kunlari Toshkentda ilk bor “Tashkent
                Law Spring” – xalqaro miqyosdagi yuridik forumi bo‘lib o‘tgan
                edi. Forum doirasida davlat idoralari, xalqaro tashkilotlar,
                O‘zbekiston va dunyoning yetakchi yuridik hamda konsalting
                firmalari vakillari, advokatlar, yurisprudensiya, xalqaro
                aloqalar sohasidagi taniqli olimlar, OAV vakillari,
                mutaxassislar, ekspertlar, huquq sohasidagi eng so‘nggi
                tendensiyalarni muhokama qilish, zamonaviy yuridik fan va
                amaliyotning dolzarb masalalari yuzasidan o‘zaro fikr almashgan
                edi.
              </h6>
              <nuxt-link to="/">Batafsil >></nuxt-link>
            </div>
            <div class="news-data">
              <div class="info">
                <div class="data">
                  <img :src="icons.dataIcon" alt="" />
                  <div>02.06.2021</div>
                </div>
                <div class="views">
                  <img :src="icons.viewIcon" alt="" />
                  <div>528</div>
                </div>
              </div>
              <div class="arrows">wqdwd</div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-slide">
        <div class="news-box">
          <div class="news-img">
            <img class="swiper-img" :src="newsImg" width="505" height="380" />
          </div>
          <div class="news-text">
            <div class="text-head">
              <h3>
                Sud-huquq islohotida advokatura instituti markaziy o‘rinda
              </h3>
            </div>
            <div class="text-info">
              <h6>
                2019 yilning 25—27 aprel' kunlari Toshkentda ilk bor “Tashkent
                Law Spring” – xalqaro miqyosdagi yuridik forumi bo‘lib o‘tgan
                edi. Forum doirasida davlat idoralari, xalqaro tashkilotlar,
                O‘zbekiston va dunyoning yetakchi yuridik hamda konsalting
                firmalari vakillari, advokatlar, yurisprudensiya, xalqaro
                aloqalar sohasidagi taniqli olimlar, OAV vakillari,
                mutaxassislar, ekspertlar, huquq sohasidagi eng so‘nggi
                tendensiyalarni muhokama qilish, zamonaviy yuridik fan va
                amaliyotning dolzarb masalalari yuzasidan o‘zaro fikr almashgan
                edi.
              </h6>
              <nuxt-link to="/">Batafsil >></nuxt-link>
            </div>
            <div class="news-data">
              <div class="info">
                <div class="data">
                  <img :src="icons.dataIcon" alt="" />
                  <div>02.06.2021</div>
                </div>
                <div class="views">
                  <img :src="icons.viewIcon" alt="" />
                  <div>528</div>
                </div>
              </div>
              <div class="arrows">wqdwd</div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  data() {
    return {
      title: "Yangiliklar",
      newsImg: require("@/assets/images/news.jpg"),
      icons: {
        dataIcon: require("@/assets/images/calendar.svg"),
        viewIcon: require("@/assets/images/eye.svg")
      },
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        dotsClass: "bu-class"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.bu-class {
  background: red !important; /* bg color of container */
}
.bu-class button:before {
  color: #000; /* color of dots */
  opacity: 0.25; /* opacity of dots */
  background-color: red !important; /* bg color of each "button" 
                                  * (blends with the one set in .slick-dots
                                  * if opacity is not 1) */
  content: "•"; /* this is the actual dot (yep, it's text)
                 * set it to ❥, 🤡 or whatever other string you want); 
             NOTE: don't set it to `none`: the dots won't display! */
  font-size: 10px; /* font-size of the dot */
}
// .bu-class .slick-active button:before {
//   /* everything already listed under `.slick-dots button:before`
//      except `opacity` is set to 1 by default */
// }
#news-section {
  position: relative;
  width: 1240px;
  margin: 65px auto;
  .news-header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-family: Oxygen;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 35px;
      /* dark gray */
      color: #333333;
    }
    button[type="submit"] {
      /* rating green */
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
        width: 505px;
        height: 380px;
        img {
          border-radius: 12px;
        }
      }
      .news-text {
        position: relative;
        width: 715px;
        height: 380px;
        padding: 20px;
        .text-head {
          // position: absolute;
          width: 715px;
          height: 62px;
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
        }
      }
    }
  }
}
</style>