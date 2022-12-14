import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
      </IonContent> 
    </IonPage>
  );
};

export default Settings;
