<template>
  <div class="element">
    <div class="overlap-group">
      <div class="content-wrapper">
        <div class="content">
          <img class="image" :src="imageSrc" :alt="altText" />
          <div class="sub-content-2">
            <p class="text-wrapper-7">{{ title }}</p>
            <div class="date">
              <div class="text-wrapper-8">{{ date }}</div>
              <button class="card-button" @click="redirectToBlogDetails">
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
      <div class="tag">
        <div class="overlap-group-2">
          <div class="rectangle"></div>
          <div class="text-wrapper-9">{{ tagText }}</div>
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
    title: String,
    date: String,
    tagText: String,
  },
  methods: {
    redirectToBlogDetails() {
      // Navigate to Project component using the router
      this.$router.push({ name: "BlogDetails" });
    },
  },
};
</script>

<style scoped>
.element {
  position: relative;
  width: 382px;
  height: 521px;
}

.overlap-group {
  position: relative;
  width: 383px;
  height: 522px;
  border-radius: 62px;
}

.overlap-group:hover {
  transition: background-color 0.3s ease;
  background-color: #f4f0ec;
  .card-button {
    background-color: #ffffff;
  }
}

.content-wrapper {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  padding: 21px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 62px;
  border: 1px solid;
  border-color: #e7e7e7;
  box-shadow: 0px 10px 30px #ffffff40;
}

.content {
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 479px;
  align-items: center;
  gap: 21px;
  position: relative;
}

.image {
  position: relative;
  width: 340px;
  height: 289.27px;
}

.sub-content-2 {
  display: flex;
  flex-direction: column;
  width: 340px;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper-7 {
  position: relative;
  width: 305px;
  height: 70px;
  margin-top: -1px;
  font-family: "DM Serif Display", Helvetica;
  font-weight: 400;
  color: #292f36;
  font-size: 25px;
  letter-spacing: 0.5px;
  line-height: 31.2px;
}

.date {
  display: flex;
  width: 340px;
  align-items: center;
  gap: 65px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper-8 {
  position: relative;
  width: 223px;
  height: 33px;
  font-family: "Jost", Helvetica;
  font-weight: 400;
  color: #4d4f52;
  font-size: 16px;
  letter-spacing: 0.16px;
  line-height: 24px;
}

.tag {
  position: absolute;
  width: 131px;
  height: 41px;
  top: 249px;
  left: 41px;
}

.overlap-group-2 {
  position: relative;
  width: 129px;
  height: 41px;
}

.rectangle {
  position: absolute;
  width: 124px;
  height: 41px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 8px 8px 8px 0px;
}

.text-wrapper-9 {
  position: absolute;
  width: 118px;
  height: 29px;
  top: 4px;
  left: 11px;
  font-family: "Jost", Helvetica;
  font-weight: 400;
  color: #4d4f52;
  font-size: 16px;
  letter-spacing: 0.16px;
  line-height: 24px;
}

.card-button {
  width: 52px;
  height: 52px;
  border: none;
  background-color: #f4f0ec;
  border-radius: 66px;
}

.card-button:hover {
  transition: background-color 0.3s ease;
  transform: scale(1.1);
}

.vector {
  position: relative;
  width: 8px;
  height: 15px;
}
</style>
