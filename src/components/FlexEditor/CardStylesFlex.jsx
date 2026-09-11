import { CssCode } from '@/components/ui/CssCode'
import { TailwindCode } from '@/components/ui/TailwindCode'

const TW_JUSTIFY = {
  'flex-start': 'justify-start',
  center: 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
}

const TW_ALIGN = {
  'flex-start': 'items-start',
  center: 'items-center',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
}

const TW_DIRECTION = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
}

const TW_WRAP = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

const ITEM_TAILWIND = ['bg-[#fbbf24]', 'text-black', 'font-semibold', 'px-4', 'py-2', 'rounded-md']

export const CardStylesFlex = ({ stylesFlex, format }) => {
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

  if (format === 'tailwind') {
    const containerClasses = inactive
      ? ['block']
      : ['flex', TW_DIRECTION[flexDirection], TW_JUSTIFY[justifyContent], TW_ALIGN[alignItems], TW_WRAP[flexWrap], `gap-[${gap}px]`]

    return (
      <div className="flex flex-col gap-4">
        <TailwindCode name="container" classes={containerClasses} />
        <TailwindCode name="item" classes={ITEM_TAILWIND} />
      </div>
    )
  }

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
