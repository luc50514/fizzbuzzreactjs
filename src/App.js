import './App.css';
import { useState } from 'react';
import Fizzbuzz from './Fizzbuzz';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      <header className="App-header">
            Fizz Buzz
      </header>
      <div className='Fizzbuzz'>
        <div>Search:
          <input id="search" title='search' type="input" onChange={handleChange}></input>
        </div>
        <div>Answer:
          <input id="answer" title='answer' type="input" readOnly={true} value={message}/>
        </div>
      </div>
    </div>
  );
  function handleChange(event){
    setMessage(Fizzbuzz(event.target.value));
  };
}



export default App;
