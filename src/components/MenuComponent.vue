<template>
  <!-- привязка класса к элементу на основе директивы v-bind:class-->
  <div :class="{ 'nav-header': isHeader, 'nav-footer': isFooter }">
    <router-link to="/" class="router-link-no-underline">Home</router-link>
    <router-link to="/project" class="router-link-no-underline"
      >Project</router-link
    >
    <router-link to="/blog" class="router-link-no-underline">Blog</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  props: {
    isHeader: Boolean, // Принимаем значение для определения использования в заголовке
    isFooter: Boolean, // Принимаем значение для определения использования в подвале
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

/* Добавляем стили для заголовка */
.nav-header {
  width: 243px;
  height: 25px;
  font-family: "Jost", sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

/* Добавляем стили для подвала */
.nav-footer {
  font-family: "Jost", sans-serif;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  height: 198px;
  width: 72px;
  justify-content: space-around;
  margin-top: 9px;
}
</style>
