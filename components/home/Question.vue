<template>
  <div class="parent-question">
    <div id="question">
      <div class="container">
        <div class="question-body">
          <div class="question-text title-text">{{ questionTitle[`${$i18n.locale}`] }}</div>
          <div class="question-list-group">
            <div v-for="(item, index) in questionItem" :key="index">
              <nuxt-link :to="item.to" class="question-list-box">
                <img :src="item.questionIcon" :alt="item.iimgAlt" />
                <div class="question-title-text">{{ item.questionTitle[`${$i18n.locale}`] }}</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionTitle: {
        uz: "Huquqiy muamolar yechimi",
        kr: "Ҳуқуқий муамолар ечими",
        ru: "Решение правовых проблем"
      },
      questionItem: [
        {
          questionIcon: require("@/assets/img/question/mehnat.svg"),
          questionTitle: {
            uz: "Mehnat munosabatlari",
            kr: "Меҳнат муносабатлари",
            ru: "Трудовые отношения"
          },
          to: "/",
          iimgAlt: "mehnat-icon"
        },
        {
          questionIcon: require("@/assets/img/question/oilaviy.svg"),
          questionTitle: {
            uz: "Oilaviy munosabatlar",
            kr: "Оилавий муносабатлар",
            ru: "Семейные отношения"
          },
          to: "/",
          iimgAlt: "oilaviy-icon"
        },
        {
          questionIcon: require("@/assets/img/question/komunal.svg"),
          questionTitle: {
            uz: "Uy-joy va kommunal masalalar",
            kr: "Уй-жой ва коммунал масалалар",
            ru: "Жилищно-коммунальные вопросы"
          },
          to: "/",
          iimgAlt: "komunal-icon"
        },
        {
          questionIcon: require("@/assets/img/question/fuqarolik.svg"),
          questionTitle: {
            uz: "Fuqarolik / Migratsiya",
            kr: "Фуқаролик / Мигратсия",
            ru: "Гражданство / Миграция"
          },
          to: "https://yandex.ru",
          iimgAlt: "fuqarolik-icon"
        },
        {
          questionIcon: require("@/assets/img/question/sogliq.svg"),
          questionTitle: {
            uz: "Sog’liqni saqlash",
            kr: "Ҳуқуқий муамолар ечими",
            ru: "Решение правовых проблем"
          },
          to: "https://yandex.ru",
          iimgAlt: "sogliq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/himoya.svg"),
          questionTitle: {
            uz: "Ijtimoiy himoya",
            kr: "Ижтимоий ҳимоя",
            ru: "Социальная защита"
          },
          to: "https://yandex.ru",
          iimgAlt: "himoya-icon"
        },
        {
          questionIcon: require("@/assets/img/question/talim.svg"),
          questionTitle: {
            uz: "Ta’lim",
            kr: "Та’лим",
            ru: "Образование"
          },
          to: "https://yandex.ru",
          iimgAlt: "talim-icon"
        },
        {
          questionIcon: require("@/assets/img/question/sud.svg"),
          questionTitle: {
            uz: "Sud-huquq masalalari",
            kr: "Суд-ҳуқуқ масалалари",
            ru: "Судебно-правовые вопросы"
          },
          to: "https://yandex.ru",
          iimgAlt: "sud-icon"
        },
        {
          questionIcon: require("@/assets/img/question/yer.svg"),
          questionTitle: {
            uz: "Yer masalalari",
            kr: "Ҳуқуқий муамолар ечими",
            ru: "Решение правовых проблем"
          },
          to: "https://yandex.ru",
          iimgAlt: "yer-icon"
        },
        {
          questionIcon: require("@/assets/img/question/tadbirkorlik.svg"),
          questionTitle: {
            uz: "Tadbirkorlik",
            kr: "Тадбиркорлик",
            ru: "Предпринимательство"
          },
          to: "/",
          iimgAlt: "tadbirkorlik-icon"
        },
        {
          questionIcon: require("@/assets/img/question/soliq.svg"),
          questionTitle: {
            uz: "Soliqlar",
            kr: "Солиқлар",
            ru: "Налоги"
          },
          to: "/",
          iimgAlt: "soliq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/bank.svg"),
          questionTitle: {
            uz: "Bank sohasi",
            kr: "Банк соҳаси",
            ru: "Банковская сфера"
          },
          to: "/",
          iimgAlt: "bank-icon"
        },
        {
          questionIcon: require("@/assets/img/question/davxiz.svg"),
          questionTitle: {
            uz: "Davlat hizmatlari",
            kr: "Давлат ҳизматлари",
            ru: "Государственные услуги"
          },
          to: "/",
          iimgAlt: "davlat-xizmatlari-icon"
        },
        {
          questionIcon: require("@/assets/img/question/transport.svg"),
          questionTitle: {
            uz: "Transport",
            kr: "Транспорт",
            ru: "Транспорт"
          },
          to: "/",
          iimgAlt: "transport-icon"
        },
        {
          questionIcon: require("@/assets/img/question/istemolchi.svg"),
          questionTitle: {
            uz: "Istemolchi huquqi",
            kr: "Истемолчи ҳуқуқи",
            ru: "Права истца"
          },
          to: "/",
          iimgAlt: "istemolchi-icon"
        },
        {
          questionIcon: require("@/assets/img/question/chetel.svg"),
          questionTitle: {
            uz: "Chet elliklarga eslatma",
            kr: "Чет елликларга еслатма",
            ru: "Примечание для иностранцев"
          },
          to: "/",
          iimgAlt: "chet-el-icon"
        },
        {
          questionIcon: require("@/assets/img/question/qishloq.svg"),
          questionTitle: {
            uz: "Qishloq ho’jaligi",
            kr: "Қишлоқ ҳо’жалиги",
            ru: "Сельское хозяйство"
          },
          to: "/",
          iimgAlt: "qishloq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/malumot.svg"),
          questionTitle: {
            uz: "Ma’lumotlar",
            kr: "Ма’лумотлар",
            ru: "Данные"
          },
          to: "/",
          iimgAlt: "malumot-icon"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  // background: #E2EAF1;
  #question {
    background: #e2eaf1 !important;
    max-width: 100%;
    padding-top: 40px;
    padding-bottom: 30px;
    .question-text {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 35px;
      /* dark gray */
      color: #333333;
      margin: 7px 0 15px 0;
    }
    .question-list-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .question-list-box {
        width: 420px;
        height: 100px;
        margin: 10px 0;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;
        background-color: #fff;
        // -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        // -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        // box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        text-decoration: none;
        transition: 0.3s linear;
        &:hover {
          -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
        }
        img {
          margin: 18px 15px 18px 36px;
        }
        .question-title-text {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          color: #000000;
          margin: 0 15px;
        }
      }
    }
  }
}

@media (min-width: 1500px) and (max-width: 1920px) {
  .parent-question {
    background: #e2eaf1 !important;
  }
  * {
    box-sizing: border-box;
    // background: #E2EAF1;
    #question {
      margin: auto;
      background: #e2eaf1 !important;
      max-width: 1415px;
      padding-top: 40px;
      padding-left: 22px;
      padding-right: 22px;
      padding-bottom: 30px;
      .question-text {
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
        /* dark gray */
        color: #333333;
        margin: 7px 0 15px 0;
      }
      .question-list-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .question-list-box {
          width: 435px;
          height: 100px;
          margin: 15px 0;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: row;
          justify-content: flex-start;
          background-color: #fff;
          // -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
          // -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
          // box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
          text-decoration: none;
          transition: 0.3s linear;
          &:hover {
            -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
            box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          }
          img {
            margin: 18px 15px 18px 36px;
          }
          .question-title-text {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #000000;
            margin: 0 15px;
          }
        }
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 950px) {
  .question-text {
    padding-left: 10px !important;
    width: 700px !important;
    margin: 10px auto !important;
  }
  .question-list-group {
    width: 700px !important;
    margin: 0 auto;
    // width: 50%;
    div {
      width: 50%;
      display: block;
      a {
        margin: 10px auto !important;
        width: 95% !important;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .question-text {
    padding-left: 10px !important;
  }
  .question-list-group {
    // width: 50%;
    div {
      width: 100% !important;
      display: block;
      a {
        margin: 10px auto !important;
        width: 95% !important;
      }
    }
  }
}
</style>
