import './index.css';
import React, {useState, useEffect} from "react"
import Loader from './loader';
import Tour from './tours';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = 'https://course-api.com/react-tours-project';

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    setLoading(true);

    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setTours(result);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return(
      <main className='loadingMain'>
        <Loader />
      </main>
    )
  }
  if(tours.length===0){
    return(
      <main>
        <h1>No More Tours</h1>
        <button className='refreshBtn' onClick={fetchTours}>Refresh</button>
      </main>
    )
  }
    return (
      <>
        <main className='toursMain'>
          <h1>Tours</h1>
          <Tour tours = {tours} removeTour={removeTour} />
        </main>
      </>
    );
}

export default App;
