import React from 'react';
import './App.css';
import CardEditor from '@/components/CardEditor';
import { CardGrid } from '@/components/FlexEditor/CardFlex';

function App() {
  return (
    <div className="grid max-w-7xl w-full m-auto py-5 px-3 h-auto">
      <CardEditor />
      <CardGrid />
    </div>
  );
}

export default App;
