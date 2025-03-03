import { StatusItem } from '@/components'
import type { StatusProps } from '@/types'

export async function Status({ subscriberStats }: StatusProps) {
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
