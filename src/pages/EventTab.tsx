import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './EventTab.css';

const EventTab: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <h3>hey</h3>
      </IonContent> 
    </IonPage>
  );
};

export default EventTab;
