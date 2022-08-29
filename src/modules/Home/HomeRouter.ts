import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import('./HomeModule.vue'),
    },
];

const homeRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default homeRouter;