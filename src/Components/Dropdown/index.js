import { useState } from 'react'
import arrowOpen from '../../Assets/dropdown-open.png'
import './index.scss'

function Dropdown({content, header}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <div className='dropdown'>
            <div className='dropdown-header'>
                <h3>{header}</h3>
                <img 
                    alt="" 
                    src={arrowOpen} 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    className={ isDropdownOpen ? 'rotate' : ''}/>
            </div>
            <div className={ isDropdownOpen ? 'dropdown-content' : 'dropdown-content dropdown-closed'}>
                    
                    {content instanceof Array ? (
                        <ul>
                        {content.map((listElem) => (
                        <li>{listElem}</li>
                        ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                    
            </div>
        </div>
    )
}

export default Dropdown