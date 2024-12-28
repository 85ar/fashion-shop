import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewProduct from '../views/NewProductPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ShoppingCartPage from '../views/ShoppingCartPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'mainPage',
        component: () => import('../views/MainPage.vue'),
      },
      {
        path: 'category/:CategoryName',
        name: 'category',
        component: () => import('../views/CategoryPage.vue'),
      },
    ],
  },
  {
    path: '/simple',
    component: () => import('../layouts/SimpleLayout.vue'),
    children: [
      {
        path: '/new-product',
        name: 'newProduct',
        component: () => import('../views/NewProductPage.vue'),
      },
      {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('../views/AboutPage.vue'),
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/ContactsPage.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue'),
      },
      {
        path: '/shopping-cart',
        name: 'shoppingCart',
        component: () => import('../views/ShoppingCartPage.vue'),
      },
      {
        path: '/product/:productId',
        name: 'product',
        component: () => import('../views/ProductPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
