<template>
  <div class="paginator">
    <div
      v-if="showPrev"
      class="paginator-item"
      @click="changePage(currentPage - 1)"
    >
      &lt;
    </div>
    <div
      v-for="pageNumber in pagesToShow"
      :key="pageNumber"
      :class="{
        'paginator-item': true,
        'current-page': pageNumber === currentPage,
      }"
      @click="changePage(pageNumber)"
    >
      {{ formattedPageNumber(pageNumber) }}
    </div>
    <div
      v-if="showNext"
      class="paginator-item"
      @click="changePage(currentPage + 1)"
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
    visiblePages: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    showPrev() {
      return this.currentPage > 1;
    },
    showNext() {
      return this.currentPage < this.totalPages;
    },
    pagesToShow() {
      const pages = [];
      const halfVisible = Math.floor(this.visiblePages / 2);
      let start;
      let end;

      if (this.showPrev && this.showNext) {
        // Если отображаются обе стрелки, то показываем 2 страницы
        start = Math.max(1, this.currentPage - halfVisible);
        end = Math.min(this.totalPages, start + 1);
      } else {
        // Если отображается только одна стрелка, то показываем 3 страницы
        start = Math.max(1, this.currentPage - halfVisible - 1);
        end = Math.min(this.totalPages, start + 2);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-change", page);
      }
    },
    formattedPageNumber(page) {
      // Функция, которая добавляет ведущий ноль для чисел от 1 до 9
      return page < 10 ? `0${page}` : page.toString();
    },
  },
};
</script>

<style>
.paginator {
  width: 320px;
  height: 52px;
  display: flex;
  margin-top: 51px;
  margin-left: 460px;
}

.paginator-item {
  border-radius: 66px;
  width: 52px; /*размер кнопок*/
  height: 52px;
  cursor: pointer;
  border: 1px solid #cda274;
  color: #292f36; /*цвет текста */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px; /*отступ между кнопками*/
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.paginator-item:hover {
  background-color: #f0f0f0;
}

.current-page {
  background-color: #f4f0ec;
  transform: scale(1.07);
  border: none;
  margin-top: 6px;
}
</style>
