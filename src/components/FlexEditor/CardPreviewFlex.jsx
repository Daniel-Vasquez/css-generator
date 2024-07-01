export const CardPreviewFlex = ({ stylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  } = stylesFlex

  return (
    <div className="w-full flex justify-center">
      <div
        className="bg-blue border-2 border-border w-full h-80 rounded-xl p-4 xl:h-auto"
        style={{
          display: `${display}`,
          flexDirection: `${flexDirection}`,
          justifyContent: `${justifyContent}`,
          alignItems: `${alignItems}`,
          flexWrap: `${flexWrap}`,
          gap: "20px",
        }}
      >
        <div className="bg-golden text-black font-semibold py-2 px-4 rounded-md">
          Item 1
        </div>
        <div className="bg-golden text-black font-semibold py-2 px-4 rounded-md">
          Item 2
        </div>
        <div className="bg-golden text-black font-semibold py-2 px-4 rounded-md">
          Item 3
        </div>
      </div>
    </div>
  )
}
