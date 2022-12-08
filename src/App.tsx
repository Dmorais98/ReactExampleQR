import { Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  settings,
  calendar,
  qrCode,
  ribbon,
  personCircle,
  scan,
  stopCircleOutline,
} from "ionicons/icons";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Portfolio from "./pages/Portfolio";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import ScanModal from './pages/ScanModal';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
      <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/Settings">
              <Settings />
            </Route>
            <Route exact path="/Events">
              <Events />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Portfolio />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">

            <IonTabButton tab="Events" href="/Events">
              <IonIcon icon={calendar} />
            </IonTabButton>
            <IonTabButton tab="Portfolio" href="/Portfolio">
              <IonIcon icon={ribbon} />
            </IonTabButton>
            <IonTabButton tab="Profile" href="/Profile">
              <IonIcon icon={personCircle} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>

    
  );
};

export default App;
