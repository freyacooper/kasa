import './index.scss'

function Banner({bannerPhoto, tagLine, altTag}) {
    return (
        <div className="banner">
            <img src={bannerPhoto} alt={altTag}/>
            <div>
                <p>{tagLine}</p>
            </div>
            
        </div>
    )
}

export default Banner