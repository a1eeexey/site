import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:category_slug",
    name: "Category",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/authority",
    name: "authority",
    component: () => import("../views/AuthorityView.vue"),
  },
  {
    path: "/publish",
    name: "publish",
    component: () => import("../views/PublishView.vue"),
  },
  {
    path: "/timer",
    name: "timer",
    component: () => import("../views/TimerView.vue"),
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: () => import("../views/MyAccount.vue"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/:category_slug/:product_slug",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'Authority', query: { to: to.path } });
  } else {
    next();
  }
});

export default router
