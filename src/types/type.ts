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
  loading: Ref<Boolean | undefined>
  productItem: Ref<Product>
  limit: Ref<number>
  page: Ref<number>

  fetchCategories: () => Promise<void>
  fetchProducts: () => Promise<void>
  fetchProductsByCategory: (categoryName: Category) => Promise<void>
  fetchProductById: (productId: number) => Promise<void>
}
