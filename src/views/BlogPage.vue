<template>
  <div>
    <BannerComponent
      :bannerImage="require('@/assets/images/BlogBanner.jpg')"
      :showIntro="false"
      :isBlog="true"
    />
    <LastPostComponent />
    <BlogComponent
      :isBlog="true"
      :showBlogBoxText="false"
      :rows="2"
      :columns="3"
    />
  </div>
</template>

<script>
import BannerComponent from "@/components/BannerComponent.vue";
import LastPostComponent from "@/components/LastPostComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";

export default {
  components: {
    BannerComponent,
    LastPostComponent,
    BlogComponent,
  },
};
</script>

<style></style>
