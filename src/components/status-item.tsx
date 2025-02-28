import type { StatusProps } from '@/types'
import React from 'react'

export function StatusItem({
  icon,
  stats,
  label,
  position = false,
  ...props
}: StatusProps) {
  return (
    <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl gap-1">
      <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {stats}
        {position && '°'}
      </span>
      <span className="text-sm text-gray-300 leading-none text-center">
        {label}
      </span>
      {React.createElement(icon, {
        className: 'size-5 text-purple absolute top-3 left-3',
      })}
    </div>
  )
}
