import { useState } from 'react';
import { FormCard } from '@/components/FormCard';
import { CardPreview } from '@/components/CardPreview';
import { StyleDisplay } from '@/components/StyleDisplay';

const STYLESDEFAULT = {
  borderRadius: 0,
  boxShadowColor: '#000000',
  boxShadow: 0,
  boxX: 0,
  boxY: 0,
  color: '#000000',
  backgroundColor: '#f5f5f5',
  widthCard: 200,
  heightCard: 150,
  text: 'Ejemplo de texto...',
  fontSize: 12,
};

const CardEditor = () => {
  const [cardStyles, setCardStyles] = useState(STYLESDEFAULT);

  return (
    <>
      <FormCard
        cardStyles={cardStyles}
        setCardStyles={setCardStyles}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <CardPreview cardStyles={cardStyles} />
        <StyleDisplay cardStyles={cardStyles} />
      </div>
    </>
  );
};

export default CardEditor;
