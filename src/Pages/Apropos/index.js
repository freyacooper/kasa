import Banner from "../../Components/Banner"
import bannerPhoto2 from '../../Assets/banner2.png'
import Dropdown from "../../Components/Dropdown"
import './index.scss'

function Apropos() {
    return (
        <div>
            <Banner bannerPhoto={bannerPhoto2} altTag="Scène de montagne avec une forêt au premier plan"/>
            <div className="dropdown-container">
                <Dropdown header="FIabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <Dropdown header="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown header="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown header="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous ganisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
            
        </div>
    )
}

export default Apropos