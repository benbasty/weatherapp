import React from 'react'
import '../Hourly/HourlyForecast.css';

const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const DailyForecast = ({ data }) => {
    const dayInTheWeek = new Date().getDay();
    const dailyforecastdays = WEEK_DAYS.slice(dayInTheWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInTheWeek));
  return (
    <div className='container hourly daily'>
        <h5 className='hourlyHeader'>DAILY FORECAST</h5>
        <div className='divider'></div>
        <div className='hourlyForecasts'>
            {data.list.slice(0,7).map((item, id) => {
                return(
                    <div className='hourlyForecast' key={id}>
                        <h5 className='timeForecast'>{dailyforecastdays[id]}</h5>
                        <p className='tempForecast'>{Math.round(item.main.temp)}°C</p>
                        <img src={`/icons/${item.weather[0].icon}.png`} alt='temperatureImg'/>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default DailyForecast