import { createRouter, createWebHistory } from "vue-router";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:txid?/:param/:value",
      component: ProfileView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ProfileView,
    },
  ],
});

export default router;
