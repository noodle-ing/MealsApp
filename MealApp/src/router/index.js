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
        component: DefaultLayout, // это навбар который всегда будет отображатся не зависимот от роута
        children:[ // дальше идут пути в зависимотси что идет в URL
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

const router = createRouter({ // создаем роут где поределяем какие пути будут и как будет хранится история через метод createWebHistory()
    history: createWebHistory(),
    routes
})

export default router; // позволяет использовать маршрутизацию в всех частях приложения

