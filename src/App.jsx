import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cv from './components/Cv';
import Contact from './components/Contact';
import Projects from './components/Projects';
import projectContent from './content/project/projectContent';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {Object.keys(projectContent).map(( key ) => {
            return <Route path={"/projects/" + projectContent[key].PATH_NAME} element={<ProjectPage projectData={projectContent[key]}/>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;