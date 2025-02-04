import { createRouter, createMemoryHistory } from "vue-router";

import home from "../views/HomeView.vue";
import online from "../views/QuickBooksOnlineView.vue";
const routes = [
  { path: "/", component: home },
  { path: "/about", component: online },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
