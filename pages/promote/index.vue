<template>
  <div>
    <div class="container">
        <div class="head-content">
        <div class="head-text">
          <div class="text"></div>
          <h4 class="title-text">
           {{ $t("tarqonun") }}
          </h4>
          <p class="link-text">
            <nuxt-link to="/" class="link-text">  {{ $t("head") }}</nuxt-link> /
          {{ $t("lan2") }}
          </p>
        </div>
        <div class="head-logo"></div>
      </div>
    </div>
    

    <div class="cards">
      <div
        class="cardx"
        v-for="material in $store.state.card.cards"
        :key="material._id"
      >
        <div class="img">
          <div class="imgs">
            <img
              v-for="(image, i) in material.files"
              :key="i"
              :src="`http://ass.tujjor.org/${image.path}`"
              alt=""
            />
          </div>

          <div class="circle">
            <div>
              <h5>{{ material.title.uz }}</h5>
              <div class="normativ" style="display: flex">
                <p>{{ dateFormat(material.date) }}</p>
                <p style="margin-left: 35px">
                  <svg
                    style="margin-right: 10px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M0.916504 11C0.916504 11 4.58317 3.66669 10.9998 3.66669C17.4165 3.66669 21.0832 11 21.0832 11C21.0832 11 17.4165 18.3334 10.9998 18.3334C4.58317 18.3334 0.916504 11 0.916504 11Z"
                        stroke="#8D8D8D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
                        stroke="#8D8D8D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <p style="margin-left: 5px">{{ material.views }}</p>
              </div>
            </div>

            <div class="line" @click="addViewAndRoute(material)">
              <p>&#10142;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateformat from "dateformat";
export default {
  head() {
    return {
      title: this.$t("tarqonun"),

      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  methods: {
    dateFormat(date) {
      let date1 = dateformat(date, "isoDate");
      date1 = date1.split("-").reverse();
      date1 = date1.join(".");
      return date1;
    },
    addViewAndRoute(material) {
      this.$store.dispatch("card/PLUS_VIEW_CARD", material._id).then(() => {
        material.views += 1;
        this.$router.push({
          path: `/promote/${material._id}`,
          query: { id: material }
        });
      });
    }
  },
  beforeCreate() {
    this.$store.dispatch("card/GET_CARDS");
  }
};
</script>

<style lang="scss">
.head-content {
      background: #d9e6eb;
      height: 200px;
      border-radius: 24px;
      padding: 50px;
      display: flex;
      align-items: center;
      margin-top: 40px;
      justify-content: space-between;
      .head-text {
        h4 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: #333333;
          height: 29px;
          margin-bottom: 20px;
        }
        .link-text {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #333333;
          margin-top: 20px;
          text-decoration: none;
        }
      }
      .head-logo {
        width: 195px;
        height: 154.46px;
        background-repeat: no-repeat;
        background-image: url("~/assets/img/promote/promoteicon.png");
      }
    }

  
.cards {
  width: 1300px;
  display: flex;
  margin: 30px auto;
}
.cardx {
  background: #ffffff;
  box-shadow: 0px 8px 50px rgba(119, 143, 177, 0.2);
  border-radius: 12px;
  width: 620px !important;
  //height: 290px;
  // margin-left: 30px;
  margin: 0 auto;
  .img {
    width: 100%;
    margin-top: 25px;
    margin-left: 8px;
    .imgs {
      margin: 0 auto;
      width: 100%;
      img {
        width: 28%;
        // margin: 0 auto;
      }
    }
    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      margin-left: 15px;
      margin-bottom: 0;
      margin-top: 0;
    }
    p {
      margin-top: 22px;
      margin-left: 17px;
      margin-bottom: 27px;
    }
    img {
      text-align: center;
      margin: 0 10px 25px 10px;
      //@at-rootmargin: 25px 10px;
      // width: 195px;
    }
  }
  .circle {
    display: flex;
    justify-content: space-between;
    .line {
      width: 60px;
      height: 60px;
      background: #597ba3;
      border-radius: 30px;
      margin-right: 28px;
      cursor: pointer;
      p {
        margin-top: 18px;
        margin-left: 22px;
        color: #fff;
      }
    }
    .normativ {
      p {
        color: #8d8d8d;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
}
</style>
