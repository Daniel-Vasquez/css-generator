export const StyleDisplay = ({ cardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxX,
    boxY,
    color,
    opacity,
    saturate
  } = cardStyles

  return (
    <div className="bg-blue border-2 border-border rounded-xl grid py-7">
      <h3 className="text-golden font-bold text-3xl text-center mb-4">
        Código CSS:
      </h3>
      <div className="flex justify-center text-xl">
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
            backdrop-filter: blur(<i className="text-golden font-semibold">{opacity}</i>px) saturate(<i className="text-golden font-semibold">{saturate}</i>%);
          </span>

          <span className="text-white">
            background-color: #111928bf;
          </span>

          <span className="text-white">
            overflow: hidden;
          </span>

          <span className="text-white">
            padding: 20px;
          </span>

          <span className="text-white">
            margin: 0px auto;
          </span>
        </div>
      </div>
    </div>
  );
};
