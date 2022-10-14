import Place from './Place'
import './Place.css'
const Places = ({places}) =>{

    return( 
        <div className='grid'>
        {places.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </div>
    )
}

export default Places;



