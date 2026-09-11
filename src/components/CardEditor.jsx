import { useLocalStorage } from '@/hooks/useLocalStorage';
import { FormCard } from '@/components/FormCard';
import { CardPreview } from '@/components/CardPreview';
import { StyleDisplay } from '@/components/StyleDisplay';
import { EditorLayout } from '@/components/ui/EditorLayout';

const STYLESDEFAULT = {
  borderRadius: 10,
  boxShadowColor: '#ffffff',
  boxShadow: 5,
  boxSpread: 0,
  boxX: 0,
  boxY: 0,
  inset: false,
  color: '#ffffff',
  blur: 1,
  saturate: 100,
};

const CardEditor = () => {
  const [cardStyles, setCardStyles] = useLocalStorage('css-editor:shadow', STYLESDEFAULT);

  return (
    <EditorLayout
      controls={<FormCard cardStyles={cardStyles} setCardStyles={setCardStyles} />}
      preview={<CardPreview cardStyles={cardStyles} />}
      code={<StyleDisplay cardStyles={cardStyles} />}
      onReset={() => setCardStyles(STYLESDEFAULT)}
    />
  );
};

export default CardEditor;
