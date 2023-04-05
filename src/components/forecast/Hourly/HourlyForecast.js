import React from 'react'
import './HourlyForecast.css'
import cloud from '../../../assets/cloud.png'

const HourlyForecast = () => {
  return (
    <div className='container hourly'>
        <h5 className='hourlyHeader'>HOURLY FORECAST</h5>
        <div className='divider'></div>
        <div className='hourlyForecasts'>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>04:30 PM</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>05:30 PM</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>06:30 PM</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>07:30 PM</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>08:30 PM</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
        </div>

    </div>
  )
}

export default HourlyForecast