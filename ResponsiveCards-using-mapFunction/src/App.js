import './index.css'

function App() {
  const cards = [
    {
      id: 1,
      title: "Card-1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi aspernatur adipisci. Reprehenderit a eaque totam, sed sapiente sequi?"
    },
    {
      id: 2,
      title: "Card-2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi aspernatur adipisci. Reprehenderit a eaque totam, sed sapiente sequi?"
    },
    {
      id: 3,
      title: "Card-3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi aspernatur adipisci. Reprehenderit a eaque totam, sed sapiente sequi?"
    },
    {
      id: 4,
      title: "Card-4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi aspernatur adipisci. Reprehenderit a eaque totam, sed sapiente sequi?"
    },
    {
      id: 5,
      title: "Card-5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi aspernatur adipisci. Reprehenderit a eaque totam, sed sapiente sequi?"
    }
  ];

  return (
    <div className="App">
        <div className="container">
          <h1>Responsive Cards using Map function</h1>
          <div className="center">
          <div className="cards">
          {
            cards.map((card)=>(
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="btn">Read More</button>
            </div>
            ))
          }
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
