<template>
  <div>

    <div class="rating">
      <div class="title">
        <p>Huquqiy targ’ibotni baholash tizimi bo’yicha reyting</p>
        <button>To'liq reyting</button>
      </div>
      <div class="rating-body">
        <div class="left" style="width: 60%">
        
        <div class="rating-list">
          <div
            class="rating-list-item"
            v-for="(item, index) in ratingItem"
            :key="index"
            :style="'width:' + item.rating + '%'"
          >
          <dir class="chap"><b> {{ index + 1 }} </b></dir>
          <dir class="ong"><h4>
              {{ item.rating }}
            </h4></dir>
            
            
          </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/image/ratingimg.png" alt="">
      </div>
      </div>

      <div></div>

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratingItem: [
        {
          rating: 98.6
        },
        {
          rating: 97.2
        },
        {
          rating: 96
        },
        {
          rating: 95.3
        },
        {
          rating: 94.5
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.rating {
  background: rgba(95, 146, 211, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
      background: #597ba3;
      border-radius: 50px;
      border: 0;
    }
  }
  .rating-body{
    display: flex;
  }
  .left {
    // display: flex;
  }
}
.rating-list-item {
  background: #3c59aa;
  border-radius: 10000px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
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
  background: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 100px;
  border-radius: 50%;
}
</style>
