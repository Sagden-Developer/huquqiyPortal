<template>
  <div>
      <div id="slider">
        <div class="slide-texts">
          <div class="head-text">
            <h1>Huquqiy portal</h1>
          </div>
          <div class="info-text">
            <h1>
              O’zbekiston Respublikasi Milliy Huquqiy informatsion portali
            </h1>
          </div>
        </div>
        <div class="search-button">
          <input type="text" :placeholder="placeholder" />
        </div>
        <div class="tag-text">Teglar</div>
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
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
#slider {
  max-width: 1240px;
  height: 500px;
  border: 1px solid;
  border-radius: 24px;
  padding: 55px;
  margin: 25px auto;
  background-image: url("/img/slide.png");
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
    input[type="text"] {
      width: 570px;
      height: 54px;
      border-radius: 12px;
      border: 2px solid;
      outline: none;
      margin: 10px 0 15px 0;
      padding: 10px;
    }
  }
  .tags {
    padding: 10px 0 10px 0;
    display: flex;
    width: 35%;
    flex-wrap: wrap;
    justify-content: space-between;

    .tag-links {
      border: 1px solid #fff;
      color: #fff;
      border-radius: 24px;
      margin: 10px 5px 5px 0;
      padding: 5px 10px;
      background: transparent;
      &:hover{
        background-color: #fff;
        color: black;
        cursor: pointer;
      }
    }
  }
}
</style>