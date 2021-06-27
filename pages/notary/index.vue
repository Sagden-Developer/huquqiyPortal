<template>
  <div id="notary">
    <div class="container">
        <div class="head-content">
        <div class="head-text">
          <div class="text"></div>
          <h4 class="title-text">
            Notariat
          </h4>
          <p class="link-text">
            <nuxt-link to="/" class="link-text"> Bosh sahifa </nuxt-link> /
           Notariat
          </p>
        </div>
        <div class="head-logo"></div>
      </div>
     

    <div class="card">
      <div class="natarius">
        <nuxt-link
          style="color: black; text-decoration: none"
          to="/notary/notaries"
        >
          <div>
            <img src="@/assets/image/Group 1117.png" alt="" />
            <h5>Notariuslar boyicha ma'lumot</h5>
          </div>
        </nuxt-link>
      </div>

      <div class="natarius" style="margin-left: 30px">
        <div>
          <img src="@/assets/image/logoo.png" alt="" />
          <h5>Notarial harakatlar turi</h5>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>


<script>
export default {
   head() {
    return {
      title: this.$t('titlenotary') ,
      
   
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  data(){
    return{
    }
  },
}

</script>


<style lang="scss" >
#notary {
  margin: 0 auto;
  padding: 35px 30px 100px 30px;
  .head-content {
      background: #d9e6eb;
      height: 200px;
      border-radius: 24px;
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        background-image: url("~/assets/image/Group 1116.png");
      }
    }
  
  
  .card {
    display: flex;
    padding: 40px 0 0px 0;
    .natarius {
      width: 690px;
      height: 300px;
      background-color: #fff;
      border-radius: 12px;
      img {
        width: 153px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      h5 {
        text-align: center;
        margin-top: 40px;
        font-weight: 500;
        font-size: 20px;
      }
    }
  }
}
</style>

