import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/favorite',
        name: 'favorite',
        component: () =>
            import('./FavoriteModule.vue'),
    },
];

const favoriteRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default favoriteRouter;