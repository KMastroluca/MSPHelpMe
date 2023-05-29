import { createRouter, createWebHistory } from "vue-router";

// Import Components
import Dashboard from '../views/Dashboard.vue';

const routes = [
    {
        path:'/',
        name:'Root',
        component:Dashboard,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;