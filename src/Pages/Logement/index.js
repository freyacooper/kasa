import { useParams } from "react-router-dom"
import Carousel from "../../Components/Carousel"
import { logementList } from '../../Data/logementList'
import star from '../../Assets/filled-star.png'
import emptyStar from '../../Assets/empty-star.png'
import './index.scss'
import Dropdown from "../../Components/Dropdown"
import { Navigate } from 'react-router-dom'
import Error from "../Error"

function Logement() {
    const { id } = useParams()
    const range = [1, 2, 3, 4, 5]
    const listing = logementList.find(logement => logement.id === id)
    
    if (listing === undefined)
        return (
            <Navigate to="/Error" element={<Error />}/>
    )

    return (
        <div>
            <Carousel pictures={listing.pictures} />
            <div className="listing-info-container">
                <div className="listing-info">
                    <h1>{listing.title}</h1>
                    <h2>{listing.location}</h2>
                    <div className="tags-container">
                        {(listing.tags).map((tag, index) => (
                            <div className="tags" key={`${index} + tag + ${id}`}>{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="host-info">
                    <div className="host">
                        <h2>{listing.host.name}</h2>
                        <img src={listing.host.picture} alt=""/>
                    </div>
                    <div className="rating">
                        {range.map((rangeElem, index) => (
                            listing.rating >= rangeElem ? (
                                <div key={`${index} + star`}><img alt="" src={star}/></div>
                            ) : (
                                <div key={`${index} + emptystar`}><img alt="" src={emptyStar}/></div>)
                        ))}
                    </div>
                </div> 
            </div>
            <div className="dropdown-cont">
                <Dropdown content={listing.description} header="Description"/>
                <Dropdown content={listing.equipments} header="Équipements"/>
            </div>
        </div>
    )
}
export default Logement