import { useLocalStorage } from '@/hooks/useLocalStorage';
import { FormCard } from '@/components/FormCard';
import { CardPreview } from '@/components/CardPreview';
import { StyleDisplay } from '@/components/StyleDisplay';
import { EditorLayout } from '@/components/ui/EditorLayout';

const STYLESDEFAULT = {
  borderRadius: 10,
  boxShadowColor: '#ffffff',
  boxShadowOpacity: 100,
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
  const [background, setBackground] = useLocalStorage('css-editor:preview-bg', 'image');

  return (
    <EditorLayout
      controls={<FormCard cardStyles={cardStyles} setCardStyles={setCardStyles} />}
      preview={<CardPreview cardStyles={cardStyles} background={background} setBackground={setBackground} />}
      code={(format) => <StyleDisplay cardStyles={cardStyles} format={format} />}
      onReset={() => setCardStyles(STYLESDEFAULT)}
    />
  );
};

export default CardEditor;
