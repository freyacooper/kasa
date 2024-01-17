import { useState } from 'react'
import arrowClosed from '../../Assets/dropdown-closed.png'
import arrowOpen from '../../Assets/dropdown-open.png'
import './index.scss'

function Dropdown({content, header}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <div className='dropdown'>
            <div className='dropdown-header'>
                <h3>{header}</h3>
                {isDropdownOpen ? (
                    <img alt="" src={arrowOpen} onClick={() => setIsDropdownOpen(false)}/>
                ) : (
                    <img alt="" src={arrowClosed} onClick={() => setIsDropdownOpen(true)}/>
                )}
            </div>
            {isDropdownOpen ? (
                <div className='dropdown-content'>
                    {content instanceof Array ? (
                        content.map((listElem) => (
                        <li>{listElem}</li>
                    ))
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default Dropdown