<template>
  <div>
    <div id="sections">
      <div class="container">
        <div class="sections-body">
          <div class="section-text title-text">
            {{ sectionTitle[`${$i18n.locale}`] }}
          </div>
          <div class="section-list-group">
            <div v-for="(item, index) in sectionItem" :key="index">
              <nuxt-link :to="item.to" class="section-list-box">
                <img :src="item.sectionIcon" :alt="item.iimgAlt" />
                <div class="section-title-text">{{ item.sectionTitle[`${$i18n.locale}`] }}</div>
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
      sectionTitle: {
        uz: "Bo'limlar",
        cy: "Бўлимлар",
        ru: "Разделы"
      },

      sectionItem: [
        {
          sectionIcon: require("@/assets/img/section/notariant.svg"),
          sectionTitle: {
            uz: "Notariant",
            cy: "Нотариат",
            ru: "Нотариат"
          },
          to: "/notary",
          iimgAlt: "notariant-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle: {
            uz: "Advokatura",
            cy: "Адвокатура",
            ru: "Адвокатура"
          },
          to: "/phone",
          iimgAlt: "advokatura-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/yurudik.svg"),
          sectionTitle: {
            uz: "Yuridik ta'lim",
            cy: "Юридик таълим",
            ru: "Юридическое образование"
          },

          to: "https://saytlar.uz",
          iimgAlt: "yurudik-talim-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/lugat.svg"),
          sectionTitle: {
            uz: "Yuridik lug'at",
            cy: "Юридик таълим",
            ru: "Юридическое образование"
          },

          to: "/dictionary",
          iimgAlt: "yurudik-lugat-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/dxa.svg"),
          sectionTitle: 
          {
            uz:  "DXA",
            cy: "ДХА",
            ru: "СГA"
          },
         
          to: "https://xmn.tuit.com",
          iimgAlt: "dxa-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle:  {
            uz:  "FXDYO",
            cy: "ФХДЁ",
            ru: "ГИБДД"
          }, 
          to: "https://moodle.tuit.com",
          iimgAlt: "fxdyo-icon"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;

  #sections {
    max-width: 100%;
    // height: 529px;
    padding: 60px 30px;
    padding-top: 15px;
    padding-bottom: 75px;
    .section-text {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 35px;
      /* dark gray */
      color: #333333;
      margin: 0 0 15px 0;
    }
    .section-list-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .section-list-box {
        width: 415px;
        height: 222px;
        margin: 15px 0;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: column;
        background-color: #fff;

        transition: 0.3s linear;
        text-decoration: none;
        &:hover {
          -webkit-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
          box-shadow: 0px 5px 50px 2px rgba(34, 60, 80, 0.2);
        }
        img {
          margin-bottom: 25px;
        }
        .section-title-text {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
          text-align: center;
        }
      }
    }
  }
}

@media (min-width: 1500px) and (max-width: 1920px) {
  * {
    box-sizing: border-box;
    margin: auto;
    #sections {
      max-width: 1450px;
      // height: 529px;
      .section-text {
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
        margin-top: 83px !important;
        margin-left: 25px !important;
        /* dark gray */
        color: #333333;
      }
      .section-list-group {
        margin: 0 !important;
        padding: 0px !important;
        .section-list-box {
          height: 250px;
          width: 430px;
          margin: 15px 0px !important;
        }
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 950px) {
  * #sections[data-v-29d191d0] {
    padding: 0px 30px 60px 30px !important;
  }
  .section-list-group {
    width: 700px !important;
    div {
      width: 33%;
      display: block;
      a {
        margin: 10px auto !important;
        width: 95% !important;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 576px) {
  * #sections[data-v-29d191d0] {
    margin: 0 auto !important;
    padding: 65px 5px !important;
    .section-text{
      padding: 0 5px;
    }
  }
  .section-list-group {
    // width: 50%;
    div {
      width: 50%;
      display: block;
      a {
        font-size: 16px !important;
        margin: 10px auto !important;
        width: 95% !important;
      }
    }
  }
}
</style>
