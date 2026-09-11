import { useId } from 'react'

export const RangeControl = ({ label, value, min, max, step = 1, unit = '', onChange }) => {
  const id = useId()
  const handleChange = (e) => onChange(Number(e.target.value))

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between gap-2 text-sm">
        <label htmlFor={id}>{label}</label>
        <span className="flex items-center gap-1">
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            aria-label={`${label} (valor exacto)`}
            onChange={handleChange}
            className="w-16 bg-blue text-white text-right rounded border border-border px-1 py-0.5 text-sm focus:outline-none focus:border-golden"
          />
          {unit && <span className="text-gray-400 w-6">{unit}</span>}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer"
      />
    </div>
  )
}
