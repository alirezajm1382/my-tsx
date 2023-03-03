import { ReactNode } from 'react'

export interface ICard {
  children: ReactNode
  variant?: 'outlined' | 'elevation' | undefined
  action?: ReactNode
}

export interface INote {
  id: number
  title: string
  description: string
}

export interface IFormModal {
  hooks: Array<any>
}
