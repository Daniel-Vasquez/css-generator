import { CopyButton } from '@/components/ui/CopyButton'

// classes: string[]. Se copian separadas por espacio, listas para pegar en className.
export const TailwindCode = ({ name, classes }) => {
  const text = classes.join(' ')

  return (
    <div className="relative">
      <CopyButton text={text} label="Copiar clases" />
      <pre className="css-code text-white bg-gray-700 p-5 pt-12 rounded-md text-base overflow-x-auto whitespace-pre-wrap break-words">
        <span className="text-gray-400">{`<!-- ${name} -->`}</span>
        {'\n'}
        <span className="text-green-500 font-semibold">class</span>=
        <span className="text-golden">&quot;{text}&quot;</span>
      </pre>
    </div>
  )
}
