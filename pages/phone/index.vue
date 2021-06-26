<template>
  <div>
    <div class="boxs">
      <div class="box">
        <h4>Ishonch raqamlari</h4>
        <p class="phone-breadcrumbs">
          <nuxt-link style="color: #333; text-decoration: none" to="/" href="#">
            Bosh sahifa
          </nuxt-link>
          / Ishonch raqamlari
        </p>
      </div>
    </div>
    <div id="phones-body">
      <div class="phones">
        <div class="search-part">
          <input
            type="search"
            name="search"
            v-model="search"
            placeholder="Tashkilot Nomi"
          /><button @click="searchPhones()">
            Izlash
            <span>
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
                  d="M20.9999 20.9999L16.6499 16.6499"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div class="phones-part">
          <div class="table-phone">
            <div class="table-head">
              <div class="phone-organization">Tashkilotlar nomi</div>
              <div class="phone-number">Telefon raqami</div>
            </div>
            <div class="table-body">
              <div
                class="phone-catalog"
                v-for="phone in $store.state.phones.phones"
                :key="phone._id"
              >
                <div class="catalog">{{ phone.name[$i18n.locale] }}</div>
                <div
                  class="phone-item"
                  v-for="item in phone.child"
                  :key="item._id"
                >
                  <div class="organization">
                    {{ item.title[`${$i18n.locale}`] }}
                  </div>
                  <div class="phone-number">{{ item.number }}</div>
                </div>
                <div v-if="phone.child.length==0" class="not-foundPhone">
                  Hech nima topilmadi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="categories">
        <p
          v-for="(catalog, index) in $store.state.phones.catalogs"
          :key="index"
          :class="
            selectedItem == index ? 'category-item-active' : 'category-title'
          "
          @click="setSelectedCatalog(catalog, index)"
        >
          {{ catalog.name[`${$i18n.locale}`] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dateformat from "dateformat";
export default {
  head() {
    return {
      title: this.$t('lan7'),
     
   
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data: () => ({
    search: "",
    selectedItem: 0,
    categories: ["Adliya Vazirligi", "Vazirliklar", "Davlat qo’mitalari"],
  }),
  computed: {},
  methods: {
    dateFormat(date) {
      return dateformat(date, "isoDate");
    },
    setSelectedCatalog(catalog, index) {
      this.selectedItem = index;
      console.log(catalog);
      this.$store.dispatch("phones/GET_BY_CATALOG_PHONES", catalog._id);
    },
    getPhones(phones, catalogId) {
      return phones.filter((phone) => {
        return phone.catalog._id == catalogId;
      });
    },
    searchPhones() {
      this.$store.dispatch("phones/GET_QUERY_PHONES", this.search);
      // if (this.search.length > 0) {
      //   return this.$store.state.phones.phones.filter(phone => {
      //     return phone.title.uz.search(this.search);
      //   });
      // } else {
      //   return this.$store.state.phones.phones;
      // }
    },
  },
  created() {
    this.phones = this.$store.state.phones.phones;
  },
  beforeCreate() {
    this.$store.dispatch("phones/GET_PHONES");
    this.$store.dispatch("phones/GET_PHONE_CATALOGS");
  },
};
</script>

<style lang="scss">
.not-foundPhone{
  text-align: center;
  margin-top: 17px;
  font-size: 18px;
  font-weight: 600;
}
$text-color: #333333;
$bg-color: #d9e6eb;
.boxs {
  background: #597ba3;
  width: 1340px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  margin-top: 26px;
  .box {
    width: 1300px;
    margin: 0 auto;

    padding: 15px 0;

    h4 {
      font-size: 24px;
      line-height: 29px;
      margin-top: 33px;
      color: #fff;
      font-weight: 600;
    }
    p {
      display: flex;
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      margin-top: 40px;
    }
  }
}

@media (min-width: 1400px) and (max-width: 1920px) {
  .boxs {
    // background: $bg-color !important;
    // width: 1700px !important;
    // height: 200px;
    // margin-left: auto;
    // margin-right: auto;
    // border-radius: 24px;
    // margin-top: 26px;
    // padding-left: 145px;
    .box {
      padding: 15px 0;
      width: auto;
      color: $text-color !important;
      h4 {
        margin-top: 53px;
        color: $text-color !important;
      }
      p {
        color: $text-color !important;
        font-size: 20px;
        line-height: 24px;
        margin-top: 40px;
      }
    }
  }

  #phones-body {
    width: 1410px !important;
    margin: auto !important;
    margin-top: 50px !important;
    margin-bottom: 100px !important;
    display: flex;
    align-items: flex-start;
    .phones {
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      width: 950px !important;
      box-sizing: border-box;
      .search-part {
        margin-bottom: 30px;
        input {
          width: 778px;
          outline: none;
          height: 50px;
          padding: 12px 20px;
          background: #ffffff;
          border: 1px solid rgba(89, 123, 163, 0.2);
          box-sizing: border-box;
          border-radius: 8px;
        }
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-left: 20px;
          width: 132px;
          height: 50px;
          background: #597ba3;
          border-radius: 8px;
          outline: none;
          border: none;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          span {
            margin-left: 10px;
          }
        }
      }
      .phones-part {
        .table-phone {
          width: 930px;
          background: #ffffff;
          border: 1px solid rgba(89, 123, 163, 0.2);
          box-sizing: border-box;
          border-radius: 12px;
          padding-bottom: 17px;
          .table-head {
            display: flex;
            justify-content: space-between;
            text-align: center;
            height: 77px;
            align-items: center;

            font-family: IBM Plex Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            color: #333333;
            .phone-organization {
              flex: 6;
              height: 77px;
              text-align: left;
              padding-left: 30px;
              line-height: 77px;
              border-right: 1px solid rgba(89, 123, 163, 0.2);
              border-bottom: 1px solid rgba(89, 123, 163, 0.2);
            }
            .phone-number {
              flex: 2;

              height: 77px;
              line-height: 77px;
              border-bottom: 1px solid rgba(89, 123, 163, 0.2);
            }
          }
          .table-body {
            .phone-catalog {
              .catalog {
                background: #d5dee8;
                font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 26px;
                text-align: center;
                color: #333333;
                height: 80px;
                line-height: 80px;
              }
              .phone-item {
                display: flex;
                justify-content: space-between;
                text-align: center;
                height: 68px;
                align-items: center;
                font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 23px;
                color: #333333;
                .organization {
                  height: 68px;
                  text-align: left;
                  padding-left: 30px;
                  line-height: 68px;
                  border-right: 1px solid rgba(89, 123, 163, 0.2);
                  border-bottom: 1px solid rgba(89, 123, 163, 0.2);
                  flex: 6;
                }
                .phone-number {
                  flex: 2;
                  height: 68px;
                  line-height: 68px;
                  border-bottom: 1px solid rgba(89, 123, 163, 0.2);
                }
              }
            }
          }
        }
      }
    }
    .categories {
      display: flex;
      flex-direction: column;
      width: 450px;
      background: #ffffff;
      border: 1px solid rgba(89, 123, 163, 0.2);
      box-sizing: border-box;
      border-radius: 12px;
      padding: 35px 28px 18px;
      .category-title {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        width: 394px;
        height: 57px;
        color: #333333;
        padding: 15px;
        margin-top: 13px;
        cursor: pointer;

        &:hover {
          border-radius: 8px;
          background: rgba(89, 123, 163, 0.15);

          transition: 0.5s all ease-in;
        }
      }
      .category-item-active {
        width: 394px;
        cursor: pointer;
        height: 57px;
        margin: auto;
        padding: 20px;
        color: $bg-color;
        background: #597ba3;
        border-radius: 8px;
        margin-top: 13px;
        transition: background 0.5s ease-in;
      }
      .category-item {
        width: 394px;
        cursor: pointer;
        height: 57px;
        margin: auto;
        margin-top: 13px;
        padding: 20px;
        color: #333333;
        border-radius: 8px;
        background: rgba(89, 123, 163, 0.15);
      }
    }
  }
}
</style>
