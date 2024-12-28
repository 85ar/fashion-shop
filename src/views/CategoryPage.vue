<template>
  <ProductsByCategory :key="$route.params.CategoryName"/>
</template>

<script setup lang="ts">
import ProductsByCategory from '../components/ProductsByCategory.vue'
</script>
