import './App.css';
import { useState } from 'react';

function App () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if(count>0) {
      setCount(count - 1);
    } 
  }

  function resetCount() {
    document.location.reload();
    setCount(0);
  }
  return(
    <div className='App'>
    <div className='container'>
    <i className='fa-solid fa-rotate-right' onClick={resetCount}></i>
    <div className='upper-part'>
    <h1 className='count'>{count}</h1>
    </div>
    <div className='lower-part'>
    <button className='plus' onClick={decrement}><i className='fa-solid fa-minus'></i></button>
    <button className='plus' onClick={increment}><i className='fa-solid fa-minus'></i></button>
    </div>
    </div>
    </div>
  );
}

export default App;