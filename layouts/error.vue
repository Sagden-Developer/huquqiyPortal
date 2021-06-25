<template>
  <div>
    <div class="container">
      <div class="error">
        <img src="@/assets/image/404.png" alt="" />

        <h2>Sahifa topilmadi!</h2>

        <p>
          Kechirasiz, siz so'ragan sahifa topilmadi. Iltimos, bosh sahifaga
          qayting
        </p>

        <nuxt-link to="/">Bosh sahifa</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&display=swap');
.error {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 125px 0;
  font-family: 'IBM Plex Sans', sans-serif;
  img{
      pointer-events: none;
  }
  h2 {
    // font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 49px;
    color: #333333;
    margin: 25px 0;
  }
  p {
    // font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    color: #8d8d8d;
    margin: 25px 0;
  }
  a{    
      text-decoration: none;
      background: #4757A1;
      color: #fff;
      padding: 10px 40px;
      border-radius: 100px;
  }
}
</style>
