// npm modules
import { Route, Routes } from "react-router-dom"

//pages
import StarshipsCards from "./pages/StarshipsCards/StarshipsCards";

// css
import './App.css'

const App = () => {
  return ( 
    <>
    <Routes>
    <Route path='/' element={<StarshipsCards />} />
    </Routes>
    </>
  );
}
export default App;