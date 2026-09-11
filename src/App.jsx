import { useRef } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import CardEditor from '@/components/CardEditor';
import { CardGrid } from '@/components/FlexEditor/CardFlex';

const EDITORS = [
  { id: 'shadow', label: 'Box Shadow', Component: CardEditor },
  { id: 'flex', label: 'Flexbox', Component: CardGrid },
];

function App() {
  const [activeId, setActiveId] = useLocalStorage('css-editor:tab', EDITORS[0].id);
  const active = EDITORS.find((e) => e.id === activeId) ?? EDITORS[0];
  const tabRefs = useRef([]);

  // Patrón WAI-ARIA de tabs: flechas para moverse, Home/End para extremos
  const handleKeyDown = (e, index) => {
    const moves = {
      ArrowRight: (index + 1) % EDITORS.length,
      ArrowLeft: (index - 1 + EDITORS.length) % EDITORS.length,
      Home: 0,
      End: EDITORS.length - 1,
    };
    const next = moves[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActiveId(EDITORS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="max-w-7xl w-full m-auto py-5 px-3">
      <header className="flex flex-col items-center gap-4 mb-6">
        <h1 className="text-white font-semibold text-3xl text-center sm:text-4xl">
          Editor CSS
        </h1>
        <div role="tablist" aria-label="Editores" className="flex gap-1 bg-blue border-2 border-border rounded-xl p-1">
          {EDITORS.map(({ id, label }, index) => {
            const selected = id === active.id;
            return (
              <button
                key={id}
                id={`tab-${id}`}
                ref={(el) => (tabRefs.current[index] = el)}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`py-2 px-5 rounded-lg font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden ${
                  selected ? 'bg-golden text-black' : 'text-white hover:bg-blue-light'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </header>

      <main id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`tab-${active.id}`}>
        <active.Component />
      </main>
    </div>
  );
}

export default App;
