import { createWebHistory, createRouter } from "vue-router";
const constantRoutes = [
  {
    path: "/index",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "",
    redirect: "/index",
  },
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.VITE_APP_ENV !== "development"
      ? import.meta.env.VITE_APP_BASE_URL
      : "/"
  ),
  routes: constantRoutes,
});

export default router;
