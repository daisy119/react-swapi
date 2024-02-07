import React from 'react'
import { Link } from 'react-router-dom'


// css
import './StarshipsCards.css'



const starshipsCards = (props) => {
  return (  
    <main>
      <h1>Starwar Starships</h1>
      <div id="card-container">
      {props.starships.map(ship =>
          <div className='green-btn' key={ship.name}><Link to={ship.url.replace('https://swapi.dev/api/', '')}>{ship.name}</Link>
          
          </div>
        )
      }
      </div>
    </main>
  );
}
 
export default starshipsCards;