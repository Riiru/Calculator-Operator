import React from 'react';
import Base from './main/Base';
import { CalculateProvider } from './main/context/ContextCalculate';

const App: React.FC = () => {
  return (
    <div>
      <CalculateProvider>
      <Base/>
      </CalculateProvider>
    </div>
  );
};

export default App;