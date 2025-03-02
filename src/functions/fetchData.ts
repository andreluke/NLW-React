import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import type { StatusDataProps } from '@/types'

export async function fetchSubscriberStats(
  subscriberId: string
): Promise<StatusDataProps> {
  const [
    { count: accessCount },
    { count: inviteCount },
    { position: rankingPosition },
  ] = await Promise.all([
    getSubscriberInviteClicks(subscriberId),
    getSubscriberInviteCount(subscriberId),
    getSubscriberRankingPosition(subscriberId),
  ])

  return { accessCount, inviteCount, rankingPosition }
}
