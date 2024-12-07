<template>
  <header class="header">
    <router-link to="/" class="logo">Shop</router-link>

    <div class="headerBlock">
      <nav class="nav">
        <ul class="ul">
          <li class="li">
            <router-link class="link" to="/new-product"> Add new product </router-link>
          </li>
          <li class="li">
            <router-link class="link" to="/about-us">About us</router-link>
          </li>
          <li class="li">
            <router-link class="link" to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </nav>

      <div class="btnsGroup">
        <div class="userBtn">
          <AnOutlinedUser class="userInIcon"/>
        </div>
        <router-link to="/shopping-cart" class="shoppingBtn">
          <CaShoppingCart class="shoppingIcon" />
        </router-link>
        <button class="logoutBtn">
          <IoOutlineLogOut class="logoutIcon" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CaShoppingCart } from '@kalimahapps/vue-icons'
import { AnOutlinedUser } from '@kalimahapps/vue-icons'
import { IoOutlineLogOut } from '@kalimahapps/vue-icons'
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 70px;
  margin-bottom: 50px;
  padding: 21px 0;
  border-bottom: 1px solid var(--additional);
}
.logo {
  color: #f19c38;
  font-size: 24px;
}
.ul {
  display: flex;
  min-width: 440px;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
}
.li {
  font-size: 16px;
}
.link {
  color: var(--secondary);
}
.link:hover {
  color: var(--third);
}
.headerBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 65%;
}
.shoppingIcon {
  width: 1.5em;
  height: 1.5em;
  color: var(--secondary);
}

.userInIcon {
  width: 1.5em;
  height: 1.5em;
  color: var(--accent);
}
.userIn {
  width: 1.5em;
  height: 1.5em;
  color: var(--accent);
}
.userOut {
  width: 1.5em;
  height: 1.5em;
  color: var(--secondary);
}
.userOutIcon {
  width: 1.5em;
  height: 1.5em;
  color: var(--secondary);
}
.logoutIcon {
  width: 1.5em;
  height: 1.5em;
  color: var(--secondary);
}
.loginBtn {
  display: flex;
}
.logoutBtn {
  display: flex;
  margin-left: 10px;
}
.shoppingBtn {
  margin-left: 12px;
  display: flex;
  align-items: flex-start;
}
.userBtn {
  display: flex;
  align-items: center;
  color: var(--accent);
}
.btnsGroup {
  display: flex;
  align-items: center;
}
</style>
