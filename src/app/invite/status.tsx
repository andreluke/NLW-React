import { StatusItem } from '@/components'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Status() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <StatusItem
        stats={'1042'}
        label="Acessos ao link"
        icon={MousePointerClick}
      />
      <StatusItem stats={'1042'} label="Inscrições feitas" icon={BadgeCheck} />
      <StatusItem
        stats={'3'}
        label="Posição no ranking"
        icon={Medal}
        position
      />
    </div>
  )
}
