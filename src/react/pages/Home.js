import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonCheckbox, IonBadge, IonList, IonLabel, IonNote, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h1>Test Task</h1>
                <IonNote>this is a test</IonNote>
              </IonLabel>
              <IonBadge color="success" slot="end">
                5 Days
              </IonBadge>
            </IonItem>
          </IonList>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => this.props.history.push('/new')} >
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
};

export default Home;
