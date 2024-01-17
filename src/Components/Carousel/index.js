import './index.scss'
import arrowRight from '../../Assets/right-arrow.png'
import arrowLeft from '../../Assets/left-arrow.png'
import { useState } from 'react'

function Carousel({pictures}) {

    const [photoIndice, setPhotoIndice] = useState(0)

    return (
        <div className="carousel">
            <img className='carousel-photo' alt='' src={pictures[photoIndice]}/>
                {pictures.length > 1 ? (
                <>
                <div className='arrows'>
                    <img alt='' src={arrowLeft} onClick={() => (
                        photoIndice > 0 ? (
                            setPhotoIndice(photoIndice-1)
                        ) : (
                            setPhotoIndice((pictures.length)-1)
                        )
                    )}/>
                    <img alt='' src={arrowRight} onClick={() => (
                        photoIndice < (pictures.length)-1 ? (
                            setPhotoIndice(photoIndice+1)
                        ) : (
                            setPhotoIndice(0)
                        )
                    )}/>  
                </div>
                <p>{`${(photoIndice)+1}/${pictures.length}`}</p>
                </>
            ) : null}
            
        </div>
    )
}

export default Carousel