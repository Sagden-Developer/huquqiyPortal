<template>
  <div id="courses">
    <div class="container">
      <div class="cours-container">
      <div class="course-head">
        <div class="head-text">
          <h3>Beepul onlayn kurslar</h3>
        </div>
        <button type="submit" class="allCourse">Barcha Kurslar</button>
      </div>
      <div class="course-card">
        <div class="card-box" v-for="(index, card) in cards" :key="index">
          <a :href="index.href" target="_blank" rel="noopener noreferrer">
            <img
              class="star"
              :src="index.cardIcon"
              :alt="index.imgAlt"
              width="400"
              height="215"
            />
            <div class="video-title-content">
              <div class="video-title">{{ index.cardTitle }}</div>
              <div class="video-info">
                <div class="rating">
                  <img :src="index.starIcon" v-for="rep in 5" :key="rep" />
                </div>
                <div class="time">{{ index.time }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <button type="submit" class="allCourseNone">Barcha Kurslar</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          cardIcon: require("@/assets/img/course/ipoteka.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Ipoteka kredit olish",
          href: "https://yandex.ru",
          imgAlt: "ipoteka-icon",
          time: "2 soat 35 daqiqa"
        },
        {
          cardIcon: require("@/assets/img/course/tadbirkor.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Tadbirkorlikda biznesni boshlash",
          href: "https://yandex.ru",
          imgAlt: "tadbirkorlik-icon",
          time: "2 soat 35 daqiqa"
        },
        {
          cardIcon: require("@/assets/img/course/imtiyoz.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Nogironligi bo’lgan shaxslarga im...",
          href: "https://yandex.ru",
          imgAlt: "imtiyoz-icon",
          time: "2 soat 35 daqiqa"
        },
        {
          cardIcon: require("@/assets/img/course/mehnat.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Mehnat huquqi",
          href: "https://yandex.ru",
          imgAlt: "mehnat-icon",
          time: "2 soat 35 daqiqa"
        },
        {
          cardIcon: require("@/assets/img/course/bogcha.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Farzandni bog’chaga berish",
          href: "https://yandex.ru",
          imgAlt: "bogcha-icon",
          time: "2 soat 35 daqiqa"
        },
        {
          cardIcon: require("@/assets/img/course/oila.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Nikoh va oila munosabatlari",
          href: "https://yandex.ru",
          imgAlt: "oila-icon",
          time: "2 soat 35 daqiqa"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
 .allCourseNone {
        display: none !important;
      }
#courses {
  // width: 1300px;
  margin: 0 auto;
  .cours-container {
    // width: 1240px;
    // margin: 75px 30px;
    .course-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .course-head-text {
        font-family: Oxygen;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
        /* dark gray */
        color: #333333;
      }
     
      .allCourse {
        padding: 10px 25px;
        width: 193px;
        height: 47px;
        background: #597ba3;
        color: #fff;
        border-radius: 50px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        border: 1px solid white;
      }
    }
    .course-card {
      margin: 40px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card-box {
        margin-bottom: 20px;
        width: 420px;
        // height: 320px;
        border-radius: 12px;
        background: #fff;
      
        .video-title-content {
          width: 420px;
          height: 105px;
          .video-info {
            display: flex;
            justify-content: space-around;
            align-content: center;
          }
          .video-title {
            margin: 15px 0 15px 45px;
            text-transform: none;
          }
        }
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 950px) {
  .allCourseNone {
    display: none !important;
  }
  #courses {
    // width: 700px !important;
    .cours-container {
      width: 700px !important;
      margin: 0 auto !important;
    }
  }
  .card-box {
    width: 48% !important;
    a {
      width: 100%;
      img.star {
        width: 100%;
        height: auto;
      }
    }
    .video-title-content {
    width: 100% !important;
    }
    .video-info {
      width: 100%;
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .allCourse{
    display: none !important;
  }
  .allCourseNone {
    display: block !important;
    padding: 10px 25px;
    width: 100%;
    background: #597ba3;
    color: #fff;
    border-radius: 50px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    border: 1px solid white;
  }
  #courses {
    width: auto !important;
    .cours-container {
      // width: 350px !important;
      padding: 0 10px;
    }
  }
  .card-box {
    width: 100% !important;
    a {
      width: 100%;
      img.star {
        width: 100%;
        height: auto;
      }
    }
    .video-title-content {
      width: 100% !important;
    }
    .video-info {
      width: 100%;
    }
  }
}
</style>
