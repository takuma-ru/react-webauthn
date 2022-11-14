import { ReactNode } from 'react'
import { IconNameType } from '~/types/icon/iconName'

export interface RouterPathInterface {
  icon: IconNameType
  link: string
  node: ReactNode
}

export const routerPathLists: Array<RouterPathInterface> = [
  {
    icon: 'home',
    link: '/',
    node: 'Index'
  }
]
