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
        "daysLeft" : "2020-08-17T03:24:00"
      },
      {
        "name" : "Test Task2",
        "description" : "yep",
        "daysLeft" : "2020-08-20T03:24:00"
      },
      {
        "name" : "expired Task2",
        "description" : "oh no",
        "daysLeft" : "2019-08-20T03:24:00"
      }
    ];

    this.setState({
      isLoaded: true,
      tasks: data
    });
  }

  calculateDaysLeft(date) {
    let now = new Date();
    let dueDate = new Date(date);
    let difference = dueDate.getTime() - now.getTime(); 
    if(difference > 0) {
      return Math.floor(difference / (1000 * 3600 * 24)) + " Days Left"; 
    }
    return "Expired";
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
                    daysLeft={this.calculateDaysLeft(task.daysLeft)}/>)}
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
