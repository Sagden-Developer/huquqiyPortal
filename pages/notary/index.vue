<template>
  <div id="notary">
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
  width: 1300px;
  height: 675px;
  margin: 0 auto;
  padding: 35px 30px 100px 30px;
  .boxs {
    background: #d9e6eb;
    width: 1240px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 24px;
    margin-top: 26px;
    flex-direction: column;
    .box {
      width: 1240px;
      margin: 0 auto;
      padding: 25px 50px;
      display: flex;
      justify-content: space-between;
      .group {
        img {
          //  margin-left: 650px;
          width: 148px;
        }
      }

      h4 {
        font-size: 24px;
        line-height: 29px;
        margin-top: 33px;
        color: #000;
        font-weight: 600;
        // margin-left: 100px;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        color: #000;
        margin-top: 40px;
        // margin-left: 100px;
        //
      }
    }
  }
  .card {
    display: flex;
    // margin-left: 280px;
    .natarius {
      width: 611px;
      height: 300px;
      background-color: #fff;
      margin-top: 40px;
      margin-bottom: 100px;
      margin-left: auto;
      margin-right: auto;
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
        font-family: Poppins sans-serif;
      }
    }
  }
}
</style>

