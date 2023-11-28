import { type Product } from '@/types/Product'

export function useProductDetails() {
  const getProductById = async (productId: number): Promise<Product | null> => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`)
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'API")
      }

      const data: Product = await response.json()
      return data
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'API:", error)
      return null
    }
  }

  return {
    getProductById
  }
}
