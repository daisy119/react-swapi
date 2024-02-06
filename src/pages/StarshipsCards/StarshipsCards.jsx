import React from 'react'

// css
import './StarshipsCards.css'

const starshipsCards = (props) => {
  return (  
    <main>
      <h1>Starwar Starships</h1>
      <div id="card-container">
      {
        props.starships.map( ship =>
          <div className='green-btn'>{ship.name}</div>
        )
      }
      </div>
    </main>
  );
}
 
export default starshipsCards;