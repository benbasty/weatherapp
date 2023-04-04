import React from 'react'
import { format } from 'date-fns';
import Sun from '../../../sun.png';
import './CurrentForecast.css';

const CurrentForecast = () => {
  return (
    <div className='container currentForecast'>
        <div className='location'>
                <h2><span>Belgrade</span>, <span>Serbia</span></h2>
                <h5>{format(new Date(), 'ccc, d MMMM Y')}</h5>
        </div>
        <div className='currentWeather'>
            <div className='currentWeatherDetails'>
                <h1 className='currentWeatherTemp'>23°C</h1>
                <h3 className='currentWeatherDesc'>Party Sunny</h3>
                <h5 className='currentWeatherUpdate'>Updated 1:45pm</h5>
            </div>
            <div className='currentWeatherImage'>
                <img src={Sun} alt='weatherImg'/>
            </div>
        </div>
    </div>
  )
}

export default CurrentForecast