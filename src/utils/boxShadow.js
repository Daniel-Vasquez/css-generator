const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

// Con opacidad < 100 devuelve rgba(); si no, el hex tal cual (más corto y legible)
export const shadowColor = ({ boxShadowColor, boxShadowOpacity = 100 }) => {
  if (boxShadowOpacity >= 100) return boxShadowColor
  const [r, g, b] = hexToRgb(boxShadowColor)
  return `rgba(${r}, ${g}, ${b}, ${boxShadowOpacity / 100})`
}

// Compartida entre preview y código para que ambos generen exactamente la misma sombra
export const buildBoxShadow = (styles) => {
  const { inset, boxX, boxY, boxShadow, boxSpread } = styles
  return `${inset ? 'inset ' : ''}${boxX}px ${boxY}px ${boxShadow}px ${boxSpread}px ${shadowColor(styles)}`
}

// Tailwind no admite espacios en valores arbitrarios: los de rgba() se quitan y el resto pasa a "_"
export const toArbitrary = (value) => value.replace(/,\s+/g, ",").replace(/\s+/g, "_")
