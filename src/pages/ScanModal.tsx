import React from "react";
import "./Settings.css";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { scanOutline, stopCircleOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

const ScanModal: React.FC = () => {
  const [err, setErr] = useState<string>();
  const [hideBg, setHideBg] = useState("");

  const history = useHistory();

  /*
  const routeChange = () => {
    history.push("/Portfolio");
  };
  */

  const startScan = async () => {
    console.log("Started the scan");
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    setHideBg("hideBg");

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    stopScan();

    // if the result has content
    if (result.hasContent) {
      console.log(result.content);
      present(result.content!, [{ text: "OK", role: "cancel" }]);
      // log the raw scanned content
    }
  };

  const checkPermission = async () => {
    console.log("Checked for permission");
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        startScan();
        return true;
      }

      return false;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErr(error.message);
        console.log(error.message);
      }
    }
  };

  const stopScan = () => {
    console.log("Stopped scan");
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setHideBg("");

  };

  const [present] = useIonAlert();

  useEffect(() => { 
    
    console.log("ran useEffect");

    checkPermission();
  }, []);

  if (err) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>QRScanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonText color="danger">{err}</IonText>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QRScanner</IonTitle>
          <IonButtons slot="end">
            <IonButton color="danger" hidden={!hideBg} onClick={stopScan}>
              <IonIcon icon={stopCircleOutline} slot="start" />
              Stop Scan
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={hideBg}>
        <div hidden={!hideBg} className="scan-box" />
      </IonContent>
    </IonPage>
  );
};

export default ScanModal;
