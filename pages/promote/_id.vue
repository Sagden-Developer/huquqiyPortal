<template>
  <div>
    <div class="banner">
      <div class="content">
        <h4>Qonunlar bo’yicha targ’ibot materiallari</h4>
        <p>
          <nuxt-link to="/" href="#"> Bosh sahifa </nuxt-link> /
          <nuxt-link href="" to="/promote">Targ’ibot materiallari </nuxt-link> /
          Normativ hujjat nomi
        </p>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <div class="title">
          <div>
            <p>{{ material.title ? material.title.uz : "" }}</p>
          </div>
          <div>
            <span>{{ dateFormat(material.createdAt) }}</span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ material.views }}</span
            >
          </div>
        </div>
        <div class="qaror">
          <span>Vazirlar mahkamasi qarori</span>
          <span>{{ dateFormat(material.date) }}</span>
        </div>
        <div class="text">
          <p>
            {{ material.article ? material.article.uz : "" }}
          </p>
        </div>
        <div class="info">
          <h3>Maqola foydali bo’ldimi?</h3>
          <br />
          <div>
            <button
              @click="$store.dispatch('card/MINUS_HELPFULL_CARD', material._id)"
            >
              Yo'q
            </button>
            <button
              @click="$store.dispatch('card/PLUS_HELPFULL_CARD', material._id)"
            >
              Ha
            </button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <div></div>
          <div>
            <span>
              <img src="@/assets/image/lexuz.png" alt="" />
            </span>
            <a :href="material.doc" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="33"
                viewBox="0 0 27 33"
                fill="none"
              >
                <path
                  d="M0.894159 0.000137329C0.402388 0.000137329 0 0.397911 0 0.885426V32.1144C0 32.6019 0.402388 33 0.894159 33H26.1058C26.5982 33 27 32.6019 27 32.1144V10.713C27 10.2258 26.7161 9.54566 26.3686 9.20137L17.7069 0.626186C17.3588 0.281265 16.6719 0.000137329 16.1801 0.000137329H0.894159Z"
                  fill="#918F90"
                />
                <path
                  d="M1.64071 0.589878C1.14831 0.589878 0.745605 0.988581 0.745605 1.47485V31.8195C0.745605 32.3061 1.14831 32.7051 1.64071 32.7051H25.8092C26.3006 32.7051 26.7036 32.3061 26.7036 31.8195V10.86C26.7036 10.3731 26.4187 9.69323 26.071 9.348L17.8568 1.21593C17.5091 0.871946 16.8218 0.589878 16.33 0.589878H1.64071Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M17.7031 2.9412V7.3667C17.7031 8.29921 18.4681 9.05566 19.4077 9.05566H24.0538L17.7031 2.9412Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M17.3517 8.40152L16.9407 1.11876L16.3081 9.43502C16.3081 9.92129 16.7105 10.3203 17.2029 10.3203H25.3397L18.2461 9.28711C17.7544 9.28711 17.3517 8.88841 17.3517 8.40152Z"
                  fill="url(#paint2_radial)"
                />
                <path
                  d="M0.745605 32.7051H26.7036C26.7036 32.7051 16.6793 30.4911 0.745605 32.7051Z"
                  fill="url(#paint3_linear)"
                />
                <path
                  d="M26.7036 23.7151C26.7036 24.1389 26.3423 24.4854 25.9014 24.4854H1.54817C1.10693 24.4854 0.745605 24.1389 0.745605 23.7151V14.7284C0.745605 14.3047 1.10693 13.9579 1.54817 13.9579H25.9014C26.3423 13.9579 26.7036 14.3047 26.7036 14.7284V23.7151Z"
                  fill="#204678"
                />
                <path
                  d="M26.7036 24.168C26.7036 24.5917 26.3423 24.9385 25.9014 24.9385H1.54817C1.10693 24.9385 0.745605 24.5917 0.745605 24.168V15.1812C0.745605 14.7575 1.10693 14.411 1.54817 14.411H25.9014C26.3423 14.411 26.7036 14.7575 26.7036 15.1812V24.168Z"
                  fill="#387CC8"
                />
                <path
                  d="M5.55424 21.9083H6.63727C7.40983 21.9083 7.95751 21.7026 8.27998 21.2904C8.62615 20.8517 8.79923 20.2628 8.79923 19.5239C8.79923 18.8303 8.62868 18.2853 8.2882 17.889C8.081 17.647 7.83433 17.4816 7.54722 17.3928C7.2598 17.3036 6.82741 17.2592 6.25131 17.2592H5.55424V21.9083ZM4.71094 22.5312V16.6363H6.68907C7.27844 16.6363 7.75505 16.7014 8.11859 16.8314C8.48181 16.9615 8.79576 17.182 9.0617 17.4928C9.48241 17.9866 9.69276 18.6371 9.69276 19.4442C9.69276 20.3551 9.44608 21.0934 8.95305 21.6588C8.6849 21.9699 8.37442 22.1926 8.02194 22.328C7.66946 22.4637 7.22949 22.5312 6.70139 22.5312H4.71094Z"
                  fill="white"
                />
                <path
                  d="M13.32 22.0571C13.9141 22.0571 14.3774 21.8385 14.7107 21.4007C15.0439 20.9632 15.2103 20.355 15.2103 19.5757C15.2103 18.8021 15.0439 18.1973 14.7107 17.7623C14.3774 17.3276 13.9141 17.1106 13.32 17.1106C12.7259 17.1106 12.2622 17.3276 11.929 17.7623C11.5955 18.1973 11.4293 18.8021 11.4293 19.5757C11.4293 20.355 11.5955 20.9632 11.929 21.4007C12.2622 21.8385 12.7259 22.0571 13.32 22.0571ZM13.32 22.6797C12.4748 22.6797 11.8001 22.3992 11.2945 21.8369C10.7888 21.2753 10.5361 20.5242 10.5361 19.5835C10.5361 18.6435 10.7888 17.8924 11.2945 17.3304C11.8001 16.7685 12.4748 16.4877 13.32 16.4877C14.1646 16.4877 14.8398 16.7685 15.3455 17.3304C15.8512 17.8924 16.1038 18.6435 16.1038 19.5835C16.1038 20.5242 15.8512 21.2753 15.3455 21.8369C14.8398 22.3992 14.1646 22.6797 13.32 22.6797Z"
                  fill="white"
                />
                <path
                  d="M21.7489 22.2269C21.163 22.5286 20.5225 22.6797 19.8289 22.6797C18.9044 22.6797 18.1903 22.4114 17.6875 21.8751C17.1834 21.3385 16.9316 20.5761 16.9316 19.5876C16.9316 18.6022 17.1887 17.8392 17.7017 17.2985C18.2146 16.7582 18.9382 16.4877 19.8734 16.4877C20.4044 16.4877 21.0272 16.5749 21.742 16.7494V17.5349C20.9271 17.2519 20.2992 17.1106 19.8557 17.1106C19.2098 17.1106 18.7102 17.327 18.3564 17.7604C18.002 18.1938 17.8249 18.8055 17.8249 19.5954C17.8249 20.3509 18.0144 20.9451 18.3924 21.3785C18.7702 21.8119 19.2875 22.0286 19.9445 22.0286C20.5045 22.0286 21.1055 21.8563 21.7489 21.5123V22.2269Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="13.7249"
                    y1="0.727158"
                    x2="13.7249"
                    y2="32.8424"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#DDDDDD" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="20.9222"
                    y1="5.95481"
                    x2="18.1031"
                    y2="8.80213"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#D2D3D3" />
                  </linearGradient>
                  <radialGradient
                    id="paint2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(21.0167 5.57804) scale(5.20336 5.15174)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#BABBBC" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="7.23559"
                    y1="39.1304"
                    x2="20.9097"
                    y2="25.3193"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D2D3D3" />
                    <stop offset="0.47191" stop-color="white" />
                    <stop offset="1" stop-color="#D2D3D3" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a :href="material.pdf" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="33"
                viewBox="0 0 27 33"
                fill="none"
              >
                <path
                  d="M0.893825 0C0.40206 0 0 0.397774 0 0.885292V32.1144C0 32.6019 0.40206 33 0.893825 33H26.1052C26.5979 33 27 32.6019 27 32.1144V10.7129C27 10.2257 26.7157 9.54556 26.3683 9.20127L17.7067 0.626053C17.3589 0.281132 16.672 0 16.1799 0H0.893825Z"
                  fill="#918F90"
                />
                <path
                  d="M1.63892 0.589928C1.14621 0.589928 0.744141 0.988632 0.744141 1.4749V31.8197C0.744141 32.3062 1.14621 32.7053 1.63892 32.7053H25.8074C26.2982 32.7053 26.7016 32.3062 26.7016 31.8197V10.8601C26.7016 10.3732 26.416 9.69332 26.0689 9.34808L17.8545 1.21598C17.5065 0.871996 16.8198 0.589928 16.3281 0.589928H1.63892Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M17.7012 2.94026V7.36578C17.7012 8.29829 18.4658 9.05475 19.4061 9.05475H24.0515L17.7012 2.94026Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M17.3505 8.40194L16.939 1.11915L16.3066 9.43545C16.3066 9.92172 16.709 10.3207 17.2017 10.3207H25.3378L18.2443 9.28753C17.7529 9.28753 17.3505 8.88883 17.3505 8.40194Z"
                  fill="url(#paint2_radial)"
                />
                <path
                  d="M0.744141 32.7053H26.7016C26.7016 32.7053 16.6774 30.4913 0.744141 32.7053Z"
                  fill="url(#paint3_linear)"
                />
                <path
                  d="M26.7016 23.7147C26.7016 24.1384 26.3402 24.4849 25.8996 24.4849H1.54607C1.10515 24.4849 0.744141 24.1384 0.744141 23.7147V14.7279C0.744141 14.3042 1.10515 13.9574 1.54607 13.9574H25.8996C26.3402 13.9574 26.7016 14.3042 26.7016 14.7279V23.7147Z"
                  fill="#5D632D"
                />
                <path
                  d="M26.7016 24.1674C26.7016 24.5911 26.3402 24.9379 25.8996 24.9379H1.54607C1.10515 24.9379 0.744141 24.5911 0.744141 24.1674V15.1806C0.744141 14.7569 1.10515 14.4104 1.54607 14.4104H25.8996C26.3402 14.4104 26.7016 14.7569 26.7016 15.1806V24.1674Z"
                  fill="#6BC74D"
                />
                <path
                  d="M7.43087 19.5656H7.7704C8.26816 19.5656 8.65318 19.4509 8.92448 19.221C9.19611 18.9918 9.33192 18.6656 9.33192 18.2438C9.33192 17.8914 9.22485 17.639 9.01008 17.487C8.79625 17.3347 8.44156 17.2587 7.94664 17.2587H7.43087V19.5656ZM6.58789 22.5308V16.6358H8.20721C8.67371 16.6358 9.03376 16.6736 9.28644 16.7493C9.54069 16.8247 9.74694 16.9585 9.90739 17.1493C10.119 17.4016 10.2258 17.7459 10.2258 18.1809C10.2258 18.8076 10.0119 19.2989 9.58396 19.6547C9.15662 20.0106 8.56252 20.1882 7.80356 20.1882H7.43087V22.5308H6.58789Z"
                  fill="white"
                />
                <path
                  d="M11.982 21.9078H13.0653C13.8375 21.9078 14.3855 21.7021 14.7086 21.2899C15.0541 20.8512 15.2276 20.2623 15.2276 19.5234C15.2276 18.8298 15.0567 18.2847 14.7159 17.8885C14.5087 17.6465 14.262 17.4811 13.9749 17.3923C13.6878 17.3031 13.2551 17.2587 12.6793 17.2587H11.982V21.9078ZM11.1387 22.5308V16.6358H13.1171C13.7068 16.6358 14.1831 16.7008 14.5463 16.8309C14.9092 16.961 15.2234 17.1815 15.4891 17.4923C15.9104 17.9861 16.1207 18.6366 16.1207 19.4437C16.1207 20.3546 15.8738 21.0929 15.3804 21.6583C15.1132 21.9694 14.8024 22.1921 14.4503 22.3275C14.0972 22.4632 13.6575 22.5308 13.1294 22.5308H11.1387Z"
                  fill="white"
                />
                <path
                  d="M17.3066 22.5308V16.6358H20.6302V17.2587H18.1506V19.2401H20.2329V19.8627H18.1506V22.5308H17.3066Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="13.723"
                    y1="0.727209"
                    x2="13.723"
                    y2="32.8425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#DDDDDD" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="20.9199"
                    y1="5.95419"
                    x2="18.101"
                    y2="8.80128"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#D2D3D3" />
                  </linearGradient>
                  <radialGradient
                    id="paint2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(21.0152 5.57844) scale(5.20333 5.15179)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#BABBBC" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="7.23373"
                    y1="39.13"
                    x2="20.9078"
                    y2="25.3192"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D2D3D3" />
                    <stop offset="0.47191" stop-color="white" />
                    <stop offset="1" stop-color="#D2D3D3" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div class="section">
          <div class="one">
            <img
              :src="`http://ass.tujjor.org/${material.files[0].path}`"
              alt=""
            />
            <div class="shadow">
              <button>
                Yuklab olish
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="two">
            <div>
              <img
                :src="`http://ass.tujjor.org/${material.files[1].path}`"
                alt=""
              />
            </div>
            <img
              :src="`http://ass.tujjor.org/${material.files[2].path}`"
              alt=""
            />
          </div>
          <div class="three">
            <!-- <img src="@/assets/image/main/100.png" alt="" /> -->
            <!-- <video src="https://www.youtube.com/watch?v=rr_76nSa9Kw"></video> -->
            <iframe :src="material.link" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateformat from "dateformat";
export default {};
</script>

<style lang="scss" scoped>
.banner {
  background: #d9e6eb;
  width: 1300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  margin-top: 26px;
  .content {
    margin: 0 auto;
    padding: 15px;
    h4 {
      font-size: 24px;
      line-height: 29px;
      margin-top: 33px;
      color: #333;
      font-weight: 600;
    }
    p {
      font-size: 20px;
      line-height: 24px;
      color: #333;
      margin-top: 40px;
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
}
.main {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  .left {
    width: 50%;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
      }
      div:last-child {
        width: 190px;
        display: flex;
        justify-content: space-between;
        span {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #333333;
          display: flex;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
    .qaror {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      span {
        width: 300px;
        background: #e9e9e9;
        border-radius: 6px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #333333;
        padding: 10px 0px;
        text-align: center;
      }
    }
    .text {
      p {
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        color: #000000;
      }
    }
    .info {
      background: #e9e9e9;
      border-radius: 12px;
      width: 300px;
      height: 120px;
      padding: 20px;
      margin: 20px 0;
      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
      }
      div {
        margin-top: 10px;
        button {
          background: #ff4f4f;
          border-radius: 8px;
          padding: 8px 18px;
          border: 0;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #ffffff;
          margin-right: 10px;
          cursor: pointer;
        }
        button:last-child {
          background: #07a287;
        }
      }
    }
  }
  .right {
    width: 50%;
    padding-left: 30px;
    padding-top: 10px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      div:last-child {
        button {
          border: 0;
          cursor: pointer;
          background: transparent;
        }
      }
    }
    .section {
      .one {
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        transition: 0.5s ease !important;

        .shadow {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 30.67%,
            rgba(0, 0, 0, 0.75) 100%
          );
          button {
            position: absolute;
            cursor: pointer;
            right: 28px;
            bottom: 28px;
            background: transparent;
            border: 0;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            /* identical to box height */

            color: #ffffff;
          }
        }

        img {
          width: 100%;
        }
      }
      .one:hover .shadow {
        display: block;
      }

      .two {
        margin: 20px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        div:hover {
          box-shadow: 0px -130px 120px 0px rgba(0, 0, 0, 0.5) inset;
        }
        img {
          //   box-shadow: inset 10px 20px  30px rgba(0, 0, 0, 0.9);
          width: 285px;
        }
        img:hover {
          box-shadow: 0px -30px 20px 0px rgba(0, 0, 0, 0.5) inset;
        }

        img::after {
          content: "";
          display: block;
          width: 100%;
          height: 100px;
          box-shadow: inset 0px -30px 30px 0px rgba(0, 0, 0, 0.5);
        }
      }
      .three {
        width: 100%;
        iframe {
          width: 100%;
          border-radius: 12px;
          height: 400px;
        }
        iframe:hover {
          box-shadow: 5px 10px 20px red inset;
        }
      }
    }
  }
}
</style>
