import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './../views/MainPage.vue'
import NewProduct from '../views/NewProductPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ShoppingCartPage from '../views/ShoppingCartPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main',
  },
  {
    path: '/new-product',
    component: NewProduct,
    name: 'newProduct',
  },
  { path: '/category/:categoryName', component: MainPage, name: 'category' },
  // { path: '/products/:productId', component: ProductPage, name: 'product' },
  {
    path: '/about-us',
    component: AboutPage,
    name: 'aboutUs',
  },
  {
    path: '/contacts',
    component: ContactsPage,
    name: 'contacts',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
  },
  {
    path: '/shopping-cart',
    component: ShoppingCartPage,
    name: 'shoppingCart',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
