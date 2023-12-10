import { useState, useMemo } from 'react';
import './App.css';

const DEFAULT_HEIGHT = 150; 
const DEFAULT_WEIGHT = 50; 

function App() {

  const [height, setHeight] = useState(DEFAULT_HEIGHT); 
  const [weight, setWeight] = useState(DEFAULT_WEIGHT); 

  function onHeightChange(event){

    const height = event.target.value; 
    setHeight(height); 

  }

  function onWeightChange(event){
    const weight = event.target.value; 
    setWeight(weight); 
  }

  const output = useMemo(() => {
    const calculatedHeight = height/100; 
    return (weight/(calculatedHeight *calculatedHeight)).toFixed(1); 
  },[height, weight]); 
  return (
    <main>
      <h1>Project 7: BMI Calculator</h1>

      <div className='input-section'>
        <p className='slider-output'> Weight: {weight} kg</p>
        <input
        className='input-slider'
        onChange={onWeightChange}
        type='range'
        step="1"
        min="40"
        max="220"

        />

        <p className='slider-output'> Height: {height}</p>
        <input 
        className='input-slider'
        onChange={onHeightChange}
        type='range'
        
        min="140"
        max="220"
        
        />
      </div>

      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{output}</p>
      </div>
    </main>

  );
}

export default App;
