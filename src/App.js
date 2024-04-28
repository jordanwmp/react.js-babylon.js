import React, { useEffect } from 'react';

import createScene from './components/scene'

import './App.css';

function App() {

  useEffect(() => {
    const canvas = document.getElementById('renderCanvas');
    console.log('canvas ', canvas);
    createScene(canvas, window);
  }, [])


  return (
    <div className="App">
      <canvas id='renderCanvas'></canvas>
    </div>
  );

}

export default App;
