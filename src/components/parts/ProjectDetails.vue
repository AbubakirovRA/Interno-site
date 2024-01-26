<template>
  <div>
    <h1>Project Details</h1>
    <p>{{ projectDescription }}</p>

    <!-- Пример использования слайдера Bootstrap -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://example.com/slide1.jpg"
            class="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://example.com/slide2.jpg"
            class="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://example.com/slide3.jpg"
            class="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  computed: {
    projectDescription() {
      return this.$store.getters.getProjectDescription;
    },
  },
  mounted() {
    // Здесь вы можете загрузить описание проекта или обновить его
    const description = "Здесь ваше обновленное описание проекта";
    this.$store.dispatch("updateProjectDescription", description);
  },
};
</script>

<style>
/* Ваши стили для компонента ProjectDetails */
</style>
