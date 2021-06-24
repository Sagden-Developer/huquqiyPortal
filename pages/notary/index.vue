<template>
    <div>
         <div class="boxs">
      <div class="box"> 
        <h4>Notariat</h4>
        <p>
          <nuxt-link style="color: white; text-decoration: none" to="/" href="#"> Bosh sahifa </nuxt-link>  /  Notatiat
        </p>
      </div>
    </div>

    <div class="card">
       <div class="natarius">
      <div>
        <img src="@/assets/image/Vector (2).png" alt="">
        <h5>Notariuslar boyicha malumot</h5>
      </div>
    </div>  

      <div class="natarius" style="margin-left: 30px">
      <div>
        <img src="@/assets/image/Vector (4).png" alt="">
        <h5>Notarial harakatlar turi</h5>
      </div>
    </div>  
    </div>
   
     </div>
</template>


<script>

</script>


<style lang="scss">
    .boxs {
  background: #597ba3;
  width: 1340px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  margin-top: 26px;
  .box {
    width: 1700px;
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
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      margin-top: 40px;
    }
  }
}
.card{
    display: flex;
    margin-left: 280px;
    .natarius{
    width: 450px;
    height: 180px;
    background-color: #C4C4C4;
    margin-top: 81px;
        margin-bottom: 445px;

    img{
       margin-left: 191px;
       margin-top: 20px;
    }
    h5{
        text-align: center;
        margin-top: 15px;
        font-weight: 500;
        font-size: 20px;
        font-family: Poppins sans-serif;
    }
}
}

</style>

