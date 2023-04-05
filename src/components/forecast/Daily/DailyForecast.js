import React from 'react'
import '../Hourly/HourlyForecast.css';
import cloud from '../../../assets/cloud.png';
import sun from '../../../assets/sun.png';
import sunnyday from '../../../assets/sunny.png';
import rainyday from '../../../assets/rainyday.png'

const DailyForecast = () => {
  return (
    <div className='container hourly daily'>
        <h5 className='hourlyHeader'>DAILY FORECAST</h5>
        <div className='divider'></div>
        <div className='hourlyForecasts'>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Thu</h5>
                <p className='tempForecast'>31°C</p>
                <img src={cloud} alt='temperatureImg'/>
            </div>
            <div className='dividerVertical'></div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Fri</h5>
                <p className='tempForecast'>31°C</p>
                <img src={sunnyday} alt='temperatureImg'/>
            </div>
            <div className='dividerVertical'></div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Sat</h5>
                <p className='tempForecast'>31°C</p>
                <img src={sun} alt='temperatureImg'/>
            </div>
            <div className='dividerVertical'></div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Sun</h5>
                <p className='tempForecast'>31°C</p>
                <img src={rainyday} alt='temperatureImg'/>
            </div>
            <div className='dividerVertical'></div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Mon</h5>
                <p className='tempForecast'>31°C</p>
                <img src={sunnyday} alt='temperatureImg'/>
            </div>
            <div className='dividerVertical'></div>
            <div className='hourlyForecast'>
                <h5 className='timeForecast'>Tue</h5>
                <p className='tempForecast'>31°C</p>
                <img src={sun} alt='temperatureImg'/>
            </div>
        </div>

    </div>
  )
}

export default DailyForecast