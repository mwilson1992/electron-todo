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
    let data = [
      {
        "name" : "Test Task",
        "description" : "this is a test",
        "daysLeft" : "5 Days"
      },
      {
        "name" : "Test Task2",
        "description" : "yep",
        "daysLeft" : "2 Days"
      }
    ];

    let tasks = data.map((task) => 
      <Task name={task.name} description={task.description} daysLeft={task.daysLeft}/>
    );

    tasks.push(<Task name="test" description="desc" daysLeft="1 Day"/>)

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>First Task List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            { tasks }
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
