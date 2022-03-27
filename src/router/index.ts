import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import BaseLayout from "@/layout/BaseLayout.vue";
export const routers: RouteRecordRaw[] = [
  {
    path: "/",
    component: BaseLayout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "home",
        component: () => import("@/views/index/index.vue"),
      },]
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

// router.beforeEach((from, to, next) => {
//   let query = from.query as { a: string | undefined; t: string | undefined };
//   from.fullPath = from.path;
//   if (query.a && query.t) {
//     setSpikSystemDate(query.a, query.t);
//   }
//   let isLogin = isUserLogin();
//   if (!isLogin && from.path !== "/login") {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router;
