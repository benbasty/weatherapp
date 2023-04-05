import './App.css';
import Cities from '../src/components/cities/Cities';
import Search from '../src/components/search/Search';
import CurrentForecast from '../src/components/forecast/Current/CurrentForecast';
import HourlyForecast from './components/forecast/Hourly/HourlyForecast';
import DailyForecast from './components/forecast/Daily/DailyForecast';

function App() {
  return (
    <>
      <Cities />
      <Search />
      <CurrentForecast />
      <HourlyForecast />
      <DailyForecast />
    </>
  );
}

export default App;
