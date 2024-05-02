import StartGame from "./components/StartGame";
import StartPlay from "./components/StartPlay";
import { useState } from "react";

const App = () => {
  const [play, setPlay] = useState(false);

  function toggle() {
    setPlay(!play);
  }
  console.log(play);

  return <>{play ? <StartPlay /> : <StartGame toggle={toggle} />}</>;
};

export default App;
