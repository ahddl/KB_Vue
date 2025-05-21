import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '@/views/IntroPage.vue'
// import { name } from '@vue/eslint-config-prettier/skip-formatting'
import BusinessPage from '@/views/BusinessPage.vue'
import HomePage from '@/views/HomePage.vue'
import NewsPage from '@/views/NewsPage.vue'
import SponsorPage from '@/views/SponsorPage.vue'
import AboutPage from '@/views/subpage/AboutPage.vue'
import TransManagement from '@/views/subpage/TransManagement.vue'

const routes = [
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage,
    children: [{ path: 'about', name: 'about', component: AboutPage }],
    children: [{ path: 'trans', name: 'trans', component: TransManagement }],
  },
  { path: '/business', name: 'business', component: BusinessPage },
  { path: '/sponsor', name: 'sponsor', component: SponsorPage },
  { path: '/news', name: 'news', component: NewsPage },
  { path: '/', name: 'home', component: HomePage },
  // {
  //   path: '/:paths(.*)*',
  //   name: 'NotFound',
  //   component: NotPage,
  // },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
