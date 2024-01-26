<template>
  <div class="article">
    <div class="article-title">{{ article.title }}</div>
    <div class="cover">
      <div class="articleImage-wrapper">
        <img class="articleImage" :src="article.coverImage" alt="" />
      </div>
      <div class="cover-bottom">
        <div class="date">{{ article.date }}</div>
        <div class="breadcrumb">{{ article.breadcrumb }}</div>
      </div>
    </div>
    <div class="description">{{ article.description }}</div>
    <div class="post">
      <div class="subtitle">{{ article.subtitle }}</div>
      <div class="post-text">
        <div class="paragraph-text" v-html="article.paragraphText"></div>
        <div class="wrapper1">
          <div class="marker">
            <div v-for="marker in article.markers" :key="marker">
              <span>{{ marker }}</span>
            </div>
          </div>
          <div class="paragraph">
            <div v-for="paragraph in article.paragraphs" :key="paragraph">
              <p>{{ paragraph }}</p>
            </div>
          </div>
        </div>
        <div class="postImage-cover" v-if="article.postImage">
          <div>
            <img
              :src="article.postImage.src"
              :alt="article.postImage.alt"
              class="postImages"
            />
            <div class="postImage-text">
              <p>{{ article.postImage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
    tags: Array,
  },
  methods: {
    filterByTag(tag) {
      console.log("Clicked on tag:", tag);
    },
  },
};
</script>

<style lang="scss">
// Общие стили для текста
.text-style {
  font-family: "DM Serif Display";
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
}

.article-title {
  width: 684px;
  height: 126px;
  font-size: 50px;
  line-height: 63px;
  margin-bottom: 21px;
  @extend .text-style; // Использование общего стиля
}

.post {
  width: 560px;
  height: 63px;
  font-size: 50px;
  line-height: 63px;
  margin-top: 27px;
  margin-bottom: 20px;
  @extend .text-style; // Использование общего стиля
}

// Остальные стили остаются без изменений
.cover-bottom {
  display: flex;
  justify-content: space-between;
  font-family: "Jost";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  height: 236px;
  @extend .text-style; // Использование общего стиля
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 35px;
}

.post-text {
  @extend .text-style; // Использование общего стиля
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 44px;
}

.wrapper1 {
  display: flex;
}

.marker {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @extend .text-style; // Использование общего стиля
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #cda274;
  margin-right: 14px;
}

p,
.paragraph-text {
  margin-bottom: 32px;
}

.postImages {
  margin-bottom: 32px;
}
</style>
