import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category, ShopStore, Product } from '../types/type'
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategory,
} from '../services/service'

export const useShopStore = defineStore('shop', (): ShopStore => {
  const categories = ref<Category[]>([])
  const products = ref<Product[]>([])

  // продукты по определенной категории
  const productsByCategory = ref<Product[]>([])

  // статус загрузки данных
  const loading = ref<Boolean>()

  // данные одного продукта
  const productItem = ref<Product>({} as Product)

  // количество карточек на странице
  const limit = ref<number>(8)
  // текущая страница
  const page = ref<number>(1)

  // получаем список категорий
  const fetchCategories = async (): Promise<void> => {
    try {
      loading.value = true
      const result = await getCategories()
      categories.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка категорий', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // получаем список продуктов
  const fetchProducts = async (): Promise<void> => {
    try {
      loading.value = true
      const result = await getProducts()
      products.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка продуктов', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // получаем список продуктов по категории
  const fetchProductsByCategory = async (categoryName: Category): Promise<void> => {
    try {
      productsByCategory.value = []
      loading.value = true
      const result = await getProductsByCategory(categoryName)
      productsByCategory.value = result
    } catch (error) {
      console.log('Ошибка загрузки списка продуктов по категории', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  // получаем данные по выбранному продукту
  const fetchProductById = async (productId: number): Promise<void> => {
    try {
      productItem.value = {} as Product
      loading.value = true
      const result = await getProductById(productId)
      productItem.value = result
    } catch (error) {
      console.log('Ошибка загрузки данных по продукту', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  return {
    categories,
    products,
    fetchCategories,
    fetchProducts,
    productsByCategory,
    fetchProductsByCategory,
    loading,
    fetchProductById,
    productItem,
    limit,
    page,
  }
})
