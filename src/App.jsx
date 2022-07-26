import { createSignal, createEffect } from 'solid-js';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Getstarted from './pages/Getstarted';
import Login from './pages/Login';
import Trade from './pages/Trade';
import AlmostThere from './pages/AlmostThere';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'solid-app-router';

function App() {
  // usestate for that data
  const [data, setData] = createSignal([]);

  // function for the data fetch
  const getData = async () => {
    try {
      let response = await fetch(
        'https://api.nomics.com/v1/currencies/ticker?key=365ce03265409d09dc1747bf53efeef418417369&ids=BTC,ETH,XRP,USDT,LTC&interval=1d,30d&convert=EUR&per-page=100&page=1'
      );
      let my_data = await response.json();
      console.log(my_data);
      setData(my_data);
    } catch (error) {
      console.log('error in fetching');
    }
  };

  // add an effect after render
  createEffect(async () => {
    await getData();
  }, []);

  return (
    <div class="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard my_data={data} />} />
        <Route path="/getstarted" component={Getstarted} />
        <Route path="/trade" component={Trade} />
        <Route path="/trader" component={Trade} />
        <Route path="/login" component={Login} />
        <Route path="/almostthere" component={AlmostThere} />
      </Routes>
    </div>
  );
}

export default App;
