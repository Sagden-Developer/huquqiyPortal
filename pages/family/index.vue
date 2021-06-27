<template>
  <div>
    <div class="container">
      <div class="head-content">
        <div class="head-text">
          <div class="text"></div>
          <h4 class="title-text">
            Notariat
          </h4>
          <p class="link-text">
            <nuxt-link to="/" class="link-text"> Bosh sahifa /</nuxt-link
            ><nuxt-link to="/notary">
              Huquqiy muammolar yechimi/
            </nuxt-link>
            Oilaviy munosabatlar
          </p>
        </div>
        <div class="head-logo"></div>
      </div>
      <div class="main">
          <div id="accordion" class="accordion-container">
        <div
          v-for="(category, index) in items"
          :key="index"
          class="accordion accordion__trigger"
          :class="{ accordion_active: visible === index }"
          @click="visible == null ? (visible = index) : (visible = null)"
        >
          <div class="accordion__item">
            <div class="accordion-head">
              <div>{{ category.title }}</div>
              <input type="button" :value="visible === index ? '-' : '+'" />
            </div>
            <div class="accordion__content">
              <div class="menu-sub-list" v-show="visible === index">
                <div class="sub-list">
                  <!-- <div class="menu-item">{{ category.text }}</div> -->
                  <nuxt-link to="/family/id" class="title-text">
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 2V8H20"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 13H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 17H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9H9H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        /></svg
                    ></span>
                    {{ category.text }}
                  </nuxt-link>
                  <nuxt-link to="/family/id" class="title-text">
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 2V8H20"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 13H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 17H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9H9H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        /></svg
                    ></span>
                    {{ category.text1 }}
                  </nuxt-link>
                  <nuxt-link to="/family/id" class="title-text">
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 2V8H20"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 13H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 17H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9H9H8"
                          stroke="#2AA3E7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        /></svg
                    ></span>
                    {{ category.text2 }}
                  </nuxt-link>
                </div>
              </div>
            </div>
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
      visible: null,
      items: [
        {
          id: 1,
          title: "Fuqarolik holati dalolatnomalarini qayd etish tartibi",
          text: "Fuqarolik holati dalolatnomalarini qayd etuvchi organlar",
          text1: "Nikoh tuzish tartibi",
          text2: "Tug‘ilishni qayd etish tartibi",
          sub:
            "– pochta aloqasi ob'ektlarida o‘rnatiladigan qulflanadigan qutichalardan iborat maxsus javon bo‘lib, bu qutichalar yozma xat-xabarlarni, davriy bosma nashrlarni, pochta, kur'erlik jo‘natmalari va pul mablag‘larining pochta o‘tkazmalari kelganligi to‘g‘risidagi xabarnomalarni olish uchun adresatlar tomonidan muayyan muddatga ijaraga olinadi."
        },
        {
          id: 2,
          title: "Ota-ona hamda voyaga yetmagan bolalarning huquq va majburiyatlari",
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
      ]
    };
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
  justify-content: space-between;
  margin-top: 40px;
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
      a {
        text-decoration: none;
        color: #333333;
      }
      color: #333333;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      margin-top: 20px;
    }
  }
  .head-logo {
    width: 205.76px;
    height: 154.46px;
    background-repeat: no-repeat;
    background-image: url("~/assets/img/question/questionicon.png");
  }
}
.sub-list {
  display: flex !important;
  flex-direction: column !important;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #2aa3e7;
    margin-top: 10px;
    svg {
      margin-right: 5px;
    }
  }
}

.main{
    margin-top: 40px;
}
#accordion{
    width: 70%;

}
.accordion-container {
  .accordion {
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
          .sub-list {
            display: flex !important;
            flex-direction: column !important;
          }

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
</style>
