<template>
  <div id="law">
    <div class="container">
    <div class="head-content">
      <div class="head-text">
        <div class="text"></div>
        <h4>Yuridik lug’at</h4>
        <p>
          <nuxt-link to="/" class="link-text"> Bosh sahifa </nuxt-link> /
          Yuridik lug’at
        </p>
      </div>
      <div class="head-logo"></div>
    </div>
    <div class="info-nav">
      <div class="alphabet">
        <button
          type="submit"
          v-for="(button, index) in buttons"
          :key="index"
          @click="activation(button.id, button.title)"
          :class="{ activeBtn: active_el == button.id }"
        >
          {{ button.title }}
        </button>
      </div>
      <div class="search-content">
        <div class="search-btns">
          <input type="text" v-model="search" />
          <div class="search-button">
            <button type="submit" @click="searchByText()">
              Izlash
              <div class="search-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.0004 21L16.6504 16.65"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div class="search-info">
          4000 dan ortiq maxsus yuridik terminlar, yuridik amaliyot, nazariya,
          ilm-fan va ta'lim jarayonida keng qo‘llaniladigan so‘zlar jamlangan
        </div>
      </div>
    </div>
    <div class="info-content">
      <!-- Accardion -->
      <div id="accordion" class="accordion-container">
        <div
          v-for="(category, index) in $store.state.dictionaries.dictionary2"
          :key="index"
          class="accordion accordion__trigger"
          :class="{ accordion_active: visible === index }"
          @click="visible == null ? (visible = index) : (visible = null)"
        >
          <div class="accordion__item">
            <div class="accordion-head">
              <div>{{ category.term[$i18n.locale] }}</div>
              <input type="button" :value="visible === index ? '-' : '+'" />
            </div>
            <div class="accordion__content">
              <div class="menu-sub-list" v-show="visible === index">
                <div class="sub-list">
                  <div class="menu-item">{{ category.description[$i18n.locale] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End accordion -->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isActive: false,
      items: [
        {
          id: 1,
          title: "Aboniment javoni",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub:
            "– pochta aloqasi ob'ektlarida o‘rnatiladigan qulflanadigan qutichalardan iborat maxsus javon bo‘lib, bu qutichalar yozma xat-xabarlarni, davriy bosma nashrlarni, pochta, kur'erlik jo‘natmalari va pul mablag‘larining pochta o‘tkazmalari kelganligi to‘g‘risidagi xabarnomalarni olish uchun adresatlar tomonidan muayyan muddatga ijaraga olinadi."
        },
        {
          id: 2,
          title: "Absolyut monarxirya",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 3,
          title: "Absenteizm",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 4,
          title: "Absolyutizm",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 5,
          title: "Avans (Bo’nak)",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 6,
          title: "Avariya rejimi",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 7,
          title: "Avtomatdan foydalangan holda tovar sotish",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 8,
          title: "Avtomobil yo’li",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        },
        {
          id: 9,
          title: "Avtomobil transporti",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          sub: "Pellentesque risus mi"
        }
      ],
      visible: null,
      buttons: [
        { id: 1, title: "Barchasi" },
        { id: 2, title: "A" },
        { id: 3, title: "B" },
        { id: 4, title: "D" },
        { id: 5, title: "E" },
        { id: 6, title: "F" },
        { id: 7, title: "G" },
        { id: 8, title: "H" },
        { id: 9, title: "I" },
        { id: 10, title: "J" },
        { id: 11, title: "K" },
        { id: 12, title: "L" },
        { id: 13, title: "M" },
        { id: 14, title: "N" },
        { id: 15, title: "O" },
        { id: 16, title: "P" },
        { id: 17, title: "Q" },
        { id: 18, title: "R" },
        { id: 19, title: "S" },
        { id: 20, title: "T" },
        { id: 21, title: "U" },
        { id: 22, title: "V" },
        { id: 23, title: "X" },
        { id: 24, title: "Y" },
        { id: 25, title: "Z" },
        { id: 26, title: "O`" },
        { id: 27, title: "G`" },
        { id: 28, title: "SH" },
        { id: 29, title: "CH" }
      ],
      active_el: 1
    };
  },
  methods: {
    activation: function(el, char) {
      this.active_el = el;
      this.$store.dispatch('dictionaries/GET_DICTIONARY2_BY_CHAR', char);
    },
    searchByText(){
      this.$store.dispatch('dictionaries/GET_DICTIONARY2', this.search);
    }
  },
  beforeCreate(){
      this.$store.dispatch('dictionaries/GET_DICTIONARY2', "");
  }
};
</script>

<style lang="scss">
#law {
  width: 1300px;
  // height: 1533px; //1518 agar tagidagi chiziq z-index bn bosa
  padding: 35px 30px 100px 30px;
  background: #f1f3f4;
  margin: 0 auto;
  .head-content {
    width: 1240px;
    height: 200px;
    background: #d9e6eb;
    border-radius: 24px;
    padding: 23px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head-text {
      padding: 30px 0;
      h4 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #333333;
        width: 164px;
        height: 29px;
        margin-bottom: 20px;
      }
      .link-text {
        width: 280px;
        height: 24px;
        font-family: Montserrat;
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
      width: 150.76px;
      height: 154.46px;
      background-image: url("~/assets/img/law/headbook.svg");
    }
  }
  .info-nav {
    width: 1240px;
    height: 187px;
    padding: 40px 0 20px 0;
    display: flex;
    justify-content: space-between;
    .alphabet {
      width: 704px;
      height: 104px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      align-items: center;
      justify-content: space-between;
      button[type="submit"] {
        width: 45px;
        height: 47px;
        border: 1px solid;
        background: #ffffff;
        color: #333333;
        border: 1px solid rgba(89, 123, 163, 0.2);
        box-sizing: border-box;
        border-radius: 8px;
        // padding: 12px 16px;
        text-align: center;
        &:first-child {
          width: 110px;
          height: 47px;
        }
      }
      button[type="submit"].activeBtn {
        background: #597ba3;
        color: #fff;
      }
    }
    .search-content {
      width: 505px;
      height: 117px;
      .search-btns {
        width: 505px;
        height: 50px;
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 7px;
        input {
          width: 358px;
          height: 50px;
          background: #ffffff;
          border: 1px solid rgba(89, 123, 163, 0.2);
          box-sizing: border-box;
          border-radius: 8px;
          outline: none;
          padding: 10px 15px;
        }
        .search-button {
          button[type="submit"] {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 132px;
            height: 50px;
            padding: 10px 15px;
            background: #597ba3;
            border-radius: 8px;
            color: #ffffff;
            border: 0;
          }
        }
      }
      .search-info {
        width: 505px;
        height: 60px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #333333;
      }
    }
  }
  .info-content {
    width: 1240px;
    height: 922px;
    // border: 1px solid gray;
    .accordion-container {
      .accordion {
        width: 1240px;
        background: #ffffff;
        border: 1px solid rgba(89, 123, 163, 0.2);
        border-radius: 12px;
        .accordion_active {
          height: 201px;
        }
      }
      .accordion__trigger {
        margin: 10px 0;
        width: 100%;
        .accordion__item {
          width: 100%;
          .accordion-head {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #333333;
            input[type="button"] {
              width: 40px;
              height: 40px;
              background: #597ba3;
              border-radius: 14px;
              color: #fff;
              border: 0 !important;
            }
          }
          .accordion__content {
            .menu-sub-list {
              padding: 20px;
              .menu-item {
                width: 1200px;
                height: 96px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
}
</style>