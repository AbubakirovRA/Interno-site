<template>
  <div class="logo">
    <router-link to="/" class="logo__link">
      <svg
        class="logo__image"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274"
        />
      </svg>
      <div class="label">
        <span class="logo__text">Interno</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
  // Возможно, нужны будут какие-то props для динамического изменения содержимого
};
</script>

<style lang="scss" scoped>
/* Подключение шрифта */
// @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");

.logo {
  &:hover {
    transform: scale(1.01);
  }
}

.label {
  width: 133px;
  height: 50px;
}

.logo__text {
  font-family: "DM Serif Display", serif;
  font-size: 40px;
  margin-left: 10px;
  &:hover {
    color: rgb(196, 86, 230);
  }
}

.logo__link {
  text-decoration: none; /* Убрать подчеркивание у ссылки */
  color: inherit; /* Использовать цвет ссылки по умолчанию */
  display: flex;
  align-items: center;
}
</style>
