<template>
  <div>
    <v-app>
      <Header />
      <Nuxt />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: { Header, Footer },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
