<template>
    <div>
         <div class="boxs">
      <div class="box"> 
        <div>
          <h4 style="">Notariat</h4>
        <p>
          <nuxt-link style="color: black; text-decoration: none" to="/" href="#"> Bosh sahifa </nuxt-link>  /  Notariat
        </p>
        </div>
        <div class="group">
                <img src="@/assets/image/Group 1116.png" alt=""> 
            </div>
        
      </div>
    </div>

    <div class="card">
       <div class="natarius">
         <nuxt-link style="color: black; text-decoration: none"  to="/notary/notaries">
         <div>
        <img src="@/assets/image/Group 1117.png" alt="">
        <h5>Notariuslar boyicha ma'lumot</h5>
      </div>
         </nuxt-link>
      
    </div>  

      <div class="natarius" style="margin-left: 30px">
      <div>
        <img src="@/assets/image/logoo.png" alt="">
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
  background: #D9E6EB;
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
    display: flex;
    .group{
      img{
       margin-left: 650px;
        width: 148px;
    }
    }
    
    h4 {
      font-size: 24px;
      line-height: 29px;
      margin-top: 33px;
      color: #000;
      font-weight: 600;
      margin-left: 100px;
      
    }
    p {
      font-size: 20px;
      line-height: 24px;
      color: #000;
      margin-top: 40px;
      margin-left: 100px;
      
    }
  }
}
.card{
    display: flex;
    margin-left: 280px;
    .natarius{
    width: 450px;
    height: 200px;
    background-color: #fff;
    margin-top: 81px;
    margin-bottom: 100px;

    img{
      width: 93px;
      margin-left: 165px;
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

