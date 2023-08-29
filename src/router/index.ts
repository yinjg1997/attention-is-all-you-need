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
        path: "split_landing-page",
        name: "SplitLandingPage",
        component: () => import("../components/SplitLandingPage.vue")
      },
      {
        path: "sound_board",
        name: "SoundBoard",
        component: () => import("../components/SoundBoard.vue")
      },
      {
        path: "fake_ant_design_button",
        name: "FakeAntDesignButton",
        component: () => import("../components/FakeAntDesignButton.vue")
      },
      {
        path: "art_is_button",
        name: "ArtIsButton",
        component: () => import("../components/ArtIsButton.vue")
      },
      {
        path: "faq_collapse",
        name: "FaqCollapse",
        component: () => import("../components/FaqCollapse.vue")
      },
      {
        path: "incrementing_counter",
        name: "IncrementingCounter",
        component: () => import("../components/IncrementingCounter.vue")
      },
      {
        path: "drink_water",
        name: "DrinkWater",
        component: () => import("../components/DrinkWater.vue")
      },
      {
        path: "movie_app",
        name: "MovieApp",
        component: () => import("../components/MovieApp.vue")
      },
      {
        path: "background_slider",
        name: "BackgroundSlider",
        component: () => import("../components/BackgroundSlider.vue")
      },
      {
        path: "theme_clock",
        name: "ThemeClock",
        component: () => import("../components/ThemeClock.vue")
      },
      {
        path:"button_ripple_effect",
        name: "ButtonRippleEffect",
        component: () => import("../components/ButtonRippleEffect.vue")
      },
      {
        path:"drag-n-drop",
        name: "DragNDrop",
        component: () => import("../components/DragNDrop.vue")
      },
      {
        path:"drawing-app",
        name: "DrawingApp",
        component: () => import("../components/DrawingApp.vue")
      },
      {
        path:"kinetic-loader",
        name: "KineticLoader",
        component: () => import("../components/KineticLoader.vue")
      },
      {
        path:"sticky-navbar",
        name: "StickyNavbar",
        component: () => import("../components/StickyNavbar.vue")
      },
      {
        path:"double-vertical-slider",
        name: "DoubleVerticalSlider",
        component: () => import("../components/DoubleVerticalSlider.vue")
      },
      {
        path:"toast-notification",
        name: "ToastNotification",
        component: () => import("../components/ToastNotification.vue")
      },
      {
        path:"github-profiles",
        name: "GithubProfiles",
        component: () => import("../components/GithubProfiles.vue")
      },
      {
        path:"good-cheap-fast",
        name: "GoodCheapFast",
        component: () => import("../components/GoodCheapFast.vue")
      },
      {
        path:"image-carousel",
        name: "ImageCarousel",
        component: () => import("../components/ImageCarousel.vue")
      },
      {
        path:"pokedex",
        name: "Pokedex",
        component: () => import("../components/Pokedex.vue")
      },
      {
        path:"hoverboard",
        name: "Hoverboard",
        component: () => import("../components/Hoverboard.vue")
      },
      {
        path:"mobile-tab-navigation",
        name: "MobileTabNavigation",
        component: () => import("../components/MobileTabNavigation.vue")
      },
      {
        path:"3d-background-boxes",
        name: "3dBackgroundBoxes",
        component: () => import("../components/3dBackgroundBoxes.vue")
      },
      {
        path:"verify-account-ui",
        name: "VerifyAccountUi",
        component: () => import("../components/VerifyAccountUi.vue")
      },
      {
        path:"custom-range-slider",
        name: "CustomRangeSlider",
        component: () => import("../components/CustomRangeSlider.vue")
      },
      {
        path:"testimonial-box-switcher",
        name: "TestimonialBoxSwitcher",
        component: () => import("../components/TestimonialBoxSwitcher.vue")
      },
      {
        path:"random-image-feed",
        name: "RandomImageFeed",
        component: () => import("../components/RandomImageFeed.vue")
      },
      {
        path:"insect-catch-game",
        name: "InsectCatchGame",
        component: () => import("../components/InsectCatchGame.vue")
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
