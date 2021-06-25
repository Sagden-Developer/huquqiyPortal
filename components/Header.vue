<template>
  <div>
    <header>
      <div class="container">
        <div class="header">
          <div class="left">
            <nuxt-link
              :to="{ name: `index___${$i18n.locale}` }"
              class="home-link"
            >
              <span style="margin-right: 8px">
                <img src="@/assets/image/adliya-logo.png" alt="" />
              </span>
              <h2 class="logo-text">
                {{ $t("lan") }}
              </h2>
            </nuxt-link>
          </div>

          <div class="right">
            <div class="izlash">
              <input type="text" :placeholder="$t('search')" />
              <button class="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9999 21L16.6499 16.65"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="til">
              <button>
                <svg
                  class="flag"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path d="M0 17.3316H26V26H0V17.3316Z" fill="#1EB53A" />
                  <path d="M0 0H26V8.66836H0V0Z" fill="#0099B5" />
                  <path d="M0 8.31797H26V17.682H0V8.31797Z" fill="#CE1126" />
                  <path d="M0 8.83594H26V17.1641H0V8.83594Z" fill="white" />
                  <path
                    d="M7.28203 7.27695C9.00404 7.27695 10.4 5.88099 10.4 4.15898C10.4 2.43698 9.00404 1.04102 7.28203 1.04102C5.56002 1.04102 4.16406 2.43698 4.16406 4.15898C4.16406 5.88099 5.56002 7.27695 7.28203 7.27695Z"
                    fill="white"
                  />
                  <path
                    d="M8.31792 7.27695C10.0399 7.27695 11.4359 5.88099 11.4359 4.15898C11.4359 2.43698 10.0399 1.04102 8.31792 1.04102C6.59591 1.04102 5.19995 2.43698 5.19995 4.15898C5.19995 5.88099 6.59591 7.27695 8.31792 7.27695Z"
                    fill="#0099B5"
                  />
                  <path
                    d="M14.1425 6.02835L13.9449 6.62115L14.2465 6.72515"
                    fill="white"
                  />
                </svg>
                <span v-if="$i18n.locale == 'uz'">O'zbekcha</span>
                <span v-if="$i18n.locale == 'kr'">Ўзбекча</span>
                <span v-if="$i18n.locale == 'ru'">русский</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                >
                  <path
                    d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                    fill="#1E6BDD"
                  />
                </svg>
              </button>

              <div class="til-menu">
                <div class="">
                  <ul class="classLang" style="list-style:none">
                    <li>
                      <h6 @click.prevent="clickUz">O'zbekcha</h6>
                    </li>
                    <li>
                      <h6 @click.prevent="clickKiril">Ўзбекча</h6>
                    </li>
                    <li>
                      <h6 @click.prevent="clickRu">русский</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="maxsus">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
              <h3 @click="maxsus = !maxsus">{{ $t("lan9") }}</h3>
              <br />

              <div v-if="maxsus" class="special">
                <p>Shrift o'lchami</p>
              </div>
            </div>

            <div class="bar">
              <button @click="isMenu = !isMenu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4 16H28"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 8H28"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 24H28"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div @click="isMenu = !isMenu" :class="isMenu ? 'fix-vh' : ''"></div>
        <div :class="isMenu ? ' bottom bottom-media' : 'bottom'">
          <ul :class="isRu ? 'ru-menu' : ''">
            <li>
              <a class="start targibot-link" @click="targibotList">
                {{ $t("lan2") }}
                <svg
                  :class="targibot ? 'bur' : ''"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                >
                  <path
                    d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                    fill="#1E6BDD"
                  />
                </svg>
              </a>
              <div v-if="targibot" class="targibot">
                <div class="">
                  <a
                    style="cursor: pointer"
                    @click.prevent="clickLink('promote___')"
                    >{{ $t('law')}} </a
                  >
                  <a href="" class="">{{ $t('presidentlaw')}}</a>
                  <a href="" class="">{{ $t('state')}}</a>
                  <a href="" class="">{{ $t('other')}}</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#" @click="testList" class="targibot-link">
                {{ $t("lan3") }}
                <svg
                  :class="test ? 'bur' : ''"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                >
                  <path
                    d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                    fill="#1E6BDD"
                  /></svg
              ></a>
              <div v-if="test" class="targibot">
                <div class="">
                  <a href="" class=""
                    >{{ $t('testeducator')}}</a
                  >
                  <a href="" class=""
                    >{{ $t('testpupil')}}</a
                  >
                  <a href="" class=""
                    >{{ $t('testworker')}}</a
                  >
                  <a href="" class=""
                    >{{ $t('testpeople')}}</a
                  >
                </div>
              </div>
            </li>
            <li>
              <a href="#" @click="bookList">
                {{ $t("lan4") }}
                <svg
                  :class="book ? 'bur' : ''"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                >
                  <path
                    d="M7.95898 1.56258L7.31315 0.916748L4.00065 4.22925L0.688151 0.916748L0.0423178 1.56258L4.00065 5.50008L7.95898 1.56258Z"
                    fill="#1E6BDD"
                  /></svg
              ></a>
              <div v-if="book" class="targibot">
                <div class="">
                  <nuxt-link to="/library" class=""
                    >{{ $t('insceducator')}} 
                  </nuxt-link>
                  <a href="" class=""
                    >{{ $t('inscpupil')}}</a
                  >
                  <a href="" class=""
                    >{{ $t('inscteacher')}} </a
                  >
                </div>
              </div>
            </li>
            <li>
              <a href="#">{{ $t("lan5") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("lan6") }}</a>
            </li>
            <li>
              <nuxt-link to="/phone" class="end" href="#">{{
                $t("lan7")
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="izlash-two">
          <input type="text" :placeholder="$t('lan8')" />
          <button class="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRu: false,
      isMenu: false,
      maxsus: false,
      targibot: false,
      test: false,
      book: false
    };
  },
  mounted() {
    if (this.$i18n.locale == "ru") {
      this.isRu = true;
    }
  },
  methods: {
    clickLink(url) {
      this.targibot = false;
      this.$router.push({ name: url + this.$i18n.locale });
    },
    bookList() {
      this.book = !this.book;
      if (this.test) {
        this.test = !this.test;
      }
      if (this.targibot) {
        this.targibot = !this.targibot;
      }
    },
    testList() {
      this.test = !this.test;
      if (this.book) {
        this.book = !this.book;
      }
      if (this.targibot) {
        this.targibot = !this.targibot;
      }
    },
    targibotList() {
      this.targibot = !this.targibot;
      if (this.test) {
        this.test = !this.test;
      }
      if (this.book) {
        this.book = !this.book;
      }
    },
    clickUz() {
      this.$i18n.setLocale("uz");
      this.isRu = false;
    },
    clickKiril() {
      this.$i18n.setLocale("kr");
      this.isRu = false;
    },
    clickRu() {
      this.$i18n.setLocale("ru");
      this.isRu = true;
    }
  }
};
</script>

<style lang="scss">
li.font {
  font-size: 14px !important;
}
.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
h2.logo-text {
  font-size: 16px;
  max-width: 276px;
  text-decoration: none !important;
  color: #333;
}
.bottom {
  width: 100%;
  margin-top: 40px;
  svg {
    transition: 0.5s;
  }
  svg.bur {
    transform: rotate(-180deg);
  }
  .targibot-link {
    cursor: pointer;
  }

  .targibot {
    position: absolute;
    z-index: 22;
    top: 40px;
    left: -10px;
    width: 306px;
    padding: 25px 20px;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    transition: 0.5s;
    div {
      transition: 0.5s;
      display: flex;
      flex-direction: column;
      a {
        padding-right: 0;
        border: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000 !important;
        text-decoration: none;
        // margin-top: 30px;
        margin-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(178, 164, 190, 0.25);
      }
      a:first-child {
        margin-top: 0;
      }
      a:last-child {
        border-bottom: 0;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding-left: 10px !important;
    li {
      position: relative;
      a.start {
        padding-left: 0px;
      }
      a {
        // padding: 0px 10px;
        padding-right: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
        color: #333333;
        border-right: 1px solid #b2a4be;
        svg {
          margin-left: 7px;
          path {
            fill: #333;
          }
        }
      }
      a.end {
        border-right: 0;
        padding-right: 0;
      }
      // display: inline-block;
    }
  }
  ul.ru-menu {
    li {
      a {
        font-size: 13px !important;
        padding-right: 10px;
      }
    }
  }
}
.izlash-two {
  display: none !important;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 36px;
  .left {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    justify-content: center;
    align-items: center;
    // width: 30%;
    text-decoration: none;
    display: flex;
    svg {
      margin-right: 15px;
    }
  }

  .izlash {
    position: relative;
    button.search-icon {
      padding: 10px;
      background: #e6e2df;
      z-index: 10;
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
      border: 0;
      background: transparent;
    }
    input {
      z-index: 1;
      width: 400px;
      padding: 0 20px;
      height: 54px;
      background: rgba(51, 51, 51, 0.1);
      border-radius: 50px;
      border: 0;
    }
    input::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #9e9e9e;
    }
    input:focus-visible {
      border: 0;
      outline: none;
    }
  }

  .right {
    // width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bar {
      display: none;
    }

    .maxsus {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-top: 5px;
        margin-right: 10px;
        color: #333333;
      }
      h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #333333;
      }
    }
  }
}
.til {
  position: relative;
  margin: 0px 60px;
  button {
    border: 0;
    background: transparent;
    width: 120px;
    // padding: 10px 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg.flag {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }
  }
  svg.bur {
    transform: rotate(-180deg);
  }
  svg:last-child {
    transition: 0.5s;
    transform: rotate(0);
    font-size: 26px;
    width: 10px;
    height: 10px;
    path {
      fill: #000;
    }
  }
}
.til:hover .til-menu {
  display: block;
}
.til-menu {
  position: absolute;
  display: none;
  z-index: 23;
  // padding: 10px;
  div {
    width: 100px;
    padding: 0px 10px;
    padding-bottom: 10px;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    h6 {
      text-decoration: none;
      margin-top: 10px;
      color: #777;
      font-size: 14px;
      cursor: pointer;
    }
    h6:hover {
      color: #000;
    }
  }
}
@media (min-width: 1300px) and (max-width: 1920px) {
  .fix-vh {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 998;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
  // .bottom-media {
  //   position: fixed !important;
  //   top: 0 !important;
  //   left: 0 !important;
  //   z-index: 999;
  //   height: 100vh !important;
  //   margin-top: 0 !important;
  //   background: #fbf9fb;
  //   padding: 20px;
  //   // ul {
  //   //   // flex-direction: column;
  //   //   // display: block !important;
  //   // }
  // }
  // .bottom {
  //   margin-top: 0 !important;
  //   background: #fbf9fb;
  //   padding: 20px;
  //   position: fixed;
  //   width: 60%;
  //   transition: 0.4s;
  //   top: 0;
  //   height: 100vh;
  //   left: -800px;
  //   z-index: 999;

  //   ul {
  //     flex-direction: column;
  //     li {
  //       display: block;
  //       margin-top: 10px;
  //       a {
  //         border: none;
  //         padding: 0;
  //         font-size: 25px;
  //       }
  //     }
  //   }
  // }
  // .izlash-two {
  //   display: none !important;
  // }
  // h2.logo-text {
  //   font-size: 14px;
  //   max-width: 220px !important;
  // }
  // header {
  //   width: 700px;

  //   .header {
  //     width: 90%;
  //     margin: 0 auto;

  //     .right {
  //       width: 50%;
  //       justify-content: space-between;

  //       .izlash {
  //         input {
  //           width: 215px;
  //         }
  //       }

  //       .bar {
  //         display: block;
  //         button {
  //           background: transparent;
  //           border: 0;
  //         }
  //       }
  //       .til {
  //         margin: 0 20px;
  //         button {
  //           width: 45px;
  //           svg {
  //             font-size: 20px;
  //           }
  //           span {
  //             display: none;
  //           }
  //         }
  //       }
  //       .maxsus {
  //         margin-right: 10px;
  //         h3 {
  //           display: none;
  //         }
  //       }
  //     }
  //   }
  // }
}

@media (min-width: 576px) and (max-width: 950px) {
  header {
    margin-top: 29px;
  }
  .fix-vh {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 998;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
  .bottom-media {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 999;
    height: 100vh !important;
    margin-top: 0 !important;
    background: #fbf9fb;
    padding: 20px;
    // ul {
    //   // flex-direction: column;
    //   // display: block !important;
    // }
  }
  .bottom {
    margin-top: 0 !important;
    background: #fbf9fb;
    padding: 20px;
    position: fixed;
    width: 60%;
    transition: 0.4s;
    top: 0;
    height: 100vh;
    left: -800px;
    z-index: 999;

    ul {
      flex-direction: column;
      li {
        display: block;
        margin-top: 10px;
        a {
          border: none;
          padding: 0;
          font-size: 25px;
        }
      }
    }
  }
  .izlash-two {
    display: none !important;
  }
  h2.logo-text {
    font-size: 14px;
    max-width: 220px !important;
  }
  header {
    width: 700px;

    .header {
      width: 90%;
      margin: 0 auto;

      .right {
        width: 50%;
        justify-content: space-between;

        .izlash {
          input {
            width: 215px;
          }
        }

        .bar {
          display: block;
          button {
            background: transparent;
            border: 0;
          }
        }
        .til {
          margin: 0 20px;
          button {
            width: 45px;
            svg {
              font-size: 20px;
            }
            span {
              display: none;
            }
          }
        }
        .maxsus {
          margin-right: 10px;
          h3 {
            display: none;
          }
        }
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .fix-vh {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 998;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
  .bottom-media {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 999;
    height: 100vh !important;
    margin-top: 0 !important;
    background: #fbf9fb;
    padding: 20px;
    // ul {
    //   // flex-direction: column;
    //   // display: block !important;
    // }
  }
  .bottom {
    margin-top: 0 !important;
    background: #fbf9fb;
    padding: 20px;
    position: fixed;
    width: 60%;
    transition: 0.4s;
    top: 0;
    height: 100vh;
    left: -800px;
    z-index: 999;

    ul {
      flex-direction: column;
      li {
        display: block;
        margin-top: 10px;
        a {
          border: none;
          padding: 0;
          font-size: 15px;
        }
      }
    }
  }
  h2.logo-text {
    font-size: 14px;
    max-width: 220px !important;
  }
  header {
    width: 100%;
    .izlash-two {
      width: 380px;
      margin: 0 auto;
      display: block !important;
      position: relative;
      button.search-icon {
        padding: 10px;
        background: #e6e2df;
        z-index: 10;
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;
        border: 0;
        background: transparent;
      }
      input {
        z-index: 1;
        width: 100%;
        padding: 0 20px;
        height: 54px;
        background: rgba(51, 51, 51, 0.1);
        border-radius: 50px;
        border: 0;
      }
      input::placeholder {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #9e9e9e;
      }
      input:focus-visible {
        border: 0;
        outline: none;
      }
    }

    .header {
      width: 90%;
      margin: 20px auto;
      .home-link {
        span {
          img {
            width: 41px !important;
          }
        }
      }
      .left {
        // width: 35%;
        span {
          width: 75px;
          svg {
            width: 100%;
          }
        }
        h2.logo-text {
          max-width: 160px;
          margin-left: 2px;
          font-size: 12px !important;
        }
      }
      .right {
        width: 50%;
        justify-content: space-between;
        .izlash {
          display: none;
          // input {
          //   // width: 215px;
          // }
        }

        .bar {
          display: block;
          button {
            background: transparent;
            border: 0;
          }
        }
        .til {
          z-index: 222;
          margin: 0 20px;
          button {
            width: 45px;
            svg {
              font-size: 20px;
            }
            span {
              display: none;
            }
          }
        }
        .maxsus {
          margin-right: 10px;
          h3 {
            display: none;
          }
        }
      }
    }
  }
}
</style>
