import { useEffect, useId, useState } from 'react'

const HEX_RE = /^#[0-9a-f]{6}$/i

export const ColorControl = ({ label, value, onChange }) => {
  const id = useId()
  // Texto local para permitir escribir el hex a medias sin romper el color
  const [text, setText] = useState(value)

  useEffect(() => setText(value), [value])

  const handleText = (e) => {
    const next = e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`
    setText(next)
    if (HEX_RE.test(next)) onChange(next.toLowerCase())
  }

  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-10 p-0.5 bg-white border border-gray-200 rounded-md cursor-pointer"
        />
        <input
          type="text"
          value={text}
          maxLength={7}
          spellCheck={false}
          aria-label={`${label} en hexadecimal`}
          onChange={handleText}
          className="w-24 bg-blue text-white font-mono uppercase rounded border border-border px-2 py-1 text-sm focus:outline-none focus:border-golden"
        />
      </div>
    </div>
  )
}
