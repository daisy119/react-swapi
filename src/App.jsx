// npm modules
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'

// components
import NavBar from './components/NavBar'

//pages
import StarshipsCards from "./pages/StarshipsCards/StarshipsCards";
import StarshipsDetails from "./pages/StarshipsDetails/StarshipsDetails"

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

  if(!starships.length) return <h1>Loading…</h1>

  return ( 
    <main>
    <NavBar />
    <Routes>
    <Route path='/' element={
      <StarshipsCards starships={starships} />
      } />
      <Route path='/starships/:starshipId' element={
      <StarshipsDetails />} />
    </Routes>
    </main>
  );
}
export default App;