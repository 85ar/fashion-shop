<template>
  <div>
    <p class="title">All product list</p>

    <div v-if="store.loading" class="spinner">
      <Spinner />
    </div>
    <div class="products">
      <ProductItem v-for="product in productsLimit" :product="product" :key="product.id" />
    </div>

    <div class="pagination" v-if="!store.loading">
      <button @click="prevPage()" class="btnNavigate" :disabled="pageNumber === 0">
        <BsChevronLeft />
      </button>
      <ul class="ul">
        <li v-for="btn in pageCount" class="li">
          <button
            :disabled="btn - 1 === pageNumber"
            :class="btn - 1 === pageNumber ? 'activePage' : ''"
            @click="handlePage(btn)"
          >
            {{ btn }}
          </button>
        </li>
      </ul>
      <button class="btnNavigate" @click="nextPage()" :disabled="pageNumber >= pageCount - 1">
        <BsChevronRight />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useShopStore } from '../stores/store'
import ProductItem from './ProductItem.vue'
import Spinner from './Spinner.vue'
import { onMounted, computed, ref } from 'vue'
import { BsChevronRight } from '@kalimahapps/vue-icons'
import { BsChevronLeft } from '@kalimahapps/vue-icons'

const store = useShopStore()

// первая порция продуктов с учетом лимита на странице
const productsLimit = computed(() => {
  const start = pageNumber.value * store.limit
  const end = start + store.limit
  return store.products.slice(start, end)
})

const pageNumber = ref<number>(0)

const pageCount = computed(() => {
  let l = store.products.length
  let s = store.limit
  return Math.ceil(l / s)
})

const prevPage = () => {
  pageNumber.value--
}

const nextPage = () => {
  pageNumber.value++
}

const handlePage = (btnNumber: number) => {
  pageNumber.value = btnNumber - 1
}

onMounted(async () => {
  !store.products.length && (await store.fetchProducts())
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
.btn {
  border-radius: 8px;
  border: 1px solid var(--additional);
  color: var(--accent);
  font-size: 14px;
  padding: 6px 28px;
  display: flex;
  margin: auto;
}
.btn:hover {
  color: var(--third);
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.ul {
  display: flex;
  align-items: center;
}
.li {
  margin: 0 4px;
}
.btnNavigate {
  display: flex;
}
.activePage {
  color: var(--accent);
}
</style>
