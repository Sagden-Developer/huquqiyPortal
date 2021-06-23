<template>
  <div id="courses">
    <div class="container">
      <div class="cours-container">
        <div class="course-head">
          <div class="head-text">
            <h3>Bepul onlayn kurslar</h3>
          </div>
          <button type="submit" class="allCourse">Barcha Kurslar</button>
        </div>
        <div class="course-card">
          <div class="card-box" v-for="(card, index) in cards" :key="index">
            <a :href="card.href" target="_blank">
              <img
                class="star"
                :src="card.cardIcon"
                :alt="card.imgAlt"
                width="400"
                height="215"
              />
              <div class="video-title-content">
                <div class="video-title">{{ card.cardTitle }}</div>
                <div class="video-info">
                  <div class="rating">
                    <img
                      :src="card.starIcon"
                      v-for="rep in 5"
                      :key="rep"
                      width="20"
                      height="19"
                    />
                  </div>
                  <div class="time">{{ card.time }}</div>
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
          time: "2 soat 35 daqiqa",
        },
        {
          cardIcon: require("@/assets/img/course/tadbirkor.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Tadbirkorlikda biznesni boshlash",
          href: "https://yandex.ru",
          imgAlt: "tadbirkorlik-icon",
          time: "2 soat 35 daqiqa",
        },
        {
          cardIcon: require("@/assets/img/course/imtiyoz.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Nogironligi bo’lgan shaxslarga im...",
          href: "https://yandex.ru",
          imgAlt: "imtiyoz-icon",
          time: "2 soat 35 daqiqa",
        },
        {
          cardIcon: require("@/assets/img/course/mehnat.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Mehnat huquqi",
          href: "https://yandex.ru",
          imgAlt: "mehnat-icon",
          time: "2 soat 35 daqiqa",
        },
        {
          cardIcon: require("@/assets/img/course/bogcha.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Farzandni bog’chaga berish",
          href: "https://yandex.ru",
          imgAlt: "bogcha-icon",
          time: "2 soat 35 daqiqa",
        },
        {
          cardIcon: require("@/assets/img/course/oila.svg"),
          starIcon: require("@/assets/img/course/star.svg"),
          cardTitle: "Nikoh va oila munosabatlari",
          href: "https://yandex.ru",
          imgAlt: "oila-icon",
          time: "2 soat 35 daqiqa",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.allCourseNone {
  display: none !important;
}
h3 {
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  /* dark gray */
  color: #333333;
}
#courses {
  // width: 1300px;
  padding: 75px 30px;
  .cours-container {
    width: 1300px;
    // margin: 75px 30px;
    .course-head {
      padding-bottom: 52px;
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
        cursor: pointer;
      }
    }
    .course-card {
      // margin: 40px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card-box {
        margin-bottom: 20px;
        width: 400px;
        // height: 320px;
        border-radius: 12px;
        background: #fff;
        transition: 0.3s linear;
        &:hover {
          -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
        }
        a {
          text-decoration: none;
        }
        .video-title-content {
          width: 400px;
          height: 105px;
          padding: 15px 25px 29px 25px;
          .video-title {
            width: 360px;
            height: 24px;
            margin-bottom: 17px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }
          .video-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .rating {
              width: 140px;
              // height: 24px;
              display: flex;
              // justify-content: space-around;
              align-items: center;
              img {
                margin-right: 9px;
              }
            }
            .time {
              width: 160px;
              // height: 22px;
              // margin-left: 53px;
              // font-family: Montserrat;
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 22px;
              /* identical to box height */
              text-align: right;
              /* dark gray */
              color: #333333;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1400px) and (max-width: 1920px) {
  #courses {
    // width: 1300px;
    padding: 75px 30px;
    .cours-container {
      width: 1410px;
      margin: auto;
      padding: 10px;
      // margin: 75px 30px;
      .course-head {
        padding-bottom: 52px;
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
          cursor: pointer;
        }
      }
      .course-card {
        // margin: 40px 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .card-box {
          margin-bottom: 20px;
          width: 450px;
          height: 350px;
          // height: 320px;
          border-radius: 12px;
          background: #fff;
          transition: 0.3s linear;
          &:hover {
            -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
            box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          }
          a {
            text-decoration: none;
            .star{
              width: 100%;
              height: 250px;
              margin-top: -5px;
            }
          }
          .video-title-content {
            width: 450px;
            height: 100px;
            .video-info {
              .rating {
                width: 140px;
                // height: 24px;
                display: flex;
                // justify-content: space-around;
                align-items: center;
                img {
                  margin-right: 9px;
                  
                }
              }
              .time {
                width: 160px;
                // height: 22px;
                // margin-left: 53px;
                // font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                /* identical to box height */
                text-align: right;
                /* dark gray */
                color: #333333;
              }
            }
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
      padding: 10px !important;
      .video-title {
        width: 90% !important;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .video-info {
      width: 100%;
      justify-content: space-between;
      .time {
        width: 100%;
        margin-left: 0;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .allCourse {
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
    padding: 0 !important;
    .cours-container {
      width: auto !important;
      padding: 0 10px;
      margin-bottom: 25px;
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
