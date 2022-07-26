import { createSignal } from 'solid-js';
import '../styles/getstarted.css';
import '../styles/trade.css';

const Trade = () => {
  const [state, setstate] = createSignal('Buy');
  const [currency] = createSignal('');
  const [quantity, setquantity] = createSignal('');

  // other component
  const [cointobuy, setcointobuy] = createSignal('Bitcoin');

  const rebounce = () => {
    setstate('Buy');
    console.log(state());
  };
  const reboun = (e) => {
    setstate('Sell');
    console.log(state());
  };
  console.log(cointobuy(), state());
  if (state() === 'Buy') {
    return (
      <section class="getstartedd">
        <div class="getstartedd_div">
          <p>Buy/Sell Instantly {state()}</p>
          <div class="busandind">
            <button class="individual" id="individual" onClick={rebounce}>
              Buy
            </button>
            <button class="business" id="business" onClick={reboun}>
              Sell
            </button>
          </div>
          <form class="getstartedform">
            <input type="hidden" value={state()} />
            <select
              value={cointobuy()}
              onInput={(e) => setcointobuy(e.target.value)}
              class="cointobuy"
            >
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Litecoin">Litecoin</option>
              <option value="Usdt">Usdt</option>
            </select>
            <select
              value={currency()}
              onInput={(e) => setcointobuy(e.target.value)}
              class="cointobuy"
            >
              <option value="NGN">Naira</option>
              <option value="USD">Dollars</option>
              <option value="EUR">Euros</option>
            </select>
            <input
              class="amount"
              placeholder="amount"
              type="text"
              value={quantity()}
              onInput={(e) => setquantity(e.target.value)}
            />
            <button type="submit" class="getstartedform_submit">
              Buy
            </button>
          </form>
        </div>
      </section>
    );
  } else if (state() === 'Sell') {
    return (
      <section class="getstartedd">
        <div class="getstartedd_div">
          <p>Buy/Sell Instatntly {state()}</p>
          <div class="busandind">
            <button class="individualtwo" id="individual" onClick={rebounce}>
              Buy
            </button>
            <button class="businesstwo" id="business" onClick={reboun}>
              Sell
            </button>
          </div>
          <form class="getstartedform">
            <input type="hidden" value={state()} />
            <select
              value={cointobuy()}
              onInput={(e) => setcointobuy(e.target.value)}
              class="cointobuy"
            >
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Litecoin">Litecoin</option>
              <option value="Usdt">Usdt</option>
            </select>
            <select
              value={currency()}
              onInput={(e) => setcointobuy(e.target.value)}
              class="cointobuy"
            >
              <option value="NGN">Naira</option>
              <option value="USD">Dollars</option>
              <option value="EUR">Euros</option>
            </select>
            <input
              class="amount"
              placeholder="amount"
              type="text"
              value={quantity()}
              onInput={(e) => setquantity(e.target.value)}
            />
            <button type="submit" class="getstartedform_submit">
              Sell
            </button>
          </form>
        </div>
      </section>
    );
  }
};

export default Trade;
