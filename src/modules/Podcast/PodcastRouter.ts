import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/podcasts',
        name: 'podcasts',
        component: () =>
            import('./PodcastModule.vue'),
    },
];

const podcastRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default podcastRouter;