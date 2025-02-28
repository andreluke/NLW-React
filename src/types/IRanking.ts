import type { ComponentProps } from 'react'

export interface IRanking extends ComponentProps<'div'> {
  name: string
  score: number
  medal: string
}
