import { ControlGroup } from '@/components/ui/ControlGroup'
import { SelectControl } from '@/components/ui/SelectControl'
import { RangeControl } from '@/components/ui/RangeControl'

export const FormFlex = ({ stylesFlex, setStylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    itemCount,
  } = stylesFlex

  const update = (key) => (value) => setStylesFlex({ ...stylesFlex, [key]: value })
  const isBlock = display === 'block'

  return (
    <>
      <ControlGroup title="Contenedor">
        <SelectControl label="Display" value={display} options={['flex', 'block']} onChange={update('display')} />
        <SelectControl
          label="Flex Direction"
          value={flexDirection}
          options={['row', 'row-reverse', 'column', 'column-reverse']}
          disabled={isBlock}
          onChange={update('flexDirection')}
        />
        <SelectControl
          label="Justify Content"
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']}
          disabled={isBlock}
          onChange={update('justifyContent')}
        />
        <SelectControl
          label="Align Items"
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          disabled={isBlock}
          onChange={update('alignItems')}
        />
        <SelectControl
          label="Flex Wrap"
          value={flexWrap}
          options={['nowrap', 'wrap', 'wrap-reverse']}
          disabled={isBlock}
          onChange={update('flexWrap')}
        />
        <RangeControl label="Gap" min={0} max={60} unit="px" value={gap} onChange={update('gap')} />
      </ControlGroup>

      <ControlGroup title="Ítems">
        <RangeControl label="Cantidad" min={1} max={12} value={itemCount} onChange={update('itemCount')} />
        <p className="text-xs text-gray-300">
          Los ítems tienen alturas distintas para que se note <code>align-items</code>. Añade más para ver el efecto de <code>flex-wrap</code>.
        </p>
      </ControlGroup>
    </>
  )
}
