import type { StatusComponentProps } from '@/@types'

export function StatusItem({
  icon: Icon,
  stats,
  label,
  position = false,
  ...props
}: StatusComponentProps) {
  return (
    <div
      key={props.key}
      className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl gap-1"
      {...props}
    >
      <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {stats}
        {position && '°'}
      </span>
      <span className="text-sm text-gray-300 leading-none text-center">
        {label}
      </span>
      <Icon
        className="size-5 text-purple absolute top-3 left-3"
        aria-label={label}
      />
    </div>
  )
}
