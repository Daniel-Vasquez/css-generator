export const CardStylesFlex = ({ stylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  } = stylesFlex

  const widthWindow = window.innerWidth

  return (
    <div className="bg-blue border-2 border-border rounded-xl px-5 py-7">
      <h3 className="text-golden font-bold text-3xl text-center mb-4">
        Código CSS:
      </h3>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center text-xl">
          <pre className="styleDisplay-pre text-white bg-gray-700 p-5 font-semibold rounded-lg h-auto w-72 overflow-x-scroll scroll-smooth sm:w-96">
            <span className="text-green-500 font-semibold">.container-items {"{"}</span>
              <p>
                {" "} display:
                <span className={`${display === "block" ? "text-green-500" : "text-golden"} `}>
                  {" "}{display};
                </span>
              </p>
              <p>
                {"  "}flex-direction:{" "}
                <span className={`${display === "block" ? "line-through text-red-400" : "text-golden"} `}>
                  {flexDirection};
                </span>
              </p>
              <p>
                {"  "}justify-content:{" "}
                <span className={`mr-5 ${display === "block" ? "line-through text-red-400" : "text-golden"} `}>
                  {justifyContent};
                </span>
              </p>
              <p>
                {"  "}align-items:{" "}
                <span className={`${display === "block" ? "line-through text-red-400" : "text-golden"} `}>
                  {alignItems};
                </span>
              </p>
              <p>
                {"  "}flex-wrap:{" "} 
                <span className={`${display === "block" ? "line-through text-red-400" : "text-golden"} `}>
                  {flexWrap};
                </span>
              </p>
              <p>
                {"  "}gap:{" "}
                <span className={`${display === "block" ? "line-through text-red-400" : "text-golden"} `}>
                  10px;
                </span>
              </p>
              <p>
                {" "} width: {widthWindow < 1280 ? "100%" : "36rem"};
              </p>
              <p>
                {" "} height: { widthWindow < 1280 ? "20rem" : "45rem" };
              </p>
            <span className="text-green-500 font-semibold">{"}"}</span>
          </pre>
        </div>

        <div className="flex justify-center text-xl">
          <pre className="styleDisplay-pre text-white bg-gray-700 p-5 font-semibold rounded-lg h-auto w-72 overflow-x-scroll scroll-smooth sm:w-96">
            <span className="text-green-500 font-semibold">.item {"{"}</span>
              <p>
                {"  "}background-color: 
                <span className="mr-5">{" "}#fbbf24;</span>
              </p>
              <p>{"  "}color: black;</p>
              <p>{"  "}font-weight: 600;</p>
              <p>{"  "}padding: 0.5rem 1rem;</p>
              <p>{"  "}border-radius: 0.375rem;</p>
            <span className="text-green-500 font-semibold">{"}"}</span>
          </pre>
        </div>
      </div>
    </div>
  )
}
