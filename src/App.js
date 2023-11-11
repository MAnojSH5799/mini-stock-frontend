import React, { useState } from 'react';
import StockSelector from './component/stockSelector';
import PriceDisplay from './component/priceDisplay.js';
import './style.css';

const stocks = [
  { symbol: 'AAPL' },
  { symbol: 'AAPL'},
    { symbol: 'GOOG'},
    { symbol: 'MSFT'},
    { symbol: 'AMZN'},
    { symbol: 'TSLA'},
    { symbol: 'NFLX'},
    { symbol: 'FB'},
    { symbol: 'NVDA'},
    { symbol: 'BA'},
    { symbol: 'IBM'},
    { symbol: 'CSCO'},
    { symbol: 'INTC'},
    { symbol: 'V'},
    { symbol: 'PYPL'},
    { symbol: 'DIS'},
    { symbol: 'GS'},
    { symbol: 'JPM'},
    { symbol: 'WMT'},
    { symbol: 'KO'},
    { symbol: 'PEP'}
];

function App() {
  const [selectedStock, setSelectedStock] = useState(stocks[0].symbol);

  return (
    <div className="App">
      <h1>Mini Stock Price Tracker</h1>
      <StockSelector stocks={stocks} selectedStock={selectedStock} onSelectStock={setSelectedStock} />
      <PriceDisplay selectedStock={selectedStock} />
    </div>
  );
}

export default App;
