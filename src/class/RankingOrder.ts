import type { GetRanking200 } from '@/http/api'
import type { FetchRanking } from '@/types'

export class RankingOrder {
  private fetchRankingFn: FetchRanking

  constructor(fetchRankingFn: FetchRanking) {
    this.fetchRankingFn = fetchRankingFn
  }

  async getRanking(): Promise<GetRanking200> {
    const { ranking } = await this.fetchRankingFn()
    return { ranking }
  }
}
