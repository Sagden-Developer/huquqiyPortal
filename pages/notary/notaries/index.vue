<template>
  <div>
    <div class="boxs">
      <div class="box">
        <div>
          <h4>Notariat</h4>
          <p>
            <nuxt-link
              style="color: black; text-decoration: none"
              to="/notary"
              href="#"
            >
              Bosh sahifa
            </nuxt-link>
            / Notariat / Natariuslar boyicha ma'lumot
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
        <v-container fluid>
          <v-row align="center">
            <v-select :items="items2" label="Notarial idora" solo></v-select>

            <v-select :items="items3" label="Tuman" solo></v-select>

            <v-select :items="items" label="Viloyat / Shaxar" solo></v-select>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Notarial idora", "Bar", "Fizz", "Buzz"],
      items2: ["Viloyat / Shaxar", "Bar", "Fizz", "Buzz"],
      items3: ["Tuman", "Bar", "Fizz", "Buzz"],
    };
  },
};
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
      margin-left: 450px;
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
      }
    }
    img {
      margin-left: -55px;
      margin-bottom: -5px;
    }
    input {
      width: 545px;
      height: 60px;
      background: rgba(51, 51, 51, 0.1);
      border-radius: 8px;
      border: 0;
      padding: 15px 20px;
      font-size: 16px;
      // margin-top: 43px;
      // margin-left: 43px;
    }
    input:focus-visible {
      border: 0;
      outline: none;
    }
  }
  .right {
    width: 50%;
    padding: 10px;
    margin-top: 22px;
    .v-input__slot {
        width: 550px;
      background: rgba(51, 51, 51, 0.1) !important;
      height: 60px !important;
      box-shadow: none !important;
      border-radius: 8px !important;
    //   margin-top: 8px;
      margin-bottom: 0;
    }

    .v-col {
      padding: 0 !important;
    }
  }
}
</style>    
