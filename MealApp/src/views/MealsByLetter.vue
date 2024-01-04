<template>
<!--    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">-->
        <div>
            <p>sdfsdf</p>
            <router-view />
<!--            <router-link :to="{name: 'by-letter', params: {id: meal.idMeal}}">-->

<!--            </router-link>-->

<!--            <div class="p-3">-->
<!--                <h3 class="font-bold">{{meal.strMeal}}</h3>-->
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti totam voluptas.</p>-->
<!--                <div class="mt-5">-->
<!--                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-red-600  bg-red-500 hover:bg-red-600 transition-colors p-2">YouTube</a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <p>{{ meals}}</p>-->
<!--        </div>-->
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";
import {useRoute} from "vue-router";

const route = useRoute();
const keyLetter = ref('');
import store from "../store/index.js";


function serchMealByLetter () {
  store.dispatch("serchMealByLetter" , keyLetter)
}

onMounted(() => {
keyLetter.value = route.params.name
    if (keyLetter.value)
    {
        serchMealByLetter()
    }
})
</script>