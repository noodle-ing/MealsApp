<template>
    <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed, defineProps } from "vue";
import store from "../store";

const meals = computed(() => store.state.meals);

// Экспортируем переменные в шаблон
const props = defineProps(['meals']);
</script>
