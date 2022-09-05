import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/discover',
        name: 'discover',
        component: () =>
            import('./DiscoverModule.vue'),
    },
];

const discoverRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default discoverRouter;