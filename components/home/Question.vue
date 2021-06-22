<template>
  <div>
    <div id="question">
      <div class="container">
        <div class="question-body">
          <div class="question-text title-text">{{ questionTitle }}</div>
          <div class="question-list-group">
            <div v-for="(item, index) in questionItem" :key="index">
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="question-list-box"
              >
                <img :src="item.questionIcon" :alt="item.iimgAlt" />
                <div class="question-title-text">{{ item.questionTitle }}</div>
              </a>
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
      questionTitle: "Huquqiy muamolar yechimi",
      questionItem: [
        {
          questionIcon: require("@/assets/img/question/mehnat.svg"),
          questionTitle: "Mehnat munosabatlari",
          href: "https://yandex.ru",
          iimgAlt: "mehnat-icon"
        },
        {
          questionIcon: require("@/assets/img/question/oilaviy.svg"),
          questionTitle: "Oilaviy munosabatlar",
          href: "https://yandex.ru",
          iimgAlt: "oilaviy-icon"
        },
        {
          questionIcon: require("@/assets/img/question/komunal.svg"),
          questionTitle: "Uy-joy va kommunal masalalar",
          href: "https://yandex.ru",
          iimgAlt: "komunal-icon"
        },
        {
          questionIcon: require("@/assets/img/question/fuqarolik.svg"),
          questionTitle: "Fuqarolik / Migratsiya",
          href: "https://yandex.ru",
          iimgAlt: "fuqarolik-icon"
        },
        {
          questionIcon: require("@/assets/img/question/sogliq.svg"),
          questionTitle: "Sog’liqni saqlash",
          href: "https://yandex.ru",
          iimgAlt: "sogliq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/himoya.svg"),
          questionTitle: "Ijtimoiy himoya",
          href: "https://yandex.ru",
          iimgAlt: "himoya-icon"
        },
        {
          questionIcon: require("@/assets/img/question/talim.svg"),
          questionTitle: "Ta’lim",
          href: "https://yandex.ru",
          iimgAlt: "talim-icon"
        },
        {
          questionIcon: require("@/assets/img/question/sud.svg"),
          questionTitle: "Sud-huquq masalalari",
          href: "https://yandex.ru",
          iimgAlt: "sud-icon"
        },
        {
          questionIcon: require("@/assets/img/question/yer.svg"),
          questionTitle: "Yer masalalari",
          href: "https://yandex.ru",
          iimgAlt: "yer-icon"
        },
        {
          questionIcon: require("@/assets/img/question/tadbirkorlik.svg"),
          questionTitle: "Tadbirkorlik",
          href: "https://yandex.ru",
          iimgAlt: "tadbirkorlik-icon"
        },
        {
          questionIcon: require("@/assets/img/question/soliq.svg"),
          questionTitle: "Soliqlar",
          href: "https://yandex.ru",
          iimgAlt: "soliq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/bank.svg"),
          questionTitle: "Bank sohasi",
          href: "https://yandex.ru",
          iimgAlt: "bank-icon"
        },
        {
          questionIcon: require("@/assets/img/question/davxiz.svg"),
          questionTitle: "Davlat hizmatlari",
          href: "https://yandex.ru",
          iimgAlt: "davlat-xizmatlari-icon"
        },
        {
          questionIcon: require("@/assets/img/question/transport.svg"),
          questionTitle: "Transport",
          href: "https://yandex.ru",
          iimgAlt: "transport-icon"
        },
        {
          questionIcon: require("@/assets/img/question/istemolchi.svg"),
          questionTitle: "Istemolchi huquqi",
          href: "https://yandex.ru",
          iimgAlt: "istemolchi-icon"
        },
        {
          questionIcon: require("@/assets/img/question/chetel.svg"),
          questionTitle: "Chet elliklarga eslatma",
          href: "https://yandex.ru",
          iimgAlt: "chet-el-icon"
        },
        {
          questionIcon: require("@/assets/img/question/qishloq.svg"),
          questionTitle: "Qishloq ho’jaligi",
          href: "https://yandex.ru",
          iimgAlt: "qishloq-icon"
        },
        {
          questionIcon: require("@/assets/img/question/malumot.svg"),
          questionTitle: "Ma’lumotlar",
          href: "https://yandex.ru",
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
    margin-bottom: 70px;
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
@media (min-width: 576px) and (max-width: 950px) {
  .question-text{
    padding-left: 10px !important;
  }
  .question-list-group {
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
  .question-text{
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
