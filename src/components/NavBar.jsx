//npm modules
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/"><h1>Starwars Starships</h1></Link>
      </nav>
    </header>
  )
}

export default NavBar