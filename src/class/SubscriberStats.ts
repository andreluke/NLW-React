import type { FetchStatsFunction, StatusData, StatusDataProps } from '@/@types'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export class SubscriberStats {
  private fetchStatsFn: FetchStatsFunction
  subscriberId: string

  constructor(subscriberId: string, fetchStatsFn: FetchStatsFunction) {
    this.subscriberId = subscriberId
    this.fetchStatsFn = fetchStatsFn
  }

  async getSubscriberStatusData(): Promise<StatusData[]> {
    const stats = await this.fetchStatsFn(this.subscriberId)
    return this.createStatusData(stats)
  }

  createStatusData({
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
}
