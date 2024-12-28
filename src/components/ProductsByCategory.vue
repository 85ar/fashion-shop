<template>
  <div>
    <p class="title">{{ activeCategory }}</p>

    <div v-if="store.loading" class="spinner">
      <Spinner />
    </div>
    <div class="products">
      <ProductItem
        v-for="product in store.productsByCategory"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useShopStore } from '../stores/store'
import ProductItem from './ProductItem.vue'
import Spinner from './Spinner.vue'
import { onMounted, computed } from 'vue'

const store = useShopStore()
const route = useRoute()

const activeCategory = computed(() => route.params.CategoryName)

onMounted(() => {
  store.fetchProductsByCategory(route.params.CategoryName)
})
</script>

<style scoped>
.title {
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-underline-offset: 6px;
  margin-left: 20px;
}
.title::first-letter {
  text-transform: uppercase;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.spinner {
  position: absolute;
  top: 35%;
  left: 55%;
}
</style>
