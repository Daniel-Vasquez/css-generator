import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FormFlex } from "@/components/FlexEditor/FormFlex";
import { CardPreviewFlex } from "@/components/FlexEditor/CardPreviewFlex";
import { CardStylesFlex } from "@/components/FlexEditor/CardStylesFlex";
import { EditorLayout } from "@/components/ui/EditorLayout";

const STYLESDEFAULTFLEX = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 20,
  itemCount: 3,
}

export const CardGrid = () => {
  const [stylesFlex, setStylesFlex] = useLocalStorage("css-editor:flex", STYLESDEFAULTFLEX);

  return (
    <EditorLayout
      controls={<FormFlex stylesFlex={stylesFlex} setStylesFlex={setStylesFlex} />}
      preview={<CardPreviewFlex stylesFlex={stylesFlex} />}
      code={(format) => <CardStylesFlex stylesFlex={stylesFlex} format={format} />}
      onReset={() => setStylesFlex(STYLESDEFAULTFLEX)}
    />
  )
}
