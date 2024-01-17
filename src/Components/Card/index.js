import { Link } from 'react-router-dom'
import './index.scss'

function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`}> 
            <div className='card'>
                <img alt="" src={cover}/>
                <div className='card-overlay'></div>
                <p className='card-title'>{title}</p>
            </div>
        </Link>
        
    )
}

export default Card