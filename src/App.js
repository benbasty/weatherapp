import './App.css';
import Cities from './assets/components/cities/Cities';
import Search from './assets/components/search/Search';
import CurrentForecast from './assets/components/forecast/Current/CurrentForecast';

function App() {
  return (
    <>
      <Cities />
      <Search />
      <CurrentForecast />
    </>
  );
}

export default App;
