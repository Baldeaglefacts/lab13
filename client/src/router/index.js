import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from "@/components/AboutSite";

//Sets the "home page" of the app
export default createRouter({
    history: createWebHashHistory(),
    routes: [  // creates ways for components to be called, so they can be
        // displayed on the page
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
})
