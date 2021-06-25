<template>
  <div>
    <div class="boxs">
      <div class="box">
        <div>
          <h4>Notariat</h4>
          <p>
            <nuxt-link
              style="color: black; text-decoration: none"
              to="/"
              href="#"
            >
              Bosh sahifa /
            </nuxt-link>
            <nuxt-link to="/notary" style="color: black; text-decoration: none">
              Notariat /
            </nuxt-link>
              Niyazimetov Ruslan Bahodirovich
          </p>
        </div>
        <div>
          <img src="@/assets/image/Group 1116.png" alt="" />
        </div>
      </div>
    </div>

    <div class="Input">
      <div class="left">
        <input style="border: 0" type="text" placeholder="Notarius F.I.O" />
        <img src="@/assets/image/search.png" alt="" />
        <div class="Снимок">
          <img src="@/assets/image/Снимок.PNG" alt="" />
        </div>
      </div>
      <div class="right">
        <form>
          <select>
              <option value="volvo">Viloyat/Shahar</option>
              <option value="saab">Toshkent</option>
              <option value="mercedes">Samarand</option>
              <option value="audi">Sirdaryo</option>
              <option value="audi">Buxoro</option>
          </select>
          <br>
           <select>
              <option value="volvo">Tuman</option>
              <option value="saab">Mirzo Ulug'bek</option>
              <option value="mercedes">Yunusobat</option>
              <option value="audi">Chilonzor</option>
              <option value="audi">Mirobot</option>
          </select>
          <br>
           <select>
              <option value="volvo">Notarial idora</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
        </form>

        <div class="box">
          <img src="@/assets/image/repeat.png" alt="">
          <a href="#">Filterni tozalash</a>
          <button>Izlash</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.boxs {
  background: #d9e6eb;
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
    margin-top: 42px;
    display: flex;
    img {
      margin-left: 400px;
      width: 158px;
    }
    h4 {
      font-size: 24px;
      line-height: 29px;
      margin-top: 33px;
      color: black;
      font-weight: 600;
      margin-left: 100px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
      color: black;
      margin-top: 40px;
      margin-left: 100px;
    }
  }
}

.Input {
  width: 1210px;
  height: 300px;
  background-color: #fff;
  margin-top: 43px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(89, 123, 163, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;

  .left {
    width: 50%;
    // background: cyan;
    padding: 30px;
    .Снимок {
      img {
        margin-top: 40px;
        margin-left: 10%;
        width: 427px;
      }
    }
    img {
      margin-left: -55px;
      margin-bottom: -5px;
    }
    input {
      width: 545px;
      height: 50px;
      background: rgba(51, 51, 51, 0.1);
      border-radius: 8px;
      border: 0;
      padding: 15px 20px;
      font-size: 16px;
      margin-top: 5px;
      // margin-top: 43px;
      // margin-left: 43px;
    }
    input:focus-visible {
      border: 0;
      outline: none;
    }
  }
  .right {
    // width: 50%;
    // padding: 10px;
    // margin-top: 22px;
  form{
    margin-top: 20px;
    
    select{
      width: 545px;
      height: 50px;
      border: 0;
      margin-top: 15px;
      background: rgba(51, 51, 51, 0.1);
      border-radius: 10px;
      padding: 10px;
    }
  }
  .box{
    margin-top: 25px;
    margin-left: auto;
    margin-left: 250px;
    a{
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
      color: #597BA3;
    }
    img{
      width: 20px;
      margin-right: 10px;
    }
    button{
      width: 93px;
      height: 42px;
      background: #597BA3;
      border-radius: 10px;
      border: 0;
      color: #fff;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  }
}
</style>    
