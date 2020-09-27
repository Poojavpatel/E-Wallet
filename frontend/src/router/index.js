import Vue from 'vue';
import Router from 'vue-router';

const Dashboard = () => import('../pages/Dashboard').then(m => m.default || m);
const Login = () => import('../pages/Login').then(m => m.default || m);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: { breadcrumb: true },
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      meta: { breadcrumb: true },
      component: Dashboard,
    },
  ],
});
