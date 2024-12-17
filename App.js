import './App.css';
import * as React from 'react';

function App() {
    const [bill, setBill] = React.useState(100);
    const [percent, setPercent] = React.useState(0.20);
    const [tipAmount, setTipAmount] = React.useState(0);

    function calcBill() {
      setTipAmount(bill * percent)
    };

    return (
      <div id="container">
        <h1>Tip Calculator</h1><br />
        <label>Bill Amount: $</label>
        <input type="number" name="bill" value={bill} onChange={(e)=>{setBill(e.target.value)}} /><br />
        <label>Tip Percent: %</label>
        <input type="number" name="percent" value= {percent * 100} onChange={(e)=>{setPercent(e.target.value / 100)}}></input>
        <button onClick={calcBill}>Calculate</button>
        <label>Tip Amount:</label>
        <input type="number" id="tipAmount" value={tipAmount}/>
      </div>
  );
}

export default App;