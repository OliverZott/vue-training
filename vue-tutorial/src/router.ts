import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Tutorial1 from './components/TutorialPart1.vue';
import Tutorial2 from './components/TutorialPart2.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/tutorial1', name: 'Tutorial1', component: Tutorial1 },
    { path: '/tutorial2', name: 'Tutorial2', component: Tutorial2 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
