export const FormCard = ({ cardStyles, setCardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxX,
    boxY,
    color,
    backgroundColor,
    widthCard,
    heightCard,
    text,
    fontSize
  } = cardStyles

  const windowWidth = window.innerWidth

  return (
    <div className="bg-blue border-2 border-border text-white font-semibold rounded-xl my-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 py-4 px-2">
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
        <label class="flex justify-center items-center gap-2">
          box-shadow-color:
          <input
            type="color"
            class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
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
        <label class="flex justify-center items-center gap-2">
          Color del texto:
          <input
            type="color"
            class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            value={color}
            onChange={(e) => setCardStyles({ ...cardStyles, color: e.target.value },)}
          />
        </label>
        
        <label class="flex justify-center items-center gap-2">
          Color del fondo:
          <input
            type="color"
            class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            value={backgroundColor}
            onChange={(e) => setCardStyles({ ...cardStyles, backgroundColor: e.target.value },)}
          />
        </label>

        <label
          class="block font-semibold text-white">
          Ingresa un texto:
          <input
            type="text"
            value={text}
            class="bg-transparent border border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
            placeholder="Ingresa un texto"
            onChange={(e) => setCardStyles({ ...cardStyles, text: e.target.value },)}
          />
        </label>

        <label className="flex justify-center items-center gap-2">
          Tamaño:
          <input
            type="range"
            min="12"
            max="45"
            value={fontSize}
            onChange={(e) => setCardStyles({ ...cardStyles, fontSize: e.target.value },)}
          />
        </label>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 bg-blue-light rounded-md py-5 px-4">
        <p className="font-semibold text-xl text-golden">Tamaño:</p>
        <label className="flex justify-center items-center gap-2">
          Ancho:
          <input
            type="range"
            min="0"
            max={windowWidth >= 600 ? 500 : 200}
            value={widthCard}
            onChange={(e) => setCardStyles({ ...cardStyles, widthCard: e.target.value },)}
          />
        </label>
        <label className="flex justify-center items-center gap-2">
          Alto:
          <input
            type="range"
            min="0"
            max="350"
            value={heightCard}
            onChange={(e) => setCardStyles({ ...cardStyles, heightCard: e.target.value },)}
          />
        </label>
      </div>
    </div>
  )
}
