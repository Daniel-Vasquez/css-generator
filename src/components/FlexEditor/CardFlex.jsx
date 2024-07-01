import { useState } from "react";
import { FormFlex } from "@/components/FlexEditor/FormFlex";
import { CardPreviewFlex } from "@/components/FlexEditor/CardPreviewFlex";
import { CardStylesFlex } from "@/components/FlexEditor/CardStylesFlex";

const STYLESDEFAULTFLEX = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}

export const CardGrid = () => {
  const [stylesFlex, setStylesFlex] = useState(STYLESDEFAULTFLEX);

  return (
    <section>
      <h1 className="text-white text-3xl font-semibold text-center sm:text-5xl">
        Flex CSS
      </h1>

      <FormFlex
        stylesFlex={stylesFlex}
        setStylesFlex={setStylesFlex}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-5">
        <CardPreviewFlex stylesFlex={stylesFlex} />
        <CardStylesFlex stylesFlex={stylesFlex} />
      </div>

      <div className="flex justify-center mb-6">
        <button
          className="bg-golden text-white font-semibold py-2 px-4 rounded-md"
          onClick={() => setStylesFlex(STYLESDEFAULTFLEX)}
        >
          Restablecer
        </button>
      </div>
    </section>
  )
}
