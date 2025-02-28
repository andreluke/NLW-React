import type { LucideProps } from 'lucide-react'
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'

interface StatusProps extends ComponentProps<'div'> {
  label: string
  stats: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  position?: boolean
}

export type { StatusProps }
