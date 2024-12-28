<template>
  <div v-if="store.loading" class="spinner">
    <Spinner />
  </div>
  <div class="card" v-else-if="store.productItem">
    <div class="imageBlock">
      <img :src="store.productItem.image" alt="img" class="img" />
    </div>
    <div class="infoBlock">
      <div class="title">{{ store.productItem.title }}</div>
      <div class="description">{{ store.productItem.description }}</div>
      <div class="category">Category: {{ store.productItem.category }}</div>
      <div class="count">Count: {{ store.productItem.rating?.count }}</div>
      <div class="priceBlock">
        <div class="price">
          Price:
          <span class="priceValue">{{ store.productItem.price }} $</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useShopStore } from '../stores/store'
import Spinner from '../components/Spinner.vue'

const store = useShopStore()
const route = useRoute()

onMounted(async () => {
  await store.fetchProductById(+route.params.productId)
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--primary);
}
.imageBlock {
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 20px;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.infoBlock {
  display: flex;
  flex-direction: column;
}
.title {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}
.quantityBlock {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.quantity {
  margin: 0 5px;
}
.description {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--secondary);
  line-height: 1.4;
}
.category {
  font-size: 16px;
  color: var(--secondary);
  margin-bottom: 5px;
}
.count {
  font-size: 16px;
  color: var(--secondary);
}
.priceBlock {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.price {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
.priceValue {
  color: var(--third);
}
.spinner {
  position: absolute;
  top: 35%;
  left: 55%;
}
</style>
