const FORMATS = [
  { id: 'css', label: 'CSS' },
  { id: 'tailwind', label: 'Tailwind' },
]

export const FormatToggle = ({ value, onChange }) => (
  <div role="group" aria-label="Formato del código" className="flex gap-1 bg-blue-light rounded-lg p-1">
    {FORMATS.map(({ id, label }) => (
      <button
        key={id}
        type="button"
        aria-pressed={value === id}
        onClick={() => onChange(id)}
        className={`py-1 px-3 rounded-md text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden ${
          value === id ? 'bg-golden text-black' : 'text-white hover:bg-blue'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
)
