<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <p>{{ meals}}</p>
        </div>
</template>


<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";

const route = useRoute();
const keyLetter = ref('');
const meals = computed( () => store.state.serchMeals);

function serchMealByLetter(){
    store.dispatch("serchMealByLetter", keyLetter.value)
}

onMounted(() => {
    keyLetter.value = route.params.name
    if (keyLetter.value) {
        serchMealByLetter()
    }
})
</script>