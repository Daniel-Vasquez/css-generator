export const FormCard = ({ cardStyles, setCardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxX,
    boxY,
    color,
    opacity,
    saturate,
  } = cardStyles

  return (
    <div className="bg-blue border-2 border-border text-white font-semibold rounded-xl my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-4 px-2">
      <div className="flex flex-col justify-center items-center gap-4 bg-blue-light rounded-md py-5 px-4">
        <p className="font-semibold text-xl text-golden">
          Circunferencia:
        </p>
        <label className="flex justify-center items-center gap-2">
          Radio:
          <input
            type="range"
            min="0"
            max="50"
            value={borderRadius}
            onChange={(e) => setCardStyles({ ...cardStyles, borderRadius: e.target.value },)}
          />
        </label>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 bg-blue-light rounded-md py-5 px-4">
        <p className="font-semibold text-xl text-golden">Sombra:</p>
        <label className="flex justify-center items-center gap-2">
          box-shadow-color:
          <input
            type="color"
            className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            value={boxShadowColor}
            onChange={(e) => setCardStyles({ ...cardStyles, boxShadowColor: e.target.value },)}
          />
        </label>

        <label className="flex justify-center items-center gap-2">
          Intencidad:
          <input
            type="range"
            min="0"
            max="20"
            value={boxShadow}
            onChange={(e) => setCardStyles({ ...cardStyles, boxShadow: e.target.value },)}
          />
        </label>
        <label className="flex justify-center items-center gap-2">
          Posición X:
          <input
            type="range"
            min="-20"
            max="20"
            value={boxX}
            onChange={(e) => setCardStyles({ ...cardStyles, boxX: e.target.value },)}
          />
        </label>
        <label className="flex justify-center items-center gap-2">
          Posición Y:
          <input
            type="range"
            min="-20"
            max="20"
            value={boxY}
            onChange={(e) => setCardStyles({ ...cardStyles, boxY: e.target.value },)}
          />
        </label>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 bg-blue-light rounded-md py-5 px-4">
        <p className="font-semibold text-xl text-golden">Colores:</p>
        <label className="flex justify-center items-center gap-2">
          Color del texto:
          <input
            type="color"
            className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            value={color}
            onChange={(e) => setCardStyles({ ...cardStyles, color: e.target.value },)}
          />
        </label>

        <label className="flex justify-center items-center gap-2">
          Opacidad:
          <input
            type="range"
            min="0"
            max="30"
            value={opacity}
            onChange={(e) => setCardStyles({ ...cardStyles, opacity: e.target.value },)}
          />
        </label>

        <label className="flex justify-center items-center gap-2">
          Saturación:
          <input
            type="range"
            min="0"
            max="400"
            value={saturate}
            onChange={(e) => setCardStyles({ ...cardStyles, saturate: e.target.value },)}
          />
        </label>
      </div>
    </div>
  )
}
