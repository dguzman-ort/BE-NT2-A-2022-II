import './App.css';
import { useState } from 'react';
import dataMatrix from "./matrix";


function App() {

  const [matrix] = useState(dataMatrix)

  return (
    <div className="App">
      <header className="App-header">

        <div className='game-info status'>
          Turno X
        </div>
        <div className='board-row'>
            <ol>
              <ul className='square'>X</ul>
              <ul className='square'>X</ul>
              <ul className='square'>0</ul>
            </ol>
            <ol>
              <ul className='square'>O</ul>
              <ul className='square'>X</ul>
              <ul className='square'>0</ul>
            </ol>
            <ol>
              <ul className='square'>0</ul>
              <ul className='square'>0</ul>
              <ul className='square'>X</ul>
            </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
