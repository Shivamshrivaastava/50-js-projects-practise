import data from './data';
import  {useState} from 'react';
import List from './List';
import "./index.css"

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className='App'>
      <h1>Birthday remainder</h1>
      <div className="container">
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} />
        <button className="allClear" onClick={() => setPeople([])}>All Clear</button>
      </div>
    </div>
  );
}

export default App;