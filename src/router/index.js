import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/course/:id",
      name: "course",
      component: () => import("@/pages/CoursePage.vue"),
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("@/pages/CasesPage.vue"),
    },
    {
      path: "/case/:id",
      name: "case",
      component: () => import("@/pages/CasePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("@/pages/ContactsPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
