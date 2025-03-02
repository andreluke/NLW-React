import type { ComponentProps } from 'react'

interface IRanking extends ComponentProps<'div'> {
  name: string
  score: number
  medal: string
}

export type { IRanking }
