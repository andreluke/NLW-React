import { StatusItem } from '@/components'
import { createStatusData } from '@/data/statusData'
import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import type { StatusData, StatusProps } from '@/types'

export async function Status({ subscriberId }: StatusProps) {
  const [
    { count: accessCount },
    { count: inviteCount },
    { position: rankingPosition },
  ] = await Promise.all([
    getSubscriberInviteClicks(subscriberId),
    getSubscriberInviteCount(subscriberId),
    getSubscriberRankingPosition(subscriberId),
  ])

  const statsData: StatusData[] = createStatusData({
    accessCount: accessCount,
    inviteCount: inviteCount,
    rankingPosition: rankingPosition,
  })

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {statsData.map(({ label, stats, icon, position }) => (
        <StatusItem
          key={label}
          stats={stats}
          label={label}
          icon={icon}
          position={position}
        />
      ))}
    </div>
  )
}
