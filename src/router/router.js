import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Education from '../components/Education'
import Work from '../components/Work'
import Interests from '../components/Interests'

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Education',
        path: '/Education',
        component: Education
    },
    {
        name: 'Work',
        path: '/Work',
        component: Work
    },
    {
        name: 'Interests',
        path: '/Interests',
        component: Interests
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;