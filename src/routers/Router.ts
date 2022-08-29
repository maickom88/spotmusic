import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [];

const baseRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default baseRouter;