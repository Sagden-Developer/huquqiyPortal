<template>
  <div>
    <div class="body">
      <Header />
      <Nuxt />
    </div>
    <Footer />
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
*{
  margin: 0;
  padding: 0;
}
.body {
  width: 1300px !important;
  margin: 0 auto;
  // background: red;
}
</style>
