import React from 'react'
import './HourlyForecast.css'
import cloud from '../../../assets/cloud.png'

const HourlyForecast = ({data}) => {
  return (
    <div className='container hourly'>
        <h5 className='hourlyHeader'>HOURLY FORECAST</h5>
        <div className='divider'></div>
        <div className='hourlyForecasts'>
            {
                data.list.slice(0,5).map((item,id) => {
                    return(
                        <div className='hourlyForecast' key={id}>
                            <h5 className='timeForecast'>{new Date(item.dt * 1000).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})}</h5>
                            <p className='tempForecast'>{Math.round(item.main.temp)}°C</p>
                            <img src={cloud} alt='temperatureImg'/>
                        </div>
                    )
                })
            }

            {/* <div className='hourlyForecast'>
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
            </div> */}
        </div>

    </div>
  )
}

export default HourlyForecast