<template>
  <section class="article-wrapper">
    <div class="article-content">
      <ArticleComponent
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
      />
    </div>
    <div v-if="filteredArticles.length === 0">
      <p>No articles match the selected tags.</p>
    </div>
    <TagButtons :tags="allTags" :filterByTag="filterByTag" />
  </section>
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import TagButtons from "@/components/TagButtons.vue";

export default {
  components: {
    ArticleComponent,
    TagButtons,
  },
  props: {
    articles: Array,
    filteredArticles: Array,
    allTags: Array,
    filterByTag: Function,
  },
};
</script>

<style scoped>
/* Стили ArticleList (стили для списка статей) */
.article-wrapper {
  overflow: hidden;
  display: flex;
  width: 1200px;
  min-height: 100%;
  margin-left: 360px;
  margin-top: 200px;
}

.article-content {
  width: 800px;
  height: max-height;
}
</style>
