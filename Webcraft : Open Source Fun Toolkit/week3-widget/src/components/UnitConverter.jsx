import React, { useState } from 'react';
import './UnitConverter.css';

function UnitConverter() {
  const [input, setInput] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');
  const [result, setResult] = useState('');

  const conversions = {
    meters: {
      kilometers: (val) => val / 1000,
      centimeters: (val) => val * 100,
      feet: (val) => val * 3.28084,
    },
    kilometers: {
      meters: (val) => val * 1000,
      miles: (val) => val * 0.621371,
    },
    feet: {
      meters: (val) => val / 3.28084,
    },
  };

  const convert = () => {
    const value = parseFloat(input);
    if (!isNaN(value) && conversions[fromUnit] && conversions[fromUnit][toUnit]) {
      const converted = conversions[fromUnit][toUnit](value);
      setResult(`${converted.toFixed(4)} ${toUnit}`);
    } else {
      setResult('Conversion not supported or invalid input');
    }
  };

  return (
    <div className="converter-container">
      <h2>Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="feet">Feet</option>
        </select>
        <span>to</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="kilometers">Kilometers</option>
          <option value="meters">Meters</option>
          <option value="centimeters">Centimeters</option>
          <option value="feet">Feet</option>
          <option value="miles">Miles</option>
        </select>
      </div>
      <button onClick={convert}>Convert</button>
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default UnitConverter;
