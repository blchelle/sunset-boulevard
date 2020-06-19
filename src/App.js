import React, { useState } from 'react';
import Welcome from './components/welcome/welcome.component';
import Input from './components/input/input.component';
import City from './components/city/city.component'
import './App.css';

function App() {

  const [citySize, setCitySize] = useState(10);
  const [shuffleCity, setShuffleCity ] = useState(false);
  const [firstTime, setFirstTime] = useState(window.localStorage.getItem('firstTime'));

  const handleCitySizeChange = (event, newValue) => {
    setCitySize(newValue);
  }

  return (
    <div className="App">
      <div className="sun" />
      {
        firstTime === null ? 
        <Welcome clickHandler={() => {
          window.localStorage.setItem('firstTime', 'false')
          setFirstTime(false)
        }}/> : 
        <Input sliderValue={citySize} changeHandler={handleCitySizeChange} clickHandler={() => setShuffleCity(!shuffleCity)}/>
      }
      <City numBuildings={citySize} shuffleCity={shuffleCity}/>
    </div>
  );
}

export default App;
