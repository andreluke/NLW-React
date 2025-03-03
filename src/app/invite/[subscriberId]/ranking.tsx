import type { RankingProps } from '@/@types'
import { RankingItem } from '@/components'
import { positionMedals } from '@/tools'

export async function Ranking({ rankingOrder }: RankingProps) {
  const { ranking } = await rankingOrder.getRanking()

  return (
    <div className="w-full max-w-[400px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <RankingItem
              key={item.id}
              medal={positionMedals[rankingPosition]}
              name={item.name}
              score={item.score}
            />
          )
        })}
      </div>
    </div>
  )
}
