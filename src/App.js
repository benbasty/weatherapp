import './App.css';
// import Cities from '../src/components/cities/Cities';
import Search from '../src/components/search/Search';
import CurrentForecast from '../src/components/forecast/Current/CurrentForecast';
// import HourlyForecast from './components/forecast/Hourly/HourlyForecast';
import DailyForecast from './components/forecast/Daily/DailyForecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/services/api';
// import { GEO_API_URL, GEOApiOptions } from './components/services/api';
import { useState } from 'react';
// import { getWeatherdataForCities } from '../src/components/cities/Cities';
// import getFormattedCurrentWeather from './components/services/weatherService';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherURL = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    const forecastWeatherURL = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    const currentWeatherFetch = fetch(currentWeatherURL);
    const forecastFetch = fetch(forecastWeatherURL);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city:searchData.label ,...forecastResponse});
      })
      .catch((err) => console.log(err));
    // console.log(forecast);
    // console.log(searchData);

  }


  // const fetchWeather = async () => {
  //   const data = await getFormattedCurrentWeather({q:'guangzhou'});
  //   console.log(data);
  // };
  // fetchWeather();


  //1:13
  return (
    <>
      {/* <Cities /> */}
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentForecast data={currentWeather} />}
      {/* {forecast && <HourlyForecast data={forecast} />} */}
      {forecast && <DailyForecast data={forecast}/>}
    </>
  );
}

export default App;
