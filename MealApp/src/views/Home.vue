<template>
  <div class="flex flex-col p-8 ">
      <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params:{letter}}" v-for="letter of letters" :key="letter">
          {{ letter }}
        </router-link>
      </div>
  </div>
  <pre>{{ ingredients}}</pre>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])

onMounted( async() => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data)
    ingredients.value = response.data
})
</script>
