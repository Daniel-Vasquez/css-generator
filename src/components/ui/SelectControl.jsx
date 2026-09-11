import { useId } from 'react'

export const SelectControl = ({ label, value, options, disabled = false, onChange }) => {
  const id = useId()

  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <label htmlFor={id} className={disabled ? 'text-gray-400' : ''}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-40 bg-blue border border-border text-white text-sm rounded-md p-2 focus:outline-none focus:border-golden disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
