// Alturas distintas para que align-items (center, stretch, etc.) sea visible
const ITEM_HEIGHTS = ['py-2', 'py-6', 'py-4']

export const CardPreviewFlex = ({ stylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    itemCount,
  } = stylesFlex

  const items = Array.from({ length: itemCount }, (_, i) => i + 1)

  return (
    <div
      className="bg-blue border-2 border-border w-full min-h-80 rounded-xl p-4 overflow-auto"
      style={{
        display,
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap: `${gap}px`,
      }}
    >
      {items.map((n, i) => (
        <div
          key={n}
          className={`bg-golden text-black font-semibold px-4 rounded-md transition-all ${ITEM_HEIGHTS[i % ITEM_HEIGHTS.length]}`}
        >
          Item {n}
        </div>
      ))}
    </div>
  )
}
