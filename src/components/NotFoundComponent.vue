<template>
  <div class="box">
    <div class="content">
      <h2 class="digits">404</h2>
      <br />
      <h2>We are sorry, but the page you requested was not found</h2>
      <button
        class="NotFound-button"
        @mouseover="handleButtonHover"
        @click="redirectToHome"
      >
        <span class="button-label">Back To Home</span>
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
    <img src="@/assets/images/404.png" alt="404 Image" class="404-image" />
  </div>
</template>

<script>
export default {
  name: "NotFound",

  methods: {
    redirectToHome() {
      // Navigate to Project component using the router
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: 360px;
  margin-top: 354px;
  margin-bottom: 15px;
}

.digits {
  font-family: "DM Serif Display", serif;
  font-size: 250px;
  line-height: 81px;
  color: #cda274;
  text-align: left;
}

h2 {
  width: 569px;
  height: 139px;
  font-family: "DM Serif Display", serif;
  font-size: 35px;
  line-height: 52.5px;
  color: #292f36;
  text-align: left;
}

.NotFound-button {
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

.box {
  display: flex;
}
</style>
