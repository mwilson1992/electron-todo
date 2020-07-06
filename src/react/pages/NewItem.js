import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  } from '@ionic/react';
  import React from 'react';
  
  class NewItem extends React.Component {
    render() {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/home" />
              </IonButtons>
              <IonTitle>New Item</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent></IonContent>
        </IonPage>
      )
    };
  };
  export default NewItem;