<template>
  <div class="layout">
    <Header></Header>
    <main class="content">
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
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
