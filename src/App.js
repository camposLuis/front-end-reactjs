import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

import backgroundImage from './assets/backgroundImage.jpg';

export default function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage" />
      <img src={backgroundImage} width={400} />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}
