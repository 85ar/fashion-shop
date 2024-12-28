import axios from 'axios'
import API_CONFIG from '../config/config.ts'
import type { Category, Product } from '../types/type.ts'

// загрузка списка категорий
export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_CONFIG.api}/categories`)
  return response.data
}

// загрузка списка продуктов
export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_CONFIG.api}`)
  return response.data
}

// загрузка списка продуктов выбранной категории
export const getProductsByCategory = async (categoryName: Category): Promise<Product[]> => {
  const response = await axios.get(`${API_CONFIG.api}/category/${categoryName}`)
  return response.data
}

// загрузка данных по выбранному продукту
export const getProductById = async (productId: number): Promise<Product> => {
  const response = await axios.get(`${API_CONFIG.api}/${productId}`)
  return response.data
}

// // загрузка данных по выбранному продукту
// export const getProductByLimit = async (limit: number): Promise<Product[]> => {
//   const response = await axios.get(`${API_CONFIG.api}/${productId}`)
//   return response.data
// }
