<template>
  <div class="main">
    <Categories :selectedCategory="selectedCategory"/>
    <Products :selectedCategory="selectedCategory"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Categories from './../components/Categories.vue'
import Products from './../components/Products.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const selectedCategory = computed(() => {
  return route.params.categoryName
})

</script>

<style scoped>
.main {
  display: flex;
}
</style>
