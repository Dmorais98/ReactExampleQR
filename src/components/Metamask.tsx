import './Metamask.css';
import React, { useEffect, useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonAlert,
  } from "@ionic/react";
  import { Browser } from '@capacitor/browser';

  declare global {
    interface Window {
      ethereum?: MetaMaskInpageProvider;
    }
  }

const Metamask = () => {
    const [errorMessage, setErrorMessage] = useState("");
  const [walletAddress, setwalletAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [presentAlert] = useIonAlert();
  const testAccount = '0x4765273c477c2dc484da4f1984639e943adccfeb'
  const myaccount = '0xA4ca29Ac439ed4e02F695Dc25a16317B569c6EC8'
  const connectWallet = async () => {
    async function openBrowserForDownload(){
      await Browser.open({ url: 'https://metamask.io/download/' });
    }

    
    
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setwalletAddress(String(accounts))
    } else {
      
      presentAlert({
        header: "Alert",
        subHeader: "Metamask not installed.",
        message: "Please Install the Metamask application to connect to your wallet.",
        buttons: ["OK",  {
            text: 'Download',
            role: 'Download',
            cssClass: '',
            handler: () => {
              openBrowserForDownload();
            }
          },],
      });
    }
  };

  const getNFTData = async () => {
    if(!walletAddress) return;

    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${myaccount}`)
      
    const data = await response.json();
    console.log(data)
  }


  useEffect(()=> {
    getNFTData()
  }, [walletAddress]);
  return (
        <IonGrid>
          <IonRow>
            <IonCol className="center" size="12" size-md="4" size-lg="2">
              <IonButton onClick={connectWallet}>{connButtonText}</IonButton>
            </IonCol>
            <IonCol className="center" size="12" size-md="4" size-lg="2">
              <p>Address: {walletAddress} </p>
            </IonCol>
            <IonCol className="center" size="12" size-md="4" size-lg="2">
              <p>Balance: {userBalance} </p>
            </IonCol>
            {errorMessage}
          </IonRow>
        </IonGrid>
  );
};

export default Metamask;
