import { useParams } from "react-router-dom"
import Carousel from "../../Components/Carousel"
import { logementList } from '../../Data/logementList'
import star from '../../Assets/filled-star.png'
import emptyStar from '../../Assets/empty-star.png'
import './index.scss'
import Dropdown from "../../Components/Dropdown"

function Logement() {
    const { id } = useParams()
    const listing = logementList.find(logement => logement.id === id)
    const range = [1, 2, 3, 4, 5]
    return (
        <div>
            <Carousel pictures={listing.pictures} />
            <div className="listing-info-container">
                <div className="listing-info">
                    <h1>{listing.title}</h1>
                    <h2>{listing.location}</h2>
                    <div className="tags-container">
                        {(listing.tags).map((tag) => (
                            <div className="tags">{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="host-info">
                    <div className="host">
                        <h2>{listing.host.name}</h2>
                        <img src={listing.host.picture} alt=""/>
                    </div>
                    <div className="rating">
                        {range.map((rangeElem) => (
                            listing.rating >= rangeElem ? (
                                <span><img alt="" src={star}/></span>
                            ) : (
                                <span><img alt="" src={emptyStar}/></span>)
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