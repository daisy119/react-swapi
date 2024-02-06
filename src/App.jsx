// npm modules
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'

//pages
import StarshipsCards from "./pages/StarshipsCards/StarshipsCards";

// services
import *  as swService from './services/sw-api'

// css
import './App.css'

const App = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async() =>{
      const data =await swService.getAllStarships()
      // console.log("response from api:", data)
      setStarships(data.results)
    }
    fetchStarships()
  },[])

  return ( 
    <main>
    <Routes>
    <Route path='/' element={
      <StarshipsCards starships={starships} />
      } />
    </Routes>
    </main>
  );
}
export default App;