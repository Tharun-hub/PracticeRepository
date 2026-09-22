import {useState, useEffect} from 'react'

import './index.css'

const getBmi = (height, weight) => {
  const heightInMeters = height / 100
  const bmi = weight / heightInMeters ** 2
  return bmi.toFixed(2)
}

const BmiCalculator = () => {
  let storedHeight = JSON.parse(localStorage.getItem('height'));
  let storedWeight = JSON.parse(localStorage.getItem('weight'));
  const [height, setHeight] = useState(storedHeight !== null? storedHeight: 170);
  const [weight, setWeight] = useState(storedWeight !== null? storedWeight : 60);

  // not so optimized way of using useEffect
  /* useEffect(() => {
    document.title = `Your BMI: ${getBmi(height, weight)}`
    localStorage.setItem('height', JSON.stringify(height));
    localStorage.setItem('weight', JSON.stringify(weight));
  }) */

  // optimized way of using useEffect
  useEffect(()=> {document.title = `Your BMI: ${getBmi(height,weight)}`},[height,weight]);

  useEffect(()=> localStorage.setItem('height', JSON.stringify(height)),[height]);
  
  useEffect(()=> localStorage.setItem('weight', JSON.stringify(weight)),[weight]);

  const onIncrementWeight = () => {
    setWeight(prevWeight => prevWeight + 1)
  }

  const onDecrementWeight = () => {
    setWeight(prevWeight => prevWeight - 1)
  }

  const onIncrementHeight = () => {
    setHeight(prevHeight => prevHeight + 1)
  }

  const onDecrementHeight = () => {
    setHeight(prevHeight => prevHeight - 1)
  }

  return (
    <div className="main-container">
      <h1 className="title">BMI CALCULATOR</h1>
      <img
        className="bmi-levels-image"
        src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
        alt="bmi levels"
      />
      <div className="card-container">
        <div className="measurements-container">
          <div className="measurement-card">
            <p className="measurement">Height</p>
            <p className="measurement-value">{height}<span className="unit">cms</span>
            </p>
            <div className="buttons-container">
              <button className="button" type="button" onClick={onDecrementHeight}>-</button>
              <button
                className="button"
                type="button"
                onClick={onIncrementHeight}
              >
                +
              </button>
            </div>
          </div>
          <div className="measurement-card">
            <p className="measurement">Weight</p>
            <p className="measurement-value">
              {weight}
              <span className="unit">kgs</span>
            </p>
            <div className="buttons-container">
              <button
                className="button"
                type="button"
                onClick={onDecrementWeight}
              >
                -
              </button>
              <button
                className="button"
                type="button"
                onClick={onIncrementWeight}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <p className="result-content">
          BMI: <span className="result-text">{getBmi(height, weight)}</span>
        </p>
      </div>
    </div>
  )
}

export default BmiCalculator
