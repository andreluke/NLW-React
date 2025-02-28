import { RankingItem } from '@/components'

export function Ranking() {
  return (
    <div className="w-full max-w-[400px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <RankingItem medal="gold" name="André Lucas" score={1400} />
        <RankingItem medal="silver" name="João Silva" score={1040} />
        <RankingItem medal="cooper" name="Arthur Sales" score={1000} />
      </div>
    </div>
  )
}
