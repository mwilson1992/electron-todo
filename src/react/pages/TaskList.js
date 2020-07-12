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
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tasks: []
    };
  }

  componentDidMount() {
    // fetch("https://api.example.com/tasks")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         tasks: result.tasks
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )

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

    this.setState({
      isLoaded: true,
      tasks: data
    });
  }

  render() {
    const { error, isLoaded, tasks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>First Task List</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              { tasks.map((task) => 
                  <Task 
                    name={task.name} 
                    description={task.description} 
                    daysLeft={task.daysLeft}/>)}
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
};

export default TaskList;
