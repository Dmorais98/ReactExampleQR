import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './PortfolioTab.css';

const ProfileTab: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
      </IonContent> 
    </IonPage>
  );
};

export default ProfileTab;
