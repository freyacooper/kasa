import Banner from "../../Components/Banner"
import bannerPhoto2 from '../../Assets/banner2.png'
import Dropdown from "../../Components/Dropdown"
import './index.scss'

function Apropos() {
    const bannerPhotoSrc = bannerPhoto2
    return (
        <div>
            <Banner bannerPhoto={bannerPhotoSrc} altTag="Scène de montagne avec une forêt au premier plan"/>
            <div className="dropdown-container">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
            
        </div>
    )
}

export default Apropos