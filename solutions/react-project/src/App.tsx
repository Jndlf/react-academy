import React, { useState } from 'react';
import logo from './nterra.svg';
import './App.css';
import CustomButton from './components/CustomButton';

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="nterra" />
        <p>
          This the React nterra Academy default page.
        </p>
        <CustomButton buttonText={'Klick auf diesen Counter: ' + counter} myOnClick={() => setCounter(counter + 1)}></CustomButton>
      </header>
    </div>
  );
}

export default App;
