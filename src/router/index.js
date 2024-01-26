import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Project from "../views/Project.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import Blog from "../views/BlogPage.vue";
import BlogDetails from "../views/BlogDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/projectId",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/articleId",
    name: "BlogDetails",
    component: BlogDetails,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
