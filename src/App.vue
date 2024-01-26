<template>
  <div class="wrapper">
    <div class="top center">
      <div class="background"></div>
      <HeaderComponent />
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  // Остальной код компонента
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  padding: 0;
  margin: 0;
}

.wrapper {
  min-width: 100vh;
}

.router-link-no-underline {
  text-decoration: none;
  color: #000000;
  &:hover {
    color: rgb(196, 86, 230);
    transform: scale(1.03);
  }
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 1px,
    transparent 360px,
    #e6e6e6 360px,
    #e6e6e6 361px,
    transparent 361px,
    transparent 760px,
    #e6e6e6 760px,
    #e6e6e6 761px,
    transparent 761px,
    transparent 1160px,
    #e6e6e6 1160px,
    #e6e6e6 1161px,
    transparent 1161px,
    transparent 1560px,
    #e6e6e6 1560px,
    #e6e6e6 1561px,
    transparent 1561px
  );
  pointer-events: none;
  z-index: -1;
}

.top {
  max-width: 1920px; /* Изменено на max-width, чтобы не превышать 1920px на больших экранах */
  margin: 0 auto; /* Центрирование .top */
}

.center {
  padding-left: calc(50% - 1920px / 2);
  padding-right: calc(50% - 1920px / 2);
}

.wrapper {
  overflow: hidden; /* Добавлено свойство overflow, чтобы скрыть возможные переполнения */
  position: relative; /* Добавлено свойство position, чтобы корректно обрабатывать позиционирование потомков */
}
</style>
