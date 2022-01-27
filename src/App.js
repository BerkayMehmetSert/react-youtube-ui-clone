import React from 'react';
import './assets/css/index.css'; // Global CSS
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Slider />
      <Topbar />
    </div>
  );
}

export default App;
