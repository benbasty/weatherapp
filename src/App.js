import './App.css';
import Cities from '../src/components/cities/Cities';
import Search from '../src/components/search/Search';
import CurrentForecast from '../src/components/forecast/Current/CurrentForecast';

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
