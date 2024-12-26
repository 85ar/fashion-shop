<template>
  <div class="layout">
    <Header></Header>

    <main class="content">
      <RouterView />
    </main>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
}
</style>
