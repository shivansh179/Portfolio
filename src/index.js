import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainIntro from './Component/MainIntro.jsx';  

import './index.css';

const RootComponent = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);  
    }, 5000);

   
    return () => clearTimeout(timer);
  }, []);

  return showIntro ? <MainIntro /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
