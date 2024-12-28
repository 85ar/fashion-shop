<template>
  <footer class="footer">
    <a href="/" class="logo">Shop</a>
    <div class="telegramBlock">
      <BsTelegram class="telegramIcon" /> <span class="author">arturvlv</span>
    </div>
  </footer>
</template>

<script setup>
import { BsTelegram } from "@kalimahapps/vue-icons";
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 50px;
  padding: 21px 0;
  border-top: 1px solid var(--additional);
}
.logo {
  color: #f19c38;
  font-size: 24px;
}
.author {
  color: var(--third);
  margin-left: 4px;
}
.telegramBlock {
  display: flex;
  align-items: center;
}
.telegramIcon {
  color: #a59e9e;
}
</style>
