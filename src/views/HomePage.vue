<template>
  <BannerComponent
    :bannerImage="require('@/assets/images/HomeBanner.png')"
    :showIntro="true"
    :isHome="true"
  />
  <ProjectComponent />
  <CounterComponent />
  <BlogComponent :showBlogBoxText="true" :isHome="true" />
</template>

<script>
import BannerComponent from "@/components/BannerComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import CounterComponent from "@/components/CounterComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";

export default {
  components: {
    BannerComponent,
    ProjectComponent,
    CounterComponent,
    BlogComponent,
  },
};
</script>

<style></style>
