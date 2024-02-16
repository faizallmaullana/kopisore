import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: () => import("@/pages/LandingPage.vue"),
    },
  ],
});

export default router;