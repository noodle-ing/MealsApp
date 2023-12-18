import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/by-name/:name?',
                name: 'byaName',
                component: MealsByName,
            },
            {
                path: '/by-ingredients/:ingredients?',
                name: 'byIngredients',
                component: MealsByIngredients,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

