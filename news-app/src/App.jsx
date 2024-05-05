import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"


function App() {
  const[Category,setCategory]= useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard Category={Category}/>
    </div>
  )
}

export default App