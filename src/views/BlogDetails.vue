<template>
  <div>
    <BannerComponent
      :bannerImage="require('@/assets/images/BlogDetailsBanner.jpg')"
      :showIntro="false"
      :isBlogDetails="true"
    />
  </div>
  <ArticleComponent />
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {
  components: {
    BannerComponent,
    ArticleComponent,
  },
};
</script>

<style scoped>
/* Стили специфичные для страницы Blog Details */
</style>
