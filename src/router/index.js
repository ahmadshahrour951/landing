import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue'),
    redirect: {
      name: 'Map',
    },
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('../components/map.vue'),
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('../components/table.vue'),
      },
    ],
  },
  {
    path: '/reset/:passwordToken',
    component: () => import('../views/Reset.vue'),
    name: 'Reset',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
