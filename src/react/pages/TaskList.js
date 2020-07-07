import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonFab, 
  IonFabButton, 
  IonIcon 
} from '@ionic/react';
import { add } from 'ionicons/icons';
import Task from '../components/Task';
import './TaskList.css';

class TaskList extends React.Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>First Task List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <Task name="Test Task" description="this is a test" daysLeft="5 Days"/>
            <Task name="Test Task2" description="yep" daysLeft="2 Days"/>
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

export default TaskList;
