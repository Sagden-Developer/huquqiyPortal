<template>
  <div id="notary">
    <div class="container">
      <div class="boxs">
      <div class="box">
        <div>
          <h4 style="">Notariat</h4>
          <p>
            <nuxt-link
              style="color: black; text-decoration: none"
              to="/"
              href="#"
            >
              Bosh sahifa
            </nuxt-link>
            / Notariat
          </p>
        </div>
        <div class="group">
          <img src="@/assets/image/Group 1116.png" alt="" />
        </div>
      </div>
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
  .boxs {
    background: #d9e6eb;
    margin-left: auto;
    margin-right: auto;
    border-radius: 24px;
    flex-direction: column;
      padding: 50px;
    .box {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
  

      h4 {
        font-size: 24px;
        line-height: 29px;
        margin-top: 33px;
        color: #000;
        font-weight: 600;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        color: #000;
        margin-top: 40px;
      }
    }
  }
  .card {
    display: flex;
    padding: 40px 0 100px 0;
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

