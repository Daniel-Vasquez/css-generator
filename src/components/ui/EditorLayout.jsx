// En móvil: preview → controles → código. En desktop: controles fijos a la
// izquierda (sticky) y preview + código a la derecha.
export const EditorLayout = ({ controls, preview, code, onReset }) => (
  <div className="grid gap-4 items-start lg:grid-cols-[22rem_minmax(0,1fr)]">
    <aside className="order-2 lg:order-none lg:row-span-2 lg:sticky lg:top-4 flex flex-col gap-4 bg-blue border-2 border-border text-white rounded-xl p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-golden font-bold text-lg">Controles</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-white border border-border py-1.5 px-3 rounded-md hover:border-golden hover:text-golden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden"
        >
          Restablecer
        </button>
      </div>
      {controls}
    </aside>

    <div className="order-1 lg:order-none">{preview}</div>

    <div className="order-3 lg:order-none bg-blue border-2 border-border rounded-xl p-4">
      <h2 className="text-golden font-bold text-lg mb-3">Código CSS</h2>
      {code}
    </div>
  </div>
)
