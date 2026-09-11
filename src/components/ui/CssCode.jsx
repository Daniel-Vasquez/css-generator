import { useEffect, useState } from 'react'

// rules: [{ prop, value, inactive }]. Las reglas inactivas se muestran tachadas
// (p. ej. propiedades flex con display: block) y no se incluyen al copiar.
export const CssCode = ({ selector, rules }) => {
  const [copied, setCopied] = useState(false)

  const cssText = [
    `${selector} {`,
    ...rules.filter((r) => !r.inactive).map((r) => `  ${r.prop}: ${r.value};`),
    '}',
  ].join('\n')

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cssText)
      setCopied(true)
    } catch {
      // Sin permisos de portapapeles: el usuario puede seleccionar el texto a mano
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copy}
        className={`absolute top-3 right-3 text-xs font-semibold py-1.5 px-3 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden ${
          copied ? 'bg-green-500 text-black' : 'bg-golden text-black hover:bg-yellow-300'
        }`}
      >
        {copied ? '¡Copiado!' : 'Copiar CSS'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "CSS copiado al portapapeles" : ""}
      </span>
      <pre className="css-code text-white bg-gray-700 p-5 pt-12 rounded-md text-base overflow-x-auto">
        <span className="text-green-500 font-semibold">{selector} {'{'}</span>
        {'\n'}
        {rules.map(({ prop, value, inactive }) => (
          <span key={prop} className={inactive ? 'line-through text-gray-500' : ''}>
            {`  ${prop}: `}
            <span className={inactive ? '' : 'text-golden'}>{value};</span>
            {'\n'}
          </span>
        ))}
        <span className="text-green-500 font-semibold">{'}'}</span>
      </pre>
    </div>
  )
}
