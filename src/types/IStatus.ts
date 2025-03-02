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
  subscriberId: string
}

export type { StatusProps, StatusComponentProps, StatusData, StatusDataProps }
