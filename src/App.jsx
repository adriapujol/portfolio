import React, { useState } from 'react';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';

function App() {

  const [homeHeight, setHomeHeight] = useState();
  const [aboutHeight, setAboutHeight] = useState();
  const [projectsHeight, setProjectsHeight] = useState();
  const [contactHeight, setContactHeight] = useState();

  return (
    <div className="App">
      <Navbar homeHeight={homeHeight} aboutHeight={aboutHeight} projectsHeight={projectsHeight} contactHeight={contactHeight}/>
      <Home setHomeHeight={setHomeHeight}/>
      <About setAboutHeight={setAboutHeight}/>
      <Projects setProjectsHeight={setProjectsHeight}/>
      <Contact setContactHeight={setContactHeight}/>
    </div>
  );
}

export default App;
