<template>
  <section class="latest-post" v-if="latestPost">
    <div class="title">Latest Post</div>
    <div class="content-wrapper">
      <div class="cover-image">
        <img :src="latestPost.coverImage" :alt="latestPost.altText" />
      </div>
      <div class="description">
        <h1 class="description-title">{{ latestPost.title }}</h1>
        <div class="description-text">
          <p v-if="splitDescription[0]">{{ splitDescription[0] }}</p>
          <p v-if="splitDescription[1]">{{ splitDescription[1] }}</p>
        </div>
        <div class="bottom">
          <div class="date">{{ latestPost.date }}</div>
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    redirectToBlogDetails() {
      // Navigate to Project component using the router
      this.$router.push({ name: "BlogDetails" });
    },
  },
  computed: {
    ...mapGetters(["getBlogItems"]),
    sortedBlogItems() {
      return [...this.getBlogItems].sort((a, b) => b.dateFormat - a.dateFormat);
    },
    latestPost() {
      return this.sortedBlogItems.length > 0 ? this.sortedBlogItems[0] : null;
    },
    splitDescription() {
      return this.latestPost ? this.latestPost.description.split(";") : [];
    },
  },
};
</script>

<style scoped>
.latest-post {
  position: relative;
  width: 1200px;
  height: 612px;
  margin-left: 360px;
  margin-top: 200px;
}

.title {
  width: 252px;
  height: 63px;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 62.5px;
  color: #292f36;
  margin-bottom: 27px;
}

.content-wrapper {
  width: 1155px;
  height: 480px;
  display: flex;
  padding: 22px;
  border: 1px solid;
  border-radius: 62px;
  border-color: #e7e7e7;
}

.cover-image {
  width: 569px;
  height: 478px;
  margin-right: 65px;
  overflow: hidden; /* Обрезать изображение, если оно больше контейнера */
  border-radius: 62px;
}

.description {
  width: 489px;
  height: 375px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-top: 41px;
}

.description-title {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 31.25px;
  color: #292f36;
}

.description-text {
  height: 198px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 41px;
}

.date {
  width: 223px;
  height: 33px;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-top: auto;
}
.card-button {
  position: relative;
  width: 70px;
  height: 70px;
  border: none;
  background-color: #f4f0ec;
  border-radius: 66px;
  margin-left: 214px;
}

.bottom {
  display: flex;
}
</style>
