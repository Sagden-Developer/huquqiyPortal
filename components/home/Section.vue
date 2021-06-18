<template>
  <div id="sections">
    <div class="sections-body">
      <div class="section-text">{{ sectionTitle }}</div>
      <div class="section-list-group">
        <div v-for="(item, index) in sectionItem" :key="index">
          <a
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="section-list-box"
          >
            <img :src="item.sectionIcon" :alt="item.iimgAlt" />
            <div class="section-title-text">{{ item.sectionTitle }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionTitle: "Bo'limlar",
      sectionItem: [
        {
          sectionIcon: require("@/assets/img/section/notariant.svg"),
          sectionTitle: "Notariant",
          href: "https://yandex.ru",
          iimgAlt: "notariant-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle: "Advokatura",
          href: "https://google.com",
          iimgAlt: "advokatura-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/yurudik.svg"),
          sectionTitle: "Yurudik ta'lim",
          href: "https://saytlar.uz",
          iimgAlt: "yurudik-talim-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/lugat.svg"),
          sectionTitle: "Yurudik lug'at",
          href: "https://tuit.uz",
          iimgAlt: "yurudik-lugat-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/dxa.svg"),
          sectionTitle: "DXA",
          href: "https://xmn.tuit.com",
          iimgAlt: "dxa-icon"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle: "FXDYO",
          href: "https://moodle.tuit.com",
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
    max-width: 1240px;
    margin: 0 30px;
    .section-text {
      font-family: "Oxygen";
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
        width: 400px;
        height: 222px;
        margin: 10px 0;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: column;
        background-color: #fff;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
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

@media (min-width: 350px) and (max-width: 576px){
     .section-list-group{
       div{
         width: 50%;
         a{width: 100% !important}
       }
   }
}
</style>
