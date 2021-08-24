import React from 'react';
import General from './General';
import Font from './Font';

import Project from './pages/Project';
import Projects from './pages/Projects';
import About from './pages/About';

function GlobalStyles() {
  return (
    <React.Fragment>
      <Font />
      <General />
      <Project />
      <Projects />
      <About />
    </React.Fragment>
  );
}

export default GlobalStyles;
