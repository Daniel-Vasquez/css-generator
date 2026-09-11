import { CssCode } from '@/components/ui/CssCode'

export const CardStylesFlex = ({ stylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
  } = stylesFlex

  // Con display: block las propiedades flex no aplican: se muestran tachadas y no se copian
  const inactive = display === 'block'

  const containerRules = [
    { prop: 'display', value: display },
    { prop: 'flex-direction', value: flexDirection, inactive },
    { prop: 'justify-content', value: justifyContent, inactive },
    { prop: 'align-items', value: alignItems, inactive },
    { prop: 'flex-wrap', value: flexWrap, inactive },
    { prop: 'gap', value: `${gap}px`, inactive },
  ]

  const itemRules = [
    { prop: 'background-color', value: '#fbbf24' },
    { prop: 'color', value: 'black' },
    { prop: 'font-weight', value: '600' },
    { prop: 'padding', value: '0.5rem 1rem' },
    { prop: 'border-radius', value: '0.375rem' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <CssCode selector=".container" rules={containerRules} />
      <CssCode selector=".item" rules={itemRules} />
    </div>
  )
}
