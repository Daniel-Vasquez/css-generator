import { useState } from 'react';
import { FormCard } from '@/components/FormCard';
import { CardPreview } from '@/components/CardPreview';
import { StyleDisplay } from '@/components/StyleDisplay';

const STYLESDEFAULT = {
  borderRadius: 10,
  boxShadowColor: '#000000',
  boxShadow: 0,
  boxX: 0,
  boxY: 0,
  color: '#ffffff',
  opacity: 1,
  saturate: 100,
  backdropFilter: "blur(11px) saturate(180%)",
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
