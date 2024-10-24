import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import HireMe from './components/hire-me/hire-me';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <HireMe />
      <Contact />
    </div>
  );
};

export default App;
