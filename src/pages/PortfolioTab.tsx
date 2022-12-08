import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import './PortfolioTab.css';
import PortefolioData from '../dados/PortefolioData';
import {BsFilterCircle} from 'react-icons/bs'

const PortfolioTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Poap Collection</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='work'>
          <div className='right'>
            <BsFilterCircle size={30} style={{ color: "#1D366F" }}></BsFilterCircle>
          </div>
          <div className='poap-container'>
            {PortefolioData.map((val, ind) => {
              return (
                <>
                  <div className='container-grid'>
                    <div className='poap-card' key={ind} >
                      <img src={val.imgsrc} alt='MasterChef'></img>
                    </div>
                    <div className='poap-title' key={ind}>
                      <p><NavLink to="url.com" className='title'>{val.title}</NavLink></p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PortfolioTab;
