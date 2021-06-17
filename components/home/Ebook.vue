<template>
  <div>
    <h1>ebook</h1>
    <div class="ebook">
      <div class="head">
        <img src="@/assets/image/ebook.png" alt="" />
        <p>Elektron Kutubxona</p>
      </div>

      <Carousel v-bind="slickOptions">
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
        <div class="card-book">
          <img src="@/assets/image/yoshlar uchun.png" alt="" />
          <p>Yoshlar uchun yuridik ensiklopediya</p>
          <span>2021</span>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        draggable: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              speed: 1500,
              touchThreshold: 1000,
              autoplay: true,
              autoplaySpeed: 2000,
              slidesToShow: 3,
              infinite: true,
              slidesToScroll: 1,
              dots: true,
              draggable: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              focusOnSelect: true,
              loop: false,
              arrows: false,
              dots: true,
              slidesToShow: 2,
              speed: 1500,
              touchThreshold: 1000,
              autoplay: true,
              autoplaySpeed: 3000,
              infinite: true,
              slidesToScroll: 1,
              draggable: true
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.ebook {
  width: 1140px;
  margin: 20px auto;
  .slick-prev{
    display: block;
    width: 50px;
    height: 50px;
    background: rebeccapurple;
    border-radius: 50%;
    left: -70px;
  }
  .slick-next{
      display: block;
    width: 50px;
    height: 50px;
    background: rebeccapurple;
    border-radius: 50%;
    right:  -70px;
  }
  .head{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  img {
    pointer-events: none;
  }
  .card-book{
    p{
      font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #333333;
margin: 10px 0;
    }
    span{
      font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #FFBA00;
    }
  }
}
</style>
