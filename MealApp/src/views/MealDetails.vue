<template>
    <div class="w-[800px] mx-auto">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong>{{ meal.strTags }}
            </div>
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template  v-for="(el, ind) of new Array(21)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1}}.{{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template  v-for="(el, ind) of new Array(21)">
                        <li v-if="meal[`strMeasure${ind + 1}`]">
                            {{ ind + 1}}.{{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axiosClient from "../axiosClient.js";

const meal = ref({})
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?f=${route.params}`)
        .then(({data}) => {
            debugger;
            meal.value = data.meals[0] || {}
        })
})
</script>