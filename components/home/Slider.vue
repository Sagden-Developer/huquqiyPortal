<template>
  <div>
      <div id="slider">
    <div class="container">
        <div class="slide-texts">
          <div class="head-text">
            <h1 class="title-text">Huquqiy portal</h1>
          </div>
          <div class="info-text">
            <h2>
              O’zbekiston Respublikasi Milliy Huquqiy informatsion portali
            </h2>
          </div>
        </div>
        <div class="search-button">
          <input type="text" :placeholder="placeholder" />
          <button class="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="tag-section">
          <div class="tag-text">Teglar</div>
          <img :src="tagIcon" alt="" class="tag-icon" />
        </div>
        <div class="tags">
          <input
            type="button"
            class="tag-links"
            v-for="tagLink in tagLinks"
            :key="tagLink"
            :value="tagLink.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Izlash",
      tagLinks: [
        { title: "Advakatura" },
        { title: "Notariant" },
        { title: "Ishonch raqamlari" },
        { title: "Onlayn Huquqiy maslahatlar" }
      ],
      tagIcon: require("@/assets/img/tag.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
}
#slider {
  max-width: 1240px;
  height: 500px;
  border: 1px solid;
  border-radius: 24px;
  padding: 55px;
  margin: 25px auto;
  background-image: url("assets/img/slide.png");
  color: #fff;
  .head-text {
    text-transform: uppercase;
  }
  .info-text {
    width: 60%;
    margin: 25px 0;
  }
  .search-button {
    margin: 20px 0;
    position: relative;
    input[type="text"] {
      width: 570px;
      height: 54px;
      border-radius: 12px;
      border: none;
      outline: none;
      margin: 10px 0 15px 0;
      padding: 10px;
      z-index: 1;
      font-size: 18px;
      font-weight: 500;
      color: #d5d5d5;
    }
    .search-icon {
      padding: 10px;
      background: #e6e2df;
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 48%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      border: 0;
      background: transparent;
    }
  }
  .tag-section {
    position: relative;
    .tag-icon {
      position: absolute;
      left: 5.5%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .tags {
    padding: 10px 0 10px 0;
    display: flex;
    width: 40%;
    flex-wrap: wrap;
    justify-content: space-between;

    .tag-links {
      border: 1px solid #fff;
      color: #fff;
      border-radius: 24px;
      margin: 10px 5px 5px 0;
      padding: 5px 10px;
      background: transparent;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      transition: 0.3s linear;
      &:hover {
        background-color: #fff;
        color: black;
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 950px) {
  .info-text {
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #eeeeee;
    }
  }
  #slider {
    // padding-left: 35px !important;
    height: auto !important;
    padding: 0px 30px;
    background-size: contain ;
    .search-button{
      margin: 0 !important;
      // margin-bottom: 40px;
    }
  }
  .tag-section {
    display: none;
  }
  .tags {
    display: none !important;
  }
  input {
    width: 390px !important;
  }
  .slide-texts {
    margin-top: 92px !important;
  }
  .head-text {
    h1 {
      font-size: 32px !important;
      text-transform: capitalize;
    }
  }
}
@media (min-width: 350px) and (max-width: 575px) {
  .slide-texts{
    margin-top: 0px !important;
  }
  .info-text {
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #eeeeee;
    }
  }
  #slider {
    padding-left: 35px !important;
    margin: 16px;
    height: 165px !important;
    padding: 25px !important;
  }
  .head-text {
    h1 {
      font-size: 24px !important;
      text-transform: capitalize;
    }
  }
  .info-text {
    width: 280px !important;
    h1 {
      font-size: 16px;
    }
  }
  .tag-section {
    display: none;
  }
  .search-button {
    display: none;
  }
  .tags {
    display: none !important;
  }
  input {
    display: none;
    width: 390px !important;
  }
  
}
</style>
