<template>
  <section :class="{ 'blog-box': isHome, 'blog-box1': isBlog }">
    <h2
      :class="{
        'blog-box__heading': isHome,
        'blog-box__heading1': isBlog,
      }"
    >
      Articles & News
    </h2>
    <p v-if="showBlogBoxText" class="blog-box__text">
      It is a long established fact that a reader will be distracted by the of
      readable content of a page when lookings at its layouts the points of
      using.
    </p>
    <div class="blog-box__content" :style="gridStyle">
      <ArticleCardComponent
        v-for="item in displayedBlogItems"
        :key="item.id"
        :imageSrc="item.imageSrc"
        :altText="item.altText"
        :title="item.title"
        :date="item.date"
        :tagText="item.tagText"
      />
    </div>
    <PaginatorComponent
      v-if="isBlog && totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      :formatted-page-number="formattedPageNumber"
      @page-change="changePage"
    />
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArticleCardComponent from "@/components/ArticleCardComponent.vue";
import PaginatorComponent from "@/components/PaginatorComponent.vue";

export default {
  name: "BlogComponent",
  components: {
    ArticleCardComponent,
    PaginatorComponent,
  },
  props: {
    rows: {
      type: Number,
      default: 1,
    },
    columns: {
      type: Number,
      default: 3,
    },
    showBlogBoxText: Boolean,
    isHome: Boolean,
    isBlog: Boolean,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["getBlogItems"]),
    blogItems() {
      return this.getBlogItems;
    },
    gridStyle() {
      return {
        gridTemplate: `repeat(var(--rows, ${this.rows}), 521px) / repeat(var(--columns, ${this.columns}), 382px)`,
        columnGap: "24px",
        rowGap: "30px",
      };
    },
    totalPages() {
      return Math.ceil(this.blogItems.length / (this.rows * this.columns));
    },
    displayedBlogItems() {
      const start = (this.currentPage - 1) * this.rows * this.columns;
      const end = start + this.rows * this.columns;
      return this.blogItems.slice(start, end);
    },
  },
  methods: {
    ...mapActions(["fetchBlogItems"]),
    changePage(page) {
      this.currentPage = page;
    },
    formattedPageNumber(page) {
      // Функция, которая добавляет ведущий ноль для чисел от 1 до 9
      return page < 10 ? `0${page}` : page.toString();
    },
  },
  created() {
    this.fetchBlogItems();
  },
};
</script>

<style scoped>
.blog-box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.blog-box1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 104px;
}

.blog-box__text {
  width: 737px;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #4d5053;
  margin-bottom: 52px;
}

.blog-box__heading {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 62.5px;
  color: #292f36;
  margin-top: 96px;
  margin-bottom: 12px;
}

.blog-box__heading1 {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 62.5px;
  color: #292f36;
  margin-top: 156px;
  margin-bottom: 30px;
}

.blog-box__content {
  display: grid;
  grid-template: repeat(var(--rows, 1), 521px) / repeat(
      var(--columns, 3),
      382px
    );
  row-gap: 30px;
  column-gap: 24px;
  justify-content: center;
  align-items: center;
}
</style>
