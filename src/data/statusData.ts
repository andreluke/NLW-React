import type { StatusData, StatusDataProps } from '@/types'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function createStatusData({
  accessCount,
  inviteCount,
  rankingPosition,
}: StatusDataProps): StatusData[] {
  return [
    {
      label: 'Acessos ao link',
      stats: accessCount,
      icon: MousePointerClick,
    },
    {
      label: 'Inscrições feitas',
      stats: inviteCount,
      icon: BadgeCheck,
    },
    {
      label: 'Posição no ranking',
      stats: rankingPosition ?? '-',
      icon: Medal,
      position: !!rankingPosition,
    },
  ]
}
