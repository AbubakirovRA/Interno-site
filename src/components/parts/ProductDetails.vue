<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>Price: {{ formattedPrice }}</p>
    <p>Status: {{ product.available ? "Available" : "Out of stock" }}</p>
  </div>
  <div>
    <h1>Project Details</h1>
    <p>{{ projectDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      // Предполагается, что в объекте "product" есть свойство "price"
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.product.price);

      return formatted;
    },

    projectDescription() {
      return this.$store.getters.getProjectDescription;
    },
  },
  mounted() {
    // Загрузка описания проекта (пример)
    const description = "Описание вашего проекта";
    this.$store.dispatch("updateProjectDescription", description);
  },
};
</script>
