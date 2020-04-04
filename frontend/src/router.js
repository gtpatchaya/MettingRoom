import Home from './components/HelloWorld.vue';
import About from './components/about.vue';

const router = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

export default router;