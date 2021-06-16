<template>
  <div>
    <div class="body">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: { Header, Footer }
};
</script>
<style lang="scss">
.body {
  width: 1300px !important;
  margin: 0 auto;
  // background: red;
}
</style>
