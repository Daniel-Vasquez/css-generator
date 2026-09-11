import { CssCode } from '@/components/ui/CssCode'
import { TailwindCode } from '@/components/ui/TailwindCode'
import { buildBoxShadow, toArbitrary } from '@/utils/boxShadow'

export const StyleDisplay = ({ cardStyles, format }) => {
  const { borderRadius, color, blur, saturate } = cardStyles
  const boxShadow = buildBoxShadow(cardStyles)

  if (format === 'tailwind') {
    const classes = [
      `rounded-[${borderRadius}px]`,
      `shadow-[${toArbitrary(boxShadow)}]`,
      `text-[${color}]`,
      'bg-[rgba(17,25,40,0.75)]',
      `backdrop-blur-[${blur}px]`,
      `backdrop-saturate-[${saturate}%]`,
      'overflow-hidden',
      'p-5',
      'mx-auto',
    ]
    return <TailwindCode name="card" classes={classes} />
  }

  const rules = [
    { prop: 'border-radius', value: `${borderRadius}px` },
    { prop: 'box-shadow', value: boxShadow },
    { prop: 'color', value: color },
    { prop: 'background-color', value: 'rgba(17, 25, 40, 0.75)' },
    { prop: 'backdrop-filter', value: `blur(${blur}px) saturate(${saturate}%)` },
    { prop: 'overflow', value: 'hidden' },
    { prop: 'padding', value: '20px' },
    { prop: 'margin', value: '0 auto' },
  ]

  return <CssCode selector=".card" rules={rules} />
}
