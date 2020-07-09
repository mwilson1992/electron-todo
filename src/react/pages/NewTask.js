import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItemDivider,
    IonItem,
    IonInput,
    IonList,
    IonButton,
    IonFooter
  } from '@ionic/react';
  
  class NewTask extends React.Component {
    render() {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/taskList" />
              </IonButtons>
              <IonTitle style={{width: "100%", position: "absolute", left: "0", height: "0"}}>Create New Task</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItemDivider>Name:</IonItemDivider>
              <IonItem>
                <IonInput value="" placeholder="Enter Input"></IonInput>
              </IonItem>

              <IonItemDivider>Description:</IonItemDivider>
              <IonItem>
                <IonInput value="" placeholder="Enter Input" clearInput></IonInput>
              </IonItem>

              <IonItemDivider>Days Left</IonItemDivider>
              <IonItem>
                <IonInput value="" placeholder="Enter Input" clearInput></IonInput>
              </IonItem>
            </IonList>
          </IonContent>

          <IonFooter>
            <IonToolbar>
              <IonButton expand="block" type="submit" class="ion-no-margin">Create task</IonButton>
            </IonToolbar>
          </IonFooter>
        </IonPage>
      )
    };
  };
  export default NewTask;