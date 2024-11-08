// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AppBoardView from '@/components/board/AppBoardView.vue';
import BoardDetail from '@/components/board/BoardDetail.vue';

const routes = [
  { path: '/', name: 'Board', component: AppBoardView },
  { path: '/board/:articleNo', name: 'BoardDetail', component: BoardDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
