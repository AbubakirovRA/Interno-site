import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      blogItems: [],
      projectItems: [],
      filteredBlogItems: [],
      tags: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
    };
  },
  mutations: {
    setBlogItems(state, blogItems) {
      state.blogItems = blogItems;
    },
    setProjectItems(state, projectItems) {
      state.projectItems = projectItems;
    },
    setFilteredBlogItems(state, filteredBlogItems) {
      state.filteredBlogItems = filteredBlogItems;
    },
  },
  actions: {
    fetchBlogItems({ commit }) {
      // При необходимости загрузить данные с сервера, это делается здесь при помощи API, здесь же можно сделать импорт из файла
      // actions: {
      //   async fetchBlogItems({ commit }) {
      //     // Пример: использование API или импорт данных из файла
      //     try {
      //       const response = await fetch('your_api_endpoint');
      //       const data = await response.json();

      //       // Предполагая, что данные возвращаются в виде массива
      //       commit('setBlogItems', data);
      //     } catch (error) {
      //       console.error('Error fetching blog items:', error);
      //     }
      //   },
      // },

      // Здесь массив храним прямо в теле файла:
      const blogItems = [
        {
          id: 1,
          imageSrc: require("@/assets/images/Articles1.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December, 2022", // Текстовая дата для отображения на карточке
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchen",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.;Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage1.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage1.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage2.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 2,
          imageSrc: require("@/assets/images/Articles2.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage2.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage3.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage4.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 3,
          imageSrc: require("@/assets/images/Articles3.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage3.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage5.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage6.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 4,
          imageSrc: require("@/assets/images/Articles4.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage4.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage7.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage8.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 5,
          imageSrc: require("@/assets/images/Articles5.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage5.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage9.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage10.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 6,
          imageSrc: require("@/assets/images/Articles6.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage6.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage11.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage12.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 7,
          imageSrc: require("@/assets/images/Articles7.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December, 2022", // Текстовая дата для отображения на карточке
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage7.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage13.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage14.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 8,
          imageSrc: require("@/assets/images/Articles8.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage8.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage15.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage16.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 9,
          imageSrc: require("@/assets/images/Articles9.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage9.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage17.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage18.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 10,
          imageSrc: require("@/assets/images/Articles10.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage10.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage19.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage20.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 11,
          imageSrc: require("@/assets/images/Articles11.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage11.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage21.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage22.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 12,
          imageSrc: require("@/assets/images/Articles12.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage12.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage23.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage24.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 13,
          imageSrc: require("@/assets/images/Articles13.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December, 2022", // Текстовая дата для отображения на карточке
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage13.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage25.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage26.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 14,
          imageSrc: require("@/assets/images/Articles14.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "28 December, 2022",
          dateFormat: new Date("2022-12-28"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. ;Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage14.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage27.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage28.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 15,
          imageSrc: require("@/assets/images/Articles15.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchen",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage15.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage29.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage30.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 16,
          imageSrc: require("@/assets/images/Articles16.png"),
          altText: "ArticleImage",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage16.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage31.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage32.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 17,
          imageSrc: require("@/assets/images/Articles17.png"),
          altText: "ArticleImage",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage17.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage33.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage34.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
        {
          id: 18,
          imageSrc: require("@/assets/images/Articles18.png"),
          altText: "ArticleImage",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          dateFormat: new Date("2022-12-25"), // Дата для сортировки
          tagText: "Kitchan Design",
          tag: "Kitchan",
          subtitle: "Design sprints are great",
          description:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. ;Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          Breadcrumb: "Interior / Home / Decore",
          coverImage: require("@/assets/images/posts/coverImage18.png"),
          postImages: [
            {
              src: require("@/assets/images/posts/postImage35.png"),
              description: "",
            },
            {
              src: require("@/assets/images/posts/postImage36.png"),
              description:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ],
        },
      ];
      commit("setBlogItems", blogItems);
    },
    fetchProjectItems({ commit }) {
      const projectItems = [
        {
          id: 1,
          imageSrc: require("@/assets/images/Project1.png"),
          altText: "ProjectImage",
          style: "Modern Kitchan",
          chapter: "Decor / Artchitecture",
        },
        {
          id: 2,
          imageSrc: require("@/assets/images/Project2.png"),
          altText: "ProjectImage",
          style: "Modern Kitchan",
          chapter: "Decor / Artchitecture",
        },
        {
          id: 3,
          imageSrc: require("@/assets/images/Project3.png"),
          altText: "ProjectImage",
          style: "Modern Kitchan",
          chapter: "Decor / Artchitecture",
        },
        {
          id: 4,
          imageSrc: require("@/assets/images/Project4.png"),
          altText: "ProjectImage",
          style: "Modern Kitchan",
          chapter: "Decor / Artchitecture",
        },
      ];
      commit("setProjectItems", projectItems);
    },
    filterByTag({ commit, state }, tag) {
      const filteredItems = state.blogItems.filter((item) => {
        if (item.tags && item.tags.includes) {
          return item.tags.includes(tag);
        } else {
          console.error(
            "item.tags is undefined or does not have an includes method."
          );
          return false; // или другая обработка в случае, если нет includes
        }
      });
      commit("setFilteredBlogItems", filteredItems);
    },
  },
  getters: {
    getBlogItems: (state) => state.blogItems,
    getFilteredBlogItems: (state) => state.filteredBlogItems,
    getTags: (state) => state.tags,
    getProjectItems: (state) => state.projectItems,
  },
});

export default store;
