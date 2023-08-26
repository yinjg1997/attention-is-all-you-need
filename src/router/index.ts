import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    redirect: { name: "ExpandingCards" },
    children: [
      {
        path: "expanding_cards",
        name: "ExpandingCards",
        component: () => import("../components/ExpandingCards.vue"),
      },
      {
        path: "progress_step",
        name: "ProgressStep",
        component: () => import("../components/ProgressStep.vue"),
      },
      {
        path: "rotation_nav_animation",
        name: "RotationNavAnimation",
        component: () => import("../components/RotationNavAnimation.vue"),
      },
      {
        path: "hidden_search_widget",
        name: "HiddenSearchWidget",
        component: () => import("../components/HiddenSearchWidget.vue"),
      },
      {
        path: "blurry_loading",
        name: "BlurryLoading",
        component: () => import("../components/BlurryLoading.vue"),
      },
      {
        path: "scroll_animation",
        name: "ScrollAnimation",
        component: () => import("../components/ScrollAnimation.vue"),
      },
      {
        path: "split-landing-page",
        name: "SplitLandingPage",
        component: () => import("../components/SplitLandingPage.vue")
      }
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
