import type { NextPage } from 'next'

export interface INextPageExtended extends NextPage {
  getLayout?: (page: React.ReactElement) => React.ReactNode
  namespace?: string[] | string
}

export type IconComponentType = React.ComponentType<{
  width?: number
  height?: number
  fill?: string
  className?: string
}>
