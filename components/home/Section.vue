<template>
  <div id="sections">
    <div class="sections-body">
      <div class="section-text">{{ sectionTitle }}</div>
      <div class="section-list-group">
        <div
          class="section-list-box"
          v-for="(item, index) in sectionItem"
          :key="index"
        >
          <img :src="item.sectionIcon" alt="" />{{ item.sectionTitle }}
          <a :href="item.href" v-if="item.href">
            Link
          </a>
          <nuxt-link :to="item.to" v-if="item.to">Link to </nuxt-link>
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
          to: "/hello"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle: "Advokatura",
          to: "/hello"
        },
        {
          sectionIcon: require("@/assets/img/section/yurudik.svg"),
          sectionTitle: "Yurudik ta'lim",
          href: "https://google.com"
        },
        {
          sectionIcon: require("@/assets/img/section/lugat.svg"),
          sectionTitle: "Yurudik lug'at",
          href: "https://google.com"
        },
        {
          sectionIcon: require("@/assets/img/section/dxa.svg"),
          sectionTitle: "DXA",
          href: "https://google.com"
        },
        {
          sectionIcon: require("@/assets/img/section/advokat.svg"),
          sectionTitle: "FXDYO",
          href: "https://google.com"
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
    height: 529px;
    border: 1px solid;
    margin: 0 30px;
    .section-list-group {
      display: flex;
      flex-wrap: wrap;
      border: 1px solid blue;
      justify-content: center;
      .section-list-box {
        width: 400px;
        height: 222px;
        border: 1px solid red;
      }
    }
  }
}
</style>