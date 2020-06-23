import React, { useState } from 'react';
import Pullout from './components/pullout/pullout.component';
import Input from './components/input/input.component';
import City from './components/city/city.component';
import './App.css';

function App() {
	const [citySize, setCitySize] = useState(10);
	const [shuffleCity, setShuffleCity] = useState(false);

	const handleCitySizeChange = (event, newValue) => {
		setCitySize(newValue);
	};

	return (
		<div className='App'>
			<div className='sun' />
			<Input
				sliderValue={citySize}
				changeHandler={handleCitySizeChange}
				clickHandler={() => setShuffleCity(!shuffleCity)}
			/>
			<Pullout />
			<City numBuildings={citySize} shuffleCity={shuffleCity} />
		</div>
	);
}

export default App;
