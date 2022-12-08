import React from "react";
import "./Portfolio.css";
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
import { scanOutline, stopCircleOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { BsFilterCircle}  from 'react-icons/bs'
import PortefolioData from "../dados/PortefolioData";
import { NavLink } from "react-router-dom";

const Portfolio: React.FC = () => {
  const [err, setErr] = useState<string>();
  const [hideBg, setHideBg] = useState("");
  const [scanBtn, setScanBtn] = useState("Scan POAP");
  const [isScanning, setIsScanning] = useState(false);

  const startScan = async () => {
    console.log("started startScan")
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    setHideBg("hideBg");
    setScanBtn("Stop Scan");
    setIsScanning(true);
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    stopScan();

    // if the result has content
    if (result.hasContent) {
      console.log(result.content);
      present(result.content!, [{ text: "OK", role: "cancel" }]);
      // log the raw scanned content
    }
  };

  const stopScan = () => {
    console.log("started stopScan")
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setScanBtn("Scan POAP");
    setIsScanning(false);
    setHideBg("");
  };

  const [present] = useIonAlert();

  const checkPermission = async () => {
    console.log("started checkPermission")
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        console.log("started scan")
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

  if (err) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="toolbar">
            <IonTitle>My POAP's</IonTitle>

            <IonButton className="scan" slot="end" fill="clear">
              {scanBtn}
              <IonIcon icon={stopCircleOutline} slot="end"></IonIcon>
            </IonButton>
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
        <IonToolbar className="toolbar">
          <IonTitle>My POAP's</IonTitle>

          {isScanning ? (
          <IonButton
            className="scan"
            slot="end"
            fill="clear"
            onClick={stopScan}>{scanBtn}<IonIcon icon={stopCircleOutline} slot="end"></IonIcon></IonButton>
          )
          : 
          (
            <IonButton
            className="scan"
            slot="end"
            fill="clear"
            onClick={checkPermission}>{scanBtn}<IonIcon icon={scanOutline} slot="end"></IonIcon></IonButton>
          )
          }
        </IonToolbar>
      </IonHeader>
      <IonContent className={hideBg} fullscreen>
        <div hidden={!hideBg} className="scan-box" />
        <div className='work'>
          <div className='right'>
            <BsFilterCircle size={30} style={{ color: "#1D366F" }}></BsFilterCircle>
          </div>
          <div className='poap-container'>
            {PortefolioData.map((val) => {
              return (
                <>
                  <div key={val.id} className='container-grid'>
                    <div key={val.imgsrc} className='poap-card'>
                      <img src={val.imgsrc} alt='MasterChef'></img>
                    </div>
                    <div  className='poap-title' >
                      <p><NavLink to="url.com" key={val.title} className='title'>{val.title}</NavLink></p>
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

export default Portfolio;
