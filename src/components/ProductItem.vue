<template>
  <div class="card" @click="openProductDetail(props.product)">
    <div class="imageBlock">
      <img :src="props.product.image" alt="img" class="img" />
    </div>
    <div class="infoBlock">
      <div class="title">{{ props.product.title }}</div>
      <div class="priceBlock">
        <div class="price">
          Price:
          <span class="priceValue">{{ props.product.price }} $</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
  },
})

const openProductDetail = (product) => {
  router.push({
    name: 'product',
    params: { productId: product.id },
  })
}
</script>

<style scoped>
.card {
  width: 250px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
  background: var(--primary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.quantityBlock {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.quantity {
  margin: 0 5px;
}
.minusIcon,
.plusIcon {
  width: 1em;
  height: 1em;
  color: var(--secondary);
}
.card:hover {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.35));
  cursor: pointer;
}
.imageBlock {
  width: 170px;
  height: 170px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 10px;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.infoBlock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.priceBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
  font-size: 14px;
}
.priceValue {
  color: var(--third);
}
.title {
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
