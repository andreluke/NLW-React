import type { RankingOrder } from '@/class'
import type { ComponentProps } from 'react'

interface IRanking extends ComponentProps<'div'> {
  name: string
  score: number
  medal: string
}

interface RankingProps {
  rankingOrder: RankingOrder
}

export type { IRanking, RankingProps }
