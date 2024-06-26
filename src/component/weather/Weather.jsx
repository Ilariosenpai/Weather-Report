import React from 'react'
import Days from '../days/Days'
import './Weather.css'

function Weather() {
  return (


    <div className="weather card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Lyon</span>
        <p><img src="icons/sun.svg" /></p>
        <span className="temperature">15°</span>
        <div className="wind">Vent 1km/h (360°)</div>
      </div>
      <Days />
    </div>)

}

export default Weather