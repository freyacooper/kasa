import Logo from '../../Assets/kasalogo.svg'
import './index.scss'

function Footer() {
    return (
        <div className='footer'>
            <img src={Logo} alt='Kasa logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer