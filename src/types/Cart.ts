import { type Product } from './Product'

export interface CartItem {
  productItem: Product
  quantity: number
}

export interface CartState {
  cartItems: CartItem[]
}
