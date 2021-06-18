<template>
  <div>
    <Slider />
    <News />
    <Section />
    <Question />
    <Rating />
    <Ebook />
    <Videos />
    <Weblinks />

  </div>
</template>

<script>
import Slider from "../components/home/Slider";
import News from "../components/home/News";
import Section from "../components/home/Section";
import Question from "../components/home/Question";
import Rating from "../components/home/Rating";
import Ebook from "../components/home/Ebook";
import Videos from "../components/home/Videos";
import Weblinks from "../components/home/Weblinks";

export default {
  // name: "HuquqClientIndex",

  components: { Slider, News, Section, Question, Rating , Ebook, Videos ,Weblinks},

  // directives: { DirectiveName },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  beforeCreate() {
    this.$store.dispatch('home/GET_HOMES_VIDEO');
    this.$store.dispatch('home/GET_HOMES_NEWS');
    this.$store.dispatch('home/GET_HOMES_SITES');
    this.$store.dispatch('home/GET_HOMES_LIBRARIES');
  }
};
</script>

<style lang="scss" scoped></style>
