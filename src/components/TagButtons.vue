<!-- TagButtons.vue -->
<template>
  <div class="tags-wrapper">
    <h2 class="tags-text">Tags</h2>
    <button
      v-for="tag in tags"
      :key="tag"
      @click="filterByTag(tag)"
      class="tag-button"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
    filterByTag: Function,
  },
};
</script>

<style scoped>
/* Стили TagButtons (стили для кнопок тегов) */
.tag-button {
  background-color: #f4f0ec;
  color: #292f36;
  width: 132px;
  height: 41px;
  border-radius: 10px;
  border: none;
  margin-bottom: 11px;
}

.tag-button:hover {
  background-color: #292f36;
  color: #f4f0ec;
}

.tags-wrapper {
  margin-left: 52px;
  margin-top: 20px;
}

/* Стили для кнопок тегов (добавьте свои стили по необходимости) */
.tags-wrapper button {
  margin-right: 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.tags-text {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 24px;
}
</style>
