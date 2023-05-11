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
  // const [query, setQuery] = useState({q: "Guangzhou"});

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherURL = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    const forecastWeatherURL = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    // const weatherDataCity = `${GEO_API_URL}?minPopulation=1000000&namePrefix=${query}`;
    const currentWeatherFetch = fetch(currentWeatherURL);
    const forecastFetch = fetch(forecastWeatherURL);
    // const weatherDataCityFetch = fetch(weatherDataCity, GEOApiOptions);
    // console.log(weatherDataCityFetch);

    Promise.all([currentWeatherFetch, forecastFetch])
    //weatherDataCityFetch
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        // const cityDataResponse = await response[2].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city:searchData.label ,...forecastResponse});
        // setQuery({city:searchData.label ,...cityDataResponse})
      })
      .catch((err) => console.log(err));
    // console.log(forecast);
    // console.log(searchData);
    // console.log(query);

  }


  // const fetchWeather = async () => {
  //   const data = await getFormattedCurrentWeather({q:'guangzhou'});
  //   console.log(data);
  // };
  // fetchWeather();


  //1:13
  return (
    <>
      {/* <Cities setQuery={setQuery}/> */}
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentForecast data={currentWeather} />}
      {/* {forecast && <HourlyForecast data={forecast} />} */}
      {forecast && <DailyForecast data={forecast}/>}
    </>
  );
}

export default App;
