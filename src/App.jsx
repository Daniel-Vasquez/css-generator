import React from 'react';
import './App.css';
import CardEditor from '@/components/CardEditor';

function App() {
  return (
    <div className="grid grid-rows-[35px_0.5fr_1fr] max-w-7xl w-full m-auto py-8 px-3 h-auto lg:h-screen">
      <h1 className="text-white font-semibold text-3xl text-center">
        React Card Editor
      </h1>
      <CardEditor />
    </div>
  );
}

export default App;
