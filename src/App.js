import './App.css';
import Cities from '../src/components/cities/Cities';
import Search from '../src/components/search/Search';
import CurrentForecast from '../src/components/forecast/Current/CurrentForecast';
import HourlyForecast from './components/forecast/Hourly/HourlyForecast';
import DailyForecast from './components/forecast/Daily/DailyForecast';
// import getFormattedCurrentWeather from './components/services/weatherService';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  // const fetchWeather = async () => {
  //   const data = await getFormattedCurrentWeather({q:'guangzhou'});
  //   console.log(data);
  // };
  // fetchWeather();
  return (
    <>
      <Cities />
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentForecast />
      <HourlyForecast />
      <DailyForecast />
    </>
  );
}

export default App;
