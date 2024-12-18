import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category, ShopStore, Product } from '../types/type'
import { getCategories, getProducts, getProductsByCategory } from '../services/service'

export const useShopStore = defineStore('shop', (): ShopStore => {
  const categories = ref<Category[]>([])
  const products = ref<Product[]>([])
  const productsByCategory = ref<Product[]>([])

  // получаем список категорий
  const fetchCategories = async (): Promise<void> => {
    try {
      const result = await getCategories()
      categories.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка категорий', error)
      throw error
    }
  }

  // получаем список продуктов
  const fetchProducts = async (): Promise<void> => {
    try {
      const result = await getProducts()
      products.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка продуктов', error)
      throw error
    }
  }

  // получаем список продуктов по категории
  const fetchProductsByCategory = async (categoryName: Category): Promise<void> => {
    try {
      productsByCategory.value = []
      const result = await getProductsByCategory(categoryName)
      productsByCategory.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка продуктов по категории', error)
      throw error
    }
  }
  return {
    categories,
    products,
    fetchCategories,
    fetchProducts,
    productsByCategory,
    fetchProductsByCategory,
  }
})
