import { CopyButton } from '@/components/ui/CopyButton'

// rules: [{ prop, value, inactive }]. Las reglas inactivas se muestran tachadas
// (p. ej. propiedades flex con display: block) y no se incluyen al copiar.
export const CssCode = ({ selector, rules }) => {
  const cssText = [
    `${selector} {`,
    ...rules.filter((r) => !r.inactive).map((r) => `  ${r.prop}: ${r.value};`),
    '}',
  ].join('\n')

  return (
    <div className="relative">
      <CopyButton text={cssText} label="Copiar CSS" />
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
