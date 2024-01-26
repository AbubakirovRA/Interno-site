<template>
  <section class="project-box">
    <h2 class="project-box__heading">Follow Our Projects</h2>
    <p class="project-box__text">
      It is a long established fact that a reader will be distracted by the of
      readable content of page lookings at its layouts points.
    </p>
    <div class="project-box__content" :style="gridStyle">
      <ProjectCardComponent
        v-for="item in projectItems"
        :key="item.id"
        :imageSrc="item.imageSrc"
        :altText="item.altText"
        :style="item.style"
        :chapter="item.chapter"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProjectCardComponent from "@/components/ProjectCardComponent.vue";

export default {
  name: "ProjectComponent",
  components: {
    ProjectCardComponent,
  },
  computed: {
    ...mapGetters(["getProjectItems"]),
    projectItems() {
      return this.getProjectItems; // добавьте это
    },
  },
  methods: {
    ...mapActions(["fetchProjectItems"]),
  },
  created() {
    this.fetchProjectItems();
  },
};
</script>

<style scoped>
.project-box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
}

.project-box__heading {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 62.5px;
  color: #292f36;
  margin-top: 96px;
  margin-bottom: 12px;
}

.project-box__text {
  width: 737px;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #4d5053;
}

.project-box__content {
  display: grid;
  grid-template: repeat(var(--rows, 2), 636px) / repeat(
      var(--columns, 2),
      552px
    );
  row-gap: 56px;
  column-gap: 99px;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
}
</style>
