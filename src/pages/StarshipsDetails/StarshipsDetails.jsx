//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//services
import {getStarshipId} from '../../services/sw-api'

// css
import './starshipsDetails.css'

const StarshipsDetails = () => {

  const [starshipsDetails, setstarshipsDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await getStarshipId(starshipId)
      setstarshipsDetails(starshipsData)
    }
    fetchStarships()
  }, [starshipId])

  if (!starshipsDetails.name) 
  return <h1>Loading details ...</h1>

  return ( 
    <div className='green-box'>
      <h2>NAME: {starshipsDetails.name}</h2>
      <h2>MODEL: {starshipsDetails.model}</h2>
      <Link to='/'><h2>Return</h2></Link>  
    </div>
   );
}
 
export default StarshipsDetails;