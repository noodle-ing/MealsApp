<template>
  <div class="flex flex-col p-8 ">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">

      <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params:{letter}}" v-for="letter of letters" :key="letter">
          {{ letter }}
        </router-link>
      </div>
  </div>
</template>

<script setup>
import {computed, defineProps, onMounted} from "vue";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split("");

onMounted( async() => {
    const responce = await axiosClient.get('/list.php?i=list');
    console.log(responce.data)
})
// Экспортируем переменные в шаблон
const props = defineProps(['meals']);
</script>
