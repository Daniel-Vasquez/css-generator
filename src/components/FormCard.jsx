import { ControlGroup } from '@/components/ui/ControlGroup'
import { RangeControl } from '@/components/ui/RangeControl'
import { ColorControl } from '@/components/ui/ColorControl'

export const FormCard = ({ cardStyles, setCardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxSpread,
    boxX,
    boxY,
    inset,
    color,
    blur,
    saturate,
  } = cardStyles

  const update = (key) => (value) => setCardStyles({ ...cardStyles, [key]: value })

  return (
    <>
      <ControlGroup title="Radio del borde">
        <RangeControl label="Radio" min={0} max={50} unit="px" value={borderRadius} onChange={update('borderRadius')} />
      </ControlGroup>

      <ControlGroup title="Sombra">
        <ColorControl label="Color" value={boxShadowColor} onChange={update('boxShadowColor')} />
        <RangeControl label="Posición X" min={-50} max={50} unit="px" value={boxX} onChange={update('boxX')} />
        <RangeControl label="Posición Y" min={-50} max={50} unit="px" value={boxY} onChange={update('boxY')} />
        <RangeControl label="Desenfoque" min={0} max={50} unit="px" value={boxShadow} onChange={update('boxShadow')} />
        <RangeControl label="Expansión" min={-20} max={20} unit="px" value={boxSpread} onChange={update('boxSpread')} />
        <label className="flex items-center justify-between gap-2 text-sm cursor-pointer">
          Sombra interior (inset)
          <input
            type="checkbox"
            checked={inset}
            onChange={(e) => update('inset')(e.target.checked)}
            className="h-4 w-4 accent-golden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-golden focus-visible:ring-offset-2 focus-visible:ring-offset-blue-light"
          />
        </label>
      </ControlGroup>

      <ControlGroup title="Fondo y texto">
        <ColorControl label="Color del texto" value={color} onChange={update('color')} />
        <RangeControl label="Desenfoque del fondo" min={0} max={30} unit="px" value={blur} onChange={update('blur')} />
        <RangeControl label="Saturación" min={0} max={400} unit="%" value={saturate} onChange={update('saturate')} />
      </ControlGroup>
    </>
  )
}
