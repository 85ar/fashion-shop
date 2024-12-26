<template>
  <div class="layout">
    <Header></Header>

    <div class="main-content">
      <Aside></Aside>

      <main class="content">
        <RouterView />
      </main>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}
.content {
  flex: 1;
}
</style>
