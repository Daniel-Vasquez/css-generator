// Compartida entre preview y código para que ambos generen exactamente la misma sombra
export const buildBoxShadow = ({ inset, boxX, boxY, boxShadow, boxSpread, boxShadowColor }) =>
  `${inset ? 'inset ' : ''}${boxX}px ${boxY}px ${boxShadow}px ${boxSpread}px ${boxShadowColor}`
