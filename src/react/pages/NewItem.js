import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  } from '@ionic/react';
  
  class NewItem extends React.Component {
    render() {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/taskList" />
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