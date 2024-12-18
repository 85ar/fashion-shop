import type { Ref } from 'vue'

// api
export interface ApiConfig {
  api: string
}

// категория
export type Category = string

// продукт
export interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

// стор магазина
export interface ShopStore {
  categories: Ref<Category[]>
  products: Ref<Product[]>
  productsByCategory: Ref<Product[]>

  fetchCategories: () => Promise<void>
  fetchProducts: () => Promise<void>
  fetchProductsByCategory: (categoryName: Category) => Promise<void>
}
