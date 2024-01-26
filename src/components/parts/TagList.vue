<template>
  <div class="tags">
    <ul>
      <li v-for="tag in tags" :key="tag" @click="selectTag(tag)">{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagList",
  data() {
    return {
      tags: ["Tag 1", "Tag 2", "Tag 3"],
    };
  },
  methods: {
    selectTag(tag) {
      this.$emit("tagSelected", tag);
    },
  },
};
</script>

<style>
/* Ваш стиль */
</style>
