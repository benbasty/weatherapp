import React from 'react'
import { format } from 'date-fns';
import Sun from '../../../sun.png';
import './CurrentForecast.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const CurrentForecast = () => {
    const precipitation = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'Precipitation',
                data: [50, 50],
                backgroundColor: ['blue','white'],
                borderColor: ['blue','white']
            }
        ]
    }
    const humidity = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'Precipitation',
                data: [41, 59],
                backgroundColor: ['blue','white'],
                borderColor: ['blue','white']
            }
        ]
    }

    const uvIndex = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'Precipitation',
                data: [6, 4],
                backgroundColor: ['blue','white'],
                borderColor: ['blue','white']
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
              display: false
            }
        },
        cutout: 23
    }
  return (
    <div className='container currentForecast'>
        <div className='location'>
                <h2><span>Belgrade</span>, <span>Serbia</span></h2>
                <h5>{format(new Date(), 'ccc, d MMMM Y')}</h5>
        </div>
        <div className='currentWeather'>
            <div className='currentWeatherDetails'>
                <h1 className='currentWeatherTemp'>23°C</h1>
                <h3 className='currentWeatherDesc'>Partly Sunny</h3>
                <h5 className='currentWeatherUpdate'>Updated 1:45pm</h5>
            </div>
            <div className='currentWeatherImage'>
                <img src={Sun} alt='weatherImg'/>
            </div>
        </div>
        <div className='weatherCharacteristics'>
            <div className='weatherCharacteristic'>

                <h5>Barometer <span>1009.0 mb</span></h5>
            </div>
            <div className='weatherCharacteristic'>
                
                <h5>Feels like <span>26°C</span></h5>
            </div>
            <div className='weatherCharacteristic'>
                
                <h5>Humidity <span>41%</span></h5>
            </div>
            <div className='weatherCharacteristic'>
                
                <h5>Wind <span>6km/h</span></h5>
            </div>
        </div>
        <div className='temperatureDetails'>
            <div className='temperatureDetail'>

                <h5>Rise: <span>06:00 AM</span></h5>
            </div>
            <div className='temperatureDetail'>
                
                <h5>Set: <span>07:12 PM</span></h5>
            </div>
            <div className='temperatureDetail'>
                
                <h5>High: <span>32°</span></h5>
            </div>
            <div className='temperatureDetail'>
                
                <h5>Low: <span>28°</span></h5>
            </div>
        </div>
        <div className='charts'>
            <div className='chart'>
                <Doughnut
                    data={precipitation}
                    options={options}
                />
                <h5>Precipitation</h5>
            </div>
            <div className='chart'>
                <Doughnut
                    data={humidity}
                    options={options}
                />
                <h5>Humidity</h5>
            </div>
            <div className='chart'>
                <Doughnut
                    data={uvIndex}
                    options={options}
                />
                <h5>UV Index</h5>
            </div>
        </div>

    </div>
  )
}

export default CurrentForecast