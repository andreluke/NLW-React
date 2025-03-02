import { SubscriberStats } from '@/class'
import { StatusItem } from '@/components'
import { fetchSubscriberStats } from '@/functions'
import type { StatusProps } from '@/types'

export async function Status({ subscriberId }: StatusProps) {
  const subscriberStats = new SubscriberStats(
    subscriberId,
    fetchSubscriberStats
  )
  const statsData = await subscriberStats.getSubscriberStatusData()

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
