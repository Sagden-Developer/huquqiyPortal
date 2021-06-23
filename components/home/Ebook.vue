<template>
  <div>
    <div class="ebook">
      <div class="container">
        <div class="head">
          <img src="@/assets/image/ebook.png" alt="" />
          <p class="title-text">Elektron Kutubxona</p>
        </div>

        <Carousel v-bind="slickOptions">
          <div
            class="card-book"
            v-for="(library, index) in $store.state.home.libraries"
            :key="index"
          >
            <a :href="library.link">
              <img :src="`http://ass.tujjor.org/${library.image}`" alt="" />
              <p>{{ library.name }}</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a href="">
              <img src="@/assets/image/bolalar uchun.png" alt="" />
              <p>Bolalar uchun yuridik ensiklopediya</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a
              ><img src="@/assets/image/advokatura.png" alt="" />
              <p>Advokatura (darslik adabiyoti)</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a
              ><img src="@/assets/image/yer huquqi.png" alt="" />
              <p>Yer huquqi</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a
              ><img src="@/assets/image/xalqaro huquq.png" alt="" />
              <p>Xalqaro iqtisodiy huquq</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a
              ><img src="@/assets/image/yoshlar uchun.png" alt="" />
              <p>Yoshlar uchun yuridik ensiklopediya</p>
              <span>2021</span>
            </a>
          </div>
          <div class="card-book">
            <a
              ><img src="@/assets/image/yoshlar uchun.png" alt="" />
              <p>Yoshlar uchun yuridik ensiklopediya</p>
              <span>2021</span>
            </a>
          </div>
        </Carousel>
      </div>
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
        scale: true,
        // arrows: false,
        swipeToSlide: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              speed: 1500,
              touchThreshold: 1000,
              autoplay: false,
              autoplaySpeed: 2000,
              slidesToShow: 3,
              infinite: true,
              slidesToScroll: 1,
              dots: false,
              draggable: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              focusOnSelect: true,
              loop: false,
              arrows: false,
              dots: false,
              slidesToShow: 2,
              speed: 1500,
              touchThreshold: 1000,
              autoplay: false,
              autoplaySpeed: 3000,
              infinite: true,
              slidesToScroll: 1,
              draggable: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.ebook {
  width: 1240px;
  margin: 70px auto;
  background: #fff;
  border-radius: 24px;
  padding: 30px;
  .slick-track {
    overflow: show !important;
    white-space: nowrap !important;
  }
  .slick-prev {
    display: block;
    width: 50px;
    height: 50px;
    background: #501e5a;
    border-radius: 50%;
    left: -55px;
    top: 38%;
  }
  .slick-prev::before {
    content: " \276E" !important;
  }
  .slick-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #501e5a;
    border-radius: 50%;
    right: -55px;
    top: 38%;
  }
  .slick-next::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: " \276F" !important;
  }
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-top: -80px;
    }
  }
  img {
    pointer-events: none;
  }
  .card-book {
    // padding: 0 10px;
    // margin: 0 10px;
    margin: 0 auto !important;
    a {
      text-decoration: none;
      p {
        margin: 10px 0;
        padding-right: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img {
        height: 270px;
        border-radius: 10px;
      }
    }
    p {
      max-width: 200px;
      margin: 10px 0;
      padding-right: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    img {
      margin: 0 auto;
      width: 200px;
      height: 270px;
      border-radius: 20px;
      pointer-events: none;
    }
    a {
      width: 100%;
      text-decoration: none;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
      margin: 10px 0;
    }
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #ffba00;
    }
  }
}

@media (min-width: 1300px) {
  .ebook {
    width: 1700px;
    margin: 70px auto;
    background: #fff;
    border-radius: 24px;
    padding: 30px;
    .slick-track {
      overflow: show !important;
      white-space: nowrap !important;
    }
    .slick-prev {
      display: block;
      width: 50px;
      height: 50px;
      background: #501e5a;
      border-radius: 50%;
      left: -55px;
      top: 38%;
    }
    .slick-prev::before {
      content: " \276E" !important;
    }
    .slick-next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: #501e5a;
      border-radius: 50%;
      right: -55px;
      top: 38%;
    }
    .slick-next::before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: " \276F" !important;
    }
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      img {
        margin-top: -80px;
        width: 169px;
        height: 125px;
      }
    }
    img {
      pointer-events: none;
    }
    .card-book {
      // padding: 0 10px;
      // margin: 0 10px;
      a {
        text-decoration: none;
        p {
          margin: 10px auto;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        img {
          width: 257px;
          height: 333px;
          border-radius: 10px;
        }
        span {
          display: block;
          margin: auto;
          width: 257px;
        }
      }
      p {
        max-width: 250px;
        margin: 10px 0;
        padding-right: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img {
        margin: 0 auto;
        width: 200px;
        height: 270px;
        border-radius: 20px;
        pointer-events: none;
      }
      a {
        width: 100%;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin: 10px 0;
      }
      span {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #ffba00;
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 950px) {
  .ebook {
    width: 700px;
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
        width: 70% !important;
      }
    }
  }
}
@media (min-width: 350px) and (max-width: 576px) {
  .ebook {
    width: 95%;
    .card-book {
      width: 100% !important;
      padding: 10px;
      img {
        width: 100% !important;
        height: 205px !important;
      }
      p {
        width: 100%;
      }
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
        width: 70% !important;
      }
    }
  }
}
</style>
