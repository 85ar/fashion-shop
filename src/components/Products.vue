<template>
  <div>
    <p class="title">Product list</p>

    <div v-if="loading" class="spinner">
      <Spinner />
    </div>
    <div class="products">
      <ProductItem v-for="product in store.products" :product="product" :key="product.id" />
    </div>
    <!-- <div v-else class="message">Not founded</div> -->
  </div>
</template>

<script setup>
import { useShopStore } from '../stores/store'
import ProductItem from './ProductItem.vue'
import Spinner from './Spinner.vue'
import { ref, onMounted } from 'vue'

const store = useShopStore()
const loading = ref(true)

// const props = defineProps(['selectedCategory'])

// watch(
//   () => props.selectedCategory,
//   async (newCategory) => {
//     if (newCategory === undefined) {
//       await store.fetchProducts()
//     } else {
//       await store.fetchProductsByCategory(newCategory)
//     }
//   },
// )

// const displayProducts = computed(() => {
//   return props.selectedCategory ? store.productsByCategory : store.products
// })

onMounted(async () => {
  !store.products.length && (await store.fetchProducts())
  loading.value = false
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
