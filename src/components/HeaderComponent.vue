<template>
  <div class="header">
    <div class="header__left">
      <LogoComponent />
    </div>
    <div class="header__right">
      <MenuComponent :isHeader="true" />
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default {
  components: {
    LogoComponent,
    MenuComponent,
  },
  // Остальной код компонента
};
</script>

<style scoped>
.header {
  width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 360px 57px;
}

.header__right {
  width: 624px;
  height: 26px;
  margin-left: 399px;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
}
</style>
