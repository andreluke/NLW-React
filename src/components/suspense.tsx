export function LoadingIndicator() {
  return (
    <div
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="status"
      className="flex justify-center items-center h-20"
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-300" />
    </div>
  )
}
