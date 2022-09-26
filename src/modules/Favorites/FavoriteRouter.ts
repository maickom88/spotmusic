import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/favorites',
        name: 'favorites',
        component: () =>
            import('./FavoriteModule.vue'),
    },
];

const favoriteRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default favoriteRouter;