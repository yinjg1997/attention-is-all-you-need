import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: { name: 'ProgressStep' },
    children: [
      {
        path: 'expanding_cards',
        name: 'ExpandingCards',
        component: () => import('../components/ExpandingCards.vue'),
      },
      {
        path: 'progress_step',
        name: 'ProgressStep',
        component: () => import('../components/ProgressStep.vue'),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
