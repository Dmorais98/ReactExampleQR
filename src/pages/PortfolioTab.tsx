import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './PortfolioTab.css';

const PortfolioTab: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
      </IonContent> 
    </IonPage>
  );
};

export default PortfolioTab;
