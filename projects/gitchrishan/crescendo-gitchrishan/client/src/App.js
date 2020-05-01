import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Layout></Layout>
    </div>
  );
}

export default App;
