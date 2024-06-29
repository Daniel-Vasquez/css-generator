import "@/components/StyleDisplay/index.css";

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
    <div className="bg-blue border-2 border-border rounded-xl px-5 py-7">
      <h3 className="text-golden font-bold text-3xl text-center mb-4">
        Código CSS:
      </h3>
      <div className="flex justify-center text-xl">
        <pre className="styleDisplay-pre text-white bg-gray-700 p-5 rounded-md">
          <span className="text-green-500 font-semibold">.card {"{"}</span>
{`
  border-radius: ${borderRadius};
  box-shadow: ${boxX}px ${boxY}px ${boxShadow}px ${boxShadowColor};
  color: ${color};
  background-color: #111928bf;
  backdrop-filter: blur(${opacity}px) saturate(${saturate}%);
  overflow: hidden;
  padding: 20px;
  margin: 0px auto
`}
          <span className="text-green-500 font-semibold">{"}"}</span>
        </pre>
      </div>
    </div>
  );
};
