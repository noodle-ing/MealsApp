<template>
    <div class="p-8">
        <input type="text" v-model="keyWord" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"   @change="searchMeals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>

            <div class="p-3">
                <h3 class="font-bold">{{meal.strMeal}}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti totam voluptas.</p>
                <div class="mt-5">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-red-600  bg-red-500 hover:bg-red-600 transition-colors p-2">YouTube</a>
                </div>
            </div>
        </div>
<!--        <p>{{ meals}}</p>-->
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";

const route = useRoute();
const keyWord = ref('');
const meals = computed(() => store.state.serchMeals);

function searchMeals() {
    store.dispatch("serchMeals", keyWord.value)
}

onMounted(() => {
    keyWord.value = route.params.name
    if (keyWord.value) {
        searchMeals()
    }
})
</script>