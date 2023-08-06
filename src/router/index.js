import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue")
    },
    {
      path: "/components",
      name: "components",
      component: () => import("../components/pages/components/index.vue")
    }
  ]
})

export default router
