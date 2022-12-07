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
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
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
  scanOutline,
  stopCircleOutline,
} from "ionicons/icons";
import SettingsTab from "./pages/SettingsTab";
import ProfileTab from "./pages/ProfileTab";
import EventTab from "./pages/EventTab";
import PortfolioTab from "./pages/PortfolioTab";

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
import { useEffect, useState } from "react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import ScanModal from './pages/ScanModal';

setupIonicReact();

const App: React.FC = () => {
  const [hideBg, setHideBg] = useState("");
  const [present] = useIonAlert();
  const [showModal, setShowModal] = useState(false);

  const stopScan = () => {
    BarcodeScanner.showBackground()
    BarcodeScanner.stopScan()
    setHideBg("")
  }

  return (
    <IonApp>
      <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QRScanner</IonTitle>
          <IonButtons slot="end">
            <IonButton 
              color="danger"
              onClick={() => {
                 stopScan();
                setShowModal(false);
              }
            }
            >
              <IonIcon icon={stopCircleOutline} slot="start" />
              Stop Scan
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
        <ScanModal></ScanModal>
      </IonModal>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/SettingsTab">
              <SettingsTab />
            </Route>
            <Route exact path="/EventTab">
              <EventTab />
            </Route>
            <Route path="/PortfolioTab">
              <PortfolioTab />
            </Route>
            <Route exact path="/ProfileTab">
              <ProfileTab />
            </Route>
            <Route exact path="/ScanModal">
              <ScanModal />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="SettingsTab" href="/SettingsTab">
              <IonIcon icon={settings} />
            </IonTabButton>
            <IonTabButton tab="EventTab" href="/EventTab">
              <IonIcon icon={calendar} />
            </IonTabButton>

            <IonTabButton tab="ScanModal" href="/ScanModal">
              <IonFab>
                <IonFabButton color="medium" size="small">
                  <IonIcon icon={scan} />
                </IonFabButton>
              </IonFab>
            </IonTabButton>
            <IonTabButton tab="PortfolioTab" href="/PortfolioTab">
              <IonIcon icon={ribbon} />
            </IonTabButton>
            <IonTabButton tab="ProfileTab" href="/ProfileTab">
              <IonIcon icon={personCircle} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>

    
  );
};

export default App;
