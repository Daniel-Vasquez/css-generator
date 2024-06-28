export const StyleDisplay = ({ cardStyles }) => {
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
    fontSize
  } = cardStyles

  return (
    <div className="bg-blue border-2 border-border rounded-xl grid py-7">
      <h3 className="text-golden font-bold text-3xl text-center mb-4">
        Estilos CSS
      </h3>
      <div className="flex justify-center">
        <div className="flex flex-col gap-1">
          <span className="text-white">
            border-radius: <i className="text-golden font-semibold">{borderRadius}</i>px;
          </span>

          <span className="text-white">
            box-shadow: <i className="text-golden font-semibold">{boxX}</i>px <i className="text-golden font-semibold">{boxY}</i>px <i className="text-golden font-semibold">{boxShadow}</i>px <i className="text-golden font-semibold">{boxShadowColor}</i>;
          </span>

          <span className="text-white">
            color: <i className="text-golden font-semibold">{color}</i>;
          </span>

          <span className="text-white">
            background-color: <i className="text-golden font-semibold">{backgroundColor}</i>;
          </span>

          <span className="text-white">
            width: <i className="text-golden font-semibold">{widthCard}</i>px;
          </span>

          <span className="text-white">
            height: <i className="text-golden font-semibold">{heightCard}</i>px;
          </span>

          <span className="text-white">
            font-size: <i className="text-golden font-semibold">{fontSize}</i>px;
          </span>

          <div className="flex flex-col text-white">
            <span>display: flex;</span>
            <span>justify-content: center;</span>
            <span>align-items: center;</span>
            <span>margin: 0 auto;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
