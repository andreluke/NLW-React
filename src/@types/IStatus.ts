import type { SubscriberStats } from '@/class'
import type { GetRanking200 } from '@/http/api'
import type { LucideProps } from 'lucide-react'
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'

interface StatusComponentProps extends ComponentProps<'div'> {
  label: string
  stats: number | string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  position?: boolean
}

interface StatusData {
  label: string
  stats: number | string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  position?: boolean
}

interface StatusDataProps {
  accessCount: number
  inviteCount: number
  rankingPosition: number | null
}

interface StatusProps {
  // subscriberId: string
  subscriberStats: SubscriberStats
}

type FetchStatsFunction = (subscriberId: string) => Promise<StatusDataProps>

type FetchRanking = () => Promise<GetRanking200>

export type {
  StatusProps,
  StatusComponentProps,
  StatusData,
  StatusDataProps,
  FetchStatsFunction,
  FetchRanking,
}
