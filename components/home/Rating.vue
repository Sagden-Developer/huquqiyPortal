<template>
  <div>
    <div class="rating">
      <div class="container">
        <div class="title title-text">
          <p class="title-text">
            Huquqiy targ’ibotni baholash tizimi bo’yicha reyting
          </p>
          <button>To'liq reyting</button>
        </div>
        <div class="rating-body">
          <div class="left" style="width: 65%">
            <div class="rating-list">
              <div
                class="rating-list-item "
                v-for="(item, index) in ratingItem"
                :key="index"
              >
                <div class="chap">
                  <b> {{ index + 1 }} </b>
                </div>

                <dir
                  class="ong"
                  :style="
                    'width:' + 'calc( ' + item.rating + '%' + ' - 60px );'
                  "
                >
                  <p>{{ item.text }}</p>
                  <h4>
                    {{ item.rating }}
                  </h4>
                </dir>
              </div>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/image/ratingimg.png" alt="" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratingItem: [
        {
          rating: 78.3,
          text: "Moliya vazirligi"
        },
        {
          rating: 93.1,
          text: "Sog'liqni saqlash vazirligi"
        },
        {
          rating: 100,
          text: "Qurilish vazirligi"
        },
        {
          rating: 78,
          text: "Mudofaa vazirligi"
        },
        {
          rating: 85,
          text: "Xalq ta'limi vazirligi"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.rating {
  width: 100%;
  padding: 20px;
  background: rgba(95, 146, 211, 0.1);

  .title {
    padding: 10px;
    font-weight: bold;
    font-size: 28px;
    line-height: 35px;
    color: #333333;
    display: flex;
    justify-content: space-between;
    button {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      padding: 8px 25px;
      color: #fff;
      background: #597BA3;
      cursor: pointer;
      border-radius: 50px;
      border: 0;
    }
  }
  .rating-body {
    display: flex;
    margin-top: 20px;
    .left {
      width: 65%;
    }
    .right {
      width: 35%;
      img {
        pointer-events: none;
        width: 100%;
      }
    }
    .chap {
      width: 50px !important;
      background: transparent !important;
    }
    .ong {
      margin-left: 10px;
      background: #3c59aa;
      border-radius: 10000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        padding-left: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
      }
    }
  }
}
.rating-list-item {
  // background: #3c59aa;
  border-radius: 10000px;
  margin-bottom: 10px;
  display: flex;
  // justify-content: space-between;
  h4 {
    background: #fff;
    width: 60px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    border: 2px solid #3c59aa;
    color: #3c59aa;
  }
}
b {
  background: #3c59aa;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 100px;
  border-radius: 50%;
}
@media (min-width: 576px) and (max-width: 950px) {
  .title {
    align-items: center;
    p {
      max-width: 400px;
      font-size: 24px !important;
    }
    button {
      font-style: normal;
      height: 40px;
      font-weight: 500;
      font-size: 14px !important;
      line-height: 150%;
      padding: 8px 10px !important;
    }
  }
  .rating-body {
    flex-direction: column;
    .left {
      width: 100% !important;
      .rating-list {
        width: 100%;
      }
    }
    .right {
      padding: 40px;
      margin-top: 30px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      img {
        width: 60% !important;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .title-text{
    font-size: 20px !important;
  }
  .title {
    align-items: center;
    flex-direction: column !important;
    p {
      max-width: 100%;
    }
    button {
      margin-top: 20px;
      width: 100%;
      font-style: normal;
      height: 40px;
      font-weight: 500;
      font-size: 14px !important;
      line-height: 150%;
      padding: 8px 10px !important;
    }
  }
  .ong {
    h4{
      font-size: 20px !important;
    }
    p {
      font-weight: 600;
      font-size: 14px !important;
      line-height: 17px;
    }
  }
  .rating-body {
    flex-direction: column;
    .left {
      width: 100% !important;
      .rating-list {
        width: 100%;
      }
    }
    .right {
      padding: 40px;
      margin-top: 30px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      img {
        width: 60% !important;
      }
    }
  }
}
</style>
