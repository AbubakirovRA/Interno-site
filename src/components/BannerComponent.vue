<template>
  <div
    :class="{
      'home-banner': isHome,
      'blog-banner': isBlog,
      'blogDetails-banner': isBlogDetails,
    }"
  >
    <img :src="bannerImage" alt="Banner Image" class="banner-image" />

    <div v-if="showIntro" class="intro">
      <div class="intro-top">
        <h1 class="intro-title">Let Your Home Be Unique</h1>
      </div>

      <div class="intro-middle">
        <p class="intro-text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
      </div>

      <div class="intro-bottom">
        <button
          class="intro-button"
          @mouseover="handleButtonHover"
          @click="redirectToProject"
        >
          <span class="button-label">Get Started</span>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerImage: String,
    showIntro: Boolean,
    isHome: Boolean,
    isBlog: Boolean,
    isBlogDetails: Boolean,
  },
  methods: {
    redirectToProject() {
      // Navigate to Project component using the router
      this.$router.push({ name: "Project" });
    },
  },
};
</script>

<style lang="scss">
.home-banner {
  position: relative;
  width: 1200px;
  height: 758px;
  margin: 0px 360px 0px 360px;

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .intro {
    position: absolute;
    top: 208px;
    bottom: 208px;
    left: 58px;
    right: 712px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-top {
      height: 162px;

      .intro-title {
        font-family: "DM Serif Display", serif;
        font-size: 65px;
        line-height: 81px;
        color: #000000;
        text-align: left;
      }
    }

    &-middle {
      margin-top: 18px;
      margin-bottom: 21px;

      .intro-text {
        font-family: "Jost", sans-serif;
        font-size: 22px;
        line-height: 33px;
        color: #000000;
        text-align: left;
      }
    }

    &-bottom {
      .intro-button {
        display: flex;
        align-items: center;
        padding: 26px 49px;
        background-color: #292f36;
        border-radius: 18px;
        cursor: pointer;

        &:hover {
          .button-label {
            color: rgb(196, 86, 230);
          }
          transform: scale(1.03);
        }

        .button-label {
          font-family: "Jost", sans-serif;
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
          color: #ffffff;
          margin-right: 8px;
        }

        svg {
          stroke: #cda274;
        }
      }
    }
  }
}

.blog-banner {
}
</style>
