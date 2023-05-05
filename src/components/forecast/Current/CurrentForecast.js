import React from 'react'
import { format } from 'date-fns';
// import weatherIcon from '../../../assets/${data.weather[0].icon}.png';
import './CurrentForecast.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const CurrentForecast = ({data}) => {
    const cloudiness = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'Cloudiness',
                data: [`${data.clouds.all}`, 100 -`${data.clouds.all}`],
                backgroundColor: ['#7CB9E8','white'],
                borderColor: ['#7CB9E8','white']
            }
        ]
    }
    const humidity = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'Precipitation',
                data: [`${data.main.humidity}`, 100 - `${data.main.humidity}`],
                backgroundColor: ['#7CB9E8','white'],
                borderColor: ['#7CB9E8','white']
            }
        ]
    }

    const visibility = {
        labels: ['High', 'Low'],
        datasets: [
            {
                label: 'visibility',
                data: [`${data.visibility}`, 10000 - `${data.visibility}`],
                backgroundColor: ['#7CB9E8','white'],
                borderColor: ['#7CB9E8','white']
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
              display: false
            }
        },
        cutout: 23,
        events: []
    }
    let updatedUnix = data.dt;
    let sunriseUnix = data.sys.sunrise;
    let sunsetUnix = data.sys.sunset;
    let updated = new Date(updatedUnix * 1000).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'});
    let sunrise = new Date(sunriseUnix * 1000).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'});
    let sunset = new Date(sunsetUnix * 1000).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'});

  return (
    <div className='container currentForecast'>
        <div className='location'>
                <h2><span>{data.city.split(',')[0]}</span></h2>
                <h5>{format(new Date(), 'ccc, d MMMM Y')}</h5>
        </div>
        <div className='currentWeather'>
            <div className='currentWeatherDetails'>
                <h1 className='currentWeatherTemp'>{Math.round(data.main.temp)}°C</h1>
                <h3 className='currentWeatherDesc'>{data.weather[0].description}</h3>
                <h5 className='currentWeatherUpdate'>Updated {updated}</h5>
            </div>
            <div className='currentWeatherImage'>
                <img src={`/icons/${data.weather[0].icon}.png`} alt='weatherImg'/>
            </div>
        </div>
        <div className='weatherCharacteristics'>
            <div className='weatherCharacteristic'>

                <h5>Pressure <span>{Math.round(data.main.pressure)} hPa</span></h5>
            </div>
            <div className='weatherCharacteristic'>

                <h5>Feels like <span>{Math.round(data.main.feels_like)}°C</span></h5>
            </div>
            <div className='weatherCharacteristic'>
                <h5>Humidity <span>{data.main.humidity}%</span></h5>
            </div>
            <div className='weatherCharacteristic'>
                <h5>Wind <span>{Math.round(data.wind.speed)}m/s</span></h5>
            </div>
        </div>
        <div className='temperatureDetails'>
            <div className='temperatureDetail'>

                <h5>Rise: <span>{sunrise}</span></h5>
            </div>
            <div className='temperatureDetail'>
                <h5>Set: <span>{sunset}</span></h5>
            </div>
            <div className='temperatureDetail'>
                <h5>High: <span>{Math.round(data.main.temp_max)}°C</span></h5>
            </div>
            <div className='temperatureDetail'>
                <h5>Low: <span>{Math.round(data.main.temp_min)}°C</span></h5>
            </div>
        </div>
        <div className='charts'>
            <div className='chart'>
                <Doughnut
                    data={cloudiness}
                    options={options}
                />
                <h5>Cloudiness</h5>
                <p>{`${cloudiness.datasets[0].data[0]} %`}</p>
            </div>
            <div className='chart'>
                <Doughnut
                    data={humidity}
                    options={options}
                />
                <h5>Humidity</h5>
                <p>{`${humidity.datasets[0].data[0]} %`}</p>
            </div>
            <div className='chart'>
                <Doughnut
                    data={visibility}
                    options={options}
                />
                <h5>Visibility</h5>
                <p>{`${(visibility.datasets[0].data[0])/1000}`}<br/>km</p>
            </div>
        </div>

    </div>
  )
}

export default CurrentForecast