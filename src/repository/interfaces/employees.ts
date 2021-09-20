export interface CreateEmployee {
  id?: string
  name: string
  age: number
  role: string
  createdAt?: string
  archived?: boolean
}

export interface UpdateEmployee {
  id: string
  name?: string
  age?: number
  role?: string
  createdAt?: string
  archived?: boolean
}
