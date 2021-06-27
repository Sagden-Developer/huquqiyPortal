<template>
  <div id="notaries">
    <div class="container">
      <div id="inputs">
        <div class="head-content">
          <div class="head-text">
            <div class="text"></div>
            <h4 class="title-text">
              {{ $t('titlenotary')}}
            </h4>
            <p class="link-text">
              <nuxt-link to="/" class="link-text"> {{ $t('head')}} /</nuxt-link
              ><nuxt-link
                to="/notary"
                
              >
               {{ $t('titlenotary')}} /
              </nuxt-link>
              {{ $t('notinfo')}}
            </p>
          </div>
          <div class="head-logo"></div>
        </div>
        

        <div class="Input">
          <div class="left">
            <div class="search">
              <input
                style="border: 0"
                type="text"
                :placeholder="$t('notname')"
              />
              <img src="@/assets/image/search.png" alt="" />
            </div>

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
              <br />
              <select>
                <option value="volvo">Tuman</option>
                <option value="saab">Mirzo Ulug'bek</option>
                <option value="mercedes">Yunusobat</option>
                <option value="audi">Chilonzor</option>
                <option value="audi">Mirobot</option>
              </select>
              <br />
              <select>
                <option value="volvo">Notarial idora</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </form>

            <div class="box">
              <img src="@/assets/image/repeat.png" alt="" />
              <a href="#">Filterni tozalash</a>
              <button>Izlash</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <nuxt-link to="/notary/notaries/id"
                ><img src="~assets/img/arrow.png" alt=""
              /></nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person1.jpg" alt="" class="img" />
            <h3>Xalilova Saodat Nortajiyevna</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person2.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person3.png" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person4.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person5.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person6.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person7.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person8.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person9.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person10.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person11.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person12.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person13.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Toshkent shaxar Shayxontoxur <br />
              tumanidagi xususiy amaliyot bilan <br />
              shug‘ullanuvchi notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person14.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars.png" alt="" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-notaries">
            <img src="~assets/img/person15.jpg" alt="" class="img" />
            <h3>Niyazimbetov Ruslan Bahodirovich</h3>
            <p>
              Qoraqolpog‘iston Respublikasi <br />
              Amudaryo tumanida xususiy <br />
              amaliyot bilan shug‘ullanuvchi <br />
              notarius
            </p>
            <div class="pict">
              <img src="~assets/img/stars2.png" alt="" class="star" />
              <button><img src="~assets/img/arrow.png" alt="" /></button>
            </div>
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
      title: this.$t("titlenotaries"),

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
  data() {
    return {
      title: "hello"
    };
  }
};
</script>

<style lang="scss">
#notaries {
  // width: 1300px;
  margin: 0 auto;
  margin-top: 35px;
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
        a{
        text-decoration: none;
        color: #333333;

        }
        color: #333333;
        height: 24px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-top: 20px;
      }
    }
    .head-logo {
      width: 150.76px;
      height: 154.46px;
      background-image: url("~/assets/image/Group 1116.png");
    }
  }

  .row {
    display: flex;
    flex-wrap: nowrap;
    // width: 1320px;
    justify-content: space-between;
    margin: 20px auto;
  }
  .row:last-child {
    margin-bottom: 75px;
  }
  .col-3 {
    // width: 25%;
    width: calc((100% - 60px) / 4) !important;
    // margin-bottom: 20px;
  }
  .card-notaries {
    background-color: #fff;
    padding: 20px 25px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  }
  .card-notaries h3 {
    color: #333333;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 15px;
    height: 48px;
  }
  .card-notaries p {
    text-align: left;
    color: #8d8d8d;
    font-size: 16px;
    height: 60px;
  }
  .card-notaries .pict {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }
  .pict button {
    background: #597ba3;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 0;
  }
  .pict a {
    background: #597ba3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border: 0;
  }

  .pict .star {
    height: 20px;
    width: 120px;
  }

  #inputs {
    margin-top: 35px;
    margin: 0 auto;
   

    .Input {
      // width: 1240px;
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
        .search {
          position: relative;
          img {
            position: absolute;
            top: 17px;
            right: 17px;
          }
        }
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
          width: 585px;
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
        form {
          margin-top: 20px;
          margin-left: 10px;
          select {
            width: 585px;
            height: 50px;
            border: 0;
            margin-top: 15px;
            background: rgba(51, 51, 51, 0.1);
            border-radius: 10px;
            padding: 10px;
          }
          select:focus-visible {
            outline: none;
          }
        }
        .box {
          width: 595px;
          height: 75px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          a {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            text-decoration: none;
            color: #597ba3;
          }
          img {
            width: 20px;
            margin-right: 10px;
          }
          button {
            width: 93px;
            height: 42px;
            background: #597ba3;
            border-radius: 10px;
            border: 0;
            color: #fff;
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .col-3 {
    width: 50%;
    flex-basis: 50%;
  }
}
</style>
