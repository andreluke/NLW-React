import type { IRanking } from '@/@types'
import { positionRanking, rankingMedals, translateMedal } from '@/tools'
import Image from 'next/image'

export function RankingItem({ medal, name, score, ...props }: IRanking) {
  return (
    <div
      key={props.key}
      className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-between gap-3"
      {...props}
    >
      <span className="text-sm text-gray-300 leading-none">
        <span className="font-semibold">{positionRanking[medal]}</span> | {name}
      </span>

      <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
        {score}
      </span>

      <Image
        src={rankingMedals[medal]}
        alt={`medalha de ${translateMedal[medal]}`}
        className="absolute top-0 right-8"
      />
    </div>
  )
}
