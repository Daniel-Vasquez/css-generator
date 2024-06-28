// import backgroundImg from '@/images/fondo-img.png'

export const CardPreview = ({ cardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxX,
    boxY,
    color,
    backgroundColor,
    widthCard,
    heightCard,
    text,
    fontSize
  } = cardStyles

  return (
    <div
      className="bg-blue border-2 border-border rounded-xl grid py-7"
      // style={{
      //   backgroundImage: `url(${backgroundImg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <h2 className="text-golden font-bold text-3xl text-center mb-4">
        Resultado
      </h2>
      <div
        style={{
          borderRadius: `${borderRadius}px`,
          boxShadow: `${boxX}px ${boxY}px ${boxShadow}px ${boxShadowColor}`,
          color: color,
          backgroundColor: backgroundColor,
          padding: '20px',
          width: `${widthCard}px`,
          height: `${heightCard}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0px auto',
          fontSize: `${fontSize}px`,
        }}
      >
        {text}
      </div>
    </div>
  )
}
