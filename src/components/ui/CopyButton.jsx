import { useEffect, useState } from 'react'

export const CopyButton = ({ text, label = 'Copiar' }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // Sin permisos de portapapeles: el usuario puede seleccionar el texto a mano
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`absolute top-3 right-3 text-xs font-semibold py-1.5 px-3 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden ${
          copied ? 'bg-green-500 text-black' : 'bg-golden text-black hover:bg-yellow-300'
        }`}
      >
        {copied ? '¡Copiado!' : label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Copiado al portapapeles' : ''}
      </span>
    </>
  )
}
