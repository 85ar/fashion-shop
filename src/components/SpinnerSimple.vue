<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: flash 0.9s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: rgba(62, 133, 208, 0.7);
    box-shadow: 32px 0 rgba(62, 133, 208, 0.7), -32px 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 32px 0 rgba(62, 133, 208, 0.7), -32px 0 rgba(62, 133, 208, 0.7);
  }
  100% {
    background-color: rgba(62, 133, 208, 0.7);
    box-shadow: 32px 0 #FFF, -32px 0 rgba(62, 133, 208, 0.7);
  }
}

</style>
