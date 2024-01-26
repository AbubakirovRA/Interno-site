<template>
  <div class="card-element">
    <div class="content-wrapper">
      <div class="content">
        <img class="image" :src="imageSrc" :alt="altText" />
        <div class="card-bottom">
          <div class="text-wrapper">
            <div class="style">{{ style }}</div>
            <div class="chapter">{{ chapter }}</div>
          </div>
          <button class="card-button" @click="redirectToProjectDetails">
            <svg
              class="vector"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.77199 14.9527L7.71484 8.26698L1.77199 1.58127"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    altText: String,
    style: String,
    chapter: String,
  },
  methods: {
    redirectToProjectDetails() {
      // Navigate to Project component using the router
      this.$router.push({ name: "ProjectDetails" });
    },
  },
};
</script>

<style scoped>
.card-element {
  position: relative;
  width: 552px;
  height: 636px;
}

.card-bottom {
  margin-top: 40px;
  display: flex;
  width: 550px;
  align-items: center;
  position: relative;
  justify-content: space-between;
}

.text-wrapper {
  width: 217px;
  height: 62px;
}

.card-button {
  width: 70px;
  height: 70px;
  border: none;
  background-color: #f4f0ec;
  border-radius: 66px;
}

.style {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "DM Serif Display", Helvetica;
  font-weight: 400;
  color: #292f36;
  font-size: 25px;
  letter-spacing: 0.5px;
  line-height: 31.2px;
  white-space: nowrap;
}

.chapter {
  position: relative;
  width: 217px;
  height: 27px;
  font-family: "Jost", Helvetica;
  font-weight: 400;
  color: #4d4f52;
  font-size: 22px;
  letter-spacing: 0.22px;
  line-height: 33px;
  white-space: nowrap;
}

.card-button:hover {
  transition: background-color 0.3s ease;
  transform: scale(1.1);
}

.vector {
  position: relative;
}
</style>
