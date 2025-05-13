import React, { useState } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import HireMe from './components/hire-me/hire-me';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <HireMe darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
