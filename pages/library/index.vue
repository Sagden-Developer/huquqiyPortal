<template>
  <div id="library">
    <div class="container">
      <div class="head-content">
        <div class="head-text">
          <div class="text"></div>
          <h4 class="title-text">
            Bog’cha tarbiyalanuvchilari uchun huquqiy qo’llanmalar
          </h4>
          <p>
            <nuxt-link to="/" class="link-text"> Bosh sahifa </nuxt-link> /
            Mavzu nomi
          </p>
        </div>
        <div class="head-logo"></div>
      </div>
    </div>
    <div class="content-info">
      <div class="card-list">
        <div class="card-box" v-for="index in 6" :key="index">
          <div class="img-box">
            <div class="img" v-for="index in 3" :key="index"></div>
          </div>
          <div class="card-page">
            <div class="right-content">
              <h4>Mavzu nomi</h4>
              <div class="data-info">
                <div class="calendar">18.06.2021</div>
                <div class="views">
                  <div class="icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M0.916992 11C0.916992 11 4.58366 3.66669 11.0003 3.66669C17.417 3.66669 21.0837 11 21.0837 11C21.0837 11 17.417 18.3334 11.0003 18.3334C4.58366 18.3334 0.916992 11 0.916992 11Z"
                          stroke="#8D8D8D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
                          stroke="#8D8D8D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="view-count">532</div>
                </div>
              </div>
            </div>
            <div class="left-content">
              <nuxt-link to="/">
                <button class="btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="btn left-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="btn"
          v-for="index in 7"
          :class="{ active: index === 1 }"
          :key="index"
        >
          {{ index }}
        </button>
        <button class="btn right-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#library {
  padding: 35px 30px 75px 30px;
  background: #f1f3f4;
  margin: 0 auto;
  .container {
    width: 1300px;
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
          width: 280px;
          height: 24px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #333333;
          margin-top: 20px;
          text-decoration: none;
        }
      }
      .head-logo {
        width: 150.76px;
        height: 154.46px;
        background-image: url("~/assets/img/dictionary/books.svg");
      }
    }
  }
  .content-info {
    width: 1300px;
    height: 1015px;
    margin: 0 auto;
  }
  .card-list {
    padding: 40px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    height: 1010px;
    justify-content: space-between;
    .card-box {
      width: 610px;
      height: 260px;
      padding: 20px;
      background: #ffffff;
      border: 1px solid rgba(89, 123, 163, 0.2);
      box-sizing: border-box;
      border-radius: 12px;
      margin-bottom: 78px;
      .img-box {
        width: 100%;
        height: 130px;
        display: flex;
        justify-content: space-between;
        .img {
          width: 180px;
          height: 130px;
          background-image: url("~/assets/image/card1.png");
        }
      }
      .card-page {
        width: 100%;
        margin-top: 20px;
        display: flex;
        .left-content {
          width: 60px;
          height: 60px;

          button {
            width: 60px;
            height: 60px;
            background-color: #597ba3;
            border-radius: 50%;
            border: 0;
          }
        }
        .right-content {
          width: 90%;
          h4 {
            margin-bottom: 14px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;

            /* dark gray */

            color: #333333;
          }
          .data-info {
            width: 157px;
            display: flex;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */

            /* gray */

            color: #8d8d8d;
            .calendar {
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 22px;
            }
            .views {
              display: flex;
              .icon {
                margin: 0 10px 0 35px;
              }
            }
          }
        }
      }
    }
  }
  .pagination {
    width: 330px;
    display: flex;
    align-content: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 8px;
    button {
      width: 34px;
      height: 34px;
      background: transparent;
      border: 0;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */
      border-radius: 6px;
      /* dark gray */
      color: #333333;
    }
    .active {
      background: #597ba3;
    }
  }
}
</style>
