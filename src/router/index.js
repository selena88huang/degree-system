import { createRouter, createWebHistory } from 'vue-router'
import Grade from '@/views/Grade.vue'
import LogInPage from '@/views/LogInPage.vue'

  const routes = [
    { path: '/', name: 'LogInPage', component: LogInPage, props: { msg: '畢業學分計算系統' }},
    { path: '/grade', name: 'Grade', component: Grade }
  ]


// 錯的code

// const routes = [
//   {path: "/", name: "Grade", component: () => import("@/views/Grade.vue")}
// ]

// const routes = [
    //     {path: "/", name: "Grade", component: Grade}
    //   ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router