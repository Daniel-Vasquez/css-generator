import { CssCode } from '@/components/ui/CssCode'
import { buildBoxShadow } from '@/utils/boxShadow'

export const StyleDisplay = ({ cardStyles }) => {
  const { borderRadius, color, blur, saturate } = cardStyles

  const rules = [
    { prop: 'border-radius', value: `${borderRadius}px` },
    { prop: 'box-shadow', value: buildBoxShadow(cardStyles) },
    { prop: 'color', value: color },
    { prop: 'background-color', value: 'rgba(17, 25, 40, 0.75)' },
    { prop: 'backdrop-filter', value: `blur(${blur}px) saturate(${saturate}%)` },
    { prop: 'overflow', value: 'hidden' },
    { prop: 'padding', value: '20px' },
    { prop: 'margin', value: '0 auto' },
  ]

  return <CssCode selector=".card" rules={rules} />
}
