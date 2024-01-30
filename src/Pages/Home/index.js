import { logementList } from '../../Data/logementList'
import Banner from '../../Components/Banner/index'
import bannerPhoto1 from '../../Assets/banner1.png';
import './index.scss'
import Card from '../../Components/Card';

function Home() {
 const bannerPhotoSrc = bannerPhoto1

  return (
    <div>
      <Banner bannerPhoto={bannerPhotoSrc} tagLine="Chez vous, partout et ailleurs" altTag="Une forêt au sommet d'une falaise au bord de la mer"/>
      <div className='card-container-bg'>
        <div className='card-container'>
          {logementList.map(({id, title, cover}) => (
            <Card id={id} title={title} cover={cover} key={id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
