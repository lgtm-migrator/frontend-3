import './services/i18n';

import React from 'react';

import Router from './router';

const App: React.FC = () => {
  return (
    <div className="flex flex-col text-gray-800 bg-gray-100 dark:bg-gray-100 dark:text-gray-900">
      <Router />
    </div>
  );
};

export default App;
