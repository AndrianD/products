export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  address?: {
    name: string
    city: string
    coordinates: {
      lat: number
      lng: number
    }
    postalCode: string
    state: string
  }
  image: string
  token?: string
  isAuthenticated: boolean
}
