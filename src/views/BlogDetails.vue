<template>
  <div>
    <BannerComponent
      :bannerImage="require('@/assets/images/BlogDetailsBanner.jpg')"
      :showIntro="false"
      :isBlogDetails="true"
    />
    <ArticleList
      :articles="articles"
      :filteredArticles="filteredArticles"
      :allTags="allTags"
      :filterByTag="filterByTag"
    />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {
  components: {
    BannerComponent,
    ArticleList,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Let’s Get Solution for Building Construction Work",
          coverImage: require("@/assets/images/posts/coverImage.png"),
          date: "26 December,2022",
          breadcrumb: "Interior / Home / Decore",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          subtitle: "Design sprints are great",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["3", "2", "1"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage1.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Building"],
        },
        // Вторая статья
        {
          id: 2,
          title: "The Art of Interior Design",
          coverImage: require("@/assets/images/posts/coverImage2.png"),
          date: "20 January, 2023",
          breadcrumb: "Interior / Design / Inspiration",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae...",
          subtitle: "Unlocking Creativity in Home Design",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["5", "4", "3"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage2.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Design"],
        },
        // Третья статья
        {
          id: 3,
          title: "The Beauty of a Well-Designed Kitchen",
          coverImage: require("@/assets/images/posts/coverImage3.png"),
          date: "15 February, 2023",
          breadcrumb: "Kitchen / Design / Inspiration",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae...",
          subtitle: "Transforming Your Kitchen Space",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["5", "4", "3"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage3.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Kitchen"],
        },
        // Четвертая статья
        {
          id: 4,
          title: "Building a Sustainable Future",
          coverImage: require("@/assets/images/posts/coverImage4.png"),
          date: "10 March, 2023",
          breadcrumb: "Building / Sustainability / Design",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae...",
          subtitle: "Green Architecture for Tomorrow",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["5", "4", "3"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage4.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Building"],
        },
        // Пятая статья
        {
          id: 5,
          title: "Architectural Wonders Around the Globe",
          coverImage: require("@/assets/images/posts/coverImage5.png"),
          date: "5 April, 2023",
          breadcrumb: "Architecture / Design / Inspiration",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae...",
          subtitle: "Exploring Masterpieces of Architecture",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["5", "4", "3"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage5.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Architecture"],
        },
        // Шестая статья
        {
          id: 6,
          title: "Bedroom Design Ideas for Every Style",
          coverImage: require("@/assets/images/posts/coverImage6.png"),
          date: "1 May, 2023",
          breadcrumb: "Bedroom / Design / Inspiration",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae...",
          subtitle: "Creating Your Dream Bedroom",
          paragraphText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          markers: ["5", "4", "3"],
          paragraphs: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          postImage: {
            src: require("@/assets/images/posts/postImage6.png"),
            alt: "Post Images",
            description:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
          tags: ["Bedroom"],
        },
      ],
      allTags: ["Kitchen", "Bedroom", "Building", "Architecture", "Design"],
      selectedTags: [],
    };
  },
  computed: {
    filteredArticles() {
      if (this.selectedTags.length === 0) {
        return this.articles;
      } else {
        return this.articles.filter((article) =>
          article.tags.some((tag) => this.selectedTags.includes(tag))
        );
      }
    },
  },
  methods: {
    filterByTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    // Другие методы, если необходимо
  },
};
</script>

<style scoped>
/* Стили специфичные для страницы Blog Details */
</style>
