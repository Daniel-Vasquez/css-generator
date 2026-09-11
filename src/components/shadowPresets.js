// Cada preset sobreescribe solo las claves que define; el resto se conserva
export const SHADOW_PRESETS = [
  {
    name: 'Suave',
    styles: { inset: false, boxX: 0, boxY: 4, boxShadow: 12, boxSpread: 0, boxShadowColor: '#000000', boxShadowOpacity: 30 },
  },
  {
    name: 'Elevada',
    styles: { inset: false, boxX: 0, boxY: 20, boxShadow: 40, boxSpread: -8, boxShadowColor: '#000000', boxShadowOpacity: 60 },
  },
  {
    name: 'Neón',
    styles: { inset: false, boxX: 0, boxY: 0, boxShadow: 25, boxSpread: 2, boxShadowColor: '#22d3ee', boxShadowOpacity: 80, borderRadius: 16 },
  },
  {
    name: 'Glassmorphism',
    styles: { inset: false, boxX: 0, boxY: 8, boxShadow: 32, boxSpread: 0, boxShadowColor: '#000000', boxShadowOpacity: 35, blur: 16, saturate: 180, borderRadius: 16 },
  },
  {
    name: 'Interior',
    styles: { inset: true, boxX: 0, boxY: 0, boxShadow: 24, boxSpread: 0, boxShadowColor: '#000000', boxShadowOpacity: 70 },
  },
]
