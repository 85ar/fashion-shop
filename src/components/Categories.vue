<template>
  <aside class="categories">
    <div class="title">Catalog</div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div class="list" v-else>
      <router-link
        :class="props.selectedCategory === category ? 'active' : 'link'"
        v-for="category in store.categories"
        :key="category"
        :to="{ path: `/category/${category}` }"
      >
        {{ category }}
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useShopStore } from '../stores/store'
import Spinner from './Spinner.vue'
// import type { Category } from '../types/type'

const props = defineProps(['selectedCategory'])

const store = useShopStore()
const loading = ref(true)

onMounted(async () => {
  !store.categories.length && (await store.fetchCategories())
  loading.value = false
})
</script>

<style scoped>
.categories {
  min-width: 179px;
}

.title {
  color: var(--secondary);
  font-size: 20px;
  margin-bottom: 25px;
}

.list {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.link {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--secondary);
}
.link:hover {
  color: var(--third);
}
.link::first-letter {
  text-transform: uppercase;
}
.active {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--accent);
}
.active::first-letter {
  text-transform: uppercase;
}

/* .loader {
  position: absolute;
  top: 30%;
} */
</style>
