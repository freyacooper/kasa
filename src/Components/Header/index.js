import { Link } from 'react-router-dom'
import Logo from '../../Assets/kasalogo.svg'
import './index.scss'


function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='Kasa logo'/>
            <div>
                <Link to="/">Acceuil</Link>
                <Link to="/a-propos">A propos</Link>
            </div>
            
        </div>
    )
}

export default Header