import { Route } from "workbox-routing";
import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonThumbnail,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  add,
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from "ionicons/icons";

import "./EventTab.css";



const EventTab: React.FC = () => {
  let num = 5;

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRow>
            <IonCol>
              <IonSearchbar
                color="light"
                showClearButton="always"
                placeholder="Search"
              ></IonSearchbar>
            </IonCol>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonSelect interface="popover" placeholder="Select">
                    <IonSelectOption value="nearest">Nearest</IonSelectOption>
                    <IonSelectOption value="date">Date</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonCard class="card">
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle >Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle>Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle>Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle>Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle>Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
              </IonCol>
              <IonCol size="9">
                <IonCardContent>
                  <IonCardTitle>Card Title</IonCardTitle>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>f
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton href="ProfileTab">
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default EventTab;
