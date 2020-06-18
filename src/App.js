import React, { useState } from 'react';
import Header from './components/settings/header.component';
import City from './components/city/city.component'
import './App.css';

function App() {

  const [citySize, setCitySize] = useState(10);
  const [shuffleCity, setShuffleCity ] = useState(false)

  const handleCitySizeChange = (event, newValue) => {
    setCitySize(newValue);
  }

  return (
    <div className="App">
      <div className="sun" />
      <Header sliderValue={citySize} changeHandler={handleCitySizeChange} clickHandler={() => setShuffleCity(!shuffleCity)}></Header>
      <City numBuildings={citySize} shuffleCity={shuffleCity}/>
    </div>
  );
}

export default App;
